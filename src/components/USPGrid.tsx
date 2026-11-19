import React from 'react';
import { Eye, Target, MessageSquare } from 'lucide-react';

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}

function USPCard({ icon, title, paragraphs }: USPCardProps) {
  return (
    <article className="group relative flex flex-col justify-start p-8 rounded-2xl bg-[#111622] text-white border border-[#1E293B] shadow-2xl hover:border-[#00E5FF]/40 hover:-translate-y-1 transition-all duration-300">
      <header>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#08090C] border border-[#1E293B] mb-6 group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-4">{title}</h3>
      </header>
      <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default function USPGrid() {
  const usps = [
    {
      icon: <Eye className="w-6 h-6 text-aeo-cyan drop-shadow-[0_0_8px_rgba(0,205,216,0.4)]" />,
      title: 'Engineered Direct-Answer Discovery',
      paragraphs: [
        'Modern conversational search systems no longer rely on keyword frequency or external link volume. Answer Engine Optimisation (AEO) re-architects your commercial offerings into discrete, verifiable answer passages that large language models extract during live retrieval.',
        'By structuring your core business capabilities, operating suburbs, and service credentials into deterministic data triples, we improve the retrieval conditions so conversational models like ChatGPT Search, Perplexity, and Google AI Overviews can verify and cite your brand.',
      ],
    },
    {
      icon: <Target className="w-6 h-6 text-aeo-purple drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />,
      title: 'Deterministic Entity Authority',
      paragraphs: [
        'Search engines and AI crawler agents evaluate businesses across connected knowledge graphs rather than disconnected web pages. We link your digital assets directly to verified official sources, Australian Business Register (ABN) filings, and relevant professional registries.',
        'This reduces the risk of AI hallucination, grounds your organisational identity across LLM training sets, and cements local search visibility across Perth and national markets.',
      ],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />,
      title: 'Machine-Readable Schema',
      paragraphs: [
        'Generative systems require unambiguous structured markup to confirm who you are, what you deliver, and where you operate. We deploy connected Schema.org JSON-LD Tri-Graphs connecting Organization, LocalBusiness, ProfessionalService, and OfferCatalog types.',
        'This programmatic transparency gives answer engines the mathematical confidence needed to recommend your services for complex buyer queries.',
      ],
    },
  ];

  return (
    <section id="usp" aria-labelledby="usp-heading" className="py-20 bg-[#08090C] relative border-t border-[#1E293B]">
      {/* Decorative side glow */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-aeo-cyan glow-blur opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <header className="relative text-left max-w-2xl mb-16">
          {/* Geometric Grid Background Motif */}
          <div className="absolute inset-0 -m-8 pointer-events-none bg-grid-motif-dark opacity-60 z-0" />
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#00E5FF] block">
              Entity Authority
            </span>
            <h2 id="usp-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Capture High-Intent Demand Across Google, Maps, and AI
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[56ch]">
              We structure business data into machine-readable knowledge graphs so conversational models evaluate your brand salience and commercial offerings with verifiable confidence.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, idx) => (
            <USPCard
              key={idx}
              icon={usp.icon}
              title={usp.title}
              paragraphs={usp.paragraphs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
