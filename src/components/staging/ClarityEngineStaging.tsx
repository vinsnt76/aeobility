'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
  Database,
  BarChart3
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
    subtitle: 'Entity Tri-Graphs',
    tag: 'ACTIVE FOUNDATION',
    description:
      'Establish canonical @id URI nodes, map official ABN and ASIC registration records, and construct unambiguous machine-readable identity schemas.',
    deliverables: [
      'Canonical @id URI root architecture',
      'ABN / ASIC deterministic entity binding',
      'Lexical & phonetic brand disambiguation'
    ],
    metricLabel: 'Entity Salience Lift',
    metricValue: '+71.8%'
  },
  {
    num: '02',
    name: 'Connect',
    subtitle: 'Schema Lattice',
    description:
      'Bind commercial services to Australian geographic catchment nodes, author hierarchical isPartOf corridors, and eliminate orphaned content silos.',
    tag: 'SEMANTIC CORRIDORS',
    deliverables: [
      'Service-to-location knowledge corridors',
      '90-token atomic answer block formatting',
      'Multi-intent query fan-out alignment'
    ],
    metricLabel: 'Query Fan-Out Coverage',
    metricValue: '91.4%'
  },
  {
    num: '03',
    name: 'Prove',
    subtitle: 'Citation Grounding',
    description:
      'Inject empirical subjectOf case proof loops, reconcile third-party directory parity, and establish verifiable citation authority across RAG indexes.',
    tag: 'EVIDENCE GRAPH',
    deliverables: [
      'Empirical subjectOf proof triples',
      'Cross-platform sameAs registry consensus',
      'Verifiable quantitative outcome claims'
    ],
    metricLabel: 'Citation Parity Score',
    metricValue: '100%'
  },
  {
    num: '04',
    name: 'Measure',
    subtitle: 'AI Retrieval Salience',
    description:
      'Benchmark LLM recommendation frequency, track passage extraction share across ChatGPT, Gemini, and Perplexity, and audit hallucination drift.',
    tag: 'TELEMETRY LOOP',
    deliverables: [
      'Multi-model citation share tracking',
      'Positional bias & extraction diagnostics',
      '90-day salience progression ledger'
    ],
    metricLabel: 'Target Citation State',
    metricValue: 'Top-Tier (1.4)'
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
    <div className="min-h-screen bg-[#08090C] text-[#D4D4D8] font-sans selection:bg-[#D4FF00] selection:text-[#08090C] relative overflow-x-clip">
      {/*Scoped Custom Styles for 3D Reference Spheres, Metallic Gold Toruses, and Frosted Specular Glass */}
      <style>{`
        :root {
          --canvas-deep: #08090C;
          --canvas-surface: #0D1117;
          --canvas-card: rgba(14, 18, 26, 0.78);
          --card-border-glow: rgba(255, 255, 255, 0.12);
          --orb-orange: radial-gradient(circle at 32% 30%, #FF9E44 0%, #FF6D00 35%, #D84315 68%, #4E1402 100%);
          --orb-violet: radial-gradient(circle at 32% 30%, #7C66FF 0%, #4936FF 40%, #210CAE 72%, #090238 100%);
          --orb-blue: radial-gradient(circle at 35% 35%, #00E5FF 0%, #0077B6 60%, #03045E 100%);
          --aeo-cyan: #00E5FF;
          --aeo-magenta: #E91E63;
          --aeo-lime: #D4FF00;
        }

        /* 3D Tactile Spheres from Reference Image */
        .sphere-orange-3d {
          background: radial-gradient(circle at 32% 28%, #FFAD5C 0%, #FF7315 36%, #C63600 72%, #3E0E00 100%);
          box-shadow:
            inset -12px -16px 28px rgba(0, 0, 0, 0.65),
            inset 6px 8px 18px rgba(255, 210, 160, 0.35),
            0 24px 60px rgba(255, 109, 0, 0.28);
        }

        .sphere-violet-3d {
          background: radial-gradient(circle at 30% 28%, #8F7BFF 0%, #4E33FF 38%, #230B9E 74%, #07012C 100%);
          box-shadow:
            inset -14px -18px 30px rgba(0, 0, 0, 0.7),
            inset 6px 8px 18px rgba(190, 180, 255, 0.35),
            0 28px 65px rgba(73, 54, 255, 0.35);
        }

        /* 3D Metallic Gold Orbital Torus Ring from Reference Image */
        .gold-torus-3d {
          background: conic-gradient(
            from 160deg at 50% 50%,
            #FFF3B0 0deg,
            #D49B27 55deg,
            #5C3D00 115deg,
            #FFD56B 175deg,
            #FFF6CC 215deg,
            #9E6B08 280deg,
            #422B00 325deg,
            #FFF3B0 360deg
          );
          -webkit-mask: radial-gradient(transparent 53%, #000 55%);
          mask: radial-gradient(transparent 53%, #000 55%);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.75);
        }

        /* Reference Image Specular Frosted Glass Container - Translucent so 3D spheres refract through */
        .glass-poster-card {
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(15, 18, 30, 0.52) 42%, rgba(10, 12, 22, 0.64) 75%, rgba(60, 40, 220, 0.12) 100%) padding-box,
            linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.14) 38%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0.35) 100%) border-box;
          border: 1px solid transparent;
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          box-shadow: 0 32px 70px -12px rgba(0, 0, 0, 0.78);
        }

        .glass-cyan-card {
          background:
            linear-gradient(160deg, rgba(13, 19, 30, 0.90) 0%, rgba(9, 12, 18, 0.95) 100%) padding-box,
            linear-gradient(135deg, rgba(0, 229, 255, 0.65) 0%, rgba(212, 255, 0, 0.25) 40%, rgba(255, 255, 255, 0.06) 100%) border-box;
          border: 1px solid transparent;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 28px 60px -15px rgba(0, 229, 255, 0.15), 0 20px 45px -10px rgba(0, 0, 0, 0.8);
        }

        /* Reference Pill Outline (Glass Morphism Quotes Template style) */
        .reference-pill {
          border: 1px solid rgba(255, 255, 255, 0.42);
          background: rgba(8, 9, 12, 0.65);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-14deg); }
          50% { transform: translateY(-8px) rotate(-10deg); }
        }

        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(18deg); }
          50% { transform: translateY(7px) rotate(23deg); }
        }

        .animate-torus-left {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .animate-torus-right {
          animation: floatSlowReverse 8s ease-in-out infinite;
        }
      `}</style>

      {/* =========================================================================
          1. HEADER & GLOBAL NAVIGATION
          Restrained glass bar: blur(20px), rgba(8, 9, 12, 0.85)
          ========================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#08090C]/85 backdrop-blur-[20px] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Brand mark with cyan geometric node icon */}
          <Link
            href="/staging/clarity-engine"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0D1117] border border-white/15 flex items-center justify-center shadow-inner relative">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="#00E5FF" />
                <circle cx="18" cy="6" r="2.5" fill="#D4FF00" />
                <circle cx="12" cy="18" r="3" fill="#00E5FF" />
                <path d="M8 7.2L11 15.5M16 7.2L13 15.5M8.5 6H15.5" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.6" />
              </svg>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                AEO<span className="text-[#00E5FF]">bility</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4FF00] bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-full">
                CLARITY ENGINE
              </span>
            </div>
          </Link>

          {/* Center: Restrained plain text links (No pill borders around links) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#D4D4D8]">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <a href="#operational-pipeline" className="hover:text-white transition-colors">
              How AEO Works
            </a>
            <a href="#empirical-evidence" className="hover:text-white transition-colors">
              Evidence (Case Studies)
            </a>
            <a href="#commercial-pathways" className="hover:text-white transition-colors">
              Pricing &amp; Sprints
            </a>
            <Link href="/knowledge-hub" className="hover:text-white transition-colors">
              Knowledge Hub
            </Link>
          </nav>

          {/* Right: Single high-contrast conversion button */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={scrollToHeroInstrument}
              className="px-5 py-2.5 rounded-lg bg-[#00E5FF] text-[#08090C] font-bold text-sm tracking-wide hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-[0_0_24px_rgba(0,229,255,0.28)]"
            >
              Start Free Scan
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D4D4D8] hover:text-white hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D1117]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Services
            </Link>
            <a
              href="#operational-pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              How AEO Works
            </a>
            <a
              href="#empirical-evidence"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Evidence (Case Studies)
            </a>
            <a
              href="#commercial-pathways"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Pricing &amp; Sprints
            </a>
            <Link
              href="/knowledge-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Knowledge Hub
            </Link>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToHeroInstrument();
                }}
                className="w-full py-3 rounded-lg bg-[#00E5FF] text-[#08090C] font-bold text-sm"
              >
                Start Free Scan
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. HERO SECTION: "THE CLARITY ENGINE"
          Asymmetric 2-Column Desktop Grid with Reference 3D Spheres & Gold Toruses
          ========================================================================= */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          
          {/* Left Column: Orientation & Cognitive Anchoring (7 cols) */}
          <div className="lg:col-span-7 space-y-7 relative z-10">
            {/* Reference-style Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full reference-pill">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
              <span className="font-mono text-xs tracking-wide text-white font-medium">
                Answer Engine Optimisation for Australian Entities
              </span>
            </div>

            {/* H1 with Reference Bold-Italic Lime-Gold (#D4FF00) Highlight */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.06]">
              Get your business{' '}
              <span className="font-extrabold italic text-[#D4FF00] drop-shadow-[0_0_28px_rgba(212,255,0,0.22)]">
                found and chosen
              </span>{' '}
              in AI search.
            </h1>

            {/* Supporting Narrative (WCAG 2.2 AA High-Contrast Corridor) */}
            <p className="text-lg sm:text-xl text-[#D4D4D8] leading-relaxed max-w-[58ch] font-normal">
              AEObility re-architects your commercial offerings, entities, and citations into deterministic data triples so ChatGPT, Gemini, and Perplexity choose your brand.
            </p>

            {/* Frictionless Pathway + Reassurance Micro-Copy */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href="#commercial-pathways"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full reference-pill text-white font-semibold text-sm hover:border-[#D4FF00] transition-all group w-fit"
              >
                <span>Explore The 90-Day Blueprint</span>
                <span className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#D4FF00] group-hover:text-[#D4FF00] transition-colors text-xs">
                  ↓
                </span>
              </a>

              <div className="text-xs sm:text-sm font-mono text-[#94A3B8] tracking-wide">
                Fixed scope · Australian specialist · Zero retainer lock-in
              </div>
            </div>

            {/* Mini Telemetry Bar Preview */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.08]">
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Salience Lift</div>
                <div className="text-xl font-extrabold text-[#00E5FF] mt-0.5">11.9% → 83.7%</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Blueprint SLA</div>
                <div className="text-xl font-extrabold text-white mt-0.5">5 Bus. Days</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#94A3B8] uppercase">Fee Credit-Back</div>
                <div className="text-xl font-extrabold text-[#D4FF00] mt-0.5">100% Applied</div>
              </div>
            </div>
          </div>

          {/* Right Column: The Live Diagnostic Instrument Framed in the Reference Glass Composition (5 cols) */}
          <div
            className="lg:col-span-5 relative"
            id="hero-diagnostic-instrument"
            ref={heroInstrumentRef}
          >
            {/* --- REFERENCE IMAGE 3D SPHERES & METALLIC GOLD TORUSES --- */}
            {/* Top-Left Warm Orange 3D Sphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -left-12 w-52 h-52 sm:w-60 sm:h-60 rounded-full sphere-orange-3d z-0"
            />
            {/* Top-Center Small Ultramarine Satellite Orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-7 left-[40%] w-8 h-8 rounded-full sphere-violet-3d z-0"
            />
            {/* Left Floating 3D Metallic Gold Torus Ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[24%] -left-9 w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-torus-3d animate-torus-left z-20"
            />
            {/* Right Floating 3D Metallic Gold Torus Ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[24%] -right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-torus-3d animate-torus-right z-20"
            />
            {/* Bottom-Right Deep Ultramarine/Violet 3D Sphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -right-12 w-56 h-56 sm:w-64 sm:h-64 rounded-full sphere-violet-3d z-0"
            />
            {/* Bottom-Center Small Warm Orange Satellite Orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 left-[46%] w-7 h-7 rounded-full sphere-orange-3d z-20"
            />

            {/* --- FROSTED REFRACTIVE GLASS INSTRUMENT CARD --- */}
            <div className="glass-poster-card rounded-[26px] p-6 sm:p-8 relative z-10">
              {/* Reference Card Top Motif: Horizontal Line Left + Three Hollow Circles Right */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-24 h-[1.5px] bg-white/60 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full border border-white/75" />
                  <span className="w-2 h-2 rounded-full border border-white/75" />
                  <span className="w-2 h-2 rounded-full border border-white/75" />
                </div>
              </div>

              {/* Instrument Header */}
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08090C]/75 border border-white/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-white font-semibold">
                    AI VISIBILITY SNAPSHOT • LIVE V4.2
                  </span>
                </div>

                <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                  Can conversational AI{' '}
                  <span className="italic font-extrabold text-[#D4FF00]">recommend</span> your business?
                </h2>
              </div>

              {/* Dark Semi-Translucent Form Backing for WCAG 2.2 AA legibility + Warm/Cool Sphere Refraction */}
              <form
                onSubmit={handleScanSubmit}
                className="p-4 sm:p-5 rounded-2xl bg-[#08090C]/65 backdrop-blur-md border border-white/15 space-y-4"
              >
                <div>
                  <label
                    htmlFor="domain-input"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#D4D4D8] mb-1.5"
                  >
                    Australian Business Domain
                  </label>
                  <input
                    id="domain-input"
                    type="text"
                    required
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    placeholder="e.g., yourcompany.com.au"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#08090C] border border-white/20 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="query-input"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#D4D4D8] mb-1.5"
                  >
                    Primary Customer Query / Intent
                  </label>
                  <input
                    id="query-input"
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder="e.g., best commercial solar installer Perth"
                    className="w-full px-3.5 py-3 rounded-xl bg-[#08090C] border border-white/20 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                {/* Single Dominant Hero Trigger */}
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#00E5FF] hover:bg-[#33ECFF] active:scale-[0.99] text-[#08090C] font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,229,255,0.35)]"
                >
                  {isScanning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#08090C] border-t-transparent rounded-full animate-spin" />
                      <span>Analysing Knowledge Tri-Graph...</span>
                    </>
                  ) : (
                    <>
                      <span>Analyse My AI Visibility</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>

              {/* Active Scanning Progress Bar */}
              {isScanning && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#08090C]/95 border border-[#00E5FF]/40 font-mono text-xs space-y-2">
                  <div className="flex justify-between text-[#00E5FF]">
                    <span>TELEMETRY PROBE ACTIVE</span>
                    <span>STEP {scanStage}/3</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00E5FF] via-[#D4FF00] to-[#E91E63] transition-all duration-500"
                      style={{ width: `${(scanStage / 3) * 100}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-[#D4D4D8]">
                    {scanStage === 1 && '1. Inspecting JSON-LD @id nodes & ABN registry parity...'}
                    {scanStage === 2 && '2. Computing vector cosine similarity for customer query...'}
                    {scanStage === 3 && '3. Scoring passage extractability across RAG endpoints...'}
                  </div>
                </div>
              )}

              {/* Simulated Output Drawer */}
              {simulationResult && (
                <div className="mt-4 p-4 rounded-xl bg-[#08090C]/95 border border-[#D4FF00]/50 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-xs text-[#D4FF00] font-bold truncate">
                      TARGET: {simulationResult.domain}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30">
                      {simulationResult.recommendationState}
                    </span>
                  </div>
                  <p className="text-xs text-[#D4D4D8] leading-relaxed">
                    {simulationResult.verdictSummary}
                  </p>
                  <Link
                    href={`/diagnostic?url=${encodeURIComponent(simulationResult.domain)}&intent=${encodeURIComponent(simulationResult.query)}&auto=true`}
                    className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Launch Full Interactive Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4FF00]" />
                  </Link>
                </div>
              )}

              {/* Live Telemetry Preview (4 Compact Data Tiles from Case Study Dashboard) */}
              <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-2.5">
                <div className="px-3 py-2 rounded-xl bg-[#08090C]/85 border border-[#00E5FF]/35 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#94A3B8]">Entity Salience</span>
                  <span className="font-mono text-xs font-bold text-[#00E5FF]">88%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#08090C]/85 border border-[#E91E63]/40 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#94A3B8]">Answer Coverage</span>
                  <span className="font-mono text-xs font-bold text-[#E91E63]">91%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#08090C]/85 border border-[#5338FF]/45 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#94A3B8]">Provenance</span>
                  <span className="font-mono text-xs font-bold text-[#A594FF]">100% Parity</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#08090C]/85 border border-[#D4FF00]/40 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#94A3B8]">AI State</span>
                  <span className="font-mono text-xs font-bold text-[#D4FF00]">Optimised</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. SECTION 2: RECOGNITION & SURFACE STRIP
          Low-profile dark slate band (#08090C) with subdued monochrome endpoints
          ========================================================================= */}
      <section className="bg-[#08090C] border-y border-white/[0.07] py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#94A3B8] text-center lg:text-left">
            ENGINEERED FOR DETERMINISTIC RETRIEVAL ACROSS:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#94A3B8]">
            <span className="hover:text-white transition-colors">ChatGPT Search</span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">Perplexity Sonar</span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">Google AI Overviews</span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">Gemini Flash</span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">Apple Intelligence</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION 3: DIAGNOSTIC GAPS ("AI cannot choose what it cannot verify")
          3 Glass-framed modules with miniature dashboard telemetry bars & node vectors
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#00E5FF]">
              DIAGNOSTIC FAILURE MODES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            AI cannot choose what it{' '}
            <span className="italic font-extrabold text-[#D4FF00]">cannot verify.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D8] mt-4 leading-relaxed">
            Most Australian business websites suffer from three structural blind spots that cause generative answer engines to skip them in favour of clearer competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Module 1: Identity & Entity Gaps */}
          <div className="glass-poster-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-[1.5px] bg-white/50" />
                <span className="font-mono text-[11px] text-[#E91E63] font-bold">GAP 01 // IDENTITY</span>
              </div>

              {/* Miniature Dashboard Diagram */}
              <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Unverified Entity Graph</span>
                  <span className="text-[#E91E63] font-bold">24% Salience</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E91E63] w-[24%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">Tri-Graph @id Grounding</span>
                  <span className="text-[#00E5FF] font-bold">94% Salience</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00E5FF] w-[94%] rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Identity &amp; Entity Gaps
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Unconnected ABN/ASIC registry nodes and missing canonical @id anchors force LLMs to guess who you are, often conflating your brand with similarly named entities.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#00E5FF]">
              <span>Fix: Deterministic Organization Tri-Graph</span>
              <span>→</span>
            </div>
          </div>

          {/* Module 2: Atomic Passage Gaps */}
          <div className="glass-poster-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-[1.5px] bg-white/50" />
                <span className="font-mono text-[11px] text-[#00E5FF] font-bold">GAP 02 // PASSAGES</span>
              </div>

              {/* Miniature Dashboard Diagram */}
              <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Bloated Keyword Prose</span>
                  <span className="text-[#E91E63] font-bold">18% Extracted</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E91E63] w-[18%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">90-Token Atomic Blocks</span>
                  <span className="text-[#D4FF00] font-bold">91% Extracted</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4FF00] w-[91%] rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Atomic Passage Gaps
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Legacy SEO copy buries pricing, scope, and deliverables in 2,000-word walls of text. RAG pipelines require concise, self-contained 90-token answer blocks for direct synthesis.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#D4FF00]">
              <span>Fix: Atomic Answer Block Engineering</span>
              <span>→</span>
            </div>
          </div>

          {/* Module 3: Provenance & Citation Gaps */}
          <div className="glass-poster-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-[1.5px] bg-white/50" />
                <span className="font-mono text-[11px] text-[#A594FF] font-bold">GAP 03 // PROVENANCE</span>
              </div>

              {/* Miniature Dashboard Diagram */}
              <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Unverified Claims</span>
                  <span className="text-[#E91E63] font-bold">12% Trust</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E91E63] w-[12%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">SameAs &amp; Case Proof Parity</span>
                  <span className="text-[#5338FF] font-bold">100% Parity</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5338FF] w-full rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Provenance &amp; Citation Gaps
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                When your services lack empirical subjectOf proof loops and consistent local directory parity, answer engines classify your claims as unsubstantiated marketing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#A594FF]">
              <span>Fix: Multi-Registry Citation Consensus</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION 4: OPERATIONAL TECHNICAL PIPELINE
          01 Define → 02 Connect → 03 Prove → 04 Measure
          ========================================================================= */}
      <section id="operational-pipeline" className="py-24 bg-[#0D1117]/70 border-y border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#D4FF00]">
                  SYSTEMATIC ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                The 4-Stage{' '}
                <span className="italic font-extrabold text-[#00E5FF]">Clarity Pipeline</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-[#94A3B8] max-w-sm">
              Click any engineering stage below to inspect its technical deliverables and telemetry impact.
            </p>
          </div>

          {/* 4-Stage Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = idx === activePipelineIndex;
              return (
                <div
                  key={stage.num}
                  onClick={() => setActivePipelineIndex(idx)}
                  className={`rounded-2xl p-6 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'glass-cyan-card scale-[1.01]'
                      : 'bg-[#08090C]/90 border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                          isSelected
                            ? 'bg-[#00E5FF] text-[#08090C]'
                            : 'bg-white/5 text-[#94A3B8]'
                        }`}
                      >
                        STAGE {stage.num}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#D4FF00]">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      {stage.num} {stage.name}
                    </h3>
                    <div className="text-xs font-mono text-[#00E5FF] mt-0.5 mb-3">
                      {stage.subtitle}
                    </div>

                    <p className="text-sm text-[#D4D4D8] leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#D4D4D8] font-mono">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#94A3B8]">{stage.metricLabel}</span>
                    <span className="font-bold text-[#00E5FF]">{stage.metricValue}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECTION 5: COMMERCIAL PATHWAYS (Enforcing Hick's Law)
          Strategic Blueprint ($995 AUD) elevated as Dominant Entry Point
          ========================================================================= */}
      <section id="commercial-pathways" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#00E5FF]">
              FIXED-SCOPE COMMERCIAL ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Start with diagnostic{' '}
            <span className="italic font-extrabold text-[#D4FF00]">certainty.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D8] mt-3 leading-relaxed">
            We never prescribe implementation without a diagnostic baseline. Start with the standalone Strategic Blueprint and credit 100% of your fee toward execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Strategic Blueprint ($995 AUD) - DOMINANT RECOMMENDED ENTRY POINT */}
          <div className="lg:col-span-7 glass-cyan-card rounded-[26px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle decorative top-right orange orb glow inside blueprint card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full sphere-orange-3d opacity-40 blur-[2px]"
            />

            <div className="relative z-10">
              {/* Top line & dots motif */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#D4FF00] text-[#08090C] font-mono text-xs font-extrabold tracking-wider uppercase">
                  RECOMMENDED FOUNDATION
                </span>
                <span className="font-mono text-xs text-[#00E5FF] font-semibold">
                  SKU: BPSTRAT • 5-DAY SLA
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Strategic Blueprint
              </h3>

              <div className="mt-4 mb-6 flex items-baseline gap-2.5">
                <span className="text-5xl sm:text-6xl font-extrabold text-white">
                  $995
                </span>
                <span className="text-sm font-mono text-[#94A3B8]">
                  AUD ex. GST · Standalone Audit &amp; 90-Day Roadmap
                </span>
              </div>

              <p className="text-base text-[#D4D4D8] leading-relaxed mb-6 max-w-[58ch]">
                A comprehensive technical crawl, Knowledge Graph entity audit, competitor query fan-out matrix, and prioritised 90-day remediation plan delivered in 5 business days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-6 border-b border-white/10 text-sm text-white">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Full JSON-LD &amp; Entity Salience Scorecard</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>ChatGPT, Gemini &amp; Perplexity Retrieval Audit</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Competitor Semantic Dominance Breakdown</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Complimentary Technical Onboarding ($0.00)</span>
                </div>
              </div>

              {/* 100% Risk-Reversal Credit Callout */}
              <div className="my-6 p-4 rounded-xl bg-[#08090C]/90 border border-[#D4FF00]/40 flex items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-white">
                  <strong className="text-[#D4FF00] font-mono uppercase mr-2">100% Credit Guarantee:</strong>
                  Your entire $995 Blueprint fee is credited toward AEO Foundation or Sprints within 60 days.
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full py-4 px-6 rounded-xl bg-[#00E5FF] hover:bg-[#33ECFF] text-[#08090C] font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <span>Commission Strategic Blueprint</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Demoted Cards Column: AEO Foundation & AEO Sprints (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: AEO Foundation */}
            <div className="p-7 rounded-2xl bg-[#0D1117]/80 border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    TURNKEY IMPLEMENTATION
                  </span>
                  <span className="font-mono text-xs text-[#00E5FF]">90-DAY FOUNDATION</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  AEO Foundation
                </h3>
                <div className="mt-2 mb-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">$1,980</span>
                  <span className="text-xs font-mono text-[#94A3B8]">AUD / mo ex. GST</span>
                </div>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  End-to-end engineering across up to 10 core commercial pages: custom JSON-LD tri-graphs, atomic answer passages, and multi-registry citation parity.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold text-white transition-all"
                >
                  <span>Explore Foundation Scope</span>
                  <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>

            {/* Card 3: AEO Sprints */}
            <div className="p-7 rounded-2xl bg-[#0D1117]/80 border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    MODULAR EXECUTION
                  </span>
                  <span className="font-mono text-xs text-[#E91E63]">3–5 DAYS SLA</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  AEO Sprints
                </h3>
                <div className="mt-2 mb-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">From $495</span>
                  <span className="text-xs font-mono text-[#94A3B8]">AUD ex. GST</span>
                </div>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Discrete, surgical micro-sprints targeting single-page schema deployment, local GMB entity reconciliation, or llms.txt agent manifests.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/solutions/aeo-sprint"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold text-white transition-all"
                >
                  <span>Browse Sprint Catalog</span>
                  <ChevronRight className="w-4 h-4 text-[#E91E63]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECTION 6: EMPIRICAL CASE STUDY PROOF (Direct from Dashboard Reference)
          Salience Share shift: 11.89% → 83.69%, Multi-colored horizontal topical bars
          ========================================================================= */}
      <section id="empirical-evidence" className="py-24 bg-[#0D1117]/60 border-y border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#E91E63]">
                  VERIFIED TELEMETRY LEDGER
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Empirical Proof:{' '}
                <span className="italic font-extrabold text-[#D4FF00]">Baby Bento</span> Case Study
              </h2>
              <p className="text-base sm:text-lg text-[#D4D4D8] mt-3 max-w-2xl">
                How deterministic schema lattices and atomic answer passages shifted an Australian e-commerce brand from page-6 obscurity to primary AI citation status.
              </p>
            </div>

            {/* Interactive Telemetry State Toggle */}
            <div className="inline-flex rounded-xl bg-[#08090C] p-1 border border-white/15 self-start">
              <button
                type="button"
                onClick={() => setCaseStudyView('before')}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  caseStudyView === 'before'
                    ? 'bg-[#E91E63] text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Pre-AEO Baseline
              </button>
              <button
                type="button"
                onClick={() => setCaseStudyView('after')}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  caseStudyView === 'after'
                    ? 'bg-[#00E5FF] text-[#08090C]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Post-90 Day Telemetry
              </button>
            </div>
          </div>

          {/* High-Fidelity Telemetry Dashboard Card */}
          <div className="glass-poster-card rounded-[26px] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 5 Cols: Key Metrics Readout */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#08090C]/90 border border-white/10">
                  <div className="font-mono text-xs text-[#94A3B8] uppercase">
                    ENTITY SALIENCE SHARE SHIFT
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-2xl font-mono text-[#94A3B8] line-through">
                      11.89%
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#00E5FF]">
                      {caseStudyView === 'after' ? '83.69%' : '11.89%'}
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-xs text-[#D4FF00]">
                    +71.80% Net Salience Expansion in 90 Days
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#08090C]/90 border border-white/10">
                    <div className="font-mono text-[11px] text-[#94A3B8]">AVG. CITATION RANK</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {caseStudyView === 'after' ? '#1.4' : '#64.6'}
                    </div>
                    <div className="font-mono text-[11px] text-[#E91E63] mt-1">
                      From Pos 64.6 → Top Tier
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#08090C]/90 border border-white/10">
                    <div className="font-mono text-[11px] text-[#94A3B8]">PASSAGE EXTRACTION</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#D4FF00] mt-1">
                      {caseStudyView === 'after' ? '4.8x' : '1.0x'}
                    </div>
                    <div className="font-mono text-[11px] text-[#00E5FF] mt-1">
                      Direct RAG Answer Rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Multi-Coloured Horizontal Topical Distribution Bars */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#08090C]/90 border border-white/10 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    TOPICAL SALIENCE &amp; CITATION DISTRIBUTION
                  </span>
                  <span className="font-mono text-xs text-[#00E5FF]">
                    GSC + LLM RETRIEVAL LOGS
                  </span>
                </div>

                {/* Bar 1: Cyan (#00E5FF) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Commercial Product Entity Grounding</span>
                    <span className="text-[#00E5FF] font-bold">
                      {caseStudyView === 'after' ? '92%' : '19%'}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00E5FF] rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '92%' : '19%' }}
                    />
                  </div>
                </div>

                {/* Bar 2: Magenta (#E91E63) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Non-Toxic Material Specification Queries</span>
                    <span className="text-[#E91E63] font-bold">
                      {caseStudyView === 'after' ? '86%' : '14%'}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E91E63] rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '86%' : '14%' }}
                    />
                  </div>
                </div>

                {/* Bar 3: Purple/Indigo (#5338FF) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Australian Category Comparison Prompts</span>
                    <span className="text-[#A594FF] font-bold">
                      {caseStudyView === 'after' ? '79%' : '9%'}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#5338FF] rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '79%' : '9%' }}
                    />
                  </div>
                </div>

                {/* Bar 4: Lime (#D4FF00) */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Direct Purchase Recommendation Synthesis</span>
                    <span className="text-[#D4FF00] font-bold">
                      {caseStudyView === 'after' ? '84%' : '8%'}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4FF00] rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '84%' : '8%' }}
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Verified Triple: Baby Bento → Product Schema → Empirical Logs</span>
                  <Link
                    href="/knowledge-hub/case-studies/baby-bento"
                    className="text-[#00E5FF] hover:underline font-bold"
                  >
                    Inspect Full Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. SECTION 7: FIXED-SCOPE GUARANTEE & FINAL POSTER CONVERSION
          Centered Glass Poster directly mirroring the uploaded Reference Image
          ========================================================================= */}
      <section className="py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Reference Pill Header */}
        <div className="flex justify-center mb-12">
          <div className="px-6 py-2 rounded-full reference-pill text-xs sm:text-sm font-mono text-white tracking-wider">
            AEObility Clarity Engine • Ready To Deploy
          </div>
        </div>

        {/* Central Poster Composition with 3D Spheres & Gold Torus Rings */}
        <div
          id="final-conversion-panel"
          ref={finalPosterRef}
          className="relative max-w-2xl mx-auto"
        >
          {/* Top-Left Large Warm Orange 3D Sphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 -left-14 w-48 h-48 sm:w-56 sm:h-56 rounded-full sphere-orange-3d z-0"
          />
          {/* Top-Center Small Blue-Violet Orb */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-[43%] w-8 h-8 rounded-full sphere-violet-3d z-0"
          />
          {/* Left Floating Metallic Gold Torus Ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[28%] -left-9 w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-torus-3d animate-torus-left z-20"
          />
          {/* Right Floating Metallic Gold Torus Ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[25%] -right-9 w-16 h-16 sm:w-20 sm:h-20 rounded-full gold-torus-3d animate-torus-right z-20"
          />
          {/* Bottom-Right Large Deep Ultramarine/Violet 3D Sphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-14 -right-14 w-52 h-52 sm:w-60 sm:h-60 rounded-full sphere-violet-3d z-0"
          />
          {/* Bottom-Center Small Orange Orb */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 left-[48%] w-7 h-7 rounded-full sphere-orange-3d z-20"
          />

          {/* Refractive Glass Poster Card */}
          <div className="glass-poster-card rounded-[28px] p-8 sm:p-14 relative z-10 text-center space-y-8">
            {/* Reference Top Line & Three Hollow Dots */}
            <div className="flex items-center justify-between">
              <div className="w-28 sm:w-36 h-[1.5px] bg-white/65 rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
                <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
                <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
              </div>
            </div>

            {/* Quote-Style Poster Headline with Bold Italic #D4FF00 */}
            <div className="py-4 px-4 sm:px-6 rounded-2xl bg-[#08090C]/75 border border-white/10 space-y-5">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                &ldquo;Find out what conversational models{' '}
                <span className="font-extrabold italic text-[#D4FF00]">
                  truly understand
                </span>{' '}
                about your business.&rdquo;
              </h2>

              <p className="text-sm sm:text-base font-medium text-[#D4D4D8] max-w-md mx-auto">
                - AEObility Diagnostic Architecture (Perth, WA)
              </p>
            </div>

            {/* Dual Action Corridor */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToHeroInstrument}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00E5FF] hover:bg-[#33ECFF] text-[#08090C] font-extrabold text-sm sm:text-base tracking-wide transition-all cursor-pointer shadow-[0_0_28px_rgba(0,229,255,0.35)]"
              >
                Start Your Free AI Visibility Scan
              </button>

              <Link
                href="/book"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#08090C]/90 hover:bg-white/10 text-white border border-white/25 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book a 15-Minute Diagnostic Briefing</span>
                <span className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center text-[10px]">
                  ›
                </span>
              </Link>
            </div>

            {/* Bottom Reference Card Footer */}
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#D4D4D8]">
              <span>Deterministic Entity &amp; Schema Objects</span>
              <span className="w-6 h-6 rounded-full border border-white/70 flex items-center justify-center">
                ›
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Reference Pill Footer */}
        <div className="flex justify-center mt-14">
          <div className="px-6 py-2 rounded-full reference-pill text-xs font-mono text-white tracking-widest uppercase">
            Fixed Scope &nbsp;|&nbsp; Zero Retainer Lock-In
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FOOTER
          ========================================================================= */}
      <footer className="bg-[#08090C] border-t border-white/[0.08] py-12 text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-base">
              AEO<span className="text-[#00E5FF]">bility</span>
            </span>
            <span>© {new Date().getFullYear()} AEObility (ABN 61 029 803 255). Dianella, WA 6059.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/brand-facts" className="hover:text-white transition-colors">Brand Facts</Link>
            <Link href="/solutions/aeo-blueprint" className="hover:text-white transition-colors">Strategic Blueprint</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
