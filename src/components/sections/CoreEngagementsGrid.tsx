import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Rocket, Compass, ShieldCheck, Clock, Boxes } from 'lucide-react';
import { PackageSelectLink } from '@/components/sections/PackageSelectLink';
import { PRICING_TIERS, TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

export function CoreEngagementsGrid() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  return (
    <section aria-labelledby="packages-title" className="w-full bg-black py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-radial from-aeo-cyan/10 via-aeo-purple/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Zero Retainer Lock-In</span>
          </div>
          <h2 id="packages-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Fixed-Scope Sprints.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-serif leading-relaxed">
            Work directly with a qualified <Link href="/services/perth/seo-specialist" className="text-cyan-400 underline hover:text-cyan-300 font-medium">Perth SEO specialist &amp; local AEO consultant</Link> to secure top placement across Google Maps, local search, and AI answer engines. All engagements are clearly scoped and transparently priced.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {/* Card 1: Diagnostic & Planning (Strategic Blueprint) */}
          <article className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Diagnostic &amp; Planning</span>
                </div>
              </div>

              {/* Title & Pricing Block */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">{tier1.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">ex. GST</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-sans">
                  Standalone audit &bull; 100% credited toward implementation within 60 days
                </p>
              </div>

              {/* Single-Sentence Scope */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif pt-1">
                Find the data errors, missing business facts, and structured code issues preventing search engines and AI models from recommending your business.
              </p>

              {/* 4 Scannable Deliverables */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <ul className="space-y-3 text-xs font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Search &amp; AI Visibility Audit</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Checks how Google, Apple Maps, and AI tools extract your business details.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Code &amp; Schema Review</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Identifies broken structured data, incorrect tags, and indexing errors.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Prioritised 90-Day Plan</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">An ordered checklist of required technical fixes and page updates.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">45-Minute Review Call</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">A direct walkthrough of findings and next steps with your team.</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Delivery Details */}
              <div className="pt-3 border-t border-white/10">
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3.5 space-y-2">
                  <div className="flex items-start gap-2 font-mono text-xs text-white">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Turnaround:</strong> 5–7 business days</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-zinc-300 font-serif leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-zinc-200 font-sans">Delivery:</strong> Complete report and fix checklist</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <PackageSelectLink
                href={tier1.ctaHref}
                packageId={bpSku.code}
                packageName={tier1.name}
                priceExGst={bpSku.priceExGst}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400/60 hover:bg-zinc-800 text-white font-semibold text-xs transition-all duration-300 shadow-sm text-left cursor-pointer"
              >
                <span>Commission Strategic Blueprint →</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </PackageSelectLink>
            </div>
          </article>

          {/* Card 2: Core Setup (Recommended) - AEO Foundation */}
          <article className="relative rounded-2xl bg-gradient-to-b from-cyan-400 via-cyan-500 to-purple-500 p-0.5 shadow-[0_0_45px_rgba(6,182,212,0.3)] md:-translate-y-2 transition-all duration-300 group z-10">
            {/* Top Recommended Floating Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-zinc-950 font-black text-[10px] tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(6,182,212,0.5)] z-20 whitespace-nowrap">
              Most Popular • Recommended Foundation
            </div>

            <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-[15px] bg-zinc-950/95 backdrop-blur-xl">
              <div className="space-y-5">
                {/* Eyebrow */}
                <div className="flex items-center justify-between pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    <Boxes className="w-3.5 h-3.5" />
                    <span>Core Setup (Recommended)</span>
                  </div>
                </div>

                {/* Title & Pricing Block */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">{tier2.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
                      {formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">/ mo ex. GST</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 font-sans">
                    90 day execution &bull; Covers up to 10 core pages &bull; Includes Strategic Blueprint &amp; $250 onboarding setup
                  </p>
                </div>

                {/* Single-Sentence Scope */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif pt-1">
                  Hands-on technical implementation to resolve code errors, rewrite key pages for direct-answer search, and align your business listings.
                </p>

                {/* 4 Scannable Deliverables */}
                <div className="pt-3 border-t border-white/10 space-y-3">
                  <ul className="space-y-3 text-xs font-sans">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-xs">Structured Data Installation</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug">Valid schema markup added directly to your site or supplied as ready-to-paste code.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-xs">Direct-Answer Content</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug">Up to 10 priority service pages updated into clear, extractable answer blocks.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-xs">Internal Page Linking</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug">Connects core services to relevant proof points and case studies.</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-xs">Directory Alignment</div>
                        <div className="text-[11px] text-zinc-400 font-serif leading-snug">Syncs name, address, phone number, and services across Google, Apple Maps, and Bing.</div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Delivery Details */}
                <div className="pt-3 border-t border-white/10">
                  <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3.5 space-y-2">
                    <div className="flex items-start gap-2 font-mono text-xs text-white">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Turnaround:</strong> 90 days in staged milestones</span>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-zinc-300 font-serif leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong className="text-zinc-200 font-sans">Delivery:</strong> Direct CMS installation or code files for your developer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <PackageSelectLink
                  href={tier2.ctaHref}
                  packageId={foundationCore.code}
                  packageName={tier2.name}
                  priceExGst={foundationCore.priceExGst}
                  className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-white text-zinc-950 font-black text-sm transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.45)] text-left cursor-pointer"
                >
                  <span>{tier2.ctaText} →</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                </PackageSelectLink>
              </div>
            </div>
          </article>

          {/* Card 3: Monthly Improvements (AEO Sprints) */}
          <article className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 group">
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Monthly Improvements</span>
                </div>
              </div>

              {/* Title & Pricing Block */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-soehne-breit">{tier3.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    From $495 AUD
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">ex. GST (or $1,980/mo bundle)</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400 font-sans">
                  Monthly technical cycles &bull; No lock-in contracts &bull; Pause anytime
                </p>
              </div>

              {/* Single-Sentence Scope */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif pt-1">
                Focused monthly technical work blocks to clear site bottlenecks, expand service pages, and adapt to search updates.
              </p>

              {/* 4 Scannable Deliverables */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <ul className="space-y-3 text-xs font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Monthly Work Focus</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Dedicated execution across code fixes, content updates, or directory cleanup.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Flexible 30-Day Cycles</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Clear scope agreed upon each month with zero long-term commitments.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Progress Verification</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Verification checks on indexing health, search appearance, and data accuracy.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">Documentation &amp; Handoff</div>
                      <div className="text-[11px] text-zinc-400 font-serif leading-snug">Plain-English summary and review call for all completed updates.</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Delivery Details */}
              <div className="pt-3 border-t border-white/10">
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3.5 space-y-2">
                  <div className="flex items-start gap-2 font-mono text-xs text-white">
                    <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Turnaround:</strong> 10 business days per sprint cycle</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-zinc-300 font-serif leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-zinc-200 font-sans">Flexibility:</strong> Adjust priorities monthly or cancel at the end of any cycle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <PackageSelectLink
                href={tier3.ctaHref}
                packageId={macroSku.code}
                packageName={tier3.name}
                priceExGst={macroSku.priceExGst}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-purple-400 text-white font-bold text-xs transition-all duration-300 shadow-sm group-hover:bg-zinc-800 text-left cursor-pointer"
              >
                <span>{tier3.ctaText} →</span>
                <ArrowRight className="w-4 h-4 text-purple-400 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </PackageSelectLink>
            </div>
          </article>
        </div>

        {/* Semantic Service Architecture Decoupling: Core Solutions Navigation Landmark */}
        <nav aria-label="Core solutions" className="mt-14 w-full max-w-5xl mx-auto text-left relative z-10 border-t border-white/10 pt-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
            Explore AI Search Support
          </div>
          <h3 className="text-lg font-bold text-slate-100 mb-4 font-soehne-breit">
            Get Expert support and service
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li>
              <Link
                href="/solutions/aeo-blueprint"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Strategic Blueprint &amp; Roadmap</span>
                <span className="text-xs text-slate-400">Diagnostic gap analysis &amp; engineering plan</span>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/aeo-sprint"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Technical Implementation</span>
                <span className="text-xs text-slate-400">Deterministic schema &amp; knowledge node deployment</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/aeo/local-business"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Local Visibility Support</span>
                <span className="text-xs text-slate-400">GEO optimisation &amp; citation integrity</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default CoreEngagementsGrid;

