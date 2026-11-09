import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, FileText } from 'lucide-react';

export const metadata = {
  title: "AI Search Articles & Technical Guides | AEObility",
  description: "Read our latest articles on Answer Engine Optimisation (AEO), generative search, and semantic content structuring.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles",
  },
};

export default function ArticlesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AEObility AI Search Articles & Technical Guides",
    "description": "Read our latest articles on Answer Engine Optimisation (AEO), generative search, and semantic content structuring.",
    "url": "https://aeobility.com.au/knowledge-hub/articles",
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  const articles = [
    {
      title: "Google AI Search: Grounded Synthesis Guide",
      category: "AEO Strategy & Retrieval Architecture",
      description: "Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.",
      href: "/knowledge-hub/articles/google-ai-search",
      image: "/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
      alt: "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
      metrics: [
        { label: "Type", value: "Technical Strategy" },
        { label: "Read Time", value: "7 min" }
      ]
    },
    {
      title: "5 Critical Signals Your Business Needs GEO (Not Just Traditional SEO)",
      category: "Generative Engine Optimisation / Diagnostic Guide",
      description: "Technical analysis of five operational indicators showing when a business requires Generative Engine Optimisation (GEO) instead of legacy keyword SEO.",
      href: "/knowledge-hub/articles/seo-vs-geo-red-flags",
      image: "/images/knowledge-hub/geo-vs-seo-red-flags-banner_AEObility.webp",
      alt: "Abstract hypercolour illustration showing divergent discovery pathways between traditional search optimisation and AI-driven generative engine optimisation, with warning signals on one side and layered answer-engine discovery systems on the other.",
      metrics: [
        { label: "Type", value: "Diagnostic Guide" },
        { label: "Read Time", value: "8 min" }
      ]
    },
    {
      title: "Machine Legibility & Data Provenance: Intentional Data Structures",
      category: "Foundational Theory / Entity Architecture",
      description: "Explore the foundational paper connecting machine legibility, verifiable data provenance, deterministic entity relationships, and intentional data structures for AI search.",
      href: "/knowledge-hub/articles/machine-legibility-data-provenance",
      image: "/images/knowledge-hub/machine-legibility-data-provenance_AEObility.webp",
      alt: "Abstract image visualising how AEObility uses Machine Legibility & Data Provenance to trace origins of NLP Agent and Brand moniker AI Bill",
      metrics: [
        { label: "Type", value: "Foundational Paper" },
        { label: "Read Time", value: "4 min" }
      ]
    },
    {
      title: "Why This Architecture Is Correct for AI Search: Entities, Evidence, and Propositions",
      category: "Grounding & Provenance / CBKL",
      description: "Learn how to eliminate AI factual drift, missing citations, and incorrect pricing by deploying semantic propositions and the 5-stage verification loop.",
      href: "/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps",
      image: "/images/knowledge-hub/fix-ai-hallucinations-and-evidence-gaps_AEObility.webp",
      alt: "Fix AI Brand Hallucinations and Evidence Gaps: Semantic Propositions and Entity Architecture by AEObility in Perth, Western Australia",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "9 min" }
      ]
    },
    {
      title: "Telemetry Diagnostic Tool: Architecture & Operational Walkthrough",
      category: "Technical Architecture / Spec",
      description: "Deep-dive technical specification detailing vector mapping infrastructure, text-embedding-004 RAG dilution mitigation, scoring math, AI Bill ingestion, and NLWeb/MCP protocols.",
      href: "/knowledge-hub/articles/telemetry-diagnostic-architecture",
      image: "/images/knowledge-hub/telemetry-diagnostic-guide_AEObility.webp",
      alt: "Visualisation of AEObility NLP agent AI Bill overseeing the Telemetry Engine 6-stage diagnostic pipeline",
      metrics: [
        { label: "Type", value: "Technical Spec" },
        { label: "Read Time", value: "8 min" }
      ]
    },
    {
      title: "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
      category: "Multi-Engine AEO & Retrieval",
      description: "A practical guide to the crawlers, indexes, and content signals that shape AI search visibility - and what your business can actually do about them.",
      href: "/knowledge-hub/articles/optimising-for-different-ai-search-engines",
      image: "/images/knowledge-hub/optimising-for-different-ai-web-search-engines_AEObility.webp",
      alt: "Abstract high‑velocity gradient artwork depicting multi‑engine retrieval convergence",
      metrics: [
        { label: "Type", value: "Strategic Deep Dive" },
        { label: "Read Time", value: "8 min" }
      ]
    },
    {
      title: "How Structured Data Helps You Survive the Query Fan-Out",
      category: "AEO / Structured Data",
      description: "Learn how structured data helps brands survive query fan-out in AI search by improving entity clarity, retrieval, and citation accuracy.",
      href: "/knowledge-hub/articles/structured-data-query-fan-out",
      image: "/images/knowledge-hub/structured-data-query-fan-out_AEObility.webp",
      alt: "High-tech structured data and query fan-out architecture diagram visualising Schema.org entity anchors and AI search vector retrieval by AEObility in Perth, Western Australia.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "What Is Positional Bias in Retrieval and Answer Engines?",
      category: "Dense Retrieval & LLM Bias",
      description: "Learn how positional bias and the 'lost in the middle' phenomenon affect search visibility, and how Answer Engine Optimisation (AEO) structures content for machine clarity.",
      href: "/knowledge-hub/articles/positional-bias-in-retrieval",
      image: "/images/knowledge-hub/positional-bias-retrieval-AEObility.webp",
      alt: "Positional bias architecture diagram depicting AI search dense vector retrieval, LLM context window attention dilution, primacy and recency spikes, and Answer Engine Optimisation (AEO) entity salience by AEObility in Perth, Western Australia.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "Entity Authority: Why AI Search Ranks Entities, Not Pages",
      category: "Entity Authority & AEO",
      description: "Learn how entity authority building strengthens semantic search visibility, improves Answer Engine Optimisation and helps AI systems recognise and recommend your business.",
      href: "/knowledge-hub/articles/entity-authority-building",
      image: "/images/knowledge-hub/entity-visibilty-semantic-SEO_AEObility.webp",
      alt: "Entity visibility and AI semantic SEO architecture diagram illustrating Answer Engine Optimisation (AEO) entity node authority, Knowledge Graph relationships, and RAG retrieval vectors for Australian businesses by AEObility.",
      metrics: [
        { label: "Type", value: "Core Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "RAG, Answer Engines & Why Machine‑Readable Content Matters",
      category: "Vector Retrieval & RAG",
      description: "Learn how Retrieval-Augmented Generation (RAG) works, why machine-readable content matters for AEO, and how chunking affects AI search visibility.",
      href: "/knowledge-hub/articles/retrieval-augmented-generation",
      image: "/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp",
      alt: "AI Search Optimisation and Retrieval-Augmented Generation (RAG) visual diagram depicting vector retrieval, passage chunking, and semantic entity grounding by AEObility.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "6 min" }
      ]
    },
    {
      title: "What Is SEO Optimisation? Guide for Modern Search",
      category: "Foundational Search Infrastructure",
      description: "Understand traditional lexical search, sparse BM25 indexing, technical SEO pillars, and how page-level structure feeds AI Knowledge Graphs and RAG pipelines.",
      href: "/knowledge-hub/what-is-seo-optimisation",
      image: "/images/knowledge-hub/seo-optimisation-ai-search_AEObility.webp",
      alt: "Abstract hyper-gradient illustration showing SEO as the foundational input layer for modern search.",
      metrics: [
        { label: "Type", value: "Foundational Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "AEO vs SEO: The Complete Guide to AI Search",
      category: "Generative Search",
      description: "Discover the shifting search landscape from lexical retrieval to semantic retrieval and learn how Answer Engine Optimisation (AEO) gets your brand into AI answers.",
      href: "/knowledge-hub/articles/aeo-vs-seo",
      image: "/images/knowledge-hub/traditional-seo-vs-aeo_AEObility.webp",
      alt: "Abstract visualisation of traditional SEO versus AEO semantic retrieval using AEObility gradient palette.",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    }
  ];

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

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical Reading</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AI Search <span className="text-gradient-aeo">Articles</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              Deep dives into generative search, entity modelling, and the strategies shaping modern machine readability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {articles.map((article, idx) => (
              <div key={idx} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-aeo-cyan/20 transition-all flex flex-col md:flex-row h-full">
                <div className="relative aspect-video md:w-2/5 w-full bg-neutral-950 flex-shrink-0 min-h-[220px]">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="text-[10px] text-aeo-cyan uppercase tracking-widest font-bold">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-serif">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      {article.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-extrabold text-white">{metric.value}</div>
                          <div className="text-[9px] text-white/40 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={article.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
                    >
                      Read Article <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Hub Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5">
            <Link href="/knowledge-hub" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Knowledge Hub Overview
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
