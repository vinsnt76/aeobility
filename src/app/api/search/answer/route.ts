import { NextRequest, NextResponse } from 'next/server';
import { corsHeaders, handleCorsOptions } from '@/lib/cors';
import { KnowledgeNode, KnowledgeBaseExport, SearchQueryResponse } from '@/lib/search/types';
import { 
  computeUncappedScore, 
  classifyQueryIntent, 
  generateGroundedAnswer,
  generateAmbiguousClarification,
  generateGeneralKnowledgeAnswer,
  classifyCompanion5Intent 
} from '@/lib/search/vectorEngine';
import { toAustralianEnglish } from '@/lib/search/auEnglish';
import knowledgeBaseData from '@/lib/search/knowledgeBase.json';

const rawData = knowledgeBaseData as unknown as KnowledgeBaseExport;
const knowledgeBase: KnowledgeNode[] = Array.isArray(rawData) ? rawData : rawData.nodes;

export async function OPTIONS() {
  return handleCorsOptions();
}

async function processVectorSearch(query: string, offTopicCount: number = 0, routeContext?: string) {
  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required.' },
      { status: 400, headers: corsHeaders }
    );
  }

  // 1. Uncapped ranking similarity calculation & tie-breaker (~1ms)
  let bestMatch: KnowledgeNode | null = null;
  let maxRankScore = -1;
  let maxRawCos = -1;

  for (const node of knowledgeBase) {
    const { rawCos, rankingScore } = computeUncappedScore(query, node);
    if (rankingScore > maxRankScore || (rankingScore === maxRankScore && rawCos > maxRawCos)) {
      maxRankScore = rankingScore;
      maxRawCos = rawCos;
      bestMatch = node;
    }
  }

  // Cap display similarity score between 0 and 1.0 (0% - 100%)
  const similarityScore = Math.max(0, Math.min(1.0, maxRankScore > 0.85 ? 1.0 : maxRankScore));

  // 2. Classify Query Intent
  const resultType = classifyQueryIntent(query, similarityScore, offTopicCount);

  // Case A: Repeat Off-Topic Question -> "AI SEO is all I know."
  if (resultType === 'off_topic_repeat') {
    const response: SearchQueryResponse = {
      answer: "AI SEO is all I know.",
      topMatch: null,
      similarityScore,
      isFallback: true,
      isCaution: false,
      resultType: 'off_topic_repeat',
      offerDiagnosticTool: true
    };
    return NextResponse.json(response, { headers: corsHeaders });
  }

  // Case B: Ambiguous Query -> Ask 1 short clarifying question
  if (resultType === 'ambiguous') {
    const clarification = generateAmbiguousClarification(query);
    const response: SearchQueryResponse = {
      answer: clarification.question,
      topMatch: bestMatch ? {
        pageName: bestMatch.pageName,
        url: bestMatch.url,
        h1: bestMatch.h1,
        focusKeyphrase: bestMatch.focusKeyphrase,
        schemaType: bestMatch.schemaType,
        description: bestMatch.description
      } : null,
      similarityScore,
      isFallback: true,
      isCaution: false,
      resultType: 'ambiguous',
      clarifyingQuestion: clarification.question,
      suggestedOptions: clarification.options
    };
    return NextResponse.json(response, { headers: corsHeaders });
  }

  // Case C: General Knowledge & Off-topic harmless question
  if (resultType === 'general_knowledge') {
    let generalAnswer = generateGeneralKnowledgeAnswer(query);

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const prompt = `You are a helpful AI assistant.
Answer the following general query politely and directly in strictly 1 to 2 sentences using Australian English spelling and grammar (e.g. optimisation, specialises, colour, behaviour). Do not force a marketing pitch in the answer body.

Query: "${query}"`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: prompt }] }]
            })
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) generalAnswer = text.trim();
        }
      } catch (err) {
        console.warn('Gemini general knowledge synthesis fallback:', err);
      }
    }

    const response: SearchQueryResponse = {
      answer: toAustralianEnglish(generalAnswer),
      topMatch: null,
      similarityScore,
      isFallback: true,
      isCaution: false,
      resultType: 'general_knowledge',
      offerDiagnosticTool: true
    };
    return NextResponse.json(response, { headers: corsHeaders });
  }

  // Case D: Visibility / AEO / SEO Question (High Match or Caution)
  const isCaution = similarityScore < 0.65;
  let synthesisedAnswer = bestMatch ? generateGroundedAnswer(bestMatch) : "AEObility provides Answer Engine Optimisation (AEO) services to structure business content for LLMs and map engines.";

  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && bestMatch) {
    try {
      const prompt = `You are the AEObility Answer Engine Search assistant.
Provide a concise, strictly 2-sentence context-grounded response to the user query based on the provided entity context.

User Query: "${query}"
Matched Entity Page: ${bestMatch.pageName} (${bestMatch.url})
Heading (H1): ${bestMatch.h1}
Focus Keyphrase: ${bestMatch.focusKeyphrase}
Schema Type: ${bestMatch.schemaType}
Description: ${bestMatch.description}
Latent Keywords: ${bestMatch.latentKeywords}

Rules:
1. MUST be exactly 2 sentences long.
2. Grounded in the entity context above with AEO diagnostic framing.
3. Clear, direct Australian tech perspective using Australian English spelling and grammar (e.g. optimisation, specialises, organisation, behaviour).`;

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }]
          })
        }
      );

      if (geminiRes.ok) {
        const data = await geminiRes.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) synthesisedAnswer = text.trim();
      }
    } catch (err) {
      console.warn('Gemini live synthesis fallback:', err);
    }
  }

  const companionData = classifyCompanion5Intent(query, bestMatch, routeContext);

  const response = {
    answer: toAustralianEnglish(companionData.answer || synthesisedAnswer),
    topMatch: bestMatch ? {
      pageName: toAustralianEnglish(bestMatch.pageName),
      url: bestMatch.url,
      h1: toAustralianEnglish(bestMatch.h1),
      focusKeyphrase: toAustralianEnglish(bestMatch.focusKeyphrase),
      schemaType: bestMatch.schemaType,
      description: toAustralianEnglish(bestMatch.description)
    } : null,
    similarityScore,
    isFallback: false,
    isCaution,
    resultType: 'visibility',
    intent: companionData.intent,
    cards: companionData.cards,
    suggestedPills: companionData.suggestedPills,
    triggerBillScan: companionData.triggerBillScan
  };

  return NextResponse.json(response, { headers: corsHeaders });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || searchParams.get('query') || '';

  if (!query) {
    return NextResponse.json(
      {
        $schema: "https://a2a-protocol.org/latest/schemas/agent-card.json",
        name: "aeobility-vector-search-agent",
        version: "1.0.0",
        description: "AEObility Grounded Vector Search and Semantic Answer Generation Agent specialising in Answer Engine Optimisation (AEO) and entity disambiguation.",
        url: "https://aeobility.com.au/api/search/answer",
        capabilities: {
          streaming: false,
          pushNotifications: false,
          extendedAgentCard: false,
          features: [
            "vector-search",
            "semantic-answer-grounding",
            "entity-matching",
            "nlweb"
          ]
        },
        defaultInputModes: [
          "text/plain",
          "application/json"
        ],
        defaultOutputModes: [
          "application/json",
          "text/plain"
        ],
        supportedInterfaces: [
          {
            url: "https://aeobility.com.au/api/search/answer",
            protocol: "rest",
            protocolBinding: "HTTP",
            protocolVersion: "1.0",
            methods: ["POST", "GET"],
            description: "Grounded vector answer generation and entity matching."
          }
        ],
        skills: [
          {
            id: "vector-answer",
            name: "Vector Answer Grounding",
            description: "Performs cosine similarity searches against the 60-node AEObility Information Architecture and SLM knowledge base.",
            tags: ["vector-search", "aeo", "semantic-grounding", "slm"],
            examples: [
              "What is Answer Engine Optimisation?",
              "How do LLMs rank brand entities?",
              "What is the difference between SEO and AEO?"
            ]
          },
          {
            id: "brand-consensus",
            name: "Brand Consensus Ledger",
            description: "Retrieves verified canonical brand facts, pricing parameters, and operational definitions to mitigate AI hallucinations.",
            tags: ["brand-consensus", "facts", "knowledge-graph", "pricing"],
            examples: [
              "What are AEObility's fixed-scope sprint packages?",
              "Who founded AEObility?"
            ]
          }
        ],
        status: "active",
        methods: ["POST", "GET"],
        protocol: "NLWeb/1.0",
        usage: "Send POST payload { query: string } or GET ?q=query to receive grounded 2-sentence vector search responses.",
        endpoint: "https://aeobility.com.au/api/search/answer"
      },
      { headers: corsHeaders }
    );
  }

  return processVectorSearch(query);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const query = typeof body.query === 'string' ? body.query.trim() : '';
    const offTopicCount = typeof body.previousOffTopicCount === 'number' ? body.previousOffTopicCount : 0;

    return processVectorSearch(query, offTopicCount, body.routeContext);
  } catch (error) {
    console.error('Answer Engine Search API error:', error);
    return NextResponse.json(
      { error: 'An error occurred processing the search query.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
