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
    <section aria-labelledby="hero-title" className="hero relative w-full overflow-hidden bg-black pt-12 pb-16 md:pb-24">
      {/* Absolute Radial Gradient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-radial from-aeo-purple/20 via-aeo-cyan/5 to-transparent glow-blur pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* 50% Desktop Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (50%): Value Prop & Conversion Plane */}
          <header className="relative z-10 space-y-6 text-left hero-card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              AI Visibility Telemetry
            </div>

            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
              Get Found.{' '}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                Get Chosen.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-serif">
              AEObility is a Perth digital consultancy dedicated to Answer Engine Optimisation (AEO) and machine search readability. Position your business across Google, Maps, and AI answer engines with zero guesswork.
            </p>

            {/* Embedded Telemetry Form Card with Sprint Glow */}
            <form onSubmit={handleHeroScanSubmit} className="hero-conversion-card p-6 rounded-2xl relative space-y-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="hero-url-input" className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
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
                  className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="hero-intent-input" className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-purple-400" />
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
                  className="w-full h-11 px-3.5 rounded-xl bg-black/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              {/* Primary Pill Button (AI Bill Continuity) */}
              <button
                type="submit"
                data-agent-action="run-visibility-scan"
                data-testid="btn-run-scan"
                disabled={!url.trim() || !intent.trim()}
                className="hero-primary-cta w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-white/20 text-white font-semibold text-sm tracking-wide shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Run Free Visibility Scan</span>
                <ArrowRight className="w-4 h-4 text-purple-200" />
              </button>

              {/* Disclaimer & Reassurance Micro-Row */}
              <footer className="pt-1 text-center space-y-1 font-mono">
                <p className="text-[11px] text-purple-300/80 font-medium">
                  * The scan executes a real-time vector analysis using Gemini.
                </p>
                <p className="text-xs text-slate-400">
                  Free visibility scan &bull; No email required to start &bull; 100% private &amp; secure
                </p>
              </footer>
            </form>

            {/* Quick-Path Service Hub Links (Full Width Desktop / 2-Column Mobile Stack) */}
            <nav aria-label="Explore service hubs" className="pt-2 w-full">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Explore Service Hubs
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full list-none p-0 m-0">
                <li>
                  <Link
                    href="/services/aeo"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AEO & SEO', destination: '/services/aeo' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    AEO &amp; SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-search-marketing"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Search Marketing', destination: '/services/ai-search-marketing' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    AI Search Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/aeo/local-business"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Local Business GEO', destination: '/services/aeo/local-business' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    Local Business GEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/geo-marketing"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'GEO Marketing', destination: '/services/geo-marketing' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    GEO Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/aeo/shopify"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'Ecommerce AEO', destination: '/services/aeo/shopify' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    Ecommerce AEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/aeo/procedures"
                    onClick={() => trackGaEvent('hero_hub_pill_clicked', { hub: 'AI Strategy', destination: '/services/aeo/procedures' })}
                    className="w-full py-2 px-2.5 rounded-full bg-transparent hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400/60 text-xs font-medium text-purple-200 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] text-center flex items-center justify-center truncate"
                  >
                    AI Strategy
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Right Column (50%): Contained Node Animation */}
          <aside aria-label="Interactive entity network visualization" className="relative w-full h-[480px] lg:h-[580px] rounded-2xl overflow-clip isolate bg-slate-950/40 border border-slate-800/60 flex items-center justify-center hero-visual-canvas-container">
            {/* Ambient Canvas Glow Backplate */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none"></div>
            
            {/* Interactive Graph Mount */}
            <div
              id="hero-node-canvas"
              className="relative z-10 w-full h-full pointer-events-auto [mask-image:linear-gradient(to_right,transparent,black_15%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%)]"
            >
              <GraphVisual />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
