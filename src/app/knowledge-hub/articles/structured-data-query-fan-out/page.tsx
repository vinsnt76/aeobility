import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import RelatedArticles from '@/components/navigation/RelatedArticles';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  FileText,
  AlertCircle,
  Search,
  Cpu,
  Network,
  Sparkles,
  Wrench,
  GitFork,
  Code
} from 'lucide-react';

export const metadata = {
  title: "Structured Data & Query Fan-Out: AI SEO Architecture | AEObility",
  description: "Learn how structured data provides machine-readable entity context during query fan-out in AI SEO and AEO SEO search systems. Technical guide by Vince Baker.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
  },
};

export default function StructuredDataQueryFanOutArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
        "url": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
        "name": "Structured Data and Query Fan-Out: Entity Clarity in AI Search",
        "description": "A technical guide examining structured data, query fan-out in search systems, positional sensitivity in retrieval models, and Schema.org implementation best practices.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#article",
        "headline": "Structured Data & Query Fan-Out: Entity Clarity in AI Search",
        "description": "Understand how structured data complements visible text to provide explicit entity context under query fan-out, while avoiding overstated claims regarding AI retrieval.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out"
        },
        "author": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-07-01",
        "dateModified": "2026-08-13",
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#imageobject"
        },
        "articleSection": [
          "What Query Fan-Out Means",
          "Where Positional Bias Meets Query Fan-Out",
          "What Structured Data Can and Cannot Do",
          "Engineering Structured Data for Technical SEO",
          "Practical Implementation Example",
          "Technical FAQ"
        ],
        "keywords": [
          "query fan-out",
          "structured data",
          "AI search",
          "entity optimisation",
          "positional bias",
          "schema engineering",
          "AEO",
          "AEObility"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#imageobject",
        "url": "https://aeobility.com.au/images/knowledge-hub/structured-data-query-fan-out_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/structured-data-query-fan-out_AEObility.webp",
        "encodingFormat": "image/webp",
        "name": "Query Fan-Out Visualisation Banner",
        "description": "Abstract landscape visualisation showing query fan-out constrained within a strong data structure using azure, green, and orange gradients.",
        "uploadDate": "2026-07-01",
        "creator": {
          "@id": "https://aeobility.com.au/#vincebaker"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vince Baker",
        "jobTitle": "Senior Information Architect & AEO Strategist",
        "description": "Vince Baker specialises in structured data engineering, entity SEO architecture, and AI vector retrieval context for Australian enterprises.",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/icons/android-chrome-512x512.png",
        "description": "AEObility helps Australian small businesses become discoverable, understandable, and recommended across search, maps, and generative AI.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Structured Data & Query Fan-Out",
            "item": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is query fan-out in AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Query fan-out is a system behaviour where a search system expands a single user query into multiple related searches or sub-intents to retrieve comprehensive information."
            }
          },
          {
            "@type": "Question",
            "name": "Does structured data guarantee AI search citations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Structured data helps search engines interpret page content and qualify for eligible rich results, but it does not guarantee rankings, retrieval, or AI citations."
            }
          },
          {
            "@type": "Question",
            "name": "Is Schema.org markup required for Google AI Overviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Google's documentation explicitly notes that structured data is not required for AI Overviews, and there is no special Schema markup for AI features."
            }
          }
        ]
      }
    ]
  };

  const engineeringSteps = [
    {
      title: "1. Use Precise Types & Stable Identifiers",
      desc: "Deploy exact Schema.org types (e.g. LocalBusiness, Product, Organisation) and define consistent URI identifiers (@id) to clarify entity boundaries across your domain."
    },
    {
      title: "2. Define Explicit Entity Relationships",
      desc: "Connect related entities using Schema.org properties such as brand, author, areaServed, or offers. This gives search engines machine-readable context between distinct assets."
    },
    {
      title: "3. Prioritise High-Intent Attributes",
      desc: "Populate properties that correspond to common search sub-intents, including service locations, pricing structures, specifications, and business credentials."
    },
    {
      title: "4. Ensure Markup Matches Visible Content",
      desc: "Google documentation requires structured data to accurately represent content visible to human users. Do not add markup for hidden or unverified claims."
    },
    {
      title: "5. Maintain Web-Wide Entity Consistency",
      desc: "Keep core facts (NAP, services, pricing, credentials) consistent across website schema, Google Business Profile, Merchant Center, and authoritative directories."
    }
  ];

  const microFaqs = [
    {
      q: "What is query fan-out in simple terms?",
      a: "Query fan-out occurs when a search system expands a user's prompt into multiple concurrent queries to cover different subtopics, such as pricing, location, or specifications."
    },
    {
      q: "What can structured data do for AI search?",
      a: "Structured data provides explicit context about entities and relationships. It complements visible text to help search systems interpret page content, but it is not a shortcut or guarantee for AI citations."
    },
    {
      q: "Is Schema.org markup required for Google AI Overviews?",
      a: "No. Google explicitly states that structured data is not required for AI Overviews or AI Mode, and there is no special Schema markup specifically designed for AI features."
    },
    {
      q: "Does schema directly improve rankings or citations?",
      a: "No. Schema helps search systems understand page content and qualify for rich results, but there is no guaranteed citation or ranking uplift."
    },
    {
      q: "What happens if structured data is inconsistent?",
      a: "Conflicting or ambiguous attributes across platforms make entity reconciliation more difficult, reducing search engine confidence when matching facts to your brand."
    },
    {
      q: "How should structured data be validated?",
      a: "Validate your JSON-LD markup using Google's Rich Results Test and Schema.org validators, and monitor indexing status in Google Search Console."
    }
  ];

  const jsonLdExample = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://example.com.au/#business",
      "name": "Perth Plumbing Solutions",
      "url": "https://example.com.au",
      "telephone": "+61-8-9000-0000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "WA",
        "postalCode": "6000",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Perth"
      },
      "sameAs": [
        "https://www.facebook.com/exampleplumbing",
        "https://www.linkedin.com/company/exampleplumbing"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://example.com.au/blocked-drains#service",
      "name": "Blocked Drain Clearing Perth",
      "provider": {
        "@id": "https://example.com.au/#business"
      },
      "areaServed": "Perth Metropolitan Area",
      "description": "Emergency blocked drain clearing and CCTV pipe inspection services in Perth."
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Layout Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <article className="flex flex-col gap-10">

          {/* Article Header */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical SEO &amp; Entity Architecture Guide</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Structured Data &amp; <span className="text-gradient-aeo">Query Fan-Out</span> in AI SEO
            </h1>

            <p className="text-lg md:text-xl font-light text-white/80 font-serif leading-relaxed">
              Structured data provides explicit machine-readable entity context when search engines and AI search assistants expand complex user queries into multiple sub-intents. Author Vince Baker details how structured data and Schema.org microdata support technical <strong>AI SEO</strong> and <strong>AEO SEO</strong> under query fan-out, while clarifying what Schema can and cannot do for generative search visibility.
            </p>

            <p className="text-base sm:text-lg font-light text-white/90 font-serif leading-relaxed">
              AI search engines no longer evaluate a single keyword or phrase in isolation. When a user asks a complex question, modern systems break that prompt into multiple sub-queries, a process known as query fan-out. Structured data and atomic answer blocks give these systems the scaffolding they need to correctly interpret your entity across all sub-intents.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Updated August 2026</span>
              <span>&bull;</span>
              <span>6 min read</span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker</Link></span>
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/knowledge-hub/structured-data-query-fan-out_AEObility.webp"
              alt="Structured data and query fan-out architecture visualising machine-readable Schema.org entity anchors and multi-intent retrieval by AEObility in Perth, Western Australia."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Core Thesis Statement Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              Core Technical Thesis
            </h2>
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Structured data can provide explicit context about entities, products, organisations, and relationships. This may help search systems interpret a page, but it does not guarantee retrieval, rankings, AI citations, or inclusion in an AI-generated answer. Its value is strongest when the markup accurately reflects visible, useful content and is supported by sound technical SEO, authoritative content, local signals, and consistent business information.
            </p>
          </div>

          {/* Executive Summary TL;DR Block */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 font-sans shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              TL;DR: Key Takeaways
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Query Fan-Out:</strong> AI search engines expand broad user prompts into multiple concurrent sub-queries covering pricing, location, and credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Entity Clarity:</strong> Unambiguous machine-readable facts prevent retrieval failure when engines synthesise answer fragments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Stable Identifiers:</strong> Using consistent <code className="text-aeo-cyan font-mono text-xs">@id</code> URIs across your Schema graph connects fragmented content blocks back to your core entity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                <span><strong>Realistic Scope:</strong> Structured data provides essential machine context, but it does <strong>not</strong> guarantee AI citations or bypass content retrieval pipelines.</span>
              </li>
            </ul>
          </div>

          {/* Radial Conversion Corridor Callout Card */}
          <aside className="my-4 p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border-l-4 border-aeo-cyan rounded-r-2xl shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-widest block">
                  Commercial Sprint Corridor
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Deploy Query Fan-Out Architecture on Your Business Site
                </h3>
                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  Translate query fan-out theory into a validated, machine-readable entity graph for your organisation with the <strong>$995 AUD Strategic Blueprint</strong> or targeted <strong>AEO Technical Sprints</strong>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="px-5 py-3 rounded-xl bg-aeo-cyan text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-colors text-center shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                >
                  Explore $995 Blueprint
                </Link>
                <Link
                  href="/solutions/aeo-sprint"
                  className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/15 transition-colors text-center"
                >
                  AEO Technical Sprints
                </Link>
              </div>
            </div>
          </aside>

          {/* Section 1: How Query Fan-Out Impacts Technical SEO and Entity Clarity */}
          <section id="what-is-fanout" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              How Query Fan-Out Impacts Technical SEO and Entity Clarity
            </h2>

            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 font-sans text-sm">
              <p className="text-white/90 font-medium leading-relaxed">
                Google officially describes query fan-out as concurrent, related queries generated to retrieve additional information for a user&apos;s query. Some AI search systems may expand a user&apos;s question into multiple related searches or retrieval tasks. The number and nature of those searches vary, so fan-out should be treated as a system behaviour rather than a fixed sequence of checks.
              </p>
            </div>

            <div className="space-y-4 text-white/85 text-base sm:text-lg font-light leading-relaxed font-serif">
              <p>
                When a user asks a multi-faceted question, search engines do not rely solely on a single keyword lookup. Instead, the retrieval pipeline may decompose the prompt into several targeted sub-queries covering specific subtopics, such as pricing, local service availability, materials, or compliance credentials.
              </p>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 font-sans text-sm">
                <h3 className="font-semibold text-white">
                  Example: A search for &ldquo;best plumber in Perth for blocked drains&rdquo; might generate sub-queries for:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Specific blocked drain clearing methods and high-pressure jetting services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Geographic coverage within Perth suburban areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Emergency call-out availability and response times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Upfront pricing indicators and warranty policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Customer reviews and trade licensing credentials</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base font-normal text-white">
                When content is clear, well-structured, and supported by accurate Schema markup, search systems can more easily reconcile distinct facts back to the target entity across related sub-queries.
              </p>
            </div>

            {/* Sub-Section: Stable IDs as passage-context anchors */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Network className="w-5 h-5 text-aeo-cyan" />
                <span>Stable IDs as Passage-Context Anchors</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                <p>
                  Query fan-out can produce multiple retrieval paths for the same underlying entity. A stable identifier can help an indexing or retrieval system recognise that separate passages refer to the same organisation, product, service, or topic.
                </p>
                <p>
                  For example, a passage about an organisation&apos;s AEO services might be indexed with:
                </p>

                <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs space-y-1.5 text-aeo-cyan/90">
                  <div><span className="text-white/50">Entity ID:   </span>https://example.com/#organisation</div>
                  <div><span className="text-white/50">Page ID:     </span>https://example.com/services/aeo</div>
                  <div><span className="text-white/50">Passage ID:  </span>https://example.com/services/aeo#passage-local-seo</div>
                </div>

                <p>
                  These identifiers can support entity-aware chunking, deduplication, graph expansion, and citation provenance. If several passages refer to the same entity, the retrieval system can preserve that relationship rather than treating every passage as an isolated text fragment.
                </p>
                <p>
                  This is an architectural benefit rather than a guaranteed search-ranking signal. A stable <code className="text-aeo-cyan font-mono text-xs">@id</code> does not automatically increase vector similarity, make a passage easier for Google to retrieve, or guarantee an AI citation. Its value depends on whether the indexing or retrieval system actually ingests and uses the identifiers.
                </p>
              </div>
            </div>

            {/* Sub-Section: Retrieval Complexity */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GitFork className="w-5 h-5 text-aeo-cyan" />
                <span>Why Fan-Out Increases Retrieval Complexity</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                <p>
                  Query fan-out expands retrieval complexity because the engine must evaluate multiple sub-intents simultaneously across candidate web pages. If entity details are ambiguous, split across unlinked pages, or expressed inconsistently, the retriever may fail to match relevant facts to the target business entity.
                </p>
                <p>
                  Aligning your website with <Link href="/services/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Principles</Link> and <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-semibold">AI Semantic SEO</Link> provides the structural clarity needed to keep entity facts readable across multiple search passes.
                </p>
                <p className="text-xs sm:text-sm text-aeo-cyan/90 font-mono italic pt-2 border-t border-white/5">
                  Section Summary: &ldquo;Maintaining clear entity signals, consistent schema, and structured data helps AI search engines reconcile business facts across complex multi-intent retrieval passes.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Flowchart Diagram: Query Fan-Out Architecture */}
          <figure role="img" aria-label="Query Fan-Out Architecture Diagram showing user query decomposition into sub-queries and entity attribute matching" className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-4">
            <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider text-center">
              Diagram: Query Fan-Out Sub-Query Expansion Architecture
            </h3>
            <svg viewBox="0 0 760 180" className="w-full h-auto text-xs font-mono max-w-xl" aria-hidden="true">
              <g transform="translate(10, 70)">
                <rect x="0" y="0" width="130" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                <text x="65" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">User Query</text>
              </g>
              <line x1="140" y1="90" x2="190" y2="90" stroke="#00cdd8" strokeWidth="2" />
              <g transform="translate(190, 70)">
                <rect x="0" y="0" width="140" height="40" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                <text x="70" y="24" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Fan-Out Expansion</text>
              </g>
              <path d="M 330 90 L 370 30 M 330 90 L 370 90 M 330 90 L 370 150" stroke="#00cdd8" strokeWidth="1.5" strokeDasharray="3 3" />
              <g transform="translate(370, 10)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 1: Service Type</text>
              </g>
              <g transform="translate(370, 72)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 2: Local Area</text>
              </g>
              <g transform="translate(370, 134)">
                <rect x="0" y="0" width="170" height="35" rx="6" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                <text x="85" y="22" textAnchor="middle" fill="#ffffff" fontSize="9">Sub-Query 3: Pricing/Reviews</text>
              </g>
              <line x1="540" y1="27" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <line x1="540" y1="90" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <line x1="540" y1="151" x2="590" y2="90" stroke="#00cdd8" strokeWidth="1.5" />
              <g transform="translate(590, 70)">
                <rect x="0" y="0" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                <text x="75" y="18" textAnchor="middle" fill="#00cdd8" fontSize="10" fontWeight="bold">Entity Context</text>
                <text x="75" y="32" textAnchor="middle" fill="#ffffff" fontSize="9">Verified Page Facts</text>
              </g>
            </svg>

            <figcaption className="p-3 bg-white/5 rounded-xl border border-white/5 text-center text-xs text-white/70 font-sans max-w-xl">
              Query fan-out architecture mapping user query decomposition into concurrent sub-queries and entity attribute resolution across web documents.
            </figcaption>
          </figure>

          {/* Section 2: Where Positional Bias Meets Query Fan-Out */}
          <section id="positional-collision" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Where Positional Bias Meets Query Fan-Out
              </h2>
            </div>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Recent retrieval research has found position sensitivity in several dense embedding and late-interaction (ColBERT-style) models, particularly when relevant information appears later in a passage. The effect varies by model, corpus, passage length, and retrieval pipeline, and should not be assumed to describe every AI search system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Concept 1 */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
                    <Search className="w-4 h-4" />
                    <span>1. Passage Retrieval Sensitivity</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Dense Vector Placement Effects</h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-aeo-cyan text-xs font-mono uppercase">Dense Model Sensitivity:</strong>
                      <p className="text-xs text-white/70">A 2025 EMNLP Findings study observed performance degradation in certain dense embedding models when key details appeared later in long passages, whereas traditional BM25 sparse search and full rerankers showed greater positional robustness.</p>
                      <p className="text-xs text-aeo-cyan/90 font-sans italic pt-1">Plain-English note: Dense embedding models convert your content into mathematical concepts. When key facts are buried deep in a paragraph, AI search tools struggle to map those concepts accurately during quick micro-queries.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-aeo-cyan text-xs font-mono uppercase">Passage Structuring:</strong>
                      <p className="text-xs text-white/70">Front-loading core facts in key sections helps preserve readability for both human readers and dense retrieval algorithms.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concept 2 */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-purple-400/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
                    <Cpu className="w-4 h-4" />
                    <span>2. LLM Context Window Synthesis</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Lost in the Middle Phenomenon</h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-purple-300 text-xs font-mono uppercase">Attention Distribution:</strong>
                      <p className="text-xs text-white/70">Large language models during synthesis exhibit higher attention weight at the beginning and end of input prompts, making middle-placed facts statistically harder to extract.</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl space-y-1">
                      <strong className="text-purple-300 text-xs font-mono uppercase">Multi-Pass Synthesis:</strong>
                      <p className="text-xs text-white/70">When an answer engine synthesises responses from dozens of retrieved snippets, concise, atomic blocks remain easier to process accurately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Schema Limitations and Entity Clarity in AI Search */}
          <section id="why-structured-data" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Schema Limitations and Entity Clarity in AI Search
            </h2>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Google&apos;s official developer guidance emphasizes that structured data helps search engines understand page content and qualify for eligible rich results. However, Google explicitly states that structured data is <strong>not required for generative AI search</strong>, and there is no special Schema.org markup for AI Overviews or AI Mode.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-aeo-cyan/30 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan" />
                  <span>What Structured Data Can Do</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Provide explicit, machine-readable entity definitions and property values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Declare explicit relationships between organisations, products, services, and authors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Qualify eligible web pages for Google rich results (e.g. products, FAQs, local business snippets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0 mt-2" />
                    <span>Complement visible text with structured metadata to aid search system interpretation</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                  <span>What Structured Data Cannot Do</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                    <span>Bypass traditional crawling, indexing, or passage retrieval pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                    <span>Guarantee inclusion, higher ranking, or citation within AI-generated answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                    <span>Compensate for poor content quality, weak local signals, or thin on-page text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-2" />
                    <span>Act as an independent data channel for unverified or non-visible page claims</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-Section: Multi-Intent Retrieval & Entity Reconciliation */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-white">Entity Reconciliation &amp; Web Consistency</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                Conflicting or ambiguous attributes across directories, structured markup, or external platforms can make entity reconciliation more difficult and may reduce confidence in which facts belong to the same entity.
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                For a practical example of entity schema across multi-attribute products and local service signals, see our <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline font-semibold">Baby Bento Case Study</Link>.
              </p>
            </div>
          </section>

          {/* Section 4: Technical SEO Requirements for Schema Implementation */}
          <section id="engineering-schema" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Technical SEO Requirements for Schema Implementation
            </h2>

            <div className="space-y-4">
              {engineeringSteps.map((step, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-base font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Implementation Example Section */}
          <section id="implementation-example" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Code className="w-4 h-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Practical Implementation: Valid JSON-LD Example
              </h2>
            </div>

            <p className="text-white/80 text-base leading-relaxed font-serif">
              Below is a practical JSON-LD example demonstrating linked entity markup for a local service business. It uses nested Schema graph nodes, explicit `@id` URIs, and property definitions that mirror visible on-page content:
            </p>

            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs overflow-x-auto shadow-2xl">
              <div className="flex items-center justify-between text-white/50 text-[11px] pb-2 border-b border-white/10 font-sans">
                <span>JSON-LD Graph Example</span>
                <span className="text-aeo-cyan">application/ld+json</span>
              </div>
              <pre className="text-aeo-cyan/90 leading-relaxed">
                <code>{jsonLdExample}</code>
              </pre>
            </div>

            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl space-y-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">Google Requirement Warning</span>
              <p className="text-xs text-white/90 leading-relaxed font-serif">
                Google guidelines require that all properties in your JSON-LD markup accurately reflect human-readable text visible on the web page. Adding structured data for information users cannot see violates Google Search policies.
              </p>
            </div>

            {/* Mid-Page Conversion CTA Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base font-bold text-white">Want your structured data engineered for technical SEO?</h3>
                <p className="text-xs text-white/70 font-light">Audit your website schema and entity consistency with AEObility.</p>
              </div>
              <Link
                href="/diagnostic"
                className="px-5 py-2.5 rounded-full bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shrink-0"
              >
                <span>Request Technical Audit</span>
              </Link>
            </div>
          </section>

          {/* Section: AEObility's View */}
          <div className="p-6 bg-gradient-to-r from-aeo-purple/10 via-neutral-900 to-transparent border-l-4 border-aeo-purple rounded-r-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-aeo-purple flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AEObility’s View</span>
            </div>
            <p className="text-sm md:text-base text-white/90 font-light leading-relaxed font-serif italic">
              Structured data is not a ranking trick; it is a resilience mechanism. By providing answer engines with unambiguous machine-readable facts, you ensure your business doesn&apos;t just get indexed: you <strong className="text-aeo-cyan not-italic">Get Found. Get Chosen.</strong>
            </p>
          </div>

          {/* Micro-FAQs Section */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Micro-FAQs</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Query Fan-Out &amp; Structured Data FAQ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & Resources Section */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Tools &amp; Resources for Entity SEO</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/diagnostic" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Search Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Evaluate entity clarity, schema completeness, and technical SEO structure for your domain.
                </p>
              </Link>

              <Link href="/knowledge-hub/semantic-seo" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Semantic SEO &amp; Atomic Blocks</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn how to construct structured Atomic Answer Blocks and semantic entity content.
                </p>
              </Link>

              <Link href="/knowledge-hub/articles/entity-authority-building" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Entity Authority Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Discover how search engines parse entity attributes across web ecosystems.
                </p>
              </Link>

              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Positional Bias Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Examine retrieval sensitivity and synthesis bottlenecks in dense search models.
                </p>
              </Link>
            </div>
          </section>

          {/* Author Entity Bio Box */}
          <section className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-aeo-cyan/50 shrink-0 shadow-lg">
              <Image
                src="/images/about/Profile-Picture-Vinnie.png"
                alt="Vince Baker - Senior Information Architect &amp; AEO Strategist Perth"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white">Vince Baker</h3>
                <span className="text-xs text-aeo-cyan font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">Senior Information Architect &amp; AEO Strategist</span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Vince Baker is an Answer Engine Optimisation (AEO) consultant based in Perth, Western Australia. He specialises in structured data engineering, entity SEO architecture, and AI vector retrieval context for Australian enterprises.
              </p>
              <div className="pt-1 text-xs">
                <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Entity Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* Reciprocal Related Articles Mesh */}
          <RelatedArticles currentSlug="structured-data-query-fan-out" />

          {/* Bottom Audit CTA */}
          <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
            <h3 className="text-xl md:text-3xl font-extrabold text-white">
              Is your business built for AI search? <span className="text-gradient-aeo">Get Found. Get Chosen.</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
              Claim your free AI Search Visibility Audit with AEObility today and see how answer engines read your brand across Search, Maps, and AI.
            </p>
            <div className="pt-2">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
              >
                <span>Claim Your Free AI Search Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link 
              href="/knowledge-hub/articles/positional-bias-in-retrieval" 
              className="group text-xs font-semibold text-white/60 hover:text-aeo-cyan transition-colors flex items-center gap-1"
            >
              &larr; Prev: Positional Bias in Retrieval
            </Link>
            
            <Link 
              href="/knowledge-hub/articles" 
              className="text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
            >
              All Articles &amp; Technical Reading &rarr;
            </Link>
          </div>

        </article>

      </main>

      <Footer />
    </div>
  );
}
