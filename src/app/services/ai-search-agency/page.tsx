import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import RegionalCoverageCluster from '@/components/services/RegionalCoverageCluster';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import FaqAccordion from '@/components/FaqAccordion';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Zap,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: "AI Search Agency & AEO Consultancy | AEObility Australia",
  description: "Australia's specialist AI search marketing consultancy. Generative Engine Optimisation, nested JSON-LD schema graph engineering, and brand citation strategy.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-agency",
  },
  openGraph: {
    title: "AI Search Agency & AEO Consultancy | AEObility Australia",
    description: "Australia's specialist AI search marketing consultancy. Generative Engine Optimisation, nested JSON-LD schema graph engineering, and brand citation strategy.",
    url: "https://aeobility.com.au/services/ai-search-agency",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility AI Search Agency consulting interface mapping entity relationship graphs and AI search retrieval pipelines.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Agency & AEO Consultancy | AEObility Australia",
    description: "Australia's specialist AI search marketing consultancy. Generative Engine Optimisation, nested JSON-LD schema graph engineering, and brand citation strategy.",
    images: ["https://aeobility.com.au/images/services/ai-search-marketing-strategy_AEObility.webp"],
  },
  keywords: [
    "ai search agency",
    "aeo consultancy australia",
    "generative engine optimisation agency",
    "schema graph engineering",
    "ai search marketing perth"
  ]
};

export default function AiSearchAgencyPage() {
  const sprintOffers = [
    {
      category: "Diagnostic & Planning",
      title: "GEO Visibility Diagnostic",
      price: "$995 AUD",
      priceSub: "ex. GST • Standalone Audit & Strategic Roadmap",
      description: "Diagnostic starting point evaluating how conversational search engines parse and recommend your business.",
      deliverables: [
        "Live prompt testing across ChatGPT Search, Google AI Overviews, and Perplexity.",
        "Competitor citation overlap and authority gap analysis.",
        "Code and schema review identifying broken tags and indexing errors.",
        "100% of $995 AUD fee credited toward AEO Foundation within 60 days."
      ],
      link: "/diagnostic",
      ctaLabel: "Book Diagnostic Scan"
    },
    {
      category: "Core Setup (Recommended)",
      title: "AEO Foundation",
      price: "$1,980 AUD",
      priceSub: "/ mo ex. GST • 90-day execution",
      description: "Hands-on technical implementation to resolve code errors, rewrite key pages for direct-answer search, and align your business listings.",
      deliverables: [
        "Structured data installation: Valid schema markup added directly to your site or supplied as ready-to-paste code.",
        "Direct-answer content: Up to 10 priority service pages updated into clear, extractable answer blocks.",
        "Internal page linking connecting core services to relevant proof points.",
        "Directory alignment syncing business details across Google, Apple Maps, and Bing."
      ],
      link: "/solutions/aeo-sprint",
      ctaLabel: "Explore Sprint Scope"
    }
  ];

  const differentiators = [
    {
      icon: <Zap className="w-5 h-5 text-aeo-cyan" />,
      title: "Fixed-Scope Sprints",
      description: "No ongoing retainer lock-in or open-ended agency billing. Every project has a clear deliverable roadmap and fixed outcome."
    },
    {
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />,
      title: "Entity Graph Engineering",
      description: "We don't just write blog posts. We build machine-readable JSON-LD schema graphs that define your exact business offer to AI scrapers."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />,
      title: "Founder-Led Delivery",
      description: "Work directly with lead specialist Vinnie Baker. Direct technical execution with zero junior account managers or offshore noise."
    }
  ];

  const faqs = [
    {
      question: "What does an AI Search Agency do?",
      answer: "An AI Search Agency specialises in Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We refactor website content, nested JSON-LD schema markup, and canonical business fact directories so conversational search engines (Google AI Overviews, ChatGPT, Perplexity) accurately cite and recommend your brand."
    },
    {
      question: "Why choose AEObility over a traditional SEO agency?",
      answer: "Traditional SEO agencies focus on keyword density, backlink quantity, and long-term retainer lock-ins. AEObility operates on fixed-scope sprints with zero contract lock-in. We focus on verifiable technical deliverables, clean entity schema graphs, and auditable baseline prompt tracking."
    },
    {
      question: "Who is AEO Foundation best suited for?",
      answer: "AEO Foundation is ideal for Australian service businesses, local operators, and growth-focused SMEs that have strong market expertise but an unclear or fragmented digital footprint across Google Maps, Search, and AI platforms."
    },
    {
      question: "How long does an AEO engagement take?",
      answer: "The standalone GEO Visibility Diagnostic is delivered within 5 business days. AEO Foundation is executed across 4 structured business weeks."
    },
    {
      question: "Is the $995 AUD Diagnostic price credited toward full implementation?",
      answer: "Yes. 100% of your $995 AUD Diagnostic fee is credited directly toward AEO Foundation if booked within 60 days of audit delivery."
    },
    {
      question: "Do you guarantee #1 rankings or ChatGPT citations?",
      answer: "No consultant can guarantee citations or rankings in third-party AI platforms. AEObility optimises entity clarity, structured data, and verifiable evidence so search engines have maximum confidence to cite your business accurately."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://aeobility.com.au/services/ai-search-agency#service",
        "name": "AEObility AI Search Agency & Consultancy",
        "url": "https://aeobility.com.au/services/ai-search-agency",
        "description": "Australia's specialist AI search marketing consultancy offering Generative Engine Optimisation, schema graph engineering, and brand citation strategy.",
        "provider": {
          "@type": "Organisation",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO & GEO Agency Sprint Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/services/ai-search-agency#GEO-DIAGNOSTIC-AUDIT",
              "name": "GEO Visibility Diagnostic",
              "sku": "GEO-DIAGNOSTIC-AUDIT",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "995.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": true
              },
              "url": "https://aeobility.com.au/diagnostic"
            },
            {
              "@type": "Offer",
              "@id": "https://aeobility.com.au/services/ai-search-agency#AEO-FOUNDATION-CORE",
              "name": "AEO Foundation",
              "sku": "AEO-FOUNDATION-CORE",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1990.00",
                "priceCurrency": "AUD",
                "valueAddedTaxIncluded": true
              },
              "url": "https://aeobility.com.au/solutions/aeo-sprint"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/ai-search-agency#faq",
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

      <main className="flex-grow w-full py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6 isolation isolate relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-aeo-cyan font-mono font-medium shadow-[0_0_12px_rgba(0,229,255,0.15)]">
              <Building2 className="w-4 h-4 text-aeo-cyan" />
              <span>AI SEARCH AGENCY · AUSTRALIA-WIDE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-soehne-breit text-white">
              AI Search Agency &amp; <span className="text-gradient-aeo">AEO Consultancy</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 font-bold max-w-3xl mx-auto font-soehne-breit leading-snug">
              Make your business legible, trusted, and recommended across Google Search, Maps, ChatGPT, and Gemini.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              AEObility is Australia&apos;s specialist AI search marketing consultancy based in Perth, Western Australia. We help growth-focused service businesses and marketing teams restructure their digital footprint so AI assistants understand who they are, what they offer, and why they should be cited accurately.
            </p>

            {/* High-Contrast Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#050811]" />
                <span>Run Free AI Visibility Scan</span>
              </Link>
              <Link
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all hover:bg-slate-800/80 hover:border-slate-500"
              >
                <span>View Sprint Packages</span>
                <ArrowRight className="w-4 h-4 text-aeo-cyan" />
              </Link>
            </div>
          </section>

          {/* Differentiator Grid (Level 2 Glass) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="relative isolate rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                    {diff.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-soehne-breit">{diff.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </section>

          {/* Agency Sprint Packages (Level 1 Glass) */}
          <section id="packages" className="space-y-6 border-t border-white/10 pt-12 scroll-mt-24">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase tracking-widest block">Transparent Offerings</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Agency Engagement Packages</h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">Fixed-scope, transparent pricing with zero contract lock-in.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sprintOffers.map((offer, idx) => (
                <div key={idx} className="relative isolate rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  {/* Top Specular Edge Highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-aeo-cyan bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                        {offer.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">{offer.title}</h3>
                      <div className="text-lg font-bold text-aeo-cyan font-mono mt-1">{offer.price}</div>
                      <span className="text-xs text-slate-400 font-mono block mt-0.5">{offer.priceSub}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Scannable Deliverables List */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider block">Key Deliverables:</span>
                      <ul className="space-y-2">
                        {offer.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={offer.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-600 hover:border-aeo-cyan text-white font-bold text-xs uppercase tracking-wider transition-all hover:bg-slate-800 cursor-pointer"
                    >
                      <span>{offer.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Regional Coverage Links Cluster */}
          <RegionalCoverageCluster />

          {/* Expanded FAQ Section */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan font-semibold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Frequently asked questions about AI Search Agency consulting</h2>
            </div>

            <div className="max-w-4xl">
              <FaqAccordion items={formattedFaqs} />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
