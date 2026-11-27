'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowRight } from 'lucide-react';

export default function HeroScanForm() {
  const [siteUrl, setSiteUrl] = useState('');
  const router = useRouter();

  const handleHeroScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = siteUrl.trim();
    if (trimmed) {
      const normalisedUrl = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
      router.push(`/diagnostic?url=${encodeURIComponent(normalisedUrl)}`);
    } else {
      router.push('/diagnostic');
    }
  };

  return (
    <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 max-w-xl">
      <div className="space-y-1">
        <span className="text-xs font-semibold text-aeo-cyan block">
          Check local discoverability
        </span>
        <p className="text-xs text-white/70 font-light leading-relaxed">
          Paste your primary business URL for an instant entity visibility report. No technical noise.
        </p>
      </div>

      <form onSubmit={handleHeroScanSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Globe className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            placeholder="https://yourbusiness.com.au"
            className="w-full bg-black/60 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-aeo-cyan transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3.5 bg-aeo-cyan text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,205,216,0.25)] flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Check my local visibility</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
