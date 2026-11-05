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
        {/* Global Entity Schema */}
        <script
          id="global-brand-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://aeobility.com.au/#organization",
                  "name": "AEObility",
                  "alternateName": [
                    "AEO Bility",
                    "aeo bility",
                    "aeo.bility",
                    "AEO.bility"
                  ],
                  "legalName": "AEObility",
                  "url": "https://aeobility.com.au/",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://aeobility.com.au/#logo",
                    "url": "https://aeobility.com.au/aeobility-logo-light.svg"
                  },
                  "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
                  "description": "AEObility is a Perth-based Australian consultancy specialising in Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), AI search visibility, entity SEO and schema graph engineering. AEObility helps businesses improve how their digital information, services and expertise are structured and understood by search engines and AI-powered discovery systems.",
                  "disambiguatingDescription": "AEObility is an independent Australian digital consultancy specialising in AEO, GEO and machine search readability. It is distinct from Seobility, the SEO software platform.",
                  "telephone": "+61-480-286-282",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Perth",
                    "addressRegion": "Western Australia",
                    "addressCountry": "AU"
                  },
                  "founder": {
                    "@type": "Person",
                    "@id": "https://aeobility.com.au/#vincebaker"
                  },
                  "sameAs": [
                    "https://www.cbinsights.com/company/aeobility",
                    "https://www.producthunt.com/@aeobility",
                    "https://www.linkedin.com/company/aeobility",
                    "https://dev.to/aeobility",
                    "https://www.crunchbase.com/organization/aeobility",
                    "https://github.com/vinsnt76/aeobilty",
                    "https://www.instagram.com/aeo.bility/",
                    "https://www.facebook.com/profile.php?id=61591781069830",
                    "https://www.youtube.com/channel/UCcQMe3h157C2MDt70lohXpg"
                  ],
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Perth",
                      "sameAs": [
                        "https://www.wikidata.org/wiki/Q3183",
                        "https://en.wikipedia.org/wiki/Perth"
                      ]
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Western Australia",
                      "sameAs": [
                        "https://www.wikidata.org/wiki/Q3205",
                        "https://en.wikipedia.org/wiki/Western_Australia"
                      ]
                    },
                    {
                      "@type": "Country",
                      "name": "Australia",
                      "sameAs": "https://www.wikidata.org/wiki/Q408"
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AEO & AI Search Marketing Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Answer Engine Optimisation (AEO)",
                          "url": "https://aeobility.com.au/services/aeo"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "GEO Marketing Services",
                          "url": "https://aeobility.com.au/services/geo-marketing"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Search Marketing",
                          "url": "https://aeobility.com.au/services/ai-search-marketing"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "The AEObility MVP Strategic Blueprint",
                          "url": "https://aeobility.com.au/solutions/aeo-blueprint"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AEO Technical Sprints",
                          "url": "https://aeobility.com.au/solutions/aeo-sprint"
                        }
                      }
                    ]
                  },
                  "taxID": "61029803255",
                  "knowsAbout": [
                    "Answer Engine Optimisation",
                    "AI Search Optimisation Australia",
                    "Generative Engine Optimisation",
                    "Retrieval-Augmented Generation",
                    "Structured Data Graphs"
                  ],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://aeobility.com.au/api/search/answer?query={search_term_string}",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                      ],
                      "contentType": "application/json"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "publishingPrinciples": [
                    {
                      "@type": "DigitalDocument",
                      "name": "Model Context Protocol Endpoint",
                      "url": "https://aeobility.com.au/api/mcp"
                    }
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://aeobility.com.au/#perth-local-business",
                  "name": "AEObility",
                  "url": "https://aeobility.com.au",
                  "image": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
                  "telephone": "+61480286282",
                  "parentOrganization": {
                    "@id": "https://aeobility.com.au/#organization"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Perth",
                    "addressRegion": "Western Australia",
                    "postalCode": "6000",
                    "addressCountry": "AU"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -31.9505,
                    "longitude": 115.8605
                  },
                  "serviceArea": [
                    {
                      "@type": "City",
                      "@id": "https://aeobility.com.au/#service-area-perth",
                      "name": "Perth",
                      "sameAs": "https://www.wikidata.org/wiki/Q3183"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "@id": "https://aeobility.com.au/#service-area-western-australia",
                      "name": "Western Australia",
                      "sameAs": "https://www.wikidata.org/wiki/Q3205"
                    },
                    {
                      "@type": "Country",
                      "@id": "https://aeobility.com.au/#service-area-australia",
                      "name": "Australia",
                      "sameAs": "https://www.wikidata.org/wiki/Q408"
                    }
                  ],
                  "sameAs": [
                    "https://maps.app.goo.gl/zWC3RxsLV9JMBoGRA"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://aeobility.com.au/services/ai-search-marketing#perth-service",
                  "name": "AI Search Optimisation Perth",
                  "serviceType": "AI search optimisation",
                  "url": "https://aeobility.com.au/services/ai-search-marketing",
                  "provider": {
                    "@id": "https://aeobility.com.au/#perth-local-business"
                  },
                  "serviceArea": [
                    {
                      "@id": "https://aeobility.com.au/#service-area-perth"
                    },
                    {
                      "@id": "https://aeobility.com.au/#service-area-western-australia"
                    },
                    {
                      "@id": "https://aeobility.com.au/#service-area-australia"
                    }
                  ],
                  "areaServed": {
                    "@id": "https://aeobility.com.au/#service-area-perth"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://aeobility.com.au/#ai-bill",
                  "name": "AI Bill",
                  "alternateName": "AEObility AI Bill",
                  "description": "A web-based AI diagnostic assistant from AEObility that analyses AEO, GEO, local search, and AI visibility signals using grounded site knowledge and telemetry audit context.",
                  "applicationCategory": "BusinessApplication",
                  "applicationSubCategory": "AI visibility diagnostic assistant",
                  "operatingSystem": "Web",
                  "url": "https://aeobility.com.au",
                  "featureList": [
                    "Grounded conversational answers about AEObility services and methodologies",
                    "AI visibility telemetry audit analysis",
                    "Citation share, clarity score, and hallucination risk interpretation",
                    "Provenance and entity graph explanations"
                  ],
                  "creator": {
                    "@id": "https://aeobility.com.au/#vincebaker"
                  },
                  "publisher": {
                    "@id": "https://aeobility.com.au/#organization"
                  },
                  "isAccessibleForFree": true,
                  "potentialAction": [
                    {
                      "@type": "CommunicateAction",
                      "name": "Chat with AI Bill",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://aeobility.com.au/api/bill",
                        "actionPlatform": [
                          "https://schema.org/DesktopWebPlatform",
                          "https://schema.org/MobileWebPlatform"
                        ],
                        "httpMethod": "POST",
                        "contentType": "application/json"
                      }
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://aeobility.com.au/services/aeo#service",
                  "name": "Answer Engine Optimisation (AEO)",
                  "provider": {
                    "@id": "https://aeobility.com.au/#organization"
                  },
                  "areaServed": {
                    "@id": "https://aeobility.com.au/#service-area-australia"
                  },
                  "serviceType": "Technical SEO & Data Graph Refactoring",
                  "description": "Structuring and connecting business data across conversational search engines, AI platforms, and digital maps to improve machine readability and entity consistency.",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AEObility Core Offers",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Strategic Blueprint",
                          "description": "A comprehensive visibility diagnostic and 90-day implementation roadmap covering entity indexing and schema continuity.",
                          "offers": {
                            "@type": "PriceSpecification",
                            "price": "995.00",
                            "priceCurrency": "AUD",
                            "valueAddedTaxIncluded": "false"
                          }
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Schema and Semantic Mapping Sprint",
                          "description": "Foundation tier implementation establishing machine-readable identity graphs and resolving entity confusion.",
                          "offers": {
                            "@type": "PriceSpecification",
                            "price": "3177.00",
                            "priceCurrency": "AUD",
                            "valueAddedTaxIncluded": "false"
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://aeobility.com.au/#vincebaker",
                  "name": "Vincent Baker",
                  "alternateName": ["Vince Baker", "Vinnie Baker"],
                  "jobTitle": "Founder & Technical Director",
                  "url": "https://aeobility.com.au/vince-baker",
                  "sameAs": [
                    "https://www.linkedin.com/in/vincebaker",
                    "https://app.qwoted.com/sources/vince-baker",
                    "https://github.com/vinsnt76"
                  ],
                  "worksFor": {
                    "@id": "https://aeobility.com.au/#organization"
                  },
                  "knowsAbout": [
                    "Answer Engine Optimisation",
                    "Generative Engine Optimisation",
                    "AI Search Readiness",
                    "Information Architecture",
                    "Schema Graph Architecture",
                    "Model Context Protocol",
                    {
                      "@type": "Thing",
                      "name": "Information Retrieval",
                      "sameAs": "https://en.wikipedia.org/wiki/Information_retrieval"
                    },
                    {
                      "@type": "Thing",
                      "name": "Natural Language Processing",
                      "sameAs": "https://en.wikipedia.org/wiki/Natural_language_processing"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aeobility.com.au/#website",
                  "url": "https://aeobility.com.au",
                  "name": "AEObility",
                  "publisher": {
                    "@id": "https://aeobility.com.au/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://aeobility.com.au/api/search/answer?query={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "VideoObject",
                  "@id": "https://aeobility.com.au/#video",
                  "name": "Our Approach to Answer Engine Search",
                  "description": "Learn how AEObility refactors digital content to rank and get cited inside conversational AI systems and map interfaces.",
                  "thumbnailUrl": "https://aeobility.com.au/images/brand/aeobility-video-explainer.webp", 
                  "uploadDate": "2026-01-01T08:00:00Z",
                  "contentUrl": "https://aeobility.com.au/videos/explainer.mp4", 
                  "embedUrl": "https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview",
                  "publisher": {
                    "@id": "https://aeobility.com.au"
                  }
                }
              ]
            })
          }}
        />


        {children}
        <GlobalConsentBanner />
        <BillWidget />
        <AIModalAssistant />
        <SpeedInsights />
      </body>
    </html>
  );
}
