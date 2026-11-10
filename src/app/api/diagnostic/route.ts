import { NextRequest, NextResponse } from 'next/server';
import { corsHeaders, handleCorsOptions } from '@/lib/cors';
import { computeProximity } from '@/lib/telemetry/proximity';
import { runSimulation } from '@/lib/telemetry/rag-sim';
import { extractEntityGraph } from '@/lib/telemetry/graph';
import { fetchCompetitorsViaSearch } from '@/lib/telemetry/search';
import { crawlUrl } from '@/lib/telemetry/crawl';
import { fetchPerformanceMetrics } from '@/lib/telemetry/technical';
import { validateGraphWithWikidata } from '@/lib/telemetry/wikidata';
import { TelemetryResult } from '@/lib/telemetry/types';
import { calculateReadinessScore } from '@/lib/telemetry/scoring';
import { getTelemetryCache, setTelemetryCache } from '@/lib/telemetry/cache';
import { extractFeatures } from '@/lib/telemetry/features';
import { generateInsightEngineResult } from '@/lib/telemetry/insight-engine';
import { classifyEntityState } from '@/lib/telemetry/entityClassifier';

// Allow maximum duration (60s on Vercel Hobby) for telemetry processing
export const maxDuration = 60;

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  const diagnosticAgentCard = {
    $schema: "https://a2a-protocol.org/latest/schemas/agent-card.json",
    name: "aeobility-diagnostic-agent",
    version: "1.0.0",
    description: "AEObility AI Search Visibility and Entity Density Diagnostic Audit Engine specialising in AEO readiness assessments.",
    url: "https://aeobility.com.au/api/diagnostic",
    capabilities: {
      streaming: false,
      pushNotifications: false,
      extendedAgentCard: false,
      features: [
        "telemetry-auditing",
        "entity-density-scoring",
        "schema-validation",
        "rag-simulation"
      ]
    },
    defaultInputModes: [
      "application/json"
    ],
    defaultOutputModes: [
      "application/json"
    ],
    supportedInterfaces: [
      {
        url: "https://aeobility.com.au/api/diagnostic",
        protocol: "rest",
        protocolBinding: "HTTP",
        protocolVersion: "1.0",
        methods: ["POST", "GET"],
        description: "AI visibility and entity density diagnostic audit engine."
      }
    ],
    skills: [
      {
        id: "aeo-audit",
        name: "AEO Visibility Audit",
        description: "Executes a 5-dimensional audit evaluating entity density, structured schema coverage, vector proximity, and RAG survival probability.",
        tags: ["aeo", "audit", "ai-visibility", "rag-simulation", "schema-validation"],
        examples: [
          "Audit my brand's AEO visibility",
          "Test entity readiness for generative search engines"
        ]
      }
    ],
    usage: "Send POST payload { intent: string, url?: string, clientText?: string } to run a full diagnostic audit."
  };

  return NextResponse.json(diagnosticAgentCard, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { intent, url, clientText: fallbackText } = body;

    if (!intent || (!url && !fallbackText)) {
      return NextResponse.json(
        { error: 'Missing core parameters: "intent" and either "url" or "clientText" are required.' },
        { status: 400 }
      );
    }

    // 0. Check Caching Layer (V3 Version Aware)
    const cachedResult = await getTelemetryCache(url || '', intent);
    if (cachedResult) {
      return NextResponse.json(cachedResult);
    }

    // 1. Kick off Stage 1: Crawl Client, Tech SEO, and find competitors via abstractions
    const [clientCrawl, performance, competitorUrls] = await Promise.all([
      url ? crawlUrl(url) : Promise.resolve({ textContent: fallbackText, technicalSEO: undefined, schemaValidation: undefined, crawlQuality: { score: 0, method: 'Fallback' as const, hydrationRequired: false } }),
      url ? fetchPerformanceMetrics(url) : Promise.resolve(undefined),
      fetchCompetitorsViaSearch(intent)
    ]);

    const clientText = clientCrawl.textContent;

    // 2. Kick off Stage 2: Semantic Analysis & Competitor Crawling
    const compCrawls = await Promise.all(competitorUrls.map(cUrl => crawlUrl(cUrl)));
    const compTexts = compCrawls.map(c => c.textContent);
    
    const [proximityNodes, simulations, triples] = await Promise.all([
      computeProximity(intent, clientText, compTexts),
      runSimulation(intent, clientText),
      extractEntityGraph(clientText)
    ]);

    // 3. Kick off Stage 3: Knowledge Graph Validation (Entity Classification)
    const entityConfidence = await validateGraphWithWikidata(triples);

    // 4. Feature Engineering Layer
    const clientNode = proximityNodes.find(n => n.label === 'Client');
    const compNodes = proximityNodes.filter(n => n.label.startsWith('Competitor'));
    const engineeredFeatures = extractFeatures(clientNode, compNodes, clientCrawl, compCrawls, entityConfidence);

    // 5. Configurable Scoring Engine
    const { readinessScore, explanations } = calculateReadinessScore(
      proximityNodes,
      simulations,
      triples,
      entityConfidence,
      clientCrawl,
      performance,
      engineeredFeatures
    );

    const clientImpressionEstimate = Math.max(1, Math.round((clientNode?.similarity || 0) * 100));
    const compImpressionEstimates = compNodes.map((cn, i) => ({
      url: competitorUrls[i] || `https://competitor-${i + 1}.com.au`,
      impressions: Math.max(1, Math.round((cn.similarity || 0) * 100)),
      isCommercialNode: true,
      hasSchema: true
    }));

    const entityClassification = classifyEntityState({
      entityTopic: intent,
      targetIntentType: 'commercial',
      observedNodes: [
        {
          url: url || 'https://client-site.com.au',
          impressions: clientImpressionEstimate,
          hasSchema: clientCrawl.schemaValidation?.hasValidSchema ?? false,
          hasAtomicBlocks: (clientCrawl.technicalSEO?.headingsCount.h2 ?? 0) >= 2,
          isCommercialNode: true
        },
        ...compImpressionEstimates
      ],
      targetCanonicalUrl: url
    });

    const result: TelemetryResult = {
      clientUrl: url,
      proximityScore: Math.round((clientNode?.similarity || 0) * 100),
      nodes: proximityNodes,
      triples,
      simulations,
      readinessScore,
      explanations,
      technicalSEO: clientCrawl.technicalSEO,
      schemaValidation: clientCrawl.schemaValidation,
      performance,
      entityConfidence,
      engineeredFeatures,
      crawlQuality: clientCrawl.crawlQuality,
      entityClassification
    };

    // 6. Generate Insight Engine Result
    result.insightResult = await generateInsightEngineResult(intent, result, clientText);

    // Save to Cache
    await setTelemetryCache(url || '', intent, result);

    return NextResponse.json(result, { headers: corsHeaders });
  } catch (error: unknown) {
    console.error('Telemetry run error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error running telemetry.', stack: error instanceof Error ? error.stack : undefined },
      { status: 500, headers: corsHeaders }
    );
  }
}
