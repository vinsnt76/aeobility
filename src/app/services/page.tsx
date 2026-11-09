import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteFormSection from '@/components/QuoteFormSection';
import Image from 'next/image';
import Link from 'next/link';
import SubNavPills from '@/components/navigation/SubNavPills';
import RegionalCoverageCluster from '@/components/services/RegionalCoverageCluster';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Layers, Zap, Bot, MapPin, Search } from 'lucide-react';
import { Metadata } from 'next';

const SERVICES_PILLS = [
  { label: 'Services Overview', href: '/services', isActive: true },
  { label: 'Answer Engine Optimisation', href: '/services/aeo' },
  { label: 'Shopify AEO Services', href: '/services/aeo/shopify' },
  { label: 'AI Search Marketing', href: '/services/ai-search-marketing' },
  { label: 'Local & GEO Map Marketing', href: '/services/geo-marketing' },
];

export const metadata: Metadata = {
  title: "AI Search Strategy & GEO Marketing Consultancy | AEObility",
  description: "Explore custom AEO, GEO, and AI search strategy services for Australian SMBs. Optimise your digital presence across Search, Maps, and AI answer engines.",
  alternates: {
    canonical: "https://aeobility.com.au/services",
  },
  keywords: [
    "Digital Marketing Specialist for Australian SMBs in Perth, Australia",
    "Digital Marketing Specialist Perth",
    "GEO Marketing",
    "AI Search Strategy",
    "local business visibility",
    "get found on maps",
    "semantic site mapping",
    "structured optimisation",
    "conversion insights"
  ]
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "description": "AEObility is an Australian AEO consultancy helping local service businesses and SMBs in Perth, Australia become discoverable, understandable and recommended across Search, Maps and AI.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/services#primaryimage",
        "url": "https://aeobility.com.au/images/services/aeo-services-and-geo-marketing_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/services/aeo-services-and-geo-marketing_AEObility.webp",
        "caption": "AEObility AEO Services dashboard showing AI Search optimisation, GEO Marketing visibility signals and Perth, Australia SMB performance metrics across digital channels",
        "description": "AEObility AEO Services dashboard showing AI Search optimisation, GEO Marketing visibility signals and Perth, Australia SMB performance metrics across digital channels"
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/services#matriximage",
        "url": "https://aeobility.com.au/images/services/aeo-services-geo-intent-matrix_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/services/aeo-services-geo-intent-matrix_AEObility.webp",
        "caption": "AEObility AEO Services intent matrix diagram mapping search queries, vector embeddings, and GEO Marketing signals for Perth, Australia SMBs",
        "description": "AEObility AEO Services intent matrix diagram mapping search queries, vector embeddings, and GEO Marketing signals for Perth, Australia SMBs"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aeobility.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://aeobility.com.au/services"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/services#service",
        "name": "AI Search Strategy & GEO Marketing Consultancy Services",
        "serviceType": [
          "Answer Engine Optimisation (AEO)",
          "AI Search Strategy",
          "GEO Marketing",
          "Semantic Site Mapping",
          "Structured Schema Markup"
        ],
        "description": "AEObility provides AEO Services, AI Search Strategy and GEO Marketing for Australian SMBs in Perth, Australia. We optimise your digital footprint so modern LLMs including ChatGPT, Claude and Perplexity can extract, cite and recommend your services with confidence.",
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Perth, Australia"
        },
        "image": {
          "@id": "https://aeobility.com.au/services#primaryimage"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://aeobility.com.au/services",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AUD",
            "price": "995",
            "description": "AEO Blueprint: full technical audit, local intent analysis, AI-readiness scoring and a 90-day strategic roadmap."
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AEO & GEO Marketing Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Answer Engine Optimisation (AEO)",
                "description": "AEO Services for Perth, Australia SMBs. Optimise your digital footprint so modern LLMs (ChatGPT, Claude, Perplexity) easily extract, cite, and recommend your services.",
                "url": "https://aeobility.com.au/services/aeo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "GEO Marketing",
                "description": "GEO Marketing for local service businesses in Perth, Australia. Ensure high visibility across Google Maps, Apple Maps, and immediate regional intent queries.",
                "url": "https://aeobility.com.au/services/geo-marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Search Strategy",
                "description": "AI Search Strategy for Australian SMBs. Design a long-term strategy to capture conversational queries, aligning your brand with complex search parameters.",
                "url": "https://aeobility.com.au/services/ai-search-marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Semantic Site Mapping",
                "description": "Comprehensive semantic site mapping and structured optimisation so vector-based retrieval engines can ingest, map and index your business details.",
                "url": "https://aeobility.com.au/knowledge-hub/semantic-seo"
              }
            }
          ]
        }
      },
      {
        "@type": ["WebPage", "AboutPage"],
        "@id": "https://aeobility.com.au/services#webpage",
        "url": "https://aeobility.com.au/services",
        "name": "AEO Services, AI Search Strategy and GEO Marketing Services | AEObility",
        "description": "AEObility is an Australian AEO consultancy that helps local service businesses and SMBs in Perth, Australia become discoverable, understandable and recommended across Search, Maps and AI.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/services#primaryimage"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/services#service"
        },
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Answer Engine Optimisation (AEO)",
            "url": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "WebPage",
            "name": "GEO Marketing",
            "url": "https://aeobility.com.au/services/geo-marketing"
          },
          {
            "@type": "WebPage",
            "name": "AI Search Strategy",
            "url": "https://aeobility.com.au/services/ai-search-marketing"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services#faq",
        "isPartOf": {
          "@id": "https://aeobility.com.au/services#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do AI Search and GEO Marketing work together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AEO, AI Search Strategy and GEO Marketing reinforce each other. When your business is clear to AI systems, your Google Maps and Apple Maps signals strengthen. When your local entity signals improve, LLMs gain confidence recommending you for local queries. This combined approach is why AEObility’s Perth, Australia clients see higher visibility across Search, Maps and AI."
            }
          },
          {
            "@type": "Question",
            "name": "Will this help me appear in AI-generated answers for local queries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We optimise your digital footprint so ChatGPT, Claude and Perplexity can extract, cite and recommend your services for local intent queries. This includes structured schema markup, semantic site mapping and GEO Marketing signals that help AI systems understand your business."
            }
          },
          {
            "@type": "Question",
            "name": "Is this relevant for service-based businesses in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our framework is built specifically for Australian SMBs and local service providers. Whether you operate in Perth, regional WA or across Australia, AEO improves how AI systems interpret your services and recommend your brand."
            }
          },
          {
            "@type": "Question",
            "name": "Can you do GEO yourself, or should you hire someone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can handle Generative Engine Optimisation yourself if you know how to write structured code (Schema.org), cut out vague marketing jargon in favour of plain facts, and keep your business details consistent across external directories. Hire a specialist if your website is full of buzzwords like \"bespoke end-to-end solutions\", which AI search tools simply ignore, or if you do not have the technical background to build clean code and check how answer engines read your pages. What a solid GEO engagement actually delivers: 1) Clear structured code: Building clean schema that tells AI engines exactly who you are, where you operate, and what you sell. 2) Direct answer blocks: Rewriting key pages into short, factual answers that AI tools can lift and cite without confusion. 3) Consistent directory data: Aligning your business name, address, and contact details across Google, Bing, and major local listings. 4) Logical internal links: Connecting your services, guides, and proof points so machines understand how your topics relate. 5) Testing and handoff: Validating the code, confirming pages are indexed, and handing over full ownership of the work."
            }
          }
        ]
      }
    ]
  };

  const layers = [
    {
      title: "Answer Engine Optimisation (AEO)",
      icon: Bot,
      isFeatured: true,
      badge: "Canonical Service Hub",
      tagline: "Be the answer AI engines cite.",
      priceTag: "Micro-Sprints from $495 ex. GST",
      desc: "Canonical AEO Services for Australian SMBs. Restructure your digital footprint so modern LLMs (ChatGPT, Perplexity, Gemini) extract, cite, and recommend your services with confidence.",
      bullets: ["Nested JSON-LD schema graphs", "Atomic answer block rewrites", "Multi-engine citation alignment"],
      ctaText: "Explore AEO Services & Pricing",
      href: "/services/aeo"
    },
    {
      title: "GEO Marketing",
      icon: MapPin,
      isFeatured: false,
      badge: "Local Map Authority",
      tagline: "Put your business on the map.",
      priceTag: "Sprint Packages Available",
      desc: "GEO Marketing for local service businesses in Perth, Australia. Ensure high visibility across Google Maps, Apple Maps, and immediate regional intent queries.",
      bullets: ["Optimised pins & citations", "GBP profile authority", "Local entity link building"],
      ctaText: "Explore GEO Marketing",
      href: "/services/geo-marketing"
    },
    {
      title: "AI Search Strategy",
      icon: Search,
      isFeatured: false,
      badge: "Conversational Strategy",
      tagline: "Own conversational search corridors.",
      priceTag: "Strategic Advisory",
      desc: "AI Search Strategy for Australian SMBs. Design a long-term strategy to capture conversational queries, aligning your brand with complex search parameters.",
      bullets: ["Intent-to-product mapping", "LLM indexing checks", "Competitor gap analysis"],
      ctaText: "Explore AI Search Strategy",
      href: "/services/ai-search-marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar subnavItems={SERVICES_PILLS} />

      <main className="flex-grow w-full py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                <Compass className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                <span>Strategic Services &amp; Implementation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-soehne-breit">
                AEO Services, AI Search Strategy and <br className="hidden sm:inline" />
                <span className="text-gradient-aeo">GEO Marketing Services</span>
              </h1>
              <div className="space-y-4 text-slate-300 font-normal leading-relaxed max-w-xl">
                <p className="text-base sm:text-lg">
                  AEObility is an Australian AEO consultancy providing <Link href="/services/aeo" className="text-aeo-cyan hover:underline font-normal">AEO Services for Australian SMBs</Link> to help local service businesses become discoverable, understandable and recommended across Search, Maps and AI.
                </p>
                <p className="text-sm sm:text-base text-slate-400">
                  We optimise your digital footprint so modern LLMs including ChatGPT, Claude and Perplexity can extract, cite and recommend your services with confidence. Evaluate software options in our <Link href="/knowledge-hub/ai-seo-tools" className="text-aeo-cyan hover:underline font-normal">AI SEO tools and technology comparison hub</Link> or review our technical guide on <Link href="/knowledge-hub/guides/aeo" className="text-aeo-cyan hover:underline font-normal">Answer Engine Optimisation Core Principles</Link> to explore our RAG retrieval architecture.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-[0_0_20px_rgba(0,205,216,0.25)]"
                >
                  <span>Run Free Visibility Scan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/30 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/images/services/aeo-services-and-geo-marketing_AEObility.webp"
                  alt="AEObility AEO Services dashboard showing AI Search optimisation, GEO Marketing visibility signals and Perth Australia SMB performance metrics across digital channels"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </section>

          {/* Core Service Layers */}
          <section className="space-y-12 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Connected Delivery</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-soehne-breit">Our core service layers</h2>
              <p className="text-slate-400 font-normal leading-relaxed text-sm sm:text-base">
                We combine deep technical structure with semantic brand authority to secure top recommendation placements. Looking for enterprise agency engagements? Partner with a <Link href="/services/ai-search-agency" className="text-cyan-400 underline hover:text-cyan-300 font-medium">dedicated AI search agency &amp; AEO consultancy</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {layers.map((layer, idx) => {
                const IconComponent = layer.icon;
                return (
                  <Link
                    key={idx}
                    href={layer.href}
                    className={`p-6 rounded-2xl transition-all flex flex-col justify-between group cursor-pointer shadow-lg ${
                      layer.isFeatured
                        ? 'bg-zinc-950/90 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20'
                        : 'bg-white/[0.02] border border-white/5 hover:border-white/20 hover:shadow-aeo-cyan/5'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl border transition-colors ${
                          layer.isFeatured
                            ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                            : 'bg-aeo-cyan/10 border-aeo-cyan/20 text-aeo-cyan group-hover:bg-aeo-cyan/20'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${
                          layer.isFeatured
                            ? 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
                            : 'bg-white/5 border-white/10 text-zinc-400'
                        }`}>
                          {layer.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold font-soehne-breit transition-colors ${
                          layer.isFeatured ? 'text-white group-hover:text-cyan-300' : 'text-white group-hover:text-aeo-cyan'
                        }`}>
                          {layer.title}
                        </h3>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-aeo-cyan font-medium uppercase tracking-wider">{layer.tagline}</p>
                          <span className="text-[11px] font-mono text-zinc-400">{layer.priceTag}</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 font-normal leading-relaxed">{layer.desc}</p>
                    </div>

                    <div className="space-y-6 pt-6 mt-6 border-t border-white/5">
                      <ul className="space-y-2">
                        {layer.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex gap-2 items-center text-xs text-slate-300 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between text-xs font-bold text-aeo-cyan group-hover:text-white transition-colors pt-3 border-t border-white/5">
                        <span>{layer.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-aeo-cyan group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mid-Page Secondary CTA: Request a Quote */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white font-soehne-breit">Ready for growth? Request a sprint quote</h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  Get a tailored plan and pricing for your Australian business across Search, Maps and AI platforms.
                </p>
              </div>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs sm:text-sm rounded-xl hover:opacity-90 transition-all shrink-0 cursor-pointer shadow-lg shadow-aeo-cyan/10"
              >
                <span>Request sprint quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Machine Understanding Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/images/services/aeo-services-geo-intent-matrix_AEObility.webp"
                  alt="AEObility AEO Services intent matrix diagram mapping search queries, vector embeddings, and GEO Marketing signals for Perth, Australia SMBs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Retrieval Readiness</span>
                <h2 className="text-3xl font-bold text-white font-soehne-breit">Built for machine understanding</h2>
              </div>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                AEObility provides AEO Services, AI Search Strategy and GEO Marketing for Australian SMBs. Built for Australian SMBs and local service providers, before search engines or conversational AI tools can recommend your brand, they must understand your site structure. We implement comprehensive <Link href="/knowledge-hub/semantic-seo" className="font-semibold text-white hover:text-aeo-cyan underline decoration-aeo-cyan/40 transition-colors">semantic site mapping</Link> and <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="font-semibold text-white hover:text-aeo-cyan underline decoration-aeo-cyan/40 transition-colors">structured optimisation</Link> so vector-based retrieval engines can easily ingest, map, and index your business details.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <Layers className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-soehne-breit">Topical graph nodes</h3>
                    <p className="text-xs text-slate-400 font-normal leading-relaxed">We map your services into relational semantic node sets that match target queries.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-soehne-breit">Schema verification</h3>
                    <p className="text-xs text-slate-400 font-normal leading-relaxed">We validate all microdata formatting templates directly against Google and schema.org standard models using <Link href="/knowledge-hub/articles/structured-data-query-fan-out" className="text-aeo-cyan hover:underline">structured schema markup</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Human Selection Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">Conversion Intent</span>
                <h2 className="text-3xl font-bold text-white font-soehne-breit">Engineered for human selection</h2>
              </div>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Showing up is only half the battle. Once an answer engine lists your brand as a primary citation for Australian service businesses, we ensure your message is compelling. Through <Link href="/knowledge-hub/articles/entity-authority-building" className="font-semibold text-white hover:text-aeo-cyan underline decoration-aeo-cyan/40 transition-colors">entity authority building</Link>, we track <Link href="/knowledge-hub/articles/aeo-vs-seo" className="font-semibold text-white hover:text-aeo-cyan underline decoration-aeo-cyan/40 transition-colors">conversion insights</Link> and optimise context to make sure target clients click, contact, and trust your brand.
              </p>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                <div className="flex gap-3 items-center text-xs font-bold uppercase tracking-wider text-aeo-cyan font-mono">
                  <Zap className="w-4 h-4" />
                  <span>The Final Selection Formula</span>
                </div>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  Machines filter by authority and context; humans decide based on <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline">reviews, proximity, clarity, and trust</Link>. Our combined AEO &amp; local MAP strategies optimise for both layers, turning citations into conversions.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold font-soehne-breit text-white">Ready to get started?</h3>
              <p className="text-sm text-slate-300 font-normal max-w-sm mx-auto">
                Discover where your business ranks across AI platforms and Google Maps today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/diagnostic"
                  className="flex items-center gap-2 px-5 py-2.5 bg-aeo-cyan text-black text-xs font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(0,205,216,0.2)]"
                >
                  <span>Run Free Visibility Scan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#quote-form"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white hover:bg-white/20 text-xs font-bold rounded-lg border border-white/20 transition-all"
                >
                  <span>Request Sprint Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-white/5 pt-16">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-white font-soehne-breit text-center">Frequently asked questions</h2>
              <div className="space-y-4">
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Do AI Search and GEO Marketing work together?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-3">
                    <p>
                      Yes. AEO, AI Search Strategy and GEO Marketing reinforce each other. When your business is clear to AI systems, your Google Maps and Apple Maps signals strengthen. When your local entity signals improve, LLMs gain confidence recommending you for local queries. This combined approach is why AEObility’s Perth, Australia clients see higher visibility across Search, Maps and AI.
                    </p>
                    <div className="pt-2 text-xs text-white/60 font-light flex flex-wrap items-center gap-3">
                      <span>Learn more:</span>
                      <Link href="/services/aeo" className="text-aeo-cyan hover:underline font-semibold inline-flex items-center gap-1">
                        <span>AEO Services Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/services/aeo/definition" className="text-aeo-purple hover:underline font-semibold inline-flex items-center gap-1">
                        <span>What is AEO? (Definition &amp; Concepts)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </details>
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Will this help me appear in AI-generated answers for local queries?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-3">
                    <p>
                      Yes. We optimise your digital footprint so ChatGPT, Claude and Perplexity can extract, cite and recommend your services for local intent queries. This includes structured schema markup, semantic site mapping and GEO Marketing signals that help AI systems understand your business.
                    </p>
                    <div className="pt-2 text-xs text-white/60 font-light flex items-center gap-1.5">
                      <span>See how it works:</span>
                      <Link href="/services/ai-search-marketing" className="text-aeo-cyan hover:underline font-semibold inline-flex items-center gap-1">
                        <span>AI Search Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </details>
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Is this relevant for service-based businesses in Australia?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-3">
                    <p>
                      Absolutely. Our framework is built specifically for Australian SMBs and local service providers. Whether you operate in Perth, regional WA or across Australia, AEO improves how AI systems interpret your services and recommend your brand.
                    </p>
                    <div className="pt-2 text-xs text-white/60 font-light flex items-center gap-1.5">
                      <span>Ready to start?</span>
                      <a href="#quote-form" className="text-aeo-cyan hover:underline font-semibold inline-flex items-center gap-1">
                        <span>Request a Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </details>
                <details className="group bg-white/[0.02] border border-white/5 rounded-xl p-6 cursor-pointer open:bg-white/[0.04] transition-colors">
                  <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center">
                    Can you do GEO yourself, or should you hire someone?
                    <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30 space-y-3">
                    <p>
                      You can handle Generative Engine Optimisation yourself if you know how to write structured code (Schema.org), cut out vague marketing jargon in favour of plain facts, and keep your business details consistent across external directories.
                    </p>
                    <p>
                      Hire a specialist if your website is full of buzzwords like &quot;bespoke end-to-end solutions&quot;, which AI search tools simply ignore, or if you don&apos;t have the technical background to build clean code and check how answer engines read your pages.
                    </p>
                    <div className="pt-1">
                      <strong className="text-white block mb-2 font-medium">What a solid GEO engagement actually delivers:</strong>
                      <ul className="space-y-2 list-none pl-0 text-xs sm:text-sm text-white/80">
                        <li className="flex items-start gap-2">
                          <span className="text-aeo-cyan font-bold shrink-0">&bull;</span>
                          <span><strong className="text-white">Clear structured code:</strong> Building clean schema that tells AI engines exactly who you are, where you operate, and what you sell.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-aeo-cyan font-bold shrink-0">&bull;</span>
                          <span><strong className="text-white">Direct answer blocks:</strong> Rewriting key pages into short, factual answers that AI tools can lift and cite without confusion.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-aeo-cyan font-bold shrink-0">&bull;</span>
                          <span><strong className="text-white">Consistent directory data:</strong> Aligning your business name, address, and contact details across Google, Bing, and major local listings.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-aeo-cyan font-bold shrink-0">&bull;</span>
                          <span><strong className="text-white">Logical internal links:</strong> Connecting your services, guides, and proof points so machines understand how your topics relate.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-aeo-cyan font-bold shrink-0">&bull;</span>
                          <span><strong className="text-white">Testing and handoff:</strong> Validating the code, confirming pages are indexed, and handing over full ownership of the work.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-2 text-xs text-white/60 font-light flex flex-wrap items-center gap-3">
                      <span>Explore options:</span>
                      <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline font-semibold inline-flex items-center gap-1">
                        <span>Local &amp; GEO Map Marketing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/solutions/aeo-sprint" className="text-aeo-purple hover:underline font-semibold inline-flex items-center gap-1">
                        <span>Fixed-Scope Technical Sprints</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Australian Regional Coverage Link Cluster */}
          <RegionalCoverageCluster />

          {/* Request a Quote Section */}
          <QuoteFormSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
