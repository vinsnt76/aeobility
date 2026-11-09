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
  Code,
  Layers,
  Search,
  FileCheck,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Search Optimisation Sydney: AEO & AI SEO Services | AEObility",
  description: "AI search optimisation in Sydney for brands targeting AI Overviews and chat answers. AEO, AI SEO, and generative engine optimisation. Book a free consultation.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing/sydney",
  },
  openGraph: {
    title: "AI Search Optimisation Sydney: AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Sydney for brands targeting AI Overviews and chat answers. AEO, AI SEO, and generative engine optimisation. Book a free consultation.",
    url: "https://aeobility.com.au/services/ai-search-marketing/sydney",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-optimisation-sydney_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AI search optimisation framework dashboard for local service trades and SMBs in Sydney, New South Wales.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimisation Sydney: AEO & AI SEO Services | AEObility",
    description: "AI search optimisation in Sydney for brands targeting AI Overviews and chat answers. AEO, AI SEO, and GEO services.",
    images: ["https://aeobility.com.au/images/services/ai-search-optimisation-sydney_AEObility.webp"],
  },
  keywords: [
    "ai search marketing sydney",
    "ai search strategy sydney",
    "aeo sydney",
    "answer engine optimisation sydney",
    "ai seo specialist sydney",
    "geo marketing sydney"
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

export default function SydneyAISearchMarketingPage() {
  const rawFaqs = [
    {
      question: "Is AI search optimisation worth it in a competitive market like Sydney?",
      answer: "Absolutely. In a hyper-competitive landscape like Sydney, AI citations serve as a critical differentiator. Early movers who establish semantic authority gain disproportionate visibility while competitors rely on saturated traditional search channels."
    },
    {
      question: "How do we get recommended when buyers compare Sydney agencies in AI tools?",
      answer: "AI tools excel at aggregating comparison data. To get recommended, you must publish clear comparison content, robust case studies, and explicit positioning that states exactly who your services are for, and who they are not for."
    },
    {
      question: "What should we prioritise first for AI search in Sydney?",
      answer: "Begin with absolute entity clarity by harmonising your NAP (Name, Address, Phone) and deploying LocalBusiness schema. Next, refine your top service pages with answer-first copy, followed by detailed FAQs and structured comparison pages."
    },
    {
      question: "How does AI search fit with our existing SEO and paid media in NSW?",
      answer: "These channels are complementary, not mutually exclusive. Traditional SEO secures rankings, paid media captures immediate transactional demand, and AEO drives generative citations, ensuring you dominate the entire modern discovery funnel."
    },
    {
      question: "What results can Sydney businesses realistically expect from AI search optimisation?",
      answer: "Focus on qualitative improvements rather than raw traffic spikes. Expect steady citation growth, higher-intent traffic from users who have already validated your brand via AI, and shorter sales cycles for complex enterprise decisions."
    }
  ];

  const formattedFaqs = rawFaqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getLocalMetroSchemaGraph(METRO_CONFIGS.sydney, rawFaqs);

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
              <span>Sydney AI Search Marketing &amp; Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit text-white">
              AEObility Sydney: <span className="text-gradient-aeo">AI Search &amp; AEO Digital Consultancy</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Bespoke Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), and structured schema architecture for Sydney enterprises and Australian SMBs.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Sydney is Australia&apos;s most crowded, high-stakes commercial market. From Martin Place boardrooms to fast-moving agency hubs in North Sydney and Surry Hills, businesses face intense competition for client attention. In an environment this saturated, traditional keyword-dense SEO simply cannot keep up. Modern conversational engines such as ChatGPT, Google AI Overviews, Gemini, and Perplexity do not just scan pages for matching phrases; they read, pull apart, and reconstruct verified facts using retrieval-augmented generation (RAG).
                <br /><br />
                For Sydney brands, having clear, structured business data is the difference between being cited as the definitive answer or being bypassed for a competitor.
              </h2>

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
                src="/images/services/ai-search-optimisation-sydney_AEObility.webp"
                alt="Technical overview of the AEObility AI search optimisation framework designed for local service trades and SMBs in Sydney, New South Wales."
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
                    <span>Discuss Sydney Sprints</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for specific technical execution? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">Strategic Blueprint</Link>.
            </p>
          </section>

          {/* AEObility Bridge Section */}
          <section className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-base sm:text-lg text-zinc-300 font-serif leading-relaxed">
                AEObility bridges the gap between your brand and generative search. As your local entity visibility partner, we organise your core commercial information across search platforms, digital maps, and AI models so qualified buyers find you the moment they are ready to make a decision. We translate messy web presences into machine-readable structure, ensuring your business credentials stay accurate, verified, and recommended across everyday chat interfaces and navigation apps.
              </p>
            </div>
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
                  When structuring your Sydney operations for modern AI search engines, five primary entity signals define your market footprint:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you are</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">AEObility acts as your trusted first-party authority source for AI search optimisation across New South Wales.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">What you offer</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">Our core service is custom AI Search Optimisation (AEO/GEO), engineered to improve citations and commercial recommendations across ChatGPT, Google AI Overviews, Gemini, and Perplexity.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors md:col-span-2">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Where you operate</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">We anchor your primary service area in the City of Sydney, NSW, extending coverage across Greater Sydney and New South Wales to incorporate key business districts like the Sydney CBD, North Sydney, Parramatta, Bondi, and Chatswood.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">Who you serve</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed mb-3">We focus on three high-demand commercial groups:</p>
                    <ul className="space-y-2 text-sm text-zinc-400 font-serif list-disc pl-4 marker:text-cyan-500">
                      <li>Enterprise and mid-market brands across NSW looking to protect market share inside AI-generated summaries</li>
                      <li>Professional services firms (agencies, legal practices, finance, and accounting) competing in crowded Sydney markets</li>
                      <li>National brands that rely on Sydney as their primary decision-maker and procurement hub</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <h3 className="text-sm font-bold text-white mb-2 font-mono text-cyan-400">How you are represented to machines</h3>
                    <p className="text-sm text-zinc-400 font-serif leading-relaxed">In structured data schema and AI knowledge graphs, your regional presence is mapped as a LocalBusiness with a ProfessionalService subtype, confirming to search engines and AI assistants that your firm is a verified, location-grounded service provider.</p>
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
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Enterprise and mid-market brands</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Helping large NSW organisations maintain authoritative voice share when corporate procurement teams and institutional buyers query AI engines for enterprise-grade solutions, compliance, and vendor credibility.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 shrink-0 mt-0.5">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">Saturated professional services</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Structuring clear partner profiles, case proof, and service specialisations so top-tier accounting firms, commercial legal teams, and specialist consultancies stand out above the noise in synthesised B2B recommendations.</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-black/40 border border-white/5 items-start">
                    <div className="p-3 bg-cyan-950/40 rounded-lg text-cyan-400 shrink-0 mt-0.5">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-soehne-breit mb-1">National brands in Sydney hubs</h3>
                      <p className="text-sm text-zinc-400 font-serif leading-relaxed">Unifying multi-branch information and executive leadership data under a cohesive corporate entity, making sure conversational engines accurately attribute services across all operational arms to the central Sydney headquarters.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-base text-zinc-300 font-sans leading-relaxed">
                    Legacy digital marketing relies on churning out high-volume blog posts and repeating the same keywords. AEObility replaces keyword-heavy habits with structured entity data that makes your firm&apos;s real capability immediately clear to answer engines. When your core business facts are neatly segmented and easy to parse, AI models can verify your authority and point prospects straight to your team. We deliver these upgrades in focused, fixed-scope implementation sprints with zero contract lock-ins.
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
                <Link href="/diagnostic?auto=true&intent=ai+search+optimisation+sydney" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
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
            badgeTitle="Instant Sydney AI Readiness Scan"
            heading="Run a Free Sydney AI Search Readiness Scan"
            subheading="Enter your website URL to check structured data, entity clarity, and AI search readiness signals for Sydney searchers."
            formId="ai_diagnostic_scan_form_sydney"
            leadType="ai_readiness_scan"
          />

          {/* Contact Form Section */}
          <AeoContactSection
            id="ai-contact-form"
            badgeTitle="Sydney AI Search Sprint"
            heading="Discuss Sydney AI Search Strategy"
            subheading="Tell us about your business goals and local AI search priorities in Sydney. We will confirm scope and pricing before you commit."
            formId="ai_search_contact_form_sydney"
            leadType="ai_marketing_enquiry"
            buttonText="Discuss Sydney AI Search Strategy"
            receivedHeading="Sydney AI Search Enquiry Received"
          />

          {/* FAQ Accordion Section */}
          <section id="faq-ai" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility AI search marketing services in Sydney.</p>
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
              <Link href="/services/ai-search-marketing/melbourne" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Melbourne AI Search
              </Link>
              <Link href="/services/ai-search-marketing/brisbane" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Brisbane AI Search
              </Link>
              <Link href="/services/ai-search-marketing/adelaide" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-zinc-300 hover:text-white transition">
                Adelaide AI Search
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
