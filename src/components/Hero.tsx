'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, Globe, Search } from 'lucide-react';
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
    <section aria-labelledby="hero-title" className="hero relative w-full overflow-hidden bg-[#08090C] pt-24 sm:pt-28 pb-12 md:pb-24">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column (Value Proposition & Proof Pills) */}
          <header className="lg:col-span-7 relative z-10 text-left hero-card">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111622] border border-[#1E293B] text-slate-200 text-xs font-semibold tracking-wide font-mono mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
              Answer Engine Optimisation for Australian Entities
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-6xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
              <span className="block">Get your business</span>
              <span className="block font-extrabold text-focal-gradient">found and chosen</span>
              <span className="block">in AI search.</span>
            </h1>

            {/* Direct Answer Block / Consolidated Entity Definition & Proof Pills */}
            <aside 
              aria-label="Executive Summary" 
              data-agent-purpose="direct-answer"
              className="mt-4 sm:mt-6 max-w-[56ch] p-4 sm:p-6 rounded-xl bg-[#0D1117]/80 border-t border-[#00E5FF]/40 border-b border-x border-slate-800 backdrop-blur-md"
            >
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-[56ch]">
                Stop leaving AI recommendations to guesswork. <strong className="font-semibold text-white">AEObility</strong> is a Perth digital consultancy engineering Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) for Australian businesses. We structure your web architecture, schema graphs, and entity profiles so Google, Maps, ChatGPT Search, Perplexity, and Google AI Overviews verify who you are and recommend your business first.
              </p>

              {/* Scope/Trust Pills: 3-column metric strip aligned at bottom of left column */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-3 sm:mt-5 pt-3 border-t border-[#1E293B] text-center font-mono">
                <div className="py-2.5 sm:py-3.5 px-2 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Focus</span>
                  <span className="text-xs font-bold text-[#00E5FF]">AEO &amp; GEO</span>
                </div>
                <div className="py-2.5 sm:py-3.5 px-2 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Model</span>
                  <span className="text-xs font-bold text-white">Fixed-Scope</span>
                </div>
                <div className="py-2.5 sm:py-3.5 px-2 rounded-lg bg-[#08090C] border border-[#1E293B]">
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">Audits From</span>
                  <span className="text-xs font-bold text-[#00E5FF]">$995 AUD</span>
                </div>
              </div>
            </aside>
          </header>

          {/* Right Column: Hero Diagnostic Instrument (Unified Directional Glassmorphic Edge Refraction) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#00E5FF]/80 via-[#A080FE]/60 to-[#1E293B] shadow-2xl relative z-10">
              <div className="bg-[#111622] rounded-[15px] p-6 sm:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] space-y-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
                    <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-semibold">
                      LIVE AI VISIBILITY CHECK
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    See how AI models read your business
                  </h3>
                </div>

                <form onSubmit={handleHeroScanSubmit} className="space-y-4">
                  <div>
                    <div className="mb-1.5">
                      <label htmlFor="hero-url-input" className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                        <span>Australian Business URL</span>
                      </label>
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
                    <div className="mb-1.5">
                      <label htmlFor="hero-intent-input" className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-[#00E5FF]" />
                        <span>Primary Search Intent</span>
                      </label>
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
                      placeholder="Physiotherapist in Perth"
                      className="w-full h-11 px-3.5 rounded-xl bg-[#08090C] border border-[#1E293B] hover:border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      spellCheck={false}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Unified Primary Pill Button (Directional Glassmorphic Gradient Border + Top Specular Highlight) */}
                  <div className="p-[1px] rounded-full bg-gradient-to-br from-[#A080FE] via-[#fd799f] to-[#1E293B] shadow-[0_8px_24px_rgba(160,128,254,0.18)]">
                    <button
                      type="submit"
                      data-agent-action="run-visibility-scan"
                      data-testid="btn-run-scan"
                      className="group hero-primary-cta bg-[#141927]/95 hover:bg-[#1B2236] backdrop-blur-md text-white font-semibold text-sm tracking-wide rounded-full w-full py-3.5 px-6 transition-all flex items-center justify-center gap-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] active:scale-[0.99] cursor-pointer"
                    >
                      <span>Run Free Visibility Scan</span>
                      <ArrowRight className="w-4 h-4 text-[#A080FE] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Condensed Footer Reassurance Copy */}
                  <p className="mt-3 text-center text-xs text-slate-400">
                    Instant baseline scan &bull; Zero email required upfront
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
