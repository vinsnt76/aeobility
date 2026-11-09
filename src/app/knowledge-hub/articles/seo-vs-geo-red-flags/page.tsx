import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Sparkles, 
  Compass, 
  Code, 
  MapPin, 
  Layers, 
  Zap, 
  HelpCircle, 
  BarChart3, 
  Bot, 
  Cpu, 
  ShieldCheck,
  TrendingDown,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: "5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO) | AEObility",
  description: "Technical analysis of five operational indicators showing when a business requires Generative Engine Optimisation (GEO) instead of legacy keyword SEO.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags",
  },
  openGraph: {
    title: "5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO)",
    description: "Discover why top Google search rankings no longer guarantee website traffic, and learn how to fix the five critical signals of AI search divergence.",
    url: "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Abstract hypercolour illustration showing divergent discovery pathways between traditional search optimisation and AI-driven generative engine optimisation, with warning signals on one side and layered answer-engine discovery systems on the other.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Critical Signals Your Business Needs GEO | AEObility",
    description: "Technical analysis of five operational indicators showing when a business requires Generative Engine Optimisation (GEO) instead of legacy keyword SEO.",
    images: ["https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp"],
  },
  keywords: [
    "SEO vs GEO red flags",
    "signs you need GEO",
    "generative engine optimisation indicators",
    "AI search visibility audit",
    "AI overview citation divergence",
    "entity conflation AI",
    "vector drift marketing copy",
    "Perth AEO specialist"
  ]
};

export default function SeoVsGeoRedFlagsPage() {
  const articleFaqs = [
    {
      question: "What are the top indicators or red flags that a business needs GEO help instead of just SEO?",
      answer: "The primary red flag is a divergence between search rankings and AI citations: your website ranks on page one of Google, but ChatGPT, Perplexity, or Google AI Overviews ignore or misquote your business. Other key indicators include declining local map enquiries despite stable keyword ranks, AI engines conflating your brand with competitors, and website copy loaded with abstract marketing terms that vector engines filter out. If search engines index your pages but answer engines fail to cite your facts, your site requires GEO entity restructuring."
    },
    {
      question: "Can I do GEO myself or do I need to hire someone, and what does a good GEO engagement actually include?",
      answer: "You can handle foundational GEO tasks yourself if you understand structured Schema.org code, eliminate vague marketing jargon in favour of plain facts, and maintain consistent NAP details across directories. Hire a specialist if your website is full of buzzwords that AI tools ignore or if you lack the technical background to build clean code graphs and verify how answer engines read your pages. A solid GEO engagement delivers clean structured code, direct answer blocks, consistent directory data, logical internal links, and thorough validation with 100% client IP ownership."
    },
    {
      question: "How do I evaluate a GEO agency?",
      answer: "Evaluate prospective agencies based on technical proofs and transparent delivery models. Check if the agency scores highly on objective benchmarks like isitagentready.com and provides machine-readable schema on their own site. Avoid long-term retainers with vague deliverables, and beware of guarantees regarding ChatGPT rankings. Choose partners providing fixed-scope sprints, transparent audit baselines, and complete code handovers."
    }
  ];

  const signals: Array<{
    number: string;
    title: string;
    subtitle: string;
    badge: string;
    symptom: React.ReactNode;
    cause: React.ReactNode;
    fix: React.ReactNode;
  }> = [
    {
      number: "01",
      title: "The SERP vs. AI Overview Citation Divergence",
      subtitle: "High Google Rankings, but Fewer Enquiries and Phone Calls",
      badge: "Retrieval Mismatch",
      symptom: "Your website ranks in the top 3 organic Google search results for core keywords, but AI search engines completely omit or misquote your business when synthesising direct answers.",
      cause: (
        <>
          Traditional search crawlers rely heavily on domain history, PageRank, and lexical keyword matching. Generative engines process text using dense vector embeddings and Retrieval-Augmented Generation (RAG). AI models frequently prioritise information placed at the extreme beginning or end of content blocks due to{' '}
          <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-semibold">
            positional bias in retrieval models
          </Link>
          . When Google AI Overviews or ChatGPT synthesise an answer, users get what they need without clicking blue links. If your page lacks structured, passage-level answer blocks, AI systems select alternative competitors whose content is easier to extract.
        </>
      ),
      fix: "Restructure key commercial service pages into self-contained 90 to 120 token answer blocks that directly answer high-intent user queries under descriptive subheadings."
    },
    {
      number: "02",
      title: "Entity Conflation & Identity Ambiguity",
      subtitle: "AI Recommends Your Competitors or Confuses Your Business",
      badge: "Knowledge Graph Gap",
      symptom: "Conversational assistants like ChatGPT, Claude, or Perplexity confuse your business with similarly named overseas software tools, charities, or unverified local competitors.",
      cause: (
        <>
          Lacking explicit, machine-readable schema graphs leaves your brand identity open to algorithmic inference. When AI systems encounter ungrounded brand names, they associate your domain with higher-frequency global vector nodes, diluting regional authority. To see how explicit schema graphs eliminate entity ambiguity and establish early market authority, inspect our{' '}
          <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-aeo-cyan hover:underline font-semibold">
            78-day Perth domain case study
          </Link>
          .
        </>
      ),
      fix: "Deploy a canonical Brand Facts directory and inject nested Organization, LocalBusiness, and ProfessionalService JSON-LD graphs containing verified sameAs authority links, ABN data, and geographic coordinates."
    },
    {
      number: "03",
      title: "Declining Map Leads Despite Stable Organic Ranks",
      subtitle: "AI Search Tools State Incorrect Prices, Hours, or Locations",
      badge: "Local Authority Decay",
      symptom: "Organic website traffic remains steady on analytics dashboards, but high-intent local map enquiries, phone calls, and booking requests from nearby customers are quietly drying up.",
      cause: "Modern proximity algorithms and voice assistants require unambiguous geographic entity signals. Without precise GeoCoordinates, areaServed vectors, and structured directory parity, discovery engines drop your business out of local map packs and voice recommendations.",
      fix: "Standardise Name, Address, and Phone (NAP) facts across core directories, align Bing Places registries, and inject explicit ServiceArea and GeoCoordinates schema attributes into your primary site header."
    },
    {
      number: "04",
      title: "\"Vector Drift\" Caused by Abstract Marketing Copy",
      subtitle: "Agency Buzzwords Filtered Out by Semantic Embeddings",
      badge: "Semantic Dilution",
      symptom: "Your site copy is written in agency jargon (for example, \"We deliver bespoke end-to-end digital synergies\"), causing AI search engines to filter out your pages entirely.",
      cause: "Abstract, conversational fluff dilutes semantic density. Large language models strip away subjective claims during vector similarity calculations. If text carries low informational density per token, it receives low attention scores during LLM retrieval sweeps.",
      fix: "Audit body copy using plain-spoken, declarative statements that state explicit business outcomes, quantifiable metrics, and verified service boundaries."
    },
    {
      number: "05",
      title: "Client-Side Rendering Bottlenecks & Complex Intent Gaps",
      subtitle: "AI Scrapers Failing to Parse Dynamic Content and Multi-Part Queries",
      badge: "Technical Indexing Failure",
      symptom: (
        <>
          Your website looks visually modern, but AI scrapers and automated indexers fail to cite your product inventory, service fees, or detailed capabilities. Check whether lightweight AI scrapers can parse your source code by running our{' '}
          <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-semibold">
            free automated website audit
          </Link>
          .
        </>
      ),
      cause: "Relying heavily on client-side JavaScript execution (such as un-rendered React components or dynamic liquid feeds) prevents lightweight AI crawler bots (e.g., OAI-SearchBot, PerplexityBot) from parsing body text on initial server calls. Additionally, buyers search with long, constraint-rich prompts that bypass traditional keyword match signals.",
      fix: "Refactor critical templates to enforce server-side HTML rendering, standardise semantic HTML5 tags (<article>, <section>), and implement programmatic IndexNow API submission hooks."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags"
        },
        "headline": "5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO)",
        "description": "Technical analysis of five operational indicators showing when a business requires Generative Engine Optimisation (GEO) instead of legacy keyword SEO.",
        "inLanguage": "en-AU",
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags",
        "datePublished": "2026-10-31T08:00:00+08:00",
        "dateModified": "2026-10-31T08:00:00+08:00",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "url": "https://aeobility.com.au/vince-baker"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "legalName": "AEObility",
          "taxID": "61 029 803 255",
          "url": "https://aeobility.com.au",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp"
        },
        "about": [
          {
            "@type": "DefinedTerm",
            "name": "Generative Engine Optimisation",
            "termCode": "GEO",
            "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"
          },
          {
            "@type": "DefinedTerm",
            "name": "Answer Engine Optimisation",
            "termCode": "AEO",
            "sameAs": "https://www.wikidata.org/wiki/Q124314457"
          }
        ],
        "citation": [
          "https://aeobility.com.au/services/geo-marketing",
          "https://aeobility.com.au/services/aeo/comparison",
          "https://aeobility.com.au/diagnostic"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp",
        "url": "https://aeobility.com.au/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp",
        "name": "Business Discovery Signals Showing the Shift from SEO to GEO",
        "description": "Hypercolour abstract illustration showing the divergence between traditional search visibility and AI-native discovery systems, highlighting operational signals that indicate a need for Generative Engine Optimisation.",
        "caption": "Visualising the operational signals that indicate when a business requires Generative Engine Optimisation rather than relying solely on traditional SEO strategies.",
        "keywords": [
          "Generative Engine Optimisation",
          "GEO",
          "Answer Engine Optimisation",
          "SEO vs GEO",
          "AI search visibility",
          "Entity optimisation",
          "Knowledge graphs",
          "AI citations",
          "Answer engines",
          "Discovery systems"
        ],
        "representativeOfPage": true,
        "inLanguage": "en-AU"
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/seo-vs-geo-red-flags#faq",
        "mainEntity": articleFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Article Header */}
        <header className="space-y-6 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <Compass className="w-4 h-4" />
            <span>Diagnostic Guide &bull; Concept Article</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 pt-1">
            <span>Author: <strong className="text-white">Vinnie Baker</strong></span>
            <span>&bull;</span>
            <span>Reading Time: 8 min read</span>
            <span>&bull;</span>
            <span>Updated: 31 October 2026</span>
            <span>&bull;</span>
            <span className="text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
              Benchmark: Level 5 Agent-Native
            </span>
          </div>

          <p className="text-lg sm:text-xl text-white/90 font-serif leading-relaxed pt-2">
            Traditional SEO focuses on getting web pages indexed and ranked for keyword strings. Generative Engine Optimisation (GEO) focuses on making your brand’s core facts understandable, verifiable, and citeable by AI answer engines like ChatGPT Search, Perplexity, and Google AI Overviews.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed">
            If your digital marketing metrics show strong traditional search performance but declining conversion momentum, your website is likely encountering an AI retrieval gap. Recognising when your business needs Generative Engine Optimisation instead of legacy SEO comes down to one clear shift: traditional SEO fights for blue-link clicks, while GEO ensures your business gets cited, recommended, and chosen inside AI answer engines. If search engines and AI models cannot verify your business facts, they guess. When they guess, you lose qualified leads.
          </p>
        </header>

        {/* Featured Image with Scrim Overlay */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl bg-zinc-950 group">
          <Image
            src="/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp"
            alt="Abstract hypercolour illustration showing divergent discovery pathways between traditional search optimisation and AI-driven generative engine optimisation, with warning signals on one side and layered answer-engine discovery systems on the other."
            fill
            className="object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-[11px] font-mono font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Visibility Diagnostic</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-white font-soehne-breit tracking-tight drop-shadow-md">
                  Stop AI Search Engines From Guessing Your Facts
                </h2>
                <p className="text-xs sm:text-sm text-zinc-200 font-serif line-clamp-2 drop-shadow">
                  Eliminate hallucinated pricing, omitted recommendations, and broken local citations with verifiable entity architecture.
                </p>
              </div>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-aeo-cyan text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-lg shrink-0"
              >
                <span>Run Visibility Scan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 1: 5 CRITICAL SIGNALS BREAKDOWN */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Diagnostic Assessment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
              Five Operational Indicators of AI Retrieval Failure
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Review each indicator to assess whether your digital presence is being filtered out by conversational search engines and zero-click AI answer panels.
            </p>
          </div>

          <div className="space-y-8">
            {signals.map((sig, idx) => (
              <article
                key={idx}
                id={`signal-${sig.number}`}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-aeo-cyan/30 transition-all space-y-5 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-mono font-extrabold text-aeo-cyan">
                      {sig.number}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                        {sig.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-serif">
                        {sig.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                    {sig.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 text-xs sm:text-sm font-serif">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1">
                    <strong className="text-red-300 font-mono text-xs uppercase tracking-wider block">
                      The Symptom &amp; Red Flag:
                    </strong>
                    <p className="text-zinc-200 leading-relaxed">
                      {sig.symptom}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <strong className="text-zinc-400 font-mono text-xs uppercase tracking-wider block">
                      The Technical Root Cause:
                    </strong>
                    <p className="text-zinc-300 leading-relaxed">
                      {sig.cause}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                    <strong className="text-cyan-300 font-mono text-xs uppercase tracking-wider block">
                      The GEO Fix &amp; Implementation:
                    </strong>
                    <p className="text-zinc-200 leading-relaxed">
                      {sig.fix}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 2: THE OPERATIONAL DIFFERENCE TABLE */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan block">
              Comparative Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
              The Operational Difference: Legacy SEO vs GEO
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Understand how content extraction, technical tasks, and commercial outcomes diverge between traditional search engines and AI answer engines.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-white font-mono text-xs border-b border-white/10">
                <tr>
                  <th className="p-4 sm:p-5 font-semibold">What Matters</th>
                  <th className="p-4 sm:p-5 font-semibold text-zinc-400">Legacy SEO</th>
                  <th className="p-4 sm:p-5 font-semibold text-aeo-cyan">Generative Engine Optimisation (GEO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-serif text-zinc-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">Primary Goal</td>
                  <td className="p-4 sm:p-5">Getting a blue-link ranking on page one of Google SERPs.</td>
                  <td className="p-4 sm:p-5 text-white font-medium">Getting cited and recommended by AI answer tools and generative summaries.</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">How Content Is Read</td>
                  <td className="p-4 sm:p-5">Full-page keyword density and lexical text indexing.</td>
                  <td className="p-4 sm:p-5 text-white font-medium">Concise, standalone factual blocks (90–120 tokens) parsed by dense vector embeddings.</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">Core Technical Work</td>
                  <td className="p-4 sm:p-5">Backlinks, meta descriptions, and keyword stuffing.</td>
                  <td className="p-4 sm:p-5 text-white font-medium">Connected Schema.org code graphs, Brand Facts ledgers, and cross-directory proof.</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">Commercial Outcome</td>
                  <td className="p-4 sm:p-5">Website visits (hoping visitors browse without bouncing).</td>
                  <td className="p-4 sm:p-5 text-white font-medium">Direct customer trust at the point of recommendation with high-intent conversion.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: ACTIONABLE IMPLEMENTATION FRAMEWORK */}
        <section className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan block">
              Resolution Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
              How to Resolve AI Retrieval Gaps
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Fixing these red flags does not require abandoning your existing website. If your business exhibits one or more of these retrieval gaps, run a complete vector proximity and schema audit with the{' '}
              <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline font-semibold">
                $995 AEObility Strategic Blueprint
              </Link>
              . AEObility deploys targeted, fixed-scope engineering sprints to rebuild machine legibility across four distinct layers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-aeo-cyan font-mono text-xs font-bold">
                <Code className="w-4 h-4" />
                <span>1. Structured Microdata</span>
              </div>
              <h4 className="text-sm font-bold text-white">Deploy Connected Schema Graphs</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Connect your Organization, LocalBusiness, and Service entities with verified GeoCoordinates and sameAs authority anchors to eliminate brand ambiguity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-aeo-purple font-mono text-xs font-bold">
                <Layers className="w-4 h-4" />
                <span>2. Atomic Passages</span>
              </div>
              <h4 className="text-sm font-bold text-white">Rewrite High-Intent Service Blocks</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Reformat core pages into modular 90 to 120 token answer blocks that AI search retrievers can easily extract during query fan-out sweeps.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>3. Brand Facts Ledger</span>
              </div>
              <h4 className="text-sm font-bold text-white">Publish a Machine-Readable Truth</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Provide a single authoritative endpoint on your domain detailing exact pricing, credentials, service boundaries, and operating hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                <BarChart3 className="w-4 h-4" />
                <span>4. Citation Telemetry</span>
              </div>
              <h4 className="text-sm font-bold text-white">Monitor AI Search Appearances</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Track how Perplexity, ChatGPT Search, and Google AI Overviews represent your business over time to detect vector drift before conversions drop.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="space-y-6 border-t border-white/10 pt-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-aeo-cyan block">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
              SEO vs GEO Evaluation &amp; Diagnostics
            </h2>
            <p className="text-sm text-zinc-300 font-serif leading-relaxed">
              Direct answers to common questions about diagnosing AI search gaps and choosing between in-house execution and specialist sprint engagements.
            </p>
          </div>

          <div className="space-y-4">
            {articleFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-zinc-950/80 border border-white/10 rounded-2xl p-5 cursor-pointer open:bg-zinc-950 transition-colors"
              >
                <summary className="font-bold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300 text-lg font-mono">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif pl-4 border-l-2 border-aeo-cyan/30">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 5: CONVERSION CTA BLOCK */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-aeo-cyan/15 via-black to-aeo-purple/20 border border-white/15 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">
            Stop AI From Guessing Your Business Facts
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto font-serif leading-relaxed">
            We define exactly what your business offers so AI stops guessing. Lock in a diagnostic review to identify your visibility gaps across Search, Maps, and AI answer engines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/diagnostic"
              className="w-full sm:w-auto px-6 py-3.5 bg-aeo-cyan text-black font-bold text-xs sm:text-sm rounded-xl hover:bg-white transition-all shadow-lg shadow-aeo-cyan/20"
            >
              <span>Run Free Visibility Scan</span>
            </Link>
            <Link
              href="/solutions/aeo-blueprint"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-white/20 transition-all"
            >
              <span>Explore Strategic Blueprint ($995)</span>
            </Link>
            <Link
              href="/services/geo-marketing"
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-cyan-500/40 text-cyan-300 font-bold text-xs sm:text-sm rounded-xl hover:bg-cyan-950/30 transition-all"
            >
              <span>GEO Services &amp; Sprints &rarr;</span>
            </Link>
          </div>
        </section>

        {/* SECTION 6: RADIAL CLUSTER LINKS */}
        <section className="border-t border-white/10 pt-10 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold">
            Related Knowledge Resources &amp; Service Nodes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
            <Link
              href="/services/geo-marketing"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-colors"
            >
              <strong className="text-white block mb-1">GEO Marketing Services</strong>
              <span className="text-zinc-400 font-serif">Fixed-scope implementation sprints to align business facts and local map citations.</span>
            </Link>
            <Link
              href="/services/aeo/comparison"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-colors"
            >
              <strong className="text-white block mb-1">AEO vs SEO vs GEO Comparison</strong>
              <span className="text-zinc-400 font-serif">Detailed breakdown of algorithmic differences between search engines and conversational models.</span>
            </Link>
            <Link
              href="/knowledge-hub/geo"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/30 hover:text-aeo-cyan transition-colors"
            >
              <strong className="text-white block mb-1">Local GEO Knowledge Guide</strong>
              <span className="text-zinc-400 font-serif">Learn how to configure LocalBusiness, GeoCoordinates, and areaServed microdata.</span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

