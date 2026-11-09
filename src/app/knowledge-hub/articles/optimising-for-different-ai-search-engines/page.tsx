import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  FileText,
  AlertTriangle,
  TrendingDown,
  Target,
  Zap,
  Search,
  Cpu,
  Network,
  CheckSquare,
  Sparkles,
  Eye,
  Check,
  Award,
  Wrench,
  UserCheck,
  MapPin,
  XCircle,
  ExternalLink,
  Globe,
  Compass,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: "Optimising Content for AI Search Engines | AEObility",
  description: "A practical guide to the crawlers, indexes, and content signals that shape AI search visibility - and what your business can actually do about them.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
  },
};

export default function OptimisingForDifferentAiSearchEnginesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines",
        "name": "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
        "description": "A practical guide to how Perplexity, ChatGPT Search, Google AI features and Microsoft Copilot retrieve, interpret and cite web content.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Answer engine optimisation"
          },
          {
            "@type": "Thing",
            "name": "Generative engine optimisation"
          },
          {
            "@type": "Thing",
            "name": "Artificial intelligence search"
          },
          {
            "@type": "Thing",
            "name": "Search engine optimisation"
          }
        ],
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#article"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#article",
        "mainEntityOfPage": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#webpage"
        },
        "headline": "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
        "alternativeHeadline": "Optimising for Different AI Search Engines",
        "description": "Learn how Perplexity, ChatGPT Search, Google AI features and Microsoft Copilot retrieve, assess and cite web content, plus practical optimisation steps for Australian businesses.",
        "image": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#primaryimage",
          "url": "https://aeobility.com.au/images/knowledge-hub/optimising-for-different-ai-web-search-engines_AEObility.webp",
          "contentUrl": "https://aeobility.com.au/images/knowledge-hub/optimising-for-different-ai-web-search-engines_AEObility.webp",
          "width": 1200,
          "height": 630,
          "caption": "How Perplexity, ChatGPT, Google, and Copilot find and cite web content"
        },
        "author": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au/"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-08-10T00:00:00+08:00",
        "dateModified": "2026-08-11T00:00:00+08:00",
        "inLanguage": "en-AU",
        "articleSection": [
          "AI Search",
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "Technical SEO",
          "Local SEO"
        ],
        "keywords": [
          "AI search optimisation",
          "answer engine optimisation",
          "AEO",
          "generative engine optimisation",
          "GEO",
          "Perplexity SEO",
          "ChatGPT Search optimisation",
          "Google AI Overviews",
          "Google AI Mode",
          "Microsoft Copilot",
          "AI citations",
          "technical SEO",
          "local SEO Australia"
        ],
        "about": [
          {
            "@type": "Thing",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "Answer Engine Optimisation"
          },
          {
            "@type": "Thing",
            "name": "Perplexity Search"
          },
          {
            "@type": "Thing",
            "name": "ChatGPT Search"
          },
          {
            "@type": "Thing",
            "name": "Google AI Overviews"
          },
          {
            "@type": "Thing",
            "name": "Google AI Mode"
          },
          {
            "@type": "Thing",
            "name": "Microsoft Copilot"
          },
          {
            "@type": "Thing",
            "name": "Information retrieval"
          },
          {
            "@type": "Thing",
            "name": "Structured data"
          }
        ],
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/aeo#service"
        },
        "mentions": [
          {
            "@type": "Organization",
            "name": "Perplexity",
            "url": "https://www.perplexity.ai/"
          },
          {
            "@type": "Organization",
            "name": "OpenAI",
            "url": "https://openai.com/"
          },
          {
            "@type": "Organization",
            "name": "Google",
            "url": "https://www.google.com/"
          },
          {
            "@type": "Organization",
            "name": "Microsoft",
            "url": "https://www.microsoft.com/"
          },
          {
            "@type": "SoftwareApplication",
            "name": "ChatGPT Search"
          },
          {
            "@type": "SoftwareApplication",
            "name": "Microsoft Copilot"
          }
        ],
        "isAccessibleForFree": true,
        "copyrightHolder": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "copyrightYear": 2026,
        "potentialAction": {
          "@type": "ReadAction",
          "target": [
            "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#breadcrumb",
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
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub/"
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
            "name": "How Perplexity, ChatGPT, Google, and Copilot Find and Cite Your Content",
            "item": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/optimising-for-different-ai-search-engines#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI-search retrieval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-search retrieval is the process where an AI answer engine fetches external information to help ground a response. Depending on the platform and query, it may search indexes, select relevant passages, use structured entity data and combine that information with the model's existing knowledge."
            }
          },
          {
            "@type": "Question",
            "name": "Does being indexed guarantee an AI citation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Indexation makes a page eligible to be discovered, but it does not guarantee that an AI answer engine will select, quote or cite it. Source selection depends on the query, passage relevance, available evidence, entity confidence and the platform's own retrieval systems."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need special schema markup for AI search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. There is no universal AI-only schema type that guarantees inclusion in Perplexity, ChatGPT Search, Google AI features or Microsoft Copilot. Use accurate Schema.org markup to describe visible page content and business entities, but do not treat schema as a citation guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Is one optimisation strategy enough for every AI search engine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Perplexity, ChatGPT Search, Google AI features and Microsoft Copilot operate in different product ecosystems with different crawler controls, indexing dependencies and source-selection behaviour. Clear answer-first writing, accessible HTML, evidence-backed claims and consistent entity data are durable foundations, but each platform also needs its own technical checks."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/images/brand/og-image.png"
        },
        "description": "AEObility helps Australian businesses improve visibility across search, maps and AI answer engines.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "url": "https://aeobility.com.au/",
        "name": "AEObility",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "inLanguage": "en-AU"
      }
    ]
  };

  const misconceptions = [
    {
      myth: "Every AI answer comes from live web retrieval.",
      explanation: "Some answers rely mainly on model knowledge; search-enabled retrieval depends on the specific product, mode, user query, and context."
    },
    {
      myth: "Training data and a search index are the same thing.",
      explanation: "Training data influences stored parametric model knowledge, whereas search retrieval provides access to external, live web content."
    },
    {
      myth: "Indexation guarantees an AI citation.",
      explanation: "Indexation is generally a prerequisite eligibility condition, not a placement guarantee or citation assurance."
    },
    {
      myth: "Ranking number one guarantees inclusion.",
      explanation: "Traditional organic ranking supports discovery, but does not guarantee selection or citation in a generated AI answer."
    },
    {
      myth: "Schema guarantees AI visibility.",
      explanation: "Structured data aids machine interpretation when accurate, but cannot force retrieval; Gemini prioritises rendered inline HTML tables over raw unrendered schema."
    },
    {
      myth: "A citation proves the answer is correct.",
      explanation: "Generated answers can still contain hallucinations or inaccuracies even when citing legitimate supporting sources."
    },
    {
      myth: "All answer engines use one algorithm.",
      explanation: "Each platform (Perplexity, OpenAI, Google, Microsoft) operates distinct crawler controls, indexes, context windows, and retrieval mechanics."
    },
    {
      myth: "ChatGPT, ChatGPT Search, and GPTBot are the same system.",
      explanation: "OpenAI explicitly distinguishes OAI-SearchBot (live search), GPTBot (training crawler), and ChatGPT-User (live user prompt fetch)."
    },
    {
      myth: "Google requires special AI-only schema.",
      explanation: "Google officially confirms AI Overviews (single-turn summaries) and AI Mode (conversational search) use standard Search Essentials eligibility requirements."
    },
    {
      myth: "IndexNow guarantees instant Copilot visibility.",
      explanation: "IndexNow accelerates change discovery, but Microsoft explicitly confirms it is not a ranking factor and guarantees neither indexation nor Copilot citation."
    },
    {
      myth: "Longer pages are more likely to be cited.",
      explanation: "Relevance, self-contained passage-level clarity (45-75 word chunks), inverted pyramid structure, and machine accessibility matter far more than total length."
    },
    {
      myth: "A citation automatically produces traffic or conversions.",
      explanation: "Visibility, citation placement, user click-through, trust, and conversion are separate stages in the user journey."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Motifs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aeo-cyan/5 rounded-full filter blur-[140px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-aeo-purple/5 rounded-full filter blur-[160px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-12">

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Multi-Engine Retrieval Strategy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white font-soehne-breit">
            How Perplexity, ChatGPT, Google, and Copilot <br />
            <span className="text-gradient-aeo">Find and Cite Your Content</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed font-serif max-w-3xl">
            A practical guide to the crawlers, indexes, and content signals that shape AI search visibility - and what your business can actually do about them.
          </p>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-xs text-white/60 border-t border-white/5 font-serif">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 flex items-center justify-center text-aeo-cyan font-bold text-[9px]">
                AU
              </div>
              <span className="font-semibold text-white/90">Published by AEObility</span>
            </div>
            <span className="text-white/30">•</span>
            <div>Location: Perth, Western Australia</div>
            <span className="text-white/30">•</span>
            <div>Updated Aug 2026</div>
            <span className="text-white/30">•</span>
            <div>8 min read</div>
            <span className="text-white/30">•</span>
            <div>Author: Vince Baker</div>
            <span className="text-white/30">•</span>
            <div>Topic: Multi Engine AEO &amp; Retrieval</div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl mt-8">
            <Image
              src="/images/knowledge-hub/optimising-for-different-ai-web-search-engines_AEObility.webp"
              alt="Abstract high‑velocity gradient artwork depicting multi‑engine retrieval convergence"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        </header>

        {/* Section 1: The Opening Answer & Reality Checks */}
        <section id="executive-summary" className="scroll-mt-24 space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-2xl space-y-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-aeo-cyan">
              <Sparkles className="w-6 h-6" />
              <h2 className="text-xl font-bold tracking-tight text-white uppercase font-soehne-breit">The Opening Answer</h2>
            </div>
            
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed font-serif">
              AI search is not just Google&apos;s old results page with a chatbot bolted on top. When someone asks Perplexity, ChatGPT, Google, or Copilot a question, the platform combines what its model already learned during training with live web searches, entity graph data, and real-time prompt context.
            </p>

            <blockquote className="p-6 rounded-2xl bg-black/50 border-l-4 border-aeo-cyan text-white/90 font-medium italic text-sm sm:text-base leading-relaxed">
              &quot;There is no single &apos;AI ranking algorithm&apos; to crack. Each answer engine finds, weighs, and cites sources differently depending on its architecture and user-agent rules. Your safest cross-platform play is simple: publish clear, well-structured content, back your claims with solid evidence, and keep your business details consistent across every directory and profile that matters.&quot;
            </blockquote>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Reality Checks Before You Optimise:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/70 font-serif">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>Live search isn&apos;t behind every AI answer.</strong> Models rely heavily on pre-trained parametric memory before deciding to query the live web.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>Training data and a search index are separate systems.</strong> Blocking a training bot like <code className="text-aeo-cyan font-mono text-[11px]">GPTBot</code> doesn&apos;t stop <code className="text-aeo-cyan font-mono text-[11px]">OAI-SearchBot</code> from finding you for live answers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>Being indexed gets you in the door - it doesn&apos;t guarantee a citation.</strong> Indexation makes your page eligible; relevance and clarity win the spot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>Ranking #1 in organic search doesn&apos;t automatically earn an AI citation.</strong> Generative engines pick passages that answer specific intent, not just domain authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>Schema helps machines understand your page, but it can&apos;t force a citation.</strong> Structured data gives context; it doesn&apos;t buy placement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0 mt-0.5" />
                  <span><strong>A linked citation doesn&apos;t make every generated claim true.</strong> Hallucinations happen even when an engine links to a legitimate source.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: How Answer Engines Look Up Information */}
        <section id="retrieval-mechanics" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-purple uppercase tracking-widest">
              <Network className="w-4 h-4" />
              <span>Retrieval Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              How Answer Engines Look Up Information
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Before chasing citations, it helps to know where an answer engine gets its information. In practice, it draws from two main layers:
            </p>
          </div>

          {/* Parametric vs Grounded Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-sm uppercase">
                <Cpu className="w-4 h-4" />
                <span>1. Parametric Knowledge (What the model learned)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light font-serif leading-relaxed">
                Facts baked directly into the model during initial training. It&apos;s instant, but static - and it doesn&apos;t require a live visit to your site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-aeo-purple font-bold text-sm uppercase">
                <Globe className="w-4 h-4" />
                <span>2. Grounded Knowledge (What the model looks up)</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light font-serif leading-relaxed">
                Fresh information pulled from live search indexes, crawlers, or connected databases during a prompt. This is the layer where your accessible web content comes into play.
              </p>
            </div>
          </div>

          {/* 6-Step Pipeline Explanation */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-white font-soehne-breit">A Practical View of How AI Search Builds an Answer</h3>
            <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
              While production architectures vary between commercial providers, most search-augmented AI systems follow a multi-stage Information Retrieval (IR) pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 01</div>
                <div className="text-sm font-bold text-white">Work out user intent</div>
                <p className="text-xs text-white/60 font-light">The engine interprets intent, expands acronyms, and identifies core entities.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 02</div>
                <div className="text-sm font-bold text-white">Query Fan-Out</div>
                <p className="text-xs text-white/60 font-light">A single prompt often triggers multiple parallel queries targeting sub-topics.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-cyan font-bold">STAGE 03</div>
                <div className="text-sm font-bold text-white">Find useful passages</div>
                <p className="text-xs text-white/60 font-light">The engine searches for relevant section chunks rather than judging whole pages in isolation.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 04</div>
                <div className="text-sm font-bold text-white">Sort strongest evidence</div>
                <p className="text-xs text-white/60 font-light">
                  Candidate passages are reranked for relevance, which is where <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan underline hover:text-white transition-colors">positional bias in retrieval</Link> can impact which chunks get extracted.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 05</div>
                <div className="text-sm font-bold text-white">Build the response</div>
                <p className="text-xs text-white/60 font-light">The LLM synthesises the top-ranked context into a readable answer.</p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-aeo-purple font-bold">STAGE 06</div>
                <div className="text-sm font-bold text-white">Attach sources</div>
                <p className="text-xs text-white/60 font-light">Generated claims are mapped back to URLs where supporting data was drawn.</p>
              </div>
            </div>
          </div>

          {/* Interactive Retrieval Pipeline Visualisation Box */}
          <div className="p-6 rounded-2xl bg-black/60 border border-aeo-cyan/20 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-2">
                <Network className="w-4 h-4" />
                Conceptual AI Retrieval &amp; Query Fan-Out Pipeline
              </h4>
              <span className="text-[10px] text-white/40 font-mono">Architecture Schema</span>
            </div>

            {/* Structured Visual Flow Diagram */}
            <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/5">
                1. User Prompt
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/4">
                2. Subtopic &amp; Entity Fan-Out
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium w-full md:w-1/4">
                3. Candidate Passages &amp; Reranking
              </div>
              <ArrowRight className="w-4 h-4 text-aeo-cyan shrink-0 rotate-90 md:rotate-0" />
              <div className="p-3 rounded-lg bg-white/5 border border-aeo-cyan/40 text-xs text-aeo-cyan font-bold w-full md:w-1/5 shadow-[0_0_15px_rgba(0,205,216,0.2)]">
                4. Generated Answer &amp; Citations
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
              <strong>Caveat:</strong> These are standard Information Retrieval (IR) concepts, not a confirmed blueprint of any specific provider&apos;s proprietary production stack. AI engines do not publicly disclose full ranking weights or internal reranking threshold scores.
            </div>
          </div>

          {/* Key Information Retrieval Terminology */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-white font-soehne-breit">Core Technical IR Concepts Explained</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Sparse / Lexical Retrieval:</span>
                <p className="text-white/60 font-serif">Keyword-matching algorithms (e.g. BM25) that match exact tokens between query and document text.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Dense / Semantic Retrieval:</span>
                <p className="text-white/60 font-serif">Vector-embedding search that measures conceptual similarity using high-dimensional mathematical distance (e.g. cosine distance).</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Hybrid Retrieval:</span>
                <p className="text-white/60 font-serif">Combining lexical keyword precision with dense semantic vector retrieval to maximise recall and precision.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <span className="font-bold text-white">Query Fan-Out:</span>
                <p className="text-white/60 font-serif">Deconstructing a single complex prompt into multiple parallel search queries targeting sub-topics and entity facts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Common Misconceptions Matrix */}
        <section id="misconceptions" className="scroll-mt-24 space-y-6 border-t border-white/5 pt-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <AlertTriangle className="w-4 h-4" />
              <span>Fact vs Fiction</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Common Misconceptions About AI Retrieval
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Separating persistent industry myths from verifiable retrieval mechanics is essential for allocating digital marketing resources effectively.
            </p>
          </div>

          {/* Misconceptions Table */}
          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-white/10">
              <thead className="bg-white/5 text-white uppercase text-[11px] tracking-wider font-bold">
                <tr>
                  <th className="p-4 sm:p-5 w-2/5 text-amber-400">Common Misconception</th>
                  <th className="p-4 sm:p-5 text-aeo-cyan">Corrective Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {misconceptions.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white/90 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{item.myth}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-white/70 font-serif leading-relaxed">
                      {item.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mid-Page Visual Graphic (1:1 Infographic) */}
        <div className="relative w-full max-w-[760px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl my-8">
          <Image
            src="/images/knowledge-hub/optimising-ai-search-engines_AEObility.webp"
            alt="Diagram showing multi-engine query processing and answer synthesis"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain block"
            sizes="(max-width: 1024px) 100vw, 760px"
          />
        </div>

        {/* Section 4: Detailed Platform Breakdown */}
        <section id="platform-breakdown" className="scroll-mt-24 space-y-12 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Platform Deep Dives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Platform Breakdown: Controls, Patterns &amp; Recommendations
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Each AI answer engine operates within distinct crawler environments, index permissions, and user experience paradigms - and optimising for multi-turn conversational queries requires an integrated <Link href="/services/ai-search-marketing" className="text-aeo-cyan underline hover:text-white transition-colors">AI search marketing</Link> strategy rather than isolated page tweaks.
            </p>
          </div>

          {/* Platform 1: Perplexity Search */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 font-bold">
                  PX
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Perplexity Search</h3>
                  <p className="text-xs text-white/50">Direct Answer &amp; Citation Engine</p>
                </div>
              </div>
              <a 
                href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white transition-colors"
              >
                <span>Perplexity Crawler Docs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Documents <code className="text-teal-200">PerplexityBot</code> (indexing crawler) and <code className="text-teal-200">Perplexity-User</code> (live prompt agent).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>While <code className="text-teal-200">PerplexityBot</code> respects <code className="text-teal-200">robots.txt</code>, user-triggered fetches via <code className="text-teal-200">Perplexity-User</code> may operate under different fetch rules.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>Crawler access is an eligibility prerequisite, not a placement or citation guarantee.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Direct answer-first introductory paragraphs are extracted cleanly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Explicitly attributed evidence, empirical data, and rendered HTML <code className="text-amber-200 font-mono">&lt;table&gt;</code> elements support extraction.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Clean structural markup helps locate specific factual data points.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Lead page sections with direct, standalone answers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Attribute statistics, claims, and expert quotes explicitly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Keep important content in accessible HTML text rather than client-only scripts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 2: ChatGPT Search */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold">
                  GPT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">ChatGPT Search</h3>
                  <p className="text-xs text-white/50">OpenAI Search &amp; Grounding Architecture</p>
                </div>
              </div>
              <a 
                href="https://developers.openai.com/api/docs/bots" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white transition-colors"
              >
                <span>OpenAI Bot Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><code className="text-emerald-200">OAI-SearchBot</code> controls live ChatGPT Search inclusion.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><code className="text-emerald-200">GPTBot</code> manages offline model pre-training access.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><code className="text-emerald-200">ChatGPT-User</code> executes real-time user-initiated prompt fetches.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Descriptive H2/H3 headings improve passage extractability.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Q&amp;A phrasing reflecting genuine user intent aids context matching.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Heavy JS hydration creates parsing risks for lightweight scrapers.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Ensure core content renders natively in server-rendered HTML.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Use meaningful heading structures (<code className="text-aeo-cyan">&lt;article&gt;</code>, <code className="text-aeo-cyan">&lt;section&gt;</code>).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Do not rely on FAQPage schema as a guaranteed shortcut.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 3: Google AI Overviews & AI Mode */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Google AI Overviews &amp; AI Mode</h3>
                  <p className="text-xs text-white/50">Google Search Generative Features</p>
                </div>
              </div>
              <a 
                href="https://developers.google.com/search/docs/appearance/ai-features" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors"
              >
                <span>Google AI Search Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Spans <strong>AI Overviews</strong> (single-turn SERP summaries) and <strong>AI Mode</strong> (conversational search).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Both rely on standard Google Search indexation; AI Mode executes deeper multi-turn query fan-out.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Google explicitly confirms there are <strong>no additional AI-specific technical requirements</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Gemini prioritises self-contained passage chunks (45-75 words) following an inverted pyramid format.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Rendered inline HTML <code className="text-amber-200 font-mono">&lt;table&gt;</code> elements and lists are extracted at higher rates than raw schema alone.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Knowledge Graph entity accuracy and local intent signals support machine interpretation.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Structure content using an inverted pyramid format (Direct Answer &rarr; Data &rarr; Context).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Ensure rendered HTML tables accompany structured data implementations.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Track performance using Google Search Console Search Appearance AI Overviews filters.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform 4: Microsoft Copilot & Bing Experiences */}
          <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold">
                  MS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-soehne-breit">Microsoft Copilot &amp; Bing Experiences</h3>
                  <p className="text-xs text-white/50">Consumer Web &amp; Enterprise Agent Ecosystem</p>
                </div>
              </div>
              <a 
                href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/generative-ai-public-websites" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition-colors"
              >
                <span>Microsoft Copilot Guidance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider">1. Documented Controls</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Copilot retrieves web content via Bing Search APIs (relying on Bingbot for prior indexation); Copilot does not crawl directly.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>Product tiers span Consumer Web, Edge/Windows, M365 Graph, and Copilot Studio with distinct knowledge sources.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>IndexNow accelerates discovery, but Microsoft explicitly confirms it is <strong>not a ranking factor</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">2. Observed Patterns</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Bing Webmaster Tools indexation correlates with consumer Copilot answers.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Bing Places listings and Merchant feeds support location/product signals, though direct Copilot influence varies by prompt context.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Retrieval behaviour varies significantly by Copilot product tier and enterprise policy.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">3. Editorial Recommendations</h4>
                <ul className="text-xs text-white/70 space-y-2 font-serif">
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Configure Bing Webmaster Tools &amp; IndexNow protocol for rapid change notifications.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Maintain accurate Bing Places listings and product feed feeds.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-aeo-cyan font-bold">•</span>
                    <span>Define the specific Copilot product tier (Consumer vs M365) when auditing visibility.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Cross-Engine Comparison Matrix */}
        <section id="comparison-matrix" className="scroll-mt-24 space-y-6 border-t border-white/5 pt-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <BarChart3 className="w-4 h-4" />
              <span>Engine Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Cross-Engine Technical Comparison
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Side-by-side comparison of the core access controls, documented rules, misconceptions, and practical focuses across major conversational platforms.
            </p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01] shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-white/10">
              <thead className="bg-white/5 text-white uppercase text-[11px] tracking-wider font-bold">
                <tr>
                  <th className="p-4 text-white">Dimension</th>
                  <th className="p-4 text-teal-300">Perplexity Search</th>
                  <th className="p-4 text-emerald-300">ChatGPT Search</th>
                  <th className="p-4 text-blue-300">Google AI Features</th>
                  <th className="p-4 text-purple-300">Microsoft Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-serif text-white/80">
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Relevant Access Control</td>
                  <td className="p-4"><code className="text-teal-300 font-mono text-[11px]">PerplexityBot</code> &amp; <code className="text-teal-300 font-mono text-[11px]">Perplexity-User</code></td>
                  <td className="p-4"><code className="text-emerald-300 font-mono text-[11px]">OAI-SearchBot</code>, <code className="text-emerald-300 font-mono text-[11px]">GPTBot</code>, <code className="text-emerald-300 font-mono text-[11px]">ChatGPT-User</code></td>
                  <td className="p-4">Google Search indexability &amp; snippet eligibility (AIO &amp; AI Mode)</td>
                  <td className="p-4">Bing Search APIs &amp; product tier configuration</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Documented Basis</td>
                  <td className="p-4">Perplexity bot documentation</td>
                  <td className="p-4">OpenAI user-agent documentation</td>
                  <td className="p-4">Standard Google Search Essentials</td>
                  <td className="p-4">Bing Search &amp; Copilot documentation</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Main Misconception</td>
                  <td className="p-4">Perplexity-User always respects robots.txt</td>
                  <td className="p-4">GPTBot controls live Search inclusion</td>
                  <td className="p-4">Special AI schema is required</td>
                  <td className="p-4">IndexNow is a ranking factor</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Practical Editorial Focus</td>
                  <td className="p-4">Direct answers &amp; rendered HTML tables</td>
                  <td className="p-4">Accessible HTML (<code className="text-emerald-300 font-mono text-[11px]">&lt;article&gt;</code>) &amp; Q&amp;A structure</td>
                  <td className="p-4">Inverted pyramid 45-75w chunks &amp; rendered tables</td>
                  <td className="p-4">Bing indexation, Places data &amp; IndexNow signals</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white font-sans">Main Limitation</td>
                  <td className="p-4">Ranking logic is not publicly specified</td>
                  <td className="p-4">Crawler access does not guarantee prominence</td>
                  <td className="p-4">Feature appearance is query-dependent</td>
                  <td className="p-4">Behaviour varies by Copilot product tier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: The Unified Optimisation Framework */}
        <section id="unified-framework" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-purple uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              The Unified Optimisation Framework (6 Actionable Principles)
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Rather than attempting to hack platform-specific algorithms, businesses achieve durable multi-engine visibility by following six core engineering principles - and if you want to implement these six steps systematically across a 90-day roadmap, follow the <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan underline hover:text-white transition-colors font-semibold">Strategic Blueprint</Link>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="text-base font-bold text-white">Lead with the Answer</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Don&apos;t make readers - or answer engines - wade through a 300-word warm-up. Answer the question early, then add the proof, nuance, and examples.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h3 className="text-base font-bold text-white">Make Each Section Stand on Its Own</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Give every H2 and H3 enough context to make sense when lifted out of the page. A strong passage shouldn&apos;t lose the plot without the paragraphs above it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h3 className="text-base font-bold text-white">Bring the Receipts</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Support important claims with primary sources, named experts, clear methodology, and real data. Vague claims are easy to write and hard to trust.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  04
                </div>
                <h3 className="text-base font-bold text-white">Keep Your Entity Details Consistent</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Your business name, address, phone number, services, and core facts should match across your website, Google Business Profile, Bing Places, and local directories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  05
                </div>
                <h3 className="text-base font-bold text-white">Keep Core Content Easy to Read</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                Serve critical copy in clean HTML. If key information relies on heavy client-side JavaScript, lightweight crawlers might miss it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan flex items-center justify-center font-bold text-xs">
                  06
                </div>
                <h3 className="text-base font-bold text-white">Get Local Signals Right</h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed">
                For Australian local businesses, we restructured local service pages using <Link href="/services/geo-marketing" className="text-aeo-cyan underline hover:text-white transition-colors">GEO marketing services</Link> principles to ensure business data is verified across map packs and generative nodes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Measurement Framework */}
        <section id="measurement-framework" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Measurement: Track What Happens After Visibility
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              &quot;AI visibility&quot; isn&apos;t a single vanity metric. A brand can appear in an answer, be cited in an unhelpful context, receive zero clicks, or drive high-intent enquiries. Track those stages separately:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">1. Crawl &amp; Index Coverage</div>
              <p className="text-xs text-white/60 font-serif">Are key agents (<code className="text-white/80">OAI-SearchBot</code>, <code className="text-white/80">ChatGPT-User</code>, <code className="text-white/80">PerplexityBot</code>, <code className="text-white/80">Bingbot</code>) accessing your pages, and are those pages indexed?</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">2. Entity Accuracy</div>
              <p className="text-xs text-white/60 font-serif">Do your business details, products, and services match uniformly across Knowledge Graph nodes, Bing Places, and directory profiles?</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">3. Answer Presence</div>
              <p className="text-xs text-white/60 font-serif">Does your brand appear for high-intent prompt queries in your target industry?</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">4. Citation Quality</div>
              <p className="text-xs text-white/60 font-serif">Is the cited URL accurate, contextually relevant, and positioned as a recommended source?</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">5. Citation-to-Click</div>
              <p className="text-xs text-white/60 font-serif">How much referral traffic is actually flowing from AI engine referral tags to your site?</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-xs font-bold text-aeo-cyan">6. Enquiries &amp; Revenue</div>
              <p className="text-xs text-white/60 font-serif">Are those visits turning into real calls, form fills, quote requests, or sales?</p>
            </div>
          </div>

          {/* Related Articles & Internal Links */}
          <div className="pt-6 border-t border-white/5 space-y-4">
            <h3 className="text-base font-bold text-white font-soehne-breit">Explore Related AEO &amp; GEO Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link 
                href="/services/ai-search-marketing"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-cyan font-bold flex items-center justify-between">
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">AI Search Marketing</div>
                <p className="text-xs text-white/50 font-serif">Discover our full AEO sprint services.</p>
              </Link>

              <Link 
                href="/knowledge-hub/articles/positional-bias-in-retrieval"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-purple font-bold flex items-center justify-between">
                  <span>Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">Positional Bias in Retrieval</div>
                <p className="text-xs text-white/50 font-serif">Understanding lost-in-the-middle context bottlenecks.</p>
              </Link>

              <Link 
                href="/services/geo-marketing"
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/40 transition-all space-y-2 group block"
              >
                <div className="text-xs text-aeo-cyan font-bold flex items-center justify-between">
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-aeo-cyan transition-colors">GEO Marketing</div>
                <p className="text-xs text-white/50 font-serif">Generative Engine Optimisation for Aussie brands.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Technical FAQs Section */}
        <section id="faq" className="scroll-mt-24 space-y-8 border-t border-white/5 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Core Technical FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
              Frequently Asked Questions: AI Search Retrieval
            </h2>
            <p className="text-white/70 text-base font-light font-serif leading-relaxed">
              Clear, technical answers to common questions about multi-engine retrieval, indexation, schema markup, and cross-platform optimisation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>What is AI-search retrieval?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                AI-search retrieval is the real-time process by which an AI engine fetches external web content to ground its generated responses. When a user submits a prompt, search-enabled AI interfaces execute one or more targeted search queries, fetch relevant web pages or passages, rerank those chunks for passage-level relevance, and synthesise a cited answer.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                Depending on the platform and query context, the final generated response may combine static model parameters (parametric knowledge) with dynamic web retrieval, structured Knowledge Graph nodes, and product-specific datasets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Does being indexed guarantee an AI citation?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. Indexation is a basic eligibility prerequisite, not a guarantee of selection or citation.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                For example, Google explicitly states that web pages displayed as supporting links in AI Overviews and AI Mode must be indexed in Google Search, eligible for standard search snippets, and compliant with standard Google Search Essentials. Meeting these base indexability requirements makes a page eligible for retrieval, but the AI engine selects and cites passages based on real-time query intent, passage relevance, and entity authority.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Do I need special schema markup for AI search?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. There is no special or separate &quot;AI-only&quot; schema markup required for inclusion in Perplexity, ChatGPT Search, Google AI features, or Microsoft Copilot.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                While implementing standard Schema.org structured data (such as Organisation, Article, or LocalBusiness) helps search engines parse entity attributes and relationships, schema markup cannot force an AI engine to retrieve, rank, or cite a page. Structured data should be used solely to accurately describe visible, rendered page content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/10 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>Is one optimisation strategy enough for every AI search engine?</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7">
                No. There is no single, unified AI retrieval algorithm across platforms.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-1">
                Perplexity Search, ChatGPT Search, Google AI Overviews, and Microsoft Copilot each operate within distinct ecosystems with different user-agent controls, indexing requirements, and source-selection behaviours:
              </p>
              <ul className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-12 space-y-2 pt-1 list-disc">
                <li>
                  <strong className="text-white">Perplexity Search:</strong> Relies on PerplexityBot and real-time Perplexity-User agents, favouring concise, answer-first passage structures and explicit tabular evidence.
                </li>
                <li>
                  <strong className="text-white">ChatGPT Search:</strong> Utilises OAI-SearchBot for real-time retrieval, prioritising clean semantic HTML (<code className="text-aeo-cyan">&lt;article&gt;</code>, <code className="text-aeo-cyan">&lt;section&gt;</code>) and straightforward Q&amp;A components.
                </li>
                <li>
                  <strong className="text-white">Google AI Overviews &amp; AI Mode:</strong> Rely directly on the standard Google Search index and Knowledge Graph entity clarity, requiring compliance with standard Search Essentials.
                </li>
                <li>
                  <strong className="text-white">Microsoft Copilot:</strong> Integrates Bing search indexation, local schema feeds, and real-time protocol updates via IndexNow.
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-white/70 font-serif leading-relaxed pl-7 pt-2">
                While foundational practices: such as fast server response times, clean HTML structures, clear writing, and consistent business details: support cross-engine visibility, each platform requires targeted technical alignment.
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed pl-7 pt-2">
                Determining how multi-engine search crawlers pull chunks into active context windows requires moving past flat keyword sets. To deploy a footprint engineered for deep LLM retrieval, platforms rely on targeted <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services</Link> to structure business facts and protect citation continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pt-8 border-t border-white/10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Found. Get Chosen.</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-soehne-breit">
              Want to Know How Answer Engines See Your Business?
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-serif">
              To see how ChatGPT, Gemini, and Claude currently cite your brand, request a <Link href="/diagnostic" className="text-aeo-cyan underline hover:text-white transition-colors font-semibold">free AI Visibility Telemetry Audit</Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/diagnostic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,205,216,0.25)]"
            >
              Get Your Free Visibility Audit
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/solutions/aeo-blueprint"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-base transition-all"
            >
              Explore 90-Day AI Success Blueprint
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
