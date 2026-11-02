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
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Google AI Search: RAG, Query Fan-Out & Organic Strategy | AEObility",
  description: "Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
  },
  openGraph: {
    title: "Google AI Search: RAG, Query Fan-Out & Organic Strategy | AEObility",
    description: "Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.",
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
    title: "Google AI Search: RAG, Query Fan-Out & Organic Strategy | AEObility",
    description: "Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.",
    images: ["https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp"],
  },
  keywords: [
    "google ai search",
    "google ai search engine",
    "google ai search strategy",
    "query fan-out",
    "rag grounding",
    "ai mode optimisation",
    "search generative experience",
    "grounded synthesis",
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
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search"
        },
        "headline": "Google AI Search: Grounded Synthesis & Retrieval Mechanics",
        "description": "Understand how Google AI Search operates: query fan-out, RAG grounding, and multi-turn AI Mode. Practical guide for maintaining search visibility.",
        "inLanguage": "en-AU",
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/google-ai-search",
        "datePublished": "2026-11-02T08:00:00+08:00",
        "dateModified": "2026-11-02T08:00:00+08:00",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "url": "https://aeobility.com.au/vince-baker"
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
            "url": "https://aeobility.com.au/icons/android-chrome-512x512.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp"
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
          "https://aeobility.com.au/diagnostic"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        "url": "https://aeobility.com.au/images/knowledge-hub/google-ai-search-grounded-synthesis-query-fanout-visualisation.webp",
        "name": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "description": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "caption": "Abstract visualisation of AI search retrieval showing multiple coloured information streams converging into a central synthesis node surrounded by citation networks, entity relationships and layered evidence structures.",
        "keywords": [
          "Google AI Search",
          "Google AI Overviews",
          "Query Fan-Out",
          "Grounded Synthesis",
          "RAG Architecture",
          "Answer Engine Optimisation",
          "AEO Strategy"
        ],
        "representativeOfPage": true,
        "inLanguage": "en-AU"
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
              <span>AEO Strategy &bull; Technical Research Node &bull; 02/11/26</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Google AI Search: <span className="text-gradient-aeo">Grounded Synthesis &amp; Retrieval Mechanics</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-3.5">
              <span>Author: <strong className="text-white">Vince Baker</strong></span>
              <span>&bull;</span>
              <span>Organisation: <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Published: <strong className="text-white">02/11/2026</strong></span>
              <span>&bull;</span>
              <span>Target Topic: <strong className="text-aeo-cyan">google ai search</strong></span>
              <span>&bull;</span>
              <span>7 min read</span>
            </div>

            {/* Opening 100-Word Salience Block */}
            <p className="text-lg md:text-xl font-light text-white/90 font-serif leading-relaxed">
              Google&apos;s AI Mode extends AI Overviews by shifting search from a traditional directory toward a grounded synthesis engine. Instead of matching keywords directly to an index, AI Overviews and AI Mode can break complex prompts into secondary background queries, retrieve relevant passages from the index, and assemble a direct answer on the page.
            </p>

            {/* Inverted Pyramid Core Definition Box */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-3 shadow-xl">
              <h2 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                What is Google AI Search?
              </h2>
              <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
                <strong>Google AI Search</strong> integrates generative AI features like AI Overviews and AI Mode directly into search results. Google Search&apos;s core strength remains its established web index and ranking systems. Rather than operating purely as a standalone vector-store generator, AI Mode appears to sit directly on top of those systems, issuing multiple searches into Google&apos;s retrieval stack and grounding a generated response from returned web evidence. While this retrieval-and-grounding pattern strongly resembles a{' '}
                <Link 
                  href="/knowledge-hub/articles/retrieval-augmented-generation" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  Retrieval-Augmented Generation (RAG) architecture
                </Link>
                , Google&apos;s public documentation emphasises query fan-out and retrieval from Search rather than pure vector-store generation. To maintain organic search visibility, content creators and brands must structure concise, verifiable passage-level evidence that search models can reliably extract, ground, and cite during complex multi-turn queries.
              </p>
              <p className="text-xs text-white/60 font-mono pt-1">
                For site owners, this changes the operational target. You are no longer optimising solely for a top-ranking URL; you are structuring clear, verifiable passages that give the model reliable evidence to extract and cite.
              </p>
            </div>
          </header>

          {/* Hero Architecture Visual Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-2xl bg-neutral-950 group">
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
                  <p className="text-xs sm:text-sm text-white/70 font-light">
                    How Google synthesises web evidence across multi-query expansions, Search retrieval, and conversational sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                Section 01 &bull; Retrieval Mechanics
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                1. Underlying Retrieval Architecture: How Answer Engines Actually Fetch Evidence
              </h2>
            </div>

            <p className="text-base text-white/80 font-light leading-relaxed">
              Google&apos;s generative search experiences do not replace standard web indexing. They sit directly on top of existing crawling, indexation, and technical quality systems. If your pages are slow, orphaned, or blocked in robots.txt, Google may have limited ability to retrieve and use them in downstream generative features.
            </p>

            {/* Subsection: Query Fan-Out */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Query Fan-Out and Subtopic Expansion
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                When a user submits an open or complex query, the model rarely executes a single lookup. Instead, it generates multiple secondary queries across related subtopics simultaneously. For instance, a prompt like &ldquo;how to restore a weed-infested buffalo lawn&rdquo; triggers background searches across selective herbicides, physical thatch removal, and seasonal fertilisation windows. If your site covers only the broad head term and ignores these practical sub-intent clusters, the retrieval engine simply bypasses you during multi-query expansion, exposing your content to{' '}
                <Link 
                  href="/knowledge-hub/articles/positional-bias-in-retrieval" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  positional bias and context dilution
                </Link>
                .
              </p>
            </div>

            {/* Subsection: Retrieval, Grounding and RAG Patterns */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Retrieval, Grounding, and Retrieval-Augmented Generation (RAG)
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                Google does not publicly describe all AI Overviews and AI Mode architecture simply as a standalone vector &ldquo;RAG&rdquo; pipeline. Google Search&apos;s core strength remains its world-scale web index and core ranking systems. AI Mode appears to sit on top of those systems, issuing multiple searches into Google&apos;s retrieval stack and then grounding a generated response from the returned evidence. While this retrieval-plus-grounding pattern clearly resembles a{' '}
                <Link 
                  href="/knowledge-hub/articles/retrieval-augmented-generation" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  Retrieval-Augmented Generation (RAG) architecture
                </Link>
                , Google&apos;s public descriptions emphasise query fan-out and retrieval from Search rather than pure vector-store generation. The operational objective remains extractable evidence: concise, self-contained paragraphs that directly answer an underlying sub-question without requiring five pages of conversational fluff.
              </p>
            </div>

            {/* Subsection: Multi-Turn Conversational Reasoning */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Multi-Turn Conversational Reasoning
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                Through conversational interfaces like AI Mode, users refine constraints, exclude variables, and test comparisons across a continuous session. The engine continually retrieves fresh candidate passages at each turn to answer follow-up prompts.
              </p>
            </div>

            {/* Subsection: The Mechanical Reality vs The Commercial Impact */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  The Mechanical Reality vs The Commercial Impact
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                While modern RAG literature frequently discusses vector representations and dense embeddings, Google&apos;s proprietary internal ranking weights and vector calculations remain closed. We do not pretend to reverse-engineer these black boxes. What we can observe and measure is the operational result: when query fan-out occurs, brands absent from secondary subtopic expansions may lose visibility for that branch of the query, regardless of how well their homepage ranks for the primary keyword.
              </p>
            </div>

            {/* Subsection: What Has Not Changed */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan" />
                <h3 className="text-lg font-bold text-white">
                  What Has Not Changed
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                Despite the introduction of AI Overviews and AI Mode, core fundamentals remain unchanged. Pages must still be crawlable, indexable, accessible, trustworthy, and competitively relevant. Generative systems operate directly on top of Google&apos;s existing retrieval infrastructure rather than replacing it. If a site suffers from technical indexation debt, slow server response times, orphaned navigation, or thin authority signals, answer engines will never have the opportunity to extract or cite its content. Foundational technical excellence remains the mandatory prerequisite for any advanced answer engine visibility.
              </p>
            </div>

            {/* Semantic Lattice Architecture Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-aeo-cyan" />
                <span>Topic Cluster &amp; Semantic Lattice Architecture</span>
              </h3>
              <p className="text-xs text-white/70">
                A single page cannot claim broad category dominance without supporting concept nodes that reinforce the primary entity across intent corridors:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-neutral-950/50">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-white font-mono uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="p-3.5">Pillar / Sub-Node Category</th>
                      <th className="p-3.5">Target Intent &amp; Focus</th>
                      <th className="p-3.5">Suggested URL Structure</th>
                      <th className="p-3.5">Key Entity Triples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80 font-light">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Core Definition Node</td>
                      <td className="p-3.5">Informational: What is Google AI Search?</td>
                      <td className="p-3.5 font-mono text-aeo-cyan">
                        <Link href="/services/aeo/definition" className="hover:underline">/services/aeo/definition</Link>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-white/70">(Google AI Search, utilises, Gemini RAG)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Comparison Node</td>
                      <td className="p-3.5">Commercial / Educational: Google AI Search vs. Traditional Search</td>
                      <td className="p-3.5 font-mono text-aeo-cyan">
                        <Link href="/services/aeo/comparison" className="hover:underline">/services/aeo/comparison</Link>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-white/70">(AEO, complements, Lexical SEO)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Technical Optimisation Node</td>
                      <td className="p-3.5">Technical / Practical: Structuring Schema for AI Overviews</td>
                      <td className="p-3.5 font-mono text-aeo-cyan">
                        <Link href="/knowledge-hub/articles/google-ai-search" className="hover:underline">/knowledge-hub/articles/google-ai-search</Link>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-white/70">(Atomic Blocks, increases, Passage Extraction)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Local / GEO Node</td>
                      <td className="p-3.5">Commercial: AI Search for Local &amp; Map Discovery</td>
                      <td className="p-3.5 font-mono text-aeo-cyan">
                        <Link href="/services/geo-marketing" className="hover:underline">/services/geo-marketing</Link>
                      </td>
                      <td className="p-3.5 font-mono text-[11px] text-white/70">(Google Maps, feeds, Spatial AI Overviews)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                Section 02 &bull; Search Behaviour &amp; Funnel Dynamics
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                2. How Generative Search Compresses Funnels and Revalues Clicks
              </h2>
            </div>

            <p className="text-base text-white/80 font-light leading-relaxed">
              The integration of generative answers fundamentally changes user click patterns and search funnel mechanics. Instead of browsing a list of links, users increasingly absorb synthesised summaries directly on the result page, shifting organic traffic dynamics across several fronts:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Point 1 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <BarChart3 className="w-4 h-4" />
                  <span>Click Dynamics</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Traditional Click Volume Drops on Informational Queries
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                  Independent tracking shows a clear decline in standard organic clicks whenever an AI overview generates. For example, Pew Research documented that traditional organic clicks took place in only 8% of user sessions when an AI summary was present (down from 15% when absent). Direct clicks on citations embedded inside summaries occurred in roughly 1% of visits.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <Compass className="w-4 h-4" />
                  <span>Intent Collapse</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Conversational Funnel Compression
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                  Research journeys that previously took four or five separate searches across multiple browser tabs are collapsing into single, multi-turn sessions. The extent of this compression depends on commercial risk and query intent: low-risk informational questions resolve almost entirely on-interface, while high-stakes, transactional, or localised requirements still drive deeper evaluation.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Extractable Proof</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  The Strategic Revaluation of Citations
                </h3>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                  Because generative interfaces absorb and resolve generic definitional text without sending referral traffic, standard explainer content has lost its legacy organic utility. Commercial value now centres on extractable proof: proprietary datasets, verified local pricing, primary case studies, and clear first-party methodologies that grounding models must explicitly reference and cite.
                </p>
              </div>
            </div>

            {/* Radial Proof Loop Callout: Module 1 */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-aeo-cyan/15 via-black to-neutral-950 border border-aeo-cyan/40 shadow-2xl relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/20 border border-aeo-cyan/30 text-aeo-cyan text-[11px] font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Real-World Case Study</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Want to see how a structured 90-day entity lattice performed on a fresh Australian domain?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-light">
                    Read our 78-day empirical case study analysing live search indexation, entity graph verification, and citation lift.
                  </p>
                </div>
                <Link
                  href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days"
                  className="px-4 py-2.5 rounded-xl bg-aeo-cyan text-black font-semibold text-xs hover:bg-white transition-all flex items-center gap-1.5 whitespace-nowrap shadow-lg flex-shrink-0"
                >
                  <span>Case Study: AEObility&apos;s First 90 Days</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase tracking-wider">
                Section 03 &bull; Execution Framework
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                3. Practical Adaptation: Relevance and Information Architecture
              </h2>
            </div>

            <p className="text-base text-white/80 font-light leading-relaxed">
              Succeeding in a multi-query, grounded search environment requires refining content for clarity, machine readability, and original value rather than chasing speculative token budgets:
            </p>

            {/* Strategic Action Matrix */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-aeo-cyan" />
                <span>Strategic Action Matrix</span>
              </h3>

              <div className="overflow-x-auto rounded-xl border border-white/10 bg-neutral-950/50">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5 border-b border-white/10 text-white font-mono uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="p-3.5">Strategic Shift</th>
                      <th className="p-3.5">Traditional SEO Focus</th>
                      <th className="p-3.5 text-aeo-cyan">AI Search Commercial Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80 font-light">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Content Focus</td>
                      <td className="p-3.5">Broad definitional &amp; high-volume keyword content</td>
                      <td className="p-3.5 text-white font-medium">Proprietary data, unique research &amp; expert insights</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Optimisation Goal</td>
                      <td className="p-3.5">Single-keyword URL rankings</td>
                      <td className="p-3.5 text-white font-medium">Citation presence across multi-query fan-out</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Authority Signal</td>
                      <td className="p-3.5">Backlink quantity &amp; exact-anchor matching</td>
                      <td className="p-3.5 text-white font-medium">Cross-web entity consensus &amp; verification</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 font-medium text-white">Success Metrics</td>
                      <td className="p-3.5">Rankings &amp; raw organic click volume</td>
                      <td className="p-3.5 text-white font-medium">Citation share, referral quality &amp; conversions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subsection A: Modular Content */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-sm">A.</span>
                <span>Modular, Answer-First Content Structure</span>
              </h3>
              <ul className="space-y-2.5 text-sm md:text-base text-white/80 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-1" />
                  <span><strong>Direct Inverted-Pyramid Framing:</strong> Lead sections with concise, self-contained definitions or solutions directly beneath descriptive subheadings (H2/H3).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-1" />
                  <span><strong>Passage Clarity:</strong> Ensure answers are complete and coherent on a passage level, avoiding artificial padding or duplicate Q&amp;A blocks.</span>
                </li>
              </ul>
            </div>

            {/* Subsection B: Standardised Schema */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-sm">B.</span>
                <span>Standardised Schema &amp; Entity Signals</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                Use standard Schema.org markup where it accurately describes visible content to assist in{' '}
                <Link 
                  href="/knowledge-hub/articles/entity-authority-building" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  building entity authority across knowledge graphs
                </Link>
                , helping search systems disambiguate your core brand facts. While structured data does not guarantee an AI Overview trigger, it clarifies organizational identity and supports rich result eligibility.
              </p>
            </div>

            {/* Subsection C: Entity Consensus */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-sm">C.</span>
                <span>Entity Consensus &amp; Verification Framework</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                Ensure core business information, product specs, and expert credentials are consistently stated across third-party industry databases, review platforms, and structured markup to build strong entity verification across search ecosystems. Maintain a canonical{' '}
                <Link href="/brand-facts" className="text-aeo-cyan hover:underline font-semibold">
                  Brand Facts directory
                </Link>{' '}
                and corroborate entity claims across external authoritative channels like LinkedIn, GitHub, Substack, and industry registries.
              </p>
            </div>

            {/* Subsection D: Measurable Success Metrics */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-sm">D.</span>
                <span>Measurable Success Metrics</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                Replace static keyword rank tracking with grounded, observable KPIs combining Search Console data, brand citation frequency, multi-turn prompt presence, and entity sentiment consistency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-aeo-cyan font-bold">Citation Share</div>
                  <div className="text-xs text-white/70">Sample a representative set of target industry prompts to track brand mention frequency and link citations over time.</div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-aeo-cyan font-bold">Qualified Traffic &amp; Conversion</div>
                  <div className="text-xs text-white/70">Track branded search volume and first-party conversion rates from referral traffic.</div>
                </div>
              </div>
            </div>

            {/* Subsection E: Practitioner Testing */}
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-aeo-cyan font-mono text-sm">E.</span>
                <span>Practitioner Testing &amp; Audit Methodology</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">
                Based on real-world organic search audits, teams should regularly execute multi-turn prompt sets or leverage an{' '}
                <Link 
                  href="/diagnostic" 
                  className="text-aeo-cyan hover:underline font-semibold"
                >
                  AI Search Visibility Diagnostic Engine
                </Link>{' '}
                to map subtopic expansion patterns, identify content gaps where grounding models fail to extract answers, and evaluate citation presence against competitor entity profiles.
              </p>
            </div>

            {/* Commercial Action Corridor: Module 2 */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-black border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-mono font-bold uppercase">
                  <span>Entity Readability Audit</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Ready to Audit Your Entity Readability?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  Move from legacy keyword tracking to structured, RAG-ready machine discovery.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/services/aeo"
                    className="px-4 py-2.5 rounded-xl bg-aeo-cyan text-black font-semibold text-xs hover:bg-white transition-all flex items-center gap-1.5 shadow-lg"
                  >
                    <span>AEO Services &amp; Answer Engine Marketing Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/diagnostic"
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-all flex items-center gap-1.5 border border-white/10"
                  >
                    <span>AI Search Visibility Diagnostic</span>
                  </Link>
                  <Link
                    href="/solutions/aeo-blueprint"
                    className="px-4 py-2.5 rounded-xl bg-white/5 text-aeo-cyan font-mono text-xs hover:bg-white/10 transition-all flex items-center gap-1.5 border border-aeo-cyan/30"
                  >
                    <span>$995 Strategic Blueprint</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-2 mt-8 shadow-xl">
              <h3 className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">
                Key Takeaway
              </h3>
              <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed">
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
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5"
                >
                  <h3 className="text-base font-bold text-white flex items-start gap-2">
                    <span className="text-aeo-cyan font-mono text-xs mt-1">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed pl-6">
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

