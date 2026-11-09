import { NextRequest } from 'next/server';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import knowledgeBase from '../../../lib/search/knowledgeBase.json';
import { createTurnToken, verifyTurnToken } from '@/lib/security/turn-token';
import { PROVENANCE_GRAPH_SCHEMA, PROVENANCE_ENTITIES } from '@/lib/brandFacts';

export const runtime = 'nodejs';

interface CleanMessage {
  id?: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface RawPart {
  type?: string;
  text?: string;
}

interface RawMessage {
  id?: string;
  role?: string;
  content?: string | RawPart[];
  parts?: RawPart[];
}

interface KnowledgeNode {
  pageName?: string;
  url?: string;
  h1?: string;
  focusKeyphrase?: string;
  description?: string;
  primaryKeywords?: string;
  secondaryKeywords?: string;
  latentKeywords?: string;
  embedding?: number[];
}

// --- DEFINITIVE ORG GRAPH STRUCTURES (Australian English & Fragment ID Compliance) ---
const orgGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organisation',
      '@id': 'https://aeobility.com.au/#organization',
      name: 'AEObility',
      url: 'https://aeobility.com.au',
      description: 'An agency defining the standard for Answer Engine Optimisation (AEO) in Australia.',
      founder: { '@type': 'Person', '@id': 'https://aeobility.com.au/#vincebaker' }
    },
    {
      '@type': 'Person',
      '@id': 'https://aeobility.com.au/#vincebaker',
      name: 'Vince Baker',
      jobTitle: 'Founder & Principal AEO Architect',
      worksFor: { '@id': 'https://aeobility.com.au/#organization' },
      sameAs: ['https://linkedin.com/in/vincebaker']
    }
  ]
};

const blueprintService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#service',
  serviceType: 'AI Readiness Optimisation Consultancy',
  provider: { '@id': 'https://aeobility.com.au/#organization' },
  offers: { 
    '@type': 'Offer', 
    price: 995, 
    priceCurrency: 'AUD', 
    name: 'Strategic Blueprint',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: 995,
      priceCurrency: 'AUD',
      valueAddedTaxIncluded: false
    }
  }
};

const BILL_BASE_PERSONA = `You are Bill, the official AI-Native Web Agent for AEObility (aeobility.com.au). 
Your tone is technical, sharp, professional, and entirely free of marketing fluff. You converse as an elite peer to business operators, CTOs, and CMOs.
Ensure you communicate natively using Australian English spelling parameters (e.g., optimisation, modelling, prioritised).
CRITICAL GROUNDING DIRECTIVE: You MUST answer strictly from AEObility's perspective using the site architecture, structured entity nodes, and services defined in our knowledge base. Frame all concepts (AEO, GEO, Semantic SEO, RAG, Positional Bias) around AEObility's proprietary methodologies and Australian business offerings. Never give generic textbook answers.
CRITICAL FORMAT RULE: Keep responses concise, direct, and high-density (maximum 2-3 short sentences for conceptual inquiries, or structured diagnostic output). Never generate long conversational filler.
CRITICAL CANONICAL CITATION RULE: When referencing brand facts, directories, solutions, or technical articles, explicitly include full canonical URIs (e.g., https://aeobility.com.au/brand-facts or https://aeobility.com.au/solutions/aeo-blueprint).`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { messages: rawMessages, prompt: rawPrompt, audit, intent, temperature } = body;

    // 1. CRITICAL RUNTIME FIX: Normalize incoming Gemini/NLWeb structured "parts" into OpenAI-compliant string messages
    const normalizedMessages: CleanMessage[] = (rawMessages || []).map((m: RawMessage) => {
      if (typeof m.content === 'string' && m.content.trim()) {
        return {
          id: m.id || Math.random().toString(36).substring(7),
          role: m.role === 'model' ? 'assistant' : (m.role as 'user' | 'assistant' | 'system') || 'user',
          content: m.content,
        };
      }
      
      let extractedContent = '';
      if (Array.isArray(m.parts)) {
        extractedContent = m.parts.map((p) => p.text || '').join('\n');
      } else if (Array.isArray(m.content)) {
        extractedContent = m.content.filter((c) => c.type === 'text').map((c) => c.text || '').join('\n');
      }

      return {
        id: m.id || Math.random().toString(36).substring(7),
        role: m.role === 'model' ? 'assistant' : (m.role as 'user' | 'assistant' | 'system') || 'user',
        content: extractedContent || (typeof m.content === 'string' ? m.content : ''),
      };
    });

    const userQuery = rawPrompt || normalizedMessages[normalizedMessages.length - 1]?.content || '';
    const normalizedQuery = userQuery.toLowerCase();

    // 👉 STEP A: LOG NORMALIZED REQUEST OUTPUT DIAGNOSTIC
    console.log("👉 BILL UNIFIED ROUTER DIAGNOSTIC:", {
      detectedIntent: intent,
      hasAuditPayload: !!audit,
      finalNormalizedQuery: userQuery
    });

    const userMessages = normalizedMessages.filter((m) => m.role === 'user');
    const isTelemetryActive = !!(audit || intent === 'telemetry' || normalizedQuery.includes('measure visibility') || normalizedQuery.includes('citation share') || normalizedQuery.includes('telemetry'));

    // Server-Side Stateless Turn Gate Validation (HMAC Token Security Boundary)
    const incomingTurnToken = req.headers.get('x-turn-token');
    const auditId = audit?.clientUrl || 'session-' + (userMessages[0]?.content?.slice(0, 16) || 'anonymous');
    let sessionTurn = 1;

    if (incomingTurnToken) {
      const tokenVerification = verifyTurnToken(incomingTurnToken);
      if (!tokenVerification.valid) {
        return new Response(JSON.stringify({ error: 'Invalid or expired session turn token.', code: 'INVALID_TURN_TOKEN' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      sessionTurn = (tokenVerification.payload?.turnCount || 1) + 1;
    } else if (isTelemetryActive && userMessages.length > 1) {
      // Secondary Sanity Check: Client provided multi-turn message history but lacked a valid signed turn token (e.g. storage wipe / bypass)
      sessionTurn = userMessages.length;
    }

    // Enforce 4-turn limit for unauthenticated diagnostic consultation
    if (isTelemetryActive && sessionTurn > 4) {
      return new Response(JSON.stringify({ 
        error: 'Turn limit reached for unauthenticated diagnostic session. Please lock in a 15-minute diagnostic review or explore the Blueprint.',
        code: 'TURN_LIMIT_EXCEEDED',
        turnCount: sessionTurn
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const nextTurnToken = createTurnToken(auditId, sessionTurn);

    let systemPrompt = BILL_BASE_PERSONA;
    let injectionContext = '';
    
    // Multi-turn Skill Routing:
    // First turn (sessionTurn <= 1) -> Telemetry Diagnostic Skill (emits card block)
    // Later turn (sessionTurn > 1) -> Telemetry Consultant Skill (plain conversational text)
    const isDiagnosticTurn = sessionTurn <= 1;

    if (isTelemetryActive && isDiagnosticTurn) {
      systemPrompt += `\n\n[ACTIVE SKILL: Telemetry Guide]
You are evaluating a live AI Visibility Telemetry Audit. Review the raw telemetry JSON payload below.`;
      injectionContext = `\nRAW AUDIT DATA PAYLOAD:\n${JSON.stringify(audit || { error: "No audit payload parsed." })}`;

    } else if (isTelemetryActive && !isDiagnosticTurn) {
      systemPrompt += `\n\n[ACTIVE SKILL: Telemetry Consultant]
You are acting as an expert AI Visibility Consultant discussing an existing audit report with the client.
Answer the user's follow-up question conversationally in 2-3 direct sentences.
Base your insights strictly on the audit payload below. Explain how target search queries interact with local geographic signals and structured entity schemas without marketing fluff or false guarantees.
Do NOT output structured diagnostic report cards again unless explicitly requested.`;
      injectionContext = `\nRAW AUDIT DATA PAYLOAD:\n${JSON.stringify(audit || { error: "No audit payload parsed." })}`;

    } else if (
      normalizedQuery.includes('lineage') || normalizedQuery.includes('provenance') || 
      normalizedQuery.includes('shapeshifter') || normalizedQuery.includes('vibrational alignment') ||
      normalizedQuery.includes('machine legibility') || normalizedQuery.includes('data provenance') ||
      normalizedQuery.includes('who created') || normalizedQuery.includes('who built') ||
      normalizedQuery.includes('origin')
    ) {
      systemPrompt += `\n\n[ACTIVE SKILL: Provenance Interpreter]
You are acting as the Provenance Interpreter for AEObility.
Explain the factual entity lineage of AEObility, Vince Baker, the foundational research paper 'Machine Legibility & Data Provenance' (originating as 'Vibrational Alignment'), AG Shapeshifter, and AI Bill conversationally in 2-3 direct sentences.
Base your response strictly on the verified JSON-LD provenance triples and entity graph below.`;
      injectionContext = `\nPROVENANCE GRAPH TRIPLES:\n${JSON.stringify(PROVENANCE_GRAPH_SCHEMA)}\n\nPROVENANCE ENTITY INVENTORY:\n${JSON.stringify(PROVENANCE_ENTITIES)}`;

    } else if (
      normalizedQuery.includes('fix') || normalizedQuery.includes('next steps') || 
      normalizedQuery.includes('improve visibility') || normalizedQuery.includes('buy') || 
      normalizedQuery.includes('blueprint') || normalizedQuery.includes('pricing') || 
      normalizedQuery.includes('cost') || normalizedQuery.includes('hire') ||
      normalizedQuery.includes('sprint') || normalizedQuery.includes('rate') ||
      normalizedQuery.includes('fee') || normalizedQuery.includes('package')
    ) {
      systemPrompt += `\n\n[ACTIVE SKILL: Commercial Solutions & Blueprint Funnel]
The user is inquiring about pricing, fixes, packages, or next steps. Ground your answer strictly in AEObility's Technical Sprint Pricing model:
- Entry Diagnostic: Strategic Blueprint ($995 AUD ex. GST) delivers a deep technical gap audit and prioritised 90-day action plan.
- 60-Day Reversal Window: 100% of the $995 Strategic Blueprint fee is credited back against AEO Foundation booked within 60 calendar days.
- Implementation Packages: AEO Foundation ($1,990 AUD ex. GST turnkey across up to 10 core pages), AEO Sprints ($1,980 AUD ex. GST per 10-day macro sprint), and Micro-Sprints ($495 AUD ex. GST per 3-day half-day unit).
- Onboarding Waiver: The $250 Technical Onboarding (ONBOARD) fee is 100% waived on AEO Foundation and AEO Sprints.
- Hourly Developer Rate: Out-of-scope custom development is billed at $220 AUD ex. GST per hour.
- Monthly Retainer Cadence: Governed AEO Sprints ($1,980/month MRR) with zero lock-in contracts.
Explicitly quote accurate pricing in AUD ex. GST and keep answers concise within 2-3 sentences.`;
      injectionContext = `\nCOMMERCIAL SERVICE NODE:\n${JSON.stringify(blueprintService)}`;

    } else {
      const stopWords = new Set(['what', 'is', 'the', 'a', 'an', 'how', 'does', 'about', 'explain', 'tell', 'me', 'in', 'of', 'for', 'to', 'vs']);
      const queryTokens = normalizedQuery.split(/\W+/).filter((t: string) => t.length > 2 && !stopWords.has(t));

      const rawNodes: KnowledgeNode[] = Array.isArray(knowledgeBase) ? knowledgeBase : (knowledgeBase as any).nodes || [];
      const candidates = rawNodes.map((node) => {
        let score = 0;
        const pageName = (node.pageName || '').toLowerCase();
        const h1 = (node.h1 || '').toLowerCase();
        const keyphrase = (node.focusKeyphrase || '').toLowerCase();
        const description = (node.description || '').toLowerCase();
        const keywords = ((node.primaryKeywords || '') + ' ' + (node.secondaryKeywords || '') + ' ' + (node.latentKeywords || '')).toLowerCase();

        // Exact keyphrase or full query match
        if (keyphrase && (normalizedQuery === keyphrase || (keyphrase.length > 3 && normalizedQuery.includes(keyphrase)))) {
          score += 50;
        }
        if (h1 && (normalizedQuery.includes(h1) || h1.includes(normalizedQuery))) score += 40;
        if (pageName && (normalizedQuery.includes(pageName) || pageName.includes(normalizedQuery))) score += 30;

        let matchedTokens = 0;
        queryTokens.forEach((token: string) => {
          let tokenMatched = false;
          if (pageName.includes(token)) { score += 15; tokenMatched = true; }
          if (h1.includes(token)) { score += 15; tokenMatched = true; }
          if (keyphrase.includes(token)) { score += 10; tokenMatched = true; }
          if (keywords.includes(token)) { score += 10; tokenMatched = true; }
          if (description.includes(token)) { score += 5; tokenMatched = true; }

          // Domain acronym resolution: 'aeo' <-> 'answer engine'
          if (token === 'aeo' && (pageName.includes('answer engine') || h1.includes('answer engine') || keywords.includes('answer engine'))) {
            score += 20;
            tokenMatched = true;
          }

          if (tokenMatched) matchedTokens++;
        });

        // Coordination factor: reward nodes matching multiple distinct query tokens
        score += matchedTokens * 20;
        if (queryTokens.length > 1 && matchedTokens === queryTokens.length) {
          score += 40;
        }

        return { node, score };
      });

      const matchedCandidates = candidates.filter((c) => c.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);

      if (matchedCandidates.length > 0) {
        systemPrompt += `\n\n[ACTIVE SKILL: Technical Concept Explainer]
The user is querying a conceptual or mechanical element of AEO, schemas, or site services.
Synthesise a sharp, authoritative 2-3 sentence explanation using the verified dynamic knowledge base node captures provided below.`;
        
        const cleanNodes = matchedCandidates.map((c) => {
          const { embedding: _embedding, ...cleanData } = c.node;
          return cleanData;
        });
        
        injectionContext = `\nDYNAMIC KNOWLEDGE MATCHES:\n${JSON.stringify(cleanNodes)}\n\nCANONICAL IDENTITY LAYER:\n${JSON.stringify(orgGraph)}`;
      } else {
        systemPrompt += `\n\n[ACTIVE SKILL: General NLWeb Schema Agent]
Address general inquiries concisely in 2-3 sentences using the organisational identity graph definitions below. Do not deviate from this data boundary.`;
        injectionContext = `\nORGANISATION GRAPH:\n${JSON.stringify(orgGraph)}`;
      }
    }

    // MANDATORY TELEMETRY ENVELOPE CONTRACT Across All Active Skills (Diagnostic Turn)
    if (isTelemetryActive && isDiagnosticTurn) {
      systemPrompt += `\n\n[GLOBAL TELEMETRY MANDATE FOR ALL ACTIVE SKILLS]
CRITICAL CONSTRAINT: Telemetry Mode is ACTIVE on Diagnostic Turn 1. Regardless of which specific skill or topic is being evaluated (e.g., Telemetry Guide, Positional Bias, RAG Drop Fixer, Technical Concepts), your response MUST BE STRICTLY FORMATTED using the telemetry report block below. 
FORBIDDEN: Explicitly forbid any conversational preambles, introductory text, greeting, or concluding commentary before or after this block. Do not add any text before or after this report. Output MUST begin IMMEDIATELY with [START_TELEMETRY_REPORT] and end with [END_TELEMETRY_REPORT].

HARD TEMPLATE:
[START_TELEMETRY_REPORT]
AI First Impression: <one line summary>
Biggest Blind Spot: <one line gap summary>
Recommendation Verdict: <PASS | HIGH RISK | ALERT>
Clarity Score: <0-100>
Citation Share: <0-100>
Hallucination Risk: <Low | Medium | High>
[END_TELEMETRY_REPORT]`;
    }

    // 2. VERCEL EDGE FREE-TIER PROTECTION: Enforce strict token limits (400 tokens for telemetry, 200 for general)
    const targetMaxTokens = isTelemetryActive ? 400 : 200;

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: `${systemPrompt}\n\nAUTHORITATIVE KNOWLEDGE TRUTH LAYER:\n${injectionContext}`,
      messages: normalizedMessages.length > 0 ? normalizedMessages : [{ role: 'user', content: userQuery }],
      maxOutputTokens: targetMaxTokens,
      temperature: typeof temperature === 'number' ? temperature : 0.0,
    });

    return result.toUIMessageStreamResponse({
      headers: {
        'x-turn-token': nextTurnToken
      }
    });
  } catch (error) {
    console.error('Bill route runtime error:', error);
    return new Response(JSON.stringify({ error: 'Bill pipeline dynamic data retrieval error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
