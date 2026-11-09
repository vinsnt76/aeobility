import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  const issuerId = process.env.GOOGLE_WALLET_ISSUER_ID;
  const serviceAccount = process.env.GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_WALLET_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_WALLET_PRIVATE_KEY;

  console.log("Wallet Config Check:", {
    hasIssuerId: !!issuerId,
    hasServiceAccount: !!serviceAccount,
    hasPrivateKey: !!privateKey,
  });

  if (!issuerId || !serviceAccount || !privateKey) {
    console.warn("Google Wallet credentials not fully configured. Returning a mock URL for testing.");
    return NextResponse.json({
      url: "https://pay.google.com/gp/v/save/mock-pass-not-configured",
      isMock: true
    });
  }

  try {
    const classId = `${issuerId}.vince_baker_card`;
    const objectId = `${issuerId}.vince_baker_card_v2`;

    // Generic Class (using default template layout)
    const genericClass = {
      id: classId,
      issuerName: "AEObility",
      reviewStatus: "UNDER_REVIEW"
    };

    // Generic Object
    const genericObject = {
      id: objectId,
      classId: classId,
      logo: {
        sourceUri: {
          uri: "https://aeobility.com.au/favicon.ico"
        }
      },
      cardTitle: {
        defaultValue: {
          language: "en-US",
          value: "AEObility Business Card"
        }
      },
      header: {
        defaultValue: {
          language: "en-US",
          value: "Vince Baker"
        }
      },
      subheader: {
        defaultValue: {
          language: "en-US",
          value: "Founder & AI Specialist"
        }
      },
      hexBackgroundColor: "#07070a",
      heroImage: {
        sourceUri: {
          uri: "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png"
        }
      },
      textModulesData: [
        {
          header: "AEO & AI Automation Specialist",
          body: "I help Australian small businesses get found and chosen across Search, Maps, and AI platforms.",
          id: "intro"
        },
        {
          header: "Contact",
          body: "Email: vince@aeobility.com.au\nPhone: 0480 286 282",
          id: "contact"
        }
      ],
      linksModuleData: {
        uris: [
          {
            uri: "https://aeobility.com.au/vince-baker",
            description: "Founder Profile"
          },
          {
            uri: "https://www.linkedin.com/in/vince-baker/",
            description: "LinkedIn"
          }
        ]
      },
      barcode: {
        type: "QR_CODE",
        value: "https://aeobility.com.au/vince-baker.vcf",
        alternateText: "Scan to save contact info"
      }
    };

    const payload = {
      iss: serviceAccount,
      aud: "google",
      typ: "savetowallet",
      iat: Math.floor(Date.now() / 1000),
      origins: ["http://localhost:3000", "https://aeobility.com.au"],
      payload: {
        genericClasses: [genericClass],
        genericObjects: [genericObject]
      }
    };

    // Sign JWT using node crypto module
    const header = { alg: "RS256", typ: "JWT" };
    
    const base64UrlEncode = (str: string) => {
      return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    };

    const tokenHeader = base64UrlEncode(JSON.stringify(header));
    const tokenPayload = base64UrlEncode(JSON.stringify(payload));
    const signInput = `${tokenHeader}.${tokenPayload}`;

    // Handle newline formatting and strip surrounding quotes for environment keys
    const formattedPrivateKey = privateKey.replace(/^"|"$/g, '').replace(/\\n/g, '\n');

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signInput);
    const signature = signer.sign(formattedPrivateKey, 'base64');
    
    const tokenSignature = signature
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const jwt = `${tokenHeader}.${tokenPayload}.${tokenSignature}`;
    const url = `https://pay.google.com/gp/v/save/${jwt}`;

    console.log("JWT Generated Successfully.");

    // Return both the live URL and a ready-to-use QR code image URL
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;

    return NextResponse.json({ 
      url, 
      qrCodeUrl,
      isMock: false 
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to generate Google Wallet JWT:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
