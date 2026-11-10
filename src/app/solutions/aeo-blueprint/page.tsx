'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { trackGaEvent } from '@/lib/gtag';
import { getAeoBlueprintSchemaGraph } from '@/lib/schema/aeoBlueprint';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  BarChart3, 
  Map, 
  FileText, 
  ChevronDown, 
  Clock, 
  Info, 
  HelpCircle, 
  Award, 
  Code, 
  Users, 
  Search, 
  Target, 
  Cpu, 
  CheckSquare,
  FileCheck,
  Boxes,
  Rocket
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
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'blueprint',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'blueprint_page_contact_form',
      lead_type: 'blueprint_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'blueprint', message: '' });
    }, 6000);
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

          {/* 1. Hero Block with Direct Answer Block & Dominant Single CTA */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Strategic Diagnostic Audit &amp; 90-Day Roadmap</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit text-white">
              Get a clear 90-day roadmap to make AI search engines cite your business
            </h1>

            {/* Direct Answer Block (Autonomous Ingestion + Executive Summary) */}
            <aside
              aria-label="Executive Summary"
              data-agent-purpose="direct-answer"
              className="text-left bg-white/[0.03] backdrop-blur-md border border-white/10 border-t-2 border-t-cyan-400/80 shadow-2xl rounded-2xl p-6 sm:p-8 my-8 space-y-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Executive Summary &amp; Direct Answer</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  The Strategic Blueprint is a fixed-scope technical audit that diagnoses entity clarity, schema gaps, and AI retrieval barriers across your digital presence within 5 business days, delivering an actionable 90-day execution roadmap backed by a 100% fee credit toward implementation.
                </p>
              </div>

              {/* Micro-Data Key-Value Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="p-3.5 bg-black/50 border border-white/5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">Turnaround</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-cyan-300">5 Business Days</span>
                </div>
                <div className="p-3.5 bg-black/50 border border-white/5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">Investment</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white">$995 AUD <span className="text-xs text-zinc-400 font-normal">ex. GST</span></span>
                </div>
                <div className="p-3.5 bg-black/50 border border-white/5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">Risk Reversal</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-cyan-300">100% Fee Credited Back</span>
                </div>
              </div>
            </aside>

            {/* Focal Point CTA (Hick's Law - Single Dominant CTA + Tertiary Scan Link) */}
            <div className="space-y-4 max-w-md mx-auto pt-2">
              <a
                href="#blueprint-contact-form"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.35)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black shrink-0" />
                <span>Order $995 Blueprint</span>
                <ArrowRight className="w-4 h-4 text-black shrink-0" />
              </a>
              <p className="text-xs text-zinc-400 font-serif">
                Zero retainers. Delivered in 5 business days. 100% credited to sprints.
              </p>
              <div className="pt-1">
                <Link
                  href="/diagnostic"
                  className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline font-medium inline-flex items-center gap-1.5 transition"
                >
                  <span>Not ready for a full audit? Run a free 60-second visibility scan</span>
                  <span>&rarr;</span>
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

          {/* 2. Section: The Retainer Problem vs. Fixed Deliverables */}
          <section id="retainer-problem" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">The Retainer Problem vs. Fixed Deliverables</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Legacy SEO agencies leave you paying monthly retainers with zero AI visibility
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Traditional agencies charge ongoing monthly retainers for keyword rankings and link schemes that generative search engines ignore. AI models like ChatGPT Search, Perplexity, and Google AI Overviews do not browse links; they retrieve verifiable entity facts from structured knowledge graphs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs font-serif">
              <div className="p-6 bg-zinc-950/80 border border-red-500/20 rounded-2xl space-y-3">
                <span className="text-red-400 font-mono font-bold text-xs uppercase tracking-wider block">The Legacy SEO Trap</span>
                <ul className="space-y-2.5 text-zinc-300 list-disc list-inside">
                  <li>Locked into open-ended monthly contracts ($2,000 to $5,000+ every month).</li>
                  <li>Opaque vanity metrics like impressions and keyword ranks that fail to convert.</li>
                  <li>No machine-readable schema or entity identity grounding for AI answer engines.</li>
                  <li>Slow execution cycles hidden behind recurring agency retainer hours.</li>
                </ul>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-cyan-500/40 rounded-2xl space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <span className="text-cyan-300 font-mono font-bold text-xs uppercase tracking-wider block">The AEObility Blueprint Model</span>
                <ul className="space-y-2.5 text-zinc-200 list-disc list-inside">
                  <li>Transparent one-time fixed investment ($995 AUD ex. GST) with zero lock-in.</li>
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
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">The 4 Core Audit Deliverables</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Our 5-day blueprint audits entity clarity and identifies exact AI answer gaps
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

          {/* 4. Section: Comparative Matrix & Exit-Ramp Selector */}
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

          {/* 5. Section: The 100% Risk-Reversal Credit Policy & Process */}
          <section id="blueprint-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">The 100% Risk-Reversal Credit Policy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                Implement the strategic plan yourself or credit 100% of the cost toward delivery
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

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
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

          {/* 6. Section: Dedicated Intake Form */}
          <section id="blueprint-contact-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="relative isolate max-w-3xl mx-auto bg-slate-900/80 border border-purple-500/25 p-6 sm:p-10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Top Specular Light Catch */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Order Strategic Audit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit leading-snug">
                  Claim your audit blueprint for a transparent fixed fee of $995 AUD ex. GST
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your business details below to request your standalone Strategic Blueprint and 90-day execution roadmap.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pt-1">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
                </div>
              </div>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h3 className="font-bold text-white text-base font-soehne-breit">Blueprint order request received</h3>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed">
                    Thank you. Our AEObility strategy team will review your website details and get in touch within 24 business hours to confirm your audit scope.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Store URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-store-url">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="bp-store-url"
                        required
                        value={contactData.website}
                        onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="e.g. mybusiness.com.au"
                      />
                      <p className="text-[11px] text-slate-400 font-serif leading-tight">
                        We check website structure, structured-data markup, content clarity, and local search signals.
                      </p>
                    </div>

                    {/* Full Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="bp-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="bp-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="vince@example.com.au"
                      />
                    </div>

                    {/* Service Type Selector */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-service-type">
                        What would you like to discuss?
                      </label>
                      <select
                        id="bp-service-type"
                        value={contactData.serviceType}
                        onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all font-medium"
                      >
                        <option value="blueprint">Strategic Blueprint ($995 AUD)</option>
                        <option value="micro-sprint">Micro-Sprint (From $495 AUD)</option>
                        <option value="foundation">AEO Foundation ($1,990 AUD)</option>
                        <option value="unsure">Not sure yet - Help me decide</option>
                      </select>
                    </div>

                    {/* Notes Textarea */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono" htmlFor="bp-message">
                        What would you like help with?
                      </label>
                      <textarea
                        id="bp-message"
                        required
                        rows={3}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        className="w-full bg-[#080B12] border border-slate-600 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                        placeholder="Tell us about your business goals, key service pages, or visibility priorities..."
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-slate-400 font-serif leading-tight">
                        We use your details to deliver your strategic audit and roadmap. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button & In-Line Risk Reversal Banner */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Order $995 Blueprint</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Risk Reversal Banner */}
                    <div className="p-3 bg-black/50 border border-white/10 rounded-xl text-center text-xs text-slate-300 font-serif leading-relaxed">
                      Fixed $995 AUD price. No ongoing retainer. 100% credited towards eligible implementation sprints booked within 60 days.
                    </div>

                    {/* Direct Consultation Link */}
                    <div className="pt-2 text-center text-xs text-slate-400 font-serif">
                      <span>Prefer to discuss requirements before purchasing? </span>
                      <Link href="/book" className="text-cyan-400 hover:underline font-semibold font-sans">
                        Book a 15-minute clarity call &rarr;
                      </Link>
                      <span className="mx-2 text-slate-600">|</span>
                      <Link href="/contact" className="text-purple-300 hover:underline font-semibold font-sans">
                        Submit a bespoke query &rarr;
                      </Link>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </section>

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
