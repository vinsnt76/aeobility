'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Zap,
  Target,
  Building2,
  FileCheck,
  Search,
  ShieldCheck
} from 'lucide-react';

export default function WhatIsAeoPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');
  const [heroQuery, setHeroQuery] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroUrl.trim()) return;

    let formatted = heroUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    const queryParam = heroQuery.trim() ? `&query=${encodeURIComponent(heroQuery.trim())}` : '';
    router.push(`/diagnostic?url=${encodeURIComponent(formatted)}${queryParam}&auto=true`);
  };

  const faqs = [
    {
      question: "What does AEO stand for in digital marketing?",
      answer: "AEO stands for Answer Engine Optimisation. Unlike traditional SEO which focuses on web page ranking positions in blue-link search results, AEO structures business data for direct passage retrieval across conversational AI surfaces like ChatGPT, Google AI Overviews, Perplexity, and Gemini."
    },
    {
      question: "How is AEO different from traditional SEO?",
      answer: "Traditional SEO relies on keyword matching, backlinks, and ranking web page URLs in search engine result pages (SERPs). AEO builds on SEO foundations by formatting content into machine-readable JSON-LD entity graphs, atomic passage blocks, and verified proof triples so AI models can cite your brand."
    },
    {
      question: "Why is Answer Engine Optimisation important for Australian businesses?",
      answer: "As buyers increasingly rely on conversational assistants and Google AI features for local service recommendations, businesses without clear machine-readable entity data risk being omitted or misrepresented in AI synthesised answers."
    },
    {
      question: "What are the core principles of AEO?",
      answer: "The core principles of AEO include establishing unambiguous brand identity signals (JSON-LD schema), building topical entity authority, structuring content into 90–120 token atomic answer blocks, ensuring multi-platform citation consistency, and verifying claims with evidence triples."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/what-is-aeo",
        "name": "What is AEO? Answer Engine Optimisation Guide | AEObility",
        "description": "Discover what Answer Engine Optimisation (AEO) means in digital marketing. Learn how machine learning models ingest, verify, and cite business information.",
        "inLanguage": "en-AU",
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage"
        },
        "image": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage"
        },
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "jobTitle": "Technical Search Architect",
          "url": "https://aeobility.com.au/vince-baker"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "What is AEO?",
              "item": "https://aeobility.com.au/knowledge-hub/what-is-aeo"
            }
          ]
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#termset",
        "name": "Answer Engine Optimisation Terminology",
        "hasDefinedTerm": {
          "@type": "DefinedTerm",
          "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#definition",
          "name": "Answer Engine Optimisation (AEO)",
          "description": "Answer Engine Optimisation (AEO) is a technical search discipline that structures brand identity, web content, and first-party facts into machine-readable JSON-LD entity graphs and atomic passage blocks. Built for Retrieval-Augmented Generation (RAG) pipelines, Large Language Models (LLMs), and generative search platforms like Google AI Overviews, Perplexity, and ChatGPT, AEO ensures retrieval engines can resolve entity relationships, verify authoritative proof triples, and cite the brand directly within synthesised answers.",
          "inDefinedTermSet": "https://aeobility.com.au/knowledge-hub/what-is-aeo#termset"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp#primaryimage",
        "url": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp",
        "headline": "AI Visibility Scanner: Connecting User Prompts to Business Entities via AEO",
        "name": "AI Visibility Scanner: Connecting User Prompts to Business Entities via AEO",
        "caption": "Conceptual graphic illustrating Answer Engine Optimisation (AEO). An AI scanner robot parses prompt coordinate points and vector data, demonstrating how AI models discover, interpret, and link digital entities to business brands.",
        "description": "Conceptual graphic illustrating Answer Engine Optimisation (AEO). An AI scanner robot parses prompt coordinate points and vector data, demonstrating how AI models discover, interpret, and link digital entities to business brands.",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "url": "https://aeobility.com.au/vince-baker"
        },
        "creator": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "url": "https://aeobility.com.au/vince-baker"
        },
        "copyrightNotice": "© 2026 AEObility. All rights reserved.",
        "copyrightHolder": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "creditText": "AEObility",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility"
        },
        "keywords": [
          "AEO",
          "Answer Engine Optimisation",
          "AI Visibility Scanner",
          "Business Entity",
          "Vector Space",
          "AI Search Optimisation",
          "GEO",
          "Prompt Retrieval",
          "Aeobility",
          "Entity SEO"
        ],
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia, Australia",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Perth",
            "addressRegion": "Western Australia",
            "addressCountry": "Australia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        },
        "fileFormat": "image/webp",
        "width": 1200,
        "height": 800
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar subnavItems={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* SECTION 1: HEADER & DIRECT DEFINITION (Above the Fold) */}
          <section className="flex flex-col items-start text-left w-full max-w-5xl mx-auto space-y-6">
            <div className="flex justify-start text-left w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-aeo-cyan" />
                <span>WHAT IS AEO</span>
              </div>
            </div>

            <div className="space-y-2 text-left w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit text-white text-left">
                What is AEO?
              </h1>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-soehne-breit text-gradient-aeo text-left">
                The Complete Guide to Answer Engine Optimisation
              </h3>
            </div>

            {/* 2 points (2px) Gradient Underline */}
            <div className="w-full py-2">
              <div className="h-[2px] w-full max-w-md bg-gradient-to-r from-[#00E5FF] via-purple-500 to-transparent rounded-full" />
            </div>

            {/* Author & Trust Signals (Single Line Left-Aligned) */}
            <div className="flex items-center justify-start gap-3 py-1 text-left w-full">
              <Image
                src="/images/about/vince-baker-profile_AEObility.webp"
                alt="Vince Baker - Technical Search Architect"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-cyan-400/50 object-cover shadow-sm shrink-0"
              />
              <div className="text-xs font-mono text-zinc-300 flex flex-wrap items-center gap-x-2 gap-y-1 text-left">
                <span>
                  By{' '}
                  <Link href="/vince-baker" className="text-cyan-400 font-bold hover:underline">
                    Vince Baker
                  </Link>{' '}
                  <span className="text-zinc-500">|</span> Technical Search Architect
                </span>
                <span className="text-zinc-500 hidden sm:inline">|</span>
                <span className="text-zinc-400 text-[11px]">
                  Reviewed &amp; Updated: 1 October 2026 <span className="text-zinc-500">|</span> Fact-Checked &amp; Entity Grounded
                </span>
              </div>
            </div>

            {/* Core Atomic Direct Answer Passage (80–120 tokens) */}
            <div className="space-y-3 text-left w-full max-w-4xl pt-2">
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed text-left">
                <strong>Answer Engine Optimisation (AEO)</strong> is the process of structuring business facts so AI engines like ChatGPT, Perplexity, and Google AI Overviews can discover, verify, and recommend your brand.
              </p>

              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed text-left">
                While SEO focuses on winning keyword rankings in standard search results, AEO formats your data into <strong>verified entity graphs</strong> and direct answer passages that AI models cite with confidence.
              </p>
            </div>
          </section>

          {/* SECTION 2: COMMERCIAL CONTEXT & SHIFTS IN SEARCH BEHAVIOUR */}
          <section className="space-y-12 border-t border-white/10 pt-12">
            {/* 2A: Why AEO Matters for Your Business */}
            <div className="max-w-5xl mx-auto space-y-4 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Commercial Impact</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
                  Why AEO Matters for Your Business
                </h2>
                <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed max-w-3xl">
                  People no longer just click links on Google. They ask AI assistants like ChatGPT, Perplexity, and Google AI Overviews for direct recommendations. If your web copy is vague, AI engines simply recommend your competitor instead.
                </p>
              </div>

              {/* 3 Pointed Benefit Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {/* Benefit 1 */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 shadow-md backdrop-blur-md">
                  <span className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-200 leading-snug">
                    Protecting Brand Visibility Against Zero-Click Searches
                  </span>
                </div>

                {/* Benefit 2 */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 shadow-md backdrop-blur-md">
                  <span className="p-1.5 rounded-lg bg-purple-950 text-purple-400 border border-purple-800/60 shrink-0">
                    <Target className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-200 leading-snug">
                    Capture Higher-Intent Buyers via Natural Language
                  </span>
                </div>

                {/* Benefit 3 */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 shadow-md backdrop-blur-md">
                  <span className="p-1.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60 shrink-0">
                    <Zap className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-200 leading-snug">
                    Capitalise on Query Fan-Out
                  </span>
                </div>
              </div>
            </div>

            {/* 2B: Traditional Search Results vs. Synthesised AI Answer Engines */}
            <div className="space-y-8 max-w-5xl mx-auto border-t border-white/5 pt-8">
              <div className="text-left space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Side-by-Side Retrieval Architecture</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
                  Traditional Search Results vs. Synthesised AI Answer Engines
                </h2>
              </div>

              {/* Side-by-Side Visual Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Traditional 10 Blue Links Search Result */}
                <div className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl space-y-4 flex flex-col justify-between shadow-lg text-left backdrop-blur-md">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                      <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-zinc-400" />
                        Traditional 10 Blue Links SERP
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                        Keyword Match
                      </span>
                    </div>

                    {/* Mock Search Bar */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                      <span className="truncate">&quot;best AEO &amp; local service specialists Perth&quot;</span>
                      <Search className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    </div>

                    {/* Mock SERP Result Cards */}
                    <div className="space-y-3 pt-1">
                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                        <div className="text-[10px] font-mono text-zinc-500">Sponsored Ad • www.generic-directory.example</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">Top 10 Marketing Companies Perth 2026</div>
                        <div className="text-[11px] text-slate-300 font-serif leading-snug line-clamp-2">
                          Find top listed agencies, read user reviews, and compare quotes for marketing services in WA...
                        </div>
                      </div>

                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                        <div className="text-[10px] font-mono text-zinc-500">https://aeobility.com.au › services › aeo</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">Answer Engine Optimisation (AEO) Services | AEObility</div>
                        <div className="text-[11px] text-slate-300 font-serif leading-snug line-clamp-2">
                          AEObility helps Australian businesses structure web data for conversational AI and search engines...
                        </div>
                      </div>

                      <div className="space-y-1 text-left p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 opacity-60">
                        <div className="text-[10px] font-mono text-zinc-500">www.competitor-seo-agency.example</div>
                        <div className="text-xs font-bold text-blue-400 hover:underline">SEO &amp; Digital Services Perth</div>
                        <div className="text-[11px] text-slate-300 font-serif leading-snug line-clamp-2">
                          Full service agency offering SEO, Google Ads, and social media management...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                    <span>Friction: High cognitive load</span>
                    <span className="text-red-400 font-bold">10 Links to Click</span>
                  </div>
                </div>

                {/* Right: Synthesised Gemini / ChatGPT Answer */}
                <div className="p-5 bg-slate-900/40 border border-cyan-500/40 rounded-2xl space-y-4 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left backdrop-blur-md">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        Synthesised Gemini / ChatGPT Answer
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        Verified JSON-LD Graph
                      </span>
                    </div>

                    {/* Mock AI Synthesised Response Panel */}
                    <div className="p-3.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 text-left space-y-3 shadow-inner">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/5 pb-2">
                        <span className="text-cyan-300 font-bold">Direct Conversational Synthesis</span>
                        <span className="text-zinc-400">Passage Confidence: 98.4%</span>
                      </div>

                      <p className="text-xs text-slate-200 font-serif leading-relaxed">
                        For Australian businesses seeking Answer Engine Optimisation (AEO) in Perth, <strong className="text-white font-semibold">AEObility</strong> provides technical schema infrastructure and 90-token atomic answer passage structuring.
                      </p>

                      <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 space-y-1">
                        <div className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center justify-between">
                          <span>Verified Entity Citation [1]</span>
                          <span className="text-cyan-400 font-bold">Direct Recommendation</span>
                        </div>
                        <p className="text-[11px] text-slate-200 font-serif leading-snug">
                          AEObility specialises in fixed-scope AEO Micro-Sprints, binding brand identity to ABN credentials and schema graphs across Google AI Overviews and ChatGPT Search.
                        </p>
                        <div className="pt-1 flex items-center gap-1 text-[10px] font-mono text-cyan-400">
                          <Globe className="w-3 h-3 text-cyan-400" />
                          <Link href="/services/aeo" className="hover:underline font-bold">https://aeobility.com.au/services/aeo</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-cyan-500/20 text-[11px] text-cyan-300 font-mono flex items-center justify-between">
                    <span>Outcome: Instant Verified Citation</span>
                    <span className="text-cyan-400 font-bold">1-Click Direct Answer</span>
                  </div>
                </div>
              </div>

              {/* Consolidated Summary Table: AEO vs. Traditional SEO: At a Glance */}
              <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 text-left shadow-xl backdrop-blur-md">
                <h3 className="text-lg font-bold text-white font-soehne-breit mb-4">AEO vs. Traditional SEO: At a Glance</h3>
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-cyan-400 font-mono">
                      <th className="py-3 px-4">Feature</th>
                      <th className="py-3 px-4">Traditional SEO</th>
                      <th className="py-3 px-4">Answer Engine Optimisation (AEO)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 font-serif text-slate-200">
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Target Destination</td>
                      <td className="py-3 px-4 text-slate-300">10 blue links search result pages</td>
                      <td className="py-3 px-4 text-cyan-300 font-medium">AI synthesised summaries &amp; direct answer blocks</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Primary Metric</td>
                      <td className="py-3 px-4 text-slate-300">URL ranking positions &amp; organic clicks</td>
                      <td className="py-3 px-4 text-cyan-300 font-medium">AI citation share, brand mentions &amp; recommendation frequency</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Content Structure</td>
                      <td className="py-3 px-4 text-slate-300">Long-form keyword dense blog posts</td>
                      <td className="py-3 px-4 text-cyan-300 font-medium">90-token atomic answer blocks &amp; direct passage headings</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-white">Data Format</td>
                      <td className="py-3 px-4 text-slate-300">Standard HTML tags &amp; basic meta tags</td>
                      <td className="py-3 px-4 text-cyan-300 font-medium">JSON-LD entity relationship graphs &amp; verified proof triples</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3: TECHNICAL MECHANICS (HOW IT WORKS - 3 GLASS CARDS + MACHINE INGESTION LIFECYCLE) */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="space-y-3 text-left max-w-5xl mx-auto">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Execution Mechanics &amp; Machine Ingestion</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
                How Answer Engine Optimisation Works: The Three Pillars
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed max-w-3xl">
                We refactor your website copy into three structured pillars engineered for artificial intelligence retrieval systems, dense vector spaces, and Retrieval-Augmented Generation (RAG) pipelines.
              </p>
            </div>

            {/* Integrated Three Pillars Grid (Layer-Cake Compatible) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Pillar 1 */}
              <div className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md transition-colors hover:border-slate-700/80 space-y-3 text-left">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Pillar 1</span>
                <h3 className="text-lg font-semibold text-white font-soehne-breit">Positional Bias (Lead Placement)</h3>
                <p className="text-sm leading-relaxed text-slate-300 font-serif">
                  Position core services, locations, and pricing at the immediate top of structural passages where neural attention weights peak during dense retrieval.
                </p>

                {/* Integrated Business Impact */}
                <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-300">
                  <strong className="font-semibold text-cyan-300">Business Impact:</strong> Ensures primary claims survive context truncation across Gemini and ChatGPT retrieval models.
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md transition-colors hover:border-slate-700/80 space-y-3 text-left">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Pillar 2</span>
                <h3 className="text-lg font-semibold text-white font-soehne-breit">Atomic Passages (Semantic Chunking)</h3>
                <p className="text-sm leading-relaxed text-slate-300 font-serif">
                  Engineer 80–120 token direct answer blocks under clear entity headings. This semantic chunking pattern aligns perfectly with vector embedding boundaries.
                </p>

                {/* Integrated Business Impact */}
                <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-300">
                  <strong className="font-semibold text-cyan-300">Business Impact:</strong> High vector similarity score allows AI models to extract pricing and service terms verbatim.
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-md transition-colors hover:border-slate-700/80 space-y-3 text-left">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Pillar 3</span>
                <h3 className="text-lg font-semibold text-white font-soehne-breit">Entity Mesh (JSON-LD Graph)</h3>
                <p className="text-sm leading-relaxed text-slate-300 font-serif">
                  Link business name, address, phone number, ABN, and licences into a consistent JSON-LD entity graph verified across external registries.
                </p>

                {/* Integrated Business Impact */}
                <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-300">
                  <strong className="font-semibold text-cyan-300">Business Impact:</strong> Stops conversational AI assistants from confusing your brand identity with competitors.
                </div>
              </div>
            </div>

            {/* Machine Ingestion Lifecycle Sub-Block */}
            <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-6 shadow-xl text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Machine Learning Ingestion Pipeline</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">How AI Engines Read, Index &amp; Cite Your Data</h3>
                <p className="text-xs sm:text-sm text-slate-200 font-serif leading-relaxed">
                  Generative models use dense vector embeddings and Retrieval-Augmented Generation (RAG) to answer user prompts in four distinct stages:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-cyan-400 font-mono text-xs font-bold uppercase">1. Ingestion &amp; Chunking</div>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    Crawlers slice web copy into 90-token atomic blocks, stripping HTML chrome to focus strictly on factual text.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-cyan-400 font-mono text-xs font-bold uppercase">2. Vector Embedding</div>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    Bi-encoder neural nets map passage semantics into high-dimensional vector space to calculate prompt cosine similarity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-cyan-400 font-mono text-xs font-bold uppercase">3. Entity Verification</div>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    JSON-LD schema graphs and ABN registry triples confirm brand identity and eliminate hallucination risks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="text-cyan-400 font-mono text-xs font-bold uppercase">4. Direct Citation</div>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    AI assistants synthesise verified passages into direct recommendations with clickable source citations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: ELEVATED INTERACTIVE DIAGNOSTIC CONTAINER (FEATURED TOOL CARD) */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            {/* Interactive Tool Card: Elevated Glass + Specular Top Highlight + Ambient Glow */}
            <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 border-t-white/20 bg-slate-900/60 p-6 sm:p-8 md:p-10 shadow-[0_0_35px_-5px_rgba(56,189,248,0.18)] backdrop-blur-xl isolate overflow-hidden text-left">
              {/* Subtle ambient glow centered behind container */}
              <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

              {/* Background Image Layer (Lighter Overlay Mask for Artwork Visibility) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
                <Image
                  src="/images/knowledge-hub/ai-engine-optimization-visibility-scanner-AEObility.webp"
                  alt="AI Engine Optimisation Visibility Scanner - AEObility"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-center opacity-30 transition-opacity duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/85 via-[#0A0F1C]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-transparent to-[#0A0F1C]/40" />
              </div>

              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Interactive Diagnostic</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl font-soehne-breit">
                AI Visibility Scan
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-200 md:text-base max-w-2xl font-serif">
                Test whether conversational search engines extract, verify, and cite your service entity. Enter your domain and core service topic below.
              </p>

              {/* Input Fieldset */}
              <form onSubmit={handleHeroSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-2xl">
                  <div>
                    <label htmlFor="hero-scan-url" className="block text-xs font-medium tracking-wide text-slate-300 uppercase font-mono">
                      Website Domain URL
                    </label>
                    <div className="relative mt-1.5">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        id="hero-scan-url"
                        type="text"
                        required
                        placeholder="example.com.au"
                        value={heroUrl}
                        onChange={(e) => setHeroUrl(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-700/80 bg-slate-950/70 text-sm text-slate-100 placeholder-slate-500 transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-scan-query" className="block text-xs font-medium tracking-wide text-slate-300 uppercase font-mono">
                      Core Service or Topic
                    </label>
                    <div className="relative mt-1.5">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        id="hero-scan-query"
                        type="text"
                        placeholder="e.g. Answer Engine Optimisation"
                        value={heroQuery}
                        onChange={(e) => setHeroQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-700/80 bg-slate-950/70 text-sm text-slate-100 placeholder-slate-500 transition-all focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none shadow-inner"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button (High Contrast Von Restorff Anchor) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Run Free 45-Second AI Scan →</span>
                  </button>
                </div>

                {/* Reassurance / Trust Micro-copy (Law of Proximity - Placed directly below CTA) */}
                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 font-mono pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> 45-second live telemetry
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> No credit card required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Evaluates schema &amp; RAG survival
                  </span>
                </div>
              </form>
            </div>

            {/* Diagnostic Scope & 3 Coverage Cards */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-cyan-500/30 text-left max-w-5xl mx-auto space-y-4 shadow-xl backdrop-blur-md">
              <p className="text-xs sm:text-sm text-slate-200 font-serif leading-relaxed">
                AEObility uses natural language processing (NLP) and Natural Language Web (NLWeb) analysis to evaluate your pages against real conversational search queries. In 45 seconds, you receive a direct on-screen diagnostic covering:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Entity and Schema Health</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-serif">
                    Checks whether machine crawlers can resolve your core business facts, accreditations, and service locations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Retrieval Survival</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-serif">
                    Evaluates how cleanly your key answers survive extraction by Retrieval-Augmented Generation (RAG) pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Target className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>AI Citation Share</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-serif">
                    Identifies whether generative models cite your brand or default to a competitor for your priority topics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: TECHNICAL SPECIFICATIONS & RELATED MODULES (ENTITY MESH) */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2 text-left max-w-5xl mx-auto">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Internal Links &amp; Site Structure</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Technical Specifications &amp; Related Modules</h2>
              <p className="text-sm text-slate-200 font-serif leading-relaxed max-w-3xl">
                Connect your understanding of Answer Engine Optimisation with our technical guides, machine definition triples, and commercial execution sprints:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-5xl mx-auto">
              <Link
                href="/services/aeo"
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 transition-all space-y-2 group text-left shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Commercial Hub</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Services &amp; Digital Infrastructure
                </h3>
                <p className="text-xs text-slate-300 font-serif">
                  Explore our core commercial service offerings, micro-sprint options, and fixed-scope delivery timelines.
                </p>
              </Link>

              <Link
                href="/services/aeo/definition"
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 transition-all space-y-2 group text-left shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Core Definition Model</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Definition &amp; Machine Triple Schema
                </h3>
                <p className="text-xs text-slate-300 font-serif">
                  Review the structured machine-readable triple model linking entity, relationship, and evidence.
                </p>
              </Link>

              <Link
                href="/knowledge-hub/aeo"
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 transition-all space-y-2 group text-left shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Technical Deep Dive</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  AEO Principles &amp; Machine Mechanics
                </h3>
                <p className="text-xs text-slate-300 font-serif">
                  Learn how RAG pipelines, token weight distributions, and positional bias rules shape LLM citation ranking.
                </p>
              </Link>

              <Link
                href="/solutions/aeo-sprint"
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 transition-all space-y-2 group text-left shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">Commercial Sprint</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">
                  Fixed-Scope AEO Micro-Sprints
                </h3>
                <p className="text-xs text-slate-300 font-serif">
                  Rapid 4 to 5 business day implementation sprints addressing structured data, atomic rewrites, and MCP setup.
                </p>
              </Link>
            </div>
          </section>

          {/* SECTION 6: STRUCTURED FAQ SECTION */}
          <section className="border-t border-white/10 pt-12 space-y-6 text-left max-w-5xl mx-auto">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-2 shadow-md backdrop-blur-md">
                  <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-serif leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: FINAL CONVERSION: STRATEGIC BLUEPRINT & MICRO-SPRINTS */}
          <section className="space-y-6 border-t border-white/10 pt-12 pb-6">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-cyan-500/40 shadow-2xl space-y-6 text-left max-w-5xl mx-auto">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Strategic Solution Handoff</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">Ready to Close Your AI Visibility Gaps?</h2>
                <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed">
                  Identified missing schema or retrieval gaps during your free scan? Our fixed-scope <strong>$995 AEObility Strategic Blueprint</strong> delivers a step-by-step technical roadmap, customised entity maps, and direct passage rewrites to get your business recommended across AI search engines and local maps.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)] whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <span>See How the $995 Blueprint Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions/aeo-sprint"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-bold text-sm transition-all whitespace-nowrap text-center"
                >
                  Explore Fixed-Scope Micro-Sprints
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
