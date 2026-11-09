import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Network, 
  Sparkles, 
  Layers, 
  Cpu, 
  Search, 
  ShieldCheck, 
  FileText, 
  Compass,
  GitBranch,
  Table,
  Zap,
  BookOpen,
  ArrowDownRight,
  Gauge,
  HelpCircle
} from 'lucide-react';

export const metadata = {
  title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
  description: "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
  },
  openGraph: {
    title: "What Is SEO Optimisation? Guide for Modern Search | AEObility",
    description: "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
    url: "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
    type: "article",
    images: [
      {
        url: "/images/knowledge-hub/seo-optimisation-ai-search_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "What Is SEO Optimisation? AEObility Knowledge Hub",
      },
    ],
  },
};

export default function WhatIsSEOOptimisationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation",
        "name": "What Is SEO Optimisation? Guide for Modern Search",
        "description": "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#seo-term"
        },
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#article"
        },
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#primaryimage"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#article",
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#webpage"
        },
        "headline": "What Is SEO Optimisation?",
        "alternativeHeadline": "A Guide to SEO Optimisation for Modern Search, AEO and AI Retrieval",
        "description": "SEO optimisation makes a website easier for search engines to find, understand and rank. It provides the technical and content foundation that gives AI search systems reliable pages, entities and passages to retrieve.",
        "inLanguage": "en-AU",
        "articleSection": [
          "Search Engine Optimisation",
          "Technical SEO",
          "Entity SEO",
          "Answer Engine Optimisation",
          "AI Search",
          "Retrieval-Augmented Generation"
        ],
        "keywords": [
          "SEO optimisation",
          "Search Engine Optimisation",
          "technical SEO",
          "Entity SEO",
          "AEO",
          "AI search",
          "RAG"
        ],
        "about": [
          {
            "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#seo-term"
          },
          {
            "@type": "Thing",
            "name": "Entity SEO"
          },
          {
            "@type": "Thing",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Thing",
            "name": "Retrieval-Augmented Generation"
          }
        ],
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#primaryimage"
        },
        "author": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-02-15T00:00:00+10:00",
        "dateModified": "2026-08-16T16:00:00+10:00",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub#collection"
        },
        "citation": [
          {
            "@type": "WebPage",
            "name": "Entity SEO & Authority Building",
            "url": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building"
          },
          {
            "@type": "WebPage",
            "name": "Answer Engine Optimisation",
            "url": "https://aeobility.com.au/knowledge-hub/aeo"
          },
          {
            "@type": "WebPage",
            "name": "Retrieval-Augmented Generation",
            "url": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
          }
        ]
      },
      {
        "@type": "DefinedTerm",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#seo-term",
        "name": "Search Engine Optimisation",
        "alternateName": [
          "SEO",
          "SEO Optimisation"
        ],
        "description": "Search Engine Optimisation is the technical and content practice of making a website easier for search engines to find, understand and rank. It provides a crawlable, indexable and relevant foundation for conventional search and AI retrieval systems.",
        "inDefinedTermSet": {
          "@id": "https://aeobility.com.au/knowledge-hub#glossary"
        },
        "url": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation"
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is SEO still important in the AI search era?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. SEO is still the foundation of discoverability. It makes a website easier for search engines to crawl, understand and rank, and gives AI search systems clear, reliable source content to retrieve or reference."
            }
          },
          {
            "@type": "Question",
            "name": "Why does my business rank on Google but not appear in AI answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ranking a page does not guarantee that an AI system will use it. AI search may look for clear entities, consistent business information, strong contextual signals and answer-ready passages when selecting sources for a response."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SEO, Entity SEO and AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO improves page-level crawlability, indexability and relevance. Entity SEO clarifies a business, its services, locations and relationships so systems can interpret them correctly. AEO structures key information into clear, self-contained passages that answer engines can more easily retrieve and potentially cite."
            }
          },
          {
            "@type": "Question",
            "name": "What should I fix first to improve AI search visibility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start with the fundamentals: make important pages crawlable and indexable, use clear headings and structured content, keep business details consistent, strengthen internal linking and topical relationships, and add appropriate structured data."
            }
          },
          {
            "@type": "Question",
            "name": "Can SEO or AEO guarantee that AI will cite my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. SEO, Entity SEO and AEO can improve clarity, relevance and retrieval potential, but no optimisation method can guarantee selection or citation by every AI system."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
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
            "name": "What Is SEO Optimisation?",
            "item": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-seo-optimisation#primaryimage",
        "url": "https://aeobility.com.au/images/knowledge-hub/seo-optimisation-ai-search_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/seo-optimisation-ai-search_AEObility.webp",
        "caption": "Abstract representation of traditional SEO input-layer indexing feeding generative AI search and vector retrieval.",
        "representativeOfPage": true,
        "width": 1200,
        "height": 800,
        "copyrightHolder": {
          "@id": "https://aeobility.com.au/#organization"
        }
      }
    ]
  };

  return (
    <div className="bg-[#07070a] text-slate-100 min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />

      {/* Category SubNav Pills Component */}
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />

      <main className="relative pt-12 pb-28 sm:pb-20 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/5 to-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Breadcrumbs />

          {/* Visual Hero Banner (1200x800 Abstract SEO Input-Layer Graphic) */}
          <figure className="mt-8 mb-10">
            <div className="relative h-[280px] sm:h-[420px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-teal-500/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />
              <Image
                src="/images/knowledge-hub/seo-optimisation-ai-search_AEObility.webp"
                alt="Abstract hyper‑gradient illustration showing SEO as the foundational input layer for modern search, with a glowing structural grid representing crawlable architecture, rising lexical signal ribbons symbolising keywords and metadata, and floating semantic nodes depicting entity relationships used by AI search, AEO and RAG systems."
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            <figcaption className="text-center text-xs text-slate-400 mt-3 font-mono italic">
              Abstract representation of traditional SEO input-layer indexing feeding generative AI search and vector retrieval.
            </figcaption>
          </figure>

          {/* Editorial Hero Banner */}
          <div className="mt-6 mb-8 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950/90 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full" />
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium mb-6">
                <Search className="w-3.5 h-3.5" />
                Foundational search infrastructure
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                What Is SEO Optimisation?
              </h1>

              {/* Progressive Disclosure Atomic Definition */}
              <div className="p-6 bg-slate-950/80 border border-teal-500/30 rounded-2xl relative shadow-inner space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Atomic definition
                </div>
                <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
                  <strong>SEO (Search Engine Optimisation) makes your website easier for search engines to find, understand, and rank.</strong> It is the technical and content foundation that gives AI search systems reliable pages, entities, and passages to retrieve.
                </p>

                {/* Hero Micro-Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a 
                    href="#seo-vs-aeo" 
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-teal-400 hover:text-teal-300 font-mono transition-colors"
                  >
                    <span>SEO vs AEO</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                  <Link 
                    href="/solutions/aeo-blueprint"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-xs text-teal-300 hover:bg-teal-500/20 font-mono transition-colors"
                  >
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Check your visibility readiness</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* "On This Page" Visual Subnav Pill Component Bar */}
          <nav aria-label="On this page navigation" className="mb-12 p-4 bg-slate-950/80 border border-slate-800/80 rounded-2xl flex flex-wrap items-center gap-3 shadow-lg">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              On this page:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#input-layer" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-400 text-slate-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                SEO Foundations
              </a>
              <a href="#lexical-retrieval" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                Lexical Retrieval
              </a>
              <a href="#core-pillars" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                Core Pillars
              </a>
              <a href="#search-model" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-300 hover:text-emerald-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                4-Layer Model
              </a>
              <a href="#flow-architecture" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-400 text-slate-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                AI Retrieval
              </a>
              <a href="#entity-seo-bridge" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                Entity SEO
              </a>
              <a href="#seo-vs-aeo" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                AEO
              </a>
              <a href="#faq" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-teal-400 text-slate-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                FAQs
              </a>
              <a href="#search-model" className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/40 text-teal-300 hover:text-teal-200 transition-all font-mono text-xs shadow-sm flex items-center gap-1 hover:bg-slate-800/80">
                Check Your Visibility
              </a>
            </div>
          </nav>

          {/* Main Article Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12 text-slate-300">
              
              {/* Section 1: Input Layer */}
              <section id="input-layer" className="scroll-mt-32 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Layers className="w-6 h-6 text-teal-400" />
                  SEO as the Input Layer for Modern Search
                </h2>
                <p className="leading-relaxed">
                  Traditional SEO focuses on making your content <strong>discoverable and understandable</strong> at the page level. SEO is not outdated; it remains the essential foundation of discoverability that gives search engines and AI retrieval systems reliable material to crawl, interpret, retrieve, and cite. For Australian small businesses and enterprise domains alike, establishing a strong <Link href="/solutions/aeo-blueprint" className="text-teal-400 font-semibold hover:underline">SEO foundation</Link> is a prerequisite for local visibility in <Link href="/services/aeo/local-business" className="text-cyan-400 font-semibold hover:underline">AEO for Local Businesses</Link> and <Link href="/services/geo-marketing" className="text-emerald-400 font-semibold hover:underline">Local Business GEO</Link>.
                </p>

                {/* Foundation Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    "Clean HTML heading hierarchy (H1, H2, H3)",
                    "Crawlable XML sitemaps & site architecture",
                    "Clear lexical keyword & entity signals",
                    "Fast, accessible, machine-parsable pages"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 text-slate-200 text-sm shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Standalone Business Takeaway Callout Box */}
                <div className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/30 text-xs sm:text-sm text-slate-200 space-y-1.5 shadow-md">
                  <div className="text-teal-300 font-mono font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    What this means for your business
                  </div>
                  <p className="leading-relaxed">
                    If a search engine cannot reliably crawl and understand a page, an AI answer engine has less reliable information to retrieve, assess, and reference when generating answers. Explore our full suite of <Link href="/solutions" className="text-teal-400 font-semibold hover:underline">AEO Implementation Packages</Link> to audit your site architecture.
                  </p>
                </div>
              </section>

              {/* Section 2: Lexical Retrieval */}
              <section id="lexical-retrieval" className="scroll-mt-32 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Search className="w-6 h-6 text-cyan-400" />
                  Lexical Retrieval: How Sparse Indexing Works
                </h2>
                <p className="leading-relaxed">
                  <strong>Lexical retrieval</strong> means matching query terms, related language and page‑level relevance signals with useful content. Rather than reading for abstract context alone, lexical search systems score term frequency, page structure, and link authority using algorithms like <strong>BM25</strong>. To dive deeper into technical markup implementation, explore our <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-teal-400 font-medium hover:underline">Structured Data & Schema Guide</Link>, step-by-step <Link href="/knowledge-hub/tutorials" className="text-purple-400 font-medium hover:underline">Technical Tutorials</Link>, and <Link href="/knowledge-hub/guides" className="text-emerald-400 font-medium hover:underline">AEO Guides</Link>.
                </p>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-6 space-y-3">
                  <div className="text-sm font-semibold text-slate-200">What lexical SEO improves</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-300 text-sm">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Sparse BM25 term frequency matching</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Metadata & H1 title tag clarity</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Document heading hierarchy</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Anchor text link authority graphs</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>Page speed & DOM accessibility</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Core Pillars */}
              <section id="core-pillars" className="scroll-mt-32 space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Compass className="w-6 h-6 text-purple-400" />
                  The Core Pillars of SEO Optimisation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-teal-300 text-lg">Technical SEO</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Crawlability, indexability, site speed, XML sitemaps, structured HTML.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-cyan-300 text-lg">On‑Page SEO</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Keyword targeting, natural headings, metadata, content clarity.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="font-bold text-purple-300 text-lg">Authority & Architecture</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Internal link graphs, external citations, domain reputation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: The 4-Layer Search Model Table */}
              <section id="search-model" className="scroll-mt-32 space-y-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Table className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">The 4-Layer Search Model</h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  AEObility’s four-layer model explains how SEO foundations support entity understanding, answer extraction and AI retrieval:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-800 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-slate-950/80 text-teal-300 border-b border-slate-800 font-mono">
                        <th className="p-3.5 border-r border-slate-800">Layer</th>
                        <th className="p-3.5 border-r border-slate-800">Core Focus</th>
                        <th className="p-3.5 border-r border-slate-800">Dominant Mechanism</th>
                        <th className="p-3.5">Primary Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">1. Traditional SEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Crawlability, indexability, site speed, and page relevance</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-cyan-300">Sparse Lexical Matching (BM25) & Links</td>
                        <td className="p-3.5 font-semibold text-slate-200">Page or URL</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">2. Entity SEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Entity disambiguation, schema markup, & Knowledge Graph alignment</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-teal-300">Semantic Mapping & Linked Open Data</td>
                        <td className="p-3.5 font-semibold text-slate-200">Entity & Relationship Nodes</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">3. AEO</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Direct-answer formatting, passage clarity, & claim support</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-emerald-300">Passage Extraction & Vector Similarity</td>
                        <td className="p-3.5 font-semibold text-slate-200">Atomic Passage / Answer Block</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-white border-r border-slate-800">4. Generative RAG</td>
                        <td className="p-3.5 border-r border-slate-800 text-slate-300">Retrieving source material and generating an answer</td>
                        <td className="p-3.5 border-r border-slate-800 font-mono text-purple-300">Hybrid Retrieval (Sparse + Dense vectors)</td>
                        <td className="p-3.5 font-semibold text-slate-200">Synthesised AI Response</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: SEO to RAG Interactive Flow Architecture Diagram Component */}
              <section id="flow-architecture" className="scroll-mt-32 space-y-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">SEO to RAG Progression Diagram</h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visual mental model illustrating how raw lexical web pages transform into interpretable entity relationships, liftable answer passages, and generated answers with attribution where supported:
                </p>

                {/* Horizontal 4-Step Visual Flow Component */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  
                  {/* Step 1 */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col justify-between space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">STEP 1</span>
                      <span className="text-xs text-slate-400 font-mono">Discover</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">1. Traditional SEO</h3>
                      <p className="text-xs text-slate-300 mt-1">Crawlable pages + clear words</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-300 font-mono">
                      Input: BM25 Sparse Index
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-teal-500/30 flex flex-col justify-between space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-teal-400 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">STEP 2</span>
                      <span className="text-xs text-slate-400 font-mono">Understand</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">2. Entity SEO</h3>
                      <p className="text-xs text-slate-300 mt-1">Known things + relationships</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-teal-300 font-mono">
                      Bridge: JSON-LD Schemas
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex flex-col justify-between space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">STEP 3</span>
                      <span className="text-xs text-slate-400 font-mono">Extract</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">3. AEO</h3>
                      <p className="text-xs text-slate-300 mt-1">Clear, extractable answer passages</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-300 font-mono">
                      Output: Passage Blocks
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-purple-500/30 flex flex-col justify-between space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">STEP 4</span>
                      <span className="text-xs text-slate-400 font-mono">Retrieve & Synthesise</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">4. Generative RAG</h3>
                      <p className="text-xs text-slate-300 mt-1">Retrieves evidence + generates answer</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-purple-300 font-mono">
                      Result: AI Answer & Citation
                    </div>
                  </div>

                </div>
              </section>

              {/* Section 6: The Missing Bridge - Entity SEO */}
              <section id="entity-seo-bridge" className="scroll-mt-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-teal-500/30 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">The Missing Bridge: Entity SEO</h2>
                </div>
                
                <p className="leading-relaxed text-slate-200">
                  Traditional SEO makes a page discoverable and relevant to the words people search. <Link href="/knowledge-hub/articles/entity-authority-building" className="text-teal-400 font-semibold hover:underline">Entity SEO</Link> clarifies the real-world concepts, organisations, products, and relationships those words represent. An <Link href="/knowledge-hub/aeo" className="text-cyan-400 font-semibold hover:underline">Answer Engine (AEO)</Link> then shapes important claims into clear, self-contained passages that AI search and answer engines can more easily retrieve, interpret, and potentially cite.
                </p>

                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2 text-sm text-slate-300">
                  <div className="font-mono text-teal-300 font-bold">SEO to Entity SEO to AEO to RAG Progression:</div>
                  <p>
                    First, build crawlable pages with clear lexical signals. Next, establish entity clarity and relationships through JSON-LD structured data, entity references, and explicit contextual relationships. Then make high-value answers extractable at the passage level so AI retrieval systems can use those signals alongside other sources when selecting evidence for generated answers.
                  </p>
                </div>

                {/* Next Topic Router Card */}
                <div className="mt-4 p-4 rounded-xl bg-teal-950/30 border border-teal-500/20 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal-300 font-mono">Explore the next topic:</strong> Learn how to map real-world concepts with our guide to <Link href="/knowledge-hub/articles/entity-authority-building" className="text-teal-400 font-semibold hover:underline">Entity SEO & Authority Building</Link>, or explore how <Link href="/knowledge-hub/aeo" className="text-cyan-400 font-semibold hover:underline">Answer Engine Optimisation (AEO)</Link> refactors passages for generative search.
                  </div>
                </div>
              </section>

              {/* Section 6.5: How SEO Feeds Knowledge Graphs (4-Card Grid) */}
              <section className="scroll-mt-32 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Network className="w-6 h-6 text-teal-400" />
                  How SEO Feeds AI Knowledge Graphs & Hybrid RAG
                </h2>
                <p className="leading-relaxed">
                  Modern AI search engines don&apos;t just read web pages — they build <strong>knowledge graphs</strong> and run <strong>hybrid search</strong>. Clear heading hierarchy helps both people and automated systems identify coherent passages, providing the sparse candidate pool that generative models ingest into <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-cyan-400 font-medium hover:underline">RAG (Retrieval-Augmented Generation)</Link>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-teal-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Clean Heading Hierarchy
                    </div>
                    <p className="text-xs text-slate-400">Enables unambiguous natural language passage chunking for automated systems.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Clear Entity References
                    </div>
                    <p className="text-xs text-slate-400">Clear entity references help systems interpret who and what your content is about.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-purple-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Consistent Terminology
                    </div>
                    <p className="text-xs text-slate-400">Enhances semantic density, BM25 term scores, and hybrid retrieval ranking.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1">
                    <div className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Internal Link Graphs
                    </div>
                    <p className="text-xs text-slate-400">Maps relationship graphs back to the main <Link href="/knowledge-hub" className="text-emerald-400 hover:underline font-semibold">AEObility Knowledge Hub</Link>.</p>
                  </div>
                </div>
              </section>

              {/* Mid-Article Micro-CTA Card */}
              <section className="bg-gradient-to-r from-teal-950/60 via-slate-900 to-slate-950 border border-teal-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
                    <Gauge className="w-3.5 h-3.5" />
                    Check your visibility readiness
                  </div>
                  <h3 className="text-xl font-bold text-white">See how ready your site is for AI search</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    Get a practical view of your technical SEO, entity clarity and answer‑ready content with <Link href="/solutions/aeo-blueprint" className="text-teal-400 font-semibold hover:underline">Strategic Blueprint</Link>.
                  </p>
                </div>
                <Link 
                  href="/solutions/aeo-blueprint"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20"
                >
                  <span>Scan My Site</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </section>

              {/* Section 7: SEO vs AEO Comparison */}
              <section id="seo-vs-aeo" className="scroll-mt-32 space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  SEO vs AEO: Page Ranking vs Passage Extraction
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono rounded-full font-bold">
                      SEO Focus: Page Ranking
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Optimises full URLs for human clicks, matching target keywords and improving click-through rates from search results.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-teal-500/30 space-y-3">
                    <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-mono rounded-full font-bold">
                      AEO Focus: Passage Extraction
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Refactors atomic passages for AI citations, clarifying entity relationships and making content liftable for RAG answers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: When SEO Is Enough */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                  When SEO Is Enough (And When You Need AEO)
                </h2>
                <p className="leading-relaxed">
                  SEO is enough when your primary goal is traditional search result visibility and human search clicks. However, when your goal is to appear inside AI answers and zero-click search experiences, AEO becomes essential. For local Australian trade services and clinics, see our specialised <Link href="/services/aeo/local-business" className="text-cyan-400 font-semibold hover:underline">AEO for Local Businesses</Link> guide.
                </p>
                <div className="p-6 bg-slate-950/80 border border-purple-500/30 rounded-2xl text-center space-y-2">
                  <div className="text-lg font-bold text-white">The Operational Formula</div>
                  <p className="text-slate-300 text-base">
                    <em>&ldquo;SEO builds the foundation. AEO makes important passages easier to retrieve, interpret and potentially attribute.&rdquo;</em>
                  </p>
                </div>
              </section>

              {/* Section 8.5: Brand-Aligned FAQ Block */}
              <section id="faq" className="scroll-mt-32 space-y-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {/* Q1 */}
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <h3 className="text-base font-bold text-teal-300">1. Is SEO still important in the AI search era?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Yes. SEO is still the foundation of discoverability. It makes your website easier for search engines to crawl, understand and rank — and it gives AI search systems the clear, reliable source content they need before they can retrieve or reference anything. SEO builds the structure; <Link href="/services/aeo" className="text-teal-400 font-semibold hover:underline">AEO and entity optimisation</Link> help machines interpret it confidently.
                    </p>
                  </div>

                  {/* Q2 */}
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <h3 className="text-base font-bold text-cyan-300">2. Why does my business rank on Google but not appear in AI answers?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Ranking a page doesn&apos;t guarantee that an AI system will use it. AI search looks for clear entities, consistent business information, strong contextual signals and answer‑ready passages. If those elements are missing, an AI engine may understand your page — but still choose a competitor&apos;s content when generating an answer. Test your site with our <Link href="/solutions/aeo-blueprint" className="text-cyan-400 font-semibold hover:underline">AI readiness score audit</Link>.
                    </p>
                  </div>

                  {/* Q3 */}
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <h3 className="text-base font-bold text-purple-300">3. What&apos;s the difference between SEO, Entity SEO and AEO?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      SEO improves page‑level visibility: crawlability, indexability and relevance. <strong className="text-white">Entity SEO</strong> clarifies who you are — your business, services, locations and relationships — so machines interpret you correctly (see our <Link href="/knowledge-hub/articles/entity-authority-building" className="text-teal-400 font-semibold hover:underline">Entity SEO guide</Link>). <Link href="/knowledge-hub/aeo" className="text-cyan-400 font-semibold hover:underline">AEO</Link> shapes key information into clear, self‑contained passages that answer engines can more easily retrieve and potentially cite. Together, they help your business get found, understood and chosen across Search, Maps &amp; AI.
                    </p>
                  </div>

                  {/* Q4 */}
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <h3 className="text-base font-bold text-emerald-300">4. What should I fix first to improve AI search visibility?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Start with the fundamentals: make sure important pages are crawlable and indexable, use clear headings and structured content, keep business details consistent across your site, strengthen internal linking and topical relationships, and add appropriate <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-emerald-400 font-semibold hover:underline">structured data</Link>. Follow our step-by-step <Link href="/knowledge-hub/tutorials" className="text-purple-400 font-semibold hover:underline">Technical Tutorials</Link> to audit your site layout.
                    </p>
                  </div>

                  {/* Q5 */}
                  <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <h3 className="text-base font-bold text-teal-300">5. Can SEO or AEO guarantee that AI will cite my website?</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      No. SEO, Entity SEO and AEO can improve clarity, relevance and retrieval potential — but no optimisation method can guarantee selection or citation by every AI system. The goal is to make your business easier for machines to understand and more likely to be used when they generate answers. Learn more about our technical methodology in <Link href="/solutions/aeo-blueprint" className="text-teal-400 font-semibold hover:underline">Strategic Blueprint</Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Summary */}
              <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-teal-400" />
                  Summary: SEO Is Still Foundational
                </h2>
                <p className="leading-relaxed">
                  SEO optimisation remains essential because it creates the structured, crawlable, indexable content that both search engines and AI systems rely on. In an AI-driven search landscape, SEO alone is no longer enough — but it remains the critical layer that makes AEO possible. Ready to audit your site? Get started with <Link href="/solutions/aeo-blueprint" className="text-teal-400 font-semibold hover:underline">Strategic Blueprint</Link> or review our <Link href="/solutions" className="text-cyan-400 font-semibold hover:underline">AEO Implementation Packages</Link>.
                </p>
              </section>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Strategic Blueprint CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-6 space-y-4 sticky top-28 shadow-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono">
                  <Sparkles className="w-3 h-3" />
                  AI readiness audit
                </div>

                <h3 className="text-xl font-bold text-white">
                  Strategic Blueprint
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Get a <Link href="/solutions/aeo-blueprint" className="text-teal-400 hover:underline">deep technical audit</Link> of your SEO foundation to improve your readiness for AI search visibility and source attribution.
                </p>

                <div className="pt-2">
                  <Link 
                    href="/solutions/aeo-blueprint"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20"
                  >
                    <span>View $995 Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="border-t border-slate-800 pt-4 mt-4 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>100% credited back into implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Lexical &amp; Vector readiness score</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
