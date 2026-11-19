'use client';

import React, { useState } from 'react';

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
    <section id="explainer-video" aria-labelledby="video-heading" className="py-20 bg-[#0D1117] relative border-t border-[#1E293B]">
      <div className="max-w-4xl mx-auto px-6 text-left space-y-10">
        <header className="relative py-4">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 pointer-events-none bg-grid-motif-dark opacity-50 z-0" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111622] border border-[#1E293B] font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-semibold">
              <span>Clear Outcomes</span>
            </div>
            <h2 id="video-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch]">
              Search behaviour has shifted from blue links to direct answers. We engineer your digital presence so Search, Maps, and AI engines retrieve and recommend your business first.
            </p>
          </div>
        </header>

        {/* Video Player Container / Media Showcase Figure */}
        <figure className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#1E293B] bg-[#08090C] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] m-0">
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
              className="relative w-full h-full text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-[#08090C] rounded-2xl overflow-hidden block"
            >
              <img
                src="/images/brand/aeobility-video-explainer.webp"
                alt="Why Aussie Businesses Partner with AEObility - AEO & GEO Marketing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-[#08090C]/85 border border-[#00E5FF]/40 backdrop-blur-md text-[11px] font-mono text-[#00E5FF] uppercase tracking-wider">
                    Platform Overview &bull; 2 Min
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00E5FF] text-[#08090C] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:scale-110 group-hover:bg-white transition-all">
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-left space-y-0.5">
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">Watch AEObility Overview</p>
                    <p className="text-xs text-slate-300 font-normal">See how AEO &amp; GEO Marketing drive Australian business visibility</p>
                  </div>
                </div>
              </figcaption>
            </button>
          )}
        </figure>

        {/* Key Takeaways Summary Block (Cleanly Separated from Video Container) */}
        <div className="mt-14 pt-12 border-t border-[#1E293B]/70 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 ease-out">
          <aside aria-label="Key Takeaways" className="p-6 sm:p-8 rounded-2xl bg-[#111622] border border-[#1E293B] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] space-y-6">
            <div className="space-y-1.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-bold block">
                KEY TAKEAWAYS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight">
                How Answer Engine Optimisation Extends Legacy SEO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-[#1E293B]">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                  Answers First, Rankings Second
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed list-none p-0 m-0">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>AI search engines extract short, self-contained answers rather than counting repeated keywords.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Structure service pages around real customer questions and verifiable facts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Clear headings help models quote your business directly.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                  Verified Identity Over Generic Listings
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed list-none p-0 m-0">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Search engines and AI tools cross-check your website against official records before recommending you.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Connect your site to your Australian Business Register (ABN) details and professional licences.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Consistent business data proves your organisation is legitimate.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                  Fixed-Scope Sprints Over Monthly Retainers
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed list-none p-0 m-0">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Fixing how AI reads your website is a clear technical job, not an endless monthly retainer.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Every sprint targets specific code, schema, and content gaps with clear milestones.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
                    <span>Delivered in 5 to 10 business days with zero ongoing contract lock-in.</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
