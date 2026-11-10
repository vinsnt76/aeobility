import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, TrendingUp } from 'lucide-react';

export default function GuidesProofLoops() {
  const caseStudies = [
    {
      title: "Baby Bento E-Commerce AEO Case Study",
      category: "Retail & E-Commerce Proof",
      metrics: [
        { label: "Sales Uplift", value: "+17%" },
        { label: "CTR Growth", value: "+95%" }
      ],
      description: "Real-world retail proof showing how structured schema graphs, atomic content chunking, and verifiable product entities drove measurable revenue across AI search and organic discovery.",
      href: "/knowledge-hub/case-studies/baby-bento",
      actionText: "Review E-Commerce Case Study"
    },
    {
      title: "Review the 90-Day AEO/GEO Blueprint Case Study",
      category: "New Domain Telemetry",
      metrics: [
        { label: "Bing Citations", value: "Top 1" },
        { label: "Index Window", value: "90 Days" }
      ],
      description: "Empirical telemetry tracking rapid indexation, salience share capture, and direct answer synthesis from new domain launch to multi-platform answer engine dominance.",
      href: "/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
      actionText: "Review 90-Day Case Study"
    }
  ];

  return (
    <section 
      aria-label="Empirical Case Studies and Proof Loops" 
      className="space-y-6 pt-6 border-t border-white/10"
    >
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-purple/10 border border-aeo-purple/30 text-xs text-aeo-purple font-mono font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Radial Proof &amp; Evidence Loops</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Empirical Case Studies &amp; Benchmark Data
        </h2>
        <p className="text-sm text-zinc-300 font-serif font-light max-w-xl leading-relaxed">
          Explore documented proof demonstrating how structured entity architecture translates into verifiable AI answer citations and revenue growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, idx) => (
          <Link
            key={idx}
            href={study.href}
            className="group relative isolate overflow-hidden rounded-2xl p-6 sm:p-7 bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-aeo-cyan/50 pointer-events-none transition-all duration-300" />

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                  {study.category}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{study.metrics.map(m => `${m.label}: ${m.value}`).join(' • ')}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                {study.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-serif font-light leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-5">
              <span className="text-xs font-mono text-zinc-400">
                Evidence: <strong className="text-zinc-200">Verifiable Telemetry</strong>
              </span>

              <span className="text-xs font-mono font-semibold text-aeo-cyan group-hover:text-white transition-colors inline-flex items-center gap-1.5">
                <span>{study.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
