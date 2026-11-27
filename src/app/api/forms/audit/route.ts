import { NextResponse } from "next/server";
import { Forms } from "@/lib/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      website, 
      phone, 
      scores, 
      findings,
      intent,
      targetQuery,
      recommendations,
      blindSpot,
      firstImpression,
      assistantAssisted,
      telemetry
    } = body;

    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const rawWebsite = typeof website === "string" ? website.trim() : "";
    const cleanWebsite = rawWebsite ? (/^https?:\/\//i.test(rawWebsite) ? rawWebsite : `https://${rawWebsite}`) : "";
    const cleanTargetQuery = typeof (targetQuery || intent) === "string" ? (targetQuery || intent).trim() : "";
    const cleanBlindSpot = typeof blindSpot === "string" ? blindSpot.trim() : "";
    const cleanFirstImpression = typeof firstImpression === "string" ? firstImpression.trim() : "";
    const cleanRecommendations = Array.isArray(recommendations) ? recommendations : Array.isArray(findings) ? findings : undefined;
    const cleanTelemetry = (telemetry && typeof telemetry === "object") ? telemetry as Record<string, unknown> : undefined;

    await forms.submitAuditForm({
      name: cleanName,
      email: cleanEmail,
      website: cleanWebsite,
      phone: cleanPhone,
      scores,
      findings,
      targetQuery: cleanTargetQuery,
      recommendations: cleanRecommendations,
      blindSpot: cleanBlindSpot,
      firstImpression: cleanFirstImpression,
      assistantAssisted: !!assistantAssisted,
      telemetry: cleanTelemetry
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
