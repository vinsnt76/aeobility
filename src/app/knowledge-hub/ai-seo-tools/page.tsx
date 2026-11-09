'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Wrench, 
  Search, 
  ArrowRight, 
  BarChart3,
  HelpCircle,
  Sparkles,
  Globe,
  CheckCircle2,
  X,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function AiSeoToolsPage() {
  const router = useRouter();
  const [heroUrl, setHeroUrl] = useState('');
  const [showStickyBanner, setShowStickyBanner] = useState(false);
  const [dismissSticky, setDismissSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = window.scrollY / scrollHeight;
      if (scrollPercentage > 0.4 && !dismissSticky) {
        setShowStickyBanner(true);
      } else if (scrollPercentage <= 0.4) {
        setShowStickyBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissSticky]);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroUrl.trim()) return;

    let formatted = heroUrl.trim();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    router.push(`/diagnostic?url=${encodeURIComponent(formatted)}&auto=true`);
  };

  const tools = [
    {
      id: "aeobility-telemetry-engine",
      name: "AEObility Telemetry Engine",
      category: "AI Search Citation & Extraction Audit",
      pricing: "Free Scan / $995 Blueprint",
      badge: "Native Standard",
      description: "The AEObility Telemetry Engine is an Australian AI search diagnostic tool that tests how generative search platforms read and cite business websites. It evaluates whether AI models can cleanly extract direct answers from your pages or if key facts get lost when user queries expand into follow-up questions. Unlike static rank trackers, it inspects live page markup and answer structure.",
      bestFor: "Measuring real brand citations across ChatGPT Search, Google AI Overviews, and Perplexity.",
      ctaText: "Run Telemetry Scan",
      ctaLink: "/diagnostic"
    },
    {
      id: "schema-org-generator-validator",
      name: "Schema.org Generator & Validator",
      category: "Structured Business Markup",
      pricing: "Open Access / Freemium",
      badge: "Industry Standard",
      description: "A Schema.org Generator and Validator is a structured data tool that produces clean JSON-LD markup for LocalBusiness, Person, Service, and FAQ entities without markup errors or broken code. It helps search crawlers verify your core business facts (such as ABN, operating location, and service scope) without relying on keyword guessing.",
      bestFor: "Giving crawlers unambiguous facts (who you are, what you do, and where you operate) that do not rely on keyword guessing.",
      ctaText: "View Schema Templates",
      ctaLink: "/knowledge-hub/semantic-seo"
    },
    {
      id: "dense-retrieval-vector-simulators",
      name: "Dense Retrieval Vector Simulators",
      category: "Page Answer Placement Checkers",
      pricing: "Technical Framework",
      badge: "Developer Tool",
      description: "Dense Retrieval Vector Simulators are analysis tools that test whether your core answers are buried or diluted halfway down long articles. Because AI retrieval pipelines prioritise self-contained passages near the top of a section, these checkers measure how clearly your lead paragraphs match specific buyer questions.",
      bestFor: "Making sure the most important answer sits early in the section where both readers and automated extractors can find it immediately.",
      ctaText: "Read Positional Guide",
      ctaLink: "/knowledge-hub/articles/positional-bias-in-retrieval"
    },
    {
      id: "aeo-prompt-fan-out-simulators",
      name: "AEO Prompt Fan-Out Simulators",
      category: "Conversational Query Expansion",
      pricing: "Diagnostic Integration",
      badge: "Analysis Tool",
      description: "AEO Prompt Fan-Out Simulators map how a conversational AI model breaks a single user prompt into three or four secondary lookups before generating an answer. By testing these sub-questions in advance, you can see which pricing, location, or qualification details your service pages need to answer upfront.",
      bestFor: "Identifying follow-up questions your guides and service pages need to answer upfront.",
      ctaText: "Explore Query Fan-Out",
      ctaLink: "/knowledge-hub/articles/structured-data-query-fan-out"
    }
  ];

  const faqs = [
    {
      question: "What are AI SEO tools?",
      answer: "AI SEO tools are practical software applications designed to test, structure, and improve web content for generative search engines like Google AI Overviews, ChatGPT Search, and Perplexity. Unlike legacy keyword trackers that only monitor link positions, AI SEO tools check whether AI engines can read your business facts, match your content to specific user questions, and validate your structured schema markup."
    },
    {
      question: "How do AI SEO tools compare for answer engine optimisation?",
      answer: "Legacy SEO tools measure keyword rankings and backlink volume. AI SEO tools for AEO and GEO test how clearly an AI model can extract a direct answer from your page, how your content handles follow-up sub-questions, and whether your structured business data connects cleanly. While basic schema generators only check code syntax, the AEObility Telemetry Engine tests real-time citation readiness across ChatGPT Search, Perplexity, and Google AI Overviews."
    },
    {
      question: "How do I optimise technical content for AI SEO?",
      answer: "1) Write self-contained answers: Provide direct, 80 to 120-word answers beneath clear subheadings before expanding into secondary details. 2) State plain facts: Express who you are, what you offer, and who qualifies in clear, simple sentences that leave no room for misinterpretation. 3) Connect your structured data: Connect your business, authors, and services using clean schema markup so search crawlers recognise how they relate. 4) Back up your claims: Verify your addresses, licences, and operational credentials across reputable third-party registers (such as ASIC, ABN Lookup, and industry bodies)."
    },
    {
      question: "How does the AEObility Telemetry Engine differ from third-party AI SEO software?",
      answer: "Third-party AI SEO tools often rely on static keyword estimates or generic US databases. The AEObility Telemetry Engine tests your live pages against actual answer extraction and follow-up query patterns, giving you a clear picture of what AI models can verify about your business."
    },
    {
      question: "Do automated schema generators guarantee AI search inclusion?",
      answer: "No. Automated schema generators output basic code templates, but earning consistent citations requires connecting your business facts, keeping on-page answers clear and self-contained, and making sure your key information is not buried halfway down a long page."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "legalName": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/assets/AEObility_Logo.webp",
        "image": "https://aeobility.com.au/assets/AEObility_Featured_Image.webp",
        "description": "Bespoke Answer Engine Optimisation (AEO) and generative search consultancy for Australian business entities.",
        "abn": "61 029 803 255",
        "founder": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "url": "https://aeobility.com.au/vince-baker"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-31.9523",
          "longitude": "115.8613"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "@id": "https://en.wikipedia.org/wiki/Perth",
            "name": "Perth, Western Australia",
            "sameAs": "https://www.wikidata.org/wiki/Q3183"
          }
        ],
        "sameAs": [
          "https://www.google.com/maps?cid=aeobility",
          "https://www.linkedin.com/in/vince-baker/"
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#techarticle",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools"
        },
        "headline": "AI SEO Tools & Technology Comparison Hub",
        "description": "Compare AI search software, schema tools, and the retrieval systems that feed conversational models for Australian businesses.",
        "inLanguage": "en-AU",
        "dateModified": "2026-10-31",
        "about": [
          {
            "@type": "DefinedTerm",
            "@id": "https://aeobility.com.au/knowledge-hub/what-is-aeo#definition",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Place",
            "@id": "https://www.wikidata.org/wiki/Q3183",
            "name": "Perth, Western Australia"
          }
        ],
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "jobTitle": "AEO & SEO Specialist",
          "url": "https://aeobility.com.au/vince-baker",
          "sameAs": [
            "https://www.linkedin.com/in/vince-baker/"
          ]
        }
      },
      {
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/ai-seo-tools",
        "name": "AI SEO Tools & Technology Comparison Hub",
        "description": "Compare AI search software, schema tools, and the retrieval systems that feed conversational models.",
        "inLanguage": "en-AU",
        "dateModified": "2026-10-31",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://aeobility.com.au"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Knowledge Hub",
              "item": "https://aeobility.com.au/knowledge-hub"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "AI SEO Tools",
              "item": "https://aeobility.com.au/knowledge-hub/ai-seo-tools"
            }
          ]
        },
        "about": [
          {
            "@type": "SoftwareApplication",
            "@id": "https://aeobility.com.au/diagnostic#webapp",
            "name": "AEObility Telemetry Diagnostic Engine",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "url": "https://aeobility.com.au/diagnostic"
          }
        ],
        "subjectOf": {
          "@type": "ItemPage",
          "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#itempage",
          "name": "AI SEO Tools & Technology Comparison Matrix"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://aeobility.com.au/diagnostic#webapp",
        "name": "AEObility Telemetry Diagnostic Engine",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://aeobility.com.au/diagnostic",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/ai-seo-tools#faq",
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
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      
      <Navbar subnavItems={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[80px] space-y-16">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs text-zinc-200 font-mono font-medium">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Search Tooling &amp; Practical Software Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              AI SEO Tools &amp; <span className="text-gradient-aeo">Technology Comparison Hub</span>
            </h1>

            {/* Author & Last Modified Stamp Under H1 */}
            <div className="flex items-center justify-center gap-3 py-1">
              <Image
                src="/images/about/vince-baker-profile_AEObility.webp"
                alt="Vince Baker - AEO & SEO Specialist"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-cyan-400/50 object-cover shadow-sm shrink-0"
              />
              <div className="text-xs font-mono text-zinc-300 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>
                  By{' '}
                  <Link href="/vince-baker" className="text-cyan-400 font-bold hover:underline">
                    Vince Baker
                  </Link>{' '}
                  <span className="text-zinc-500">|</span> AEO &amp; SEO Specialist
                </span>
                <span className="text-zinc-500 hidden sm:inline">|</span>
                <span className="text-zinc-300 text-[11px]">
                  Last Modified: <time dateTime="2026-10-31">31 October 2026</time>
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-zinc-100 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Compare AI search software, schema tools, and the retrieval systems that feed conversational models.
            </p>

            {/* Self-Contained 90-Word Lead Definition Passage (AEO Extraction Ready & WCAG 2.2 AA Contrast) */}
            <p className="text-base text-zinc-200 font-serif leading-relaxed max-w-3xl mx-auto">
              AI SEO tools are specialised software platforms that test, structure, and measure how conversational search engines (ChatGPT Search, Perplexity, and Google AI Overviews) read, extract, and cite business information. While legacy rank trackers only monitor blue-link keyword positions and backlink counts, AI SEO tools evaluate whether an answer engine can extract a self-contained passage from your page, verify your business credentials through structured schema markup, and connect your services to follow-up buyer questions. We benchmark standard SEO software alongside the <Link href="/diagnostic" className="text-cyan-300 underline hover:text-white font-semibold">AEObility Telemetry Diagnostic Engine</Link> so you can see where your business data holds up.
            </p>

            {/* Dark Glassmorphism Telemetry Audit Container with Ambient Refraction Glows */}
            <div className="relative mt-8 max-w-3xl mx-auto">
              {/* Ambient Radial Glow Blobs for Glass Refraction */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 left-1/4 h-44 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 right-1/4 h-44 w-64 translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl"
              />

              {/* 1px Translucent Gradient Stroke Wrapper */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/25 via-cyan-400/20 to-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-md text-left space-y-4">
                  <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Live AI Search Visibility Audit</span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                    Skip third-party approximations. Test your website directly to see how AI search engines read and extract your business information.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                    AEObility evaluates how conversational AI platforms (ChatGPT, Perplexity, Google AI Overviews) extract and cite Australian business data.
                  </p>

                  <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 pt-1">
                    <div className="relative flex-grow">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300" />
                      <input
                        type="text"
                        required
                        aria-label="Enter website domain to audit"
                        placeholder="Enter domain (e.g. example.com.au)"
                        value={heroUrl}
                        onChange={(e) => setHeroUrl(e.target.value)}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-black/40 shadow-inner border border-white/20 text-white placeholder:text-zinc-300 text-sm focus:outline-none focus:border-white focus:ring-2 focus:ring-white/80 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,229,255,0.35)] whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Run Telemetry Audit →</span>
                    </button>
                  </form>

                  {/* Inline Trust & Verification Markers Directly Beneath Primary CTA */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 text-xs font-mono text-zinc-300">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Perth, WA · ABN: 61 029 803 255</span>
                    </span>
                    <span>
                      Operated by <Link href="/vince-baker" className="text-zinc-100 underline hover:text-cyan-300">Vince Baker</Link> · Free instant check
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Tools Grid */}
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI SEO Tools &amp; Technical Frameworks</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif">Comparing third-party software against live answer extraction checks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="bg-zinc-950/80 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                        {tool.badge}
                      </span>
                      <span className="text-xs font-mono text-zinc-300">{tool.pricing}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 id={tool.id} className="text-xl font-bold text-white font-soehne-breit">{tool.name}</h3>
                      <span className="text-xs text-aeo-purple font-mono font-semibold block">{tool.category}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="bg-black/50 border border-white/10 p-3 rounded-xl text-xs text-zinc-200 font-serif">
                      <strong className="text-cyan-300 block mb-0.5 font-mono font-bold">Best For:</strong>
                      <span>{tool.bestFor}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <Link
                      href={tool.ctaLink}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/15 hover:border-cyan-400 text-white font-bold text-xs transition-all hover:bg-zinc-800"
                    >
                      <span>{tool.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix Table */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Software Evaluation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI Search Tools &amp; Extraction Comparison</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Comparing practical capabilities across AI search and legacy SEO tools.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-zinc-300 font-mono">
                    <th className="p-4 font-bold">Feature / Metric</th>
                    <th className="p-4 font-bold text-cyan-400">AEObility Telemetry Engine</th>
                    <th className="p-4 font-bold">Automated Schema Generators</th>
                    <th className="p-4 font-bold text-zinc-400">Legacy Keyword Crawlers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-serif text-zinc-300">
                  <tr>
                    <td className="p-4 font-bold text-white">Live AI Citation Tracking</td>
                    <td className="p-4 text-cyan-300 font-semibold">Live Multi-Engine Answer Check</td>
                    <td className="p-4 text-zinc-400">Syntax Check Only</td>
                    <td className="p-4 text-zinc-500">Not Supported (Links Only)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Prompt Fan-Out Simulation</td>
                    <td className="p-4 text-cyan-300 font-semibold">Supported (Gemini / ChatGPT)</td>
                    <td className="p-4 text-zinc-400">Not Supported</td>
                    <td className="p-4 text-zinc-500">Not Supported</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Clear Fact Connections (Entity Triples)</td>
                    <td className="p-4 text-cyan-300 font-semibold">Full Business Fact Graph Check</td>
                    <td className="p-4 text-zinc-400">Single Class Templates</td>
                    <td className="p-4 text-zinc-500">Basic Keyword Matching</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Australian Regional Calibration</td>
                    <td className="p-4 text-cyan-300 font-semibold">Tested against Australian locations, local suburbs, and Western Australian business contexts rather than US-only directories</td>
                    <td className="p-4 text-zinc-400">Generic Global Standard</td>
                    <td className="p-4 text-zinc-400">US-Default Database</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Local vs Global Intent Separation</td>
                    <td className="p-4 text-cyan-300 font-semibold">Supported (Distinguishes general technical guides from someone looking to hire a specialist in Perth)</td>
                    <td className="p-4 text-zinc-400">Not Supported</td>
                    <td className="p-4 text-zinc-500">Not Supported (Relies on exact-match text strings)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Mid-Page Comparison Matrix CTA Card */}
          <section className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 border border-aeo-cyan/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-left">
              <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider block">Hands-On Implementation</span>
              <p className="text-base sm:text-lg font-bold text-white font-soehne-breit leading-snug">
                Need clean structured data or practical AI search setup for your business website?
              </p>
            </div>
            <Link
              href="/services/ai-search-agency"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,205,216,0.3)] whitespace-nowrap flex items-center gap-2"
            >
              <span>Explore AI Search Agency Sprint Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Methodology & Core AEO Definition Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Foundational Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Understanding AEO Methodology</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Before selecting software tools, review our <Link href="/knowledge-hub/what-is-aeo" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">comprehensive Answer Engine Optimisation definition guide</Link> to see how self-contained, direct answer passages and clear factual statements work when AI search engines read and extract page content.
              </p>
            </div>
          </section>

          {/* Enterprise Agency Node Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Custom Software Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Custom AI Search Agency Engineering</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                For complex e-commerce platforms or multi-location brands, off-the-shelf software generators fall short. Partnering with a <Link href="/services/ai-search-agency" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">dedicated AI search agency and AEO consultancy</Link> gives you clean structured markup and consistent citation tracking across engines.
              </p>
            </div>
          </section>

          {/* Regional Specialist Hub Link */}
          <section className="space-y-6 border-t border-white/10 pt-12">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">Local Strategy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Local AEO Implementation in Australia</h2>
              <p className="text-sm text-zinc-300 font-serif leading-relaxed max-w-3xl">
                Short-term automated scripts often backfire, causing AI engines to hallucinate or mislabel core business details. In our <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">78-day field trial</Link>, we focused on cleaning up basic entity data and structuring on-page answers. Over the test period, clear, verifiable business citations increased significantly across conversational search tools compared to unverified keyword pages. Working alongside a <Link href="/services/perth/seo-specialist" className="text-aeo-cyan underline hover:text-cyan-300 font-semibold">Perth SEO specialist and local AEO consultant</Link> ensures consistent entity facts beat keyword stuffing every time.
              </p>
            </div>
          </section>

          {/* FAQ Section with Micro Comparison Header */}
          <section className="border-t border-white/10 pt-12 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Frequently Asked Questions &amp; Feature Comparison</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">AI SEO Tools FAQ</h2>
              <h3 className="text-lg sm:text-xl font-bold text-cyan-300 font-soehne-breit pt-1">
                AI SEO Tools Comparison: AEO &amp; GEO Features
              </h3>
            </div>

            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-zinc-950/80 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl space-y-3 transition-all duration-200 shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white font-soehne-breit flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Sticky Rail / Bottom Sticky Banner */}
      {showStickyBanner && !dismissSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-md border-t border-[#00E5FF]/40 p-4 shadow-[0_-5px_25px_rgba(0,229,255,0.2)] transition-all duration-300 animate-in slide-in-from-bottom-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-aeo-cyan hidden sm:block">
                <Cpu className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white font-soehne-breit">
                Evaluate your brand visibility across ChatGPT, Perplexity, &amp; Gemini.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#00E5FF] hover:bg-cyan-300 text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] text-center cursor-pointer"
              >
                Launch Free Diagnostic
              </Link>
              <button
                onClick={() => setDismissSticky(true)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

