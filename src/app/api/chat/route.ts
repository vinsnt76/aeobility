import { NextRequest, NextResponse } from 'next/server';
import { corsHeaders, handleCorsOptions } from '@/lib/cors';

import { generateSystemTelemetryPrompt } from '@/lib/telemetry/compressor';

const SYSTEM_INSTRUCTION = `1. Core Identity & Mission
Name: AI Bill
Mission: I am a technical diagnostic specialist representing AEObility. I analyse and explain AEO, GEO, and local search performance metrics to help clients structure their website content for machine-readability.

2. Tone and Voice
- Tone: Grounded, exceptionally clear, and professional Australian tech perspective. Be helpful, clear, and direct.
- Avoid over-familiar slang, nicknames, or expressions of emotional closeness (never use "Vindog", "mate", "champion", "I love you").
- Short Answer First: Provide a concise, direct answer in the very first sentence.
- Response Length: Restrict responses strictly to 2-3 sentences max, unless the user explicitly asks to elaborate.
- Focus strictly on content architecture and diagnostics.`;

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  const chatAgentCard = {
    $schema: "https://a2a-protocol.org/latest/schemas/agent-card.json",
    name: "aeobility-bill-chat-agent",
    version: "1.0.0",
    description: "AEObility AI Bill conversational diagnostic specialist providing real-time AEO, GEO, and search architecture guidance.",
    url: "https://aeobility.com.au/api/chat",
    capabilities: {
      streaming: false,
      pushNotifications: false,
      extendedAgentCard: false,
      features: [
        "conversational-guidance",
        "telemetry-explanation",
        "aeo-advice"
      ]
    },
    defaultInputModes: [
      "application/json",
      "text/plain"
    ],
    defaultOutputModes: [
      "application/json",
      "text/plain"
    ],
    supportedInterfaces: [
      {
        url: "https://aeobility.com.au/api/chat",
        protocol: "rest",
        protocolBinding: "HTTP",
        protocolVersion: "1.0",
        methods: ["POST", "GET"],
        description: "AI Bill conversational diagnostic dialogue endpoint."
      }
    ],
    skills: [
      {
        id: "chat-diagnostic",
        name: "AI Visibility Diagnostic Chat",
        description: "Explains AEO metrics, gap analyses, and entity optimisation next actions.",
        tags: ["chat", "aeo-guidance", "telemetry-explanation"],
        examples: [
          "How can I fix my brand's AEO blind spot?",
          "Explain my entity readiness score."
        ]
      }
    ],
    usage: "Send POST payload { message: string, telemetryContext?: object } to converse with AI Bill."
  };

  return NextResponse.json(chatAgentCard, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const { message, telemetryContext } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { response: "My alignment is temporarily resetting (API key missing). Please try again in a few moments." },
        { status: 500 }
      );
    }

    const finalPrompt = message;
    let systemInstruction = SYSTEM_INSTRUCTION;

    if (telemetryContext && telemetryContext.insightResult) {
      const insight = telemetryContext.insightResult;
      const metricsContext = `
Here is the deterministic analysis you must base your advice on:

1. Business Status:
- Current Perception: ${insight.diagnosis.currentState}
- Ideal Authority: ${insight.diagnosis.desiredState}
- The Gap: ${insight.diagnosis.gap}

2. Blind Spot & Opportunity:
- Problem: ${insight.summary.problem}
- Opportunity: ${insight.summary.opportunity}
- Next Action: ${insight.summary.nextAction}
- Biggest Blind Spot: ${insight.blindSpot.title} - ${insight.blindSpot.description}

3. AI Recommendation Test:
- Verdict: ${insight.recommendationTest.verdict}
- Reasoning: ${insight.recommendationTest.reasoning}

Use this specific context to answer user questions about their score, their blind spot, or how to improve their AI visibility.`;

      systemInstruction = SYSTEM_INSTRUCTION + "\n\n" + metricsContext;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: finalPrompt }]
            }
          ],
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        })
      }
    );



    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am currently unable to reach the telemetry servers. Please try again in a moment.";

    return NextResponse.json({ response: replyText }, { headers: corsHeaders });
  } catch (error) {
    console.error("API Chat route error:", error);
    return NextResponse.json(
      { response: "I encountered an error connecting to the diagnostic engine. Please try again." },
      { status: 500, headers: corsHeaders }
    );
  }
}

