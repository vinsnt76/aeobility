import React from 'react';
import Link from 'next/link';
import { Eye, Target, MessageSquare } from 'lucide-react';

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function USPCard({ icon, title, description }: USPCardProps) {
  return (
    <article className="group relative flex flex-col justify-between p-8 rounded-2xl bg-neutral-900/40 text-white border border-white/5 shadow-2xl hover:border-aeo-cyan/20 hover:bg-neutral-900/60 hover:-translate-y-1 transition-all duration-300">
      <header>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-soehne-breit">{title}</h3>
      </header>
      <p className="text-sm text-white/60 font-light leading-relaxed font-serif">{description}</p>
    </article>
  );
}

export default function USPGrid() {
  const usps = [
    {
      icon: <Eye className="w-6 h-6 text-aeo-cyan drop-shadow-[0_0_8px_rgba(0,205,216,0.4)]" />,
      title: 'Engineered Direct-Answer Discovery',
      description: 'Improve how Search, Maps, and AI platforms interpret and choose your business facts so relevant local customers find you when they search.',
    },
    {
      icon: <Target className="w-6 h-6 text-aeo-purple drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />,
      title: 'Strengthen Visibility Signals',
      description: 'Strengthen the structured signals and answer-ready content that support your relevant local search visibility and ongoing discovery.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />,
      title: 'Build a Machine-Readable Foundation',
      description: 'Build a clean, verified data foundation that makes it easier for customers to assess your services and connect directly with your day-to-day pipeline.',
    },
  ];

  return (
    <section id="usp" aria-labelledby="usp-heading" className="py-20 bg-black relative">
      {/* Decorative side glow */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-aeo-cyan glow-blur opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <header className="relative text-left max-w-2xl mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-aeo-cyan uppercase font-mono block">
              Entity Authority
            </span>
            <h2 id="usp-heading" className="text-3xl sm:text-4xl font-extrabold text-white font-soehne-breit">
              Capture High-Intent Demand Across Google, Maps, and AI
            </h2>
            <p className="text-base text-white/60 font-light font-serif">
              We structure business data into machine-readable knowledge graphs. Explore our <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-semibold">entity authority building framework for AI search</Link> to understand how conversational models evaluate brand salience. Read our <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-aeo-cyan hover:underline font-semibold">90-Day AEO Blueprint Case Study</Link> for an empirical look at commercial query visibility.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, idx) => (
            <USPCard
              key={idx}
              icon={usp.icon}
              title={usp.title}
              description={usp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
