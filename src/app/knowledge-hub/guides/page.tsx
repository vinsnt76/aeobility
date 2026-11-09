import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: "AEO & AI Search Technical Guides | AEObility",
  description: "Access industry-standard technical guides on Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and entity authority.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/guides",
  },
};

export default function GuidesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AEObility AEO & AI Search Technical Guides",
    "description": "Access industry-standard technical guides on Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and entity authority.",
    "url": "https://aeobility.com.au/knowledge-hub/guides",
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  const guides = [
    {
      title: "Telemetry Diagnostic Tool: Technical Architecture Guide",
      category: "System Specification & Vector Math",
      description: "Deep-dive technical specification detailing vector mapping infrastructure, text-embedding-004 RAG dilution mitigation, 5-tier scoring math, AI Bill ingestion, and NLWeb/MCP protocols.",
      href: "/knowledge-hub/articles/telemetry-diagnostic-architecture",
      metrics: [
        { label: "Type", value: "Technical Spec" },
        { label: "Read Time", value: "8 min" }
      ]
    },
    {
      title: "Answer Engine Optimisation Core Principles",
      category: "AEO Fundamentals & RAG Mechanics",
      description: "Technical guide on how search bots parse files for direct citation extraction. Learn to maximise positional bias within text fields and atomic answer blocks.",
      href: "/knowledge-hub/aeo",
      metrics: [
        { label: "Type", value: "Core Guide" },
        { label: "Read Time", value: "6 min" }
      ]
    },
    {
      title: "What Is Positional Bias in Retrieval and Answer Engines?",
      category: "Dense Retrieval & LLM Bias",
      description: "Learn what positional bias is in AI search and LLMs, how retrieval and synthesis bottlenecks affect search visibility, and how to engineer content using the Positional Bias Audit Checklist.",
      href: "/knowledge-hub/articles/positional-bias-in-retrieval",
      metrics: [
        { label: "Type", value: "Research Guide" },
        { label: "Read Time", value: "7 min" }
      ]
    },
    {
      title: "How Structured Data Helps You Survive the Query Fan-Out",
      category: "AEO / Structured Data",
      description: "Learn how structured data helps brands survive query fan-out in AI search by improving entity clarity, retrieval, and citation accuracy.",
      href: "/knowledge-hub/articles/structured-data-query-fan-out",
      metrics: [
        { label: "Type", value: "Technical Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "RAG, Answer Engines & Why Machine‑Readable Content Matters",
      category: "RAG Architecture",
      description: "Comprehensive guide to Retrieval-Augmented Generation (RAG) and why restructuring web content into machine-readable atomic units determines AI search survival.",
      href: "/knowledge-hub/articles/retrieval-augmented-generation",
      metrics: [
        { label: "Type", value: "RAG Guide" },
        { label: "Read Time", value: "6 min" }
      ]
    },
    {
      title: "What Is SEO Optimisation? Guide for Modern Search",
      category: "Foundational Search Infrastructure",
      description: "Learn what SEO optimisation means today, how lexical retrieval feeds RAG hybrid search, and how Entity SEO bridges traditional search to AEO.",
      href: "/knowledge-hub/what-is-seo-optimisation",
      metrics: [
        { label: "Type", value: "Foundational Guide" },
        { label: "Read Time", value: "5 min" }
      ]
    },
    {
      title: "Competitor Overlap & Semantic Dominance Framework",
      category: "Diagnostic Methodology",
      description: "Learn how AEObility evaluates competitor overlap, semantic dominance, and AI search readiness. Discover how your business compares to competitors.",
      href: "/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
      metrics: [
        { label: "Type", value: "Framework Spec" },
        { label: "Read Time", value: "7 min" }
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

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        {/* Header Hero */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Guides Directory</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            AEO &amp; AI Search <span className="text-gradient-aeo">Technical Guides</span>
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl font-serif leading-relaxed">
            In-depth technical guides detailing Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and structured entity graphs for Australian enterprises.
          </p>
        </header>

        {/* Guides Grid */}
        <section aria-label="Technical Guides List" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, idx) => (
            <article 
              key={idx} 
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase tracking-wider bg-aeo-cyan/10 px-2.5 py-1 rounded-md border border-aeo-cyan/20">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                    {guide.metrics.map((m, i) => (
                      <span key={i}>
                        {m.label}: <strong className="text-white/80">{m.value}</strong>
                        {i < guide.metrics.length - 1 && <span className="ml-2 text-white/20">&bull;</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                  <Link href={guide.href}>
                    {guide.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed font-serif">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link 
                  href={guide.href}
                  className="text-xs font-bold text-aeo-cyan group-hover:underline flex items-center gap-1.5"
                >
                  <span>Read Guide Specification</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA Card */}
        <section className="p-8 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need a custom technical audit for your digital footprint?</h3>
            <p className="text-sm text-white/70 font-light max-w-lg">
              Our 60-second interactive diagnostic scans your website against Gemini 768-dim embeddings, RAG survival criteria, and local map signals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/diagnostic"
              className="px-6 py-3 rounded-xl bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(0,205,216,0.3)] flex items-center gap-2"
            >
              <span>Run Visibility Scan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/solutions/aeo-blueprint"
              className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-all border border-white/10"
            >
              <span>Explore $995 Blueprint</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
