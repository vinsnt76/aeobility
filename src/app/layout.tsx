import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GlobalConsentBanner from "@/components/GlobalConsentBanner";
import BillWidget from "@/components/BillWidget";
import AIModalAssistant from "@/components/AIModalAssistant";
import SSRFallbackNav from "@/components/navigation/SSRFallbackNav";
import SiteNavigationSchema from "@/components/navigation/SiteNavigationSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-3WVLWVG6VH';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeobility.com.au"),
  title: "AEObility | Get Found. Get Chosen.",
  description: "AEObility helps Australian small businesses get found across Search, Maps, and AI platforms. Get a free visibility audit, a complimentary 15-minute call, and a 90-Day AI Success Blueprint.",
  keywords: ["visibility audit", "local SEO", "AI search", "Perth SEO", "small business marketing", "get more leads", "map rankings", "Google Business Profile optimisation"],
  authors: [{ name: "AEObility" }],
  robots: "index, follow",
  openGraph: {
    title: "AEObility | Get Found. Get Chosen.",
    description: "Show up across Search, Maps, and AI. Free audit + 15-minute call.",
    url: "https://aeobility.com.au",
    type: "website",
    images: [
      {
        url: "/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "AEObility | Get Found. Get Chosen.",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "TlRAYGi_c4DdLtiNq7_LpYCCS7XE-OInAQaOxQJ66QY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="TlRAYGi_c4DdLtiNq7_LpYCCS7XE-OInAQaOxQJ66QY" />
        <link rel="alternate" type="text/markdown" href="https://aeobility.com.au/index.md" />
        <link rel="service-doc" type="text/markdown" href="https://aeobility.com.au/auth.md" />
        <link rel="ai-catalog" href="https://aeobility.com.au/.well-known/ai-catalog.json" />
        <link rel="poppy" href="https://aeobility.com.au/.well-known/poppy.json" />
        <link rel="personal-agent-protocol" href="https://aeobility.com.au/.well-known/poppy.json" />
        <link rel="acp" href="https://aeobility.com.au/.well-known/acp.json" />
        <link rel="ucp" href="https://aeobility.com.au/.well-known/ucp" />
        <link rel="http-message-signatures-directory" href="https://aeobility.com.au/.well-known/http-message-signatures-directory" />
        <link rel="nlweb-ask" href="https://aeobility.com.au/api/search/answer" />
        <link rel="nlweb-mcp" href="https://aeobility.com.au/api/mcp" />
        <link rel="mcp" href="https://aeobility.com.au/api/mcp" />
        <script
          id="webmcp-registration"
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  var aeoAuditTool = {
    name: "get_aeo_diagnostic",
    description: "Run an instant Answer Engine Optimisation (AEO) and AI agent readiness diagnostic for any domain.",
    inputSchema: {
      type: "object",
      properties: {
        domain: { type: "string", description: "Target domain URL to audit" }
      },
      required: ["domain"]
    },
    execute: async function(args) {
      var res = await fetch("/api/diagnostic?url=" + encodeURIComponent(args.domain));
      return await res.json();
    },
    annotations: { readOnlyHint: true }
  };

  var knowledgeTool = {
    name: "query_knowledge_hub",
    description: "Query verified canonical brand facts, pricing, and entity definitions from AEObility.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query or concept" }
      },
      required: ["query"]
    },
    execute: async function(args) {
      var res = await fetch("/api/search/answer?q=" + encodeURIComponent(args.query));
      return await res.json();
    },
    annotations: { readOnlyHint: true }
  };

  var toolsList = [aeoAuditTool, knowledgeTool];

  function getContext() {
    var docCtx = typeof document !== 'undefined' ? document.modelContext : undefined;
    var navCtx = typeof navigator !== 'undefined' ? navigator.modelContext : undefined;

    if (docCtx && typeof docCtx.registerTool === 'function') return docCtx;
    if (navCtx && typeof navCtx.registerTool === 'function') return navCtx;

    var poly = {
      tools: [],
      registerTool: function(tool) {
        this.tools.push(tool);
        return Promise.resolve();
      },
      getTools: function() {
        return Promise.resolve(this.tools);
      }
    };

    if (typeof document !== 'undefined') {
      try { document.modelContext = poly; } catch (e) {}
    }
    if (typeof navigator !== 'undefined') {
      try {
        Object.defineProperty(navigator, 'modelContext', { value: poly, configurable: true, writable: true });
      } catch (e) {
        try { navigator.modelContext = poly; } catch (err) {}
      }
    }
    return poly;
  }

  function registerAll() {
    var ctx = getContext();
    if (!ctx || typeof ctx.registerTool !== 'function') return;
    toolsList.forEach(function(t) {
      try {
        Promise.resolve(ctx.registerTool(t)).catch(function() {});
      } catch (err) {}
    });
  }

  registerAll();
  if (typeof document !== 'undefined' && document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerAll);
  }
})();
`
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip">
        <SiteNavigationSchema />
        <SSRFallbackNav />
        {/* Direct GA4 Script Loading via next/script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* Initialize Consent Mode & Direct GA4 Config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted'
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true
            });
          `}
        </Script>
        <BillWidget />
        <AIModalAssistant />
        <SpeedInsights />
      </body>
    </html>
  );
}
