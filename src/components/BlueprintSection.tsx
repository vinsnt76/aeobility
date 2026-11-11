import React from 'react';
import { ArrowRight, Compass, Milestone, Layers, ShieldCheck, Clock, Rocket, Zap, FileCode, Users } from 'lucide-react';
import Link from 'next/link';
import { TECHNICAL_SPRINT_CATALOG, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

function CheckBadge({ color = 'cyan' }: { color?: 'cyan' | 'purple' }) {
  const isPurple = color === 'purple';
  return (
    <span
      className={`w-4 h-4 rounded-full ${
        isPurple ? 'bg-purple-950/80 border-purple-400/50 text-purple-300' : 'bg-cyan-950/80 border-cyan-400/50 text-cyan-300'
      } border inline-flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 select-none`}
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export default function BlueprintSection() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];

  const blueprintPhases = [
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      phase: 'Phase 1 • Days 1–30',
      title: 'Foundation & Entity Disambiguation',
      description: 'Analyse existing assets and organise business details so Google, map services, and modern AI engines can resolve your business identity with zero ambiguity.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-cyan-400" />,
      phase: 'Phase 2 • Days 31–60',
      title: 'Atomic Answers & Positional Optimisation',
      description: 'Optimise local listings, Google Business Profile attributes, and structure targeted question-and-answer atomic passages that capture high-intent search queries.',
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      phase: 'Phase 3 • Days 61–90',
      title: 'Semantic Lattice & Authority Scaling',
      description: 'Acquire high-quality local mentions and directory citations while connecting pages with structured internal link lattices to solidify ongoing generative visibility.',
    },
  ];

  const methodologySteps = [
    {
      icon: <Zap className="w-4 h-4 text-cyan-400" />,
      step: 'Step 1: Diagnostic Discovery',
      title: 'DOM-Level Schema & Entity Architecture Audit',
      description: 'Full technical crawl evaluating structured data integrity, multi-source entity reconciliation, canonical health, and query-level indexation signals across search engines and AI models.'
    },
    {
      icon: <FileCode className="w-4 h-4 text-cyan-400" />,
      step: 'Step 2: Retrieval Testing',
      title: 'Passage Density & Positional Evaluation',
      description: 'Empirical assessment of 90–120 token extraction passages to evaluate how conversational LLMs retrieve and cite your brand.'
    },
    {
      icon: <Milestone className="w-4 h-4 text-cyan-400" />,
      step: 'Step 3: Roadmap Architecture',
      title: 'Sequenced 90-Day Sprint Backlog',
      description: 'Chronological sprint plan detailing priority fixes, required labour allocation, and technical prerequisites ready for code deployment.'
    },
    {
      icon: <Users className="w-4 h-4 text-cyan-400" />,
      step: 'Step 4: Executive Briefing',
      title: '45-Minute Strategic Walkthrough',
      description: 'Dedicated screen-share presentation of diagnostic findings and roadmap execution with your marketing and engineering leads.'
    }
  ];

  return (
    <section id="blueprint" aria-labelledby="roadmap-title" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/10">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-aeo-purple/20 to-aeo-cyan/20 glow-blur opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Methodology & Strategic Process */}
          <article aria-labelledby="roadmap-title" className="lg:col-span-7 relative">
            {/* Geometric Grid Background Motif */}
            <div className="absolute inset-y-0 -inset-x-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
            
            <div className="relative z-10 space-y-6">
              {/* Eyebrow */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-300 font-medium font-mono">
                  <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                  <span>90-Day Sprint Architecture</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-xs text-purple-300 font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>Operational Methodology</span>
                </div>
              </div>

              {/* Title & Concept Header */}
              <header className="space-y-3">
                <h2 id="roadmap-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-soehne-breit tracking-tight text-white">
                  The 90-Day Execution Methodology<br />
                  <span className="text-gradient-aeo">From Diagnostic to Generative Dominance</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-serif">
                  The Strategic Blueprint is not a static PDF audit. It is the operational master plan that powers your 90-day technical sprint execution. We diagnose missing business entities, broken citations, and schema errors across your digital footprint, translating them into an actionable sprint backlog for your engineering team or our turnkey deployment.
                </p>
              </header>

              {/* 4-Step Operational Journey */}
              <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider block">
                  How The Strategic Blueprint Translates Into Execution
                </h3>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans list-none p-0 m-0">
                  {methodologySteps.map((step, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-cyan-500/10 border border-cyan-400/20 inline-flex">
                          {step.icon}
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase text-cyan-300">{step.step}</span>
                      </div>
                      <h4 className="font-bold text-white text-xs">{step.title}</h4>
                      <p className="text-zinc-400 font-serif leading-relaxed text-[11px]">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Commercial Credit Bridge */}
              <aside aria-label="Commercial Guarantee" className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/50 via-zinc-950 to-purple-950/40 border border-cyan-500/30 flex items-start gap-3">
                <CheckBadge color="cyan" />
                <div className="space-y-1 text-xs">
                  <span className="font-mono font-bold text-cyan-300 block uppercase tracking-wider">
                    Commercial Guarantee: 100% Credit-Back Corridor ({GOVERNANCE_RULES.creditWindowDays} Days)
                  </span>
                  <p className="text-zinc-300 font-serif leading-relaxed">
                    100% of your {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint fee is credited directly toward AEO Foundation when activated within {GOVERNANCE_RULES.creditWindowDays} days of findings delivery.
                  </p>
                </div>
              </aside>

              {/* Action Button & Proximity Reassurance Cluster */}
              <footer className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact?tier=blueprint"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                    title="Commission Strategic Blueprint"
                  >
                    <span>Commission Strategic Blueprint ({formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })}) →</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days"
                    className="text-xs text-zinc-400 hover:text-cyan-300 font-mono underline transition-colors"
                  >
                    Read 90-Day Case Study
                  </Link>
                </div>

                {/* Immediate Proximity Reassurance Row */}
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono pt-1 list-none p-0 m-0">
                  <li className="flex items-center gap-1.5 text-cyan-300 font-bold">
                    <CheckBadge color="cyan" />
                    <span>100% Credited (60 Days)</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-zinc-300">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>5-7 Business Day Turnaround SLA</span>
                  </li>
                  <li className="flex items-center gap-1.5 text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% Client IP Ownership</span>
                  </li>
                </ul>
              </footer>
            </div>
          </article>

          {/* Right Column: 90-Day Execution Plan & Governance */}
          <aside aria-label="90-Day Execution Roadmap" className="lg:col-span-5 space-y-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl">
              <div className="p-6 sm:p-8 space-y-6 bg-neutral-950/90 rounded-xl">
                <header className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold font-soehne-breit text-white">
                    90-Day Execution Roadmap
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">Staged Sprints</span>
                </header>
                
                <div className="space-y-5">
                  {blueprintPhases.map((phase, idx) => (
                    <article key={idx} className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 mt-0.5">
                        {phase.icon}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                          {phase.phase}
                        </span>
                        <h4 className="text-sm font-bold text-white font-soehne-breit">{phase.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed font-serif">{phase.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Staged Delivery Governance Principles */}
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 space-y-2.5">
                  <span className="text-xs font-mono font-bold text-cyan-300 block uppercase tracking-wider">
                    Governed Delivery Principles:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300 font-serif list-none p-0 m-0">
                    <li className="flex items-center gap-2">
                      <CheckBadge color="cyan" />
                      <span>Deterministic milestone sign-off for every deployed sprint</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckBadge color="cyan" />
                      <span>Zero locked-in monthly retainers or long-term contracts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckBadge color="cyan" />
                      <span>Open-book code PRs, schema mapping logs &amp; full IP transfer</span>
                    </li>
                  </ul>
                </div>

                <footer className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Cadence: 30-Day Governed Cycles</span>
                  <span>Turnaround: 5–7 Business Days</span>
                </footer>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



