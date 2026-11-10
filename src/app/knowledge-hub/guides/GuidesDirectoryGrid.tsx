'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  ShieldCheck, 
  Target, 
  GitGraph, 
  Layers, 
  Search, 
  Scale, 
  ArrowRight, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

export type GuideCategory = 'All' | 'Core AEO' | 'RAG & Retrieval' | 'Diagnostic Frameworks';

export interface GuideItem {
  id: string;
  title: string;
  category: 'Core AEO' | 'RAG & Retrieval' | 'Diagnostic Frameworks';
  categoryLabel: string;
  description: string;
  href: string;
  type: string;
  readTime: string;
  audience: string;
  complexity: 'Foundational Primer' | 'Intermediate Architecture' | 'Intermediate Research' | 'Mathematical Spec' | 'Strategic Diagnostic' | 'Advanced RAG';
  isFlagship?: boolean;
  flagshipBadge?: string;
  glyph: React.ComponentType<{ className?: string }>;
  dataBadge: string;
  actionText?: string;
}

const GUIDES_DATA: GuideItem[] = [
  {
    id: 'aeo-core-principles',
    title: 'Answer Engine Optimisation Core Principles',
    category: 'Core AEO',
    categoryLabel: 'AEO Fundamentals & RAG Mechanics',
    description: 'Foundational technical guide on how AI search bots parse web assets for direct citation extraction. Master positional bias heuristics, semantic token density, and atomic answer block engineering.',
    href: '/knowledge-hub/aeo',
    type: 'Core Primer',
    readTime: '6 min',
    audience: 'Founders & Technical Growth Leads',
    complexity: 'Foundational Primer',
    isFlagship: true,
    flagshipBadge: 'Core Primer • Start Here',
    glyph: ShieldCheck,
    dataBadge: 'AEO Core • Top 1 Retrieval • Positional Heuristics',
    actionText: 'Explore Core Primer'
  },
  {
    id: 'telemetry-diagnostic-architecture',
    title: 'Telemetry Diagnostic Tool: Technical Architecture Guide',
    category: 'Diagnostic Frameworks',
    categoryLabel: 'System Specification & Vector Math',
    description: 'Deep-dive technical specification detailing vector mapping infrastructure, text-embedding-004 RAG dilution mitigation, 5-tier scoring math, AI Bill ingestion, and NLWeb/MCP protocols.',
    href: '/knowledge-hub/articles/telemetry-diagnostic-architecture',
    type: 'Technical Spec',
    readTime: '8 min',
    audience: 'Data Engineers & System Architects',
    complexity: 'Mathematical Spec',
    glyph: Cpu,
    dataBadge: 'sim(q, d) = cos(θ) • dim: 768 • MCP RPC',
    actionText: 'Explore Architecture'
  },
  {
    id: 'positional-bias-in-retrieval',
    title: 'What Is Positional Bias in Retrieval and Answer Engines?',
    category: 'RAG & Retrieval',
    categoryLabel: 'Dense Retrieval & LLM Bias',
    description: 'Understand positional bias heuristics across LLMs and dense retrieval systems. Learn how chunk position and context degradation impact LLM citation visibility, with practical audit methods.',
    href: '/knowledge-hub/articles/positional-bias-in-retrieval',
    type: 'Research Guide',
    readTime: '7 min',
    audience: 'Technical SEOs & AI Engineers',
    complexity: 'Intermediate Research',
    glyph: Target,
    dataBadge: 'P(cite) ∝ exp(-k · rank) • Top 30% Chunk',
    actionText: 'Explore Research'
  },
  {
    id: 'structured-data-query-fan-out',
    title: 'How Structured Data Helps You Survive the Query Fan-Out',
    category: 'Core AEO',
    categoryLabel: 'AEO / Structured Data',
    description: 'How decoupled JSON-LD entity graphs prevent entity hallucination when search engines fan out user prompts into parallel sub-queries across disparate vector indexes.',
    href: '/knowledge-hub/articles/structured-data-query-fan-out',
    type: 'Technical Architecture',
    readTime: '5 min',
    audience: 'Web Developers & Technical SEOs',
    complexity: 'Intermediate Architecture',
    glyph: GitGraph,
    dataBadge: 'JSON-LD @graph • RDF Triples • Fan-Out: λ_k',
    actionText: 'Explore Architecture'
  },
  {
    id: 'retrieval-augmented-generation',
    title: 'RAG, Answer Engines & Why Machine‑Readable Content Matters',
    category: 'RAG & Retrieval',
    categoryLabel: 'RAG Architecture',
    description: 'Comprehensive architectural guide to Retrieval-Augmented Generation (RAG). Learn why restructuring unstructured prose into deterministic machine-readable units preserves citation fidelity.',
    href: '/knowledge-hub/articles/retrieval-augmented-generation',
    type: 'RAG Architecture',
    readTime: '6 min',
    audience: 'Data Architects & Software Engineers',
    complexity: 'Advanced RAG',
    glyph: Layers,
    dataBadge: 'Chunk: 90t • Cosine Proximity: 0.94 • Zero Drift',
    actionText: 'Explore Architecture'
  },
  {
    id: 'what-is-seo-optimisation',
    title: 'What Is SEO Optimisation? Guide for Modern Search',
    category: 'Core AEO',
    categoryLabel: 'Foundational Search Infrastructure',
    description: 'How lexical keyword indexing interfaces with dense vector embeddings in modern hybrid retrieval systems, and how Entity SEO bridges traditional organic search to generative AEO.',
    href: '/knowledge-hub/what-is-seo-optimisation',
    type: 'Foundational Infrastructure',
    readTime: '5 min',
    audience: 'Founders & Marketing Directors',
    complexity: 'Foundational Primer',
    glyph: Search,
    dataBadge: 'Hybrid Search: BM25 Lexical + Dense Vectors',
    actionText: 'Explore Guide'
  },
  {
    id: 'competitor-overlap-framework',
    title: 'Competitor Overlap & Semantic Dominance Framework',
    category: 'Diagnostic Frameworks',
    categoryLabel: 'Diagnostic Methodology',
    description: 'Methodological framework for measuring semantic vector overlap against direct competitors in answer engines, identifying citation gaps, and engineering decisive topical dominance.',
    href: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
    type: 'Diagnostic Methodology',
    readTime: '7 min',
    audience: 'Technical Directors & Digital Strategists',
    complexity: 'Strategic Diagnostic',
    glyph: Scale,
    dataBadge: 'Matrix: Δ(E_A, E_B) • Semantic Dominance > 85%',
    actionText: 'Explore Methodology'
  }
];

const CATEGORIES: GuideCategory[] = [
  'All',
  'Core AEO',
  'RAG & Retrieval',
  'Diagnostic Frameworks'
];

export default function GuidesDirectoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<GuideCategory>('All');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<GuideCategory, number> = {
      'All': GUIDES_DATA.length,
      'Core AEO': 0,
      'RAG & Retrieval': 0,
      'Diagnostic Frameworks': 0
    };
    GUIDES_DATA.forEach(guide => {
      counts[guide.category] = (counts[guide.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered guides list
  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'All') return GUIDES_DATA;
    return GUIDES_DATA.filter(g => g.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Faceted Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Filter Corridors:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Guides category filter">
          {CATEGORIES.map(category => {
            const isActive = selectedCategory === category;
            const count = categoryCounts[category];
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={isActive}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-aeo-cyan text-black font-bold border-aeo-cyan shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                    : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border-white/10'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Guides Grid */}
      <section 
        aria-label="Technical Guides Directory" 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredGuides.map((guide) => {
          const Icon = guide.glyph;
          const isFlagship = guide.isFlagship;

          return (
            <Link
              key={guide.id}
              href={guide.href}
              className={`relative isolate overflow-hidden rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer ${
                isFlagship
                  ? 'border border-aeo-cyan/50 bg-gradient-to-br from-aeo-cyan/[0.08] via-white/[0.03] to-transparent shadow-[0_0_35px_rgba(0,229,255,0.12)] hover:border-aeo-cyan hover:shadow-[0_0_45px_rgba(0,229,255,0.25)]'
                  : 'border border-white/10 bg-white/[0.03] hover:border-aeo-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
              }`}
            >
              {/* Specular Top Gradient Highlight */}
              <div 
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transition-all duration-300 ${
                  isFlagship ? 'via-aeo-cyan/70' : 'group-hover:via-aeo-cyan/60'
                }`} 
              />

              {/* Abstract Data Badge Watermark (Mathematical / Architecture Signature) */}
              <div 
                className="absolute right-4 bottom-14 font-mono text-[10px] text-zinc-600/20 select-none pointer-events-none tracking-tight group-hover:text-aeo-cyan/20 transition-colors hidden sm:block max-w-[240px] text-right truncate"
                aria-hidden="true"
              >
                {guide.dataBadge}
              </div>

              {/* Card Main Body */}
              <div className="space-y-4">
                {/* Header Row: Glyph + Category Pill / Flagship Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-aeo-cyan group-hover:scale-105 group-hover:border-aeo-cyan/40 group-hover:bg-aeo-cyan/10 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-widest bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                        {guide.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {isFlagship && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-aeo-cyan bg-aeo-cyan/15 px-2.5 py-1 rounded-md border border-aeo-cyan/35 shadow-[0_0_12px_rgba(0,229,255,0.2)] shrink-0">
                      <Sparkles className="w-3 h-3 text-aeo-cyan" />
                      <span>{guide.flagshipBadge}</span>
                    </span>
                  )}
                </div>

                {/* Guide Title (Primary Scannable Anchor) */}
                <h2 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug tracking-tight">
                  {guide.title}
                </h2>

                {/* Description (WCAG 2.2 AA Contrast >= 4.5:1) */}
                <p className="text-sm text-zinc-300 font-serif font-light leading-relaxed">
                  {guide.description}
                </p>

                {/* Guided Routing & Capability Flagging */}
                <div className="pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400">
                  <div className="truncate">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Audience</span>
                    <span className="text-zinc-200 font-medium truncate block">{guide.audience}</span>
                  </div>
                  <div className="truncate">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Complexity</span>
                    <span className="text-zinc-200 font-medium truncate block">{guide.complexity}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Metadata + Interactive Affordance */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-5">
                <span className="text-xs font-mono text-zinc-400">
                  Read Time: <strong className="text-zinc-200">{guide.readTime}</strong>
                </span>

                <span className="text-xs font-mono font-semibold text-aeo-cyan group-hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>{guide.actionText || 'Explore Architecture'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

