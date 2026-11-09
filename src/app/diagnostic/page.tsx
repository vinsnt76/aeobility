import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubNavPills from '@/components/navigation/SubNavPills';
import Breadcrumbs from '@/components/Breadcrumbs';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import DiagnosticEngine from '@/components/DiagnosticEngine';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free AI Search Diagnostic & GEO Reporting Tool | AEObility",
  description: "Run a free AI search diagnostic on your website. Audit entity indexing, local maps schema, and generative search citation readiness.",
  alternates: {
    canonical: "https://aeobility.com.au/diagnostic",
  },
  keywords: [
    "geo reporting",
    "ai search optimisation",
    "free AI visibility scan",
    "AEO diagnostic tool",
    "structured data check Australia",
    "local signals audit",
    "AI search audit"
  ]
};

export default function DiagnosticPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "AEObility",
        "alternateName": [
          "AEO Bility",
          "aeo bility",
          "aeo.bility",
          "AEO.bility",
          "AEObility Perth"
        ],
        "url": "https://aeobility.com.au/",
        "telephone": "+61-480-286-282",
        "logo": "https://aeobility.com.au/aeobility-logo-light.svg",
        "foundingDate": "2026-07-21",
        "taxID": "ABN 61 029 803 255",
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "AUSTRALIAN_BUSINESS_NUMBER",
          "name": "ABN",
          "value": "61029803255",
          "url": "https://abr.business.gov.au/ABN/View?id=61029803255"
        },
        "sameAs": [
          "https://abr.business.gov.au/ABN/View?id=61029803255",
          "https://www.crunchbase.com/organization/aeobility",
          "https://www.cbinsights.com/company/aeobility",
          "https://www.producthunt.com/@aeobility",
          "https://www.linkedin.com/company/aeobility",
          "https://dev.to/aeobility",
          "https://github.com/vinsnt76/aeobility"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dianella",
          "addressRegion": "WA",
          "postalCode": "6059",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/diagnostic#webpage",
        "url": "https://aeobility.com.au/diagnostic",
        "name": "Run a Free AI Visibility Scan | AEObility",
        "description": "Test your business details today. Run a free visibility scan to check your structured data, location signals and service information formatting.",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://aeobility.com.au/diagnostic#webapp",
        "name": "AEObility AI Search & Visibility Audit Tool",
        "url": "https://aeobility.com.au/diagnostic",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "SEOAuditTool",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "description": "Interactive visibility diagnostic tool evaluating structured data, location signals, and service information formatting across primary search platforms.",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          "Live 6-Stage Technical Crawl of Raw HTML DOM",
          "Entity Extraction & Wikidata sameAs Node Verification",
          "Semantic Alignment & Vector Distance Calculation",
          "Competitor Visibility & Overlap Benchmarking",
          "JSON-LD Schema & Local Signal Validation",
          "AI Readiness Score & Simulated AI First Impression Computation"
        ],
        "potentialAction": {
          "@type": "UseAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aeobility.com.au/diagnostic?url={url}&intent={intent}",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "query-input": [
            "required name=url",
            "required name=intent"
          ]
        },
        "about": [
          {
            "@type": "Thing",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "Answer Engine Optimisation"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Vector Proximity",
            "description": "Cosine similarity matching models across transformer embedding spaces."
          },
          {
            "@type": "Thing",
            "name": "Entity Salience",
            "description": "Algorithmic extraction weight of core brand nouns within knowledge graphs."
          },
          {
            "@type": "Thing",
            "name": "Chunking",
            "description": "Fragmenting unstructured textual blocks into precise semantic vector windows."
          },
          {
            "@type": "Thing",
            "name": "Embeddings",
            "description": "High-dimensional coordinate layouts generated by transformer-based neural nets."
          }
        ],
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/diagnostic#faq",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the real-time telemetry scan calculate my AI Readiness Score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The core diagnostic pipeline executes a sequential 6-stage crawl of your raw HTML DOM, parsing organisation and service triples, computing high-dimensional vector embeddings, and evaluating your visibility across modern digital maps."
            }
          },
          {
            "@type": "Question",
            "name": "What causes multi-node intent dilution on local business websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Intent dilution occurs when high-impression commercial queries split authority between duplicate landing paths, inducing internal cannibalisation that blocks AI answer engine citation selection."
            }
          },
          {
            "@type": "Question",
            "name": "How is AI Search (AEO) different from regular SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO optimises for keywords, blue links, and search rankings. Answer Engine Optimisation (AEO) structures your content, schema, and entity relationships so generative AI engines (like ChatGPT, Perplexity, and Gemini) extract and cite your business as the definitive answer."
            }
          },
          {
            "@type": "Question",
            "name": "Will this scan affect my live website speed or uptime?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The diagnostic scan is a safe, lightweight, read-only external query. It inspects public HTML, schema markup, and vector distance without impacting server load or uptime."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after I run the scan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You receive an instant on-screen diagnostic report showing your 0–100 AI Readiness Score, simulated AI impression, and factual grounding breakdown. You can also chat directly with AI Bill to explore specific remediation steps."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need technical skills to understand the report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Every diagnostic evaluation provides plain-English summaries alongside technical specifics, categorising findings into quick wins and structural improvements."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to jump on a sales call to get my report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Your report generates directly on-screen with zero sales pressure, zero lock-in contracts, and transparent fixed-price remediation options."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative overflow-x-clip print:min-h-0 print:bg-white print:text-slate-900 print:overflow-visible">
      {/* 1. Under-Layer Lighting Mesh (The Refraction Engine) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
        {/* Top-Right Ambient Violet/Indigo Bloom */}
        <div 
          className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full blur-[120px] opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%)'
          }}
        />
        {/* Mid-Left Electric Cyan Bloom */}
        <div 
          className="absolute top-[32%] -left-48 w-[720px] h-[720px] rounded-full blur-[140px] opacity-75"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.09) 0%, rgba(0, 205, 216, 0.03) 40%, transparent 65%)'
          }}
        />
        {/* Bottom-Right Magenta Accent Pool */}
        <div 
          className="absolute bottom-10 -right-24 w-[550px] h-[550px] rounded-full blur-[130px] opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.07) 0%, rgba(139, 92, 246, 0.03) 45%, transparent 70%)'
          }}
        />
      </div>

      {/* 2. Tactile SVG Noise Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.025] mix-blend-overlay no-print"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="relative z-10 flex flex-col min-h-screen print:min-h-0 print:overflow-visible">
        <Navbar />
        <div className="no-print w-full">
          <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
          <Breadcrumbs />
        </div>
        
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-32 sm:pb-24 flex flex-col items-center print:p-0 print:m-0 print:max-w-full print:block">
          {/* Main Server-Side Rendered H1 Header Block */}
          <div className="text-center mb-6 max-w-2xl mx-auto space-y-2 no-print">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-soehne-breit leading-tight">
              Run a Free AI Visibility Scan
            </h1>
            <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed font-serif">
              Discover whether ChatGPT, Perplexity, and Google AI search engines understand, trust, and surface your business for the services you provide.
            </p>
          </div>

          <Suspense fallback={<div className="text-zinc-400 text-sm animate-pulse font-mono py-12 no-print">Initialising Free Visibility Scanner...</div>}>
            <DiagnosticEngine />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}
