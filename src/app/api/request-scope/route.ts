import { NextResponse } from "next/server";
import { Forms } from "@/lib/forms";

const forms = Forms.wire();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { package: pkg, package_code, businessUrl, contactName, contactEmail } = body;

    const email = typeof contactEmail === "string" ? contactEmail.trim().toLowerCase() : "";
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "A valid email address is required" },
        { status: 400 }
      );
    }

    const name = typeof contactName === "string" ? contactName.trim() : "Valued Client";
    const website = typeof businessUrl === "string" ? businessUrl.trim() : "";
    const packageCode = pkg || package_code || "BPSTRAT-995";

    await forms.submitQuoteForm({
      name,
      email,
      website,
      service: `Strategic Blueprint (${packageCode})`,
      message: `Direct Order Request for Strategic Blueprint ($995 AUD ex. GST). Delivery SLA: 5 business days.`
    });

    return NextResponse.json({ ok: true, message: "Order request received successfully" });
  } catch (err) {
    console.error("Failed to process scope request:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

