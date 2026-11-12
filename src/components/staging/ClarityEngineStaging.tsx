'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TelemetryViewTracker } from '@/components/telemetry/TelemetryViewTracker';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

interface TelemetrySimulation {
  domain: string;
  query: string;
  entitySalience: number;
  answerCoverage: number;
  citationProvenance: string;
  recommendationState: string;
  verdictSummary: string;
}

const PIPELINE_STAGES = [
  {
    num: '01',
    name: 'Define',
    subtitle: 'Entity Identity & Registry Mapping',
    tag: 'ACTIVE FOUNDATION',
    description:
      'We establish unambiguous machine-readable identity records for your business, linking your official Australian Business Number (ABN), ASIC registration, and core services so AI engines never confuse your brand with competitors.',
    deliverables: [
      'Canonical @id entity root architecture',
      'ABN / ASIC deterministic registry binding',
      'Brand & service disambiguation schema'
    ],
    metricLabel: 'Entity Salience Lift',
    metricValue: '+71.8%'
  },
  {
    num: '02',
    name: 'Connect',
    subtitle: 'Service & Location Corridors',
    tag: 'SEMANTIC CORRIDORS',
    description:
      'We connect your commercial offerings directly to Australian geographic service areas and structure key answers into concise 90-token blocks that conversational AI can extract and quote verbatim.',
    deliverables: [
      'Service-to-location knowledge corridors',
      '90-token direct-answer passage blocks',
      'Customer question fan-out alignment'
    ],
    metricLabel: 'Query Fan-Out Coverage',
    metricValue: '91.4%'
  },
  {
    num: '03',
    name: 'Prove',
    subtitle: 'Verified Citations & Proof Loops',
    tag: 'EVIDENCE GRAPH',
    description:
      'We bind your commercial claims to verifiable case studies, customer outcomes, and consistent third-party directory citations across Google Business Profile, Apple Maps, and Bing Places.',
    deliverables: [
      'Empirical case study proof triples',
      'Cross-platform directory consensus',
      'Verifiable quantitative outcome claims'
    ],
    metricLabel: 'Citation Parity Score',
    metricValue: '100%'
  },
  {
    num: '04',
    name: 'Measure',
    subtitle: 'AI Retrieval & Recommendation Tracking',
    tag: 'TELEMETRY LOOP',
    description:
      'We benchmark how frequently ChatGPT, Gemini, Perplexity, and Google AI Overviews recommend your business, tracking passage extraction share and eliminating AI hallucinations over 90 days.',
    deliverables: [
      'Multi-model citation share tracking',
      'Positional bias & extraction diagnostics',
      '90-day salience progression ledger'
    ],
    metricLabel: 'Target Citation State',
    metricValue: 'Top-Tier (#1.4)'
  }
];

export default function ClarityEngineStaging() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainInput, setDomainInput] = useState('');
  const [queryInput, setQueryInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStage, setScanStage] = useState(0);
  const [activePipelineIndex, setActivePipelineIndex] = useState(0);
  const [caseStudyView, setCaseStudyView] = useState<'after' | 'before'>('after');
  const [simulationResult, setSimulationResult] = useState<TelemetrySimulation | null>(null);

  const heroInstrumentRef = useRef<HTMLDivElement>(null);
  const finalPosterRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const commercialRef = useRef<HTMLElement>(null);

  // Load AOS (Animate On Scroll) library + smooth 60fps scroll parallax for "Four Steps" & "Commercial Architecture"
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const aosCssId = 'aos-cdn-stylesheet';
    if (!document.getElementById(aosCssId)) {
      const link = document.createElement('link');
      link.id = aosCssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
      document.head.appendChild(link);
    }

    const initAos = () => {
      const win = window as unknown as {
        AOS?: {
          init: (opts: Record<string, unknown>) => void;
          refresh: () => void;
        };
      };
      if (win.AOS) {
        win.AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: false,
          mirror: true,
          offset: 60
        });
        win.AOS.refresh();
      }
    };

    const aosScriptId = 'aos-cdn-script';
    const existingScript = document.getElementById(aosScriptId) as HTMLScriptElement | null;
    if (existingScript) {
      initAos();
    } else {
      const script = document.createElement('script');
      script.id = aosScriptId;
      script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
      script.async = true;
      script.onload = initAos;
      document.body.appendChild(script);
    }

    let rafId = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 800;
      const viewportCenter = viewportHeight / 2;

      const hiwEl = howItWorksRef.current;
      if (hiwEl) {
        const rect = hiwEl.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const normalized = Math.max(-1.25, Math.min(1.25, (viewportCenter - sectionCenter) / viewportHeight));
        const shiftPx = Math.round(normalized * 36);
        hiwEl.style.setProperty('--hiw-parallax', `${shiftPx}px`);
      }

      const commEl = commercialRef.current;
      if (commEl) {
        const rect = commEl.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const normalized = Math.max(-1.25, Math.min(1.25, (viewportCenter - sectionCenter) / viewportHeight));
        const shiftPx = Math.round(normalized * 36);
        commEl.style.setProperty('--comm-parallax', `${shiftPx}px`);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Suppress floating "Chat with AI Bill" badge when Hero Diagnostic or Final Poster is in viewport
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    let heroVisible = false;
    let footerPosterVisible = false;

    const dispatchSuppression = () => {
      const suppress = heroVisible || footerPosterVisible;
      window.dispatchEvent(
        new CustomEvent('aeo:suppress-bill', {
          detail: { suppress }
        })
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'hero-diagnostic-instrument') {
            heroVisible = entry.isIntersecting;
          }
          if (entry.target.id === 'final-conversion-panel') {
            footerPosterVisible = entry.isIntersecting;
          }
        });
        dispatchSuppression();
      },
      { threshold: 0.12 }
    );

    if (heroInstrumentRef.current) observer.observe(heroInstrumentRef.current);
    if (finalPosterRef.current) observer.observe(finalPosterRef.current);

    return () => {
      observer.disconnect();
      window.dispatchEvent(
        new CustomEvent('aeo:suppress-bill', {
          detail: { suppress: false }
        })
      );
    };
  }, []);

  const handleScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setIsScanning(true);
    setScanStage(1);
    setSimulationResult(null);

    setTimeout(() => setScanStage(2), 650);
    setTimeout(() => setScanStage(3), 1300);
    setTimeout(() => {
      setIsScanning(false);
      setScanStage(0);
      setSimulationResult({
        domain: domainInput.trim().replace(/^https?:\/\//, ''),
        query: queryInput.trim() || 'Commercial category capability query',
        entitySalience: 88,
        answerCoverage: 91,
        citationProvenance: '100% Parity',
        recommendationState: 'Optimised for AI',
        verdictSummary:
          'Domain entity detected. Upgrading service pages to deterministic JSON-LD triples and 90-token atomic passages will unlock primary citation status.'
      });
    }, 1950);
  };

  const scrollToHeroInstrument = () => {
    heroInstrumentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#CBD5E1] font-sans selection:bg-[#22D3EE] selection:text-[#090D16] relative overflow-x-clip">
      {/* =========================================================================
          FULL-PAGE LIGHT / DARK COLOUR & GRADIENT MAP TOKENS
          Disciplined 1-focal-gradient-per-section rule + WCAG 2.2 AA contrast
          ========================================================================= */}
      <style>{`
        /* Single Focal Gradient: Cyan (#22D3EE) -> Purple (#A855F7) */
        .text-focal-gradient {
          background: linear-gradient(90deg, #22D3EE 0%, #A855F7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bg-focal-gradient {
          background: linear-gradient(90deg, #22D3EE 0%, #A855F7 100%);
        }

        .parallax-hiw-header {
          transform: translate3d(0, calc(var(--hiw-parallax, 0px) * -0.2), 0);
          will-change: transform;
          transition: transform 0.08s linear;
        }

        .parallax-hiw-steps {
          transform: translate3d(0, calc(var(--hiw-parallax, 0px) * -0.35), 0);
          will-change: transform;
          transition: transform 0.08s linear;
        }

        .parallax-comm-header {
          transform: translate3d(0, calc(var(--comm-parallax, 0px) * -0.2), 0);
          will-change: transform;
          transition: transform 0.08s linear;
        }

        .parallax-comm-primary {
          transform: translate3d(0, calc(var(--comm-parallax, 0px) * -0.35), 0);
          will-change: transform;
          transition: transform 0.08s linear;
        }

        .parallax-comm-secondary {
          transform: translate3d(0, calc(var(--comm-parallax, 0px) * 0.35), 0);
          will-change: transform;
          transition: transform 0.08s linear;
        }
      `}</style>

      {/* =========================================================================
          ADAPTIVE FLOATING PILL NAVBAR (sticky top-4)
          Maintains high contrast over both #0B0D12 dark and #FFFFFF / #F8FAFC light sections
          ========================================================================= */}
      <header className="sticky top-4 z-50 px-4">
        <nav
          aria-label="Primary Navigation"
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-700/70 bg-[#0F172A]/90 px-5 sm:px-6 py-3 shadow-lg backdrop-blur-md"
        >
          {/* Left: Official AEObility Logo */}
          <Link
            href="/staging/clarity-engine"
            className="flex items-center gap-2.5 font-bold tracking-tight text-white focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0B0D12] border border-slate-700/80 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 4L27 10.5L16 17L5 10.5L16 4Z"
                  stroke="#22D3EE"
                  strokeWidth="2.3"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="16" r="1.3" fill="#FFFFFF" />
                <circle cx="13.5" cy="18.5" r="1.3" fill="#FFFFFF" />
                <circle cx="18.5" cy="18.5" r="1.3" fill="#FFFFFF" />
                <circle cx="23" cy="16" r="1.3" fill="#FFFFFF" />
                <path
                  d="M5 20.5L16 27L27 20.5"
                  stroke="#A855F7"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
              AEO<span className="text-[#22D3EE]">bility</span>
            </span>
          </Link>

          {/* Centre: 4 Clean Navigation Links in Steel-Tinted Off-White */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="transition hover:text-white">
              Telemetry
            </a>
            <a href="#operational-pipeline" className="transition hover:text-white">
              4-Stage Pipeline
            </a>
            <a href="#commercial-pathways" className="transition hover:text-white">
              Packages
            </a>
            <a href="#empirical-evidence" className="transition hover:text-white">
              Case Study
            </a>
          </div>

          {/* Right: Single Compact Primary Action Pill */}
          <div className="hidden md:flex items-center">
            <a
              href="#hero-diagnostic-instrument"
              className="rounded-full bg-[#22D3EE] px-4 py-2 text-xs font-semibold text-[#090D16] transition hover:bg-cyan-300 shadow-xs"
            >
              Free AI Scan →
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-700/70 bg-[#0F172A]/95 p-4 shadow-xl backdrop-blur-md space-y-2.5">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Telemetry
            </a>
            <a
              href="#operational-pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              4-Stage Pipeline
            </a>
            <a
              href="#commercial-pathways"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Packages
            </a>
            <a
              href="#empirical-evidence"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Case Study
            </a>
            <div className="pt-2 border-t border-slate-800">
              <a
                href="#hero-diagnostic-instrument"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-full bg-[#22D3EE] px-4 py-2.5 text-xs font-semibold text-[#090D16] transition hover:bg-cyan-300"
              >
                Free AI Scan →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          SECTION 01: HERO & LIVE DIAGNOSTIC
          Surface: Obsidian Dark (#0B0D12)
          H1: #FFFFFF | Body: #CBD5E1 | Micro-labels: #94A3B8
          Card: #111622 with 1px solid #1E293B border
          Gradient: Cyan-to-Purple (#22D3EE -> #A855F7) on H1 accent phrase
          Primary CTA: Solid #22D3EE fill + #090D16 text
          ========================================================================= */}
      <section className="relative pt-10 pb-24 lg:pt-16 lg:pb-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#1E293B]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="font-mono text-xs tracking-wide text-[#CBD5E1] font-medium">
                Answer Engine Optimisation for Australian Entities
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
              Get your business{' '}
              <span className="font-extrabold text-focal-gradient">
                found and chosen
              </span>{' '}
              in AI search.
            </h1>

            <p className="text-lg sm:text-xl text-[#CBD5E1] leading-relaxed max-w-[56ch]">
              We structure your services, business credentials, and customer proof so ChatGPT, Gemini, and Perplexity recommend your brand instead of guessing.
            </p>

            {/* Demoted Secondary Link (Hick's Law: Zero competing button fills in Hero) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="#commercial-pathways"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#CBD5E1] hover:text-white underline decoration-[#1E293B] hover:decoration-[#22D3EE] underline-offset-8 transition-all w-fit"
              >
                <span>Explore the $995 Strategic Blueprint</span>
                <span className="text-[#22D3EE]">↓</span>
              </a>

              <span className="text-xs font-mono text-[#94A3B8]">
                Fixed scope · Australian specialist · Zero retainer lock-in
              </span>
            </div>

            {/* Clean Telemetry Proof Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-[#1E293B]">
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Sales Uplift [AEO]</div>
                <div className="text-xl font-extrabold text-white mt-0.5">+17% Verified</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Salience Lift</div>
                <div className="text-xl font-extrabold text-[#F59E0B] mt-0.5">11.9% → 83.7%</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Blueprint Credit</div>
                <div className="text-xl font-extrabold text-white mt-0.5">100% Applied</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Diagnostic Form Card (5 cols) */}
          <div
            className="lg:col-span-5"
            id="hero-diagnostic-instrument"
            ref={heroInstrumentRef}
          >
            <div className="rounded-2xl bg-[#111622] border border-[#1E293B] p-6 sm:p-8 shadow-2xl">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                  <span className="font-mono text-xs tracking-wider uppercase text-[#94A3B8] font-semibold">
                    GET AI READY • LIVE DIAGNOSTIC
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Can conversational AI recommend your business?
                </h2>
              </div>

              {/* WCAG 2.2 AA Form: Programmatically associated persistent labels & non-italicized high-contrast inputs */}
              <form onSubmit={handleScanSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="domain-input"
                    className="block font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2"
                  >
                    Australian Business Domain
                  </label>
                  <input
                    id="domain-input"
                    type="text"
                    required
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    placeholder="yourcompany.com.au"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#1E293B] hover:border-slate-600 text-white text-sm placeholder:text-[#94A3B8] not-italic focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="query-input"
                    className="block font-mono text-xs uppercase tracking-wider text-[#CBD5E1] font-semibold mb-2"
                  >
                    Primary Customer Query / Intent
                  </label>
                  <input
                    id="query-input"
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder="best commercial solar installer Perth"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-[#1E293B] hover:border-slate-600 text-white text-sm placeholder:text-[#94A3B8] not-italic focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                  />
                </div>

                {/* Primary Conversion CTA: Solid #22D3EE Fill + #090D16 Text (Von Restorff Isolation) */}
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full py-3.5 px-6 rounded-full bg-[#22D3EE] hover:bg-cyan-300 text-[#090D16] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isScanning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#090D16] border-t-transparent rounded-full animate-spin" />
                      <span>Analysing Knowledge Graph...</span>
                    </>
                  ) : (
                    <>
                      <span>Get AI Ready · Free Scan</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                {/* Law of Proximity Reassurance Micro-Copy (>= 4.5:1 #94A3B8 on #111622) */}
                <p className="text-xs text-center font-mono text-[#94A3B8] pt-1">
                  Instant baseline scan • Zero email required upfront
                </p>
              </form>

              {/* Active Scanning Progress Bar */}
              {isScanning && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#0B0D12] border border-[#1E293B] font-mono text-xs space-y-2">
                  <div className="flex justify-between text-[#22D3EE]">
                    <span>TELEMETRY PROBE ACTIVE</span>
                    <span>STEP {scanStage}/3</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1E293B] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-focal-gradient transition-all duration-500"
                      style={{ width: `${(scanStage / 3) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-[#CBD5E1]">
                    {scanStage === 1 && '1. Inspecting entity identity & ABN registry parity...'}
                    {scanStage === 2 && '2. Measuring passage retrieval depth for customer query...'}
                    {scanStage === 3 && '3. Scoring citation provenance across AI engines...'}
                  </div>
                </div>
              )}

              {/* Simulated Output Drawer */}
              {simulationResult && (
                <div className="mt-4 p-4 rounded-xl bg-[#0B0D12] border border-[#1E293B] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
                    <span className="font-mono text-xs text-white font-bold truncate">
                      TARGET: {simulationResult.domain}
                    </span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#111622] text-[#22D3EE] border border-[#1E293B]">
                      {simulationResult.recommendationState}
                    </span>
                  </div>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    {simulationResult.verdictSummary}
                  </p>
                  <Link
                    href={`/diagnostic?url=${encodeURIComponent(simulationResult.domain)}&intent=${encodeURIComponent(simulationResult.query)}&auto=true`}
                    className="w-full py-2.5 px-4 rounded-full bg-[#22D3EE] hover:bg-cyan-300 text-[#090D16] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Open Full Telemetry Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* 4 Reassurance Telemetry Readouts */}
              <div className="mt-5 pt-4 border-t border-[#1E293B] grid grid-cols-2 gap-2.5">
                <div className="px-3 py-2 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#94A3B8]">Entity Salience</span>
                  <span className="font-mono text-xs font-bold text-white">88%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#0B0D12] border border-[#F59E0B]/45 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#94A3B8]">Answer Coverage</span>
                  <span className="font-mono text-xs font-bold text-[#F59E0B]">91%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#94A3B8]">Provenance</span>
                  <span className="font-mono text-xs font-bold text-white">100% Parity</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#94A3B8]">AI State</span>
                  <span className="font-mono text-xs font-bold text-[#10B981]">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: FOUR STEPS TO CLARITY
          Surface: Crisp White (#FFFFFF) with 1px solid #E5E7EB top/bottom borders
          H2: #0F172A (Obsidian) | Body: #475569 (Steel Grey) | Step Numbers: #94A3B8
          Cards: #FFFFFF separated by 1px solid #E5E7EB hairline dividers
          Gradient: Subtle Cyan-to-Purple connector line linking Steps 01-04
          Links: Plain text links in #0284C7 (>4.5:1 on white)
          ========================================================================= */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        aria-labelledby="steps-heading"
        className="border-y border-[#E5E7EB] bg-white py-24 text-[#0F172A] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <header className="max-w-2xl mb-16 parallax-hiw-header">
            <div data-aos="fade-up" data-aos-duration="750">
              <span className="inline-block rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase">
                The Telemetry Engine
              </span>
              <h2
                id="steps-heading"
                className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]"
              >
                Four Steps to Machine-Readable Clarity
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">
                Measure, understand, and activate your AI search visibility with zero agency lock-in.
              </p>
            </div>
          </header>

          {/* Subtle Horizontal/Vertical Cyan-to-Purple Connector Line Linking Steps 01-04 */}
          <div className="relative parallax-hiw-steps">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-focal-gradient opacity-60 z-0"
            />

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0 relative z-10">
              {/* Step 01 */}
              <li
                data-aos="fade-up"
                data-aos-delay="50"
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#94A3B8]">01</span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      Benchmark
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Tell Us What You Want To Be Found For
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Enter your Australian business domain and primary customer query. Our crawler inspects your page structure, Schema.org data, and service location signals.
                  </p>
                </div>
              </li>

              {/* Step 02 */}
              <li
                data-aos="fade-up"
                data-aos-delay="120"
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#94A3B8]">02</span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      Measure
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Measure Your AI Visibility
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    We test how ChatGPT Search, Perplexity, Gemini, and Google AI Overviews retrieve and cite your business across entity confidence and passage clarity.
                  </p>
                </div>
              </li>

              {/* Step 03 */}
              <li
                data-aos="fade-up"
                data-aos-delay="190"
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#94A3B8]">03</span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      Diagnose
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Discover Your Opportunities
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Receive your AI Visibility Score and uncover exact blind spots where AI engines misread your services, miss your locations, or favour competitors.
                  </p>
                </div>
              </li>

              {/* Step 04 */}
              <li
                data-aos="fade-up"
                data-aos-delay="260"
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#94A3B8]">04</span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      Activate
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Turn Insights into a 90-Day Plan
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Follow a prioritised 90-day engineering roadmap covering entity schema, direct-answer passages, and directory alignment with zero retainer lock-in.
                  </p>
                </div>
              </li>
            </ol>

            {/* Plain Text Educational Links in #0284C7 (>4.5:1 contrast on white) */}
            <nav
              aria-label="AEO definitions and tools"
              className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-wrap gap-6 items-center justify-between"
            >
              <Link
                href="/knowledge-hub/what-is-aeo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>What is AEO? Read our comprehensive definition guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/knowledge-hub/ai-seo-tools"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                <span>Compare AI search crawlers and vector parsers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: DIAGNOSTIC TELEMETRY SAMPLE
          Surface: Obsidian Dark (#0B0D12)
          H2: #FFFFFF | Body: #CBD5E1 | Telemetry Labels: #94A3B8
          Card: Dark terminal container (#111622) with #1E293B border
          Gradient: Cyan-to-Purple progress bar on the 88/100 score showcase
          Primary CTA: Solid #22D3EE button ("Run Free Live Telemetry Scan ->")
          ========================================================================= */}
      <section className="bg-[#0B0D12] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Cols: Editorial Framing */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block rounded-full border border-[#1E293B] bg-[#111622] px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#94A3B8] uppercase">
                Live Telemetry Output
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                See exactly what AI engines read on your site.
              </h2>
              <p className="text-base text-[#CBD5E1] leading-relaxed">
                Every scan evaluates four verifiable signals across your domain: entity identity, direct-answer passage density, service-to-proof connections, and local directory consistency.
              </p>
              <div className="pt-2 space-y-2 text-xs font-mono text-[#94A3B8]">
                <div>• Benchmarked against ChatGPT Search, Perplexity &amp; Gemini</div>
                <div>• Actionable pass/fail scorecard generated in seconds</div>
              </div>
            </div>

            {/* Right 7 Cols: Dark Terminal Telemetry Container (#111622 with #1E293B border) */}
            <div className="lg:col-span-7">
              <TelemetryViewTracker
                id="audit-preview"
                formId="how_it_works_preview"
                className="rounded-2xl bg-[#111622] border border-[#1E293B] p-6 sm:p-8 shadow-2xl space-y-6"
              >
                <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E293B] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Diagnostic Telemetry Sample</h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      Empirical signals measured during a live domain visibility scan
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] uppercase px-2.5 py-1 rounded bg-[#0B0D12] border border-[#1E293B]">
                    Sample v4.2
                  </span>
                </header>

                {/* Score Showcase with Cyan-to-Purple Progress Bar (Single Focal Gradient) */}
                <figure className="p-5 rounded-xl bg-[#0B0D12] border border-[#1E293B] space-y-3 m-0">
                  <div className="flex items-center justify-between">
                    <figcaption className="space-y-0.5">
                      <span className="text-xs uppercase font-mono font-semibold text-[#94A3B8] tracking-wider">
                        AI Visibility Index
                      </span>
                      <div className="text-3xl font-extrabold font-mono text-white">
                        88 <span className="text-sm text-[#94A3B8] font-sans font-normal">/ 100</span>
                      </div>
                    </figcaption>
                    <span className="px-3 py-1 rounded-full bg-[#111622] border border-[#1E293B] text-[#22D3EE] font-mono text-xs font-semibold">
                      Optimised for AI
                    </span>
                  </div>
                  {/* Cyan-to-Purple Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-[#1E293B] overflow-hidden">
                    <div className="h-full w-[88%] bg-focal-gradient rounded-full" />
                  </div>
                </figure>

                {/* 4 Diagnostic Signals */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs list-none p-0 m-0">
                  <li className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between gap-3">
                    <div>
                      <strong className="block font-semibold text-white">Entity Graph Alignment</strong>
                      <span className="block text-xs text-[#94A3B8] mt-0.5">ABN &amp; Schema identity</span>
                    </div>
                    <span className="font-mono text-[#22D3EE] font-bold shrink-0">94%</span>
                  </li>

                  <li className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between gap-3">
                    <div>
                      <strong className="block font-semibold text-white">Answer Extraction</strong>
                      <span className="block text-xs text-[#94A3B8] mt-0.5">90-token passage clarity</span>
                    </div>
                    <span className="font-mono text-[#22D3EE] font-bold shrink-0">91%</span>
                  </li>

                  <li className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between gap-3">
                    <div>
                      <strong className="block font-semibold text-white">Service Proof Links</strong>
                      <span className="block text-xs text-[#94A3B8] mt-0.5">Services linked to case proof</span>
                    </div>
                    <span className="font-mono text-white font-bold shrink-0">Connected</span>
                  </li>

                  <li className="p-3.5 rounded-xl bg-[#0B0D12] border border-[#1E293B] flex items-center justify-between gap-3">
                    <div>
                      <strong className="block font-semibold text-white">Citation Parity (NAP)</strong>
                      <span className="block text-xs text-[#94A3B8] mt-0.5">GBP, Apple Maps &amp; Bing</span>
                    </div>
                    <span className="font-mono text-[#22D3EE] font-bold shrink-0">100%</span>
                  </li>
                </ul>

                {/* Solid #22D3EE CTA + Proximity Reassurance */}
                <footer className="pt-2">
                  <Link
                    href="/diagnostic"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#22D3EE] hover:bg-cyan-300 text-[#090D16] font-bold text-sm transition-all shadow-md"
                  >
                    <span>Run Free Live Telemetry Scan</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <p className="text-xs text-center text-[#94A3B8] font-mono mt-2.5">
                    Real-time vector analysis executed using Gemini • Zero email required upfront
                  </p>
                </footer>
              </TelemetryViewTracker>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: DIAGNOSTIC FAILURE MODES
          Surface: Soft Architectural Grey (#F8FAFC) with 1px solid #E5E7EB borders
          H2: #0F172A | Body: #475569 (Steel Grey) | Gap Tags: #334155 on #E5E7EB pill
          Cards: Crisp #FFFFFF floating on #F8FAFC with 1px solid #E5E7EB borders
          Gradient: Cyan-to-Purple on "cannot verify" in H2
          Comparison Bars: Muted Steel Grey (#94A3B8) for "Before" vs solid #0891B2 for "After"
          ========================================================================= */}
      <section className="border-y border-[#E5E7EB] bg-[#F8FAFC] py-24 text-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase">
              Diagnostic Failure Modes
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
              AI cannot choose what it{' '}
              <span className="font-extrabold text-focal-gradient">cannot verify.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Most Australian business websites suffer from three structural blind spots that cause generative answer engines to skip them in favour of clearer competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GAP 01 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-[#E5E7EB] px-3 py-1 font-mono text-xs font-semibold text-[#334155]">
                    GAP 01 // IDENTITY
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#64748B]">Entity Layer</span>
                </div>

                {/* Before / After Comparison Bars */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] mb-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B]">Before: Unverified Identity</span>
                    <span className="text-[#475569] font-bold">24% Salience</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#94A3B8] w-[24%] rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-[#0F172A] font-semibold">After: Verified Entity Graph</span>
                    <span className="text-[#0891B2] font-bold">94% Salience</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0891B2] w-[94%] rounded-full" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  Identity &amp; Entity Gaps
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Unconnected ABN records and missing canonical identity markers force AI models to guess who you are, often confusing your business with similarly named competitors.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <a
                  href="#operational-pipeline"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0284C7] hover:text-[#0369A1]"
                >
                  <span>Inspect Stage 01: Entity Identity</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* GAP 02 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-[#E5E7EB] px-3 py-1 font-mono text-xs font-semibold text-[#334155]">
                    GAP 02 // PASSAGES
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#64748B]">Answer Layer</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] mb-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B]">Before: Bloated Keyword Copy</span>
                    <span className="text-[#475569] font-bold">18% Extracted</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#94A3B8] w-[18%] rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-[#0F172A] font-semibold">After: 90-Token Answer Blocks</span>
                    <span className="text-[#0891B2] font-bold">91% Extracted</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0891B2] w-[91%] rounded-full" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  Direct-Answer Passage Gaps
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Legacy SEO copy buries pricing, scope, and deliverables inside long walls of text. AI answer engines need concise, self-contained 90-token blocks they can quote directly.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <a
                  href="#operational-pipeline"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0284C7] hover:text-[#0369A1]"
                >
                  <span>Inspect Stage 02: Answer Corridors</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* GAP 03 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-[#E5E7EB] px-3 py-1 font-mono text-xs font-semibold text-[#334155]">
                    GAP 03 // PROVENANCE
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#64748B]">Evidence Layer</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] mb-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B]">Before: Unverified Claims</span>
                    <span className="text-[#475569] font-bold">12% Trust</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#94A3B8] w-[12%] rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-[#0F172A] font-semibold">After: Citation &amp; Case Parity</span>
                    <span className="text-[#0891B2] font-bold">100% Parity</span>
                  </div>
                  <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0891B2] w-full rounded-full" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  Provenance &amp; Citation Gaps
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  When your service pages lack structured case study proof and consistent local directory listings, AI models treat your claims as unverified marketing.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                <a
                  href="#operational-pipeline"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#0284C7] hover:text-[#0369A1]"
                >
                  <span>Inspect Stage 03: Citation Proof</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: THE 4-STAGE CLARITY PIPELINE
          Surface: Crisp White (#FFFFFF) with 1px solid #E5E7EB borders
          H2: #0F172A | Body: #475569 (Steel Grey) | Active Tab: #0F172A
          Cards: Bordered with #E5E7EB; active stage panel in #F8FAFC with #E5E7EB border
          Gradient: 2px Cyan-to-Purple active top-border highlight on selected stage tab
          ========================================================================= */}
      <section
        id="operational-pipeline"
        className="border-y border-[#E5E7EB] bg-white py-24 text-[#0F172A]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase">
                Systematic Architecture
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
                The 4-Stage Clarity Pipeline
              </h2>
            </div>
            <p className="text-sm font-mono text-[#64748B] max-w-sm">
              Select any engineering stage below to inspect its deliverables and measured telemetry lift.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = idx === activePipelineIndex;
              return (
                <div
                  key={stage.num}
                  onClick={() => setActivePipelineIndex(idx)}
                  className={`rounded-2xl p-6 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden border ${
                    isSelected
                      ? 'bg-[#F8FAFC] border-[#E5E7EB] shadow-md'
                      : 'bg-white border-[#E5E7EB] hover:bg-[#F8FAFC]/60'
                  }`}
                >
                  {/* 2px Cyan-to-Purple Active Top-Border Highlight on Selected Stage */}
                  {isSelected ? (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-focal-gradient" />
                  ) : (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E5E7EB]" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4 pt-1">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                          isSelected
                            ? 'bg-[#0F172A] text-white'
                            : 'bg-[#F8FAFC] text-[#64748B] border border-[#E5E7EB]'
                        }`}
                      >
                        STAGE {stage.num}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#64748B] font-semibold">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#0F172A]">
                      {stage.num} {stage.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#0891B2] mt-0.5 mb-3">
                      {stage.subtitle}
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    <ul className="space-y-2 border-t border-[#E5E7EB] pt-4 text-xs text-[#475569] font-mono">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0891B2]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-xs">
                    <span className="text-[#64748B]">{stage.metricLabel}</span>
                    <span className="font-bold text-[#0F172A]">{stage.metricValue}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: COMMERCIAL ARCHITECTURE
          Surface: Soft Architectural Grey (#F8FAFC) with 1px solid #E5E7EB borders
          H2: #0F172A | Body & SKU: #475569 / #64748B (Steel Grey) | Price: #0F172A
          Featured ($995): #FFFFFF card with 2px solid #0891B2 border + elevated shadow
          Secondary Tiers: #FFFFFF with 1px solid #E5E7EB
          Gradient: None on pricing cards (maximises commercial clarity)
          Primary CTA: Solid #0F172A (Obsidian) button with #FFFFFF text on $995 card;
                       #E5E7EB ghost buttons on secondary tiers
          ========================================================================= */}
      <section
        id="commercial-pathways"
        ref={commercialRef}
        className="border-y border-[#E5E7EB] bg-[#F8FAFC] py-24 text-[#0F172A] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Parallax Header */}
          <div className="max-w-2xl mb-16 parallax-comm-header">
            <div data-aos="fade-up" data-aos-duration="750">
              <span className="inline-block rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#64748B] uppercase">
                Fixed-Scope Commercial Architecture
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A]">
                Start with diagnostic certainty.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]">
                We never prescribe implementation without a diagnostic baseline. Start with the standalone Strategic Blueprint and credit 100% of your fee toward execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Card: Strategic Blueprint ($995 AUD) */}
            <div className="lg:col-span-7 flex parallax-comm-primary">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                className="w-full rounded-2xl border-2 border-[#0891B2] bg-white p-8 sm:p-10 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-[#0891B2]/10 text-[#0891B2] font-mono text-xs font-bold tracking-wider uppercase">
                      RECOMMENDED FOUNDATION
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#64748B] uppercase">
                      SKU: BPSTRAT • 5-DAY SLA
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                    Strategic Blueprint
                  </h3>

                  <div className="mt-4 mb-6 flex items-baseline gap-2.5">
                    <span className="text-5xl font-extrabold text-[#0F172A]">
                      $995
                    </span>
                    <span className="text-sm font-mono text-[#475569]">
                      AUD ex. GST · Standalone Audit &amp; 90-Day Roadmap
                    </span>
                  </div>

                  <hr className="my-6 border-[#E5E7EB]" />

                  <p className="text-base text-[#475569] leading-relaxed mb-6">
                    A comprehensive technical crawl, Knowledge Graph entity audit, competitor query matrix, and prioritised 90-day remediation plan delivered in 5 business days.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-6 border-b border-[#E5E7EB] text-sm text-[#0F172A]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span>Full JSON-LD &amp; Entity Salience Scorecard</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span>ChatGPT, Gemini &amp; Perplexity Retrieval Audit</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span>Competitor Semantic Dominance Breakdown</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                      <span>Complimentary Technical Onboarding ($0.00)</span>
                    </div>
                  </div>

                  {/* Law of Proximity Credit Guarantee */}
                  <div className="my-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB]">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <strong className="text-[#0F172A] font-mono uppercase mr-2">
                        100% Credit Guarantee:
                      </strong>
                      Your entire $995 Blueprint fee is credited toward AEO Foundation or Sprints within 60 days.
                    </p>
                  </div>
                </div>

                {/* Primary Commercial CTA: Solid #0F172A (Obsidian) Button with #FFFFFF Text */}
                <div className="pt-2">
                  <Link
                    href="/solutions/aeo-blueprint"
                    className="w-full py-4 px-6 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-base shadow-sm flex items-center justify-center gap-3 transition-all"
                  >
                    <span>Commission Strategic Blueprint</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Tiers Column: #FFFFFF with 1px solid #E5E7EB + #E5E7EB Ghost Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-6 parallax-comm-secondary">
              {/* Tier 2: AEO Foundation */}
              <div
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
                className="p-8 rounded-2xl border border-[#E5E7EB] bg-white shadow-xs flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      TURNKEY IMPLEMENTATION
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#475569]">
                      90-DAY FOUNDATION
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    AEO Foundation
                  </h3>
                  <div className="mt-3 mb-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#0F172A]">$1,980</span>
                    <span className="text-xs font-mono text-[#64748B]">AUD / mo ex. GST</span>
                  </div>
                  <hr className="my-4 border-[#E5E7EB]" />
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    End-to-end engineering across up to 10 core commercial pages: custom JSON-LD entity graphs, direct-answer passages, and directory citation parity.
                  </p>
                </div>
                <div>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#E5E7EB] hover:bg-[#D1D5DB] text-xs font-mono font-semibold text-[#0F172A] transition-all"
                  >
                    <span>Learn More · Foundation Scope</span>
                    <ChevronRight className="w-4 h-4 text-[#0F172A]" />
                  </Link>
                </div>
              </div>

              {/* Tier 3: AEO Sprints */}
              <div
                data-aos="fade-left"
                data-aos-duration="850"
                data-aos-delay="180"
                className="p-8 rounded-2xl border border-[#E5E7EB] bg-white shadow-xs flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      MODULAR EXECUTION
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#F59E0B]">
                      3-5 DAYS SLA
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    AEO Sprints
                  </h3>
                  <div className="mt-3 mb-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#0F172A]">From $495</span>
                    <span className="text-xs font-mono text-[#64748B]">AUD ex. GST</span>
                  </div>
                  <hr className="my-4 border-[#E5E7EB]" />
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    Discrete, surgical micro-sprints targeting single-page schema deployment, Google Business Profile reconciliation, or llms.txt agent manifests.
                  </p>
                </div>
                <div>
                  <Link
                    href="/solutions/aeo-sprint"
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#E5E7EB] hover:bg-[#D1D5DB] text-xs font-mono font-semibold text-[#0F172A] transition-all"
                  >
                    <span>Explore Sprint Catalogue</span>
                    <ChevronRight className="w-4 h-4 text-[#0F172A]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: VERIFIED TELEMETRY LEDGER & CLOSING CTA
          Surface: Obsidian Dark (#0B0D12)
          H2 & Metrics: #FFFFFF | Subtext: #CBD5E1 | Footer Meta: #94A3B8
          Ledger Container: #111622 with #1E293B internal grid dividers
          Gradient: Cyan-to-Purple on 83.69% salience metric and closing headline highlight
          Closing CTA: Solid #22D3EE button ("Start Free Scan ->")
          ========================================================================= */}
      <section id="empirical-evidence" className="bg-[#0B0D12] py-24 pb-32 text-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {/* Part A: Verified Telemetry Ledger (Baby Bento Case Study) */}
          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="inline-block rounded-full border border-[#1E293B] bg-[#111622] px-3 py-1 text-xs font-mono font-semibold tracking-wider text-[#94A3B8] uppercase mb-4">
                  Verified Telemetry Ledger
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  17% Sales Uplift via [AEO]
                </h2>
                <p className="text-base sm:text-lg text-[#CBD5E1] mt-3 max-w-2xl">
                  How Australian family ecommerce brand Baby Bento recovered its organic visibility in H2 and achieved 83.69% AI salience share.
                </p>
              </div>

              {/* Interactive Before/After State Toggle */}
              <div className="inline-flex rounded-full bg-[#111622] p-1.5 border border-[#1E293B] self-start">
                <button
                  type="button"
                  onClick={() => setCaseStudyView('before')}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                    caseStudyView === 'before'
                      ? 'bg-[#22D3EE] text-[#090D16] font-bold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Pre-AEO Baseline
                </button>
                <button
                  type="button"
                  onClick={() => setCaseStudyView('after')}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                    caseStudyView === 'after'
                      ? 'bg-[#22D3EE] text-[#090D16] font-bold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Post-90 Day Telemetry
                </button>
              </div>
            </div>

            {/* Ledger Container in #111622 with #1E293B internal grid dividers */}
            <div className="rounded-2xl bg-[#111622] border border-[#1E293B] p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left 5 Cols: Key Metrics Readout */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-xl bg-[#0B0D12] border border-[#1E293B]">
                    <div className="font-mono text-xs text-[#94A3B8] uppercase">
                      ENTITY SALIENCE SHARE SHIFT
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-xl font-mono text-[#94A3B8] line-through">
                        11.89%
                      </span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-focal-gradient">
                        {caseStudyView === 'after' ? '83.69%' : '11.89%'}
                      </span>
                    </div>
                    <div className="mt-2 font-mono text-xs text-[#CBD5E1]">
                      +17% Direct H2 Sales Uplift · +71.80% Salience Expansion
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0B0D12] border border-[#1E293B]">
                      <div className="font-mono text-xs text-[#94A3B8]">AVG. CITATION RANK</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {caseStudyView === 'after' ? '#1.4' : '#64.6'}
                      </div>
                      <div className="font-mono text-xs text-[#94A3B8] mt-1">
                        From Pos 64.6 → Top Tier
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B0D12] border border-[#1E293B]">
                      <div className="font-mono text-xs text-[#94A3B8]">PASSAGE EXTRACTION</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {caseStudyView === 'after' ? '4.8x' : '1.0x'}
                      </div>
                      <div className="font-mono text-xs text-[#22D3EE] mt-1">
                        Direct Answer Rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 7 Cols: Clean Telemetry Bars */}
                <div className="lg:col-span-7 p-6 rounded-xl bg-[#0B0D12] border border-[#1E293B] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                      VERIFIED AI VISIBILITY SIGNALS (BABY BENTO)
                    </span>
                    <span className="font-mono text-xs text-[#94A3B8]">
                      GSC + LLM LOGS
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#CBD5E1]">Product Entity Grounding</span>
                      <span className="text-white font-bold">
                        {caseStudyView === 'after' ? '92%' : '19%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#111622] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#22D3EE] rounded-full transition-all duration-700"
                        style={{ width: caseStudyView === 'after' ? '92%' : '19%' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#CBD5E1]">Knowledge Graph Corridor Depth</span>
                      <span className="text-white font-bold">
                        {caseStudyView === 'after' ? '88%' : '15%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#111622] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#22D3EE] rounded-full transition-all duration-700"
                        style={{ width: caseStudyView === 'after' ? '88%' : '15%' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#CBD5E1]">Non-Toxic Specification Queries</span>
                      <span className="text-white font-bold">
                        {caseStudyView === 'after' ? '86%' : '14%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#111622] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0891B2] rounded-full transition-all duration-700"
                        style={{ width: caseStudyView === 'after' ? '86%' : '14%' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#CBD5E1]">Direct Answer Synthesis</span>
                      <span className="text-white font-bold">
                        {caseStudyView === 'after' ? '84%' : '8%'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#111622] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0891B2] rounded-full transition-all duration-700"
                        style={{ width: caseStudyView === 'after' ? '84%' : '8%' }}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#94A3B8]">
                    <span>Verified: Baby Bento → Product Schema → Empirical Logs</span>
                    <Link
                      href="/knowledge-hub/case-studies/baby-bento"
                      className="text-[#22D3EE] hover:underline font-bold"
                    >
                      Inspect Full Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Closing CTA Banner */}
          <div
            id="final-conversion-panel"
            ref={finalPosterRef}
            className="max-w-3xl mx-auto rounded-2xl bg-[#111622] border border-[#1E293B] p-8 sm:p-14 text-center space-y-6 shadow-2xl"
          >
            <span className="inline-block rounded-full border border-[#1E293B] bg-[#0B0D12] px-3.5 py-1 text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
              Fixed Scope • Zero Retainer Lock-In
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Find out what conversational AI{' '}
              <span className="font-extrabold text-focal-gradient">
                truly understands
              </span>{' '}
              about your business.
            </h2>

            <p className="text-base text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
              Run an instant baseline scan of your Australian business domain or book a 15-minute diagnostic briefing with our engineering team in Perth.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-5">
              {/* Primary Closing CTA: Solid #22D3EE Button */}
              <button
                type="button"
                onClick={scrollToHeroInstrument}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#22D3EE] hover:bg-cyan-300 text-[#090D16] font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Start Free Scan</span>
                <span aria-hidden="true">→</span>
              </button>

              <Link
                href="/book"
                className="text-sm font-semibold text-[#CBD5E1] hover:text-white underline decoration-[#1E293B] hover:decoration-[#22D3EE] underline-offset-8 transition-all"
              >
                Book a 15-Minute Diagnostic Briefing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="bg-[#0B0D12] border-t border-[#1E293B] py-12 text-xs text-[#94A3B8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-base">
              AEO<span className="text-[#22D3EE]">bility</span>
            </span>
            <span>© {new Date().getFullYear()} AEObility (ABN 61 029 803 255). Dianella, WA 6059.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/brand-facts" className="hover:text-white transition-colors">Brand Facts</Link>
            <Link href="/solutions/aeo-blueprint" className="hover:text-white transition-colors">Strategic Blueprint</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
