import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  MapPin, 
  Search, 
  ArrowRight, 
  Phone, 
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Freelance SEO Specialist Perth WA | Vince Baker | AEObility",
  description: "Senior Perth freelance SEO specialist Vince Baker. Local SEO, Schema.org microdata, technical site audits, and Generative Engine Optimisation (GEO) for WA businesses.",
  alternates: {
    canonical: "https://aeobility.com.au/services/perth/seo-specialist",
  },
  openGraph: {
    title: "Freelance SEO Specialist Perth WA | Vince Baker | AEObility",
    description: "Senior Perth freelance SEO specialist Vince Baker. Local SEO, Schema.org microdata, technical site audits, and Generative Engine Optimisation (GEO) for WA businesses.",
    url: "https://aeobility.com.au/services/perth/seo-specialist",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        width: 1200,
        height: 800,
        alt: "Vince Baker - Lead Freelance SEO & AEO Specialist in Perth, Western Australia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance SEO Specialist Perth WA | Vince Baker | AEObility",
    description: "Senior Perth freelance SEO specialist Vince Baker. Local SEO, Schema.org microdata, and Generative Engine Optimisation (GEO).",
    images: ["https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png"],
  },
  keywords: [
    "freelance seo specialist perth",
    "seo specialist perth wa",
    "vince baker seo consultant perth",
    "local seo perth",
    "aeo specialist perth"
  ]
};

export default function PerthSeoSpecialistPage() {
  const suburbs = ["Perth, WA", "Joondalup", "Fremantle", "Mandurah", "Subiaco", "Osborne Park", "Balcatta", "Cannington"];

  const faqs = [
    {
      question: "Why hire a Perth-based freelance SEO specialist instead of an agency?",
      answer: "Working directly with a Perth freelance SEO specialist means direct access to senior technical talent without account manager overhead, bloated monthly retainers, or junior handoffs. You receive transparent fixed-scope deliverables and direct contact with Vince Baker."
    },
    {
      question: "What is the difference between local SEO and Generative Engine Optimisation (GEO)?",
      answer: "Local SEO focuses on ranking your business website and Google Business Profile in local search engine result lists and Google Maps packs. GEO extends local SEO by ensuring AI assistants (ChatGPT, Google AI Overviews, Perplexity) verify your business details and cite your brand when answering local buyer queries."
    },
    {
      question: "What is your 'If I can fix it straight away, no charge' guarantee?",
      answer: "If during our initial diagnostic call or site review we discover a quick technical bug or minor schema error that can be fixed immediately within 15 minutes, Vince will resolve it for free on the spot."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://aeobility.com.au/services/perth/seo-specialist#hub",
        "name": "AEObility Perth SEO & AEO Specialist Hub",
        "url": "https://aeobility.com.au/services/perth/seo-specialist",
        "telephone": "+61480286282",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        },
        "areaServed": suburbs.map(s => ({
          "@type": "City",
          "name": s
        })),
        "employee": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "jobTitle": "Lead SEO Specialist & Founder",
          "url": "https://aeobility.com.au/vince-baker",
          "sameAs": [
            "https://www.linkedin.com/in/vince-baker/",
            "https://github.com/vinsnt76"
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/perth/seo-specialist#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar subnavItems={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Perth Local SEO &amp; AEO Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Freelance SEO Specialist <span className="text-gradient-aeo">in Perth, WA</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Engineering local search visibility, technical website audits, and AI search entity architecture for Western Australian businesses.
            </p>

            <p className="text-base text-zinc-300 font-serif leading-relaxed max-w-3xl mx-auto">
              Moving beyond legacy keyword stuffing. Vince Baker delivers structured local SEO, Schema.org microdata, and Generative Engine Optimisation (GEO) to help Perth businesses dominate Google Maps, local search results, and AI answer platforms.
            </p>

            {/* Suburb Cluster Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-xs font-mono text-zinc-400 mr-2">Coverage Areas:</span>
              {suburbs.map((s, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-mono">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)]"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run Free Perth SEO Audit</span>
              </Link>
              <a
                href="tel:0480286282"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all hover:bg-zinc-800"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call 0480 286 282</span>
              </a>
            </div>
          </section>

          {/* Specialist Profile Spotlight */}
          <section className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0">
                <Image
                  src="/images/about/Profile-Picture-Vinnie.png"
                  alt="Vince Baker - Perth SEO Specialist & Founder at AEObility"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">Vince Baker</h2>
                  <span className="text-xs text-cyan-400 font-mono bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                    Lead Specialist &amp; Founder
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Over 15 years of technical marketing experience across digital agencies, automation consulting, and AEO search systems in Perth. Direct, unhedged communication with zero agency fluff.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-cyan-300">
                  <Link href="/vince-baker" className="hover:underline flex items-center gap-1">
                    <span>View Vince Baker Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/about/freelance-seo-consultant-perth" className="hover:underline flex items-center gap-1 text-purple-300">
                    <span>View Freelance Consultant Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/services/aeo/local-business" className="hover:underline flex items-center gap-1 text-cyan-300">
                    <span>Local Business AEO System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/knowledge-hub/geo" className="hover:underline flex items-center gap-1 text-purple-300">
                    <span>GEO Knowledge Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Perth Local SEO &amp; AEO Deliverables</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Fixed-scope implementations focused on local map packs and AI citation readiness.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-white font-soehne-breit">1. Technical &amp; Local SEO Audits</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Identify crawl errors, indexation bottlenecks, slow page load speeds, and missing canonical references holding back your Perth website rankings.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-white font-soehne-breit">2. Google Maps &amp; Citation Clean-Up</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Resolve conflicting business names, addresses, and phone numbers (NAP) across major Australian directories to clear ambiguity for search scrapers.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/80 border border-white/10 rounded-2xl space-y-3">
                <h3 className="text-lg font-bold text-white font-soehne-breit">3. Local Entity Schema Deployment</h3>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  Deploy valid JSON-LD LocalBusiness, ProfessionalService, and areaServed schemas connecting your physical location to target WA suburbs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Perth SEO FAQ</h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-zinc-950/80 border border-white/10 rounded-xl space-y-2">
                  <h3 className="text-base font-bold text-white font-soehne-breit">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
