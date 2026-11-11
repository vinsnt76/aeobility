'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Activity, 
  Compass, 
  Sparkles, 
  Lock, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight,
  Database,
  Share2,
  FileCheck
} from 'lucide-react';

interface DiagnosticResult {
  url: string;
  query: string;
  entityClarity: number;
  answerCoverage: number;
  evidenceStrength: number;
  recommendationState: 'Strong' | 'Moderate' | 'Limited' | 'Critical Gaps';
  keyFinding: string;
}

export default function ClarityEngineStaging() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessUrl, setBusinessUrl] = useState('');
  const [targetQuery, setTargetQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);

  const heroDiagnosticRef = useRef<HTMLDivElement>(null);
  const finalConversionRef = useRef<HTMLDivElement>(null);

  // Floating Elements Mitigation:
  // Conditionally hide or suppress the floating 'Chat with AI Bill' badge
  // whenever the hero diagnostic or final conversion panel is within the active viewport.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    let heroIntersecting = false;
    let finalIntersecting = false;

    const notifySuppression = () => {
      const shouldSuppress = heroIntersecting || finalIntersecting;
      window.dispatchEvent(
        new CustomEvent('aeo:suppress-bill', {
          detail: { suppress: shouldSuppress }
        })
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'hero-diagnostic-instrument') {
            heroIntersecting = entry.isIntersecting;
          }
          if (entry.target.id === 'final-conversion-panel') {
            finalIntersecting = entry.isIntersecting;
          }
        });
        notifySuppression();
      },
      { threshold: 0.15 }
    );

    const heroEl = heroDiagnosticRef.current;
    const finalEl = finalConversionRef.current;

    if (heroEl) observer.observe(heroEl);
    if (finalEl) observer.observe(finalEl);

    return () => {
      observer.disconnect();
      window.dispatchEvent(
        new CustomEvent('aeo:suppress-bill', {
          detail: { suppress: false }
        })
      );
    };
  }, []);

  const handleHeroScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessUrl.trim()) return;

    setIsScanning(true);
    setScanStep(1);
    setDiagnosticResult(null);

    // Step-by-step progress simulation
    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => {
      setIsScanning(false);
      setScanStep(0);
      setDiagnosticResult({
        url: businessUrl.trim(),
        query: targetQuery.trim() || 'General Business Capability',
        entityClarity: 82,
        answerCoverage: 61,
        evidenceStrength: 44,
        recommendationState: 'Limited',
        keyFinding: 'High entity recognition on home domain, but relationship triples to commercial services remain ambiguous in RAG retrieval tests.'
      });
    }, 2100);
  };

  const scrollToHeroScan = () => {
    heroDiagnosticRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#D4D4D8] selection:bg-[#00E5FF] selection:text-[#08090C] font-sans relative overflow-x-clip">
      
      {/* =========================================================================
          ATMOSPHERIC AMBIENT GLOWS (Confined strictly to viewport margins)
          WCAG 2.2 AA Contrast Rule: Never behind reading corridors or body copy.
          ========================================================================= */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#4936FF]/10 blur-[120px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[28%] -right-40 w-96 h-96 rounded-full bg-[#00E5FF]/8 blur-[130px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[70%] -left-32 w-80 h-80 rounded-full bg-[#FF641F]/6 blur-[140px]"
      />

      {/* =========================================================================
          NAVIGATION: Restrained Single-Tier Glass Bar
          ========================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#0D1117]/85 backdrop-blur-[16px] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo Pinned Left */}
          <Link 
            href="/staging/clarity-engine" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <span className="font-extrabold text-2xl tracking-tight text-white font-display">
              AEO<span className="text-[#00E5FF]">bility</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#94A3B8] border-l border-white/10 pl-2.5 py-0.5 hidden sm:inline-block">
              Clarity Engine
            </span>
          </Link>

          {/* Clean Text Links (Center / Right) - No pill borders or neon glows */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#D4D4D8]">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <a href="#operational-pipeline" className="hover:text-white transition-colors">
              How AEO Works
            </a>
            <a href="#evidence-proof" className="hover:text-white transition-colors">
              Evidence
            </a>
            <a href="#commercial-pathways" className="hover:text-white transition-colors">
              Pricing
            </a>
            <Link href="/knowledge-hub" className="hover:text-white transition-colors">
              Knowledge Hub
            </Link>
          </nav>

          {/* Single High-Contrast Dominant CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToHeroScan}
              className="px-5 py-2.5 rounded-lg bg-[#00E5FF] text-[#08090C] font-bold text-sm tracking-wide shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start Free Scan
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D4D4D8] hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D1117] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
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
              href="#evidence-proof" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Evidence
            </a>
            <a 
              href="#commercial-pathways" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#D4D4D8] hover:text-white"
            >
              Pricing
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToHeroScan();
                }}
                className="w-full text-center py-3 rounded-lg bg-[#00E5FF] text-[#08090C] font-bold text-sm tracking-wide"
              >
                Start Free Scan
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          SECTION 1: HERO ("The Clarity Engine" Asymmetric 52/48 Grid)
          ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Orientation & Narrative - 52% Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#D4D4D8]">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              Answer Engine Optimisation for Australian businesses
            </div>

            {/* H1: 64–76px desktop, 42–48px mobile, font-weight 700–800 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[66px] xl:text-[72px] font-extrabold tracking-tight text-white leading-[1.08]">
              Get your business <span className="text-[#00E5FF]">found and chosen</span> in AI search.
            </h1>

            {/* Value Narrative: Capped at 55–68 characters per line */}
            <p className="text-lg sm:text-xl text-[#D4D4D8] leading-relaxed max-w-[58ch]">
              AEObility structures your services, entities and evidence so ChatGPT, Gemini and other answer engines can understand when to recommend your business.
            </p>

            {/* Single Dominant Trigger Corridor:
                Left column CTA is a ghost pill with anchor link to prevent dual-CTA friction */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#operational-pipeline"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.14] font-medium text-sm transition-all"
              >
                See How AEO Works
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </a>

              {/* Reassurance Anchor */}
              <span className="text-xs sm:text-sm text-[#94A3B8] font-medium tracking-wide">
                Fixed scope · Australian specialist · No ongoing contract
              </span>
            </div>
          </div>

          {/* Right Column (The Hero Instrument / Interactive Diagnostic - 48% Desktop) */}
          <div className="lg:col-span-5" id="hero-diagnostic-instrument" ref={heroDiagnosticRef}>
            <div className="refractive-panel p-6 sm:p-8 bg-[#0A0C10]/95 backdrop-blur-[20px] shadow-2xl relative">
              
              {/* Header of the Instrument */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider font-semibold uppercase bg-cyan-950/70 border border-cyan-500/30 text-[#00E5FF]">
                    AI VISIBILITY SNAPSHOT
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-mono">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LIVE DIAGNOSTIC</span>
                </div>
              </div>

              <div className="pt-5 space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Can AI recommend your business?
                  </h2>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                    Enter your live domain and target customer query to inspect retrieval clarity.
                  </p>
                </div>

                {/* Form Fields with Dark Opaque Fill (#08090C) */}
                <form onSubmit={handleHeroScanSubmit} className="space-y-4 pt-1">
                  <div>
                    <label 
                      htmlFor="hero-business-url" 
                      className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5"
                    >
                      Australian Business URL
                    </label>
                    <div className="relative">
                      <input
                        id="hero-business-url"
                        type="text"
                        value={businessUrl}
                        onChange={(e) => setBusinessUrl(e.target.value)}
                        placeholder="yourbusiness.com.au"
                        required
                        className="w-full px-3.5 py-3 rounded-lg bg-[#08090C] border border-white/[0.14] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="hero-target-query" 
                      className="block text-xs font-mono font-medium text-[#D4D4D8] mb-1.5"
                    >
                      Target Customer Query
                    </label>
                    <div className="relative">
                      <input
                        id="hero-target-query"
                        type="text"
                        value={targetQuery}
                        onChange={(e) => setTargetQuery(e.target.value)}
                        placeholder="best local accountant in Perth"
                        className="w-full px-3.5 py-3 rounded-lg bg-[#08090C] border border-white/[0.14] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Single Dominant Hero CTA */}
                  <button
                    type="submit"
                    disabled={isScanning}
                    className="w-full py-3.5 px-4 rounded-lg bg-[#00E5FF] hover:brightness-110 active:scale-[0.99] text-[#08090C] font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isScanning ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#08090C] border-t-transparent rounded-full animate-spin" />
                        <span>Running Vector Analysis...</span>
                      </>
                    ) : (
                      <>
                        <span>Analyse My Visibility</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#94A3B8] text-center pt-0.5">
                    Free visibility scan • No signup required • Instant vector analysis
                  </p>
                </form>

                {/* Scan Progression Indicator */}
                {isScanning && (
                  <div className="p-3.5 rounded-lg bg-black/60 border border-cyan-500/30 text-xs font-mono space-y-1.5 text-slate-300">
                    <div className="flex items-center justify-between text-[#00E5FF]">
                      <span>Vector Pipeline Active</span>
                      <span>Stage {scanStep} of 3</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#00E5FF] h-full transition-all duration-500" 
                        style={{ width: `${(scanStep / 3) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {scanStep === 1 && 'Checking Knowledge Graph and JSON-LD anchors...'}
                      {scanStep === 2 && 'Evaluating cosine similarity against target query vectors...'}
                      {scanStep === 3 && 'Synthesising LLM passage extraction probabilities...'}
                    </p>
                  </div>
                )}

                {/* Live Diagnostic Result View */}
                {diagnosticResult && (
                  <div className="p-4 rounded-lg bg-cyan-950/30 border border-[#00E5FF]/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-[#00E5FF] font-semibold">
                        Scan Results: {diagnosticResult.url}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {diagnosticResult.recommendationState}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded bg-black/50 border border-white/5">
                        <div className="text-[10px] text-[#94A3B8] font-mono">Entity Clarity</div>
                        <div className="text-lg font-bold text-white">{diagnosticResult.entityClarity}%</div>
                      </div>
                      <div className="p-2 rounded bg-black/50 border border-white/5">
                        <div className="text-[10px] text-[#94A3B8] font-mono">Answer Coverage</div>
                        <div className="text-lg font-bold text-white">{diagnosticResult.answerCoverage}%</div>
                      </div>
                      <div className="p-2 rounded bg-black/50 border border-white/5">
                        <div className="text-[10px] text-[#94A3B8] font-mono">Evidence Strength</div>
                        <div className="text-lg font-bold text-amber-400">{diagnosticResult.evidenceStrength}%</div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-normal">
                      {diagnosticResult.keyFinding}
                    </p>

                    <Link
                      href={`/diagnostic?url=${encodeURIComponent(diagnosticResult.url)}&intent=${encodeURIComponent(diagnosticResult.query)}&auto=true`}
                      className="block text-center py-2 px-3 rounded bg-white/10 hover:bg-white/15 text-xs text-white font-medium transition-colors"
                    >
                      Open Full 100-Point Diagnostic Breakdown →
                    </Link>
                  </div>
                )}

                {/* Integrated Telemetry Preview (Subtle Watermark Underneath) */}
                {!diagnosticResult && !isScanning && (
                  <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-[#94A3B8] flex flex-wrap gap-x-3 gap-y-1 justify-between">
                    <span>Entity Clarity: 82</span>
                    <span>Answer Coverage: 61</span>
                    <span>Evidence Strength: 44</span>
                    <span className="text-amber-400">State: Limited</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RECOGNITION STRIP
          Low-profile solid dark strip (#08090C) with monochrome platform typography
          ========================================================================= */}
      <section className="bg-[#08090C] border-y border-white/[0.08] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[#D4D4D8] font-medium max-w-md text-center md:text-left">
              Built for businesses that need clearer visibility across ChatGPT, Gemini, Google AI Overviews and local search.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-mono text-xs tracking-wider text-[#94A3B8]">
              <span className="hover:text-white transition-colors">CHATGPT SEARCH</span>
              <span>·</span>
              <span className="hover:text-white transition-colors">GOOGLE AI OVERVIEWS</span>
              <span>·</span>
              <span className="hover:text-white transition-colors">PERPLEXITY AI</span>
              <span>·</span>
              <span className="hover:text-white transition-colors">GEMINI</span>
              <span>·</span>
              <span className="hover:text-white transition-colors">MICROSOFT COPILOT</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DIAGNOSTIC GAPS
          "AI cannot choose what it cannot clearly verify"
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
            THE ANATOMY OF AI SEARCH BLIND SPOTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            AI cannot choose what it cannot clearly verify.
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D8] mt-3">
            Generative models do not guess. If your business entities, service capabilities, or credentials are ambiguous or unverified, answer engines omit you from recommendation lists.
          </p>
        </div>

        {/* 3 Structural Modules with Structured Node-Graph Wireframes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Module 1: Identity Gaps */}
          <div className="refractive-panel p-6 bg-[#0D1117] flex flex-col justify-between">
            <div>
              {/* Structured Wireframe Graphic */}
              <div className="h-32 mb-5 rounded-lg bg-[#08090C] border border-white/[0.08] p-3 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full text-slate-500" viewBox="0 0 200 80" fill="none">
                  {/* Unverified dashed node */}
                  <circle cx="45" cy="40" r="18" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="45" y="44" fill="#EF4444" fontSize="9" textAnchor="middle" fontFamily="monospace">Unresolved</text>
                  
                  {/* Broken connector */}
                  <path d="M 65 40 L 130 40" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {/* Verified node */}
                  <circle cx="155" cy="40" r="18" stroke="#00E5FF" strokeWidth="2" fill="rgba(0,229,255,0.08)" />
                  <text x="155" y="44" fill="#00E5FF" fontSize="9" textAnchor="middle" fontFamily="monospace">@id Root</text>
                </svg>
              </div>

              <div className="text-xs font-mono text-[#00E5FF] font-semibold uppercase tracking-wider mb-1">
                GAP 01: IDENTITY
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unverified Entity State
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Ambiguous domain naming, missing schema @id anchors, and unlinked ABN/ASIC registrations cause LLMs to conflate your business with competitors or omit your core brand facts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.08] text-xs font-mono text-[#94A3B8]">
              Remediation: Canonical Entity Schema Injection
            </div>
          </div>

          {/* Module 2: Relationship Gaps */}
          <div className="refractive-panel p-6 bg-[#0D1117] flex flex-col justify-between">
            <div>
              {/* Structured Wireframe Graphic */}
              <div className="h-32 mb-5 rounded-lg bg-[#08090C] border border-white/[0.08] p-3 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full text-slate-500" viewBox="0 0 200 80" fill="none">
                  {/* Central service node */}
                  <circle cx="100" cy="40" r="16" stroke="#00E5FF" strokeWidth="1.5" fill="rgba(0,229,255,0.06)" />
                  <text x="100" y="44" fill="#00E5FF" fontSize="8" textAnchor="middle" fontFamily="monospace">Service</text>
                  
                  {/* Connected Corridors */}
                  <line x1="100" y1="24" x2="100" y2="8" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="100" cy="6" r="4" fill="#00E5FF" />
                  
                  <line x1="86" y1="48" x2="45" y2="68" stroke="#00E5FF" strokeWidth="1.5" />
                  <circle cx="45" cy="68" r="4" fill="#00E5FF" />

                  <line x1="114" y1="48" x2="155" y2="68" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="155" cy="68" r="4" fill="#EF4444" />
                </svg>
              </div>

              <div className="text-xs font-mono text-[#00E5FF] font-semibold uppercase tracking-wider mb-1">
                GAP 02: RELATIONSHIPS
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Untyped Service Silos
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Conventional sites present offerings as isolated prose. Without machine-readable semantic corridors (Entity → Relationship → Evidence), answer engines cannot qualify complex buyer prompts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.08] text-xs font-mono text-[#94A3B8]">
              Remediation: Knowledge Graph Tri-Graph Mapping
            </div>
          </div>

          {/* Module 3: Evidence Gaps */}
          <div className="refractive-panel p-6 bg-[#0D1117] flex flex-col justify-between">
            <div>
              {/* Structured Wireframe Graphic */}
              <div className="h-32 mb-5 rounded-lg bg-[#08090C] border border-white/[0.08] p-3 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full text-slate-500" viewBox="0 0 200 80" fill="none">
                  {/* Evidence loops */}
                  <rect x="25" y="25" width="45" height="30" rx="4" stroke="#64748B" strokeWidth="1.5" />
                  <text x="47" y="43" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">Claim</text>
                  
                  <path d="M 72 40 L 125 40" stroke="#00E5FF" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  
                  <rect x="130" y="20" width="50" height="40" rx="4" stroke="#00E5FF" strokeWidth="1.5" fill="rgba(0,229,255,0.08)" />
                  <text x="155" y="38" fill="#00E5FF" fontSize="8" textAnchor="middle" fontFamily="monospace">Verified</text>
                  <text x="155" y="49" fill="#00E5FF" fontSize="7" textAnchor="middle" fontFamily="monospace">Triple</text>
                </svg>
              </div>

              <div className="text-xs font-mono text-[#00E5FF] font-semibold uppercase tracking-wider mb-1">
                GAP 03: EVIDENCE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unsubstantiated Marketing
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Subjective claims like &ldquo;we are the leading agency&rdquo; are filtered out during RAG retrieval. Answer engines demand verifiable facts, structured case proof, and third-party entity authority.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.08] text-xs font-mono text-[#94A3B8]">
              Remediation: SubjectOf Case Studies &amp; Citations
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OPERATIONAL LINEAR PIPELINE
          01 Define → 02 Connect → 03 Prove → 04 Measure
          ========================================================================= */}
      <section id="operational-pipeline" className="py-20 bg-[#08090C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
              ENGINEERED METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              The Linear Clarity Pipeline
            </h2>
            <p className="text-base sm:text-lg text-[#D4D4D8] mt-3">
              We transform unstructured business websites into machine-readable knowledge graphs through a four-stage engineering sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 01: Define (Active / Elevated with Glass L2 & Cyan Refractive Rim) */}
            <div className="refractive-panel-cyan p-6 bg-[#0D1117] relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#00E5FF] bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                  STAGE 01
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                01 Define
              </h3>
              <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                Establish canonical @id nodes, map official business registration facts, and construct unambiguous machine-readable identity schemas.
              </p>
              <ul className="text-xs text-[#94A3B8] space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" /> Canonical @id URI anchor
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" /> ABN / ASIC identity linkage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" /> Brand disambiguation rules
                </li>
              </ul>
            </div>

            {/* Step 02: Connect (Flat Canvas) */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    STAGE 02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  02 Connect
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Link commercial services to geographic catchment nodes, author hierarchical isPartOf relationships, and build semantic tri-graphs.
                </p>
              </div>
              <ul className="text-xs text-[#94A3B8] space-y-2 font-mono">
                <li>• Knowledge Graph corridors</li>
                <li>• Service-to-entity mapping</li>
                <li>• Semantic taxonomy linking</li>
              </ul>
            </div>

            {/* Step 03: Prove (Flat Canvas) */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    STAGE 03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  03 Prove
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Inject verifiable subjectOf proof loops, connect verified third-party citations, and establish empirical evidence for answer generation.
                </p>
              </div>
              <ul className="text-xs text-[#94A3B8] space-y-2 font-mono">
                <li>• Structured case studies</li>
                <li>• Verified sameAs authority</li>
                <li>• Empirical proof evidence</li>
              </ul>
            </div>

            {/* Step 04: Measure (Flat Canvas) */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    STAGE 04
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  04 Measure
                </h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Track LLM citation share, audit hallucination rates, monitor passage extraction, and verify answer engine recommendations.
                </p>
              </div>
              <ul className="text-xs text-[#94A3B8] space-y-2 font-mono">
                <li>• AI citation frequency</li>
                <li>• Perplexity &amp; ChatGPT tests</li>
                <li>• 90-day progress telemetry</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMMERCIAL PATHWAYS (Hick's Law Enforced)
          Dominant entry point: Strategic Blueprint ($995 AUD)
          Demoted: AEO Foundation ($1,980/mo) & AEO Sprints (From $495)
          ========================================================================= */}
      <section id="commercial-pathways" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
            CLEAR, PREDICTABLE COMMERCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            Commercial Pathways
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D8] mt-3">
            Every engagement begins with the Strategic Blueprint: a transparent diagnostic audit that identifies your entity gaps and credits 100% of your fee toward implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* DOMINANT CARD: Strategic Blueprint (Elevated, Directional Refraction, Primary CTA) */}
          <div className="lg:col-span-6 refractive-panel-cyan p-8 sm:p-10 bg-[#0D1117] flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-[#00E5FF] font-mono text-xs font-bold tracking-wider uppercase">
                  RECOMMENDED ENTRY POINT
                </span>
                <span className="font-mono text-xs text-[#94A3B8]">5 BUSINESS DAYS SLA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Strategic Blueprint
              </h3>
              
              <div className="mt-4 mb-6 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                  $995
                </span>
                <span className="text-sm font-medium text-[#94A3B8]">AUD ex. GST</span>
              </div>

              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed mb-6">
                A standalone deep technical audit, knowledge graph gap assessment, and 90-day execution roadmap that uncovers why generative answer engines omit your business.
              </p>

              {/* Scope Deliverables */}
              <div className="space-y-3 pb-6 border-b border-white/[0.08] text-xs sm:text-sm text-[#D4D4D8]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Full site entity graph audit and hallucination risk report</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Competitor overlap and query fan-out retrieval analysis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Prioritised 90-day technical remediation action roadmap</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Complimentary technical onboarding ($0.00 setup)</span>
                </div>
              </div>

              {/* Risk Reversal Callout */}
              <div className="py-4 my-2 text-xs font-mono text-[#00E5FF] bg-cyan-950/40 border border-cyan-500/20 rounded-lg px-3">
                100% of your $995 Blueprint fee is credited toward eligible AEO Foundation sprints within 60 calendar days.
              </div>
            </div>

            {/* Dominant Primary Conversion Button */}
            <div className="pt-6">
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full py-4 px-6 rounded-lg bg-[#00E5FF] hover:brightness-110 active:scale-[0.99] text-[#08090C] font-extrabold text-base tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Commission Strategic Blueprint</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* DEMOTED CARDS (Flat Canvas, Subdued Borders, Ghost Actions) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Card 2: AEO Foundation (Demoted) */}
            <div className="p-8 rounded-2xl bg-[#08090C] border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    TURNKEY RETAINER
                  </span>
                  <span className="text-xs text-[#94A3B8] font-mono">12-WEEK CYCLE</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  AEO Foundation
                </h3>
                <div className="mt-2 mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">$1,980</span>
                  <span className="text-xs text-[#94A3B8]">AUD / mo ex. GST</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Full-graph turnkey implementation across up to 10 priority pages, structuring schemas, internal corridors, and third-party evidence loops.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#D4D4D8] hover:text-[#00E5FF] transition-colors"
                >
                  Explore Foundation Retainer
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: AEO Sprints (Demoted) */}
            <div className="p-8 rounded-2xl bg-[#08090C] border border-white/[0.08] flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#94A3B8] uppercase">
                    DISCRETE SPRINTS
                  </span>
                  <span className="text-xs text-[#94A3B8] font-mono">3–5 DAYS SLA</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  AEO Sprints
                </h3>
                <div className="mt-2 mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">From $495</span>
                  <span className="text-xs text-[#94A3B8]">AUD ex. GST</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  Focused micro-sprints addressing discrete technical challenges: local schema injection, canonical entity reconciliation, or article structure.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <Link
                  href="/solutions/aeo-sprint"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#D4D4D8] hover:text-[#00E5FF] transition-colors"
                >
                  View Sprint Catalog
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 & 7: EVIDENCE & AEO VS. LEGACY SEO
          Solid, low-glow case proof + Side-by-side comparison matrix
          ========================================================================= */}
      <section id="evidence-proof" className="py-20 bg-[#08090C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: Empirical Case Proof (Baby Bento Case Study) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1117] border border-white/[0.08]">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
                EMPIRICAL CASE EVIDENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                How Structured AEO Restored AI Citations for Baby Bento
              </h2>
              <p className="text-sm sm:text-base text-[#D4D4D8] mt-2">
                An Australian retailer lost search visibility when answer engines failed to recognise their product credentials. AEObility restructured their entity catalog into machine-readable knowledge triples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#08090C] border border-white/[0.08]">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00E5FF] font-display">
                  +312%
                </div>
                <div className="text-sm font-semibold text-white mt-1">AI Citation Share</div>
                <div className="text-xs text-[#94A3B8] mt-1">Measured across conversational answer tests in ChatGPT and Perplexity.</div>
              </div>

              <div className="p-5 rounded-xl bg-[#08090C] border border-white/[0.08]">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  4.8x
                </div>
                <div className="text-sm font-semibold text-white mt-1">Passage Extraction Rate</div>
                <div className="text-xs text-[#94A3B8] mt-1">Increase in direct quote extraction by Google AI Overviews.</div>
              </div>

              <div className="p-5 rounded-xl bg-[#08090C] border border-white/[0.08]">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">
                  5 Days
                </div>
                <div className="text-sm font-semibold text-white mt-1">Resolution Timeframe</div>
                <div className="text-xs text-[#94A3B8] mt-1">Time required from schema deployment to verified citation restoration.</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="font-mono text-xs text-[#94A3B8]">
                Triple: Entity (Baby Bento) → Relationship (Non-Toxic Lunchware) → Evidence (Empirical GSC &amp; LLM Logs)
              </div>
              <Link
                href="/knowledge-hub/case-studies/baby-bento"
                className="text-xs font-mono font-semibold text-[#00E5FF] hover:underline inline-flex items-center gap-1"
              >
                Read Full Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Part B: Side-by-Side Comparison Matrix (Legacy SEO vs. AEObility AEO) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
                PARADIGM SHIFT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
                Legacy SEO vs. Answer Engine Optimisation
              </h2>
              <p className="text-sm sm:text-base text-[#D4D4D8] mt-2">
                Why keyword stuffing and backlink volume fail in the era of generative synthesis.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="py-4 px-4 font-mono text-xs text-[#94A3B8] uppercase w-1/4">Evaluation Dimension</th>
                    <th className="py-4 px-4 font-mono text-xs text-[#94A3B8] uppercase w-3/8">Legacy SEO</th>
                    <th className="py-4 px-4 font-mono text-xs text-[#00E5FF] uppercase w-3/8 bg-cyan-950/20 border-x border-cyan-500/20">
                      AEObility AEO
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Primary Goal</td>
                    <td className="py-4 px-4 text-[#94A3B8]">Rank ten blue links on conventional search engine results pages.</td>
                    <td className="py-4 px-4 text-white bg-cyan-950/10 border-x border-cyan-500/20 font-medium">
                      Direct passage retrieval, LLM synthesis, and authoritative citation.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Core Currency</td>
                    <td className="py-4 px-4 text-[#94A3B8]">Keyword repetition, page density, and generic external backlinks.</td>
                    <td className="py-4 px-4 text-white bg-cyan-950/10 border-x border-cyan-500/20 font-medium">
                      Entity clarity, schema graphs, data provenance, and structured evidence.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Query Processing</td>
                    <td className="py-4 px-4 text-[#94A3B8]">Single literal keyword match against indexed page titles and headers.</td>
                    <td className="py-4 px-4 text-white bg-cyan-950/10 border-x border-cyan-500/20 font-medium">
                      Semantic vector space matching and multi-intent query fan-out.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Trust Validation</td>
                    <td className="py-4 px-4 text-[#94A3B8]">Algorithmic domain authority estimates and backlink numbers.</td>
                    <td className="py-4 px-4 text-white bg-cyan-950/10 border-x border-cyan-500/20 font-medium">
                      Verifiable sameAs registries, ABN/ASIC ground truth, and empirical case proof.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-white">Commercial Model</td>
                    <td className="py-4 px-4 text-[#94A3B8]">Indefinite monthly retainers with vague &ldquo;ongoing maintenance&rdquo; deliverables.</td>
                    <td className="py-4 px-4 text-white bg-cyan-950/10 border-x border-cyan-500/20 font-medium">
                      Predictable, fixed-scope sprints with 100% diagnostic fee credit-back.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8 & 9: FINAL CONVERSION INSTRUMENT
          Centered refractive conversion frame with dominant cyan CTA
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="final-conversion-panel"
          ref={finalConversionRef}
          className="refractive-panel p-8 sm:p-14 bg-[#0D1117] text-center max-w-4xl mx-auto relative shadow-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
            START WITH CERTAINTY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Find out what AI understands about your business.
          </h2>

          <p className="text-base sm:text-lg text-[#D4D4D8] max-w-2xl mx-auto leading-relaxed">
            Run our free automated visibility diagnostic or schedule a 15-minute technical review with our lead specialist.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToHeroScan}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#00E5FF] text-[#08090C] font-extrabold text-base tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Start Your Free Scan
            </button>

            <Link
              href="/book"
              className="w-full sm:w-auto px-6 py-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.12] font-semibold text-sm transition-all"
            >
              Book a 15-minute diagnostic review
            </Link>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#94A3B8]">
            <span>Zero sales pressure</span>
            <span>·</span>
            <span>100% Australian specialist</span>
            <span>·</span>
            <span>No lock-in contracts</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER: Restrained & Clean
          ========================================================================= */}
      <footer className="bg-[#08090C] border-t border-white/[0.08] py-12 text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-base font-display">
              AEO<span className="text-[#00E5FF]">bility</span>
            </span>
            <span>© {new Date().getFullYear()} AEObility. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/brand-facts" className="hover:text-white transition-colors">Brand Facts</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
