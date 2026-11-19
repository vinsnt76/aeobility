import React from 'react';
import Link from 'next/link';
import { Sparkles, Rocket, Compass, Clock, Boxes, ShieldCheck } from 'lucide-react';
import { PackageSelectLink } from '@/components/sections/PackageSelectLink';
import { PRICING_TIERS, TECHNICAL_SPRINT_CATALOG, formatAudCurrency } from '@/lib/pricing';

function CheckBadge({ color = 'cyan' }: { color?: 'cyan' | 'slate' }) {
  const isCyan = color === 'cyan';
  return (
    <span
      className={`w-4 h-4 rounded-full ${
        isCyan
          ? 'bg-[#00E5FF]/15 border-[#00E5FF]/60 text-[#00E5FF]'
          : 'bg-slate-800/80 border-slate-600/60 text-slate-300'
      } border inline-flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 select-none`}
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export function CoreEngagementsGrid() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];

  const tier1 = PRICING_TIERS.find((t) => t.id === 'blueprint') || PRICING_TIERS[0];
  const tier2 = PRICING_TIERS.find((t) => t.id === 'foundation') || PRICING_TIERS[1];
  const tier3 = PRICING_TIERS.find((t) => t.id === 'macro-sprints') || PRICING_TIERS[2];

  return (
    <section aria-labelledby="packages-title" className="w-full bg-[#08090C] py-16 md:py-20 border-t border-[#1E293B] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-radial from-aeo-cyan/10 via-aeo-purple/5 to-transparent glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <header className="text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111622] border border-[#1E293B] text-xs text-[#00E5FF] font-medium font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
            <span>Zero Retainer Lock-In</span>
          </div>
          <h2 id="packages-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-soehne-breit">
            Fixed-Scope Sprints.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-serif leading-relaxed">
            Work directly with a qualified <Link href="/services/perth/seo-specialist" className="text-[#00E5FF] underline hover:text-cyan-300 font-medium">Perth SEO specialist &amp; local AEO consultant</Link> to secure top placement across Google Maps, local search, and AI answer engines. All engagements are clearly scoped and transparently priced.
          </p>
        </header>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          {/* Left Column (lg:col-span-7): Featured Primary Card - Strategic Blueprint */}
          <article className="lg:col-span-7 flex flex-col justify-between bg-[#111622] border-2 border-[#00E5FF] rounded-2xl p-7 sm:p-9 shadow-[0_0_40px_rgba(0,229,255,0.12)] transition-all duration-300 group">
            <div className="space-y-6">
              {/* Card Header: Eyebrow + 5-DAY SLA Badge, Title & Pricing Block */}
              <header className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[11px] font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5" />
                    <span>DIAGNOSTIC &amp; PLANNING</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090C] border border-[#00E5FF]/40 text-[11px] font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                    <Clock className="w-3 h-3 text-[#00E5FF]" />
                    <span>5-DAY SLA</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">{tier1.name}</h3>
                  <p className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}
                    </span>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">EX. GST</span>
                  </p>
                </div>
              </header>

              {/* Concise Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-serif">
                Find the data errors, missing business facts, and structured code issues preventing search engines and AI models from recommending your business.
              </p>

              {/* 4 Core Deliverables Checklist */}
              <div className="pt-5 border-t border-[#1E293B]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans list-none p-0 m-0">
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08090C]/70 border border-[#1E293B]">
                    <CheckBadge color="cyan" />
                    <p className="space-y-1">
                      <strong className="block font-bold text-white text-xs sm:text-sm">Search &amp; AI Visibility Audit</strong>
                      <span className="block text-xs text-slate-400 font-serif leading-snug">Checks how Google, Apple Maps, and AI tools extract your business details.</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08090C]/70 border border-[#1E293B]">
                    <CheckBadge color="cyan" />
                    <p className="space-y-1">
                      <strong className="block font-bold text-white text-xs sm:text-sm">Code &amp; Schema Review</strong>
                      <span className="block text-xs text-slate-400 font-serif leading-snug">Identifies broken structured data, incorrect tags, and indexing errors.</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08090C]/70 border border-[#1E293B]">
                    <CheckBadge color="cyan" />
                    <p className="space-y-1">
                      <strong className="block font-bold text-white text-xs sm:text-sm">Prioritised 90-Day Plan</strong>
                      <span className="block text-xs text-slate-400 font-serif leading-snug">An ordered checklist of required technical fixes and page updates.</span>
                    </p>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08090C]/70 border border-[#1E293B]">
                    <CheckBadge color="cyan" />
                    <p className="space-y-1">
                      <strong className="block font-bold text-white text-xs sm:text-sm">45-Minute Review Call</strong>
                      <span className="block text-xs text-slate-400 font-serif leading-snug">A direct walkthrough of findings and next steps with your team.</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E293B]">
              {/* Law of Proximity Risk-Reversal Callout */}
              <div className="bg-[#08090C]/90 border border-[#00E5FF]/30 rounded-xl p-4 mb-6 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="font-bold text-white">100% Credit Guarantee:</strong> Your full $995 AUD Strategic Blueprint fee is credited directly toward AEO Foundation implementation when activated within 60 days.
                </p>
              </div>

              {/* Dominant Primary CTA */}
              <PackageSelectLink
                href={tier1.ctaHref}
                packageId={bpSku.code}
                packageName={tier1.name}
                priceExGst={bpSku.priceExGst}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-[#08090C] font-bold hover:bg-[#33ECFF] py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.25)] text-sm cursor-pointer"
              >
                <span>Commission Strategic Blueprint →</span>
              </PackageSelectLink>
            </div>
          </article>

          {/* Right Column (lg:col-span-5): Secondary Stacked Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Secondary Card 1: AEO Foundation */}
            <article className="bg-[#0D1117] border border-[#1E293B] rounded-2xl p-6 transition-all duration-300 space-y-4">
              <header className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    <Boxes className="w-3 h-3 text-slate-300" />
                    <span>Core Implementation</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    90-DAY EXECUTION
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-soehne-breit">{tier2.name}</h3>
                  <p className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-extrabold text-white font-mono">
                      {formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })}
                    </span>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">/ MO EX. GST</span>
                  </p>
                </div>
              </header>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                Hands-on technical implementation to resolve code errors, rewrite up to 10 core pages for direct-answer search, and align your business listings.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#1E293B] text-xs font-sans list-none p-0 m-0">
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Structured Data Installation</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Direct-Answer Content (10 Pages)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Internal Page Linking Lattice</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Directory &amp; Map Alignment</span>
                </li>
              </ul>

              <div className="pt-2">
                <PackageSelectLink
                  href={tier2.ctaHref}
                  packageId={foundationCore.code}
                  packageName={tier2.name}
                  priceExGst={foundationCore.priceExGst}
                  className="w-full inline-flex items-center justify-center border border-[#1E293B] hover:border-slate-500 bg-transparent text-slate-200 hover:text-white font-medium py-3 px-5 rounded-xl transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  <span>Deploy AEO Foundation →</span>
                </PackageSelectLink>
              </div>
            </article>

            {/* Secondary Card 2: AEO Sprints */}
            <article className="bg-[#0D1117] border border-[#1E293B] rounded-2xl p-6 transition-all duration-300 space-y-4">
              <header className="space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    <Rocket className="w-3 h-3 text-slate-300" />
                    <span>Modular Execution</span>
                  </div>
                  <span className="bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 text-xs font-semibold px-2.5 py-0.5 rounded-full font-mono">
                    10-DAY CYCLES
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight font-soehne-breit">{tier3.name}</h3>
                  <p className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-extrabold text-white font-mono">
                      From $495 AUD
                    </span>
                    <span className="text-xs text-slate-400 font-mono">ex. GST</span>
                  </p>
                </div>
              </header>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                Focused technical work blocks to clear site bottlenecks, expand service pages, and adapt to search updates with zero long-term contracts.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#1E293B] text-xs font-sans list-none p-0 m-0">
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Dedicated Monthly Work Focus</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Flexible 30-Day Cycles</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Indexing &amp; Data Verification</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <CheckBadge color="slate" />
                  <span>Documentation &amp; Handoff</span>
                </li>
              </ul>

              <div className="pt-2">
                <PackageSelectLink
                  href={tier3.ctaHref}
                  packageId={macroSku.code}
                  packageName={tier3.name}
                  priceExGst={macroSku.priceExGst}
                  className="w-full inline-flex items-center justify-center border border-[#1E293B] hover:border-slate-500 bg-transparent text-slate-200 hover:text-white font-medium py-3 px-5 rounded-xl transition-colors text-xs sm:text-sm cursor-pointer"
                >
                  <span>Explore AEO Sprints →</span>
                </PackageSelectLink>
              </div>
            </article>
          </div>
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
                href="/services/ai-search-agency"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">AI search agency and AEO consultancy</span>
                <span className="text-xs text-slate-400">Specialist enterprise &amp; SMB AI search engineering</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/aeo/local-business"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Answer Engine Optimisation for Australian small businesses</span>
                <span className="text-xs text-slate-400">Local entity schemas, directory parity &amp; map visibility</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services/geo-marketing"
                className="block p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-900/90 transition-all group"
              >
                <span className="block text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">Generative Engine Optimisation (GEO) services</span>
                <span className="text-xs text-slate-400">Coordinate precision, regional intent &amp; AI citation share</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default CoreEngagementsGrid;

