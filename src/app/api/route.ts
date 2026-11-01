import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const x402Payload = {
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base",
        asset: "USDC",
        amount: "1000",
        maxAmountRequired: "1000",
        payTo: "0x4020000000000000000000000000000000000402",
        description: "AEObility Autonomous Agentic API Access"
      }
    ],
    error: "X-PAYMENT header is required",
    catalog: "https://aeobility.com.au/.well-known/api-catalog",
    documentation: "https://aeobility.com.au/auth.md"
  };

  const base64PaymentRequired = Buffer.from(JSON.stringify(x402Payload)).toString('base64');

  return NextResponse.json(x402Payload, {
    status: 402,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,HEAD',
      'Access-Control-Expose-Headers': 'PAYMENT-REQUIRED, WWW-Authenticate',
      'PAYMENT-REQUIRED': base64PaymentRequired,
      'WWW-Authenticate': 'x402 scheme="exact", asset="USDC", network="base", amount="1000"',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,HEAD',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Payment, x402, PAYMENT-SIGNATURE',
    },
  });
}
