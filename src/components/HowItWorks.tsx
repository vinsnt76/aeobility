import React from 'react';
import { BookOpen } from 'lucide-react';
import { TelemetryViewTracker } from '@/components/telemetry/TelemetryViewTracker';

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="steps-heading" className="py-20 bg-[#0D1117] text-slate-300 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <header className="relative text-center max-w-2xl mx-auto mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00E5FF] block">
              The Telemetry Engine
            </span>
            <h2 id="steps-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Four Steps to Machine-Readable Clarity
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch] mx-auto">
              Measure, understand, and activate your AI search visibility.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Steps ordered list + Inbound Resource Navigation */}
          <div className="lg:col-span-7 space-y-10">
            <ol className="space-y-10 list-none p-0 m-0">
              {/* Step 1 */}
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 text-3xl font-extrabold font-mono text-slate-500 tracking-tight leading-none pt-1">
                  01
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">Tell Us What You Want To Be Found For</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Enter your Australian business URL and primary customer search intent. Our crawler ingests your public document object model, existing Schema.org structured data, and service area declarations to benchmark baseline machine readability.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 text-3xl font-extrabold font-mono text-slate-500 tracking-tight leading-none pt-1">
                  02
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">Measure Your AI Visibility</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Our telemetry engine analyses how conversational AI systems like ChatGPT Search, Perplexity, Gemini, and Google AI Overviews retrieve and recommend your business. We measure passage retrieval depth, entity confidence scoring, citation provenance, and brand co-occurrence.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 text-3xl font-extrabold font-mono text-slate-500 tracking-tight leading-none pt-1">
                  03
                </span>
                <div className="space-y-3 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">Discover Your Opportunities</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Receive your comprehensive AI Visibility Score and diagnostic telemetry report. Uncover critical retrieval blind spots where search engines hallucinate details, misattribute service locations, or recommend competitors because your structured schema is incomplete or disconnected.
                  </p>
                </div>
              </li>

              {/* Step 4 */}
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 text-3xl font-extrabold font-mono text-slate-500 tracking-tight leading-none pt-1">
                  04
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">Turn Insights into a 90-Day Plan</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Transform diagnostic telemetry into an actionable 90-day technical execution roadmap. Prioritise high-impact fixes, from entity node reconciliation and canonical linking to structured FAQ passages and Google Business Profile alignment, with zero ongoing agency contract lock-in.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Sample Telemetry Output Preview Card */}
          <TelemetryViewTracker
            id="audit-preview"
            formId="how_it_works_preview"
            className="lg:col-span-5 bg-[#111622] p-7 sm:p-8 rounded-2xl border border-[#1E293B] shadow-2xl relative overflow-hidden text-white space-y-5"
          >
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00E5FF] to-aeo-purple"></div>

            <header className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[11px] font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Telemetry Preview</span>
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Live Sample v4.2
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  Diagnostic Telemetry Sample
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
                  Empirical signals measured across your brand footprint during a live visibility scan.
                </p>
              </div>
            </header>

            {/* Score Showcase Gauge */}
            <figure className="p-4 rounded-xl bg-[#08090C] border border-[#1E293B] flex items-center justify-between m-0">
              <figcaption className="space-y-0.5">
                <span className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider">
                  AI Visibility Index
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                  88 <span className="text-sm text-[#00E5FF] font-sans font-normal">/ 100</span>
                </div>
              </figcaption>
              <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                Optimised for AI
              </div>
            </figure>

            {/* 4 Diagnostic Signals */}
            <ul className="space-y-2.5 text-xs font-sans list-none p-0 m-0">
              <li className="p-3 rounded-lg bg-[#08090C] border border-[#1E293B] flex items-center justify-between">
                <div className="space-y-0.5">
                  <strong className="block font-semibold text-white">Entity Graph Alignment</strong>
                  <span className="block text-xs text-slate-400">Multi-source registry &amp; Schema alignment</span>
                </div>
                <span className="font-mono text-[#00E5FF] text-[11px] font-bold">94% Verified</span>
              </li>

              <li className="p-3 rounded-lg bg-[#08090C] border border-[#1E293B] flex items-center justify-between">
                <div className="space-y-0.5">
                  <strong className="block font-semibold text-white">Atomic Answer Extraction</strong>
                  <span className="block text-xs text-slate-400">Direct-answer passage density</span>
                </div>
                <span className="font-mono text-[#00E5FF] text-[11px] font-bold">91% Salience</span>
              </li>

              <li className="p-3 rounded-lg bg-[#08090C] border border-[#1E293B] flex items-center justify-between">
                <div className="space-y-0.5">
                  <strong className="block font-semibold text-white">Semantic Lattice Topology</strong>
                  <span className="block text-xs text-slate-400">Core services linked to proof assets</span>
                </div>
                <span className="font-mono text-slate-300 text-[11px] font-bold">Connected</span>
              </li>

              <li className="p-3 rounded-lg bg-[#08090C] border border-[#1E293B] flex items-center justify-between">
                <div className="space-y-0.5">
                  <strong className="block font-semibold text-white">Citation Provenance (NAP)</strong>
                  <span className="block text-xs text-slate-400">GBP, Apple Maps &amp; Bing consistency</span>
                </div>
                <span className="font-mono text-[#00E5FF] text-[11px] font-bold">100% Parity</span>
              </li>
            </ul>
          </TelemetryViewTracker>
        </div>
      </div>
    </section>
  );
}
