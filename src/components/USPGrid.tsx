import React from 'react';
import { Eye, Target, MessageSquare } from 'lucide-react';

interface USPCardProps {
  icon: React.ReactNode;
  title: string;
  lead: string;
  bullets: string[];
}

function USPCard({ icon, title, lead, bullets }: USPCardProps) {
  return (
    <article className="group relative flex flex-col justify-between h-full bg-[#111622] border border-[#1E293B] hover:border-[#00E5FF]/40 rounded-2xl p-6 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors duration-200 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 ease-out text-white">
      <header className="space-y-3 mb-5">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#08090C] border border-[#1E293B] mb-4">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
          {lead}
        </p>
      </header>

      <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed pt-4 border-t border-[#1E293B] list-none p-0 m-0">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function USPGrid() {
  const usps = [
    {
      icon: <Eye className="w-5 h-5 text-[#00E5FF]" />,
      title: 'Direct-Answer Service Pages',
      lead: 'Turn your service pages into trusted answers AI platforms can verify, cite, and recommend.',
      bullets: [
        'Format core services, operating suburbs, and credentials into self-contained answer blocks.',
        'Give ChatGPT Search, Perplexity, and Google AI Overviews clear facts to cite.',
        'Increase the likelihood that AI tools recommend your business for local buyer queries.',
      ],
    },
    {
      icon: <Target className="w-5 h-5 text-[#00E5FF]" />,
      title: 'Verified Business Authority',
      lead: 'Prove your business is legitimate and trustworthy wherever AI systems validate businesses.',
      bullets: [
        'Link your website directly to your Australian Business Register (ABN) filings and industry licences.',
        'Align your business name, address, and services across Google, Maps, and key directories.',
        'Reduce the risk of AI platforms displaying outdated or incorrect business information.',
      ],
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#00E5FF]" />,
      title: 'AI-Ready Structured Data',
      lead: 'Convert your website into machine-readable data that search engines and AI platforms can understand with confidence.',
      bullets: [
        'Install connected Schema.org data defining who you are, what you charge, and where you operate.',
        'Replace disconnected meta tags with clean, validated business markup.',
        'Remove guesswork when buyers ask AI engines for local recommendations.',
      ],
    },
  ];

  return (
    <section id="usp" aria-labelledby="usp-heading" className="py-20 bg-[#08090C] relative border-t border-[#1E293B]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {usps.map((usp, idx) => (
            <USPCard
              key={idx}
              icon={usp.icon}
              title={usp.title}
              lead={usp.lead}
              bullets={usp.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
