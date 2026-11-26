import { NextResponse } from "next/server";
import { Forms } from "@/lib/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      businessName,
      website,
      url,
      service,
      category,
      message,
      source,
      website_hp
    } = body;

    // Silent success for honeypot bot submissions
    if (website_hp) {
      return NextResponse.json({ ok: true });
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

    if (!cleanName || !cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name and email address." },
        { status: 400 }
      );
    }

    const result = await forms.submitQuoteForm({
      name: cleanName,
      email: cleanEmail,
      businessName: typeof businessName === "string" ? businessName.trim() : undefined,
      website: typeof (website || url) === "string" ? (website || url).trim() : undefined,
      service: typeof (service || category) === "string" ? (service || category).trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
      source: typeof source === "string" ? source.trim() : undefined,
    });

    return NextResponse.json({ ok: true, messageId: result.messageId });
  } catch (err) {
    console.error("Quote/Contact form submission error:", err);
    const message = err instanceof Error ? err.message : "Failed to submit enquiry.";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
