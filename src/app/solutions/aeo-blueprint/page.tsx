'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getAeoBlueprintSchemaGraph } from '@/lib/schema/aeoBlueprint';
import FieldNoteCase from '@/components/blueprint/FieldNoteCase';
import BlueprintOrderForm from '@/components/blueprint/BlueprintOrderForm';
import { 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  BarChart3, 
  Map, 
  FileText, 
  ChevronDown, 
  HelpCircle, 
  Code
} from 'lucide-react';

export const BLUEPRINT_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "local business profiles",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions",
    anchorText: "View current service pricing and scope",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    anchorText: "blueprint execution timeline",
    entityRelation: "http://schema.org/subjectOf"
  }
];

export default function AEOBlueprintPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in the Strategic Blueprint?",
      answer: "The Blueprint includes a website visibility assessment, structured-data review, visibility scorecard, prioritised 90-day action roadmap, and an audit of key service and content pages. You receive practical recommendations for technical gap analysis and entity optimisation."
    },
    {
      question: "How long does the Blueprint take to deliver?",
      answer: "Most Blueprints are completed within 5 business days once we have confirmed the required information and access. Larger or multi-location businesses may require a custom scope, which we will confirm before work begins."
    },
    {
      question: "Can I implement the Blueprint myself or give it to my developer?",
      answer: "Yes. Your Blueprint is designed to be actionable whether you implement the recommendations internally, with a developer or agency partner, or ask AEObility to execute implementation. It includes clear priorities and technical handover notes."
    },
    {
      question: "Does the Blueprint include implementation work?",
      answer: "No. The Blueprint is a standalone diagnostic audit and strategic roadmap. Technical implementation, structured-data deployment, content rewrites, citation updates, and ongoing support are scoped separately as Micro-Sprints or AEO Foundation."
    },
    {
      question: "How does the 100% fee credit work?",
      answer: "If you book AEO Foundation within 60 days of receiving your Blueprint, we apply the full $995 Blueprint fee to the Foundation work. The credit applies to AEO Foundation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
    },
    {
      question: "Is the Blueprint suitable for agencies or multi-location businesses?",
      answer: "Yes. We can scope the Blueprint for agency partners, internal marketing teams, and multi-location businesses. Contact us before booking so we can confirm the scope and deliverables."
    },
    {
      question: "How much does AEO cost in Australia, and how does pricing vary for single-site vs. multi-entity deployments?",
      answer: "Fixed-scope AEO in Australia starts with our free AI Visibility Score and the $995 AUD ex. GST Strategic Blueprint (100% credited toward eligible implementation within 60 days). Single-site SMBs qualify for fixed-rate Micro-Sprints from $495 AUD ex. GST or AEO Foundation ($1,990 AUD ex. GST across up to 10 core commercial pages). Multi-entity organisations, franchise networks, and large e-commerce catalogues are scoped by application following your Blueprint audit."
    },
    {
      question: "How do I run an AEO pilot with a 90-day plan and clear success criteria?",
      answer: "The $995 AUD Strategic Blueprint is engineered specifically as the entry point for a 90-day AEO pilot. Days 1 to 5 establish your baseline visibility scorecard and lock in a prioritised 90-day execution roadmap. In Weeks 2 to 6, you can apply your 100% $995 fee credit toward AEO Foundation or targeted Micro-Sprints to deploy connected JSON-LD schema and self-contained answer passages. Weeks 7 to 12 measure pilot performance against clear success criteria: zero-error schema validation, verified AI crawler access, direct passage extraction on target buyer queries, and brand citation growth across ChatGPT Search, Perplexity, and Google AI Overviews."
    }
  ];

  const deliverables = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Website & structured-data review",
      scope: "Full technical audit of site schema, entity graph nodes, and machine-readable data structures.",
      whatWeFix: [
        "Orphaned Knowledge Graph nodes and disconnected JSON-LD types",
        "Missing licensing, regulatory, and corporate entity credentials",
        "Conflicting @id canonical URI references across search engines"
      ],
      artifact: "Raw, validated JSON-LD schema snippet ready for immediate deployment"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-purple-400" />,
      title: "AI & local visibility scorecard",
      scope: "Benchmark of brand retrieval across ChatGPT Search, Perplexity, Gemini, and Google AI Overviews.",
      whatWeFix: [
        "Blind spots where competitors or generic directories get cited over your brand",
        "Service-area radius misattributions and missing geographic coordinates",
        "Weak entity confidence scores across third-party authority registries"
      ],
      artifact: "Comprehensive PDF Entity & Visibility Scorecard with benchmark metrics"
    },
    {
      icon: <Map className="w-5 h-5 text-cyan-400" />,
      title: "90-day execution roadmap",
      scope: "Prioritised sprint schedule mapping high-impact fixes by effort, urgency, and citation impact.",
      whatWeFix: [
        "Execution bottlenecks preventing internal developers from implementing fixes quickly",
        "Sequencing gaps between technical schema, content chunking, and local citations",
        "Lack of measurable 30-, 60-, and 90-day milestone verification criteria"
      ],
      artifact: "Prioritised 90-Day Sprint Matrix with step-by-step technical tickets",
      proofSnippet: "Evidence in Action: See how schema injection restored a Balcatta contractor's citations in 5 days."
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      title: "Content & service-information audit",
      scope: "Passage-level analysis of core service descriptions against high-intent customer search queries.",
      whatWeFix: [
        "Vague service descriptions that AI models cannot extract as direct answers",
        "Missing 150-character self-contained answer blocks under H2/H3 headers",
        "Incomplete commercial pricing, SLA, and deliverable specifications"
      ],
      artifact: "Passage Extraction & Service Clarity Audit with copy rewrite blueprints"
    }
  ];

  const jsonLdGraph = getAeoBlueprintSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block with Web Banner & Glassmorphic Executive Summary Overlay */}
          <section id="hero" className="relative pt-6 pb-4 max-w-4xl mx-auto space-y-6 scroll-mt-24 text-center">
            {/* Eyebrow */}
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              STRATEGIC DIAGNOSTIC AUDIT (BPSTRAT)
            </p>

            {/* H1 Storyline */}
            <h1 id="blueprint-hero" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-soehne-breit">
              <span className="block text-slate-400 text-lg sm:text-xl font-mono uppercase tracking-wider mb-2 font-normal">
                90-Day AI Roadmap
              </span>
              Make search engines cite your brand
            </h1>

            {/* Banner Container with Image Backdrop & Overlaid Direct Answer Block */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.2)] my-8">
              {/* Background 1200x800 WebP Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp"
                  alt="AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline."
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-center opacity-25"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-zinc-950/75 to-black/90" />
              </div>

              {/* Glassmorphic Executive Summary Overlay Card */}
              <aside 
                className="relative z-10 p-6 sm:p-8 md:p-10 backdrop-blur-md bg-slate-900/60 border border-cyan-500/20 border-t-2 border-t-cyan-400/50 text-left space-y-6"
                aria-label="Executive Summary"
                data-agent-purpose="direct-answer"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Executive Summary &amp; Direct Answer</span>
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-200 font-normal font-sans">
                    The <strong className="text-white font-semibold">Strategic Blueprint</strong> is a comprehensive 90-day technical audit and roadmap designed to clarify how ChatGPT, Gemini, Perplexity, and Google AI Overviews discover and parse your brand. Delivered in 5 business days for a fixed fee of $995 AUD ex. GST, 100% of your fee is credited toward implementation sprints.
                  </p>
                </div>

                {/* Von Restorff Isolated SLA & Guarantee Stat Blocks with Oversized Numerals */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-cyan-300 block tracking-tight">5 Days</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block">Delivery Turnaround</span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">$995</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block">Fixed Investment <span className="text-zinc-500 font-sans text-[10px]">(Zero Retainers)</span></span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block tracking-tight">100%</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block">Fee Credited Toward Sprints</span>
                  </div>
                </div>
              </aside>
            </div>

            {/* Refined Balanced Decision Architecture */}
            <div className="space-y-3 pt-2 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a 
                  href="#order-blueprint" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.35)] cursor-pointer"
                  data-testid="btn-order-blueprint"
                  data-agent-action="order-blueprint"
                >
                  <Calendar className="w-4 h-4 text-black shrink-0" />
                  <span>Order $995 Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-black shrink-0" />
                </a>
                <Link 
                  href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer"
                >
                  <span>View Sample 90-Day Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                </Link>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Zero retainers. 5-day delivery SLA. 100% credited to sprints.
              </p>
              <div className="pt-1">
                <Link 
                  href="/diagnostic" 
                  className="text-xs text-cyan-400/80 hover:text-cyan-300 underline underline-offset-4 font-medium transition"
                >
                  Not ready for a full audit? Run a free 60-second visibility scan &rarr;
                </Link>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif pt-2">
              Know what needs fixing? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">local business profiles</Link>.
            </p>
          </section>

          {/* 2. Section: Why open-ended contracts fail AI search */}
          <section id="retainer-problem" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                THE AGENCY RETAINER TRAP VS. ONE-TIME DIAGNOSTIC
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Why open-ended contracts fail AI search
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Monthly retainers made sense when tracking ranking fluctuations across 10 blue links on desktop search. Agencies billed recurring monthly hours to build links and monitor keyword ranks. But generative answer engines do not browse links or count page clicks. They synthesise direct answers from verified entity facts, registered credentials, and structured knowledge graphs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs font-serif">
              <div className="p-6 bg-zinc-950/40 border border-white/5 rounded-2xl space-y-3 opacity-70 hover:opacity-100 transition duration-300">
                <span className="text-slate-400 font-mono font-bold text-xs uppercase tracking-wider block">The Positional Ranking Model</span>
                <ul className="space-y-2.5 text-zinc-400 list-disc list-inside">
                  <li>Open-ended monthly retainers ($2,000 to $5,000+ each month) built for tracking 10 blue links.</li>
                  <li>Success measured by ranking positions and impression metrics that often fail to trigger citations.</li>
                  <li>Content written for keyword density rather than structured passage extraction.</li>
                  <li>Extended execution cycles tied to recurring monthly agency hours.</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-zinc-950 border border-cyan-400/60 shadow-[0_0_30px_rgba(0,229,255,0.15)] ring-1 ring-cyan-400/30 rounded-2xl space-y-3">
                <span className="text-cyan-300 font-mono font-bold text-xs uppercase tracking-wider block">The Generative Synthesis Model</span>
                <ul className="space-y-2.5 text-zinc-200 list-disc list-inside">
                  <li>Transparent one-time fixed investment ($995 AUD ex. GST) with zero ongoing contract lock-in.</li>
                  <li>Guaranteed 5-business-day turnaround with a concrete 90-day execution roadmap.</li>
                  <li>Deep diagnostic of schema markup, entity clarity, and AI engine retrieval gaps.</li>
                  <li>100% of your audit fee credited back toward eligible implementation sprints.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Section: The 4 Core Audit Deliverables */}
          <section id="bpstrat-deliverables" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                CONCRETE AUDIT DELIVERABLES
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Find your exact entity and retrieval gaps
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">
                Every Blueprint provides four core audit deliverables to guide your next 90 days. Read our <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-cyan-400 hover:underline font-semibold">blueprint execution timeline</Link> to see how client findings turn into live citations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold text-white font-soehne-breit">{item.title}</h3>
                    </div>

                    <div className="space-y-1.5 text-xs font-serif">
                      <span className="text-slate-400 font-mono font-semibold text-[11px] uppercase tracking-wider block">Scope</span>
                      <p className="text-zinc-300 leading-relaxed">{item.scope}</p>
                    </div>

                    <div className="space-y-1.5 text-xs font-serif">
                      <span className="text-slate-400 font-mono font-semibold text-[11px] uppercase tracking-wider block">What We Fix</span>
                      <ul className="space-y-1 text-zinc-300 list-disc list-inside">
                        {item.whatWeFix.map((fix, fIdx) => (
                          <li key={fIdx}>{fix}</li>
                        ))}
                      </ul>
                    </div>

                    {item.proofSnippet && (
                      <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono leading-relaxed">
                        {item.proofSnippet}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs font-mono">
                    <span className="text-cyan-400 font-bold shrink-0">Deliverable:</span>
                    <span className="text-zinc-300 font-sans">{item.artifact}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Deliverables Ownership Statement */}
            <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-300 font-serif leading-relaxed">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-0.5">You own the agreed audit deliverables</strong>
                  <span>Use your completed 90-day roadmap with your internal developer or agency partner, or ask AEObility to implement the agreed changes.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Local WA Commercial Grounding (Balcatta / Osborne Park Case) */}
          <FieldNoteCase />

          {/* 5. Section: The 100% Risk-Reversal Credit Policy & Process */}
          <section id="blueprint-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                100% AUDIT-FEE CREDIT POLICY
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Execute in-house or credit the full fee
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">
                A transparent 3-step delivery workflow engineered to de-risk your investment completely.
              </p>
            </div>

            {/* Prominently Elevated Blueprint Credit Callout Box */}
            <div id="blueprint-credit-terms" className="p-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl text-xs text-zinc-300 font-serif leading-relaxed space-y-2 shadow-lg scroll-mt-24">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>100% Risk-Reversal Implementation Credit Policy</span>
              </div>
              <p>
                100% of your $995 Blueprint fee is credited toward eligible implementation sprints booked within 60 days of handover. The credit applies to agreed implementation work and cannot be exchanged for cash. View <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">current service pricing and scope</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs mb-1 shadow-[0_0_15px_rgba(6,182,212,0.2)]">Day 1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">URL Intake &amp; Scope</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Submit your website URL. We confirm your business objectives and entity scope within 4 business hours.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-purple-500/40 text-purple-300 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="inline-flex px-3 py-1 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-xs mb-1 shadow-[0_0_15px_rgba(168,85,247,0.2)]">Days 2-4</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Deep Entity Diagnostics</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">We audit schema markup, validate AI engine retrieval gaps, and identify missing knowledge graph links.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-cyan-500/40 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs mb-1 shadow-[0_0_15px_rgba(6,182,212,0.2)]">Day 5</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Walkthrough &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Receive your 90-day roadmap in a 45-minute executive walkthrough. 100% of your $995 fee is credited to sprints.</p>
              </div>
            </div>
          </section>

          {/* 6. Section: Comparative Matrix & Exit-Ramp Selector */}
          <section id="decision-strip" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>SERVICE FIT &amp; COMPARISON</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Which option fits your current priority?</h2>
              <p className="text-xs text-white/60 font-serif">Compare our standalone diagnostic audit against targeted micro-sprints and full foundations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif">
              <div className="p-4 bg-cyan-950/20 border border-cyan-500/50 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Unsure what limits search visibility?</span>
                <span className="text-zinc-300 block">Start with the standalone Strategic Blueprint ($995 ex. GST).</span>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
                <span className="text-purple-300 font-bold block font-mono">Know the single priority issue?</span>
                <span className="text-zinc-300 block">
                  Choose a <Link href="/solutions/aeo-sprint" className="text-purple-400 hover:underline font-medium">Micro-Sprint from $495 ex. GST</Link>.
                </span>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl space-y-1">
                <span className="text-cyan-300 font-bold block font-mono">Need connected implementation?</span>
                <span className="text-zinc-300 block">
                  Discuss <Link href="/solutions" className="text-cyan-400 hover:underline font-medium">AEO Foundation ($1,990 ex. GST)</Link>.
                </span>
              </div>
            </div>

            {/* Clean 3-Tier Service Comparison Matrix Table */}
            <div id="blueprint-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4 w-1/4">Specification</th>
                    <th className="p-3.5 sm:p-4 w-1/3 bg-cyan-950/40 border-x border-cyan-400/40 text-cyan-300 font-bold">
                      Strategic Blueprint
                      <span className="block text-[10px] font-mono font-normal text-cyan-400/80 mt-0.5">Primary Diagnostic Foundation</span>
                    </th>
                    <th className="p-3.5 sm:p-4 w-1/4">Micro-Sprint Tier</th>
                    <th className="p-3.5 sm:p-4 w-1/4">AEO Foundation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-white text-[11px] uppercase tracking-wider">Scope</td>
                    <td className="p-3.5 sm:p-4 bg-cyan-950/20 border-x border-cyan-400/30 text-white font-sans font-medium">
                      Full site entity audit, knowledge graph gap analysis, and 90-day prioritised action plan
                    </td>
                    <td className="p-3.5 sm:p-4">1 defined priority page, schema injection, or local entity profile fix</td>
                    <td className="p-3.5 sm:p-4">Multi-page entity graph deployment and content passage structure across up to 10 pages</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-white text-[11px] uppercase tracking-wider">Turnaround</td>
                    <td className="p-3.5 sm:p-4 bg-cyan-950/20 border-x border-cyan-400/30 font-mono font-bold text-cyan-300">
                      5 Business Days
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono">3 to 5 Business Days</td>
                    <td className="p-3.5 sm:p-4 font-mono">2 to 3 Weeks</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-white text-[11px] uppercase tracking-wider">Deliverable</td>
                    <td className="p-3.5 sm:p-4 bg-cyan-950/20 border-x border-cyan-400/30 text-zinc-200">
                      Actionable 90-day sprint matrix, validated JSON-LD schema snippet, and entity scorecard
                    </td>
                    <td className="p-3.5 sm:p-4">Deployed, validated JSON-LD schema snippet or structured copy rewrite</td>
                    <td className="p-3.5 sm:p-4">Full production deployment, connected tri-graph schema, and verified citation report</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-white text-[11px] uppercase tracking-wider">Credit-Back Eligibility</td>
                    <td className="p-3.5 sm:p-4 bg-cyan-950/20 border-x border-cyan-400/30 text-cyan-300 font-sans font-medium">
                      100% of $995 credited toward eligible follow-on implementation sprints within 60 days
                    </td>
                    <td className="p-3.5 sm:p-4 text-zinc-400">Standalone pricing per sprint; eligible for Blueprint credit application</td>
                    <td className="p-3.5 sm:p-4 text-zinc-200">Accepts full $995 Blueprint fee credit toward project total</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-white text-[11px] uppercase tracking-wider">Investment (ex. GST)</td>
                    <td className="p-3.5 sm:p-4 bg-cyan-950/20 border-x border-cyan-400/30 font-mono font-extrabold text-cyan-300 text-sm">
                      $995 AUD
                    </td>
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-zinc-200">From $495 AUD</td>
                    <td className="p-3.5 sm:p-4 font-mono font-bold text-zinc-200">$1,990 AUD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Streamlined 3-Field Order Intake Form */}
          <div id="blueprint-contact-form" className="scroll-mt-24">
            <BlueprintOrderForm />
          </div>

          {/* 6. FAQ Accordion Section (All Answers Rendered in DOM) */}
          <section id="faq-blueprint" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">
                Everything you need to know about the Strategic Blueprint audit. For full cost tiers and milestone schedules, see our <Link href="/services/aeo/costs-timing" className="text-cyan-400 hover:underline font-medium">AEO Service Costs &amp; Project Timing guide</Link>.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-zinc-950/80 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3 font-serif transition-all duration-200 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
