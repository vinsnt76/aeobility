'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface VideoExplainerProps {
  embedUrl?: string;
  title?: string;
}

export default function VideoExplainer({
  embedUrl = "https://drive.google.com/file/d/18D0_A6T5Xikp7wvAg0AGcDDXRtdQKlG1/preview",
  title = "Why Australian Businesses Choose AEObility"
}: VideoExplainerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="explainer-video" aria-labelledby="video-heading" className="py-20 bg-black relative border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-aeo-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-aeo-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-left space-y-10">
        <header className="relative py-4">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-semibold font-mono uppercase tracking-wider">
              <span>Clear Outcomes</span>
            </div>
            <h2 id="video-heading" className="text-3xl sm:text-5xl font-extrabold text-white font-soehne-breit">
              {title}
            </h2>
            <p className="text-base text-slate-300 font-normal max-w-xl leading-relaxed font-sans">
              Search behaviour has shifted from blue links to direct answers. We engineer your digital presence so Search, Maps, and AI engines retrieve and recommend your business first. Read our <Link href="/services/aeo/definition" className="text-cyan-400 font-semibold hover:underline">AEO Definition &amp; Concepts guide</Link> or watch the overview below.
            </p>
          </div>
        </header>

        {/* Video Player Container / Media Showcase Figure */}
        <figure className="relative aspect-video w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-neutral-950 shadow-[0_0_30px_rgba(0,205,216,0.15)] m-0">
          {isPlaying ? (
            <iframe
              src={embedUrl}
              title="AEObility Video Overview"
              className="w-full h-full border-0 rounded-2xl"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play AEObility overview video"
              className="relative w-full h-full text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-2xl overflow-hidden block"
            >
              <img
                src="/images/brand/aeobility-video-explainer.webp"
                alt="Why Aussie Businesses Partner with AEObility - AEO & GEO Marketing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/70 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
                    Platform Overview &bull; 2 Min
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-aeo-cyan text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,205,216,0.4)] group-hover:scale-110 group-hover:bg-white transition-all">
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-left space-y-0.5">
                    <p className="text-sm sm:text-base font-bold text-white font-soehne-breit group-hover:text-cyan-300 transition-colors">Watch AEObility Overview</p>
                    <p className="text-xs text-slate-300 font-normal">See how AEO &amp; GEO Marketing drive Australian business visibility</p>
                  </div>
                </div>
              </figcaption>
            </button>
          )}
        </figure>

        {/* Executive Takeaways & Core Concepts Strip */}
        <aside aria-label="AEO Executive Takeaways" className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
              Executive Summary
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
              Why Answer Engine Optimisation Replaces Legacy SEO
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-serif pt-2 border-t border-white/5">
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs font-sans">Passage Synthesis Over Keyword Density</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Generative answer engines evaluate self-contained 150-character answer blocks rather than page-wide keyword repetition. Content must provide direct, verifiable solutions to customer queries under structured H2 and H3 headings to qualify for citation.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs font-sans">Connected Schema Graphs Over Standalone Tags</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Modern search crawlers map machine-readable JSON-LD entity graphs. Standalone meta tags and unlinked markup fail to establish entity provenance. Linking your organisation to verified government registries including the Australian Business Register (ABN) validates authenticity.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white text-xs font-sans">Fixed-Scope Sprints Over Monthly Retainers</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                AEO challenges are deterministic code and data structure problems with clear milestones. Shifting away from open-ended monthly hours to fixed-scope sprints guarantees measurable code improvements within 5 to 10 business days.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
