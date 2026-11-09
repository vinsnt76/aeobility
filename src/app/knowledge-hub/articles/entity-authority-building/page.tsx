import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/navigation/RelatedArticles';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Network, 
  Layers, 
  HelpCircle, 
  FileText, 
  AlertTriangle, 
  Wrench, 
  UserCheck, 
  Cpu, 
  Database,
  Link2,
  MapPin,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "Entity Authority: Why AI Search Ranks Entities, Not Pages | AEObility",
  description: "Learn why AI search ranks entities over keywords. Build entity authority, strengthen machine legibility, and secure citations with Answer Engine Optimisation.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
  },
};

export default function EntityAuthorityArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Anthony Baker",
        "alternateName": ["Vince Baker", "Vinnie Baker"],
        "jobTitle": "AEO & Semantic Search Specialist",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "url": "https://aeobility.com.au/vince-baker",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "AU"
        },
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Entity Authority Building",
          "Knowledge Graph Architecture",
          "Semantic Search",
          "Retrieval-Augmented Generation"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
        "name": "Entity Authority: Why AI Search Ranks Entities, Not Pages",
        "description": "Entity authority is the measurable strength of your business as an identifiable, trustworthy entity in AI search systems."
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building#article",
        "headline": "Entity Authority: Why AI Search Ranks Entities Not Pages",
        "description": "AI search has fundamentally changed how customers discover businesses. Instead of ranking pages by keywords, modern systems evaluate entities, including the people, brands, products, and organisations behind those pages.",
        "author": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
        "image": "https://aeobility.com.au/images/knowledge-hub/entity-visibilty-semantic-SEO_AEObility.webp",
        "about": [
          {
            "@type": "Thing",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Service",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "AEO Services",
            "url": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "Thing",
            "name": "Knowledge Graph",
            "sameAs": "https://www.wikidata.org/wiki/Q33002955"
          },
          {
            "@type": "Thing",
            "name": "Search Engine Optimisation",
            "sameAs": "https://www.wikidata.org/wiki/Q180711"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Entity Salience Score",
            "description": "The mathematical extraction confidence metric assigned to an organisation by a dense retrieval model."
          },
          {
            "@type": "Thing",
            "name": "Schema.org",
            "sameAs": "https://www.wikidata.org/wiki/Q3475335"
          },
          {
            "@type": "Thing",
            "name": "JSON-LD",
            "sameAs": "https://www.wikidata.org/wiki/Q15858694"
          }
        ],
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/aeo#service"
        },
        "citation": [
          {
            "@type": "WebPage",
            "name": "AEObility Case Studies Portfolio",
            "url": "https://aeobility.com.au/knowledge-hub/case-studies"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is entity authority",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entity authority is the measurable strength of your business as a recognised and trusted entity in AI search systems. Strong entity authority improves visibility across Google AI Overviews, ChatGPT, Perplexity, and Maps."
            }
          },
          {
            "@type": "Question",
            "name": "Why does entity authority matter for AEO",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer Engine Optimisation (AEO) relies on machine understanding rather than keyword counts. When identity, services, and location facts match across web indexes, LLMs confidently cite your brand."
            }
          },
          {
            "@type": "Question",
            "name": "How do I improve my entity authority",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Improve entity authority by standardising NAP data, deploying JSON-LD schema microdata, publishing semantically dense expert content, and earning third-party mentions. Get a free AI visibility audit to find gaps."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    {
      title: "1. Identity",
      subtitle: "Stable Identifiers & Anti-Collision",
      description: "AI systems need stable identifiers to avoid entity collisions.",
      items: [
        "Consistent business name across all platforms",
        "Verified website, logo and contact details",
        <>Deploy <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-medium">structured data (JSON-LD)</Link> microdata schema</>,
        "Social profiles with matching information"
      ],
      schemas: [
        "Organisation",
        "LocalBusiness",
        "Person (for authors)",
        "Service",
        "FAQPage",
        "BreadcrumbList"
      ],
      icon: <ShieldCheck className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "2. Semantic Relevance",
      subtitle: "Topical Mastery & Concept Mapping",
      description: (
        <>
          Entities gain authority by demonstrating expertise across core topics to <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-medium">improve topical clarity</Link> and <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-medium">semantic relevance</Link>.
        </>
      ),
      items: [
        "Educational research content & guides",
        "Clear relationships between domain concepts",
        "Consistent coverage of services & solutions",
        <>Internal linking &amp; <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-medium">Positional Bias Audits</Link> to reinforce topical clusters</>
      ],
      icon: <Network className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "3. External Validation",
      subtitle: "Credible Mentions & Citations",
      description: "AI systems weigh who mentions you and how credible those sources are.",
      items: [
        "Mentions on reputable industry publications",
        "Verified business & industry directories",
        "Podcasts, interviews & guest contributions",
        "Backlinks that reinforce topical authority"
      ],
      icon: <CheckCircle2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      title: "4. Knowledge Graph Consistency",
      subtitle: "Fact Alignment Across Web Indexes",
      description: "Conflicting facts weaken machine retrieval confidence.",
      items: [
        "The same business name everywhere",
        "The same core service descriptions",
        "The same physical & regional location",
        "The same founding & entity relationships"
      ],
      icon: <Layers className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  const entitySignals = [
    { title: "Mention Frequency", desc: "How often your entity is named across independent industry sources and publications.", icon: <Sparkles className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Source Credibility", desc: "The domain authority and knowledge graph trust of third-party platforms referencing your brand.", icon: <ShieldCheck className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Topical Consistency", desc: "Tight alignment between your published content, core services, and domain expertise.", icon: <Network className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Cross-Platform Corroboration", desc: "Identical NAP (Name, Address, Phone) and identity data across LinkedIn, GitHub, Google Business, and directories.", icon: <Database className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Structured Data Alignment", desc: "Explicit JSON-LD entity markup verifying organisation, author, and service schemas.", icon: <CodeIcon className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Author Identity & E-E-A-T", desc: "Named, verified authors linked via Person schemas to establish subject-matter authority.", icon: <UserCheck className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Location Signals", desc: "Clear geographic anchors (Perth, Western Australia) linking your entity to specific regional markets.", icon: <MapPin className="w-4 h-4 text-aeo-cyan" /> },
    { title: "Vector Embedding Proximity", desc: "High semantic similarity score between your entity node and relevant user queries in LLM vector databases.", icon: <Cpu className="w-4 h-4 text-aeo-cyan" /> }
  ];

  const commonMistakes = [
    { title: "Inconsistent Business Details (NAP Collisions)", detail: "Different business names, phone numbers, or addresses across directories fragment your Knowledge Graph identity." },
    { title: "Missing or Malformed JSON-LD Microdata", detail: "Relying on raw HTML without explicit microdata schemas forces AI search engines to guess your entity attributes." },
    { title: "Unlinked Author Entities", detail: "Publishing content anonymously without Person schema linkages degrades E-E-A-T trust scores." },
    { title: "Zero Cross-Platform Corroboration", detail: "Having an isolated website without matching verified social, directory, or media citations weakens LLM confidence." },
    { title: "Thin Semantic Coverage", detail: "Fragmented content that misses core concept relationships prevents AI models from assigning topical mastery." },
    { title: "Unresolved Canonical Identifiers", detail: "Changing URLs or hosting multiple domain variations without canonical tags leads to entity splitting." }
  ];

  function CodeIcon({ className }: { className?: string }) {
    return <FileText className={className} />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow w-full py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Article Header */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Entity Salience &amp; AEO Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Entity Authority: <br />
              <span className="text-gradient-aeo">Why AI Search Ranks Entities, Not Pages</span>
            </h1>

            <div className="space-y-4 text-xl text-white/80 font-serif font-light leading-relaxed">
              <p>
                AI search has fundamentally changed how customers discover businesses. Instead of ranking pages by keywords, modern systems evaluate entities, which are essentially the people, brands, products and organisations behind those pages.
              </p>
              <p>
                <strong>Entity authority</strong> is the measurable strength of your business as an identifiable, trustworthy entity in AI search systems.
              </p>
              <p className="text-base text-white/70">
                For businesses based in Perth, and across cities like Sydney or Melbourne, this shift means your organisational identity, your geographic location, and your named authors all contribute to how clearly your entity is understood, trusted and ranked in AI‑driven search results.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4">
              <span>Published by <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Updated July 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker</Link></span>
            </div>
          </header>

          {/* Banner Graphic */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/60 shadow-2xl">
            <Image
              src="/images/knowledge-hub/entity-visibilty-semantic-SEO_AEObility.webp"
              alt="Entity visibility and AI semantic SEO architecture diagram illustrating Answer Engine Optimisation (AEO) entity node authority, Knowledge Graph relationships, and RAG retrieval vectors for Australian businesses by AEObility"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Intro Section */}
          <section className="prose prose-invert max-w-none text-base text-white/80 font-light leading-relaxed space-y-6">
            <p>
              Entity authority building is how your business becomes consistently recognisable, trustworthy and machine understandable across the web. When AI systems know who you are, what you do and who you serve, they can confidently recommend you.
            </p>
            <p className="text-lg font-medium text-white border-l-2 border-aeo-cyan pl-4 py-1 bg-white/[0.02]">
              This is the foundation of <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">Answer Engine Optimisation (AEO)</Link>.
            </p>
          </section>

          {/* What Entity Authority Means */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What Entity Authority Means</h2>
            <p className="text-white/80 leading-relaxed font-light">
              Entity authority shifts attention from ranking URLs to recognising the organisation behind them. It relies on machine recognition, which is how clearly AI systems understand who you are and what you do. It also relies on compounded trust, which grows when your facts, brand details and data stay consistent across the web.
            </p>

            {/* Definition Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-2 my-4 shadow-xl">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">Entity Authority in a Sentence</span>
              <p className="text-white text-base font-medium leading-relaxed">
                <strong>Entity authority</strong> is the degree to which AI systems can recognise, understand, and trust your business as a distinct entity. It is built through identity signals, semantic relevance, external validation, and knowledge graph consistency.
              </p>
            </div>

            <p className="text-white/80 leading-relaxed font-light">
              For AEObility, this means ensuring AI search systems understand:
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <ul className="space-y-2.5 text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility is an established company</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility specialises in <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline">Answer Engine Optimisation</Link></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility provides <Link href="/diagnostic" className="text-aeo-cyan hover:underline">AI visibility audits</Link> and AI search consulting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility serves Australian businesses in Perth, Sydney, and Melbourne</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-aeo-cyan font-bold">&bull;</span>
                  <span>AEObility demonstrates expertise through research, client work and citations</span>
                </li>
              </ul>
            </div>

            <p className="text-white/70 font-light text-sm italic">
              When these facts appear consistently across trusted sources, AI systems gain confidence. Confidence leads to recommendation and ranking.
            </p>
          </section>

          {/* The Four Pillars of Entity Authority */}
          <section className="space-y-8 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Four Pillars of Entity Authority</h2>
              <p className="text-white/60 text-sm font-light">Essential building blocks for machine trust and LLM retrieval preference.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                        <span className="text-xs text-aeo-cyan font-mono">{pillar.subtitle}</span>
                      </div>
                    </div>
                    <div className="text-xs text-white/70 font-light leading-relaxed">
                      {pillar.description}
                    </div>
                    <ul className="space-y-1.5 text-xs text-white/80 pt-2 border-t border-white/5">
                      {pillar.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Schemas if Identity Pillar */}
                  {pillar.schemas && (
                    <div className="pt-3 border-t border-white/10 space-y-1.5">
                      <span className="text-[11px] font-mono text-aeo-cyan font-semibold uppercase tracking-wider">Recommended JSON-LD Schemas:</span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pillar.schemas.map((s, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/80 font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* How AI Systems Evaluate Entity Signals */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">How AI Systems Evaluate Entity Signals</h2>
              <p className="text-white/70 text-sm font-light">
                Large language models and answer engines evaluate multi-dimensional entity vectors before synthesising direct responses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {entitySignals.map((signal, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-2">
                    {signal.icon}
                    <h3 className="text-sm font-bold text-white">{signal.title}</h3>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {signal.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Example */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">A Practical Example</h2>
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <span className="text-xs text-emerald-400 font-mono font-semibold uppercase">Simulated User Query:</span>
              <p className="text-white font-medium text-base font-serif italic">
                &ldquo;Who are top <Link href="/services/aeo" className="text-emerald-400 hover:underline">AEO consultants in Australia</Link>&rdquo;
              </p>
            </div>

            <p className="text-white/80 leading-relaxed font-light">
              If AEObility has:
            </p>

            <ul className="space-y-2 text-sm text-white/80 pl-4 border-l-2 border-white/10">
              <li>&bull; High quality educational content about AEO</li>
              <li>&bull; Consistent <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline">structured data (JSON-LD schemas)</Link></li>
              <li>&bull; Mentions in Australian marketing &amp; tech publications</li>
              <li>&bull; A LinkedIn profile, GitHub, Reddit, YouTube and industry directories using identical brand information</li>
              <li>&bull; Client case studies demonstrating verified results</li>
            </ul>

            <p className="text-white/80 font-light text-sm">
              AI systems have multiple reinforcing signals connecting:
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono text-xs sm:text-sm text-aeo-cyan font-bold tracking-wide">
              AEObility &rarr; AEO Consulting &rarr; Australia &rarr; Trusted &rarr; Authoritative
            </div>

            <p className="text-white/70 font-light text-xs">
              This increases the likelihood of being recognised and recommended by Perplexity, ChatGPT, and Google AI Overviews.
            </p>
          </section>

          {/* Entity Authority as a Graph */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Entity Authority as a Knowledge Graph</h2>
              <p className="text-white/70 text-sm font-light">Visualising entity node linkages and confidence vectors across machine indexes.</p>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-6">
              <svg viewBox="0 0 800 360" className="w-full h-auto text-xs font-mono max-w-2xl">
                <defs>
                  <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00cdd8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Central Entity Node */}
                <circle cx="400" cy="180" r="55" fill="url(#cyanGlow)" className="animate-pulse" />
                <text x="400" y="176" textAnchor="middle" fill="#000" fontWeight="bold" fontSize="14">AEObility</text>
                <text x="400" y="192" textAnchor="middle" fill="#000" fontSize="10">Brand Entity</text>

                {/* Connecting Lines */}
                <line x1="400" y1="125" x2="400" y2="50" stroke="#00cdd8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="455" y1="180" x2="630" y2="180" stroke="#00cdd8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="435" y1="225" x2="570" y2="300" stroke="#00cdd8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="365" y1="225" x2="230" y2="300" stroke="#00cdd8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="345" y1="180" x2="170" y2="180" stroke="#00cdd8" strokeWidth="2" strokeDasharray="4 4" />

                {/* Connected Outer Nodes */}
                <g transform="translate(400, 50)">
                  <rect x="-75" y="-20" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">AEO Services</text>
                </g>

                <g transform="translate(630, 180)">
                  <rect x="-75" y="-20" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Location: Perth WA</text>
                </g>

                <g transform="translate(570, 300)">
                  <rect x="-75" y="-20" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Verified Mentions</text>
                </g>

                <g transform="translate(230, 300)">
                  <rect x="-75" y="-20" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">JSON-LD Microdata</text>
                </g>

                <g transform="translate(170, 180)">
                  <rect x="-75" y="-20" width="150" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Author: Vince Baker</text>
                </g>
              </svg>

              <div className="p-4 bg-zinc-950/80 rounded-xl border border-white/10 font-mono text-xs text-emerald-400 w-full overflow-x-auto">
                <pre>{`AEObility (Entity Node)
    ├── provides ─────────► AEO Consulting & AI Search Strategy
    ├── provides ─────────► AI Search Diagnostic Audits
    ├── specialises in ───► Answer Engine Optimisation (AEO)
    ├── located in ───────► Perth, Western Australia
    ├── author entity ────► Vince Baker (Person Schema)
    ├── mentioned by ─────► Industry Publications & Citations
    └── trusted by ───────► Australian Enterprise Clients`}</pre>
              </div>
            </div>

            <p className="text-white/70 font-light text-xs text-center">
              Each verified relationship strengthens the entity’s authority and improves visibility across Search, Maps and AI.
            </p>
          </section>

          {/* Common Mistakes in Entity Authority Building */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Common Mistakes in Entity Authority Building</h2>
            </div>
            <p className="text-white/80 leading-relaxed font-light">
              Avoid these critical pitfalls that erode machine confidence and trigger entity collisions in AI search indexes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonMistakes.map((m, idx) => (
                <div key={idx} className="p-5 bg-amber-950/10 border border-amber-500/20 rounded-xl space-y-2">
                  <h3 className="text-sm font-bold text-amber-200">{idx + 1}. {m.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{m.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Why This Matters Now</h2>
            <p className="text-white/80 leading-relaxed font-light">
              AI search collapses the funnel. One question leads to one answer which leads to one shortlist which leads to one recommendation.
            </p>
            <p className="text-white/80 leading-relaxed font-light">
              If your entity is not well defined, well connected and well validated, you will not appear. Entity authority is now a core requirement for visibility in AI generated answers.
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white">Next Steps for Businesses</h3>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Establish consistent identity signals across all digital assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Publish semantically rich expert content grounded in entity schemas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Strengthen external validation and cross-platform corroboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                  <span>Use <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline">structured data (JSON-LD)</Link> to reinforce explicit relationships</span>
                </li>
              </ul>
              <p className="text-xs text-white/70 font-light pt-2">
                AEObility’s <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline font-semibold">90 day blueprint</Link> provides a structured roadmap for improving visibility, understanding and selection across Search, Maps and AI.
              </p>
            </div>
          </section>

          {/* Tools & Resources for Entity Optimisation */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Tools &amp; Resources for Entity Optimisation</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Positional Bias Audit</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Evaluate context window bottlenecks and Lost in the Middle LLM synthesis bias.
                </p>
              </Link>

              <Link href="/diagnostic" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Search Diagnostic Engine</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Run a manual entity recognition check and get your brand&apos;s AI visibility score.
                </p>
              </Link>

              <Link href="/knowledge-hub/semantic-seo" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Semantic SEO Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Master microdata, schema structures, and entity-based content architecture.
                </p>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO 90-Day Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  A structured roadmap for entity building, Answer Engine Optimisation, and LLM selection.
                </p>
              </Link>

              <Link href="/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Build Entity Density Tutorial</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Step-by-step tutorial on auditing and building 80%+ entity density into on-page copy and schema.
                </p>
              </Link>
            </div>
          </section>

          {/* Three FAQ Items */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">1) What is entity authority?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Entity authority is the measurable strength of your business as a recognised and trusted entity in AI search systems. Strong entity authority improves visibility across Google AI Overviews, ChatGPT, Perplexity, and Maps.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">2) Why does entity authority matter for AEO?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline">Answer Engine Optimisation (AEO)</Link> relies on machine understanding rather than keyword counts. When identity, services, and location facts match across web indexes, LLMs confidently cite your brand.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white">3) How do I improve my entity authority?</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Improve entity authority by standardising NAP data, deploying JSON-LD schema microdata, publishing semantically dense expert content, and earning third-party mentions. Get a <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-medium">free AI visibility audit</Link> to find gaps.
                </p>
              </div>
            </div>
          </section>

          {/* Strategic Operational Service Bridge */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-aeo-purple/10 to-transparent border border-aeo-cyan/30 rounded-2xl my-8">
            <div className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold mb-2">Operational Service Bridge</div>
            <h3 className="text-lg font-bold text-white font-sans mb-2">Engineering Enterprise Entity Salience</h3>
            <p className="text-sm text-white/80 font-serif leading-relaxed mb-4">
              Evaluating how effectively a conversational assistant retrieves and cites your platform depends heavily on unambiguous corporate tracking signals. Rather than relying on simple keyword repetition, our custom <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services</Link> restructure text blocks into highly integrated relational facts that transformer models can ingest without attribute drift.
            </p>
            <Link
              href="/services/aeo"
              className="inline-flex items-center gap-2 px-4 py-2 bg-aeo-cyan text-black font-bold text-xs rounded-xl hover:bg-white transition-all shadow-md"
            >
              <span>Explore Canonical AEO Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Author Entity Bio Box */}
          <section className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-aeo-cyan/50 shrink-0 shadow-lg">
                <Image
                  src="/images/about/Profile-Picture-Vinnie.png"
                  alt="Vince Baker - AEO & Semantic Search Specialist Perth"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-white">Vince Baker</h3>
                  <span className="text-xs text-aeo-cyan font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">AEO &amp; Semantic Search Specialist</span>
                </div>
                <p className="text-xs text-white/70 font-light leading-relaxed max-w-md">
                  Founder &amp; Lead AEO Specialist at AEObility. Helping Australian businesses structure data for AI search.
                </p>
              </div>
            </div>

            <Link
              href="/services/perth/seo-specialist"
              className="bg-aeo-cyan text-black font-bold px-5 py-2.5 rounded-xl hover:bg-white transition-all text-xs shrink-0 whitespace-nowrap shadow-md"
            >
              book a Perth SEO specialist consultation
            </Link>
          </section>

          {/* Reciprocal Related Articles Mesh */}
          <RelatedArticles currentSlug="entity-authority-building" />

          {/* CTA Banner */}
          <section className="p-8 bg-gradient-to-br from-aeo-cyan/10 via-neutral-950 to-aeo-purple/10 border border-white/15 rounded-3xl text-center space-y-6 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Build Your Entity Authority?</h3>
            <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
              Discover how AI search engines parse your brand identity today. Get a free, manual AI visibility audit for your Australian business.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
              >
                <span>Get Visibility Score</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/perth/seo-specialist"
                className="inline-flex items-center gap-2 px-6 py-4 bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all hover:bg-zinc-800"
              >
                <span>Book a Perth SEO specialist consultation</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
