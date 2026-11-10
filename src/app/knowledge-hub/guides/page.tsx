import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, BookOpen } from 'lucide-react';
import GuidesDirectoryGrid from './GuidesDirectoryGrid';

export const metadata = {
  title: "AEO & AI Search Technical Guides | AEObility",
  description: "Access industry-standard technical guides on Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and entity authority.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/guides",
  },
};

export default function GuidesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://aeobility.com.au/knowledge-hub/guides#webpage",
    "name": "AEObility AEO & AI Search Technical Guides",
    "description": "Access industry-standard technical guides on Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and entity authority.",
    "url": "https://aeobility.com.au/knowledge-hub/guides",
    "isPartOf": {
      "@id": "https://aeobility.com.au/#website"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        {/* Header Hero */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Guides Directory</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            AEO &amp; AI Search <span className="text-gradient-aeo">Technical Guides</span>
          </h1>
          <p className="text-lg text-zinc-300 font-light max-w-2xl font-serif leading-relaxed">
            In-depth technical guides detailing Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and structured entity graphs for Australian enterprises.
          </p>
        </header>

        {/* Interactive Guides Grid with Faceted Filtering */}
        <GuidesDirectoryGrid />

        {/* Consolidated Commercial Transition Banner (Single Dominant CTA) */}
        <section className="p-8 sm:p-10 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border border-aeo-cyan/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative isolate overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aeo-cyan/50 to-transparent pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-mono text-aeo-cyan uppercase tracking-wider font-semibold">
              Diagnostic &amp; Architecture Review
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need a custom technical audit for your digital footprint?
            </h3>
            <p className="text-sm text-zinc-300 font-serif font-light max-w-xl leading-relaxed">
              Our 60-second interactive diagnostic evaluates your web architecture against Gemini 768-dim embeddings, RAG survival criteria, and local entity signals.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
            {/* Single Primary Dominant CTA */}
            <Link
              href="/diagnostic"
              className="px-7 py-3.5 rounded-xl bg-aeo-cyan text-black font-extrabold text-xs hover:bg-white transition-all shadow-[0_0_25px_rgba(0,229,255,0.35)] flex items-center gap-2 group shrink-0"
            >
              <span>Run Free 60s Visibility Scan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Subordinate Secondary Text Link */}
            <Link
              href="/solutions/aeo-blueprint"
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group pt-1"
            >
              <span>Or view $995 Strategic Blueprint details</span>
              <span className="text-aeo-cyan group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
