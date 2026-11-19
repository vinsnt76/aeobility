import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export const metadata = {
  title: "What stops my business from showing up? | AEObility",
  description: "FAQ on eligibility criteria for Answer Engine Optimisation (AEO) and what blockers stop your business from showing up in AI search engines.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/constraints",
  },
};

export default function AEOConstraintsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://aeobility.com.au/services/aeo/constraints#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a small website benefit from AEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, smaller sites can benefit disproportionately because every high-density page carries massive weight in how models understand your domain. By building a clean, highly structured topic graph of core entities and explicit relationships, small sites can establish tight, authoritative semantic nodes that get cited for niche, long-tail queries even without a massive backlink profile."
        }
      },
      {
        "@type": "Question",
        "name": "What are the primary risks of not optimising for AEO in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Failing to optimise content structure results in 'attention dilution' and the 'lost in the middle' effect, where LLMs fail to retrieve critical caveats and safety qualifiers. Furthermore, unoptimised pages produce noisy, averaged vector embeddings, causing generative engines to misinterpret your brand's facts or completely ignore your products in personalized conversational summaries."
        }
      }
    ]
  };

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

      <Navbar subnavItems={HUB_SUBNAV_MAPS.aeo} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-8">
        <section className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              What Stops My Business from <span className="text-gradient-aeo">Showing Up?</span>
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Here’s what’s actually blocking your visibility. Review authority thresholds, trust signals, weak entities, and local intent mismatches.
            </p>
          </div>

          {/* FAQ section matching the FAQPage Schema exactly (Fidelity Rule verified) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Eligibility & Trust FAQ</h2>
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01] divide-y divide-white/5">
              <div className="p-6">
                <h3 id="can-a-small-website-benefit-from-aeo" className="font-semibold text-sm sm:text-base text-white/95 mb-2">Can a small website benefit from AEO services?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Yes, smaller sites can benefit disproportionately because every high-density page carries massive weight in how models understand your domain. By building a clean, highly structured topic graph of core entities and explicit relationships, small sites can establish tight, authoritative semantic nodes that get cited for niche, long-tail queries even without a massive backlink profile.
                </p>
              </div>

              <div className="p-6">
                <h3 id="what-are-the-primary-risks-of-not-optimising" className="font-semibold text-sm sm:text-base text-white/95 mb-2">What are the primary risks of not optimising for AEO in 2026?</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Failing to optimise content structure results in &apos;attention dilution&apos; and the &apos;lost in the middle&apos; effect, where LLMs fail to retrieve critical caveats and safety qualifiers. Furthermore, unoptimised pages produce noisy, averaged vector embeddings, causing generative engines to misinterpret your brand&apos;s facts or completely ignore your products in personalized conversational summaries.
                </p>
              </div>
            </div>
          </div>

          {/* Sibling/Lateral Corridor navigation (Semantic Lattice) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Semantic Connections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Is AEO just SEO with a new name?
              </Link>
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                Best AEO Strategies: Making Your Business AI-Readable
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
