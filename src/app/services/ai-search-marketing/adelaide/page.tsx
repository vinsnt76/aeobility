import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getLocalMetroSchemaGraph, METRO_CONFIGS } from '@/lib/schema/localMetroAeo';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import {
  ArrowRight,
  Cpu,
  CheckCircle2,
  Calendar,
  Building2,
  Activity,
  Wrench,
  Search,
  FileCheck,
  Code,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Search Optimisation Adelaide: AEO & AI SEO Services | AEObility",
  description: "AI search optimisation in Adelaide for brands targeting AI Overviews and chat answers. AEO, AI SEO, and generative engine optimisation. Book a free consultation.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing/adelaide",
  },
  openGraph: {
    title: "AI Search Optimisation Adelaide: AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Adelaide for brands targeting AI Overviews and chat answers. AEO, AI SEO, and generative engine optimisation. Book a free consultation.",
    url: "https://aeobility.com.au/services/ai-search-marketing/adelaide",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-optimisation-adelaide_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AI search optimisation strategy interface illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification in Adelaide, South Australia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimisation Adelaide: AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Adelaide for brands targeting AI Overviews and chat answers. AEO, AI SEO, and GEO services.",
    images: ["https://aeobility.com.au/images/services/ai-search-optimisation-adelaide_AEObility.webp"],
  },
  keywords: [
    "ai search marketing adelaide",
    "ai search strategy adelaide",
    "aeo adelaide",
    "answer engine optimisation adelaide",
    "ai seo specialist adelaide",
    "geo marketing adelaide"
  ]
};

export const AI_MARKETING_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "Strategic Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function AdelaideAISearchMarketingPage() {
  const rawFaqs = [
    {
      question: "Is AI search optimisation relevant for small Adelaide businesses?",
      answer: "Yes. AI recommendations heavily favour clear, local, and well-structured businesses. Because many Adelaide competitors have not optimised for generative engines, early adoption offers a significant advantage for local SMBs."
    },
    {
      question: "What is the simplest way to get started with AI search in Adelaide?",
      answer: "Start with the essentials: ensure your robots.txt allows AI bot crawling, deploy accurate LocalBusiness schema, complete your Google Business Profile (GBP), and publish 8–15 real customer FAQs using FAQPage schema."
    },
    {
      question: "How does AI search help us win more local SA leads?",
      answer: "Local buyers increasingly use AI to find specific solutions, like the best commercial plumber in Adelaide or scenario-based queries. By structuring your answers to match these intents, AI tools will serve your brand directly to high-intent leads."
    },
    {
      question: "Do we need a big budget to benefit from AI search optimisation?",
      answer: "No. Clarity and consistency outpace massive ad budgets in AI search. You can achieve substantial wins simply by fixing technical basics, structuring your business data, and providing direct answers to real customer questions."
    },
    {
      question: "How quickly can an Adelaide business expect to see AI search results?",
      answer: "Foundational fixes, such as GBP alignment, adding FAQs, and deploying schema, can yield quick visibility wins as AI crawlers index the changes. Broader entity authority builds progressively over subsequent training cycles."
    }
  ];

  const formattedFaqs = rawFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getLocalMetroSchemaGraph(METRO_CONFIGS.adelaide, rawFaqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Adelaide AI Search Marketing &amp; Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit text-white">
              AEObility Adelaide: <span className="text-gradient-aeo">AI Search &amp; AEO Digital Consultancy</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Bespoke Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and structured schema architecture for Adelaide enterprises and South Australian SMBs.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Adelaide is one of the most winnable AI search markets in Australia. Compared with Sydney and Melbourne, there is less noise, fewer agencies doing advanced AEO and GEO work, and a lot of businesses still relying on basic SEO or word-of-mouth. That is a challenge for some, but a genuine opportunity for Adelaide businesses that move early.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed mt-4">
                Conversational search engines like ChatGPT, Google AI Overviews, and Perplexity do not just match keywords. They read, pull apart, and piece together actual facts using retrieval-augmented generation (RAG). For local clinics, tradies, and professional services across Adelaide and greater South Australia, that means businesses with clear, structured data are the ones AI systems understand and recommend with confidence.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed mt-4">
                AEObility builds the bridge between your brand and generative search. As your local visibility partner, we organise your business details across search engines, AI platforms, and digital maps so the right customers find you at the exact moment they need your help. We structure your content so machines can easily read and verify your real-world details, making sure your business stays visible and accurate across everyday chat interfaces and map apps.
              </p>

              <div className="mt-6 p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                <p className="text-sm text-cyan-50 font-serif leading-relaxed">
                  See how machine-readable identity architecture reduces context dilution in our <Link href="/knowledge-hub/guides" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300">Information Architecture &amp; Lattice Overview</Link>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>AEO Foundation $1,990 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/ai-search-optimisation-adelaide_AEObility.webp"
                alt="AEObility AI search optimisation strategy interface illustrating vector retrieval accuracy, prompt citation tracking, and structured entity verification in Adelaide, South Australia."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-4 shadow-2xl">
                <div className="text-left space-y-1">
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive AI search foundation.</span>
                  <span className="text-xs sm:text-[14px] text-zinc-200 font-medium block">
                    Typical delivery: <strong className="text-white font-semibold">4–5 business days</strong> from confirmed scope and access.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="#ai-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run Free Scan</span>
                    <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
                  </a>
                  <a
                    href="#ai-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-zinc-100 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Discuss Adelaide Sprints</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for specific technical execution? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">Strategic Blueprint</Link>.
            </p>
          </section>

          {/* Who We Represent & Industry Focus */}
          <section className="border-t border-white/10 pt-16 space-y-12 scroll-mt-24">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Who we represent block */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  Who we represent and how AI sees you
                </h2>
                <p className="text-base text-zinc-300 font-sans leading-relaxed">
                  When we set up your Adelaide presence for AI search, we are deliberate about five things:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you are</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">AEObility acts as your trusted, first-party authority for AI search optimisation across South Australia.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">What you offer</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">Our core service is custom AI search optimisation (AEO/GEO) that improves how often you are cited in tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors md:col-span-2">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Where you operate</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">We centre your service area on the City of Adelaide, SA, then extend it across South Australia to cover key suburbs and regions like Adelaide CBD, Norwood, Glenelg, and Prospect.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you serve</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed mb-3">We focus on three main groups:</p>
                    <ul className="space-y-2 text-sm text-zinc-400 font-serif list-disc pl-4 marker:text-cyan-500">
                      <li>South Australian SMBs and local service businesses that want more high-intent enquiries</li>
                      <li>Professional services (accountants, lawyers, clinics, and consultancies) targeting SA clients</li>
                      <li>Businesses looking for a low-competition, high-opportunity AI search market where early movers can dominate</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">How you are represented</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">In structured data and AI knowledge graphs, your Adelaide entity is modelled as a LocalBusiness (subtype: ProfessionalService) so search engines and AI assistants can clearly identify you as a verified, location-based service provider.</p>
                  </div>
                </div>
              </div>

              {/* Industry Focus block */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  Industry focus
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-cyan-950/40 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Local SMBs and service businesses</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Helping Adelaide operators show up when locals ask AI for recommendations, whether that is &quot;best accountant in Adelaide&quot;, &quot;reliable plumber near Norwood&quot;, or &quot;who can help with X in Glenelg&quot;.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 shrink-0 mt-0.5">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Professional services and clinics</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Setting up clear practitioner profiles, verified local addresses, and precise proximity data so patients and clients find you when they search for care or advice in their local Adelaide suburb.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-cyan-950/40 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Multi-location and growth-focused brands</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Fixing inconsistent listings and unclear service boundaries so businesses with multiple SA locations stay trusted and visible in map packs, voice search, and AI-generated shortlists.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-base text-zinc-300 font-sans leading-relaxed">
                    Traditional digital marketing relies on churning out extra web pages and repeating keywords. AEObility replaces keyword-dense tactics with structured facts that make your services crystal clear to modern answer engines. When your core business details are neatly organised into single-topic segments, AI models can easily verify your brand and point people straight to you. We roll out these technical upgrades in fast, fixed-scope sprints, with zero lock-in contracts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Choose Your Starting Point */}
          <AeoStartingPointGrid
            id="engagement-paths"
            contactAnchor="#ai-contact-form"
            diagnosticAnchor="#ai-diagnostic-form"
          />

          {/* Clean 3-Tier Comparison Matrix Table */}
          <div id="ai-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
            <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-3.5 sm:p-4">Service / Tier</th>
                  <th className="p-3.5 sm:p-4">Target Scope</th>
                  <th className="p-3.5 sm:p-4">Best For</th>
                  <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Micro-Sprint</td>
                  <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                  <td className="p-3.5 sm:p-4">Quick fix for one technical issue</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Strategic Blueprint</td>
                  <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                  <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Foundation</td>
                  <td className="p-3.5 sm:p-4">Connected Multi-Page &amp; Entity Fixes</td>
                  <td className="p-3.5 sm:p-4">Connected improvements across core services</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$1,990 AUD</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Inclusions Box */}
          <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>Every AEObility Engagement includes:</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 font-serif">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>One agreed business priority, specified schema deployment, or page rewrite work.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Validation checks, summary of completed changes, and complete handover notes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Typical delivery: 4–5 business days for Micro-Sprints. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.</span>
              </li>
            </ul>
          </div>

          {/* Deliverables Ownership Statement */}
          <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
            <div className="flex items-start gap-3">
              <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">You own the agreed deliverables</strong>
                <span>Use completed code and handover notes with your internal developer, or ask AEObility to implement the agreed changes.</span>
              </div>
            </div>
          </div>

          {/* Check your AI search footprint CTA */}
          <section className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md text-center space-y-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Check your AI search footprint</h3>
              <p className="text-sm sm:text-base text-zinc-300 font-serif max-w-2xl mx-auto leading-relaxed">
                Are your local listings getting lost in the algorithms? Run a live scan through our diagnostic portal to see how easily search engines can read your site and spot the gaps holding back your visibility. In minutes, you will see which AI platforms can (and cannot) find you, alongside a short list of fixes to prioritise.
              </p>
              <div className="pt-2">
                <Link href="/diagnostic?auto=true&intent=ai+search+optimisation+adelaide" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <Search className="w-4 h-4 text-black" />
                  <span>Run a live scan</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Operational 3-Step Process Flow */}
          <section id="ai-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How AI search optimisation works</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial readiness scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Readiness audit</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our strategy team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-purple-500/40 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* Diagnostic Section */}
          <AeoDiagnosticSection
            id="ai-diagnostic-form"
            badgeTitle="Instant Adelaide AI Readiness Scan"
            heading="Run a Free Adelaide AI Search Readiness Scan"
            subheading="Enter your website URL to check structured data, entity clarity, and AI search readiness signals for Adelaide searchers."
            formId="ai_diagnostic_scan_form_adelaide"
            leadType="ai_readiness_scan"
          />

          {/* Contact Form Section */}
          <AeoContactSection
            id="ai-contact-form"
            badgeTitle="Adelaide AI Search Sprint"
            heading="Discuss Adelaide AI Search Strategy"
            subheading="Tell us about your business goals and local AI search priorities in Adelaide. We will confirm scope and pricing before you commit."
            formId="ai_search_contact_form_adelaide"
            leadType="ai_marketing_enquiry"
            buttonText="Discuss Adelaide AI Search Strategy"
            receivedHeading="Adelaide AI Search Enquiry Received"
          />

          {/* FAQ Accordion Section */}
          <section id="faq-ai" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AI search marketing services in Adelaide.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

          {/* Regional Corridors Navigation */}
          <section className="border-t border-white/10 pt-16 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Australian Regional Corridors</span>
              <h3 className="text-xl font-bold text-white font-soehne-breit">AI search marketing across Australia</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/ai-search-marketing" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                National Overview
              </Link>
              <Link href="/services/ai-search-marketing/perth" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Perth AI Search
              </Link>
              <Link href="/services/ai-search-marketing/sydney" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Sydney AI Search
              </Link>
              <Link href="/services/ai-search-marketing/melbourne" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Melbourne AI Search
              </Link>
              <Link href="/services/ai-search-marketing/brisbane" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Brisbane AI Search
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
