import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import ScoreCalculator from '@/components/telemetry/ScoreCalculator';
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
  Code,
  Activity,
  Zap,
  Lock,
  Database,
  BarChart3,
  Bot,
  ShieldAlert,
  Sliders,
  Terminal,
  FileCode,
  ArrowDown,
  Info,
  Calendar,
  Check,
  Compass,
  Lightbulb
} from 'lucide-react';

export const metadata = {
  title: "Telemetry Diagnostic Tool: Technical Architecture Guide | AEObility",
  description: "An open technical specification of AEObility Architecture v2.6 detailing dual-vector hashing, text-embedding-004 RAG simulations, Subject-Predicate-Object entity triples, and server-side HMAC session security.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
  },
  openGraph: {
    title: "Telemetry Diagnostic Tool: Technical Architecture Guide | AEObility",
    description: "An open technical specification of AEObility Architecture v2.6 detailing dual-vector hashing, text-embedding-004 RAG simulations, Subject-Predicate-Object entity triples, and server-side HMAC session security.",
    url: "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telemetry Diagnostic Tool: Technical Architecture Guide | AEObility",
    description: "An open technical specification of AEObility Architecture v2.6 detailing dual-vector hashing, text-embedding-004 RAG simulations, Subject-Predicate-Object entity triples, and server-side HMAC session security.",
    images: ["https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp"],
  },
};

export default function TelemetryDiagnosticArchitectureArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organisation",
        "name": "AEObility",
        "legalName": "Trekaboutoz",
        "url": "https://aeobility.com.au",
        "telephone": "+61 480 286 282",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
        },
        "description": "AEObility helps Australian small-to-medium businesses become discoverable, understandable, and recommended across AI search, maps, and RAG systems.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/about/freelance-seo-consultant-perth#person",
        "name": "Vince Baker",
        "jobTitle": "Chief AEO Architect",
        "url": "https://aeobility.com.au/about/freelance-seo-consultant-perth",
        "sameAs": [
          "https://aeobility.com.au",
          "https://aeobility.com.au/about/freelance-seo-consultant-perth"
        ],
        "worksFor": {
          "@id": "https://aeobility.com.au/#organisation"
        }
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#article",
        "url": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
        "headline": "Telemetry Diagnostic Tool: Technical Architecture Guide",
        "image": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp"
        },
        "description": "An open technical specification of AEObility Architecture v2.6 detailing dual-vector hashing, text-embedding-004 RAG simulations, Subject-Predicate-Object entity triple extraction, and server-side HMAC session security.",
        "inLanguage": "en-AU",
        "educationalLevel": "Advanced",
        "proficiencyLevel": "Expert",
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture",
        "dependencies": "Google Gemini text-embedding-004, gemini-3.7-flash, Wikidata SPARQL Engine",
        "author": {
          "@id": "https://aeobility.com.au/about/freelance-seo-consultant-perth#person"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organisation"
        },
        "datePublished": "2026-08-13",
        "dateModified": "2026-09-03",
        "about": [
          {
            "@type": "SoftwareApplication",
            "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#software",
            "name": "AEObility Telemetry Diagnostic Engine",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "softwareVersion": "2.6"
          },
          {
            "@type": "Thing",
            "name": "Retrieval-Augmented Generation",
            "sameAs": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
          },
          {
            "@type": "Thing",
            "name": "Vector Embedding",
            "sameAs": "https://en.wikipedia.org/wiki/Word_embedding"
          },
          {
            "@type": "Thing",
            "name": "Cosine Similarity",
            "sameAs": "https://en.wikipedia.org/wiki/Cosine_similarity"
          }
        ],
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "articleSection": [
          "Architecture & Vector Map Infrastructure",
          "RAG Retrieval Simulation & Content Structuring",
          "System APIs & Execution Flow",
          "5-Category Weighted Scoring Model & Mathematics",
          "Ingestion Pipeline into AI Bill",
          "Machine Interface Protocols: NLWeb & MCP",
          "Privacy, Data Handling & Security Controls",
          "System Bounds & Future Roadmap",
          "Continue Exploring"
        ],
        "keywords": [
          "telemetry diagnostic engine",
          "vector mapping architecture",
          "rag information dilution",
          "mcp schema configuration",
          "text-embedding-004 rag",
          "SPO entity extraction",
          "ai readiness score formula",
          "nlweb protocol",
          "AEO",
          "AEObility"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Articles",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Telemetry Diagnostic Tool: Technical Architecture Guide",
            "item": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/telemetry-diagnostic-architecture#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does the AEObility Telemetry Diagnostic measure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Telemetry Diagnostic evaluates selected page, schema, entity, and competitor signals associated with machine-readable website content using AEObility's proprietary crawl and retrieval-simulation testing."
            }
          },
          {
            "@type": "Question",
            "name": "Does the diagnostic access live search systems like ChatGPT or Google AI Overviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The diagnostic does not access or reproduce the proprietary internal ranking algorithms or retrieval indexes of third-party platforms. It provides directional diagnostic indicators derived from AEObility's documented test configuration."
            }
          },
          {
            "@type": "Question",
            "name": "How is the cosine similarity 0.62 threshold defined?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEObility currently treats a cosine similarity score above 0.62 as an internal simulation pass condition within this specific retrieval simulation and model configuration. Similarity values are not portable across different embedding models or third-party platforms."
            }
          },
          {
            "@type": "Question",
            "name": "How does the MCP endpoint (/api/mcp) interact with clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEObility publishes a machine-readable tool catalogue at /api/mcp and provides an MCP-compatible integration layer for supported clients to query structured entity nodes."
            }
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp",
        "url": "https://aeobility.com.au/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp",
        "name": "Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline",
        "description": "Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline, vector mapping infrastructure, and RAG retrieval simulations.",
        "caption": "Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline",
        "keywords": [
          "Telemetry Diagnostic Engine",
          "AI Bill",
          "6-stage diagnostic pipeline",
          "Answer Engine Optimisation",
          "AEO Architecture",
          "Vector Map Infrastructure",
          "RAG Simulation",
          "Machine Legibility",
          "Entity Architecture"
        ],
        "representativeOfPage": true,
        "inLanguage": "en-AU"
      }
    ]
  };

  const microFaqs = [
    {
      q: "What does the AEObility Telemetry Diagnostic measure?",
      a: "The Telemetry Diagnostic evaluates selected signals associated with machine-readable, retrieval-friendly website content. It uses AEObility’s proprietary crawl, semantic similarity, entity, competitor, and retrieval-simulation methods to identify opportunities relevant to conventional search and AI-mediated discovery."
    },
    {
      q: "Does the diagnostic access live platforms like ChatGPT, Gemini, or Claude?",
      a: "No. The diagnostic does not reproduce or access the proprietary retrieval, ranking, citation, or recommendation systems of ChatGPT, Perplexity, Gemini, Claude, Google, or other external platforms. Its findings are directional diagnostic signals, not predictions or guarantees of visibility."
    },
    {
      q: "How is the 0.62 cosine similarity threshold interpreted?",
      a: "AEObility currently treats a cosine similarity score above 0.62 as an internal simulation pass condition within this specific retrieval simulation, model configuration, and evaluation design. Cosine similarity values are not portable across embedding models, content types, vector indexes, or third-party AI products."
    },
    {
      q: "How does the MCP endpoint (/api/mcp) interact with clients?",
      a: "AEObility publishes a machine-readable tool catalogue at /api/mcp and provides an MCP-compatible integration layer for supported clients to query structured entity nodes."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-10 w-full flex flex-col gap-10">
        <article className="flex flex-col gap-10">

          {/* Technical Architecture Guide Header */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold font-mono tracking-wide">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>Technical Architecture Spec &bull; v2.6 (Last tested September 2026)</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Telemetry Diagnostic Tool: <span className="text-gradient-aeo">Technical Architecture Guide</span>
            </h1>

            {/* Hero Architecture Visual Banner */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl space-y-2">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp"
                  alt="Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/90">
                  <div className="space-y-1">
                    <div className="font-bold text-sm text-white">AEObility Telemetry Diagnostic Engine Pipeline</div>
                    <div className="text-white/70 font-light">Crawl &rarr; Semantic Comparison &rarr; Entity Checks &rarr; RAG Simulation &rarr; AI Bill Handoff</div>
                  </div>
                  <div className="px-3 py-1 bg-black/80 backdrop-blur border border-aeo-cyan/30 rounded-lg text-aeo-cyan font-mono text-[11px] font-bold">
                    Architecture v2.6 Spec
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summaries (Dual Audience) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Business Executive Summary */}
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl space-y-3 font-serif shadow-xl">
                <div className="flex items-center gap-2 text-xs font-sans font-bold text-aeo-cyan uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Executive Summary (For Business Owners)</span>
                </div>
                <p className="text-white/90 text-sm font-light leading-relaxed">
                  The AEObility Telemetry Diagnostic reviews how clearly a website communicates its services, topics, entities, and commercial relevance. It combines website crawling, semantic comparison, structured-data checks, competitor analysis, and a controlled retrieval simulation to produce a prioritised scorecard. The score helps identify improvement opportunities; it does not predict or guarantee visibility in any external AI platform.
                </p>
                <div className="p-3 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-xl space-y-1 text-xs font-sans text-white/90">
                  <span className="font-bold text-aeo-cyan flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Why Clarity Matters for AI Visibility</span>
                  </span>
                  <p className="text-[11px] text-white/80 font-serif leading-relaxed">
                    When AI search engines (like Perplexity, ChatGPT, or Google AI Overviews) answer user questions, they extract precise, unambiguous information blocks. If a website&apos;s copy is diluted or lacks explicit entity structure, AI models bypass it in favour of clearer competitor sources.
                  </p>
                </div>
              </div>

              {/* Technical Specification Summary */}
              <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-xl">
                <div className="flex items-center gap-2 font-bold text-purple-300 uppercase tracking-wider text-[11px]">
                  <Code className="w-4 h-4" />
                  <span>For Technical Readers &amp; Engineers</span>
                </div>
                <p className="text-white/80 font-light leading-relaxed font-sans text-xs">
                  This document provides an open technical specification of AEObility Architecture v2.6 (last tested September 2026). It details our dual vector hashing infrastructure, text-embedding-004 RAG simulation testing, 5-category scoring math, AI Bill ingestion pipeline, and NLWeb/MCP protocols.
                </p>
                <div className="text-[11px] text-aeo-cyan pt-1 border-t border-white/10">
                  Stack: Next.js App Router &bull; Google Gemini text-embedding-004 &bull; gemini-3.7-flash &bull; Wikidata SPARQL
                </div>
              </div>
            </div>

            {/* CTA 1: Contextual Hero CTA */}
            <div className="p-4 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans shadow-lg">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-sm font-bold text-white">Want to see how your site performs?</div>
                <div className="text-xs text-white/70 font-light">Run a free diagnostic using your website URL and target search intent.</div>
              </div>
              <Link
                href="/diagnostic"
                className="px-5 py-2.5 rounded-lg bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(0,205,216,0.3)] shrink-0 flex items-center gap-2"
              >
                <span>Scan my website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Author & Metadata Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-3 font-sans">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Architecture Version: <strong className="text-white">v2.6 (Last tested September 2026)</strong></span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker (Chief AEO Architect)</Link></span>
            </div>

            {/* Prominent Platform Disclaimer Box */}
            <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-2 text-xs text-amber-200/90 font-sans shadow-lg">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-400">
                <ShieldAlert className="w-4 h-4" />
                <span>Diagnostic Scope &amp; External Platform Boundaries</span>
              </div>
              <p className="leading-relaxed font-light">
                The diagnostic does not reproduce or access the proprietary retrieval, ranking, citation, or recommendation systems of ChatGPT, Perplexity, Gemini, Claude, Google, or other external platforms. Its findings are directional diagnostic signals generated from AEObility’s documented test configuration, not predictions or guarantees of visibility.
              </p>
              <div className="text-[11px] text-amber-300 font-mono pt-1 border-t border-amber-500/20">
                <strong>What is tested:</strong> AEObility measures semantic proximity under our specific Gemini text-embedding-004 configuration, schema completeness, SPO entity triples, and competitor content volume within our controlled test environment.
              </div>
            </div>
          </header>

          {/* Diagram 1: End-to-End Diagnostic Flow SVG */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Diagram 1: End-to-End Diagnostic Flow</span>
            </div>

            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              {/* SVG Pipeline Diagram */}
              <div className="w-full overflow-x-auto py-2">
                <div className="min-w-[700px] flex items-center justify-between gap-2 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center flex-1">
                    <span className="text-aeo-cyan font-bold block mb-1">1. Input</span>
                    <span className="text-white/70 text-[11px] block">URL + Intent</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />

                  {/* Step 2 */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center flex-1">
                    <span className="text-aeo-cyan font-bold block mb-1">2. Crawl</span>
                    <span className="text-white/70 text-[11px] block">Page &amp; Competitors</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />

                  {/* Step 3 */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center flex-1">
                    <span className="text-aeo-cyan font-bold block mb-1">3. Extract</span>
                    <span className="text-white/70 text-[11px] block">Copy &amp; Schema</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />

                  {/* Step 4 */}
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center flex-1">
                    <span className="text-purple-300 font-bold block mb-1">4. Simulate</span>
                    <span className="text-white/70 text-[11px] block">Semantic + RAG + SPO</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />

                  {/* Step 5 */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center flex-1">
                    <span className="text-aeo-cyan font-bold block mb-1">5. Score</span>
                    <span className="text-white/70 text-[11px] block">5-Category Math</span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />

                  {/* Step 6 */}
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center flex-1">
                    <span className="text-emerald-400 font-bold block mb-1">6. Handoff</span>
                    <span className="text-white/70 text-[11px] block">AI Bill Handoff</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 text-xs text-white/70 font-sans">
                <span className="font-bold text-white uppercase text-[11px] font-mono block">What to notice in Diagram 1:</span>
                <p className="font-serif text-white/80 leading-relaxed">
                  How raw page copy and search intent pass through parallel semantic, entity, and competitor checks before merging into a single score and handing off context to AI Bill.
                </p>
              </div>
            </div>

            {/* CTA 2: Contextual CTA */}
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-bold text-white">Find your biggest visibility bottleneck</div>
                <div className="text-xs text-white/60 font-light">The diagnostic converts crawl, semantic, entity, competitor, and technical signals into a prioritised report.</div>
              </div>
              <Link
                href="/diagnostic"
                className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-all border border-white/10 shrink-0"
              >
                <span>Get my visibility score</span>
              </Link>
            </div>
          </section>

          {/* Glossary of Key Technical Terms */}
          <section className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 font-sans shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Glossary of Key Technical Terms</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-aeo-cyan">Embedding</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">A numerical vector representation of text used for semantic comparison in high-dimensional vector spaces.</p>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-aeo-cyan">Cosine Similarity</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">A mathematical measure of how closely two vector direction angles align invariant to total document length.</p>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-purple-300">SPO Triple</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">A Subject&ndash;Predicate&ndash;Object relationship statement used to build structured entity knowledge graphs.</p>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-purple-300">RAG Simulation</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">An internal stress-test evaluating whether focused content chunks survive retrieval cutoffs for target queries.</p>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-emerald-400">MCP Protocol</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">Model Context Protocol; a machine interface exposing structured tools and data to compatible AI clients.</p>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                <span className="font-bold text-white font-mono block text-emerald-400">Content Dilution</span>
                <p className="text-white/70 font-light leading-relaxed font-serif">The phenomenon where mixing disparate topics into one text block dilutes semantic retrieval focus.</p>
              </div>
            </div>
          </section>

          {/* Architecture Index (Table of Contents) */}
          <nav aria-label="Architecture Index" className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-sans shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Architecture Navigation Index</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs text-white/80">
              <a href="#vector-map-infrastructure" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">1.</span>
                  <span>Vector Infrastructure</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Dual 384-dim hashing &amp; 768-dim embeddings</span>
              </a>

              <a href="#information-dilution-mitigation" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">2.</span>
                  <span>RAG Retrieval Simulation</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">90&ndash;120 token chunking &amp; 0.62 threshold</span>
              </a>

              <a href="#apis-orchestration" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">3.</span>
                  <span>APIs &amp; Execution Flow</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Serverless routes, Gemini &amp; Wikidata SPARQL</span>
              </a>

              <a href="#math-scoring-system" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">4.</span>
                  <span>5-Category Scoring Model</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">40/20/15/15/10 math formula &amp; simulator</span>
              </a>

              <a href="#bill-ingestion-pipeline" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">5.</span>
                  <span>AI Bill Ingestion</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Browser state handoff &amp; skill routing</span>
              </a>

              <a href="#nlweb-mcp-architecture" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">6.</span>
                  <span>NLWeb &amp; MCP Config</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Machine discovery tags &amp; tool schemas</span>
              </a>

              <a href="#privacy-security-controls" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">7.</span>
                  <span>Privacy &amp; Security</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Transient memory &amp; zero retention rules</span>
              </a>

              <a href="#interlinking-matrix" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-aeo-cyan/30 transition flex flex-col gap-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-white">
                  <span className="text-aeo-cyan">8.</span>
                  <span>Continue Exploring</span>
                </div>
                <span className="text-[11px] text-white/60 font-serif">Related guides on RAG, schema &amp; AEO</span>
              </a>
            </div>
          </nav>

          {/* Core Technical Thesis Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
            <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
              Core Technical Thesis
            </h2>
            <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
              Modern search and retrieval systems may combine lexical matching, semantic embeddings, passage retrieval, entity signals, source quality, and language models. AEObility tests selected aspects of this broader process through its own diagnostic configuration by evaluating 90–120 token answer blocks validated against Google Gemini&apos;s <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">text-embedding-004</code>.
            </p>
          </div>

          {/* Section 1: Architecture & Vector Map Infrastructure */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Network className="w-4 h-4" />
              </div>
              <h2 id="vector-map-infrastructure" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                1. Architecture &amp; Vector Map Infrastructure
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                AEObility separates vector tasks into two layers: a lightweight 384-dimensional character 3-gram hashing vector for local intent classification, and a dense 768-dimensional neural vector for cosine similarity comparison under the selected embedding configuration.
              </p>
            </div>

            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed font-serif">
              The telemetry engine operates across two complementary vector representation layers: local character N-gram hashing vectors for local intent classification, and dense neural embeddings for high-dimensional cosine similarity analysis under the selected embedding configuration.
            </p>

            {/* Architectural Rationale Box */}
            <div className="p-5 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-2xl space-y-2 text-xs font-sans">
              <span className="font-bold text-aeo-cyan uppercase font-mono text-[11px] block">Architectural Rationale &bull; Why Two Vector Layers?</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 font-serif">
                <div>
                  <strong className="text-white font-sans block mb-1 font-semibold">1. Why 3-gram Character Hashing?</strong>
                  Parsing local character N-grams into a fixed 384-dimensional array runs in local browser memory with sub-millisecond execution. This eliminates API latency and allows instant local intent classification before invoking dense neural embeddings.
                </div>
                <div>
                  <strong className="text-white font-sans block mb-1 font-semibold">2. Why Cosine Similarity?</strong>
                  Cosine similarity measures vector directional angle rather than Euclidean distance magnitude. This makes comparison invariant to total document length, ensuring a short 100-token answer block is evaluated fairly against a 2,000-word competitor page.
                </div>
              </div>
            </div>

            {/* Diagram 2: Dual Vector Architecture SVG */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-xl">
              <span className="text-aeo-cyan font-bold uppercase text-[11px] block">Diagram 2: Dual Vector Architecture Flow</span>
              <div className="p-4 bg-black rounded-xl text-white/80 space-y-3 text-[11px] leading-relaxed">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <div>
                    <strong className="text-aeo-cyan block mb-0.5">Input Text / Intent</strong>
                    <span className="text-white/50 text-[10px]">Submitted URL Page Copy or Query Intent</span>
                  </div>
                  <div className="flex gap-2 text-[10px]">
                    <span className="px-2 py-1 bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan rounded">384-Dim Local</span>
                    <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded">768-Dim Dense</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg space-y-1">
                    <span className="text-aeo-cyan font-bold block">Branch A: Local Character Hashing</span>
                    <span className="text-white/60 text-[10px] block">3-gram character sub-sequences &rarr; Float64Array(384)</span>
                    <span className="text-white/80 text-[11px] block">Function: Local Intent Classification &amp; Fast Filtering</span>
                  </div>

                  <div className="p-3 bg-white/5 rounded-lg space-y-1">
                    <span className="text-purple-300 font-bold block">Branch B: Dense Neural Vector</span>
                    <span className="text-white/60 text-[10px] block">Google Gemini text-embedding-004 &rarr; FloatArray(768)</span>
                    <span className="text-white/80 text-[11px] block">Function: Deep Cosine Proximity &amp; Competitor Comparison</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 text-xs text-white/70 font-sans">
                <span className="font-bold text-white uppercase text-[11px] font-mono block">What to notice in Diagram 2:</span>
                <p className="font-serif text-white/80 leading-relaxed">
                  Dual-branch routing separates ultra-fast local intent classification (384-dim) from high-dimensional neural similarity (768-dim), reducing API calls and latency.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 384-Dim Code & Math Block */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Network className="w-5 h-5 text-aeo-cyan" />
                    <span>384-Dim Local Vector Construction</span>
                  </h3>
                  <span className="text-[10px] font-mono text-aeo-cyan bg-aeo-cyan/10 px-2 py-0.5 rounded border border-aeo-cyan/30">src/lib/search/vectorEngine.ts</span>
                </div>

                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed font-serif">
                  In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/lib/search/vectorEngine.ts</code>, text is tokenised into 3-gram character sequences and mapped into a 384-dimensional <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">Float64Array</code> using L2 Euclidean normalisation:
                </p>

                <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs text-aeo-cyan/90 space-y-2 overflow-x-auto">
                  <div>{"$$\\text{hash} = \\left(\\sum_{i=0}^{k-1} c_i \\cdot 31^{k-1-i}\\right) \\pmod{384}$$"}</div>
                  <div>{"$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|_2} = \\frac{\\mathbf{v}}{\\sqrt{\\sum v_j^2}}$$" }</div>
                </div>

                {/* Variable Annotations */}
                <div className="p-3 bg-black/60 rounded-xl border border-white/5 font-mono text-[11px] text-white/70 space-y-1">
                  <span className="text-xs font-bold text-white uppercase block">Formula Variable Definitions:</span>
                  <div>&bull; <code className="text-aeo-cyan">c_i</code>: Character code value at position <code className="text-aeo-cyan">i</code> in 3-gram sequence</div>
                  <div>&bull; <code className="text-aeo-cyan">k</code>: Sequence length (<code className="text-aeo-cyan">k = 3</code>)</div>
                  <div>&bull; <code className="text-aeo-cyan">31</code>: Prime hashing seed</div>
                  <div>&bull; <code className="text-aeo-cyan">v_j</code>: Vector magnitude at dimension <code className="text-aeo-cyan">j</code></div>
                </div>
              </div>

              {/* 768-Dim Dense Proximity Mapping */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span>768-Dim Dense Proximity Mapping</span>
                  </h3>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">src/lib/telemetry/proximity.ts</span>
                </div>

                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed font-serif">
                  In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/lib/telemetry/proximity.ts</code>, target search intent and crawled site copy are embedded using Google Gemini&apos;s <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">text-embedding-004</code>:
                </p>

                <div className="p-4 bg-neutral-950 border border-white/10 rounded-xl font-mono text-xs text-purple-300 space-y-2 overflow-x-auto">
                  <div>{"Client Node: v_client (768 dimensions)"}</div>
                  <div>{"Competitor Nodes: v_comp_i (768 dimensions)"}</div>
                  <div>{"$$\\text{CosineSim}(\\mathbf{a}, \\mathbf{b}) = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|_2 \\|\\mathbf{b}\\|_2}$$"}</div>
                </div>

                {/* Variable Annotations */}
                <div className="p-3 bg-black/60 rounded-xl border border-white/5 font-mono text-[11px] text-white/70 space-y-1">
                  <span className="text-xs font-bold text-white uppercase block">Formula Variable Definitions:</span>
                  <div>&bull; <code className="text-purple-300">a, b</code>: 768-dim dense vectors from <code className="text-purple-300">text-embedding-004</code></div>
                  <div>&bull; <code className="text-purple-300">||a||_2</code>: L2 Euclidean magnitude (square root of sum of squared vector elements)</div>
                </div>
              </div>
            </div>

            {/* In Plain English Callout */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs font-serif shadow-md">
              <span className="font-bold text-aeo-cyan font-sans text-[11px] uppercase block">In Plain English &bull; What This Means For Your Website</span>
              <p className="text-white/80 leading-relaxed font-light">
                We use two math tools: an ultra-fast local checker to instantly classify what search topic your page covers, and a deep 768-dimensional AI model from Google to measure cosine similarity under the selected embedding configuration.
              </p>
            </div>
          </section>

          {/* Section 2: RAG Retrieval Simulation & Content Structuring */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Zap className="w-4 h-4" />
              </div>
              <h2 id="information-dilution-mitigation" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                2. RAG Retrieval Simulation &amp; Content Structuring
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                AEObility currently tests focused answer blocks of approximately 90–120 tokens as an internal content-testing heuristic. Restructuring copy into focused blocks can improve topical isolation within AEObility&apos;s retrieval simulation.
              </p>
            </div>

            {/* Architectural Rationale Box */}
            <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl space-y-2 text-xs font-sans">
              <span className="font-bold text-purple-300 uppercase font-mono text-[11px] block">Architectural Rationale &bull; Why 90–120 Tokens?</span>
              <p className="text-white/80 font-serif leading-relaxed">
                In vector retrieval testing, 90–120 tokens (roughly 70–95 words) represent the sweet spot for passage chunking. Longer passages risk combining multiple topics and diluting vector focus. Shorter snippets lack sufficient semantic context for neural embeddings to score high similarity. 
              </p>
              <span className="text-[11px] text-purple-300 font-mono block italic">
                Note: 90–120 tokens is an internal evaluation heuristic used by AEObility for diagnostic stress-testing, not a universal retrieval requirement across all AI platforms.
              </span>
            </div>

            {/* Direct AEO Summary Box */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 text-sm font-serif">
              <h3 className="font-bold text-white text-base font-sans">What is Content Dilution in Retrieval Tests?</h3>
              <p className="text-white/90 font-light leading-relaxed">
                <strong>Content Dilution</strong> occurs when a single document contains a wide mixture of disparate topics (e.g. backstory, shipping rules, and multiple services). In an internal retrieval test, embedding mixed copy as one block can make the passage less similar to a specific query than a focused passage indexed separately.
              </p>
              <div className="p-3 bg-neutral-950 border border-white/10 rounded-lg font-mono text-xs text-aeo-cyan overflow-x-auto">
                {"$$\\mathbf{v}_{\\text{passage}} = \\text{Embed}(\\text{Token}_1, \\dots, \\text{Token}_N)$$" }
              </div>
              <p className="text-white/80 font-light leading-relaxed">
                In AEObility’s retrieval simulation, a mixed-topic passage may score below the internal simulation pass threshold even when it contains relevant information. Restructuring copy into focused 90–120 token blocks can improve topical isolation within our test environment.
              </p>
            </div>

            {/* AEObility's Four-Part Mitigation Architecture */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">AEObility&apos;s Four-Part Mitigation Architecture</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-aeo-cyan uppercase font-mono">1. Dense Representation Model</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    AEObility uses <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">text-embedding-004</code> as its selected dense representation model for semantic comparison. Model identifiers and provider availability may change. This page describes Architecture v2.6, last tested in September 2026.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-aeo-cyan uppercase font-mono">2. Atomic Paragraph Chunking</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">rag-sim.ts</code>, content is split into atomic paragraph chunks <code className="text-aeo-cyan font-mono">C1, C2, ..., Ck</code> (<code className="text-aeo-cyan font-mono">k &le; 5</code>, approximately 90–120 tokens). Each chunk receives an isolated <code className="text-aeo-cyan font-mono">text-embedding-004</code> vector <code className="text-aeo-cyan font-mono">v_C_i</code> and is evaluated independently.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-purple-400 uppercase font-mono">3. SPO Entity Triples Integration</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-purple-300 font-mono text-xs">graph.ts</code>, unstructured text is refactored into Subject-Predicate-Object (SPO) entity triples to form hyper-focused semantic nodes.
                  </p>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-purple-400 uppercase font-mono">4. Query-Variation Retrieval Test</div>
                  <p className="text-xs text-white/75 font-light leading-relaxed">
                    In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-purple-300 font-mono text-xs">rag-sim.ts</code>, <code className="text-purple-300 font-mono">gemini-3.7-flash</code> generates 3 synthetic query variations from the target search intent. Chunk embeddings are evaluated against these queries to measure simulation survival rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Threshold Calibration Notice & Model Range Example */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 text-xs text-white/80 font-serif shadow-md">
              <span className="font-bold text-aeo-cyan uppercase font-sans text-[11px] block">Threshold Calibration &amp; Model Distribution Example</span>
              <p className="leading-relaxed">
                AEObility currently treats a cosine-similarity score above <strong>0.62</strong> as an internal simulation pass threshold within this specific retrieval simulation, model configuration, and evaluation design.
              </p>
              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 font-sans text-[11px]">
                <strong className="text-white block font-mono">Model Range Distribution Example:</strong>
                <p className="text-white/70 font-serif leading-relaxed">
                  Different embedding models produce different baseline similarity score ranges. For instance, Google&apos;s <code className="text-aeo-cyan font-mono">text-embedding-004</code> typically outputs similarity scores between <code className="text-aeo-cyan font-mono">0.55 – 0.82</code> for relevant technical content, whereas OpenAI&apos;s older <code className="text-white font-mono">text-embedding-ada-002</code> produced higher baseline numbers (<code className="text-white font-mono">0.75 – 0.92</code>) for similar pairs. Consequently, a threshold of 0.62 is specific to our test setup and cannot be directly compared across different model families.
                </p>
              </div>
            </div>

            {/* In Plain English Callout */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs font-serif shadow-md">
              <span className="font-bold text-aeo-cyan font-sans text-[11px] uppercase block">In Plain English &bull; What This Means For Your Website</span>
              <p className="text-white/80 leading-relaxed font-light">
                We break relevant page content into short topic blocks, typically around 90–120 tokens, and test whether each block addresses key buyer questions within our test environment.
              </p>
            </div>
          </section>

          {/* Section 3: System APIs & Execution Flow */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 id="apis-orchestration" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                3. System APIs &amp; Execution Flow
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                The diagnostic engine orchestrates Next.js serverless route handlers, Google Gemini APIs, and public SPARQL knowledge bases to execute end-to-end audits.
              </p>
            </div>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              The diagnostic engine coordinates client-side execution, serverless route handlers, generative embedding APIs, and public SPARQL knowledge bases:
            </p>

            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl overflow-x-auto shadow-2xl">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-aeo-cyan uppercase font-mono">
                    <th className="py-3 px-3">API / Endpoint</th>
                    <th className="py-3 px-3">Path / Provider</th>
                    <th className="py-3 px-3">Input / Output Type</th>
                    <th className="py-3 px-3">Function Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80 font-light">
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">POST /api/diagnostic</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/diagnostic/route.ts</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">URL + Intent &rarr; Diagnostic JSON</td>
                    <td className="py-3 px-3">Executes 3-stage async crawl, vector proximity embedding, RAG simulation (Internal pass threshold: 0.62), entity graph extraction, scoring, and strategic insight generation.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">POST /api/bill</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/bill/route.ts</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">Messages &rarr; Streamed EventStream</td>
                    <td className="py-3 px-3">Edge-streamed conversational AI assistant endpoint using OpenAI gpt-4o-mini via Vercel AI SDK. Ingests telemetry payloads.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">GET &amp; POST /api/search/answer</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/search/answer/route.ts</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">Query string or JSON &rarr; Answer Object</td>
                    <td className="py-3 px-3">Grounded NLWeb vector search answer endpoint returning 2-sentence answers and similarity scores. Supports GET pre-flight discovery/query strings (?q=query) and POST JSON vector payloads.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">GET /api/mcp</td>
                    <td className="py-3 px-3 font-mono text-white/60">src/app/api/mcp/route.ts</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">HTTP GET &rarr; Tool Catalogue JSON</td>
                    <td className="py-3 px-3">Publishes machine-readable tool catalogue for compatible client agents.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">text-embedding-004</td>
                    <td className="py-3 px-3 font-mono text-white/60">Google Gemini API</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">Text String &rarr; 768-dim Float Array</td>
                    <td className="py-3 px-3">Generates 768-dimensional dense vector embeddings for target search intent and site text.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">gemini-3.7-flash</td>
                    <td className="py-3 px-3 font-mono text-white/60">Google Gemini API</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">Prompt &rarr; Structured JSON Response</td>
                    <td className="py-3 px-3">Powers query-variation generation, SPO triple extraction, and Strategic Insight Engine synthesis.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-mono text-white font-semibold">Wikidata SPARQL</td>
                    <td className="py-3 px-3 font-mono text-white/60">query.wikidata.org</td>
                    <td className="py-3 px-3 font-mono text-aeo-cyan/90 text-[11px]">SPARQL Query &rarr; RDF Entity Match</td>
                    <td className="py-3 px-3">Validates extracted entity subjects against global open knowledge graphs.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Operational Sequence Stream */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-xl">
              <span className="text-aeo-cyan font-bold uppercase text-[11px] block flex items-center gap-1.5">
                <FileCode className="w-4 h-4" />
                <span>End-to-End Operational Pipeline</span>
              </span>
              <div className="p-4 bg-black rounded-xl text-white/80 space-y-2 overflow-x-auto text-[11px] leading-relaxed">
                <div>1. Client Web Audit Request &rarr; POST /api/diagnostic (URL + Intent)</div>
                <div>2. Async HTML Crawl &amp; Competitor Discovery &rarr; Extract Page Copy &amp; Competitor Content</div>
                <div>3. Dense Vector Embeddings &rarr; text-embedding-004 (768-dim v_client &amp; v_competitor)</div>
                <div>4. Query-Variation Generation &rarr; gemini-3.7-flash (3 Synthetic Query Variations)</div>
                <div>5. RAG Retrieval Simulation &rarr; Atomic Paragraph Chunking (rag-sim.ts, AEObility benchmark threshold: 0.62)</div>
                <div>6. Entity Graph Extraction &rarr; SPO Triples &amp; Wikidata SPARQL Corroboration (graph.ts)</div>
                <div>7. 5-Category Score Normalisation &rarr; 0-100 Scorecard (scoring.ts)</div>
                <div>8. Strategic Insight Synthesis &rarr; Strategic Insight Engine Output (features.ts)</div>
                <div>9. Client Hydration &rarr; localStorage (aeo_telemetry_latest)</div>
                <div>10. AI Bill Handoff &rarr; POST /api/bill Edge Streaming &rarr; Render Cards to User</div>
              </div>
            </div>
          </section>

          {/* Section 4: 5-Category Weighted Scoring Model & Mathematics */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h2 id="math-scoring-system" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                4. 5-Category Weighted Scoring Model &amp; Mathematics
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                The AI Readiness Score ($0-100$) is calculated from 5 normalized category dimensions using transparent weightings summing to 100%. Use our interactive simulator below to test custom category inputs.
              </p>
            </div>

            {/* Architectural Rationale & Plain English Summary Box */}
            <div className="p-5 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-2xl space-y-3 text-xs font-sans">
              <span className="font-bold text-aeo-cyan uppercase font-mono text-[11px] block">Scoring Rationale &bull; Why 40% for Semantic Relevance?</span>
              <p className="text-white/80 font-serif leading-relaxed">
                Semantic relevance represents the single largest factor (40%) in the AI Readiness Score because neural retrieval systems prioritise vector similarity above all else when answering user queries. If a website&apos;s content is semantically distant from the target search intent, perfect technical code or schema cannot force AI engines to retrieve it.
              </p>
              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 font-serif text-[11px] text-white/80">
                <strong className="text-white font-sans block font-semibold text-[11px]">Plain English Scoring Breakdown:</strong>
                <p>
                  Think of the 5 categories like a modern business assessment: <strong>Semantic Relevance (40%)</strong> tests if you actually answer the customer&apos;s question; <strong>Technical Readiness (20%)</strong> verifies your site is fast and clean; <strong>Entity Clarity (15%)</strong> ensures your brand services are explicitly declared; <strong>Competitor Coverage (15%)</strong> checks if you cover the topic in sufficient depth; and <strong>KG Corroboration (10%)</strong> checks if external databases verify your details.
                </p>
              </div>
            </div>

            {/* Horizontal 5-Category Score Visual Grid */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 font-serif">
              <h3 className="text-lg font-bold text-white font-sans">5-Category Score Weight Visual Breakdown</h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/lib/telemetry/config.ts</code>, the AI Readiness Score ($0-100$) is calculated across 5 normalized category dimensions:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-center text-xs">
                <div className="p-3 bg-neutral-950 rounded-xl border border-aeo-cyan/30 shadow-md">
                  <span className="text-white/50 text-[10px] block">Semantic Relevance (S)</span>
                  <span className="text-aeo-cyan font-bold text-lg">40%</span>
                  <span className="text-white/40 text-[9px] block mt-0.5">Similarity &amp; RAG</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 shadow-md">
                  <span className="text-white/50 text-[10px] block">Technical Readiness (T)</span>
                  <span className="text-white font-bold text-lg">20%</span>
                  <span className="text-white/40 text-[9px] block mt-0.5">Schema &amp; CWV</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 shadow-md">
                  <span className="text-white/50 text-[10px] block">Entity Clarity (E)</span>
                  <span className="text-purple-300 font-bold text-lg">15%</span>
                  <span className="text-white/40 text-[9px] block mt-0.5">SPO Triples</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 shadow-md">
                  <span className="text-white/50 text-[10px] block">Competitor Coverage (C)</span>
                  <span className="text-amber-300 font-bold text-lg">15%</span>
                  <span className="text-white/40 text-[9px] block mt-0.5">Content Volume Ratio</span>
                </div>
                <div className="p-3 bg-neutral-950 rounded-xl border border-white/10 shadow-md">
                  <span className="text-white/50 text-[10px] block">KG Corroboration (K)</span>
                  <span className="text-emerald-400 font-bold text-lg">10%</span>
                  <span className="text-white/40 text-[9px] block mt-0.5">Wikidata Match</span>
                </div>
              </div>
            </div>

            {/* Readiness Score Equation */}
            <div className="p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-2xl">
              <span className="text-aeo-cyan font-bold uppercase text-[11px] block">Final AI Readiness Score Calculation</span>
              <p className="text-white/80 leading-relaxed font-sans text-xs">
                In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/lib/telemetry/scoring.ts</code>, each category score (<code className="text-aeo-cyan font-mono">S, T, E, C, K</code>) is bounded to [0, 100] and weighted transparently:
              </p>
              <div className="p-4 bg-black rounded-xl text-aeo-cyan overflow-x-auto text-center font-mono space-y-2 border border-white/10">
                <div className="text-sm font-bold tracking-wide text-aeo-cyan">
                  ReadinessScore = clamp(0, 100, round(0.40 S + 0.20 T + 0.15 E + 0.15 C + 0.10 K))
                </div>
                <div className="text-[11px] text-white/50 font-sans">
                  Normalized bounding limits: [0, 100] &bull; Weights sum: 100%
                </div>
              </div>

              {/* Variable Annotations */}
              <div className="p-3 bg-black/60 rounded-xl border border-white/5 font-mono text-[11px] text-white/70 space-y-1 font-sans">
                <span className="text-xs font-bold text-white uppercase block font-mono">Formula Variable Definitions:</span>
                <div>&bull; <code className="text-aeo-cyan">S</code>: Semantic Relevance score (0-100)</div>
                <div>&bull; <code className="text-white">T</code>: Technical Readiness score (0-100)</div>
                <div>&bull; <code className="text-purple-300">E</code>: Entity Clarity score (0-100)</div>
                <div>&bull; <code className="text-amber-300">C</code>: Competitor Coverage score (0-100)</div>
                <div>&bull; <code className="text-emerald-400">K</code>: Knowledge Graph Corroboration score (0-100), measuring whether extracted entity information can be matched against open knowledge graphs.</div>
              </div>
            </div>

            {/* Interactive Score Simulator Component */}
            <ScoreCalculator />

            {/* Bounded Math Formulas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-white font-mono uppercase text-aeo-cyan">Semantic Dominance Bounded Score</h3>
                <p className="text-xs text-white/75 font-light font-serif leading-relaxed">
                  Relative similarity difference is calculated with a signed delta and scaled around a neutral 50 midpoint across the competitive spread:
                </p>
                <div className="p-3 bg-neutral-950 border border-white/10 rounded-xl font-mono text-[11px] text-aeo-cyan space-y-1 text-center overflow-x-auto">
                  <div>Delta = Sim_client - Sim_competitors_avg</div>
                  <div>DominanceScore = clamp(0, 100, Math.round(50 + (250 &times; Delta)))</div>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-white font-mono uppercase text-purple-300">6-Point Schema Completeness Rubric</h3>
                <p className="text-xs text-white/75 font-light font-serif leading-relaxed">
                  Evaluates structured data quality across 6 qualitative validation criteria:
                </p>
                <ol className="text-xs text-white/80 space-y-1 font-mono list-decimal list-inside">
                  <li>Valid JSON-LD markup present.</li>
                  <li>Schema type matches visible content.</li>
                  <li>Required/recommended properties populated.</li>
                  <li>Entity identifiers (@id) consistent.</li>
                  <li>No conflict with page copy.</li>
                  <li>Accessible to search crawlers.</li>
                </ol>
              </div>
            </div>

            {/* Verdict Precedence Cascade */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white font-mono uppercase text-aeo-cyan">Diagnostic Verdict &amp; Blind Spot Precedence Cascade</h3>
                <p className="text-xs text-white/75 font-light font-serif leading-relaxed">
                  The diagnostic engine evaluates client telemetry through an explicit multi-tier decision hierarchy:
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-bold text-white uppercase font-mono text-[11px] text-purple-300">Phase 1: Blind Spot Cascade (Highest Priority Match Wins)</div>
                <ul className="text-white/80 space-y-1.5 font-mono">
                  <li>&bull; <strong className="text-amber-400">Level 1 (Topical Proximity Drop):</strong> <code className="text-aeo-cyan">proximityScore &lt; 45</code> &rarr; Flags <strong className="text-white">Intent Misalignment</strong> (overrides schema and dominance).</li>
                  <li>&bull; <strong className="text-amber-400">Level 2 (Missing Schema Graph):</strong> <code className="text-aeo-cyan">!schemaValidation.hasValidSchema</code> &rarr; Flags <strong className="text-white">Missing Schema Entity Graph</strong> (overrides dominance deficit).</li>
                  <li>&bull; <strong className="text-amber-400">Level 3 (Semantic Dominance Deficit):</strong> <code className="text-aeo-cyan">semanticDominance &lt; 40</code> (where 40 corresponds to &Delta; = -0.04) &rarr; Flags <strong className="text-white">Low Semantic Entity Density</strong>.</li>
                  <li>&bull; <strong className="text-emerald-400">Level 4 (Transition &amp; Baseline Parity):</strong> <code className="text-aeo-cyan">semanticDominance &ge; 40</code> (including the 40&ndash;49 transition zone and &ge; 50 parity) &rarr; Falls through to <strong className="text-white">Vague Value Proposition (Default Baseline)</strong>.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                <div className="space-y-1.5 font-mono">
                  <div className="font-bold text-white uppercase text-[11px] text-aeo-cyan">Phase 2: Readiness Verdict Ladder</div>
                  <ul className="text-white/75 space-y-1">
                    <li>&bull; <code className="text-aeo-cyan">&gt; 85</code>: <strong className="text-emerald-400">Highly Visible</strong></li>
                    <li>&bull; <code className="text-aeo-cyan">&gt; 65</code>: <strong className="text-emerald-400">Visible</strong></li>
                    <li>&bull; <code className="text-aeo-cyan">&gt; 45</code>: <strong className="text-amber-300">Growing</strong></li>
                    <li>&bull; <code className="text-aeo-cyan">&gt; 25</code>: <strong className="text-amber-400">Limited</strong></li>
                    <li>&bull; <code className="text-aeo-cyan">&le; 25</code>: <strong className="text-rose-400">At Risk</strong></li>
                  </ul>
                </div>

                <div className="space-y-1.5 font-mono">
                  <div className="font-bold text-white uppercase text-[11px] text-purple-300">Phase 3: Recommendation Test Ladder</div>
                  <ul className="text-white/75 space-y-1">
                    <li>&bull; <code className="text-aeo-cyan">&gt; 70</code>: <span className="text-emerald-400">Yes, for core intent (wouldRecommend: true)</span></li>
                    <li>&bull; <code className="text-aeo-cyan">46&ndash;70</code>: <span className="text-amber-300">Only for niche queries (wouldRecommend: false)</span></li>
                    <li>&bull; <code className="text-aeo-cyan">&le; 45</code>: <span className="text-rose-400">Today? Probably not (wouldRecommend: false)</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA 3: Contextual CTA */}
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs font-bold text-purple-300">Need help acting on your score?</div>
                <div className="text-xs text-white/70 font-light">Explore the Blueprint for a deeper technical audit and implementation roadmap.</div>
              </div>
              <Link
                href="/solutions/aeo-blueprint"
                className="px-4 py-2 rounded-lg bg-purple-500 text-white font-bold text-xs hover:bg-white hover:text-black transition-all shrink-0"
              >
                <span>Explore the $995 Blueprint</span>
              </Link>
            </div>

            {/* In Plain English Callout */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs font-serif shadow-md">
              <span className="font-bold text-aeo-cyan font-sans text-[11px] uppercase block">In Plain English &bull; What This Means For Your Website</span>
              <p className="text-white/80 leading-relaxed font-light">
                Your final score (0-100) is calculated like a weighted report card. Content quality accounts for 40%, technical code 20%, entity data 15%, competitor depth 15%, and external verification 10%.
              </p>
            </div>
          </section>

          {/* Section 5: Ingestion Pipeline into AI Bill */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Bot className="w-4 h-4" />
              </div>
              <h2 id="bill-ingestion-pipeline" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                5. Ingestion Pipeline into AI Bill
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                Diagnostic results are saved to client localStorage and streamed into AI Bill, which dynamically switches between UI report card generation on Turn 1 and conversational Q&amp;A on Turn 2+.
              </p>
            </div>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              When a user completes a diagnostic scan on <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-semibold">/diagnostic</Link>, the resulting telemetry payload is saved to <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">localStorage</code> (<code className="text-aeo-cyan font-mono text-xs">aeo_telemetry_latest</code>) and handed off to AI Bill via custom browser events (<code className="text-aeo-cyan font-mono text-xs">open_bill_with_query</code>).
            </p>

            {/* Diagram 3: Telemetry-to-AI-Bill Handoff Sequence SVG */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-xl">
              <span className="text-aeo-cyan font-bold uppercase text-[11px] block">Diagram 3: Telemetry-to-AI-Bill Handoff Sequence</span>
              <div className="p-4 bg-black rounded-xl text-white/80 space-y-2 overflow-x-auto text-[11px] leading-relaxed">
                <div className="flex items-center gap-2">
                  <span className="text-aeo-cyan font-bold">User</span>
                  <span>&rarr; Submit URL &amp; Intent &rarr;</span>
                  <span className="text-purple-300 font-bold">Diagnostic Engine</span>
                  <span>&rarr; Save Summary &rarr;</span>
                  <span className="text-emerald-400 font-bold">Browser State (localStorage)</span>
                </div>
                <div className="flex items-center gap-2 border-t border-white/10 pt-2">
                  <span className="text-emerald-400 font-bold">Browser State</span>
                  <span>&rarr; open_bill_with_query event &rarr;</span>
                  <span className="text-aeo-cyan font-bold">POST /api/bill</span>
                  <span>&rarr; Stream EventStream &rarr;</span>
                  <span className="text-purple-300 font-bold">BillWidget UI</span>
                </div>
              </div>

              <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 text-xs text-white/70 font-sans">
                <span className="font-bold text-white uppercase text-[11px] font-mono block">What to notice in Diagram 3:</span>
                <p className="font-serif text-white/80 leading-relaxed">
                  Scraped website page copy never enters the AI chat stream directly; only the structured telemetry summary payload is saved locally and handed off to AI Bill to prevent prompt bloat.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-aeo-cyan" />
                <span>Multi-Turn Skill Routing &amp; Report Cards</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                <p>
                  In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/app/api/bill/route.ts</code>, AI Bill evaluates user turn counts to determine skill routing:
                </p>
                <ul className="space-y-2 text-xs font-sans">
                  <li className="p-3 bg-neutral-950 border border-white/10 rounded-lg">
                    <strong className="text-aeo-cyan block mb-1">Turn 1 (Diagnostic Turn): Activates </strong>
                    <code className="text-aeo-cyan font-mono">[ACTIVE SKILL: Telemetry Guide]</code> and enforces a strict report block (<code className="text-aeo-cyan font-mono">[START_TELEMETRY_REPORT] ... [END_TELEMETRY_REPORT]</code>). In <code className="text-aeo-cyan font-mono">BillWidget.tsx</code>, <code className="text-aeo-cyan font-mono">parseTelemetryText()</code> extracts metrics via regex to render interactive UI cards (Clarity Index, Citation Share, First Impression, Blind Spot, Verdict).
                  </li>
                  <li className="p-3 bg-neutral-950 border border-white/10 rounded-lg">
                    <strong className="text-purple-300 block mb-1">Turn 2+ (Follow-up Turn): Activates </strong>
                    <code className="text-purple-300 font-mono">[ACTIVE SKILL: Telemetry Consultant]</code>, answering follow-up questions conversationally in two or three direct sentences using the audit payload context without re-emitting cards.
                  </li>
                </ul>
              </div>

              {/* Architecture v2.6 Security & Algorithmic Upgrades */}
              <div className="p-5 bg-neutral-950 border border-white/10 rounded-xl space-y-3 font-sans text-xs pt-4">
                <span className="font-bold text-aeo-cyan uppercase font-mono text-[11px] block flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Architecture v2.6 Security &amp; Outlier Hardening</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                    <strong className="text-white block font-mono text-[11px]">Stateless HMAC Turn Gating</strong>
                    <p className="font-serif leading-relaxed text-[11px] text-white/75">
                      Session state is cryptographically signed using HMAC-SHA256 tokens (<code className="text-aeo-cyan font-mono">x-turn-token</code>). This authoritative server-side boundary prevents client storage-wipe exploits while maintaining strict 2-turn consultation limits.
                    </p>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                    <strong className="text-white block font-mono text-[11px]">Trimmed-Mean Outlier Protection</strong>
                    <p className="font-serif leading-relaxed text-[11px] text-white/75">
                      When parsing competitor cohorts (<code className="text-aeo-cyan font-mono">N &ge; 5</code>), the engine trims the highest and lowest similarity values, shielding client dominance scores against broken competitor crawls.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px]">
                  <span className="text-white/80 font-serif">Explore the full mathematical model for competitive dominance and banding:</span>
                  <Link 
                    href="/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework"
                    className="text-aeo-cyan hover:underline font-mono font-semibold shrink-0"
                  >
                    Competitor Overlap &amp; Semantic Dominance Framework &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Machine Interface Protocols: NLWeb & MCP */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan">
                <Code className="w-4 h-4" />
              </div>
              <h2 id="nlweb-mcp-architecture" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                6. Machine Interface Protocols: NLWeb &amp; MCP
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                AEObility publishes discovery link tags in page headers and a machine tool catalogue at /api/mcp for compatible AI agents.
              </p>
            </div>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              AEObility publishes a machine-readable tool catalogue at <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">/api/mcp</code> and provides an MCP-compatible integration layer for supported clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-aeo-cyan" />
                  <span>Discovery Head Link Tags</span>
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed font-serif">
                  In <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">src/app/layout.tsx</code>, these link relations are published as optional discovery metadata:
                </p>
                <div className="p-3 bg-neutral-950 border border-white/10 rounded-xl font-mono text-[11px] text-aeo-cyan overflow-x-auto">
                  <div>&lt;link rel=&quot;nlweb-ask&quot; href=&quot;https://aeobility.com.au/api/search/answer&quot; /&gt;</div>
                  <div>&lt;link rel=&quot;nlweb-mcp&quot; href=&quot;https://aeobility.com.au/api/mcp&quot; /&gt;</div>
                </div>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>MCP Endpoint Tools (/api/mcp)</span>
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed font-serif">
                  Exposes machine tool schemas for autonomous agent execution:
                </p>
                <ul className="text-xs text-white/80 space-y-1 font-mono">
                  <li>&bull; <code className="text-aeo-cyan">get_organization_entity</code></li>
                  <li>&bull; <code className="text-aeo-cyan">get_founder_entity</code></li>
                  <li>&bull; <code className="text-aeo-cyan">query_knowledge_hub_node</code></li>
                  <li>&bull; <code className="text-aeo-cyan">get_service_module</code></li>
                </ul>
              </div>
            </div>

            {/* Conceptual MCP Tool Call Example */}
            <div className="p-5 bg-neutral-950 border border-white/10 rounded-2xl space-y-3 font-mono text-xs shadow-xl">
              <span className="text-purple-300 font-bold uppercase text-[11px] block">Conceptual MCP Machine Agent Tool Request Example</span>
              <p className="text-white/80 font-sans text-xs leading-relaxed">
                When an external AI agent queries AEObility&apos;s machine endpoint, it issues a structured JSON payload:
              </p>
              <div className="p-4 bg-black rounded-xl text-purple-300 overflow-x-auto text-[11px] leading-relaxed border border-white/10">
                <pre>{`// Machine Agent Call to GET /api/mcp
{
  "tool": "query_knowledge_hub_node",
  "arguments": {
    "topic": "RAG information dilution",
    "format": "JSON-LD"
  }
}`}</pre>
              </div>
            </div>

            {/* In Plain English Callout */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs font-serif shadow-md">
              <span className="font-bold text-aeo-cyan font-sans text-[11px] uppercase block">In Plain English &bull; What This Means For Your Website</span>
              <p className="text-white/80 leading-relaxed font-light">
                We publish machine-readable API routes so AI search crawlers can ask our site direct questions and query our business services programmatically.
              </p>
            </div>
          </section>

          {/* Section 7: Privacy, Data Handling & Security Controls */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 id="privacy-security-controls" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                7. Privacy, Data Handling &amp; Security Controls
              </h2>
            </div>

            {/* Section Key Takeaways */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-xs text-white/80 font-serif">
              <span className="font-bold text-white uppercase font-sans text-[11px] block">Key Section Takeaway:</span>
              <p>
                Diagnostic audits process copy transiently in memory, store results locally in the user&apos;s browser, and enforce strict rate limits and zero data-retention model API policies.
              </p>
            </div>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              AEObility maintains strict data handling and security boundaries across the telemetry execution lifecycle:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h3 className="font-bold text-white text-sm">Scope &amp; In-Memory Crawl Processing</h3>
                <p className="text-white/70 font-light leading-relaxed font-serif">
                  URLs and user-entered intents submitted to <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">/api/diagnostic</code> are processed transiently in memory during the execution turn. External pages are parsed strictly for text extraction and schema validation.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h3 className="font-bold text-white text-sm">Client-Side Retention &amp; User Control</h3>
                <p className="text-white/70 font-light leading-relaxed font-serif">
                  Diagnostic output is stored in the browser&apos;s <code className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-aeo-cyan font-mono text-xs">localStorage</code> (<code className="text-aeo-cyan font-mono text-xs">aeo_telemetry_latest</code>). Users can clear diagnostic state at any time by clearing site data or invoking client reset methods.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h3 className="font-bold text-white text-sm">Payload Isolation &amp; AI Bill Handoff</h3>
                <p className="text-white/70 font-light leading-relaxed font-serif">
                  AI Bill receives an abridged scorecard summary payload rather than raw scraped HTML, preventing prompt bloat and isolating third-party copy.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h3 className="font-bold text-white text-sm">Rate Limiting &amp; Provider Policies</h3>
                <p className="text-white/70 font-light leading-relaxed font-serif">
                  API endpoints enforce rate limits and payload size caps. Requests to external AI models adhere to zero data-retention for model training under commercial enterprise API terms.
                </p>
              </div>
            </div>

            {/* Zero Retention Box: What We Never Store */}
            <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-3 font-sans shadow-lg">
              <span className="font-bold text-emerald-400 uppercase font-mono text-[11px] block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Data-Retention Safeguards &bull; What We Never Store</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No raw scraped HTML or unparsed source code.</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No competitor site text or extracted metrics stored on server.</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No user-entered confidential prompts or intent strings logged.</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black/40 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No IP addresses or personal browser fingerprints tracked.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7.5: System Bounds & Future Roadmap */}
          <section className="space-y-6 pt-6 border-t border-white/10 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Compass className="w-4 h-4" />
              </div>
              <h2 id="system-bounds-roadmap" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
                System Scope Bounds &amp; Future Roadmap
              </h2>
            </div>

            <p className="text-white/80 text-sm font-light leading-relaxed font-serif">
              AEObility Architecture v2.6 provides a controlled, reproducible diagnostic baseline. Transparency requires defining both current scope bounds and planned architectural improvements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <h3 className="font-bold text-white text-sm font-mono text-aeo-cyan">Current Scope Bounds (v2.6)</h3>
                <ul className="space-y-2 text-white/75 font-serif leading-relaxed">
                  <li>&bull; <strong>Single-Page Analysis:</strong> Audits target URL copy and schema; site-wide crawl checks are evaluated via fan-out sampling.</li>
                  <li>&bull; <strong>Text &amp; Schema Focus:</strong> Evaluates text block embeddings and JSON-LD markup; image/video embeddings are excluded from vector proximity tests.</li>
                  <li>&bull; <strong>Directional Pass Thresholds:</strong> Internal simulation benchmark threshold of 0.62 applies to the Gemini text-embedding-004 configuration.</li>
                  <li>&bull; <strong>Stateless HMAC Turn Gating:</strong> Enforces 2-turn diagnostic consultation limits independently of browser storage.</li>
                </ul>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
                <h3 className="font-bold text-white text-sm font-mono text-purple-300">Planned Architectural Roadmap (v2.7+)</h3>
                <ul className="space-y-2 text-white/75 font-serif leading-relaxed">
                  <li>&bull; <strong>Multimodal Passage Embeddings:</strong> Stress-testing image captioning and tabular data vector representation.</li>
                  <li>&bull; <strong>Cross-Model Ensemble Comparison:</strong> Evaluating chunk survival rates across multiple open-weights embedding models simultaneously.</li>
                  <li>&bull; <strong>Direct SPARQL Graph Validation:</strong> Automated graph entity assertion checks against custom enterprise knowledge bases.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Continue Exploring */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <h2 id="interlinking-matrix" className="text-2xl md:text-3xl font-extrabold text-white scroll-mt-24">
              8. Continue Exploring
            </h2>

            <p className="text-white/80 text-base font-light leading-relaxed font-serif">
              This guide explains how AEObility’s Telemetry Diagnostic works. The resources below explore the key ideas behind the system, including retrieval, structured data, semantic search, and the practical steps involved in improving AI visibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans text-xs">
              <Link href="/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-aeo-cyan font-bold block">Competitor Overlap &amp; Semantic Dominance</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">Explore the mathematical model, outlier-trimmed cohort parsing, and qualitative banding.</span>
              </Link>

              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-aeo-cyan font-bold block">Positional Bias in Retrieval</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">Learn how the position and structure of information can affect retrieval.</span>
              </Link>

              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-aeo-cyan font-bold block">RAG and AI Search</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">Understand how retrieval-augmented generation and vector search work together.</span>
              </Link>

              <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="p-4 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-aeo-cyan font-bold block">Structured Data and Query Fan-Out</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">Explore how structured information helps clarify entities across different search queries.</span>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-4 bg-white/[0.02] border border-white/10 hover:border-purple-400/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-purple-300 font-bold block">The AEO Blueprint ($995 AUD)</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">See how the diagnostic findings are turned into a practical implementation roadmap.</span>
              </Link>

              <Link href="/solutions/aeo-sprint" className="p-4 bg-white/[0.02] border border-white/10 hover:border-purple-400/40 rounded-xl space-y-1.5 transition-all">
                <span className="text-purple-300 font-bold block">AEO Implementation Sprints</span>
                <span className="text-white/70 block leading-relaxed font-serif text-[11px]">Find out how schema, content, and technical improvements can be implemented.</span>
              </Link>
            </div>
          </section>

          {/* Technical FAQ */}
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical &amp; Architecture FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Telemetry Diagnostic Engine FAQ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed font-serif">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion CTA (CTA 4) */}
          <div className="p-8 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Ready to inspect your site&apos;s AI visibility score?</h3>
              <p className="text-sm text-white/70 font-light max-w-lg font-serif">
                Run a live telemetry diagnostic on your website to evaluate vector proximity, entity clarity, and RAG retrieval survival.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 font-sans">
              <Link
                href="/diagnostic"
                className="px-6 py-3.5 rounded-xl bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,205,216,0.3)] flex items-center gap-2"
              >
                <span>Scan my website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/10 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-purple-300" />
                <span>Book a Strategy Session</span>
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
