import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  AlertTriangle,
  Target,
  Zap,
  Search,
  Cpu,
  Network,
  Sparkles,
  Award,
  BarChart3,
  Globe2,
  PieChart,
  Users,
  Building2,
  Lightbulb,
  Crosshair,
  TrendingUp,
  Sliders,
  Check,
  User,
  Calendar,
  MapPin,
  Tag,
  Code,
  FileCode,
  Terminal,
  Database,
  HelpCircle,
  Table,
  ChevronDown
} from 'lucide-react';

export const metadata = {
  title: "Competitor Overlap & Semantic Dominance Framework | AEObility",
  description: "A technical, query-specific diagnostic framework that measures competitor overlap, semantic dominance, and AEO readiness for Perth, Australia and New Zealand businesses.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
  },
};

export default function CompetitorOverlapFrameworkArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "url": "https://aeobility.com.au/",
        "name": "AEObility",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/aeobility"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "Australia"
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Perth, Western Australia"
          },
          {
            "@type": "Country",
            "name": "Australia"
          },
          {
            "@type": "Country",
            "name": "New Zealand"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#author",
        "name": "Vince Baker",
        "url": "https://aeobility.com.au/vince-baker",
        "jobTitle": "Senior Information Architect & AEO Consultant",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
        "name": "Competitor Overlap & Semantic Dominance Framework | AEObility",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#breadcrumb"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/images/knowledge-hub/competitor-overlap-and-semantic-dominance_AEObility.webp"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Thing",
            "name": "Competitor Overlap Analysis"
          },
          {
            "@type": "Thing",
            "name": "Semantic Dominance Scoring"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Cosine similarity"
          },
          {
            "@type": "Thing",
            "name": "Vector proximity"
          },
          {
            "@type": "Thing",
            "name": "Schema.org"
          },
          {
            "@type": "Thing",
            "name": "RAG survival testing"
          },
          {
            "@type": "Thing",
            "name": "Gemini"
          },
          {
            "@type": "Thing",
            "name": "Brave Search"
          }
        ],
        "mainEntity": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#article"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://aeobility.com.au/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://aeobility.com.au/knowledge-hub",
              "name": "Knowledge Hub"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://aeobility.com.au/knowledge-hub/articles",
              "name": "Articles"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework",
              "name": "Competitor Overlap & Semantic Dominance Framework"
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#article",
        "headline": "Competitor Overlap & Semantic Dominance Framework",
        "alternativeHeadline": "How AEObility Diagnoses Query-Specific Semantic Dominance Against Your Competitors",
        "description": "A technical, query-specific diagnostic framework that measures competitor overlap, semantic dominance, and AEO readiness for Perth, Australia and New Zealand businesses.",
        "articleSection": [
          "Diagnostic Principle",
          "Regional Relevance",
          "Technical Methodology",
          "Four Core Questions",
          "Audience Segmentation",
          "Six-Step Audit Process",
          "Module Breakdown",
          "Blind Spot Matrix",
          "Worked Example",
          "Diagnostic Boundaries",
          "Readiness Score Tiers",
          "FAQ"
        ],
        "author": {
          "@id": "https://aeobility.com.au/vince-baker#author"
        },
        "creator": {
          "@id": "https://aeobility.com.au/vince-baker#author"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#webpage"
        },
        "datePublished": "2026-07-30",
        "dateModified": "2026-07-30",
        "inLanguage": "en-AU",
        "about": [
          {
            "@type": "Thing",
            "name": "Answer Engine Optimisation (AEO)"
          },
          {
            "@type": "Thing",
            "name": "Competitor overlap"
          },
          {
            "@type": "Thing",
            "name": "Semantic dominance"
          },
          {
            "@type": "Thing",
            "name": "AEO readiness scoring"
          }
        ],
        "keywords": [
          "Answer Engine Optimisation",
          "AEO consultant Perth",
          "competitor overlap",
          "semantic dominance framework",
          "RAG survival",
          "schema.org auditing",
          "vector proximity",
          "cosine similarity"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Competitor Overlap & Semantic Dominance Framework?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a query-specific diagnostic methodology that measures how strongly your site competes for a given intent by analysing competitor overlap, semantic coverage, technical readiness, and authority signals."
            }
          },
          {
            "@type": "Question",
            "name": "Why does competitor overlap matter for AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Competitor overlap shows which sites consistently appear for the same intent across engines, revealing who answer systems trust and where your site is missing from the dominant cluster."
            }
          },
          {
            "@type": "Question",
            "name": "What goes into the AEO readiness score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The score blends semantic coverage, technical implementation, entity clarity, competitor presence, and authority signals into a single readiness metric for a specific query."
            }
          },
          {
            "@type": "Question",
            "name": "How does AEObility turn this framework into practical actions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AEObility converts diagnostic findings into concrete content, schema, and entity recommendations so your site can move from at-risk or emerging into competitive or dominant tiers for the target query."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#howto",
        "name": "Six-Step Competitor Overlap & Semantic Dominance Audit",
        "description": "A structured six-step process AEObility uses to diagnose query-specific AEO readiness against competitors.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Define the target query and region",
            "text": "Select a single, high-value query and specify the geographic focus, such as Perth, Australia or New Zealand."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Ingest competitor results across engines",
            "text": "Collect top results from multiple engines and answer systems to identify overlapping competitors for the chosen query."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Measure vector proximity and semantic coverage",
            "text": "Use cosine similarity and vector analysis to compare your content’s semantic coverage against the dominant competitor cluster."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Audit technical and schema readiness",
            "text": "Evaluate schema.org implementation, structured data completeness, and technical signals that affect retrieval and answer engines."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Run RAG survival and blind spot checks",
            "text": "Test whether your content survives retrieval thresholds and identify blind spots such as thin content or missing entities."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Calculate readiness score and prioritise actions",
            "text": "Combine semantic, technical, entity, competitor, and authority metrics into a readiness score and derive a prioritised action plan."
          }
        ]
      },
      {
        "@type": "Rating",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework#readiness-tiers",
        "name": "AEO Readiness Score Tiers",
        "bestRating": 100,
        "worstRating": 0,
        "ratingExplanation": "Dominant: 85–100, Competitive: 65–84, Emerging: 45–64, At Risk: 0–44"
      }
    ]
  };

  const processSteps = [
    { step: "01", title: "Define the Target Search Intent", desc: "We pinpoint the exact question or local service query your ideal clients ask AI systems.", icon: <Target className="w-5 h-5 text-aeo-cyan" /> },
    { step: "02", title: "Identify Active Competitors", desc: "We pull the top competitor websites currently showing up for that search in real-time.", icon: <Search className="w-5 h-5 text-aeo-purple" /> },
    { step: "03", title: "Compare Content & Structure", desc: "We evaluate how clearly your pages answer the search intent compared to your rivals.", icon: <BarChart3 className="w-5 h-5 text-aeo-cyan" /> },
    { step: "04", title: "Test AI Retrieval Survival", desc: "We run related prompt variations to check if AI search engines keep your content when generating answers.", icon: <Zap className="w-5 h-5 text-aeo-purple" /> },
    { step: "05", title: "Calculate Your Readiness Score", desc: "We aggregate relevance, structure, and depth into a clear 0–100 rating for your domain.", icon: <Award className="w-5 h-5 text-aeo-cyan" /> },
    { step: "06", title: "Build a Prioritised Action Plan", desc: "We turn your score into step-by-step recommendations on what to fix first.", icon: <ShieldCheck className="w-5 h-5 text-aeo-purple" /> }
  ];

  const standardisedModules = [
    {
      name: "1. Competitor Ingestion Module",
      codeFile: "src/lib/telemetry/search.ts",
      whatItDoes: "Identifies the active competitor websites currently winning organic search attention for your target service terms.",
      howItWorks: "Executes real-time SERP parsing using Brave Search and Gemini API endpoints, filtering out generic directories and aggregators to isolate true commercial domain nodes.",
      inputs: "Target search intent query string (e.g. 'digital marketing specialist Perth').",
      outputs: "Array of verified competitor homepage and service page domain URLs.",
      actionImplications: "Establishes the realistic market benchmark you must outperform to gain citation priority.",
      icon: <Globe2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "2. Vector Proximity Module",
      codeFile: "src/lib/telemetry/proximity.ts",
      whatItDoes: "Measures how closely your content's underlying meaning matches what prospective clients are asking AI search engines.",
      howItWorks: "Converts text content into 768-dimensional vector embeddings using Google text-embedding-004 and calculates normalised Cosine Similarity.",
      inputs: "Search intent string, client page text, and competitor page text chunks.",
      outputs: "Individual similarity scores (0.00 to 1.00) for client and each competitor node.",
      actionImplications: "Reveals whether your content is conceptually relevant or if your messaging drifts away from user intent.",
      icon: <Network className="w-5 h-5 text-aeo-purple" />
    },
    {
      name: "3. Semantic Dominance Module",
      codeFile: "src/lib/telemetry/features.ts",
      whatItDoes: "Determines whether your website commands stronger AI clarity than rival local businesses.",
      howItWorks: "Calculates the scaled vector differential centred at neutral 50 parity: Math.min(100, Math.max(0, Math.round(50 + 250 * (ClientSim - CompAvgSim)))). The 250 multiplier normalises subtle cosine variances in narrow service verticals, where a ±0.20 delta represents a decisive competitive gap.",
      inputs: "Client vector similarity score and competitor vector similarity array.",
      outputs: "Semantic Dominance Score (0 to 100% net differential).",
      actionImplications: "A positive score indicates market advantage; a negative score signals risk of being overlooked in AI summaries.",
      icon: <PieChart className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "4. Feature Extraction Module",
      codeFile: "src/lib/telemetry/features.ts",
      whatItDoes: "Benchmarks your website's structural depth, Schema.org completeness, and trust signals directly against competitors.",
      howItWorks: "Extracts Content Length Ratio (ClientLen / CompAvgLen), Schema.org entity count, internal link depth, and RDF subject-predicate triple graph density.",
      inputs: "Scraped client HTML & DOM tree alongside competitor DOM structures.",
      outputs: "Structured feature matrix (Content Ratio, Schema Completeness %, Technical Advantage, Entity Authority score).",
      actionImplications: "Uncovers technical blind spots giving competitors an unfair advantage in machine indexation.",
      icon: <Sliders className="w-5 h-5 text-aeo-purple" />
    },
    {
      name: "5. RAG Survival Testing Module",
      codeFile: "src/lib/telemetry/rag-sim.ts",
      whatItDoes: "Tests whether AI search engines retain your content when generating conversational answer summaries.",
      howItWorks: "Generates 3+ synthetic query prompt variations (query fan-out) and tests paragraph chunk retrieval retention against a strict 0.62 similarity threshold.",
      inputs: "Target search intent and chunked client content paragraphs.",
      outputs: "RAG survival rate (%), attribution rank, and selected passage chunks.",
      actionImplications: "Shows if your content is written in direct atomic answer blocks or if key service facts get dropped during retrieval.",
      icon: <Zap className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "6. AI Search Readiness Scoring Module",
      codeFile: "src/lib/telemetry/scoring.ts",
      whatItDoes: "Synthesises all diagnostic metrics into a single, actionable 0–100 rating with clear execution priorities.",
      howItWorks: "Combines weighted categories based on observability config (Semantic: 40%, Technical: 20%, Entity: 15%, Competitor: 15%, Authority: 10%).",
      inputs: "Engineered feature matrix, RAG simulation runs, RDF triples, and performance metrics.",
      outputs: "Overall Readiness Score (0–100), Classification Tier (Dominant, Competitive, Emerging, At Risk), and Score Explanations.",
      actionImplications: "Maps directly to a prioritised 90-day AEO Sprint execution plan focused on immediate high-impact fixes.",
      icon: <Award className="w-5 h-5 text-aeo-purple" />
    }
  ];

  const codeModuleMappings = [
    {
      file: "src/lib/telemetry/search.ts",
      role: "Competitor SERP Ingestion",
      summary: "Queries Brave Search and Gemini APIs to harvest top organic competitor domain URLs for the target intent."
    },
    {
      file: "src/lib/telemetry/proximity.ts",
      role: "Vector Embedding & Cosine Similarity",
      summary: "Generates 768-dimensional text-embedding-004 vectors and computes Cosine Similarity between intent and page chunks."
    },
    {
      file: "src/lib/telemetry/features.ts",
      role: "Feature Extraction & Dominance",
      summary: "Calculates Semantic Dominance, Content Length Ratio, Schema Completeness %, and Entity Authority scores."
    },
    {
      file: "src/lib/telemetry/rag-sim.ts",
      role: "Adversarial RAG Simulation",
      summary: "Executes synthetic query fan-out prompt passes and checks passage retention against a 0.62 survival threshold."
    },
    {
      file: "src/lib/telemetry/scoring.ts",
      role: "Weighted Telemetry Aggregation",
      summary: "Applies observability platform weights to output the final 0–100 Readiness Score and diagnostic explanations."
    },
    {
      file: "src/lib/telemetry/config.ts",
      role: "Observability Weight Config",
      summary: "Defines system weights: Semantic (40%), Technical (20%), Entity (15%), Competitor (15%), Authority (10%)."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Dual Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full space-y-16">
        {/* Header / Hero Section */}
        <header className="space-y-6 border-b border-white/5 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Knowledge Hub • Level 3 Technical Guide</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-xs text-aeo-cyan font-mono font-semibold">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Query-Specific Diagnostic Methodology</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Competitor Overlap &amp; <span className="text-gradient-aeo">Semantic Dominance</span> Framework
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl font-light">
            Measuring AI search visibility requires moving past traditional keyword rank tracking. Generative engines do not evaluate entire URLs equally; they retrieve discrete, high-relevance text passages based on semantic vector proximity, entity clarity, and retrieval-augmented generation (RAG) retention. This framework provides an intent-specific diagnostic method to benchmark your website&apos;s structural depth and topical clarity directly against active local competitors, identifying where your content survives synthesis and where it gets dropped.
          </p>

          {/* Core Diagnostic Rule Callout Banner */}
          <div className="p-4 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 leading-relaxed font-light">
              <strong className="text-aeo-cyan font-semibold font-mono uppercase tracking-wider block mb-0.5">Important Diagnostic Principle:</strong>
              AEObility&apos;s framework is an intentional <strong>query-specific diagnostic</strong>, evaluated per target search intent, rather than a generic site-wide SEO score. It assesses real-time search competition, content structure, and machine retrieval survival for specific commercial queries.
            </p>
          </div>

          {/* Article Metadata Bar */}
          <div className="flex flex-wrap gap-3 pt-4 text-xs font-mono border-t border-white/5">
            <Link 
              href="/vince-baker" 
              className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors px-3 py-1.5 rounded-lg text-white/80 hover:text-white"
            >
              <User className="w-3.5 h-3.5 text-aeo-cyan" />
              <span>Author: <strong className="text-white">Vince Baker</strong></span>
            </Link>

            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg text-white/70">
              <Calendar className="w-3.5 h-3.5 text-aeo-purple" />
              <span>Date: <strong className="text-white">30 July 2026</strong></span>
            </span>

            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg text-white/70">
              <Tag className="w-3.5 h-3.5 text-aeo-cyan" />
              <span>Topic: <strong className="text-white">AI Search Visibility &amp; Competitor Analysis</strong></span>
            </span>

            <span className="flex items-center gap-1.5 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg text-white/70">
              <MapPin className="w-3.5 h-3.5 text-aeo-purple" />
              <span>Location: <strong className="text-white">Perth, Australia &amp; New Zealand</strong></span>
            </span>
          </div>

          {/* Article Banner Image */}
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950 my-6 group">
            <Image
              src="/images/knowledge-hub/competitor-overlap-and-semantic-dominance_AEObility.webp"
              alt="AEObility Competitor Overlap and Semantic Dominance Framework diagram illustrating AI search vector proximity, RAG retrieval survival, and Schema.org entity clarity scoring for local service businesses in Perth Australia"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-white/70">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-aeo-cyan">
                AEObility Architecture Diagram: Competitor Overlap &amp; Semantic Dominance
              </span>
            </div>
          </div>
        </header>

        {/* SECTION 1: What AEObility Checks (Two-Layer Intro) */}
        <section className="atomic-answer-block p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-4 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-aeo-cyan" />
            <h2 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider font-mono">
              WHAT AEOBILITY CHECKS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
            AEObility compares your business against the competitors currently showing up for your target search queries. It checks whether your content is clear enough, structured enough, and relevant enough for AI systems (e.g. ChatGPT, Google Gemini, and Perplexity) to understand and recommend your services.
          </p>
          
          <div className="pt-3 border-t border-white/5 text-xs text-white/60 space-y-1 font-mono">
            <span className="text-aeo-purple font-bold block mb-1">Technical Note:</span>
            <p>
              Under the hood, the framework evaluates high-dimensional vector embeddings, Schema.org completeness, content depth ratios, and synthetic query retrieval survival.
            </p>
          </div>
        </section>

        {/* SECTION 2: Four Core Diagnostic Pillars */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Target className="w-6 h-6 text-aeo-cyan" />
            <span>The Four Core Questions We Answer</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed font-light">
            Instead of relying on keyword density or link counts, our framework answers four essential commercial questions:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
            <li className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 1. Visibility Check
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Does your business surface when prospective clients ask AI search engines for local recommendations?
              </p>
            </li>
            <li className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 2. Machine Understanding
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Do AI models accurately parse your core services, locations, and value propositions?
              </p>
            </li>
            <li className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 3. Competitor Benchmarking
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Is your content clearer and better structured than rival websites in your target market?
              </p>
            </li>
            <li className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-aeo-purple flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 4. Prioritised Actions
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                What structural changes, schema additions, or content rewrites should you execute first?
              </p>
            </li>
          </ul>
        </section>

        {/* SECTION 3: Who This Article Is For */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Users className="w-6 h-6 text-aeo-purple" />
            <span>Who This Framework Helps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SMB Perspective */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/20">
                  <Building2 className="w-5 h-5 text-aeo-cyan" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Small Business Owners</h3>
                  <span className="text-xs text-aeo-cyan font-mono">Plain Language &amp; Practical Outcomes</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Higher Visibility:</strong> Get found across AI search engines, voice assistants, and map packs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Stronger Brand Trust:</strong> Ensure AI tools describe your services accurately without hallucinations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Local Discovery:</strong> Optimise coordinate maps and location signals for Australian service areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <span><strong>Clear Priorities:</strong> Focus on straight-forward execution steps with no locked-in agency contracts.</span>
                </li>
              </ul>
            </div>

            {/* Agency Perspective */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-aeo-purple/10 border border-aeo-purple/20">
                  <Sliders className="w-5 h-5 text-aeo-purple" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Agency Teams &amp; Consultants</h3>
                  <span className="text-xs text-aeo-purple font-mono">Repeatable Telemetry &amp; Diagnostics</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-white/70 font-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Competitor Benchmarking:</strong> Measure relative vector distance using text-embedding models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Schema &amp; Entity Auditing:</strong> Validate nested Schema.org microdata and RDF graph density.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>RAG Retention Testing:</strong> Test atomic answer block survival rates under prompt fan-out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-0.5" />
                  <span><strong>Objective Metrics:</strong> Deliver standardised AI readiness scorecards for client reporting.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: The 6-Step Audit Sequence */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Layers className="w-6 h-6 text-aeo-cyan" />
            <span>How to audit query readiness in six repeatable steps</span>
          </h2>
          <p className="text-xs text-white/60 font-light">
            Instead of dumping raw technical data, AEObility follows a clear 6-step audit process:
          </p>

          <div className="space-y-4">
            {processSteps.map((s, idx) => (
              <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-xl flex items-start gap-4 hover:border-white/10 transition-colors">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 flex-shrink-0 mt-0.5">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-aeo-cyan">{s.step}</span>
                    <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Horizontal Step Flow Chart: 6 Cards */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider block font-semibold">Diagnostic Flow Diagram</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Framework Execution Flow Chart</h2>
            </div>
            <span className="text-xs font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start sm:self-auto">
              Horizontal Step Flow (6 Phases)
            </span>
          </div>

          <div className="relative">
            {/* Connector line behind cards on large screens */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-aeo-cyan/30 via-aeo-purple/30 to-aeo-cyan/30 -translate-y-6 -z-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {/* Card 1: Search Intent */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-cyan/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2 py-0.5 rounded bg-aeo-cyan/10 border border-aeo-cyan/20">01</span>
                    <Target className="w-4 h-4 text-aeo-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">Search Intent</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Target commercial query vector &amp; user intent specification.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 1</span>
                  <ArrowRight className="w-3 h-3 text-aeo-cyan/60 lg:hidden" />
                </div>
              </div>

              {/* Card 2: Competitor Set */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-purple/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-purple px-2 py-0.5 rounded bg-aeo-purple/10 border border-aeo-purple/20">02</span>
                    <Search className="w-4 h-4 text-aeo-purple group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-purple transition-colors">Competitor Set</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Real-time organic SERP ingestion &amp; active domain URL extraction.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 2</span>
                  <ArrowRight className="w-3 h-3 text-aeo-purple/60 lg:hidden" />
                </div>
              </div>

              {/* Card 3: Semantic Comparison */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-cyan/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2 py-0.5 rounded bg-aeo-cyan/10 border border-aeo-cyan/20">03</span>
                    <BarChart3 className="w-4 h-4 text-aeo-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">Semantic Comparison</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Cosine similarity vector scoring &amp; net dominance differential.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 3</span>
                  <ArrowRight className="w-3 h-3 text-aeo-cyan/60 lg:hidden" />
                </div>
              </div>

              {/* Card 4: Feature Review */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-purple/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-purple px-2 py-0.5 rounded bg-aeo-purple/10 border border-aeo-purple/20">04</span>
                    <Sliders className="w-4 h-4 text-aeo-purple group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-purple transition-colors">Feature Review</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Schema microdata audit, page depth &amp; RDF graph density.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 4</span>
                  <ArrowRight className="w-3 h-3 text-aeo-purple/60 lg:hidden" />
                </div>
              </div>

              {/* Card 5: Readiness Score */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-cyan/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-cyan px-2 py-0.5 rounded bg-aeo-cyan/10 border border-aeo-cyan/20">05</span>
                    <Award className="w-4 h-4 text-aeo-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">Readiness Score</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Weighted 0–100 AI search readiness classification tier.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 5</span>
                  <ArrowRight className="w-3 h-3 text-aeo-cyan/60 lg:hidden" />
                </div>
              </div>

              {/* Card 6: Recommended Actions */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-purple/50 hover:bg-white/[0.04] transition-all duration-300 group shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-aeo-purple px-2 py-0.5 rounded bg-aeo-purple/10 border border-aeo-purple/20">06</span>
                    <ShieldCheck className="w-4 h-4 text-aeo-purple group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-aeo-purple transition-colors">Recommended Actions</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    Prioritised 90-day AEO Sprint execution roadmap.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>Phase 6</span>
                  <CheckCircle2 className="w-3 h-3 text-aeo-purple" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Standardised Component Deep-Dive Modules */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider block font-semibold">Technical Breakdown</span>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Cpu className="w-6 h-6 text-aeo-cyan" />
              <span>Standardised Component Modules</span>
            </h2>
            <p className="text-xs text-white/60 font-light">
              Each module follows a structured diagnostic schema: What It Does, How It Works, Inputs, Outputs, and Action Implications.
            </p>
          </div>

          {/* Why Cosine Similarity Matters Callout */}
          <div className="p-5 bg-aeo-purple/5 border border-aeo-purple/20 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-aeo-purple" />
              <h3 className="text-xs font-bold text-aeo-purple font-mono uppercase tracking-wider">
                Why cosine similarity prevents content length from distorting topical relevance
              </h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-light">
              Cosine similarity computes the dot product of two normalised 768-dimensional vectors divided by their magnitudes. Because it measures the angle between vectors rather than their spatial distance, it evaluates pure semantic direction, ensuring content length variations do not distort relevance measurement against competitors.
            </p>
          </div>

          <div className="space-y-6">
            {standardisedModules.map((m, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {m.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{m.name}</h3>
                  </div>
                  <span className="text-xs font-mono bg-white/5 text-aeo-cyan border border-white/10 px-3 py-1 rounded-full">
                    {m.codeFile}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                  {/* What It Does */}
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                    <span className="font-bold text-aeo-cyan uppercase tracking-wider text-[10px] block font-mono">1. What It Does (SMB Outcome)</span>
                    <p className="text-white/80 leading-relaxed">{m.whatItDoes}</p>
                  </div>

                  {/* How It Works */}
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                    <span className="font-bold text-aeo-purple uppercase tracking-wider text-[10px] block font-mono">2. How It Works (Technical Method)</span>
                    <p className="text-white/80 leading-relaxed">{m.howItWorks}</p>
                  </div>

                  {/* Inputs */}
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                    <span className="font-bold text-white/60 uppercase tracking-wider text-[10px] block font-mono">3. Inputs</span>
                    <p className="text-white/70 leading-relaxed font-mono">{m.inputs}</p>
                  </div>

                  {/* Outputs */}
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                    <span className="font-bold text-white/60 uppercase tracking-wider text-[10px] block font-mono">4. Outputs</span>
                    <p className="text-white/70 leading-relaxed font-mono">{m.outputs}</p>
                  </div>
                </div>

                {/* Action Implications */}
                <div className="p-4 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-xl flex items-start gap-3 text-xs font-light">
                  <ShieldCheck className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-aeo-cyan uppercase tracking-wider text-[10px] block font-mono">5. Action Implication</span>
                    <p className="text-white/90 leading-relaxed">{m.actionImplications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Module Summary Table */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2">
              <Table className="w-4 h-4 text-aeo-cyan" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Module Summary Matrix
              </h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.01]">
              <table className="w-full text-left text-xs font-light border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-aeo-cyan text-[11px]">
                    <th className="p-3">Module Name</th>
                    <th className="p-3">Code File</th>
                    <th className="p-3">Primary Input</th>
                    <th className="p-3">Key Output</th>
                    <th className="p-3">Action Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  {standardisedModules.map((mod, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold text-white">{mod.name.replace(/^\d+\.\s*/, '')}</td>
                      <td className="p-3 font-mono text-aeo-purple text-[11px]">{mod.codeFile}</td>
                      <td className="p-3 font-mono text-[11px] text-white/60">{mod.inputs.split('(')[0]}</td>
                      <td className="p-3 font-mono text-[11px] text-aeo-cyan">{mod.outputs.split('(')[0]}</td>
                      <td className="p-3 text-white/70">{mod.actionImplications.split('.')[0]}.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 6: Dedicated Code Architecture & File Mapping */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-aeo-purple uppercase tracking-wider block font-semibold">Codebase Traceability</span>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Code className="w-6 h-6 text-aeo-purple" />
              <span>Code Implementation Mapping</span>
            </h2>
            <p className="text-xs text-white/60 font-light">
              For developers and technical auditors, the framework maps directly to AEObility&apos;s open-source telemetry engine modules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codeModuleMappings.map((c, idx) => (
              <div key={idx} className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 hover:border-white/15 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-aeo-cyan font-bold flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5" /> {c.file}
                  </span>
                  <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/50">{c.role}</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">{c.summary}</p>
              </div>
            ))}
          </div>

          {/* Developer Notes Collapsible / Callout Box */}
          <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-aeo-cyan font-bold">
              <Terminal className="w-4 h-4" />
              <span>Developer Notes, Engine Constants &amp; Dominance Scaling</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-white/70">
              <div>• <code>RAG_RETENTION_THRESHOLD</code> = 0.62</div>
              <div>• <code>EMBEDDING_MODEL</code> = text-embedding-004</div>
              <div>• <code>VECTOR_DIMENSION</code> = 768</div>
              <div>• <code>WEIGHTS</code> = Semantic 40%, Technical 20%, Entity 15%, Competitor 15%, Authority 10%</div>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1.5 text-[11px] font-mono text-white/80">
              <span className="text-aeo-purple font-semibold block">Scalar Dominance Formula:</span>
              <p className="text-aeo-cyan font-bold">
                Math.min(100, Math.max(0, Math.round(50 + 250 * (ClientSim - CompAvgSim))))
              </p>
              <p className="text-white/60 font-sans text-xs leading-relaxed font-light">
                This formula sets neutral parity at 50, where a ±0.20 delta in cosine similarity pushes the score to the 0 or 100 boundaries. The 250 multiplier normalises subtle cosine variances in narrow service niches, scaling granular semantic distance into a readable, comparative benchmark.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: Competitor Overlap & Prioritised Blind Spot Detection */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-aeo-purple" />
            <span>Why semantic overlap without structured entities dilutes machine visibility</span>
          </h2>
          <div className="space-y-4 text-sm text-white/80 leading-relaxed font-light">
            <p>
              When evaluating competitor overlap, AEObility distinguishes between <strong>Semantic Overlap</strong> (topic similarity) and <strong>Feature Overlap</strong> (structural capabilities). High semantic overlap without structured microdata causes content dilution, where AI models view your page as a generic duplicate.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Prioritised Blind Spot Action Matrix:</h3>
            
            <div className="grid grid-cols-1 gap-3 text-xs font-light">
              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-red-400 font-mono font-bold text-[10px] uppercase block">Blind Spot 1: Missing Structured Schema</span>
                  <p className="text-white/80">Competitors provide explicit JSON-LD data while your site relies on plain text prose, leaving entity relationships ambiguous to scrapers.</p>
                </div>
                <div className="p-2.5 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg text-aeo-cyan font-mono text-[11px] font-semibold sm:w-64">
                  Action: Deploy nested JSON-LD FAQPage &amp; Service graphs to establish entity clarity alongside direct on-page answers.
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-red-400 font-mono font-bold text-[10px] uppercase block">Blind Spot 2: Unstructured Paragraphs</span>
                  <p className="text-white/80">Long prose paragraphs drop out during RAG retrieval passes.</p>
                </div>
                <div className="p-2.5 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg text-aeo-cyan font-mono text-[11px] font-semibold sm:w-64">
                  Action: Refactor copy into concise, atomic answer blocks.
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-red-400 font-mono font-bold text-[10px] uppercase block">Blind Spot 3: Thin Content Depth</span>
                  <p className="text-white/80">Competitor sites cover intent sub-topics with greater topical detail.</p>
                </div>
                <div className="p-2.5 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg text-aeo-cyan font-mono text-[11px] font-semibold sm:w-64">
                  Action: Expand context chunks targeting latent user questions.
                </div>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-red-400 font-mono font-bold text-[10px] uppercase block">Blind Spot 4: Weak Location Signals</span>
                  <p className="text-white/80">Missing coordinate metadata prevents local map pack discovery.</p>
                </div>
                <div className="p-2.5 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-lg text-aeo-cyan font-mono text-[11px] font-semibold sm:w-64">
                  Action: Embed regional location coordinates &amp; GeoShape tags.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Worked Case Study Walkthrough */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-aeo-cyan" />
            <span>Instructional Worked Example: Perth Local Business</span>
          </h2>

          <div className="p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] font-mono text-aeo-cyan uppercase tracking-wider block">Instructional Diagnostic Walkthrough</span>
                <h3 className="text-base font-bold text-white">Local Service Provider (Perth, WA)</h3>
              </div>
              <span className="text-xs font-mono bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20 px-3 py-1 rounded-full font-bold">
                Target Query: &quot;AEO consultant Perth&quot;
              </span>
            </div>

            {/* Step-by-Step Walkthrough */}
            <div className="space-y-4 text-xs font-light">
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-aeo-cyan font-mono text-[10px] uppercase block">Step 1: SERP Ingestion &amp; Competitor Set</span>
                <p className="text-white/80 leading-relaxed">
                  The audit scraped real-time organic search results for &quot;AEO consultant Perth&quot;, isolating the top 2 competing local domain homepages.
                </p>
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-aeo-purple font-mono text-[10px] uppercase block">Step 2: Similarity &amp; Dominance Results</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-mono font-mono text-[11px] pt-1">
                  <div className="p-2.5 bg-black/60 rounded-lg border border-white/5">
                    <span className="text-white/40 block text-[9px]">Client Similarity</span>
                    <span className="text-white font-bold text-sm">0.785</span>
                  </div>
                  <div className="p-2.5 bg-black/60 rounded-lg border border-white/5">
                    <span className="text-white/40 block text-[9px]">Competitor Avg Similarity</span>
                    <span className="text-white font-bold text-sm">0.692</span>
                  </div>
                  <div className="p-2.5 bg-black/60 rounded-lg border border-white/5">
                    <span className="text-white/40 block text-[9px]">Semantic Advantage</span>
                    <span className="text-aeo-cyan font-bold text-sm">+9.3%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-yellow-400 font-mono text-[10px] uppercase block">Step 3: Blind Spots Identified</span>
                <p className="text-white/80 leading-relaxed">
                  Although the client possessed positive semantic dominance (+9.3%), feature extraction revealed two key blind spots: initial Readiness Score was capped at 62 due to missing structured schema and unformatted prose paragraphs dropping out during synthetic prompt tests. Schema is not a magic visibility switch, but without machine-readable entity context and direct atomic answers, answer engines struggle to disambiguate service offerings.
                </p>
              </div>

              <div className="p-4 bg-aeo-cyan/5 border border-aeo-cyan/20 rounded-xl space-y-1">
                <span className="font-bold text-aeo-cyan font-mono text-[10px] uppercase block">Step 4: Executed Next Actions &amp; Results</span>
                <p className="text-white/90 leading-relaxed">
                  Deployed nested JSON-LD microdata to establish entity clarity and restructured key service sections into concise atomic answer blocks grounded by corroborating on-page prose. Outcome: Readiness Score climbed from 62 to 88, significantly improving atomic passage retrieval and leading to consistent brand citation across target Gemini and ChatGPT local test prompts over the following 30 days.
                </p>
              </div>

              {/* Comparative Before/After Table */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold text-white uppercase block">Before vs. After Optimisation Table</span>
                <div className="overflow-x-auto rounded-lg border border-white/10 bg-black/40">
                  <table className="w-full text-left text-[11px] font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-aeo-cyan">
                        <th className="p-2.5">Metric</th>
                        <th className="p-2.5">Before Audit</th>
                        <th className="p-2.5">After AEO Sprint</th>
                        <th className="p-2.5">Net Delta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/80">
                      <tr>
                        <td className="p-2.5 font-bold text-white">Semantic Similarity</td>
                        <td className="p-2.5 text-white/60">0.785</td>
                        <td className="p-2.5 text-aeo-cyan font-bold">0.862</td>
                        <td className="p-2.5 text-aeo-cyan">+0.077</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Schema Completeness</td>
                        <td className="p-2.5 text-red-400">0%</td>
                        <td className="p-2.5 text-aeo-cyan font-bold">100%</td>
                        <td className="p-2.5 text-aeo-cyan">+100%</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">RAG Chunk Survival Rate</td>
                        <td className="p-2.5 text-yellow-400">45%</td>
                        <td className="p-2.5 text-aeo-cyan font-bold">92%</td>
                        <td className="p-2.5 text-aeo-cyan">+47%</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Overall Readiness Score</td>
                        <td className="p-2.5 text-yellow-400">62 (Emerging)</td>
                        <td className="p-2.5 text-aeo-cyan font-bold">88 (Dominant)</td>
                        <td className="p-2.5 text-aeo-cyan">+26 pts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Diagnostic Limits & Operational Boundaries */}
        <section className="p-6 sm:p-7 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h2 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider">
              Diagnostic Limits &amp; Operational Boundaries
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
            While this framework delivers rigorous telemetry across vector proximity, schema density, and retrieval survival, clear operational boundaries govern what automated diagnostics can and cannot control:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light pt-1">
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1.5">
              <span className="text-yellow-400 font-mono font-bold text-[11px] block uppercase">1. Stochastic Model Behaviour</span>
              <p className="text-white/80 leading-relaxed">
                The tool simulates vector similarity and query fan-out retrieval, but cannot predict proprietary, closed-box model changes or real-time stochastic outputs across LLMs.
              </p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-1.5">
              <span className="text-yellow-400 font-mono font-bold text-[11px] block uppercase">2. Crawl Cycles &amp; External Corroboration</span>
              <p className="text-white/80 leading-relaxed">
                Real-world citations depend on continuous engine-side crawl cycles, external corroboration (citations, local reviews, third-party mentions), and index freshness.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: What the Score Means */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Award className="w-6 h-6 text-aeo-cyan" />
            <span>What Your AI Search Readiness Score Means</span>
          </h2>
          <p className="text-xs text-white/60 font-light">
            Your final telemetry score (0–100) maps directly to four clear visibility tiers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-light">
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-aeo-cyan">
              <span className="font-mono text-aeo-cyan font-bold text-sm block">85–100: Dominant</span>
              <p className="text-white/60 leading-relaxed">
                Consistently cited and recommended across conversational search engines and map assistants.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-aeo-purple">
              <span className="font-mono text-aeo-purple font-bold text-sm block">65–84: Competitive</span>
              <p className="text-white/60 leading-relaxed">
                Strong overall foundation, but minor structural gaps allow top competitors to capture citations.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-yellow-400">
              <span className="font-mono text-yellow-400 font-bold text-sm block">45–64: Emerging</span>
              <p className="text-white/60 leading-relaxed">
                Moderate relevance, but at risk of being missed by AI search due to missing schema or thin content.
              </p>
            </div>
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-xl space-y-2 border-t-2 border-t-red-400">
              <span className="font-mono text-red-400 font-bold text-sm block">0–44: At Risk</span>
              <p className="text-white/60 leading-relaxed">
                AI search models struggle to parse your business, resulting in zero citation share and low discovery.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11: Frequently Asked Questions */}
        <section className="space-y-6 border-t border-white/5 pt-10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-aeo-cyan uppercase tracking-wider block font-semibold">Common Questions</span>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-aeo-cyan" />
              <span>Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-xs">Q1.</span> What is the Competitor Overlap &amp; Semantic Dominance Framework?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                It is a query-specific diagnostic methodology that measures how strongly your site competes for a given intent by analysing competitor overlap, semantic coverage, technical readiness, and authority signals.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-aeo-purple font-mono text-xs">Q2.</span> Why does competitor overlap matter for AEO?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                Competitor overlap shows which sites consistently appear for the same intent across engines, revealing who answer systems trust and where your site is missing from the dominant cluster.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-xs">Q3.</span> What goes into the AEO readiness score?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                The score blends semantic coverage, technical implementation, entity clarity, competitor presence, and authority signals into a single readiness metric for a specific query.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-aeo-purple font-mono text-xs">Q4.</span> How does AEObility turn this framework into practical actions?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pl-6">
                AEObility converts diagnostic findings into concrete content, schema, and entity recommendations so your site can move from at-risk or emerging into competitive or dominant tiers for the target query.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 12: Strategic CTA */}
        <section className="p-8 bg-gradient-to-br from-aeo-purple/10 via-black to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono">
            <span>Ready to measure your query readiness score?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Run Your Free AI Visibility Diagnostic
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Discover how your website performs across conversational search engines, maps, and AI recommendation systems. Get your custom AI Search Readiness Score.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/diagnostic"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Run Diagnostic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions/aeo-blueprint"
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <span>Explore $995 Strategic Blueprint</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
