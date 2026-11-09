import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: "AEO Case Studies & Visibility Reports | AEObility",
  description: "Explore real-world case studies demonstrating how structural search optimisation, schema markup, and intent alignment drive organic growth and revenue.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies",
  },
};

export default function CaseStudiesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AEObility Structural Search Optimisation Case Studies",
    "description": "Explore real-world case studies demonstrating how structural search optimisation, schema markup, and intent alignment drive organic growth and revenue.",
    "url": "https://aeobility.com.au/knowledge-hub/case-studies",
    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au"
    }
  };

  const caseStudies = [
    {
      title: "How Structural Search Alignment Drove a +17% Sales Uplift",
      client: "Baby Bento",
      description: "A real-world ecommerce case study showing how AEObility rebuilt clarity, intent alignment, and organic momentum to reverse declining traffic trends.",
      href: "/knowledge-hub/case-studies/baby-bento",
      image: "/images/knowledge-hub/case-study-aeo-lifts-traffic.webp",
      alt: "Graph illustrating improved CTR, ranking position, and qualified organic traffic following AEObility’s structural optimisation.",
      metrics: [
        { label: "Sales Uplift", value: "+17%" },
        { label: "CTR Improvement", value: "+95%" },
        { label: "Qualified Clicks", value: "+55%" }
      ]
    },
    {
      title: "From Entity Ambiguity to Commercial Discovery",
      client: "AEObility",
      description: "An empirical case study detailing the first 78 days of AEObility's 90-Day AEO/GEO Blueprint on a fresh Australian domain (1 July – 16 September 2026), measuring commercial query visibility and AI citations.",
      href: "/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
      image: "/images/knowledge-hub/aeo-geo-case-study_AEObilty.webp",
      alt: "Abstract telemetry visualisation of semantic graphs representing AEObility's AEO and GEO architecture, demonstrating entity resolution and commercial search intent indexing.",
      metrics: [
        { label: "Core Exposure", value: "75k" },
        { label: "Top Rank", value: "Pos 4" },
        { label: "Salience Share", value: "83.7%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>Performance Proof</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              AEO & Structural Optimisation <span className="text-gradient-aeo">Case Studies</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              Real evidence of how structuring content schemas, resolving search intent models, and re-engineering system layout assets transforms organic business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-aeo-cyan/20 transition-all flex flex-col md:flex-row h-full">
                <div className="relative aspect-video md:w-2/5 w-full bg-neutral-950 flex-shrink-0 min-h-[220px]">
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="text-[10px] text-aeo-cyan uppercase tracking-widest font-bold">
                      {cs.client}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-aeo-cyan transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-serif">
                      {cs.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      {cs.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-extrabold text-white">{metric.value}</div>
                          <div className="text-[9px] text-white/40 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={cs.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
                    >
                      Read Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Hub Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5">
            <Link href="/knowledge-hub" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Knowledge Hub Overview
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
