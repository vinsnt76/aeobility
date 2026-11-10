'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { trackGaEvent } from '@/lib/gtag';

export default function HowItWorks() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);

  // audit_form_view - Triggered when the telemetry sample becomes visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined') {
            trackGaEvent('audit_form_view', {
              form_id: 'how_it_works_preview',
              page_location: window.location.pathname,
            });
          }
          observer.disconnect(); // Track once per page load
        }
      },
      { threshold: 0.15 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-light opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-aeo-purple uppercase font-mono block">
              The Telemetry Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-soehne-breit">
              Four Steps to Machine-Readable Clarity
            </h2>
            <p className="text-base text-neutral-600 font-light font-serif">
              Measure, understand, and activate your AI search visibility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Steps */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-neutral-950 font-soehne-breit">Tell Us What You Want To Be Found For</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Enter your website and your primary customer search intent.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                02
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-neutral-950 font-soehne-breit">Measure Your AI Visibility</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Our telemetry engine analyses how AI systems understand, retrieve, and recommend your business.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                03
              </div>
              <div className="space-y-3 w-full">
                <h3 className="text-lg font-bold text-neutral-950 font-soehne-breit">Discover Your Opportunities</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Receive your AI Visibility Score, confidence signals, and the biggest opportunities to improve.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-3xl font-extrabold text-neutral-300 tracking-tight leading-none pt-1">
                04
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-neutral-950 font-soehne-breit">Turn Insights into a 90-Day Plan</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed font-serif">
                  Use your findings to identify the highest-priority visibility gaps and decide what to fix next.
                </p>
              </div>
            </div>

            {/* Inbound Links to Educational Resources */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-4 items-center justify-between">
              <Link 
                href="/knowledge-hub/what-is-aeo" 
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-800 hover:text-aeo-purple transition-colors"
              >
                <BookOpen className="w-4 h-4 text-aeo-purple" />
                <span>What is AEO? Read our comprehensive definition guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="/knowledge-hub/ai-seo-tools" 
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-700 hover:text-aeo-purple transition-colors"
              >
                <span>AI search tools and scraper vector parsers comparison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Sample Telemetry Output Preview Card */}
          <div id="audit-preview" ref={formRef} className="lg:col-span-5 bg-zinc-950 p-7 sm:p-8 rounded-2xl border border-cyan-500/30 shadow-2xl relative overflow-hidden text-white space-y-5">
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple"></div>

            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-bold text-cyan-300">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Telemetry Preview</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Live Sample v4.2
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-soehne-breit">
                Diagnostic Telemetry Sample
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-1 font-serif leading-relaxed">
                Empirical signals measured across your brand footprint during a live visibility scan.
              </p>
            </div>

            {/* Score Showcase Gauge */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 tracking-wider">
                  AI Visibility Index
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  88 <span className="text-sm text-cyan-400 font-sans font-normal">/ 100</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                Optimised for AI
              </div>
            </div>

            {/* 4 Diagnostic Signals */}
            <div className="space-y-2.5 text-xs font-sans">
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">Entity Graph Alignment</div>
                  <div className="text-[11px] text-zinc-400 font-serif">Multi-source registry &amp; Schema alignment</div>
                </div>
                <span className="font-mono text-cyan-300 text-[11px] font-bold">94% Verified</span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">Atomic Answer Extraction</div>
                  <div className="text-[11px] text-zinc-400 font-serif">Direct-answer passage density</div>
                </div>
                <span className="font-mono text-cyan-300 text-[11px] font-bold">91% Salience</span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">Semantic Lattice Topology</div>
                  <div className="text-[11px] text-zinc-400 font-serif">Core services linked to proof assets</div>
                </div>
                <span className="font-mono text-purple-300 text-[11px] font-bold">Connected</span>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">Citation Provenance (NAP)</div>
                  <div className="text-[11px] text-zinc-400 font-serif">GBP, Apple Maps &amp; Bing consistency</div>
                </div>
                <span className="font-mono text-cyan-300 text-[11px] font-bold">100% Parity</span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackGaEvent('audit_cta_clicked', { source: 'how_it_works_preview' });
                  const el = document.getElementById('hero-url-input');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.focus();
                  } else {
                    router.push('/diagnostic');
                  }
                }}
                className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-zinc-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <span>Run Free Live Telemetry Scan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] text-center text-zinc-400 font-mono mt-2.5">
                * Real-time vector analysis executed using Gemini &bull; Zero email required upfront
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
