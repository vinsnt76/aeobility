import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const REGIONAL_LOCATIONS = [
  {
    name: 'Perth AI Marketing',
    city: 'Perth, WA',
    href: '/services/ai-search-marketing/perth',
    desc: 'WA headquarters & Perth metro AEO optimisation',
  },
  {
    name: 'Sydney AI Marketing',
    city: 'Sydney, NSW',
    href: '/services/ai-search-marketing/sydney',
    desc: 'NSW enterprise & local business AI search strategy',
  },
  {
    name: 'Melbourne AI Marketing',
    city: 'Melbourne, VIC',
    href: '/services/ai-search-marketing/melbourne',
    desc: 'VIC Generative Engine Optimisation & schema graphs',
  },
  {
    name: 'Brisbane AI Marketing',
    city: 'Brisbane, QLD',
    href: '/services/ai-search-marketing/brisbane',
    desc: 'QLD regional & metro AI visibility services',
  },
  {
    name: 'Adelaide AI Marketing',
    city: 'Adelaide, SA',
    href: '/services/ai-search-marketing/adelaide',
    desc: 'SA Answer Engine Optimisation & citation tracking',
  },
  {
    name: 'Perth SEO Specialist',
    city: 'Perth WA Local',
    href: '/services/perth/seo-specialist',
    desc: 'Lead consultant Vince Baker for WA SEO & AEO',
  },
];

interface RegionalCoverageClusterProps {
  title?: string;
  subtitle?: string;
}

export default function RegionalCoverageCluster({
  title = "Australian Regional AI Search Coverage",
  subtitle = "Direct crawlable links to localised Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) service hubs across major Australian metro markets.",
}: RegionalCoverageClusterProps) {
  return (
    <section className="my-12 p-6 sm:p-8 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-aeo-cyan" />
            <span>National Coverage &amp; Metro Hubs</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-serif max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Direct crawlable HTML anchor links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {REGIONAL_LOCATIONS.map((loc) => (
          <Link
            key={loc.href}
            href={loc.href}
            className="group p-4 bg-slate-950/60 border border-white/10 rounded-2xl hover:border-aeo-cyan/50 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-aeo-cyan transition-colors">
                {loc.city}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-aeo-cyan group-hover:translate-x-0.5 transition-all" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                {loc.name}
              </h4>
              <p className="text-xs text-slate-400 font-serif leading-relaxed mt-1">
                {loc.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
