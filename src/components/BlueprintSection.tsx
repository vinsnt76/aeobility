import React from 'react';
import { ArrowRight, Compass, Milestone, Layers, ShieldCheck, Rocket } from 'lucide-react';
import Link from 'next/link';

function CheckBadge() {
  return (
    <span
      className="w-4 h-4 rounded-full bg-[#00E5FF]/15 border-[#00E5FF]/60 text-[#00E5FF] border inline-flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 select-none"
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export default function BlueprintSection() {
  const blueprintPhases = [
    {
      icon: <Compass className="w-5 h-5 text-[#00E5FF]" />,
      phase: 'Phase 1 • Days 1 to 30',
      title: 'Foundation & Entity Disambiguation',
      description: 'Analyse existing assets and organise business details so Google, map services, and modern AI engines can resolve your business identity with zero ambiguity.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-[#00E5FF]" />,
      phase: 'Phase 2 • Days 31 to 60',
      title: 'Atomic Answers & Positional Optimisation',
      description: 'Optimise local listings, Google Business Profile attributes, and structure targeted question-and-answer atomic passages that capture high-intent search queries.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#00E5FF]" />,
      phase: 'Phase 3 • Days 61 to 90',
      title: 'Semantic Lattice & Authority Scaling',
      description: 'Acquire high-quality local mentions and directory citations while connecting pages with structured internal link lattices to solidify ongoing generative visibility.',
    },
  ];

  return (
    <section id="blueprint" aria-labelledby="roadmap-title" className="py-20 md:py-24 relative overflow-hidden bg-[#08090C] text-white border-t border-[#1E293B]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-aeo-purple/20 to-aeo-cyan/20 glow-blur opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111622] border border-[#1E293B] font-mono text-xs uppercase tracking-wider text-[#00E5FF] font-medium">
              <Rocket className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>90-Day Sprint Architecture</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111622] border border-[#1E293B] font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Post-Diagnostic Execution</span>
            </div>
          </div>

          <h2 id="roadmap-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            The 90-Day Execution Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch]">
            What happens after your diagnostic blueprint is complete. We translate findings into three governed 30-day implementation phases that your engineering team or our sprint specialists deploy without retainer lock-in.
          </p>
        </header>

        {/* Crisp 3-Phase Roadmap Grid (Days 1-30 / 31-60 / 61-90) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blueprintPhases.map((phase, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#111622] border border-[#1E293B] hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#08090C] border border-[#1E293B] inline-flex">
                    {phase.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Staged Delivery Governance Footer Bar */}
        <footer className="p-5 sm:p-6 rounded-2xl bg-[#0D1117] border border-[#1E293B] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 list-none p-0 m-0">
            <li className="flex items-center gap-2">
              <CheckBadge />
              <span>Deterministic milestone sign-off per 30-day cycle</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckBadge />
              <span>Zero locked-in monthly retainers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckBadge />
              <span>Open-book code PRs &amp; 100% client IP ownership</span>
            </li>
          </ul>
          <Link
            href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00E5FF] hover:text-cyan-300 transition-colors shrink-0"
          >
            <span>Read 90-Day Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </div>
    </section>
  );
}



