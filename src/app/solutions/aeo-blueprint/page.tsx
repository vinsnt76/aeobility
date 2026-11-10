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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      icon: <Layers className="w-6 h-6 text-aeo-cyan" />,
      title: "Website & structured-data review",
      description: "We perform a technical gap analysis and entity optimisation review to identify missing signals that make your business harder for search platforms to interpret."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-aeo-purple" />,
      title: "Visibility scorecard",
      description: "A clear scorecard evaluating your digital footprint across Search, Maps and AI-assisted search tools, highlighting practical visibility opportunities."
    },
    {
      icon: <Map className="w-6 h-6 text-aeo-cyan" />,
      title: "90-day execution roadmap",
      description: "A step-by-step priority roadmap mapping out the most impactful website, content, and local visibility improvements tailored to your business goals."
    },
    {
      icon: <FileText className="w-6 h-6 text-aeo-purple" />,
      title: "Content & service-information audit",
      description: "An analysis of your core service descriptions and client-facing pages to ensure they match high-intent customer search queries."
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

          {/* 1. Hero Block with Two-Tier H1 & Glassmorphic Executive Summary Overlay */}
          <section id="hero" className="relative pt-6 pb-4 max-w-4xl mx-auto space-y-6 scroll-mt-24 text-center">
            {/* Eyebrow */}
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Strategic Diagnostic Audit (BPSTRAT)
            </p>

            {/* H1 Storyline */}
            <h1 id="blueprint-hero" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-soehne-breit">
              <span className="block text-slate-400 text-lg sm:text-xl font-mono uppercase tracking-wider mb-2 font-normal">
                90-Day AI Roadmap
              </span>
              Make search engines cite your brand
            </h1>

            {/* Glassmorphic Executive Summary Overlay Card */}
            <aside 
              className="my-8 p-6 md:p-8 rounded-xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 border-t border-t-cyan-400/40 shadow-2xl text-left"
              aria-label="Executive Summary"
              data-agent-purpose="direct-answer"
            >
              <p className="text-base sm:text-lg leading-relaxed text-slate-200 mb-6 font-normal font-sans">
                The <strong className="text-white font-semibold">Strategic Blueprint</strong> is a comprehensive 90-day technical audit and roadmap designed to clarify how ChatGPT, Gemini, Perplexity, and Google AI Overviews discover and parse your brand. Delivered in 5 business days for a fixed fee of $995 AUD ex. GST, 100% of your fee is credited toward implementation sprints.
              </p>

              {/* Micro-Metric Data Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider mb-1">Turnaround</span>
                  <span className="text-cyan-400 font-semibold text-sm">5 Business Days</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider mb-1">Investment</span>
                  <span className="text-white font-semibold text-sm">$995 AUD ex. GST</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider mb-1">Risk Reversal</span>
                  <span className="text-emerald-400 font-semibold text-sm">100% Credited Back</span>
                </div>
              </div>
            </aside>

            {/* Conversion Focus Point */}
            <div className="space-y-4 max-w-md mx-auto pt-2">
              <a 
                href="#order-blueprint" 
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.35)] cursor-pointer"
                data-testid="btn-order-blueprint"
                data-agent-action="order-blueprint"
              >
                <Calendar className="w-4 h-4 text-black shrink-0" />
                <span>Order $995 Blueprint &rarr;</span>
              </a>
              <p className="text-xs text-slate-400 font-mono">
                Zero retainers. 5-day delivery SLA. 100% credited to sprints.
              </p>
              <div className="pt-1">
                <Link 
                  href="/diagnostic" 
                  className="text-xs text-cyan-400/80 hover:text-cyan-300 underline underline-offset-4 font-medium transition"
                >
                  Not ready for an audit? Run a free 60-second visibility scan &rarr;
                </Link>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp"
                alt="AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/40 to-transparent" />
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Know what needs fixing? Explore our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused micro-sprints</Link> from $495 ex. GST or <Link href="/services/geo-marketing" className="text-cyan-400 hover:underline font-medium">local business profiles</Link>.
            </p>
          </section>

          {/* 2. Section: Why open-ended contracts fail AI search */}
          <section id="retainer-problem" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Beyond the Retainer
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Why open-ended contracts fail AI search
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Monthly retainers made sense when tracking ranking fluctuations across 10 blue links on desktop search. Agencies billed recurring monthly hours to build links and monitor keyword ranks. But generative answer engines do not browse links or count page clicks. They synthesize direct answers from verified entity facts, registered credentials, and structured knowledge graphs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs font-serif">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <span className="text-slate-400 font-mono font-bold text-xs uppercase tracking-wider block">The Positional Ranking Model</span>
                <ul className="space-y-2.5 text-zinc-300 list-disc list-inside">
                  <li>Open-ended monthly retainers ($2,000 to $5,000+ each month) built for tracking 10 blue links.</li>
                  <li>Success measured by ranking positions and impression metrics that often fail to trigger citations.</li>
                  <li>Content written for keyword density rather than structured passage extraction.</li>
                  <li>Extended execution cycles tied to recurring monthly agency hours.</li>
                </ul>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/40 rounded-2xl space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
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
                The 5-Day Audit
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
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 hover:border-cyan-500/40 transition">
                  <div className="p-2.5 bg-black border border-white/10 rounded-xl w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{item.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {item.description}
                  </p>
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
                Zero-Risk Handover
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
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Digital assessment</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Submit your website URL and confirm business objectives with our audit team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-purple-500/40 text-purple-300 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">5-day audit &amp; roadmap</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">We audit your structured data, content clarity, local signals, and technical gap analysis.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Walkthrough &amp; credit-back</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Receive your 90-day roadmap in a 45-minute walkthrough. 100% of your $995 fee is credited toward eligible implementation sprints.</p>
              </div>
            </div>
          </section>

          {/* 6. Section: Comparative Matrix & Exit-Ramp Selector */}
          <section id="decision-strip" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Service Fit &amp; Comparison</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Which option fits your current priority?</h2>
              <p className="text-xs text-white/60 font-serif">Compare our standalone diagnostic audit against targeted micro-sprints and full foundations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif">
              <div className="p-4 bg-zinc-950/80 border border-cyan-500/40 rounded-xl space-y-1">
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
                  <tr className="bg-cyan-950/20 border-l-2 border-l-cyan-400 hover:bg-cyan-950/30 transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Strategic Blueprint</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Unclear what is limiting search visibility</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Micro-Sprint Tier</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page / Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick fix for one specific issue</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Foundation</td>
                    <td className="p-3.5 sm:p-4">Multi-Page &amp; Connected Fixes</td>
                    <td className="p-3.5 sm:p-4">Connected improvements across entire site</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$1,990 AUD</td>
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
