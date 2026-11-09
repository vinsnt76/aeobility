import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import RelatedArticles from '@/components/navigation/RelatedArticles';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Database, 
  Cpu, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Network, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck,
  FileText,
  Bot,
  GitMerge,
  Compass,
  Tag,
  MapPin,
  Target,
  Clock,
  TrendingUp,
  Check
} from 'lucide-react';

export const metadata = {
  title: "AI SEO & RAG Search Optimisation Australia | AEObility",
  description: "Master AI SEO and Retrieval-Augmented Generation (RAG) across AI Australia search engines. Learn how vector retrieval and passage chunking drive brand citations.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
  },
};

export default function RagArticlePage() {
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
        "@type": "Person",
        "@id": "https://aeobility.com.au/vince-baker#author",
        "name": "Vinnie Baker",
        "url": "https://aeobility.com.au/vince-baker",
        "jobTitle": "Founder & AI Search Consultant",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#webpage",
        "url": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
        "name": "AI Search Optimisation: RAG, Answer Engines & Machine-Readable Content",
        "description": "Master AI Search Optimisation with Retrieval-Augmented Generation (RAG). Learn how vector retrieval, passage chunking, and semantic schemas power brand visibility across ChatGPT, Gemini, and Perplexity.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#breadcrumb"
        }
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#webpage"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
        },
        "headline": "RAG, Answer Engines & Why Machine-Readable Content Matters",
        "description": "A technical guide explaining Retrieval-Augmented Generation (RAG) and its role in AI search optimisation. Learn how structured content, chunking, and entity clarity improve visibility and retrieval accuracy across answer engines.",
        "author": {
          "@id": "https://aeobility.com.au/vince-baker#author"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-07-23",
        "dateModified": "2026-08-31",
        "inLanguage": "en-AU",
        "wordCount": "3200",
        "keywords": [
          "AI search optimisation",
          "Retrieval-Augmented Generation",
          "RAG",
          "Answer Engine Optimisation",
          "AEO",
          "structured content",
          "chunking",
          "entity optimisation",
          "visibility audit",
          "AEObility"
        ],
        "image": {
          "@type": "ImageObject",
          "url": "https://aeobility.com.au/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp",
          "width": 1200,
          "height": 630
        },
        "articleSection": [
          "RAG Pipeline",
          "Grounding & Preventing Vector Drift",
          "Passage Retrieval & Semantic Chunking",
          "Positional Bias Mitigation",
          "AI Search Optimisation",
          "RAG Misconceptions",
          "Pre-Chunking vs Post-Chunking",
          "FAQ: RAG & Answer Engine Search"
        ],
        "about": [
          {
            "@type": "Service",
            "@id": "https://aeobility.com.au/services/aeo#service",
            "name": "AEO Services",
            "url": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "Thing",
            "name": "Retrieval-Augmented Generation",
            "description": "A technical architecture enabling AI models to retrieve and cite live external content for accurate, grounded answers.",
            "sameAs": "https://www.wikidata.org/wiki/Q124316499"
          },
          {
            "@type": "Thing",
            "name": "Large Language Model",
            "sameAs": "https://www.wikidata.org/wiki/Q115305900"
          },
          {
            "@type": "Thing",
            "name": "AI Search Optimisation",
            "description": "Optimising content for AI-driven answer engines using structured data, semantic clarity, and passage-level retrieval."
          }
        ],
        "mentions": [
          {
            "@type": "WebApplication",
            "@id": "https://aeobility.com.au/diagnostic#webapp",
            "name": "AI Visibility Diagnostic Engine",
            "url": "https://aeobility.com.au/diagnostic"
          },
          {
            "@type": "Thing",
            "name": "AI Visibility",
            "identifier": "proximity_weight_0.87"
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
          },
          {
            "@type": "Thing",
            "name": "Vector Space Model",
            "sameAs": "https://www.wikidata.org/wiki/Q792224"
          }
        ],
        "citation": [
          "https://aeobility.com.au/knowledge-hub/articles/aeo-vs-seo",
          "https://aeobility.com.au/knowledge-hub/semantic-seo"
        ],
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/aeo#service"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": [
            "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#breadcrumb",
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
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Articles & Guides",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Retrieval-Augmented Generation",
            "item": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
          }
        ]
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#glossary",
        "name": "AI Search Optimisation Glossary",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "name": "AI Search Optimisation",
            "description": "The strategic process of structuring content, schema, and entity relationships to ensure high-frequency passage retrieval and accurate citation in generative answer engines."
          },
          {
            "@type": "DefinedTerm",
            "name": "Retrieval-Augmented Generation (RAG)",
            "description": "An AI framework that combines external passage retrieval with large language models to deliver grounded, evidence-backed answers."
          },
          {
            "@type": "DefinedTerm",
            "name": "Atomic Passage Chunks",
            "description": "Self-contained text blocks (typically 90-120 tokens) optimised for direct vector retrieval and synthesis."
          },
          {
            "@type": "DefinedTerm",
            "name": "Semantic Lattice Maps",
            "description": "Visual and architectural frameworks connecting entity nodes across brand, service, location, and intent domains."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does RAG support AI search optimisation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RAG is one of the core technical workflows powering AI search optimisation. It converts structured content into vector embeddings, enabling answer engines to retrieve, cite, and recommend relevant passages in direct responses."
            }
          },
          {
            "@type": "Question",
            "name": "What gets chunked?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Systems typically split long paragraphs, multi-idea sections, tables, and dense prose. Short, atomic units often remain intact."
            }
          },
          {
            "@type": "Question",
            "name": "When does chunking happen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Either before indexing (pre-chunking) or after retrieval (post-chunking). Different systems use different approaches."
            }
          },
          {
            "@type": "Question",
            "name": "Why does the system miss an obvious answer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often because chunk boundaries were unclear, ranking favoured a related passage, or relevant content didn't make it into the final context window."
            }
          },
          {
            "@type": "Question",
            "name": "Why is the answer incomplete even though the source exists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually because only part of the relevant content was retrieved or merged."
            }
          },
          {
            "@type": "Question",
            "name": "Why does hallucination still happen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hallucinations occur when retrieval is weak or evidence is incomplete."
            }
          },
          {
            "@type": "Question",
            "name": "How do citations map to the source?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Citations usually point to the specific chunk retrieved, not the entire page."
            }
          },
          {
            "@type": "Question",
            "name": "Why do different systems chunk differently?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Each system optimises for different goals: search, citations, long-context reasoning, or document QA."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make my content easier to retrieve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use clear headings, short sections, consistent naming, structured data, and high-density information blocks."
            }
          }
        ]
      }
    ]
  };

  const faqItems = [
    {
      q: "How does RAG support AI search optimisation?",
      a: "RAG is one of the core technical workflows powering AI search optimisation. It converts structured content into vector embeddings, enabling answer engines to retrieve, cite, and recommend relevant passages in direct responses."
    },
    {
      q: "What gets chunked?",
      a: "Systems typically split long paragraphs, multi-idea sections, tables, and dense prose. Short, atomic units often remain intact."
    },
    {
      q: "When does chunking happen?",
      a: "Either before indexing (pre-chunking) or after retrieval (post-chunking). Different systems use different approaches."
    },
    {
      q: "Why does the system miss an obvious answer?",
      a: "Often because chunk boundaries were unclear, ranking favoured a related passage, or relevant content didn't make it into the final context window."
    },
    {
      q: "Why is the answer incomplete even though the source exists?",
      a: "Usually because only part of the relevant content was retrieved or merged."
    },
    {
      q: "Why does hallucination still happen?",
      a: "Hallucinations occur when retrieval is weak or evidence is incomplete."
    },
    {
      q: "How do citations map to the source?",
      a: "Citations usually point to the specific chunk retrieved, not the entire page."
    },
    {
      q: "Why do different systems chunk differently?",
      a: "Each system optimises for different goals: search, citations, long-context reasoning, or document QA."
    },
    {
      q: "How do I make my content easier to retrieve?",
      a: "Use clear headings, short sections, consistent naming, structured data, and high-density information blocks."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          
          {/* Header Block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Articles & Guides &rarr; <Link href="/knowledge-hub/articles" className="hover:underline">Technical Reading</Link></span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              AI SEO &amp; RAG: Why Machine-Readable Content Matters
            </h1>
            <p className="text-xl text-aeo-cyan font-semibold tracking-wide">
              AI Search Optimisation: Get Found. Get Chosen.
            </p>
            
            {/* Author Metadata */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/60 font-sans border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative border border-white/20">
                  <Image src="/images/about/Profile-Picture-Vinnie.png" alt="Vince Baker" fill sizes="32px" className="object-cover" />
                </div>
                <span className="font-semibold text-white/90">Vince Baker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">&bull;</span>
                <time dateTime="2026-07-23">Jul 23, 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40">&bull;</span>
                <span>6 min read</span>
              </div>
            </div>

            {/* Quick Navigation Jump Bar */}
            <nav aria-label="Article section navigation" className="p-3 bg-white/[0.02] border border-white/10 rounded-xl font-sans text-xs flex flex-wrap items-center gap-2 text-white/70 mt-4">
              <span className="font-bold text-aeo-cyan uppercase tracking-wider text-[10px] mr-1">Quick Jump:</span>
              <a href="#rag-pipeline" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors">RAG Pipeline</a>
              <a href="#grounding-mechanics" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors">Grounding &amp; Drift</a>
              <a href="#passage-chunking" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors">Atomic Chunking</a>
              <a href="#positional-bias" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors">Positional Bias</a>
              <a href="#rag-faq" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 hover:text-white transition-colors">RAG FAQ</a>
            </nav>

            {/* Top Quadrant Atomic Answer Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-aeo-cyan/30 text-left space-y-2.5 shadow-[0_0_25px_rgba(0,229,255,0.1)]">
              <div className="flex items-center gap-2 text-aeo-cyan font-mono font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>Atomic Summary: Retrieval-Augmented Generation &amp; AI Search</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-sans leading-relaxed">
                Retrieval-Augmented Generation (RAG) is the foundational retrieval mechanism powering modern <strong>AI SEO</strong>, generative answer engines, and search assistants across <strong>AI Australia</strong> ecosystems. By converting structured content into vector embeddings, RAG pipelines extract high-relevance passage chunks to synthesise evidence-backed answers in Perplexity, ChatGPT, and Google AI Overviews. Structuring your website content into 90–120 token atomic blocks ensures higher citation probability and prevents entity drift under vector search.
              </p>
            </div>
          </div>

          {/* Article Banner Image */}
          <figure className="mt-2 mb-6">
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-aeo-cyan/20 via-black/40 to-aeo-purple/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-75 transition-opacity duration-500" />
              <Image
                src="/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp"
                alt="AI Search Optimisation and Retrieval-Augmented Generation (RAG) visual diagram depicting vector retrieval, passage chunking, and semantic entity grounding by AEObility."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
            <figcaption className="text-center text-xs text-white/50 mt-3 font-sans italic">
              Visual guide to AI Search Optimisation and Retrieval-Augmented Generation (RAG) passage extraction.
            </figcaption>
          </figure>

          {/* Hero Visual Schematic: Source -> Chunk -> Retrieval -> Answer */}
          <div className="my-2 p-6 md:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-aeo-cyan font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" /> RAG Content Pipeline
              </span>
              <span className="text-[10px] text-white/40 font-mono">Source &rarr; Chunk &rarr; Retrieval &rarr; Answer</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
              {/* Node 1: Source Content */}
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2 relative hover:border-aeo-cyan/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5">1. Source Content</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-serif">
                    Raw web pages, schemas, and brand documentation.
                  </p>
                </div>
              </div>

              {/* Node 2: Passage Chunking */}
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2 relative hover:border-aeo-purple/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-aeo-purple/10 border border-aeo-purple/30 flex items-center justify-center text-aeo-purple font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5">2. Atomic Chunks</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-serif">
                    90-120 token self-contained passage blocks.
                  </p>
                </div>
              </div>

              {/* Node 3: Passage Retrieval */}
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2 relative hover:border-emerald-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5">3. Passage Retrieval</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-serif">
                    Vector distance search fetches matching passages.
                  </p>
                </div>
              </div>

              {/* Node 4: Answer Features */}
              <div className="p-4 bg-black/60 border border-white/10 rounded-xl flex flex-col gap-2 relative hover:border-amber-400/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5">4. Answer Features</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed font-serif">
                    Cited answer snippets, panels & recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/5 text-center text-[11px] text-white/40 italic font-sans">
              AEObility RAG pipeline visual: Content visibility depends on surviving the journey from source &rarr; chunk &rarr; retrieval &rarr; answer.
            </div>
          </div>

          {/* Intro Section */}
          <div className="space-y-6 text-white/80 font-serif font-light leading-relaxed">
            <p className="text-lg leading-relaxed font-normal text-white/90">
              AI search is evolving rapidly. Modern conversational search assistants, including ChatGPT, Gemini, Claude, and Perplexity, now rely on <strong>retrieval-augmented workflows</strong> to ground their answers in verifiable real-world web data. 
            </p>

            <p>
              This does not replace traditional web search, but it adds an essential new layer. Systems increasingly prioritise <strong>clear, structured, machine-readable content</strong> that can be retrieved and cited with total confidence.
            </p>

            <p className="p-4 bg-white/[0.02] border border-white/10 rounded-xl font-sans text-sm text-white/90">
              <strong className="text-aeo-cyan">Key Insight:</strong> RAG is one of the core technical workflows powering modern <strong>AI search optimisation</strong>. It ensures answer engines can find, interpret, and cite your exact business services when users ask questions.
            </p>

            {/* Impact Bullets */}
            <div className="my-4 font-sans text-sm">
              <p className="font-semibold text-white/90 mb-2">When content is difficult for answer engines to interpret:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0" />
                  <span>Harder to interpret &rarr; lower retrieval frequency</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>Lower retrieval frequency &rarr; fewer direct citations</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-aeo-purple flex-shrink-0" />
                  <span>Fewer direct citations &rarr; reduced brand visibility in AI search</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-black to-aeo-purple/10 border-l-4 border-aeo-cyan text-white/90 font-sans font-medium rounded-r-xl my-4">
              <strong>AI Search Optimisation</strong> helps your business <strong>Get Found and Get Chosen</strong> across Search, Maps & AI. AEObility structures your content so machines can understand it and customers can choose you.
            </div>

            {/* Section 1 */}
            <div id="rag-pipeline" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4 text-gradient-aeo">
                What Retrieval-Augmented Generation Actually Does
              </h2>
            </div>

            <div className="p-4 bg-white/[0.02] border-l-2 border-aeo-purple text-xs text-white/80 font-sans italic rounded-r-lg mb-6">
              In short: RAG bridges external business documents with generative AI, allowing models to retrieve exact facts instead of relying on stagnant model memory.
            </div>

            {/* Visual Pipeline Diagram: Ingest -> Embed -> Retrieve -> Generate */}
            <div className="my-6 p-6 bg-neutral-950 border border-white/10 rounded-2xl space-y-4 font-sans">
              <div className="text-xs font-bold uppercase tracking-widest text-aeo-cyan flex items-center gap-2">
                <Cpu className="w-4 h-4" /> RAG Pipeline Workflow
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-aeo-cyan font-bold tracking-wider uppercase mb-1">Step 01</div>
                    <div className="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-aeo-cyan" /> Content Ingestion
                    </div>
                    <p className="text-xs text-white/60 font-sans">
                      Pages & documents are parsed into structured text blocks.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-aeo-purple font-bold tracking-wider uppercase mb-1">Step 02</div>
                    <div className="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-aeo-purple" /> Query Translation
                    </div>
                    <p className="text-xs text-white/60 font-sans">
                      User question converted into dense vector space.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase mb-1">Step 03</div>
                    <div className="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
                      <Search className="w-4 h-4 text-emerald-400" /> Retrieval
                    </div>
                    <p className="text-xs text-white/60 font-sans">
                      System selects top relevant passages & entity chunks.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-amber-400 font-bold tracking-wider uppercase mb-1">Step 04</div>
                    <div className="font-bold text-white mb-2 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" /> Grounded Gen
                    </div>
                    <p className="text-xs text-white/60 font-sans">
                      Model synthesises cited answers with source evidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Retrieval-Augmented Generation (RAG) is a technical architecture that enables language models to answer user questions using <strong>live external source material</strong> rather than training weights alone.
            </p>

            <p className="font-sans font-semibold text-white/90 mt-4 mb-2">Here is how a standard RAG pipeline operates:</p>

            <ol className="space-y-4 my-4 font-sans">
              <li className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <strong className="text-aeo-cyan font-bold block mb-1">1. Content ingestion</strong>
                <span className="text-sm text-white/70">Your web pages, documents, and structured schema data are processed into vector embeddings and saved into a search index.</span>
              </li>
              <li className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <strong className="text-aeo-purple font-bold block mb-1">2. Query translation</strong>
                <span className="text-sm text-white/70">The user&apos;s query is converted into a vector representation so it can be compared mathematically against your stored content.</span>
              </li>
              <li className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <strong className="text-emerald-400 font-bold block mb-1">3. Retrieval</strong>
                <span className="text-sm text-white/70">The system isolates and extracts the most relevant passage chunks from your site.</span>
              </li>
              <li className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <strong className="text-amber-400 font-bold block mb-1">4. Grounded generation</strong>
                <span className="text-sm text-white/70">The AI model generates a clear response built directly on the evidence provided by those retrieved chunks.</span>
              </li>
            </ol>

            <p>
              This process produces responses that are accurate, explainable, and up to date. Making your content easy for RAG pipelines to navigate is the core goal of effective AI search optimisation.
            </p>

            {/* Entity Matching & Retrieval Flow Diagram */}
            <div className="my-8 p-6 md:p-8 bg-neutral-950 border border-white/10 rounded-2xl font-sans">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-aeo-cyan font-bold flex items-center gap-2">
                  <GitMerge className="w-4 h-4" /> Entity Matching & Passage Retrieval Flow
                </span>
                <span className="text-[10px] text-white/40 font-mono">Query &rarr; Disambiguate &rarr; Retrieve &rarr; Answer</span>
              </div>

              {/* Step-by-Step Flowchart Graphic */}
              <div className="space-y-4">
                {/* Step 1: User Query */}
                <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 flex items-center justify-center text-aeo-cyan text-xs font-bold flex-shrink-0 mt-0.5">
                    Q
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">User Query</h4>
                    <p className="text-xs text-white/70 font-serif">
                      Initial prompt entered into an answer engine (for example: <em>“What is the best AI search optimisation strategy for Perth businesses?”</em>).
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gradient-to-b from-aeo-cyan to-aeo-purple mx-8" />

                {/* Step 2: Identify Likely Entities */}
                <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-aeo-purple/20 border border-aeo-purple/40 flex items-center justify-center text-aeo-purple text-xs font-bold flex-shrink-0 mt-0.5">
                    E1
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-white text-sm mb-1">Identify Likely Entities</h4>
                    <p className="text-xs text-white/70 font-serif mb-2">
                      Extracts core entity tokens from the query:
                    </p>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-aeo-cyan font-mono flex items-center gap-1">
                        <Tag className="w-3 h-3" /> Brand Entity: AEObility
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-aeo-purple font-mono flex items-center gap-1">
                        <Target className="w-3 h-3" /> Service: AI Search Optimisation
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-400 font-mono flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Location: Perth, WA
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-amber-400 font-mono flex items-center gap-1">
                        <Compass className="w-3 h-3" /> Query Intent: Best Strategy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gradient-to-b from-aeo-purple to-emerald-400 mx-8" />

                {/* Step 3: Match Entities against Knowledge Graph */}
                <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold flex-shrink-0 mt-0.5">
                    KG
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Match Entities against Knowledge Graph</h4>
                    <p className="text-xs text-white/70 font-serif">
                      Maps identified entities against structured graph nodes and verifies relationships between brand, service, and geographic context.
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gradient-to-b from-emerald-400 to-amber-400 mx-8" />

                {/* Step 4 & Step 5: Disambiguate & Follow Relationships -> Rank & Retrieve */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 border-l-2 border-white/10">
                  <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="text-[10px] text-aeo-cyan font-bold uppercase mb-1">Integrated Context Step</div>
                    <h5 className="font-bold text-white text-xs mb-1">Use Context to Disambiguate</h5>
                    <p className="text-[11px] text-white/60 font-serif">
                      Refines semantic intent and filters irrelevant entity homonyms during retrieval ranking.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div className="text-[10px] text-aeo-purple font-bold uppercase mb-1">Lattice Traversal</div>
                    <h5 className="font-bold text-white text-xs mb-1">Follow Entity Relationships</h5>
                    <p className="text-[11px] text-white/60 font-serif">
                      Traverses linked subject-object-predicate triples to verify source credibility.
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gradient-to-b from-amber-400 to-emerald-400 mx-8" />

                {/* Step 6: Rank & Retrieve */}
                <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xs font-bold flex-shrink-0 mt-0.5">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Rank & Retrieve Relevant Passages</h4>
                    <p className="text-xs text-white/70 font-serif">
                      Passage-level vector retrieval selects the top atomic chunks (90-120 tokens) containing high-density factual answers.
                    </p>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-gradient-to-b from-emerald-400 to-aeo-cyan mx-8" />

                {/* Step 7: Surface Results */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-aeo-cyan/10 via-black to-aeo-purple/10 border border-aeo-cyan/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/40 flex items-center justify-center text-aeo-cyan text-xs font-bold flex-shrink-0 mt-0.5">
                    OUT
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Surface Results: Answer Features</h4>
                    <p className="text-xs text-white/80 font-serif">
                      Delivers grounded, cited output inside AI answer features: rich snippets, knowledge panels, or generative answer summaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
              Why RAG Matters for AI Search Optimisation
            </h2>

            <div className="p-4 bg-white/[0.02] border-l-2 border-aeo-cyan text-xs text-white/80 font-sans italic rounded-r-lg mb-6">
              Put simply: RAG improves retrieval accuracy, reduces hallucination, and increases your chance of being cited in AI search outputs.
            </div>

            <p>
              AI search optimisation is about ensuring your business information is clear, accessible, and structured for answer engines. RAG supports this objective by:
            </p>

            <ul className="space-y-2 my-4 list-disc pl-5 font-sans text-sm text-white/80">
              <li>increasing the likelihood that your content is selected by vector retrieval algorithms</li>
              <li>bypassing reliance on model memory to deliver current, factual information</li>
              <li>maximising direct citations in generated answers</li>
              <li>helping engines understand your service offerings consistently across diverse user queries</li>
            </ul>

            {/* Why This Matters Callout: Visibility & Selection */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl font-sans text-sm space-y-2 my-6">
              <div className="text-xs font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Why This Matters for Your Business
              </div>
              <p className="text-white/90">
                <strong>Visibility, Understanding & Selection:</strong> Clear, structured content increases your visibility, helps answer engines interpret your services correctly, and drives selection. Better chunking leads to higher retrieval frequency and expanded AI search visibility.
              </p>
            </div>

            <p>
              However, RAG only functions effectively when your content is properly structured for passage-level extraction. Dense, unstructured, or ambiguous text degrades retrieval quality, directly impacting your visibility.
            </p>

            {/* Section 3 */}
            <div id="rag-misconceptions" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
                RAG Misconceptions That Affect AI Search Optimisation
              </h2>

              <div className="p-4 bg-white/[0.02] border-l-2 border-rose-400 text-xs text-white/80 font-sans italic rounded-r-lg mb-6">
                Here is the takeaway: Data preparation, chunking boundaries, and passage density drive retrieval quality far more than raw model size or prompt tweaks.
              </div>

              <p>
                Many organisations view RAG as a simple indexing layer. In practice, it is a structured workflow with technical rules that directly influence AI search performance.
              </p>

              <div className="space-y-6 my-8 font-sans">
                {/* Misconception 1 */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" /> Misconception 1: Retrieval failures come from the model or vector database
                  </div>
                  <p className="text-sm text-white/80 font-serif leading-relaxed">
                    Most retrieval failures trace back to poor data preparation and inappropriate chunking. If a core concept is split across arbitrary boundaries, the engine retrieves incomplete evidence, leading to partial or flawed answers.
                  </p>
                </div>

                {/* Misconception 2 */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" /> Misconception 2: Large context windows make retrieval unnecessary
                  </div>
                  <p className="text-sm text-white/80 font-serif leading-relaxed">
                    Expanded context windows can dilute model attention, introduce latency, and increase computational costs. Precision retrieval remains essential because it isolates exact, high-confidence evidence.
                  </p>
                </div>

                {/* Misconception 3 */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" /> Misconception 3: All content must be chunked before indexing
                  </div>
                  <p className="text-sm text-white/80 font-serif leading-relaxed">
                    Chunking works well for extended prose. However, short, atomic units like FAQs, product data tables, and structured specifications perform best when indexed intact.
                  </p>
                </div>

                {/* Misconception 4 */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" /> Misconception 4: RAG is just SEO with a different name
                  </div>
                  <p className="text-sm text-white/80 font-serif leading-relaxed">
                    SEO targets keyword matches and overall page authority. AI search optimisation focuses on passage-level semantic clarity and vector distance matching. A page can rank highly in search engine results pages while failing in AI answer generation.
                  </p>
                </div>

                {/* Misconception 5 */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/30 transition-all">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                    <XCircle className="w-4 h-4" /> Misconception 5: Prompt engineering can fix poor retrieval
                  </div>
                  <p className="text-sm text-white/80 font-serif leading-relaxed">
                    Prompts adjust styling and reasoning instructions, but they cannot retrieve missing data. Strong data preparation and clean retrieval remain the foundational requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="rag-chunking" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
                Pre-Chunking vs Post-Chunking
              </h2>
            </div>

            <div className="p-4 bg-white/[0.02] border-l-2 border-emerald-400 text-xs text-white/80 font-sans italic rounded-r-lg mb-6">
              In short: Pre-chunking offers fast, predictable retrieval for structured content, while post-chunking dynamically adapts to complex queries.
            </div>

            {/* Comparison Table Visual */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-white font-bold bg-white/5">
                    <th className="p-4">Aspect</th>
                    <th className="p-4 text-aeo-cyan">Pre-Chunking</th>
                    <th className="p-4 text-aeo-purple">Post-Chunking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/40">
                  <tr>
                    <td className="p-4 font-semibold text-white/90">When splitting happens</td>
                    <td className="p-4 text-white/80">Before indexing</td>
                    <td className="p-4 text-white/80">After retrieval</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white/90">Speed</td>
                    <td className="p-4 text-emerald-400 font-medium">Faster at query time</td>
                    <td className="p-4 text-amber-400 font-medium">Slower on first access</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white/90">Flexibility</td>
                    <td className="p-4 text-white/80">Lower</td>
                    <td className="p-4 text-white/80">Higher</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white/90">Best for</td>
                    <td className="p-4 text-white/80">Structured, predictable content</td>
                    <td className="p-4 text-white/80">Varied, complex content</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Chunking strategy dictates how your content is segmented into retrievable units. The timing of this segmentation directly affects retrieval speed and context accuracy in AI search engines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 font-sans">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-bold text-aeo-cyan text-lg mb-3">Pre-Chunking (Before Indexing)</h3>
                <ul className="space-y-2 text-sm text-white/70 list-disc pl-4">
                  <li>Creates fixed, predictable passage boundaries</li>
                  <li>Delivers faster responses at query time</li>
                  <li>Ideal for structured specifications and stable business content</li>
                </ul>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-bold text-aeo-purple text-lg mb-3">Post-Chunking (After Retrieval)</h3>
                <ul className="space-y-2 text-sm text-white/70 list-disc pl-4">
                  <li>Provides flexible, dynamic context assembly</li>
                  <li>Customises passage boundaries to match complex user queries</li>
                  <li>Useful for extensive, irregular technical documentation</li>
                </ul>
              </div>
            </div>

            <p>
              Different AI platforms utilise different chunking methodologies. The key to success is ensuring your underlying content maintains <strong>semantic clarity</strong> across both methods.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
              Different Answer Engines Chunk Differently
            </h2>

            {/* Second Comparison Table: Google vs Perplexity vs Claude vs OpenAI */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-white/10">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-white font-bold bg-white/5">
                    <th className="p-4">System</th>
                    <th className="p-4 text-aeo-cyan">Typical Behaviour</th>
                    <th className="p-4 text-emerald-400">Implication for AI Search Optimisation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/40">
                  <tr>
                    <td className="p-4 font-bold text-white">Google</td>
                    <td className="p-4 text-white/80">Structure-influenced retrieval</td>
                    <td className="p-4 text-white/80">Clear headings, consistent entities</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Perplexity</td>
                    <td className="p-4 text-white/80">Retrieval-first, citation-oriented</td>
                    <td className="p-4 text-white/80">Atomic, self-contained blocks</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">Claude</td>
                    <td className="p-4 text-white/80">Structure-aware, context-preserving</td>
                    <td className="p-4 text-white/80">Logical hierarchy, clean formatting</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white">OpenAI-style</td>
                    <td className="p-4 text-white/80">Semantic, flexible, agentic</td>
                    <td className="p-4 text-white/80">Standalone sections, dense meaning</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              While answer engines follow similar baseline patterns (retrieve, rank, synthesise), their segmentation and passage selection algorithms vary. Structuring your content into clear, logical sections ensures compatibility across all major platforms.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
              Who Controls Chunking?
            </h2>

            <p>
              Chunking algorithms are governed by AI search platforms rather than website owners.
            </p>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 font-sans my-6">
              <h3 className="font-bold text-white text-base">Key considerations:</h3>
              <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                <li>Platforms dictate document processing and segmentation parameters during indexing</li>
                <li>Developers can refine chunking logic only within custom enterprise AI applications</li>
                <li>End users have no direct control over chunk selection</li>
                <li>Content publishers shape chunk quality indirectly through structural clarity</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-black to-aeo-purple/10 border border-aeo-cyan/30 rounded-2xl font-sans my-6">
              <div className="text-xs uppercase tracking-widest text-aeo-cyan font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Practical Takeaway for AI Search Optimisation
              </div>
              <p className="text-white text-base font-semibold leading-relaxed">
                You control <strong>how your content is written and formatted</strong>, not how AI platforms slice it. Descriptive headings, self-contained paragraphs, and explicit factual statements make retrieval seamless across every major search engine.
              </p>
            </div>

            {/* ============================================================================== */}
            {/* SECTION: Grounding & Canonical Data Ingestion */}
            {/* ============================================================================== */}
            <section id="grounding-mechanics" className="border-t border-white/10 pt-12 space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>RAG Layer 01: Canonical Ingestion</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  1. Grounding &amp; Preventing Vector Cosine Drift
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  How dense retrieval models convert web pages into vector representations, and why unstructured marketing prose causes retrieval failure.
                </p>
              </div>

              <div className="p-5 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-4 font-serif text-xs text-zinc-300 leading-relaxed">
                <p>
                  When an AI crawler (such as GPTBot, ClaudeBot, or PerplexityBot) ingests a web page, it does not store the full HTML layout. Instead, the scraper tokenises the visible text, splits it into numerical vectors via embedding models (e.g. <code>text-embedding-004</code> or <code>Cohere Embed v3</code>), and projects those vectors into a multidimensional semantic space.
                </p>
                <p>
                  If your website describes services using subjective marketing buzzwords (for example: <em>&ldquo;We craft bespoke end-to-end digital synergies&rdquo;</em>), the resulting vector drifts far from the user&apos;s actual search query (<em>&ldquo;hire an AEO consultant in Perth&rdquo;</em>). Cosine similarity measures the geometric distance between these vectors:
                </p>
                
                {/* Mathematical Formulation Box */}
                <div className="p-4 bg-black/60 border border-cyan-500/20 rounded-xl font-mono text-[11px] text-cyan-200 space-y-1">
                  <div className="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">Vector Proximity Formulation:</div>
                  <div className="text-center py-2 text-white font-mono text-xs sm:text-sm">
                    Similarity(Q, D) = (q &middot; d) / (||q|| &times; ||d||)
                  </div>
                  <p className="text-[10px] text-zinc-400 font-serif pt-1">
                    Where Q is the user prompt vector and D is the stored document chunk vector. Vague marketing prose reduces cosine similarity below top-k retrieval thresholds.
                  </p>
                </div>

                <p>
                  To prevent vector drift, content must be anchored in deterministic <strong>Entity-Relationship-Evidence (ERE) triples</strong>. Explicitly declaring <code>[Subject: AEObility] &rarr; [Predicate: providesService] &rarr; [Object: Answer Engine Optimisation]</code> gives the vectoriser an unambiguous mathematical anchor.
                </p>
              </div>
            </section>

            {/* ============================================================================== */}
            {/* SECTION: Passage Retrieval & Semantic Chunking */}
            {/* ============================================================================== */}
            <section id="passage-chunking" className="border-t border-white/10 pt-12 space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>RAG Layer 02: Dense Passage Extraction</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  2. Engineering 40–80 Token Atomic Answer Units
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Why long text walls get truncated during sentence boundary splitting, and how to format self-contained atomic answers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {/* Failed Chunk Example */}
                <div className="p-5 bg-rose-950/10 border border-rose-500/20 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-rose-400 uppercase">Legacy Prose Text Wall</span>
                    <span className="text-[10px] font-mono text-zinc-500">&gt; 250 Tokens</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-serif leading-relaxed italic">
                    &ldquo;Welcome to our company where innovation meets digital passion. For over twenty years we have helped Australian clients navigate changing technology trends through our holistic service offering that encompasses modern marketing, consulting, bespoke strategies, and implementation...&rdquo;
                  </p>
                  <div className="p-2.5 bg-black/50 border border-rose-500/30 rounded-lg text-[11px] text-rose-300 font-serif">
                    <strong>Retrieval Failure:</strong> Chunk boundary splits mid-paragraph. The LLM extracts vague claims with zero hard deliverables or pricing facts.
                  </div>
                </div>

                {/* Optimised Atomic Chunk Example */}
                <div className="p-5 bg-cyan-950/20 border border-cyan-500/40 rounded-2xl space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase">AEObility Atomic Block</span>
                    <span className="text-[10px] font-mono text-cyan-400">62 Tokens</span>
                  </div>
                  <p className="text-xs text-white font-serif leading-relaxed">
                    &ldquo;AEObility delivers fixed-scope Answer Engine Optimisation (AEO) sprints for Australian SMBs starting from $495 AUD ex. GST. Deliverables include nested JSON-LD schema graphs, atomic passage rewrites, and multi-engine citation alignment for ChatGPT, Perplexity, and Google AI Overviews.&rdquo;
                  </p>
                  <div className="p-2.5 bg-black/50 border border-cyan-500/30 rounded-lg text-[11px] text-cyan-200 font-serif">
                    <strong>Retrieval Success:</strong> 100% self-contained entity statement. Survives token budget truncation and extracts cleanly into synthesis answers.
                  </div>
                </div>
              </div>
            </section>

            {/* ============================================================================== */}
            {/* SECTION: Positional Bias & Attention Weighting */}
            {/* ============================================================================== */}
            <section id="positional-bias" className="border-t border-white/10 pt-12 space-y-6 scroll-mt-24">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RAG Layer 03: Attention Weighting</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  3. Mitigating the &quot;Lost in the Middle&quot; Attention Curve
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Understanding transformer attention allocation to guarantee your critical claims are prioritised during generative synthesis.
                </p>
              </div>

              <div className="p-6 bg-zinc-950/90 border border-white/10 rounded-2xl space-y-5 font-serif text-xs text-zinc-300 leading-relaxed">
                <p>
                  Large Language Models (LLMs) suffer from empirical <strong>positional bias</strong> during synthesis. Research demonstrates a persistent U-shaped attention distribution: models allocate high attention weights to text located at the absolute beginning (primacy effect) and end (recency effect) of retrieved context chunks, while factual details buried in the middle of long sections suffer severe context dilution.
                </p>

                {/* Positional Attention Distribution Diagram */}
                <div className="p-5 bg-black/80 border border-white/10 rounded-xl space-y-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-cyan-400 font-bold">1. Primacy Peak (High Attention)</span>
                    <span className="text-rose-400 font-bold">2. Trough (Lost in the Middle)</span>
                    <span className="text-purple-400 font-bold">3. Recency Peak (High Attention)</span>
                  </div>
                  <div className="h-10 w-full bg-gradient-to-r from-cyan-500/40 via-rose-500/10 to-purple-500/40 rounded-lg border border-white/10 flex items-center justify-between px-4 text-[10px] font-mono text-white">
                    <span>Chars 0–150 (Immediate Answer)</span>
                    <span className="text-rose-400">Chars 151–800 (Context Dilution)</span>
                    <span>Closing Proof / Case Study CTA</span>
                  </div>
                </div>

                <p>
                  <strong>The AEObility Implementation Rule:</strong> Every H2 and H3 section must deliver a direct, declarative answer within the first 150 characters. Supporting evidence, technical nuances, and secondary parameters follow, concluding with an explicit entity link.
                </p>
              </div>
            </section>

            {/* ============================================================================== */}
            {/* COMMERCIAL UPLINK: Bridge to Services Hub */}
            {/* ============================================================================== */}
            <section className="my-8 p-6 sm:p-8 bg-gradient-to-r from-cyan-950/30 via-zinc-950 to-purple-950/30 border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-bold uppercase">
                  Commercial Execution Bridge
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                  Deploy Production-Grade AEO Structures
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif max-w-xl">
                  Format your website for machine extraction. Explore our fixed-scope technical micro-sprints from $495 AUD ex. GST or evaluate your current score.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/services/aeo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <span>Explore AEO Services &amp; Sprints</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/diagnostic"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all"
                >
                  <span>Run Diagnostic Scan</span>
                </Link>
              </div>
            </section>

            {/* Section 7 */}
            <div id="rag-faq" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
                FAQ: RAG & Answer Engine Search
              </h2>

              <p>
                Here are answers to the most common technical questions regarding RAG and AI search optimisation.
              </p>

              <div className="space-y-4 my-8 font-sans">
                {faqItems.map((item, idx) => (
                  <details key={idx} className="group bg-white/[0.02] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.04] transition-colors">
                    <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center gap-4">
                      <span>{item.q}</span>
                      <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                    </summary>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Core Principle Quote */}
            <div className="my-12 p-8 bg-gradient-to-r from-aeo-cyan/20 via-neutral-950 to-aeo-purple/20 border-y border-white/10 text-center font-sans">
              <div className="text-xs uppercase tracking-widest text-aeo-cyan font-bold mb-3">
                The Core Principle
              </div>
              <blockquote className="text-xl md:text-2xl font-extrabold text-white leading-snug max-w-3xl mx-auto italic">
                “AI search optimisation depends on how well your content survives the journey from source &rarr; chunk &rarr; retrieval &rarr; answer.”
              </blockquote>
              <p className="mt-4 text-sm text-white/70 font-light font-serif">
                Chunking, ranking, context windows, and citations form an interconnected pipeline. AEO ensures your content is structured for seamless extraction across that pipeline.
              </p>
            </div>

            {/* Section 8: AI Search Optimisation in 30 Seconds */}
            <div className="my-8 p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl font-sans space-y-4">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4" /> AI Search Optimisation in 30 Seconds
              </div>
              <ul className="space-y-2.5 text-sm text-white/80 font-serif">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-1" />
                  <span>AI search relies on retrieval-augmented workflows rather than traditional page keyword matching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-aeo-purple flex-shrink-0 mt-1" />
                  <span>Clear, structured, machine-readable content increases your visibility across answer engines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Chunking, entity clarity, and semantic structure determine whether your passages get cited.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span>AI search optimisation ensures your content survives the journey from source &rarr; chunk &rarr; retrieval &rarr; answer.</span>
                </li>
              </ul>
            </div>

            {/* Section 9: Updated Header */}
            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
              How AEObility Improves Your AI Search Optimisation
            </h2>

            {/* Recommended Visual: Topic-Specific Semantic Lattice Map */}
            <div className="my-8 p-6 md:p-8 bg-neutral-950 border border-white/10 rounded-2xl relative overflow-hidden font-sans">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-aeo-cyan font-bold flex items-center gap-2">
                  <Network className="w-4 h-4" /> Topic Entity Subgraph & Lattice Map
                </span>
                <span className="text-[10px] text-white/40">Topic Entity Relationships</span>
              </div>

              <div className="relative py-4">
                {/* Central Node */}
                <div className="max-w-md mx-auto text-center p-4 bg-gradient-to-r from-aeo-cyan/20 via-neutral-900 to-aeo-purple/20 border border-aeo-cyan/40 rounded-xl font-bold text-white text-sm shadow-lg mb-8">
                  <Bot className="w-5 h-5 mx-auto mb-1 text-aeo-cyan" />
                  RAG Retrieval Node: AEObility Entity Subgraph
                </div>

                {/* Sub Nodes Lattice Grid with Topic-Specific Entity Examples */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-cyan/40 transition-all">
                    <div className="text-xs font-bold text-aeo-cyan mb-1 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" /> Brand Entity
                    </div>
                    <div className="text-sm font-semibold text-white">AEObility</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">Verified AI Search authority & entity node.</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-aeo-purple/40 transition-all">
                    <div className="text-xs font-bold text-aeo-purple mb-1 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" /> Service Category
                    </div>
                    <div className="text-sm font-semibold text-white">AI Search Optimisation</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">Structured product specs & service schemas.</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-emerald-400/40 transition-all">
                    <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Location Entity
                    </div>
                    <div className="text-sm font-semibold text-white">Australia / Perth GEO</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">Geographic entity grounding & local matrix.</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-amber-400/40 transition-all">
                    <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> Query Intent
                    </div>
                    <div className="text-sm font-semibold text-white">RAG Machine Readability</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">Passage-level answer engine selection.</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-sky-400/40 transition-all">
                    <div className="text-xs font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Atomic Chunks
                    </div>
                    <div className="text-sm font-semibold text-white">90-120 Token Blocks</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">High-density self-contained passage units.</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-rose-400/40 transition-all">
                    <div className="text-xs font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Surface Results
                    </div>
                    <div className="text-sm font-semibold text-white">Answer Features</div>
                    <p className="text-[11px] text-white/60 font-serif mt-1">Rich snippets, panels & cited answers.</p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              If you want clearer, more consistent visibility across answer engines, AEObility&apos;s <strong>AI search optimisation</strong> services help Australian businesses Get Found and Get Chosen across Search, Maps & AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 font-sans">
              {/* Free Audit */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between hover:border-aeo-cyan/30 transition-all">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-aeo-cyan uppercase tracking-wider">Option 01</div>
                  <h3 className="text-xl font-bold text-white">Free Visibility Audit</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-serif">
                    Enter your website URL and receive a clear, human-written audit outlining your AI search readiness delivered within 24 hours.
                  </p>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/#audit-form" 
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-aeo-cyan text-black font-bold text-sm hover:bg-white transition-colors"
                  >
                    Get Your Free Visibility Audit - delivered within 24 hours <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Strategic Blueprint */}
              <div className="p-6 bg-gradient-to-br from-white/[0.04] to-aeo-purple/10 border border-aeo-purple/30 rounded-2xl flex flex-col justify-between hover:border-aeo-purple/50 transition-all">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-aeo-purple uppercase tracking-wider">Option 02</div>
                  <h3 className="text-xl font-bold text-white">Strategic Blueprint</h3>
                  <div className="text-2xl font-extrabold text-white">
                    $995 <span className="text-xs font-normal text-white/60">(credited if you continue)</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-serif">
                    A deeper technical audit + a 90-day roadmap for improving visibility, understanding, and selection across Search, Maps & AI.
                  </p>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/services/aeo/costs-timing" 
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-aeo-purple text-white font-bold text-sm hover:bg-white hover:text-black transition-colors"
                  >
                    View Blueprint Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center font-sans font-medium text-white/70 italic">
              No jargon. No pressure. Just clarity.
            </p>

            {/* Section 10 */}
            <h2 className="text-2xl font-bold text-white font-sans mt-12 mb-4">
              AI Search Optimisation: Get Found. Get Chosen.
            </h2>

            <p>
              Answer engines are becoming an integral part of modern digital search.<br />
              RAG is the primary technical engine behind AI search optimisation.<br />
              AEO is how you format and structure your content to maximise machine comprehension.
            </p>

            {/* Strategic Service Entity Bridge */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-aeo-purple/10 to-transparent border border-aeo-cyan/30 rounded-2xl my-8">
              <div className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold mb-2">Operational Service Bridge</div>
              <h3 className="text-lg font-bold text-white font-sans mb-2">Deploying Production-Grade RAG Optimisation</h3>
              <p className="text-sm text-white/80 font-serif leading-relaxed mb-4">
                Retrieval-augmented generation layers utilise deep indexing models to extract text fragments from complex layouts. If an interface lacks machine-readable structure, its underlying claims will fail to survive passage extraction. Deploying an automated <Link href="/diagnostic" className="text-aeo-cyan font-semibold hover:underline">AI visibility audit</Link> and partnering with our <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services</Link> resolves this context gap.
              </p>
              <Link
                href="/services/aeo"
                className="inline-flex items-center gap-2 px-4 py-2 bg-aeo-cyan text-black font-bold text-xs rounded-xl hover:bg-white transition-all shadow-md"
              >
                <span>Explore AEO Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-lg font-bold text-white font-sans my-4">
              AEObility helps you show up clearly, consistently, and confidently across Search, Maps & AI. Get Found. Get Chosen.
            </p>

          </div>

          {/* Suggested Reading Section */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8 font-sans">Suggested Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
              
              {/* Card 1: AEO vs SEO */}
              <Link 
                href="/knowledge-hub/articles/aeo-vs-seo" 
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                  <Image 
                    src="/images/knowledge-hub/traditional-seo-vs-aeo_AEObility.webp" 
                    alt="AEO vs SEO technical comparison" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
                <div className="p-6 relative z-10 flex-grow">
                  <div className="text-[10px] text-aeo-cyan uppercase font-bold tracking-wider mb-2">Technical Guide</div>
                  <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-2 transition-colors">AEO vs SEO: The Complete Guide</h3>
                  <p className="text-xs text-white/60 font-serif leading-relaxed">From lexical keyword ranking to semantic retrieval and answer engine visibility.</p>
                </div>
              </Link>

              {/* Card 2: Semantic SEO */}
              <Link 
                href="/knowledge-hub/semantic-seo" 
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                  <Image 
                    src="/images/knowledge-hub/structured-search-audit-wireframe.png" 
                    alt="Semantic SEO entity graph architecture" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
                <div className="p-6 relative z-10 flex-grow">
                  <div className="text-[10px] text-aeo-purple uppercase font-bold tracking-wider mb-2">Knowledge Node</div>
                  <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-2 transition-colors">Semantic SEO Architecture</h3>
                  <p className="text-xs text-white/60 font-serif leading-relaxed">Entity modelling, knowledge graphs, and machine-readable content structures.</p>
                </div>
              </Link>

              {/* Card 3: Case Study Baby Bento */}
              <Link 
                href="/knowledge-hub/case-studies/baby-bento" 
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-aeo-cyan/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-aeo-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative aspect-video w-full overflow-hidden z-10 border-b border-white/5 bg-neutral-950">
                  <Image 
                    src="/images/knowledge-hub/case-study-aeo-lifts-traffic.webp" 
                    alt="Baby Bento AEO Case Study" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
                <div className="p-6 relative z-10 flex-grow">
                  <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-2">Case Study</div>
                  <h3 className="font-semibold text-white group-hover:text-aeo-cyan mb-2 transition-colors">Case Study: Baby Bento</h3>
                  <p className="text-xs text-white/60 font-serif leading-relaxed">Real-world AEO implementation, entity alignment, and semantic traffic growth.</p>
                </div>
              </Link>

            </div>
          </div>

          {/* Reciprocal Related Articles Mesh */}
          <RelatedArticles currentSlug="retrieval-augmented-generation" />

          {/* Footer Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10 mt-10">
            <Link href="/knowledge-hub/articles" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Articles
            </Link>
            <Link href="/knowledge-hub/articles/aeo-vs-seo" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              Next: AEO vs SEO Guide &rarr;
            </Link>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
