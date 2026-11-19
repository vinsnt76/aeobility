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
import { getSolutionsSchemaGraph } from '@/lib/schema/solutions';
import { TECHNICAL_SPRINT_CATALOG, PRICING_TIERS, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  Boxes, 
  Network, 
  ShieldCheck, 
  ChevronDown, 
  Calendar, 
  UserCheck,
  Users,
  Search,
  Rocket,
  FileCheck,
  Code
} from 'lucide-react';

export const SOLUTIONS_INTERNAL_LINKS = [
  {
    targetSlug: "/solutions/aeo-blueprint",
    anchorText: "90-day AEO pilot and Strategic Blueprint",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "focused micro-sprints",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/geo-marketing",
    anchorText: "GEO Marketing Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/shopify",
    anchorText: "Shopify AEO Services",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/costs-timing",
    anchorText: "AEO Service Costs & Project Timing",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function SolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [diagnosticData, setDiagnosticData] = useState({
    websiteUrl: '',
    name: '',
    email: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: 'unsure',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectSprintForForm = (typeKey: string) => {
    setContactData(prev => ({ ...prev, serviceType: typeKey }));
    const formElement = document.getElementById('solutions-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosticSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'solutions_diagnostic_form',
      lead_type: 'solutions_readiness_scan',
      value: 1,
    });
    setDiagnosticSubmitted(true);
    setTimeout(() => {
      setDiagnosticSubmitted(false);
      setDiagnosticData({ websiteUrl: '', name: '', email: '' });
    }, 6000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackGaEvent('generate_lead', {
      event_category: 'lead_generation',
      form_id: 'solutions_contact_form',
      lead_type: 'solutions_enquiry',
      service_selected: contactData.serviceType,
      value: 1,
    });
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactData({ name: '', email: '', website: '', serviceType: 'unsure', message: '' });
    }, 6000);
  };

  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const foundationDirect = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'] || foundationCore;
  const foundationTurnkey = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'] || foundationCore;
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];
  const microSku = TECHNICAL_SPRINT_CATALOG['SS1MICRO1'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  const faqs = [
    {
      question: "Do I need the Blueprint before booking a Micro-Sprint?",
      answer: `No. If you already know the specific issue you want addressed, you can book a Micro-Sprint directly. If you need help identifying and prioritising technical gaps, start with the Strategic Blueprint (${formatAudCurrency(bpSku.priceExGst)}).`
    },
    {
      question: "What is included in AEO Foundation?",
      answer: `AEO Foundation combines agreed priority improvements across technical schema, key service pages, internal linking, and business-information consistency in a four-week fixed turnkey engagement at ${formatAudCurrency(foundationCore.priceExGst)} across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core pages.`
    },
    {
      question: "How does the 100% fee credit work?",
      answer: `If you complete the Strategic Blueprint and book AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} days of handover, we apply the full ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint fee to your implementation cost. The credit applies to AEO Foundation only, is applied to the agreed implementation fee and cannot be exchanged for cash.`
    },
    {
      question: "How long does AEO Foundation take?",
      answer: "Most AEO Foundation engagements are delivered across a four-week period with staged milestones, allowing adequate time for precise implementation, validation, and review."
    },
    {
      question: "Are there ongoing contracts or monthly retainers?",
      answer: "No. All work is clearly scoped and fixed-price upfront. Our Governed Sprints operate on 30-day cycles with zero contract lock-in. Ongoing optimisations are only available where explicitly agreed upon."
    },
    {
      question: "What happens after a sprint is completed?",
      answer: "You receive a full handover with clear documentation of all updates made. You own 100% of the code and schema outright. You can manage the site internally, book additional targeted Micro-Sprints, or discuss ongoing governed cycles."
    },
    {
      question: "How much does Answer Engine Optimisation (AEO) cost in Australia for single-site vs. multi-entity deployments?",
      answer: `In Australia, fixed-scope AEO starts with our free AI Visibility Score and the standalone ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD ex. GST Strategic Blueprint (100% credited toward eligible implementation within ${GOVERNANCE_RULES.creditWindowDays} days). Single-site SMBs qualify for fixed-rate Micro-Sprints from ${formatAudCurrency(microSku.priceExGst, { includeTaxSuffix: false })} AUD ex. GST, Governed Macro Sprints at ${formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} AUD/month ex. GST, or AEO Foundation (${formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD ex. GST across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core pages). Multi-entity organisations, national networks, and complex e-commerce catalogues are scoped by application following a Strategic Blueprint review.`
    },
    {
      question: "How do I run an AEO pilot with a 90-day plan and clear success criteria?",
      answer: `Begin your 90-day AEO pilot with the ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Strategic Blueprint. Days 1 to 10 establish your baseline AI Visibility Score, map entity and schema gaps, and lock in a prioritised 90-day checklist. In Weeks 2 to 6, apply your 100% ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint credit toward AEO Foundation or targeted Micro-Sprints to deploy connected JSON-LD schema and self-contained answer passages. In Weeks 7 to 12, measure pilot performance against four clear criteria: zero-error schema validation, verified AI crawler access (GPTBot, ClaudeBot, PerplexityBot), direct passage extraction on target buyer prompts, and measurable brand citation growth across ChatGPT Search, Perplexity, and Google AI Overviews.`
    }
  ];

  const engagementPaths = [
    {
      key: "blueprint",
      anchorId: "solutions-blueprint",
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />,
      category: "Diagnostic & Planning",
      title: tier1.name,
      price: formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false }),
      priceSub: "ex. GST",
      scopeSub: "Standalone audit • 100% credited toward implementation within 60 days",
      description: "Find the data errors, missing business facts, and structured code issues preventing search engines and AI models from recommending your business.",
      deliverables: [
        { title: "Search & AI Visibility Audit", detail: "Checks how Google, Apple Maps, and AI tools extract your business details." },
        { title: "Code & Schema Review", detail: "Identifies broken structured data, incorrect tags, and indexing errors." },
        { title: "Prioritised 90-Day Plan", detail: "An ordered checklist of required technical fixes and page updates." },
        { title: "45-Minute Review Call", detail: "A direct walkthrough of findings and next steps with your team." }
      ],
      turnaround: "5–7 business days",
      delivery: "Complete report and fix checklist",
      ctaLabel: "Commission Strategic Blueprint"
    },
    {
      key: "foundation",
      anchorId: "solutions-foundation",
      icon: <Boxes className="w-5 h-5 text-aeo-cyan" />,
      category: "Core Setup (Recommended)",
      title: tier2.name,
      price: formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false }),
      priceSub: "/ mo ex. GST",
      scopeSub: "90 day execution • Covers up to 10 core pages • Includes Strategic Blueprint & $250 onboarding setup",
      description: "Hands-on technical implementation to resolve code errors, rewrite key pages for direct-answer search, and align your business listings.",
      deliverables: [
        { title: "Structured Data Installation", detail: "Valid schema markup added directly to your site or supplied as ready-to-paste code." },
        { title: "Direct-Answer Content", detail: "Up to 10 priority service pages updated into clear, extractable answer blocks." },
        { title: "Internal Page Linking", detail: "Connects core services to relevant proof points and case studies." },
        { title: "Directory Alignment", detail: "Syncs name, address, phone number, and services across Google, Apple Maps, and Bing." }
      ],
      turnaround: "90 days in staged milestones",
      delivery: "Direct CMS installation or code files for your developer",
      ctaLabel: "Deploy AEO Foundation"
    },
    {
      key: "macro-sprint",
      anchorId: "solutions-macro-sprints",
      icon: <Rocket className="w-5 h-5 text-aeo-purple" />,
      category: "Monthly Improvements",
      title: tier3.name,
      price: "From $495 AUD",
      priceSub: "ex. GST (or $1,980/mo bundle)",
      scopeSub: "Monthly technical cycles • No lock-in contracts • Pause anytime",
      description: "Focused monthly technical work blocks to clear site bottlenecks, expand service pages, and adapt to search updates.",
      deliverables: [
        { title: "Monthly Work Focus", detail: "Dedicated execution across code fixes, content updates, or directory cleanup." },
        { title: "Flexible 30-Day Cycles", detail: "Clear scope agreed upon each month with zero long-term commitments." },
        { title: "Progress Verification", detail: "Verification checks on indexing health, search appearance, and data accuracy." },
        { title: "Documentation & Handoff", detail: "Plain-English summary and review call for all completed updates." }
      ],
      turnaround: "10 business days per sprint cycle",
      delivery: "Adjust priorities monthly or cancel at the end of any cycle",
      ctaLabel: "Explore AEO Sprints"
    }
  ];

  const microSprintsCatalog = [
    {
      code: "SS1MICRO1 / SS1MICRO2",
      title: `${TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].name} / ${TECHNICAL_SPRINT_CATALOG['SS1MICRO2'].name}`,
      price: formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].priceExGst),
      description: "Structured schema markup deployment (Organisation, Service, Offer, LocalBusiness) for machine readability."
    },
    {
      code: "SS2MICRO1 / SS2MICRO2",
      title: `${TECHNICAL_SPRINT_CATALOG['SS2MICRO1'].name} / ${TECHNICAL_SPRINT_CATALOG['SS2MICRO2'].name}`,
      price: formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS2MICRO1'].priceExGst),
      description: "Rewrite and restructure one priority service page or category page into atomic answer blocks for AI scrapers."
    },
    {
      code: "SS3MICRO1",
      title: TECHNICAL_SPRINT_CATALOG['SS3MICRO1'].name,
      price: formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS3MICRO1'].priceExGst),
      description: "Connect priority location hubs, service pages, and supporting regional content with structured internal linking."
    },
    {
      code: "SS4MICRO1",
      title: TECHNICAL_SPRINT_CATALOG['SS4MICRO1'].name,
      price: formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS4MICRO1'].priceExGst),
      description: "Review and correct core NAP details across priority local directories, website footers, and Google Business Profile."
    },
    {
      code: "SS4MICRO3",
      title: TECHNICAL_SPRINT_CATALOG['SS4MICRO3'].name,
      price: formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS4MICRO3'].priceExGst),
      description: "Build one central reference page covering business identity, services, locations, and verified trust signals."
    }
  ];

  const jsonLdGraph = getSolutionsSchemaGraph(faqs);

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

          {/* 1. Hero Block with Clean Featured WebP Image Backdrop & Overlaid CTAs */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <Compass className="w-4 h-4 text-aeo-cyan" />
              <span>Transparent AEO Solutions &amp; Sprint Packages</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Transparent AEO <span className="text-gradient-aeo">Solutions &amp; Pricing</span>
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Explore clear pricing models for Australian businesses. Standalone {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Strategic Blueprint audit, fixed-scope micro-sprints from {formatAudCurrency(microSku.priceExGst)}, and AEO Foundation. Clear scope. Flat rates.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from {formatAudCurrency(microSku.priceExGst)}</span>
                <span className="text-zinc-600">|</span>
                <span>AEO Foundation ({formatAudCurrency(foundationCore.priceExGst)})</span>
              </div>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/solutions/aeo-solutions-and-pricing-framework_AEObility.webp"
                alt="AEObility master solutions and pricing framework dashboard displaying transparent engagement tiers, micro-sprints, and Blueprint credit terms."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Choose your starting point or run a free scan.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 3-5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => selectSprintForForm('micro-sprint')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss your project</span>
                  </button>
                  <a
                    href="#solutions-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free audit scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Looking for detailed technical sprint specs? Visit our <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">Technical Sprints Portal</Link> or review our <Link href="/solutions/aeo-blueprint" className="text-cyan-400 hover:underline font-medium">90-day AEO pilot and Strategic Blueprint</Link>.
            </p>
          </section>

          {/* 2. "Choose Your Starting Point" Engagement Grid */}
          <section id="engagement-paths" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Choose Your Starting Point</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Select a diagnostic audit, comprehensive AEO Foundation, or targeted AEO Sprints.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementPaths.map((path, idx) => (
                <div
                  id={path.anchorId}
                  key={idx}
                  className={`bg-zinc-950/80 border p-6 rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-300 group scroll-mt-24 ${
                    path.key === 'foundation'
                      ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/20'
                      : 'border-white/10 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                        {path.icon}
                        <span>{path.category}</span>
                      </div>
                      {path.key === 'foundation' && (
                        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Title & Price */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-soehne-breit leading-snug">{path.title}</h3>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xl font-bold font-mono text-cyan-300">{path.price}</span>
                        <span className="text-xs text-zinc-400 font-mono">{path.priceSub}</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans mt-1">{path.scopeSub}</p>
                    </div>

                    {/* Single-Sentence Scope */}
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      {path.description}
                    </p>

                    {/* 4 Scannable Deliverables */}
                    <ul className="space-y-2.5 text-xs text-zinc-300 pt-3 border-t border-white/5 font-sans">
                      {path.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white block">{item.title}</span>
                            <span className="text-[11px] text-zinc-400 font-serif leading-snug">{item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Delivery Details */}
                    <div className="pt-3 border-t border-white/5 font-mono text-xs">
                      <div className="bg-black/50 border border-white/5 p-3 rounded-xl space-y-1.5">
                        <div className="text-zinc-300 text-[11px]">
                          <strong className="text-cyan-300">Turnaround:</strong> {path.turnaround}
                        </div>
                        <div className="text-zinc-300 text-[11px] pt-1 border-t border-white/5">
                          <strong className="text-cyan-300">{path.key === 'macro-sprint' ? 'Flexibility:' : 'Delivery:'}</strong> {path.delivery}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => selectSprintForForm(path.key)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer ${
                        path.key === 'foundation'
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20'
                          : 'bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white hover:bg-zinc-800'
                      }`}
                    >
                      <span>{path.ctaLabel}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${path.key === 'foundation' ? 'text-black' : 'text-cyan-400'}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Master 5-Tier Service Comparison Matrix Table */}
            <div id="solutions-matrix" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
              <table className="w-full text-left text-xs font-serif border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Service / Tier</th>
                    <th className="p-3.5 sm:p-4">Target Scope</th>
                    <th className="p-3.5 sm:p-4">Best For</th>
                    <th className="p-3.5 sm:p-4">Delivery SLA</th>
                    <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">{tier1.name}</td>
                    <td className="p-3.5 sm:p-4">Full Digital Audit &amp; 90-Day Roadmap</td>
                    <td className="p-3.5 sm:p-4">Diagnosing entity gaps before building</td>
                    <td className="p-3.5 sm:p-4 font-mono text-zinc-400">{bpSku.deliverySla}</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">{formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} (100% Credited)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">{foundationDirect.name}</td>
                    <td className="p-3.5 sm:p-4">Core 4-Pillar Modular Deployment (Up to {GOVERNANCE_RULES.turnkeyPageLimit} Pages)</td>
                    <td className="p-3.5 sm:p-4">Direct implementation for developer/in-house teams</td>
                    <td className="p-3.5 sm:p-4 font-mono text-zinc-400">{foundationDirect.deliverySla}</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">{formatAudCurrency(foundationDirect.priceExGst, { includeTaxSuffix: false })} / mo</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">{foundationTurnkey.name}</td>
                    <td className="p-3.5 sm:p-4">Turnkey 4-Pillar Deployment (Up to {GOVERNANCE_RULES.turnkeyPageLimit} Pages)</td>
                    <td className="p-3.5 sm:p-4">Complete end-to-end execution across priority services</td>
                    <td className="p-3.5 sm:p-4 font-mono text-zinc-400">{foundationTurnkey.deliverySla}</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">{formatAudCurrency(foundationTurnkey.priceExGst, { includeTaxSuffix: false })} / mo</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Governed Macro Sprints</td>
                    <td className="p-3.5 sm:p-4">4x Bundled Micro-Sprints per Cycle (Pillars 1-4)</td>
                    <td className="p-3.5 sm:p-4">Targeted monthly execution with zero retainer lock-in</td>
                    <td className="p-3.5 sm:p-4 font-mono text-zinc-400">{macroSku.deliverySla}</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">{formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} / mo</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition">
                    <td className="p-3.5 sm:p-4 font-bold text-white font-sans">AEO Micro-Sprints</td>
                    <td className="p-3.5 sm:p-4">1 Defined Priority Page or Schema Fix</td>
                    <td className="p-3.5 sm:p-4">Quick half-day fixes for specific bottlenecks</td>
                    <td className="p-3.5 sm:p-4 font-mono text-zinc-400">{microSku.deliverySla}</td>
                    <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From {formatAudCurrency(microSku.priceExGst, { includeTaxSuffix: false })}</td>
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
                  <span>Validation checks, summary of completed changes, and handover notes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{GOVERNANCE_RULES.clientIpOwnership}. View <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">focused technical sprints</Link>.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Micro-Sprints Catalog Grid */}
          <section id="solutions-catalog" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Targeted Micro-Sprint Catalogue</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Fixed-scope, flat-rate execution packages delivered within 3-5 business days.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {microSprintsCatalog.map((sprint, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-3 text-left hover:border-cyan-500/40 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {sprint.code}
                    </span>
                    <span className="text-xs font-bold text-cyan-300 font-mono">{sprint.price}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{sprint.title}</h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {sprint.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Streamlined 12-Column Responsive Diagnostic Form Module */}
          <section id="solutions-diagnostic-form" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto bg-zinc-950/90 border border-cyan-500/30 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full filter blur-3xl -z-10" />

              <div className="text-center space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Instant Visibility Scan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Run a Free Visibility Scan</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-serif max-w-xl mx-auto leading-relaxed">
                  Enter your website URL to check structured data, entity clarity, and search readiness signals.
                </p>
              </div>

              {diagnosticSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Visibility Scan Submitted</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you. Our AEObility strategy team will audit your digital footprint and send your gap report within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
                  {/* Strict 12-Column Grid Layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Website URL Field - Col Span 12 */}
                    <div className="col-span-12 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="sol-diag-url">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="sol-diag-url"
                        required
                        value={diagnosticData.websiteUrl}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, websiteUrl: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. mybusiness.com.au"
                      />
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We check website structure, structured-data setup, and content clarity for common visibility gaps.
                      </p>
                    </div>

                    {/* First Name Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="sol-diag-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="sol-diag-name"
                        required
                        value={diagnosticData.name}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Sarah"
                      />
                    </div>

                    {/* Primary Email Field - Col Span 12 on Mobile, Col Span 6 on Desktop */}
                    <div className="col-span-12 md:col-span-6 space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-300" htmlFor="sol-diag-email">
                        Primary Email
                      </label>
                      <input
                        type="email"
                        id="sol-diag-email"
                        required
                        value={diagnosticData.email}
                        onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="sarah@mybusiness.com.au"
                      />
                    </div>

                    <div className="col-span-12">
                      <p className="text-[11px] text-zinc-400 font-serif leading-tight">
                        We use your details to deliver your visibility score and gap report. We will not add you to marketing communications without your consent.
                      </p>
                    </div>
                  </div>

                  {/* Submission Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                    >
                      <span>Run Free Visibility Scan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 5. Operational 3-Step Process Flow Pipeline Graphic */}
          <section id="solutions-process" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Simple 3-Step Operational Delivery</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">How Solutions Are Delivered</h2>
              <p className="text-xs text-white/60 font-serif">Clear sequence from initial scan to complete handover notes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">1</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Scan &amp; Access</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run a free scan or confirm your site priorities with our strategy team.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-purple-950 border border-purple-500/40 text-purple-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(168,85,247,0.2)]">2</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">4–5 Day Execution</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Deploy agreed schema markup, atomic page rewrites, or internal linking.</p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-3 relative hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]">3</div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Validation &amp; Handover</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">Run validation checks and receive complete documentation &amp; ownership notes.</p>
              </div>
            </div>
          </section>

          {/* 6. Bottom Conversion CTA Block + Direct Contact Form */}
          <section id="solutions-contact-form" className="border-t border-white/10 pt-16 text-center space-y-8 scroll-mt-24">
            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-white font-soehne-breit">Discuss Your Solution</h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                Tell us about your business goals and technical priorities. We will confirm scope and pricing before you commit. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Request a quote</Link>.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono pt-1">
                <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>You will speak with an AEObility specialist based in Perth. Complex scopes or strategic requirements may be reviewed by senior AEObility specialists.</span>
              </div>
            </div>

            {/* Inline Contact Form */}
            <div className="max-w-xl mx-auto bg-zinc-950/90 border border-white/10 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl -z-10" />
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <h3 className="text-xl font-bold text-white font-soehne-breit">Discuss AEO Solutions</h3>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded">
                  AEO Solutions
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-serif mb-6 leading-relaxed">
                Select the option you are considering, or choose &quot;Not sure yet - Help me decide&quot; if you would like help deciding.
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Solution Enquiry Received</h4>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Thank you for reaching out. Our AEObility strategy team will review your details and get in touch within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sol-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="sol-name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="e.g. Vince Baker"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sol-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="sol-email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="vince@example.com.au"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sol-service-type">
                      What would you like to discuss?
                    </label>
                    <select
                      id="sol-service-type"
                      value={contactData.serviceType}
                      onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-medium"
                    >
                      <option value="unsure">Not sure yet - Help me decide</option>
                      <option value="blueprint">Strategic Blueprint ({formatAudCurrency(bpSku.priceExGst)})</option>
                      <option value="foundation">AEO Foundation ({formatAudCurrency(foundationCore.priceExGst)})</option>
                      <option value="macro-sprint">AEO Sprints ({formatAudCurrency(macroSku.priceExGst)} / mo)</option>
                      <option value="micro-sprint">Targeted Micro-Sprint ({formatAudCurrency(microSku.priceExGst)})</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sol-website">
                      Website URL (Optional)
                    </label>
                    <input
                      type="text"
                      id="sol-website"
                      value={contactData.website}
                      onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="mybusiness.com.au"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1.5" htmlFor="sol-message">
                      What would you like help with?
                    </label>
                    <textarea
                      id="sol-message"
                      required
                      rows={3}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell us about your business priorities, technical requirements, or visibility goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] cursor-pointer"
                  >
                    <span>Discuss Your Solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-serif">
                    Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
                  </p>
                </form>
              )}
            </div>
          </section>

          {/* 7. FAQ Accordion Section (All Answers Rendered in DOM) */}
          <section id="faq-solutions" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">
                Everything you need to know about AEObility solutions and pricing. For full cost tiers and milestone schedules, review our <Link href="/services/aeo/costs-timing" className="text-cyan-400 hover:underline font-medium">AEO Service Costs &amp; Project Timing sub-node</Link>.
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
