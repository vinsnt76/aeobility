'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, ArrowRight, Globe, Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { trackGaEvent } from '@/lib/gtag';

const GraphVisual = dynamic(() => import('@/components/GraphVisual'), { ssr: false });

export default function Hero() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [intent, setIntent] = useState('');

  const handleHeroScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !intent.trim()) return;

    trackGaEvent('hero_cta_clicked', { source: 'homepage_hero_direct_form' });
    trackGaEvent('form_start_submitted', { target_url: url.trim(), target_intent: intent.trim() });

    router.push(`/diagnostic?url=${encodeURIComponent(url.trim())}&intent=${encodeURIComponent(intent.trim())}&auto=true`);
  };

  return (
    <section aria-labelledby="hero-title" className="hero relative w-full overflow-hidden bg-[#08090C] pt-12 pb-16 md:pb-24">
      {/* Absolute Radial Gradient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-radial from-aeo-purple/20 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none z-0"></div>

      {/* Decorative Floating Background Nodes Layer (Masked away from left H1 text corridor) */}
      <aside
        aria-label="Interactive entity network visualisation"
        className="hero-visual-canvas-container absolute inset-0 z-0 overflow-clip pointer-events-none opacity-55"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10)_0%,transparent_70%)] pointer-events-none"></div>
        <div
          id="hero-node-canvas"
          className="relative z-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,transparent_52%,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_52%,black_75%)]"
        >
          <GraphVisual />
        </div>
      </aside>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Balanced 2-Column Desktop Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column (Value Proposition & Proof Pills) */}
          <header className="lg:col-span-7 relative z-10 space-y-6 text-left hero-card">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#1E293B] text-slate-200 text-xs font-semibold tracking-wide font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
              Answer Engine Optimisation for Australian Entities
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-6xl lg:text-[52px] xl:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
              <span className="block">Get your business</span>
              <span className="block font-extrabold text-focal-gradient">found and chosen</span>
              <span className="block">in AI search.</span>
            </h1>

            {/* Direct Answer Block / Consolidated Entity Definition & Proof Pills */}
            <aside 
              aria-label="Executive Summary" 
              data-agent-purpose="direct-answer"
              className="max-w-xl p-5 sm:p-6 rounded-xl bg-[#0D1117]/80 border-t border-[#00E5FF]/40 border-b border-x border-slate-800 backdrop-blur-md space-y-4"
            >
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong className="font-semibold text-white">AEObility</strong> is a Perth digital consultancy engineering Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) for Australian businesses. We structure your web architecture, schema graphs, and entity profiles so Google, Maps, ChatGPT Search, Perplexity, and Google AI Overviews accurately identify, understand, and recommend your business with zero guesswork.
              </p>

              {/* Scope/Trust Pills: 3-column metric strip aligned at bottom of left column */}
              <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[#1E293B] text-center font-mono">
                <div className="p-2.5 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-[10px] text-zinc-400 uppercase tracking-wider">Focus</span>
                  <span className="text-xs font-bold text-[#00E5FF]">AEO &amp; GEO</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-[10px] text-zinc-400 uppercase tracking-wider">Model</span>
                  <span className="text-xs font-bold text-white">Fixed-Scope</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-[10px] text-zinc-400 uppercase tracking-wider">Audits From</span>
                  <span className="text-xs font-bold text-[#00E5FF]">$995 AUD</span>
                </div>
              </div>
            </aside>
          </header>

          {/* Right Column: Hero Diagnostic Instrument (#111622 fill + #1E293B border) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-[#111622] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent pointer-events-none"></div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
                  <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-semibold">
                    GET AI READY &bull; LIVE DIAGNOSTIC
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Can conversational AI recommend your business?
                </h2>
              </div>

              <form onSubmit={handleHeroScanSubmit} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="hero-url-input" className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Australian Business URL</span>
                    </label>
                    <span className="text-[11px] text-slate-400 font-sans">e.g. yourbrand.com.au</span>
                  </div>
                  <input
                    id="hero-url-input"
                    name="url"
                    type="url"
                    autoComplete="url"
                    data-testid="input-telemetry-url"
                    required
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    onFocus={() => trackGaEvent('form_field_focused', { field: 'url', source: 'hero_direct_embed' })}
                    placeholder="https://yourbrand.com.au"
                    className="w-full h-11 px-3.5 rounded-xl bg-[#08090C] border border-[#1E293B] hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    spellCheck={false}
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="hero-intent-input" className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Primary Search Intent</span>
                    </label>
                    <span className="text-[11px] text-slate-400 font-sans">e.g. Physiotherapist Near Me</span>
                  </div>
                  <input
                    id="hero-intent-input"
                    name="intent"
                    type="text"
                    autoComplete="off"
                    data-testid="input-telemetry-intent"
                    required
                    value={intent}
                    onChange={e => setIntent(e.target.value)}
                    onFocus={() => trackGaEvent('form_field_focused', { field: 'intent', source: 'hero_direct_embed' })}
                    placeholder="e.g. Physiotherapist Near Me"
                    className="w-full h-11 px-3.5 rounded-xl bg-[#08090C] border border-[#1E293B] hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    spellCheck={false}
                    suppressHydrationWarning
                  />
                </div>

                {/* Primary Pill Button (High-Contrast Opaque AEO Cyan CTA) */}
                <button
                  type="submit"
                  data-agent-action="run-visibility-scan"
                  data-testid="btn-run-scan"
                  className="hero-primary-cta w-full h-12 rounded-full bg-[#00E5FF] hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Run Free Visibility Scan</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                {/* Disclaimer & Reassurance Micro-Row */}
                <footer className="pt-1 text-center space-y-1 font-mono">
                  <p className="text-[11px] text-slate-300 font-medium">
                    * The scan executes a real-time vector analysis using Gemini.
                  </p>
                  <p className="text-xs text-slate-400">
                    Free visibility scan &bull; No email required to start &bull; 100% private &amp; secure
                  </p>
                </footer>
              </form>
            </div>
          </div>

        </div>

        {/* Quick-Path Service Hub Links Strip Below Split Hero */}
        <nav aria-label="Explore service hubs" className="mt-10 pt-6 border-t border-[#1E293B]/80 w-full relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono shrink-0">
              Explore Service Hubs
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full list-none p-0 m-0">
              <li>
                <Link
                  href="/services/aeo"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AEO & SEO', destination: '/services/aeo' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  AEO &amp; SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-search-marketing"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Search Marketing', destination: '/services/ai-search-marketing' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  AI Search Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aeo/local-business"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Local Business GEO', destination: '/services/aeo/local-business' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  Local Business GEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/geo-marketing"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'GEO Marketing', destination: '/services/geo-marketing' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  GEO Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aeo/shopify"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Ecommerce AEO', destination: '/services/aeo/shopify' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  Ecommerce AEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aeo/procedures"
                  onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Strategy', destination: '/services/aeo/procedures' })}
                  className="w-full py-2 px-2.5 rounded-full bg-[#111622]/90 hover:bg-slate-800 border border-[#1E293B] hover:border-[#00E5FF]/50 text-xs font-medium text-slate-200 hover:text-white transition-all text-center flex items-center justify-center truncate"
                >
                  AI Strategy
                </Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </section>
  );
}
