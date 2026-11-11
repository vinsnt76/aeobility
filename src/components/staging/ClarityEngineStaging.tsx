'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
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
    subtitle: 'Entity Tri-Graphs',
    tag: 'ACTIVE FOUNDATION',
    barClass: 'bar-gradient-cyan',
    accentColor: '#00E5FF',
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
    tag: 'SEMANTIC CORRIDORS',
    barClass: 'bar-gradient-violet',
    accentColor: '#8B3DFF',
    description:
      'Bind commercial services to Australian geographic catchment nodes, author hierarchical isPartOf corridors, and eliminate orphaned content silos.',
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
    tag: 'EVIDENCE GRAPH',
    barClass: 'bar-gradient-magenta',
    accentColor: '#E60067',
    description:
      'Inject empirical subjectOf case proof loops, reconcile third-party directory parity, and establish verifiable citation authority across RAG indexes.',
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
    tag: 'TELEMETRY LOOP',
    barClass: 'bar-gradient-emerald',
    accentColor: '#00E660',
    description:
      'Benchmark LLM recommendation frequency, track passage extraction share across ChatGPT, Gemini, and Perplexity, and audit hallucination drift.',
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
    <div className="min-h-screen bg-[#06080E] text-[#D4D4D8] font-sans selection:bg-[#00E5FF] selection:text-[#06080E] relative overflow-x-clip">
      {/* =========================================================================
          AEOBILITY BRAND SHEET PALETTE & 3D CHROME TOKENS
          Extracted directly from the uploaded AEObility Brand Colour Sheet
          ========================================================================= */}
      <style>{`
        :root {
          --canvas-deep: #06080E;
          --canvas-surface: #0D111A;
          --aeo-cyan: #00E5FF;
          --aeo-violet: #8B3DFF;
          --aeo-magenta: #E60067;
          --aeo-emerald: #00E660;
          --aeo-cobalt: #264ECA;
          --aeo-amber: #E59500;
          --aeo-coral: #DC4236;
          --aeo-slate: #333B48;
        }

        /* 8 Brand Sheet Gradient Ramps */
        .bar-gradient-cyan {
          background: linear-gradient(90deg, #074F57 0%, #00B4C8 45%, #00E5FF 100%);
        }
        .bar-gradient-violet {
          background: linear-gradient(90deg, #3B1C71 0%, #6828D6 45%, #8B3DFF 100%);
        }
        .bar-gradient-magenta {
          background: linear-gradient(90deg, #590A31 0%, #B80052 45%, #E60067 100%);
        }
        .bar-gradient-emerald {
          background: linear-gradient(90deg, #085428 0%, #00B84C 45%, #00E660 100%);
        }
        .bar-gradient-cobalt {
          background: linear-gradient(90deg, #0B1536 0%, #193282 45%, #264ECA 100%);
        }
        .bar-gradient-amber {
          background: linear-gradient(90deg, #573706 0%, #B87400 45%, #E59500 100%);
        }
        .bar-gradient-coral {
          background: linear-gradient(90deg, #591914 0%, #B02E24 45%, #DC4236 100%);
        }
        .bar-gradient-slate {
          background: linear-gradient(90deg, #161920 0%, #242A34 50%, #333B48 100%);
        }

        /* 3D Shaded Pill Buttons from Right Column of Brand Sheet */
        .btn-brand-cyan {
          background: linear-gradient(180deg, #26ECFF 0%, #00C4DB 52%, #075963 100%);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.65),
            inset 0 -2px 4px rgba(0, 0, 0, 0.45),
            0 10px 28px -4px rgba(0, 229, 255, 0.4);
          color: #05080C;
        }
        .btn-brand-cyan:hover {
          filter: brightness(1.08);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.8),
            0 14px 34px -4px rgba(0, 229, 255, 0.55);
        }

        .btn-brand-violet {
          background: linear-gradient(180deg, #9E5BFF 0%, #7C2AE8 55%, #3B1C71 100%);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.45),
            inset 0 -2px 4px rgba(0, 0, 0, 0.5),
            0 10px 25px -4px rgba(139, 61, 255, 0.35);
          color: #FFFFFF;
        }

        .btn-brand-emerald {
          background: linear-gradient(180deg, #29FF7F 0%, #00CC52 55%, #085428 100%);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.6),
            inset 0 -2px 4px rgba(0, 0, 0, 0.45),
            0 10px 25px -4px rgba(0, 230, 96, 0.35);
          color: #05080C;
        }

        /* 3D Duotone Spheres using Brand Sheet Swatches */
        .sphere-cyan-violet-3d {
          background: radial-gradient(circle at 30% 28%, #00E5FF 0%, #264ECA 44%, #7C2AE8 76%, #1B073B 100%);
          box-shadow:
            inset -12px -16px 28px rgba(0, 0, 0, 0.65),
            inset 6px 8px 18px rgba(180, 248, 255, 0.45),
            0 24px 60px rgba(0, 229, 255, 0.28);
        }

        .sphere-magenta-violet-3d {
          background: radial-gradient(circle at 30% 28%, #FF2E88 0%, #E60067 38%, #7C2AE8 74%, #1A0536 100%);
          box-shadow:
            inset -14px -18px 30px rgba(0, 0, 0, 0.7),
            inset 6px 8px 18px rgba(255, 180, 215, 0.4),
            0 28px 65px rgba(230, 0, 103, 0.32);
        }

        .sphere-emerald-cyan-3d {
          background: radial-gradient(circle at 32% 28%, #00E660 0%, #00B4C8 55%, #0B1536 100%);
          box-shadow:
            inset -8px -10px 20px rgba(0, 0, 0, 0.65),
            0 16px 40px rgba(0, 230, 96, 0.28);
        }

        /* 3D Brand Torus Rings (Cyan-Violet & Amber-Magenta) */
        .torus-brand-cyan-violet {
          background: conic-gradient(
            from 160deg at 50% 50%,
            #00E5FF 0deg,
            #8B3DFF 95deg,
            #1D1040 165deg,
            #E60067 235deg,
            #00E660 305deg,
            #00E5FF 360deg
          );
          -webkit-mask: radial-gradient(transparent 53%, #000 55%);
          mask: radial-gradient(transparent 53%, #000 55%);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.75);
        }

        .torus-brand-amber-magenta {
          background: conic-gradient(
            from 180deg at 50% 50%,
            #FFE082 0deg,
            #E59500 80deg,
            #590A31 155deg,
            #E60067 230deg,
            #8B3DFF 300deg,
            #FFE082 360deg
          );
          -webkit-mask: radial-gradient(transparent 53%, #000 55%);
          mask: radial-gradient(transparent 53%, #000 55%);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.75);
        }

        /* Translucent Frosted Glass Card with Top & Left Specular Edge Illumination */
        .glass-poster-card {
          background:
            linear-gradient(145deg, rgba(20, 26, 42, 0.72) 0%, rgba(11, 15, 25, 0.84) 52%, rgba(8, 11, 19, 0.90) 100%) padding-box,
            linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(0, 229, 255, 0.38) 28%, rgba(139, 61, 255, 0.16) 65%, rgba(230, 0, 103, 0.22) 100%) border-box;
          border: 1px solid transparent;
          backdrop-filter: blur(28px) saturate(150%);
          -webkit-backdrop-filter: blur(28px) saturate(150%);
          box-shadow:
            inset 1px 1px 0 0 rgba(255, 255, 255, 0.22),
            0 24px 60px -16px rgba(0, 0, 0, 0.75);
        }

        .glass-cyan-card {
          background:
            linear-gradient(160deg, rgba(11, 21, 54, 0.85) 0%, rgba(8, 11, 18, 0.94) 100%) padding-box,
            linear-gradient(135deg, #00E5FF 0%, #8B3DFF 50%, #E60067 100%) border-box;
          border: 1.5px solid transparent;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 28px 60px -15px rgba(0, 229, 255, 0.18), 0 20px 45px -10px rgba(0, 0, 0, 0.85);
        }

        .reference-pill {
          border: 1px solid rgba(0, 229, 255, 0.4);
          background: rgba(11, 21, 54, 0.55);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
        }

        /* Brand Sheet Glow on 'bility' and Headline Accents */
        .aeo-cyan-glow {
          color: #00E5FF;
          text-shadow: 0 0 18px rgba(0, 229, 255, 0.45);
        }

        .text-brand-spectrum {
          background: linear-gradient(90deg, #00E5FF 0%, #8B3DFF 52%, #FF1476 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .spectrum-bottom-bar {
          background: linear-gradient(90deg, #FF007F 0%, #8B3DFF 38%, #264ECA 70%, #00E5FF 100%);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-14deg); }
          50% { transform: translateY(-8px) rotate(-10deg); }
        }

        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(18deg); }
          50% { transform: translateY(7px) rotate(23deg); }
        }

        .animate-torus-left { animation: floatSlow 7s ease-in-out infinite; }
        .animate-torus-right { animation: floatSlowReverse 8s ease-in-out infinite; }
      `}</style>

      {/* Top Full-Width Brand Spectrum Hairline (from bottom of Brand Sheet) */}
      <div className="w-full h-1 spectrum-bottom-bar" />

      {/* =========================================================================
          1. HEADER & GLOBAL NAVIGATION
          Features exact Isometric 3-Layer Diamond Stack Logo from Brand Sheet
          ========================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#06080E]/88 backdrop-blur-[20px] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Official AEObility Isometric 3-Layer Stack Icon + Glowing Cyan 'bility' */}
          <Link
            href="/staging/clarity-engine"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B101B] border border-white/15 flex items-center justify-center shadow-inner">
              {/* Isometric 3-Layer Stack SVG matching Brand Sheet */}
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                {/* Top Cyan Diamond */}
                <path
                  d="M16 4L27 10.5L16 17L5 10.5L16 4Z"
                  stroke="#00E5FF"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Middle Dotted Vector Layer */}
                <circle cx="9" cy="16" r="1.3" fill="#FFFFFF" />
                <circle cx="13.5" cy="18.5" r="1.3" fill="#FFFFFF" />
                <circle cx="18.5" cy="18.5" r="1.3" fill="#FFFFFF" />
                <circle cx="23" cy="16" r="1.3" fill="#FFFFFF" />
                {/* Bottom Electric Violet Chevron */}
                <path
                  d="M5 20.5L16 27L27 20.5"
                  stroke="#8B3DFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                AEO<span className="aeo-cyan-glow">bility</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[#00E5FF] bg-[#0B1536]/80 border border-[#00E5FF]/30 px-2.5 py-0.5 rounded-full">
                CLARITY ENGINE
              </span>
            </div>
          </Link>

          {/* Center: Restrained plain text links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#D4D4D8]">
            <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
              Services
            </Link>
            <a href="#operational-pipeline" className="hover:text-[#00E5FF] transition-colors">
              How AEO Works
            </a>
            <a href="#empirical-evidence" className="hover:text-[#00E5FF] transition-colors">
              Evidence (Case Studies)
            </a>
            <a href="#commercial-pathways" className="hover:text-[#00E5FF] transition-colors">
              Pricing &amp; Sprints
            </a>
            <Link href="/knowledge-hub" className="hover:text-[#00E5FF] transition-colors">
              Knowledge Hub
            </Link>
          </nav>

          {/* Right: 3D Shaded Pill CTA matching Top Bar of Brand Sheet ("Get AI Ready / Free Scan") */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={scrollToHeroInstrument}
              className="px-6 py-2.5 rounded-full btn-brand-cyan font-extrabold text-sm tracking-wide active:scale-95 transition-all cursor-pointer"
            >
              Free Scan
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
          <div className="lg:hidden bg-[#0D111A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
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
                className="w-full py-3 rounded-full btn-brand-cyan font-extrabold text-sm"
              >
                Free Scan
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. HERO SECTION: "THE CLARITY ENGINE"
          Uses Brand Sheet Cyan -> Violet -> Magenta Duotone Spheres & 8-Bar Swatches
          ========================================================================= */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          
          {/* Left Column: Orientation & Cognitive Anchoring (7 cols) */}
          <div className="lg:col-span-7 space-y-7 relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full reference-pill">
              <span className="w-2 h-2 rounded-full bg-[#00E660] shadow-[0_0_10px_#00E660] animate-pulse" />
              <span className="font-mono text-xs tracking-wide text-white font-medium">
                Answer Engine Optimisation for Australian Entities
              </span>
            </div>

            {/* H1 with Cyan-to-Violet-to-Magenta Brand Spectrum Highlight */}
            <h1 className="text-4xl sm:text-6xl lg:text-[66px] xl:text-[72px] font-bold tracking-tight text-white leading-[1.06]">
              Get your business{' '}
              <span className="font-extrabold italic text-brand-spectrum">
                found and chosen
              </span>{' '}
              in AI search.
            </h1>

            {/* Supporting Narrative */}
            <p className="text-lg sm:text-xl text-[#D4D4D8] leading-relaxed max-w-[58ch] font-normal">
              AEObility re-architects your commercial offerings, entities, and citations into deterministic data triples so ChatGPT, Gemini, and Perplexity choose your brand.
            </p>

            {/* Frictionless Pathway (Muted Secondary Ghost Action for Von Restorff Isolation) + Reassurance Micro-Copy */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href="#commercial-pathways"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-[#00E5FF]/50 text-white font-semibold text-sm transition-all group w-fit"
              >
                <span>Explore The 90-Day Blueprint</span>
                <span className="w-6 h-6 rounded-full bg-black/40 border border-white/30 flex items-center justify-center text-xs text-[#00E5FF]">
                  ↓
                </span>
              </a>

              <div className="text-xs sm:text-sm font-mono text-[#CBD5E1] tracking-wide">
                Fixed scope · Australian specialist · Zero retainer lock-in
              </div>
            </div>

            {/* Mini Telemetry Bar Preview with High-Contrast Labels */}
            <div className="pt-5 grid grid-cols-3 gap-4 max-w-lg border-t border-white/[0.10]">
              <div>
                <div className="font-mono text-[11px] text-[#CBD5E1] uppercase">Sales Uplift [AEO]</div>
                <div className="text-xl font-extrabold text-[#00E5FF] mt-0.5">+17% Verified</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#CBD5E1] uppercase">Salience Lift</div>
                <div className="text-xl font-extrabold text-[#FF2E88] mt-0.5">11.9% → 83.7%</div>
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#CBD5E1] uppercase">Fee Credit-Back</div>
                <div className="text-xl font-extrabold text-[#00E660] mt-0.5">100% Applied</div>
              </div>
            </div>
          </div>

          {/* Right Column: The Live Diagnostic Instrument with Soft Neon-Cyan & Magenta Backlights (5 cols) */}
          <div
            className="lg:col-span-5 relative"
            id="hero-diagnostic-instrument"
            ref={heroInstrumentRef}
          >
            {/* --- DISCIPLINED SOFT NEON-CYAN & MAGENTA BACKLIGHTS --- */}
            {/* Top-Left Neon-Cyan & Cobalt Backlight Sphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full sphere-cyan-violet-3d opacity-75 blur-[6px] z-0"
            />
            {/* Bottom-Right Magenta & Violet Backlight Sphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -right-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full sphere-magenta-violet-3d opacity-75 blur-[8px] z-0"
            />

            {/* --- FROSTED REFRACTIVE GLASS INSTRUMENT CARD --- */}
            <div className="glass-poster-card rounded-[26px] p-6 sm:p-8 relative z-10">
              {/* Top Motif: Horizontal Line Left + Three Coloured Brand Dots Right */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-24 h-[2px] spectrum-bottom-bar rounded-full" />
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B3DFF]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E60067]" />
                </div>
              </div>

              {/* Instrument Header */}
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05070C]/90 border border-[#00E5FF]/45">
                  <span className="w-2 h-2 rounded-full bg-[#00E660] animate-pulse" />
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#00E5FF] font-semibold">
                    GET AI READY • LIVE DIAGNOSTIC
                  </span>
                </div>

                <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                  Can conversational AI{' '}
                  <span className="italic font-extrabold aeo-cyan-glow">recommend</span> your business?
                </h2>
              </div>

              {/* Crisp Input Geometries with >= 4.5:1 WCAG AA Label & Placeholder Contrast */}
              <form
                onSubmit={handleScanSubmit}
                className="p-4 sm:p-5 rounded-2xl bg-[#06080E]/85 border border-white/15 space-y-4"
              >
                <div>
                  <label
                    htmlFor="domain-input"
                    className="block font-mono text-xs uppercase tracking-wider text-[#F1F5F9] font-semibold mb-2"
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
                    className="w-full px-4 py-3 rounded-full bg-[#05070C] border border-white/25 hover:border-white/40 text-white text-sm placeholder:text-[#94A3B8] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="query-input"
                    className="block font-mono text-xs uppercase tracking-wider text-[#F1F5F9] font-semibold mb-2"
                  >
                    Primary Customer Query / Intent
                  </label>
                  <input
                    id="query-input"
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder="e.g., best commercial solar installer Perth"
                    className="w-full px-4 py-3 rounded-full bg-[#05070C] border border-white/25 hover:border-white/40 text-white text-sm placeholder:text-[#94A3B8] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                {/* Von Restorff Isolated Primary Conversion Action */}
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full py-3.5 px-5 rounded-full btn-brand-cyan font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isScanning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#05080C] border-t-transparent rounded-full animate-spin" />
                      <span>Analysing Knowledge Tri-Graph...</span>
                    </>
                  ) : (
                    <>
                      <span>Get AI Ready · Free Scan</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>

              {/* Active Scanning Progress Bar */}
              {isScanning && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#06080E]/95 border border-[#00E5FF]/40 font-mono text-xs space-y-2">
                  <div className="flex justify-between text-[#00E5FF]">
                    <span>TELEMETRY PROBE ACTIVE</span>
                    <span>STEP {scanStage}/3</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full spectrum-bottom-bar transition-all duration-500"
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
                <div className="mt-4 p-4 rounded-xl bg-[#06080E]/95 border border-[#00E660]/50 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-xs text-[#00E660] font-bold truncate">
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
                    className="w-full py-2.5 px-3 rounded-lg bar-gradient-violet text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Launch Full Interactive Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* 4 Compact Telemetry Pills using Brand Sheet Swatches (Cyan, Violet, Magenta, Emerald) */}
              <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-2.5">
                <div className="px-3 py-2 rounded-xl bg-[#05070C]/90 border border-[#00E5FF]/40 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#CBD5E1]">Entity Salience</span>
                  <span className="font-mono text-xs font-bold text-[#00E5FF]">88%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#05070C]/90 border border-[#E60067]/45 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#CBD5E1]">Answer Coverage</span>
                  <span className="font-mono text-xs font-bold text-[#FF2E88]">91%</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#05070C]/90 border border-[#8B3DFF]/45 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#CBD5E1]">Provenance</span>
                  <span className="font-mono text-xs font-bold text-[#B485FF]">100% Parity</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#05070C]/90 border border-[#00E660]/45 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#CBD5E1]">AI State</span>
                  <span className="font-mono text-xs font-bold text-[#00E660]">Active Foundation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. SECTION 2: RECOGNITION & SURFACE STRIP
          ========================================================================= */}
      <section className="bg-[#06080E] border-y border-white/[0.08] py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#94A3B8] text-center lg:text-left">
            ENGINEERED FOR DETERMINISTIC RETRIEVAL ACROSS:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#94A3B8]">
            <span className="hover:text-[#00E5FF] transition-colors">ChatGPT Search</span>
            <span className="text-[#8B3DFF]">/</span>
            <span className="hover:text-[#00E5FF] transition-colors">Perplexity Sonar</span>
            <span className="text-[#8B3DFF]">/</span>
            <span className="hover:text-[#00E5FF] transition-colors">Google AI Overviews</span>
            <span className="text-[#8B3DFF]">/</span>
            <span className="hover:text-[#00E5FF] transition-colors">Gemini Flash</span>
            <span className="text-[#8B3DFF]">/</span>
            <span className="hover:text-[#00E5FF] transition-colors">Apple Intelligence</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION 3: DIAGNOSTIC GAPS
          Uses the Brand Sheet Gradient Bars (Cyan, Violet, Magenta, Emerald, Amber)
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
            <span className="italic font-extrabold text-brand-spectrum">cannot verify.</span>
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
                <div className="w-16 h-1 bar-gradient-cyan rounded-full" />
                <span className="font-mono text-[11px] text-[#00E5FF] font-bold">GAP 01 // IDENTITY</span>
              </div>

              <div className="p-4 rounded-xl bg-[#06080E]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Unverified Entity Graph</span>
                  <span className="text-[#DC4236] font-bold">24% Salience</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-coral w-[24%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">Tri-Graph @id Grounding</span>
                  <span className="text-[#00E5FF] font-bold">94% Salience</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-cyan w-[94%] rounded-full" />
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
              <span>Get AI Ready: Organization Tri-Graph</span>
              <span>→</span>
            </div>
          </div>

          {/* Module 2: Atomic Passage Gaps */}
          <div className="glass-poster-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-1 bar-gradient-magenta rounded-full" />
                <span className="font-mono text-[11px] text-[#FF2E88] font-bold">GAP 02 // PASSAGES</span>
              </div>

              <div className="p-4 rounded-xl bg-[#06080E]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Bloated Keyword Prose</span>
                  <span className="text-[#E59500] font-bold">18% Extracted</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-amber w-[18%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">90-Token Atomic Blocks</span>
                  <span className="text-[#00E660] font-bold">91% Extracted</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-emerald w-[91%] rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Atomic Passage Gaps
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Legacy SEO copy buries pricing, scope, and deliverables in 2,000-word walls of text. RAG pipelines require concise, self-contained 90-token answer blocks for direct synthesis.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#00E660]">
              <span>Become AI Fluent: Atomic Passages</span>
              <span>→</span>
            </div>
          </div>

          {/* Module 3: Provenance & Citation Gaps */}
          <div className="glass-poster-card rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-1 bar-gradient-violet rounded-full" />
                <span className="font-mono text-[11px] text-[#B485FF] font-bold">GAP 03 // PROVENANCE</span>
              </div>

              <div className="p-4 rounded-xl bg-[#06080E]/90 border border-white/10 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#94A3B8]">Unverified Claims</span>
                  <span className="text-[#E60067] font-bold">12% Trust</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-magenta w-[12%] rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-white">SameAs &amp; Case Proof Parity</span>
                  <span className="text-[#B485FF] font-bold">100% Parity</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bar-gradient-violet w-full rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5">
                Provenance &amp; Citation Gaps
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                When your services lack empirical subjectOf proof loops and consistent local directory parity, answer engines classify your claims as unsubstantiated marketing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#B485FF]">
              <span>Get Visible: Citation Consensus</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECTION 4: OPERATIONAL TECHNICAL PIPELINE
          01 Define → 02 Connect → 03 Prove → 04 Measure
          ========================================================================= */}
      <section id="operational-pipeline" className="py-24 bg-[#0D111A]/80 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#00E660]">
                  SYSTEMATIC ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                The 4-Stage{' '}
                <span className="italic font-extrabold aeo-cyan-glow">Clarity Pipeline</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-[#94A3B8] max-w-sm">
              Click any engineering stage below to inspect its technical deliverables and telemetry impact.
            </p>
          </div>

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
                      : 'bg-[#06080E]/90 border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className={`w-full h-1.5 rounded-full mb-5 ${stage.barClass}`} />
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-1 rounded text-white"
                        style={{ backgroundColor: isSelected ? stage.accentColor : 'rgba(255,255,255,0.06)', color: isSelected && stage.accentColor === '#00E5FF' ? '#05080C' : '#FFFFFF' }}
                      >
                        STAGE {stage.num}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: stage.accentColor }}>
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      {stage.num} {stage.name}
                    </h3>
                    <div className="text-xs font-mono mt-0.5 mb-3" style={{ color: stage.accentColor }}>
                      {stage.subtitle}
                    </div>

                    <p className="text-sm text-[#D4D4D8] leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#D4D4D8] font-mono">
                      {stage.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: stage.accentColor }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#94A3B8]">{stage.metricLabel}</span>
                    <span className="font-bold" style={{ color: stage.accentColor }}>{stage.metricValue}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECTION 5: COMMERCIAL PATHWAYS (Enforcing Hick's Law)
          Uses the 8-Bar Gradient System for Clear Visual Hierarchy
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
            <span className="italic font-extrabold text-brand-spectrum">certainty.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D8] mt-3 leading-relaxed">
            We never prescribe implementation without a diagnostic baseline. Start with the standalone Strategic Blueprint and credit 100% of your fee toward execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Strategic Blueprint ($995 AUD) */}
          <div className="lg:col-span-7 glass-cyan-card rounded-[26px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full sphere-cyan-violet-3d opacity-40"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-1 rounded-full bar-gradient-emerald text-[#05080C] font-mono text-xs font-extrabold tracking-wider uppercase">
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
                  <CheckCircle2 className="w-4 h-4 text-[#00E660] shrink-0 mt-0.5" />
                  <span>ChatGPT, Gemini &amp; Perplexity Retrieval Audit</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B3DFF] shrink-0 mt-0.5" />
                  <span>Competitor Semantic Dominance Breakdown</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E60067] shrink-0 mt-0.5" />
                  <span>Complimentary Technical Onboarding ($0.00)</span>
                </div>
              </div>

              <div className="my-6 p-4 rounded-xl bg-[#06080E]/90 border border-[#00E660]/40 flex items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-white">
                  <strong className="text-[#00E660] font-mono uppercase mr-2">100% Credit Guarantee:</strong>
                  Your entire $995 Blueprint fee is credited toward AEO Foundation or Sprints within 60 days.
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full py-4 px-6 rounded-full btn-brand-cyan font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all"
              >
                <span>Commission Strategic Blueprint</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Demoted Cards Column: AEO Foundation & AEO Sprints */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-[#0D111A]/90 border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="w-full h-1.5 bar-gradient-violet rounded-full mb-4" />
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    TURNKEY IMPLEMENTATION
                  </span>
                  <span className="font-mono text-xs text-[#B485FF]">90-DAY FOUNDATION</span>
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
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#D4D4D8] hover:text-white transition-all"
                >
                  <span>Learn More · Foundation Scope</span>
                  <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0D111A]/90 border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="w-full h-1.5 bar-gradient-magenta rounded-full mb-4" />
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    MODULAR EXECUTION
                  </span>
                  <span className="font-mono text-xs text-[#FF2E88]">3-5 DAYS SLA</span>
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
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#00E5FF]/40 text-xs font-mono font-semibold text-[#D4D4D8] hover:text-white transition-all"
                >
                  <span>Get Visible · Sprint Catalog</span>
                  <ChevronRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECTION 6: EMPIRICAL CASE STUDY PROOF
          Integrates the Top-Left "17% Sales Uplift via [AEO]" Card + 8-Bar Gradient Bars
          ========================================================================= */}
      <section id="empirical-evidence" className="py-24 bg-[#0D111A]/75 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full reference-pill mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF2E88]">
                  VERIFIED TELEMETRY LEDGER
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                17% Sales Uplift via{' '}
                <span className="font-extrabold aeo-cyan-glow">[AEO]</span>
              </h2>
              <p className="text-base sm:text-lg text-[#8B7BFF] font-medium mt-2 max-w-2xl">
                How a Family Ecommerce Business (Baby Bento) Recovered Its Traffic in H2 and Achieved 83.69% AI Salience Share.
              </p>
            </div>

            {/* Interactive Telemetry State Toggle */}
            <div className="inline-flex rounded-full bg-[#06080E] p-1.5 border border-white/15 self-start">
              <button
                type="button"
                onClick={() => setCaseStudyView('before')}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                  caseStudyView === 'before'
                    ? 'bar-gradient-magenta text-white'
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
                    ? 'bar-gradient-cyan text-[#05080C] font-bold'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Post-90 Day Telemetry
              </button>
            </div>
          </div>

          <div className="glass-poster-card rounded-[26px] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 5 Cols: Key Metrics Readout */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-6 rounded-2xl bg-[#06080E]/90 border border-white/10 relative overflow-hidden">
                  <div className="font-mono text-xs text-[#94A3B8] uppercase">
                    ENTITY SALIENCE SHARE SHIFT
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-2xl font-mono text-[#94A3B8] line-through">
                      11.89%
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold aeo-cyan-glow">
                      {caseStudyView === 'after' ? '83.69%' : '11.89%'}
                    </span>
                  </div>
                  <div className="mt-2 font-mono text-xs text-[#00E660]">
                    +17% Direct H2 Sales Uplift · +71.80% Salience Expansion
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#06080E]/90 border border-white/10">
                    <div className="font-mono text-[11px] text-[#94A3B8]">AVG. CITATION RANK</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {caseStudyView === 'after' ? '#1.4' : '#64.6'}
                    </div>
                    <div className="font-mono text-[11px] text-[#FF2E88] mt-1">
                      From Pos 64.6 → Top Tier
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080E]/90 border border-white/10">
                    <div className="font-mono text-[11px] text-[#94A3B8]">PASSAGE EXTRACTION</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00E660] mt-1">
                      {caseStudyView === 'after' ? '4.8x' : '1.0x'}
                    </div>
                    <div className="font-mono text-[11px] text-[#00E5FF] mt-1">
                      Direct RAG Answer Rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Brand Sheet Horizontal Gradient Bars */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#06080E]/90 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                    AI VISIBILITY SPECTRUM (BRAND TELEMETRY BARS)
                  </span>
                  <span className="font-mono text-xs text-[#00E5FF]">
                    GSC + LLM LOGS
                  </span>
                </div>

                {/* Bar 1: Cyan Gradient */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Get AI Ready · Product Entity Grounding</span>
                    <span className="text-[#00E5FF] font-bold">
                      {caseStudyView === 'after' ? '92%' : '19%'}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bar-gradient-cyan rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '92%' : '19%' }}
                    />
                  </div>
                </div>

                {/* Bar 2: Violet Gradient */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Free Scan · Knowledge Graph Corridor Depth</span>
                    <span className="text-[#B485FF] font-bold">
                      {caseStudyView === 'after' ? '88%' : '15%'}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bar-gradient-violet rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '88%' : '15%' }}
                    />
                  </div>
                </div>

                {/* Bar 3: Magenta Gradient */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Get Visible · Non-Toxic Specification Queries</span>
                    <span className="text-[#FF2E88] font-bold">
                      {caseStudyView === 'after' ? '86%' : '14%'}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bar-gradient-magenta rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '86%' : '14%' }}
                    />
                  </div>
                </div>

                {/* Bar 4: Emerald Gradient */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Become AI Fluent · Direct Answer Synthesis</span>
                    <span className="text-[#00E660] font-bold">
                      {caseStudyView === 'after' ? '84%' : '8%'}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bar-gradient-emerald rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '84%' : '8%' }}
                    />
                  </div>
                </div>

                {/* Bar 5: Amber Gradient */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white">Get Visible · Commercial Purchase Intent</span>
                    <span className="text-[#E59500] font-bold">
                      {caseStudyView === 'after' ? '79%' : '11%'}
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bar-gradient-amber rounded-full transition-all duration-700"
                      style={{ width: caseStudyView === 'after' ? '79%' : '11%' }}
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
          Uses the Brand Sheet Cyan-Violet and Magenta-Violet 3D Spheres
          ========================================================================= */}
      <section className="py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center mb-12">
          <div className="px-6 py-2 rounded-full reference-pill text-xs sm:text-sm font-mono text-white tracking-wider">
            AEObility Clarity Engine • Become AI Fluent
          </div>
        </div>

        <div
          id="final-conversion-panel"
          ref={finalPosterRef}
          className="relative max-w-2xl mx-auto"
        >
          {/* Disciplined Soft Neon-Cyan & Magenta Backlight Spheres */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 sm:w-56 sm:h-56 rounded-full sphere-cyan-violet-3d opacity-75 blur-[6px] z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-12 w-52 h-52 sm:w-60 sm:h-60 rounded-full sphere-magenta-violet-3d opacity-75 blur-[8px] z-0"
          />

          {/* Refractive Glass Poster Card */}
          <div className="glass-poster-card rounded-[28px] p-8 sm:p-14 relative z-10 text-center space-y-8">
            <div className="flex items-center justify-between">
              <div className="w-28 sm:w-36 h-[2px] spectrum-bottom-bar rounded-full" />
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B3DFF]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E660]" />
              </div>
            </div>

            <div className="py-5 px-4 sm:px-6 rounded-2xl bg-[#06080E]/80 border border-white/10 space-y-5">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                &ldquo;Find out what conversational models{' '}
                <span className="font-extrabold italic text-brand-spectrum">
                  truly understand
                </span>{' '}
                about your business.&rdquo;
              </h2>

              <p className="text-sm sm:text-base font-medium text-[#D4D4D8] max-w-md mx-auto">
                - AEObility Diagnostic Architecture (Perth, WA)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={scrollToHeroInstrument}
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-brand-cyan font-extrabold text-sm sm:text-base tracking-wide transition-all cursor-pointer"
              >
                Get AI Ready · Start Free Scan
              </button>

              <Link
                href="/book"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-[#00E5FF]/50 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book a 15-Minute Diagnostic Briefing</span>
                <span className="w-5 h-5 rounded-full bg-black/40 border border-white/30 flex items-center justify-center text-[10px] text-[#00E5FF]">
                  ›
                </span>
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#D4D4D8]">
              <span>Deterministic Entity &amp; Schema Objects</span>
              <span className="w-6 h-6 rounded-full border border-[#00E5FF]/70 text-[#00E5FF] flex items-center justify-center">
                ›
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <div className="px-6 py-2 rounded-full reference-pill text-xs font-mono text-white tracking-widest uppercase">
            Fixed Scope &nbsp;|&nbsp; Zero Retainer Lock-In
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FOOTER + FULL-WIDTH BOTTOM SPECTRUM BAR
          ========================================================================= */}
      <footer className="bg-[#06080E] border-t border-white/[0.08] py-12 text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-base">
              AEO<span className="aeo-cyan-glow">bility</span>
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
      {/* Bottom Full-Width Brand Spectrum Bar (matching bottom edge of uploaded Brand Sheet) */}
      <div className="w-full h-2 spectrum-bottom-bar" />
    </div>
  );
}
