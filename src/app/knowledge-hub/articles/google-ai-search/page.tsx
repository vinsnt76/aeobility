import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import RelatedArticles from '@/components/navigation/RelatedArticles';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  Cpu, 
  Network, 
  Layers, 
  ShieldCheck, 
  Database, 
  Compass, 
  GitFork, 
  BarChart3, 
  BookOpen, 
  ExternalLink,
  HelpCircle,
  FileText,
  AlertTriangle,
  Sliders,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Why Query Fan-Out Bypasses Your Pillar Pages | Google AI Search | AEObility",
  description: "Why Google AI Search query fan-out bypasses 4,000-word guides. An 8-step practitioner blueprint for structuring extractable passage-level retrieval nodes.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
  },
  openGraph: {
    title: "Why Query Fan-Out Bypasses Your Pillar Pages | Google AI Search | AEObility",
    description: "Why Google AI Search query fan-out bypasses 4,000-word guides. An 8-step practitioner blueprint for structuring extractable passage-level retrieval nodes.",
    url: "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        width: 1200,
        height: 800,
        alt: "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Query Fan-Out Bypasses Your Pillar Pages | Google AI Search | AEObility",
    description: "Why Google AI Search query fan-out bypasses 4,000-word guides. An 8-step practitioner blueprint for structuring extractable passage-level retrieval nodes.",
    images: ["https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp"],
  },
  keywords: [
    "google ai search",
    "query fan-out",
    "why query fan-out bypasses your pillar pages",
    "google search engine ai",
    "grounded synthesis",
    "rag grounding",
    "ai mode optimisation",
    "search generative experience",
    "answer engine optimisation",
    "AEO Australia"
  ]
};

export default function GoogleAiSearchArticlePage() {
  const articleFaqs = [
    {
      question: "Where can I get expert search engine optimisation for Google and AI search engines?",
      answer: "AEObility provides technical search engine optimisation tailored for both traditional Google search and conversational AI engines across Australia. Unlike legacy digital marketing agencies that focus solely on keyword rankings, AEObility builds structured entity graphs, atomic answer blocks, and machine-readable data layers. This dual-layer approach ensures your business remains visible in standard Search results while strengthening retrieval probability across Google AI Overviews, Perplexity, and ChatGPT."
    },
    {
      question: "How does E-E-A-T apply to AI search engines beyond Google?",
      answer: "Generative search engines evaluate Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) through multi-source cross-web corroboration. Systems like Perplexity, Copilot, and ChatGPT do not rely on isolated on-page text alone; they verify entity claims across independent databases, industry directories, and structured schema graphs. Maintaining clear, consistent business facts and cited author profiles across external web properties strengthens entity clarity and increases the likelihood of citation in AI-generated answers."
    },
    {
      question: "Who optimises content for AI-powered Google Search in Australia?",
      answer: "AEObility is a specialist Australian AEO and GEO consultancy based in Perth, Western Australia, serving service businesses and SMBs nationwide. AEObility refactors digital content for AI-powered search through fixed-scope implementation sprints and strategic blueprints. The methodology replaces fluff-heavy web copy with 90 to 120 token atomic answer blocks, nested JSON-LD schema graphs, and canonical brand fact architectures with zero ongoing contract lock-in."
    },
    {
      question: "Why is Google AI getting my business details wrong?",
      answer: "Google AI Overviews and Gemini reconstruct business answers by aggregating data across multiple web sources. When core business facts like your Name, Address, Phone number (NAP), trading hours, or core service categories conflict across directory listings and unverified profiles, generative models encounter entity ambiguity, resulting in inaccurate summaries. Publishing a canonical Brand Facts page on your website and deploying structured LocalBusiness schema reduces context dilution and ensures machines parse consistent first-party evidence."
    },
    {
      question: "Why has my search traffic collapsed when my keyword rankings are unchanged?",
      answer: "This traffic drop occurs when Google AI Overviews or AI Mode resolve user queries directly on the search engine results page. While your URL may maintain a top organic position, the generative summary satisfies top-of-funnel informational intent on-interface, resulting in a zero-click search. Recovering qualified traffic requires pivoting from broad keyword targeting to passage-level citation optimisation, structuring proprietary data, verified pricing, and clear first-party insights that compel high-intent searchers to click through for deeper validation."
    }
  ];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
        "name": "Why Query Fan-Out Bypasses Your Pillar Pages | Google AI Search | AEObility",
        "description": "Why Google AI Search query fan-out bypasses 4,000-word guides. An 8-step practitioner blueprint for structuring extractable passage-level retrieval nodes.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#breadcrumb"
        },
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp#primaryimage"
        }
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#webpage"
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
        "headline": "Why Query Fan-Out Bypasses Your Pillar Pages: Google AI Search Retrieval Architecture",
        "description": "Why Google AI Search query fan-out bypasses 4,000-word guides. An 8-step practitioner blueprint for structuring extractable passage-level retrieval nodes.",
        "inLanguage": "en-AU",
        "datePublished": "2026-11-02T08:00:00+08:00",
        "dateModified": "2026-11-03T00:00:00+08:00",
        "image": [
          "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp"
        ],
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "url": "https://aeobility.com.au/vince-baker",
          "image": {
            "@id": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png#authorimage"
          }
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organisation",
          "name": "AEObility",
          "legalName": "Trekaboutoz trading as AEObility",
          "taxID": "61 029 803 255",
          "url": "https://aeobility.com.au",
          "logo": {
            "@type": "ImageObject",
            "@id": "https://aeobility.com.au/icons/android-chrome-512x512.png#logo",
            "url": "https://aeobility.com.au/icons/android-chrome-512x512.png",
            "contentUrl": "https://aeobility.com.au/icons/android-chrome-512x512.png",
            "width": 512,
            "height": 512
          }
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Google",
            "sameAs": "https://en.wikipedia.org/wiki/Google"
          },
          {
            "@type": "Thing",
            "name": "Artificial Intelligence",
            "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
          },
          {
            "@type": "Thing",
            "name": "Search Engine",
            "sameAs": "https://en.wikipedia.org/wiki/Search_engine"
          },
          {
            "@type": "DefinedTerm",
            "name": "Retrieval-Augmented Generation",
            "termCode": "RAG",
            "sameAs": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
          },
          {
            "@type": "DefinedTerm",
            "name": "Generative Engine Optimisation",
            "termCode": "GEO",
            "sameAs": "https://en.wikipedia.org/wiki/Generative_engine_optimization"
          },
          {
            "@type": "DefinedTerm",
            "name": "Answer Engine Optimisation",
            "termCode": "AEO",
            "sameAs": "https://www.wikidata.org/wiki/Q124314457"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Gemini",
            "sameAs": "https://en.wikipedia.org/wiki/Gemini_(chatbot)"
          },
          {
            "@type": "Thing",
            "name": "Google AI Overviews"
          },
          {
            "@type": "Thing",
            "name": "Search Generative Experience"
          }
        ],
        "citation": [
          "https://aeobility.com.au/services/aeo/definition",
          "https://aeobility.com.au/services/aeo/comparison",
          "https://aeobility.com.au/services/geo-marketing",
          "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
          "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
          "https://aeobility.com.au/knowledge-hub/articles/entity-authority-building",
          "https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
          "https://aeobility.com.au/diagnostic",
          "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp#primaryimage",
        "url": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        "name": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "description": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "caption": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "width": 1200,
        "height": 800,
        "encodingFormat": "image/webp",
        "representativeOfPage": true,
        "inLanguage": "en-AU"
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png#authorimage",
        "url": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        "contentUrl": "https://aeobility.com.au/images/about/Profile-Picture-Vinnie.png",
        "caption": "Vince Baker Founder and AEO Specialist at AEObility",
        "width": 800,
        "height": 800,
        "encodingFormat": "image/png",
        "inLanguage": "en-AU"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#breadcrumb",
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
            "name": "Articles",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Google AI Search Retrieval Architecture",
            "item": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#faq",
        "mainEntity": articleFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Ambient Visual Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <article className="flex flex-col gap-10">

          {/* Article Header & High-Signal Zone */}
          <header className="space-y-6 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>AEO Field Journal &bull; Technical Research Node &bull; 02/11/26</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Why Query Fan-Out Bypasses Your Pillar Pages <span className="text-gradient-aeo">(And How to Fix the Retrieval Architecture)</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 font-normal">
                Google AI Search: Grounded Synthesis, Context Dilution, and Passage Retrieval Mechanics
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 border-t border-b border-white/10 py-3.5">
              <span>Author: <strong className="text-white">Vince Baker</strong></span>
              <span>&bull;</span>
              <span>Organisation: <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Published: <strong className="text-white">02/11/2026</strong></span>
              <span>&bull;</span>
              <span>Target Topic: <strong className="text-aeo-cyan font-mono">google ai search</strong></span>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>

            {/* Step 1: The Sightline */}
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-aeo-cyan/10 via-slate-950/80 to-slate-950/90 border-l-4 border-l-aeo-cyan p-6 backdrop-blur-md shadow-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                  01 &bull; The Sightline
                </span>
              </div>
              <p className="text-slate-200 text-base md:text-lg font-normal leading-relaxed">
                Google&apos;s generative search experiences do not read your website like a digital directory. Instead of matching a single keyword to a single URL, systems like AI Overviews and AI Mode break complex prompts into secondary background searches, fetch concise passage-level evidence from the index, and synthesise a direct answer. If your content buries key solutions inside long, unstructured paragraphs, the retrieval engine simply skips your page during query expansion. To remain discoverable, businesses must structure self-contained, verifiable answer blocks that search models can extract, ground, and cite during multi-turn sessions.
              </p>
            </div>
          </header>

          {/* Step 2: The Misconception */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                02 &bull; The Misconception
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                The 4,000-Word &ldquo;Ultimate Guide&rdquo; Trap
              </h2>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Traditional SEO trained us to build massive pillar pages. The conventional playbook said: if you write 4,000 words covering every conceivable angle of a topic, keyword density and page authority will push your URL to position one.
              </p>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                In a retrieval-augmented search environment, this assumption breaks down. Large language models exhibit clear{' '}
                <Link 
                  href="/knowledge-hub/articles/positional-bias-in-retrieval" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  positional bias and lost-in-the-middle context dilution
                </Link>
                . When you force a model to ingest walls of conversational backstory before reaching a practical answer, you introduce context dilution. Answer engines are not looking for your life story; they are looking for extractable units of proof.
              </p>
            </div>
          </section>

          {/* Step 3: The Machinery */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                03 &bull; The Machinery
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Underlying Retrieval Architecture: How Answer Engines Actually Fetch Evidence
              </h2>
            </div>

            {/* Hero Architecture Visual Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-video shadow-2xl bg-neutral-950 group">
              <Image
                src="/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp"
                alt="Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures."
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div className="space-y-1.5 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-[11px] font-mono font-semibold">
                      <Sparkles className="w-3 h-3" />
                      <span>Retrieval &amp; Grounding Architecture</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Dual-Layer Retrieval: Web Indexing Meets Grounded Generative Synthesis
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">
                      How Google synthesises web evidence across multi-query expansions, Search retrieval, and conversational sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Google&apos;s generative search experiences do not replace standard web indexing. They sit directly on top of existing crawling, indexation, and technical quality systems. If your pages are slow, orphaned, or blocked in robots.txt, Google cannot retrieve or use them downstream in generative synthesis.
            </p>

            {/* Subsection: Query Fan-Out */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Query Fan-Out and Subtopic Expansion
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                When a user submits an open or complex query, the model rarely executes a single lookup. Instead, it generates multiple secondary queries across related subtopics simultaneously. For instance, a prompt like &ldquo;how to restore a weed-infested buffalo lawn&rdquo; triggers background searches across selective herbicides, physical thatch removal, and seasonal fertilisation windows. If your site covers only the broad head term and ignores these practical sub-intent clusters, the retrieval engine simply bypasses you during multi-query expansion.
              </p>
            </div>

            {/* Subsection: Retrieval, Grounding and RAG Patterns */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Retrieval, Grounding, and Retrieval-Augmented Generation (RAG)
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                Google does not publicly describe all AI Overviews and AI Mode architecture simply as a standalone vector &ldquo;RAG&rdquo; pipeline. Google Search&apos;s core strength remains its world-scale web index and core ranking systems. AI Mode sits on top of those systems, issuing multiple searches into Google&apos;s retrieval stack and then grounding a generated response from returned evidence. While this retrieval-plus-grounding pattern clearly resembles a{' '}
                <Link 
                  href="/knowledge-hub/articles/retrieval-augmented-generation" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  Retrieval-Augmented Generation (RAG) architecture
                </Link>
                , Google&apos;s public descriptions emphasise query fan-out and retrieval from Search rather than pure vector-store generation. The operational objective remains extractable evidence: concise, self-contained paragraphs that directly answer an underlying sub-question without requiring pages of conversational filler.
              </p>
            </div>

            {/* Subsection: Multi-Turn Conversational Reasoning */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Multi-Turn Conversational Reasoning
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                Through conversational interfaces like AI Mode, users refine constraints, exclude variables, and test comparisons across a continuous session. The engine continually retrieves fresh candidate passages at each turn to answer follow-up prompts.
              </p>
            </div>

            {/* Subsection: The Mechanical Reality vs The Commercial Impact */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  The Mechanical Reality vs The Commercial Impact
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                While modern RAG literature frequently discusses vector representations and dense embeddings, Google&apos;s proprietary internal ranking weights and vector calculations remain closed. We do not pretend to reverse-engineer these black boxes. What we can observe and measure is the operational result: when query fan-out occurs, brands absent from secondary subtopic expansions lose visibility for that branch of the query, regardless of how well their homepage ranks for the primary keyword.
              </p>
            </div>

            {/* Subsection: What Has Not Changed */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  What Has Not Changed
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                Despite the introduction of AI Overviews and AI Mode, core fundamentals remain unchanged. Pages must still be crawlable, indexable, accessible, trustworthy, and competitively relevant. Generative systems operate directly on top of Google&apos;s existing retrieval infrastructure rather than replacing it. If a site suffers from technical indexation debt, slow server response times, orphaned navigation, or thin authority signals, answer engines will never have the opportunity to extract or cite its content. Foundational technical excellence remains the mandatory prerequisite for any advanced answer engine visibility.
              </p>
            </div>

            {/* Semantic Lattice Architecture Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-aeo-cyan" />
                <span>Topic Cluster &amp; Semantic Lattice Architecture</span>
              </h3>
              <p className="text-xs text-slate-400">
                A single page cannot claim broad category dominance without supporting concept nodes that reinforce the primary entity across intent corridors:
              </p>
              
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-950/75 p-3 backdrop-blur-md shadow-xl shadow-black/40 my-6">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400 font-mono">
                      <th className="py-3 px-4 font-normal">Pillar / Sub-Node Category</th>
                      <th className="py-3 px-4 font-normal text-slate-400">Target Intent &amp; Focus</th>
                      <th className="py-3 px-4 font-normal text-aeo-cyan">Suggested URL Structure</th>
                      <th className="py-3 px-4 font-normal text-slate-400">Key Entity Triples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Core Definition Node</td>
                      <td className="py-3.5 px-4 text-slate-300 font-normal">Informational: What is Google AI Search?</td>
                      <td className="py-3.5 px-4 font-mono text-aeo-cyan">
                        <Link href="/services/aeo/definition" className="hover:underline">/services/aeo/definition</Link>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-teal-300">(Google AI Search, utilises, Gemini RAG)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Comparison Node</td>
                      <td className="py-3.5 px-4 text-slate-300 font-normal">Commercial / Educational: Google AI Search vs. Traditional Search</td>
                      <td className="py-3.5 px-4 font-mono text-aeo-cyan">
                        <Link href="/services/aeo/comparison" className="hover:underline">/services/aeo/comparison</Link>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-teal-300">(AEO, complements, Lexical SEO)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Technical Optimisation Node</td>
                      <td className="py-3.5 px-4 text-slate-300 font-normal">Technical / Practical: Structuring Schema for AI Overviews</td>
                      <td className="py-3.5 px-4 font-mono text-aeo-cyan">
                        <Link href="/knowledge-hub/articles/google-ai-search" className="hover:underline">/knowledge-hub/articles/google-ai-search</Link>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-teal-300">(Atomic Blocks, increases, Passage Extraction)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Local / GEO Node</td>
                      <td className="py-3.5 px-4 text-slate-300 font-normal">Commercial: AI Search for Local &amp; Map Discovery</td>
                      <td className="py-3.5 px-4 font-mono text-aeo-cyan">
                        <Link href="/services/geo-marketing" className="hover:underline">/services/geo-marketing</Link>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-teal-300">(Google Maps, feeds, Spatial AI Overviews)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Step 4: Real-World Australian Context & Funnel Dynamics */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                04 &bull; Search Behaviour &amp; Funnel Dynamics
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                How Generative Search Compresses Funnels and Revalues Clicks
              </h2>
            </div>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              The integration of generative answers fundamentally changes user click patterns and search funnel mechanics. Instead of browsing a list of links, users increasingly absorb synthesised summaries directly on the result page, shifting organic traffic dynamics across several fronts:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Point 1 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl shadow-black/40 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <BarChart3 className="w-4 h-4" />
                  <span>Click Dynamics</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Traditional Click Volume Drops on Informational Queries
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Independent tracking shows a clear decline in standard organic clicks whenever an AI overview generates. For example, Pew Research documented that traditional organic clicks took place in only 8% of user sessions when an AI summary was present (down from 15% when absent). Direct clicks on citations embedded inside summaries occurred in roughly 1% of visits.
                </p>
                <div className="pt-2 border-t border-white/[0.06]">
                  <a
                    href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-aeo-cyan transition-colors"
                  >
                    <span>Source: Pew Research Center, July 2025</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Point 2 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl shadow-black/40 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Intent Collapse</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Conversational Funnel Compression
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Research journeys that previously took four or five separate searches across multiple browser tabs are collapsing into single, multi-turn sessions. The extent of this compression depends on commercial risk and query intent: low-risk informational questions resolve almost entirely on-interface, while high-stakes, transactional, or localised requirements still drive deeper evaluation.
                </p>
              </div>

              {/* Point 3 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl shadow-black/40 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Extractable Proof</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  The Strategic Revaluation of Citations
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Because generative interfaces absorb and resolve generic definitional text without sending referral traffic, standard explainer content has lost its legacy organic utility. Commercial value now centres on extractable proof: proprietary datasets, verified local pricing, primary case studies, and clear first-party methodologies that grounding models must explicitly reference and cite.
                </p>
              </div>
            </div>

            {/* Radial Proof Loop Callout: Module 1 */}
            <div className="mt-6 p-6 rounded-2xl bg-slate-950/75 border border-aeo-cyan/30 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/30 text-aeo-cyan text-[11px] font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-World Case Study</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Want to see how a structured 90-day entity lattice performed on a fresh Australian domain?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Read our 78-day empirical case study analysing live search indexation, entity graph verification, and citation lift.
                  </p>
                </div>
                <Link
                  href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days"
                  className="px-5 py-2.5 rounded-xl bg-aeo-cyan text-black font-semibold text-xs hover:bg-white transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg flex-shrink-0"
                >
                  <span>Case Study: AEObility&apos;s First 90 Days</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Step 5: Field Note / Live Example */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                05 &bull; Field Note &bull; Practitioner Case Study
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Field Note: The Lawn Care Subtopic Test
              </h2>
            </div>

            <div className="rounded-2xl border border-aeo-cyan/30 bg-gradient-to-r from-aeo-cyan/10 via-slate-950/80 to-slate-950/90 p-6 md:p-8 backdrop-blur-md shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-full border border-aeo-cyan/40 bg-black overflow-hidden flex-shrink-0 relative">
                  <Image
                    src="/images/about/Profile-Picture-Vinnie.png"
                    alt="Vince Baker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Vince Baker</div>
                  <div className="text-xs text-aeo-cyan font-mono">Founder, AEObility &bull; Western Australia</div>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-slate-200 font-normal leading-relaxed">
                <p>
                  Last month, I ran a retrieval diagnostic on an Australian turf management client. Their homepage and primary service page ranked in the top three organic positions on Google for &ldquo;buffalo lawn maintenance Perth&rdquo;.
                </p>
                <p>
                  Yet, when we tested conversational prompts in Google AI Mode (such as <em>&ldquo;how to remove bindii from winter-dormant buffalo grass&rdquo;</em>), their brand vanished from the generated summary.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono text-rose-400 font-bold uppercase">The Breakdown:</div>
                  <p className="text-sm text-slate-300">
                    Google&apos;s query fan-out issued three background retrieval passes: selective post-emergent herbicides, winter mowing heights, and manual weed extraction. The client&apos;s comprehensive 4,000-word guide touched on weeds in paragraph fourteen, but never isolated the solution. A competitor with an 85-word atomic table comparing selective active ingredients was cited directly in the overview.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/90 border border-teal-500/30 space-y-2">
                  <div className="text-xs font-mono text-aeo-cyan font-bold uppercase">The Operational Adjustment:</div>
                  <p className="text-sm text-slate-300">
                    We pulled the weed identification section out of the general guide, structured an isolated answer block with an active ingredient compatibility table, and redeployed. Within two indexing cycles, the client&apos;s domain was extracted as the primary citation for that subtopic corridor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 6: The Playbook */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                06 &bull; The Playbook
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                The Playbook: Structuring Extractable Retrieval Nodes
              </h2>
            </div>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Succeeding in a multi-query, grounded search environment requires structuring content for clarity, machine readability, and standalone utility:
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-xs font-mono font-bold flex items-center justify-center">1</span>
                  <h3 className="text-lg font-bold text-white">Step 1: Map the Query Fan-Out Corridor</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed pl-9">
                  Do not target a single head keyword. Take your core topic and identify the three to five operational sub-questions a buyer asks immediately after (pricing, compatibility, installation constraints, and legal boundaries).
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-xs font-mono font-bold flex items-center justify-center">2</span>
                  <h3 className="text-lg font-bold text-white">Step 2: Build Standalone Answer Parcels</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed pl-9">
                  Open each section with an atomic answer block. Deliver the working answer in roughly 50 to 80 words directly beneath the H2 or H3 heading before providing deeper context.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-xs font-mono font-bold flex items-center justify-center">3</span>
                  <h3 className="text-lg font-bold text-white">Step 3: Corroborate Machine-Readable Facts</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed pl-9">
                  Deploy standard Schema.org markup that reflects the exact visible copy on page. Maintain consistency across your canonical{' '}
                  <Link href="/brand-facts" className="text-aeo-cyan hover:underline font-semibold">
                    Brand Facts directory
                  </Link>{' '}
                  and independent directories to eliminate entity ambiguity.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl shadow-black/40 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan text-xs font-mono font-bold flex items-center justify-center">4</span>
                  <h3 className="text-lg font-bold text-white">Step 4: Benchmarking and Retrieval Tracking</h3>
                </div>
                <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed pl-9">
                  Track referral quality and citation inclusion across multi-turn prompt sets rather than obsessing over static daily rank trackers.
                </p>
              </div>
            </div>

            {/* Strategic Action Matrix */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-aeo-cyan" />
                <span>Strategic Action Matrix: Traditional SEO vs AI Search Strategy</span>
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-950/75 p-3 backdrop-blur-md shadow-xl shadow-black/40 my-6">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400 font-mono">
                      <th className="py-3 px-4 font-normal">Strategic Shift</th>
                      <th className="py-3 px-4 font-normal text-slate-400">Traditional SEO Focus</th>
                      <th className="py-3 px-4 font-normal text-aeo-cyan">AI Search Commercial Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Content Focus</td>
                      <td className="py-3.5 px-4 text-slate-400 font-normal">Broad definitional and high-volume keyword content</td>
                      <td className="py-3.5 px-4 text-teal-200 font-medium">Proprietary data, unique research and expert insights</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Optimisation Goal</td>
                      <td className="py-3.5 px-4 text-slate-400 font-normal">Single-keyword URL rankings</td>
                      <td className="py-3.5 px-4 text-teal-200 font-medium">Citation presence across multi-query fan-out</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Authority Signal</td>
                      <td className="py-3.5 px-4 text-slate-400 font-normal">Backlink quantity and exact-anchor matching</td>
                      <td className="py-3.5 px-4 text-teal-200 font-medium">Cross-web entity consensus and verification</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">Success Metrics</td>
                      <td className="py-3.5 px-4 text-slate-400 font-normal">Rankings and raw organic click volume</td>
                      <td className="py-3.5 px-4 text-teal-200 font-medium">Citation share, referral quality and conversions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Step 7: Limits, Boundaries & Caveats */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                07 &bull; Scope, Limits &amp; Boundaries
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                What Answer Engine Optimisation Cannot Fix
              </h2>
            </div>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Answer Engine Optimisation is a structural discipline, not a magic wand. Explicitly acknowledging system limits prevents misallocated resources and establishes realistic operational expectations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Technical Crawl Debt</span>
                </div>
                <h3 className="text-base font-bold text-white">It Cannot Overcome Server Debt</h3>
                <p className="text-xs md:text-sm text-slate-300 font-normal leading-relaxed">
                  If your server response times are slow, your core web vitals fail, or your site architecture contains orphaned nodes, Google cannot reliably crawl or index your content. No schema graph can rescue an inaccessible page.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Thin Local Authority</span>
                </div>
                <h3 className="text-base font-bold text-white">It Cannot Manufacture Real Authority</h3>
                <p className="text-xs md:text-sm text-slate-300 font-normal leading-relaxed">
                  A brand without verified customer reviews, real registered trading entities (ABN/ACN), or credible third-party citations cannot trick language models into recommending it for high-trust commercial queries.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Hidden Pricing &amp; Jargon</span>
                </div>
                <h3 className="text-base font-bold text-white">It Cannot Mask Opaque Commercials</h3>
                <p className="text-xs md:text-sm text-slate-300 font-normal leading-relaxed">
                  If your commercial offerings hide behind vague marketing slogans like &ldquo;custom solutions tailored for you&rdquo; without baseline numbers or clear service scopes, AI synthesisers will pass over your brand in favour of transparent competitors.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-5 backdrop-blur-md shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Product/Market Mismatch</span>
                </div>
                <h3 className="text-base font-bold text-white">It Cannot Fix Ineffective Products</h3>
                <p className="text-xs md:text-sm text-slate-300 font-normal leading-relaxed">
                  AEO gets your verified capability cited by machines. It cannot convince customers to buy an obsolete service or retain clients if the underlying delivery fails to meet Australian consumer expectations.
                </p>
              </div>
            </div>
          </section>

          {/* Step 8: Next Steps & Low-Pressure Close */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                08 &bull; Next Steps
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Evaluating Your Brand&apos;s AI Search Footprint
              </h2>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-slate-950/75 p-6 backdrop-blur-md shadow-xl space-y-4">
              <p className="text-base text-slate-200 font-normal leading-relaxed">
                Take your primary commercial service and run a multi-turn query through Perplexity or Google AI Mode today. Check whether your brand is cited in the synthesis, or if the system extracts answers from third-party aggregators and directories instead.
              </p>
              <p className="text-base text-slate-200 font-normal leading-relaxed">
                If you want an objective diagnostic of how answer engines currently parse your entity footprint, you can inspect your setup using AEObility&apos;s free visibility scan or review our structured service blueprints.
              </p>
            </div>

            {/* Commercial Action Corridor: Module 2 (Hick's Law Unified CTA) */}
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-slate-950/75 p-8 text-center max-w-3xl mx-auto backdrop-blur-md shadow-2xl shadow-black/50 relative overflow-hidden">
              <span className="text-xs uppercase tracking-widest text-aeo-cyan font-mono font-bold">Entity Readability Audit</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3 tracking-tight">
                Ready to Audit Your Entity Readability?
              </h2>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 font-normal leading-relaxed">
                Move from legacy keyword tracking to structured, RAG-ready machine discovery.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/solutions/aeo-blueprint"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-slate-950 bg-aeo-cyan hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_28px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 text-xs md:text-sm"
                >
                  <span>$995 Strategic Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/aeo"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-slate-200 border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all text-xs md:text-sm"
                >
                  <span>Explore AEO Services</span>
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-400">
                Prefer a quick self-serve audit? Run a scan with our{' '}
                <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-medium">
                  AI Search Visibility Diagnostic
                </Link>
              </div>
              <p className="text-xs text-slate-400 mt-5 tracking-wide font-mono">
                Zero ongoing lock-in &bull; 48-hour turn-around &bull; Built for Australian entities
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-aeo-cyan/10 via-slate-950/80 to-slate-950/90 border-l-4 border-l-aeo-cyan p-6 backdrop-blur-md shadow-xl space-y-2 mt-8">
              <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                Key Takeaway
              </h3>
              <p className="text-slate-200 text-sm md:text-base font-normal leading-relaxed">
                Google AI Search shifts user discovery from simple link lists toward grounded multi-query synthesis. In this environment, visibility now includes being accurately represented and cited, not merely ranking. The response is not a separate &ldquo;AI SEO&rdquo; discipline, but an emphasis on fundamental technical excellence: crawlable infrastructure, self-contained and clear answers, verified business data, and original, expert-led insights.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-aeo-cyan" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Google AI Search &amp; Entity Optimisation FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {articleFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-xl bg-slate-950/75 border border-white/[0.08] backdrop-blur-sm space-y-2.5 shadow-md shadow-black/30"
                >
                  <h3 className="text-base font-bold text-white flex items-start gap-2">
                    <span className="text-aeo-cyan font-mono text-xs mt-1">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles Component */}
          <RelatedArticles currentSlug="google-ai-search" />

        </article>
      </main>

      <Footer />
    </div>
  );
}
