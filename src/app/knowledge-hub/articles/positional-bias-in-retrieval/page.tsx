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
  XCircle
} from 'lucide-react';

export const metadata = {
  title: "Positional Bias in AI SEO & Vector Retrieval | AEObility",
  description: "Understand positional bias in AI SEO, dense retrieval, and LLM answer engines. Learn how Atomic Answer Blocks eliminate lost-in-the-middle context degradation.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
  },
};

export default function PositionalBiasArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
        "url": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
        "name": "What Is Positional Bias in Retrieval and Answer Engines?",
        "description": "A technical guide explaining positional bias in retrieval and answer engines, covering dense retrieval, LLM architecture, the retrieval and synthesis bottlenecks, and how to structure content using Atomic Answer Blocks.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#article",
        "headline": "What Is Positional Bias in Retrieval and Answer Engines?",
        "description": "Positional bias is a structural behaviour inside modern search and AI systems that affects how content is retrieved and how answers are generated.",
        "articleSection": [
          "Dense Retrieval & LLM Architecture",
          "Why Positional Bias Matters",
          "The Retrieval Bottleneck",
          "The Synthesis Bottleneck",
          "Atomic Answer Block Architecture",
          "Positional Bias Audit Checklist"
        ],
        "dateModified": "2026-07",
        "datePublished": "2026-07",
        "author": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntityOfPage": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval",
        "image": "https://aeobility.com.au/images/knowledge-hub/positional-bias-retrieval-AEObility.webp",
        "keywords": [
          "positional bias",
          "retrieval bottleneck",
          "synthesis bottleneck",
          "dense retrieval",
          "LLM architecture",
          "atomic answer blocks",
          "AEO",
          "AI search",
          "semantic SEO"
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
            "name": "Large Language Model",
            "sameAs": "https://www.wikidata.org/wiki/Q115305900"
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
            "name": "Knowledge Graph",
            "sameAs": "https://www.wikidata.org/wiki/Q33002955"
          },
          {
            "@type": "Thing",
            "name": "Vector Space Model",
            "sameAs": "https://www.wikidata.org/wiki/Q792224"
          }
        ],
        "mainEntity": {
          "@id": "https://aeobility.com.au/services/aeo#service"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vincent Anthony Baker",
        "alternateName": ["Vince Baker", "Vinnie Baker"],
        "jobTitle": "Senior Information Architect & AEO Strategist",
        "description": "Author of AEObility’s technical guides on retrieval, semantic SEO, and answer engine optimisation.",
        "url": "https://aeobility.com.au/vince-baker",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        },
        "knowsAbout": [
          "Answer Engine Optimisation",
          "Positional Bias",
          "Dense Retrieval",
          "Context Window Engineering",
          "Semantic SEO"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/icons/android-chrome-512x512.png",
        "description": "AEObility optimises Australian small businesses for visibility, understanding and selection across search, maps and generative AI corridors.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Articles & Guides",
            "item": "https://aeobility.com.au/knowledge-hub/articles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Positional Bias in Retrieval",
            "item": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/positional-bias-in-retrieval#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is positional bias in retrieval and answer engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Positional bias is a structural tendency in modern search and AI systems where answer engines give more weight to information at the beginning or end of a text block, while using middle content less effectively."
            }
          },
          {
            "@type": "Question",
            "name": "What are the two bottlenecks behind positional bias?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Positional bias is shaped by two key bottlenecks: the Retrieval Bottleneck, where dense vector models show embedding sensitivity to fact placement, and the Synthesis Bottleneck, where LLMs exhibit lost-in-the-middle context attention dilution."
            }
          },
          {
            "@type": "Question",
            "name": "What is an Atomic Answer Block in AEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An Atomic Answer Block consists of question-based headings, a direct 40–60 word answer placed immediately beneath, and deeper supporting context below. This structure improves retrieval reliability and reduces noisy embeddings."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    { title: "Visibility", desc: "If key facts sit too deep in a page, retrievers are more likely to miss them." },
    { title: "Understanding", desc: "If explanations sit in the middle of long paragraphs, LLMs may use them less reliably." },
    { title: "Selection", desc: "If services are not surfaced clearly, AI systems may be less likely to recommend you." },
    { title: "Local Intent", desc: (
      <>
        Geographic proximity signals must sit at the margins to anchor regional <Link href="/knowledge-hub/geo" className="text-aeo-cyan hover:underline font-medium">GEO and SEO</Link> retrieval in Perth and across Australia.
      </>
    )},
    { title: "Trust", desc: "Key data points and citations buried in middle text suffer from attention dilution." }
  ];

  const commonMistakes = [
    { title: "Burying Key Facts in Middle Text", detail: "Placing core service statements or conclusions in the middle of 400-word paragraphs where LLM attention drops." },
    { title: "Vague, Keyword-Stuffed Headings", detail: "Using generic headings like 'Services Overview' instead of explicit natural language question headings." },
    { title: "Unbounded Section Token Length", detail: "Exceeding 500 tokens per section without subheadings, causing dense vector embedding averaging." },
    { title: "Placing Trust Signals Mid-Page", detail: "Burying statistics, citations, or client results in dense body text instead of section margins." },
    { title: "Fragmented Directives and Exceptions", detail: "Separating core rules from safety conditions across different paragraphs, leading to partial AI extraction." }
  ];

  const checklistSteps = [
    {
      step: "Step 1",
      title: "Map Your Target Queries to H2 or H3 Headings",
      action: "Review headings. Are they vague or keyword stuffed?",
      why: "Headings act as semantic signposts. AI uses them to align sections with user prompts. Use natural language questions.",
      exampleBad: "❌ Heading: 'AEO Services'",
      exampleGood: "✅ Heading: 'What Is Answer Engine Optimisation (AEO)?'"
    },
    {
      step: "Step 2",
      title: "Apply the First 100 Words Rule",
      action: "Check the first sentence beneath each heading.",
      why: "Dense models in recent studies show notable performance drops when key facts appear later rather than earlier in a passage. Early placement often wins.",
      exampleBad: "❌ Direct answer buried after 3 paragraphs of intro fluff",
      exampleGood: "✅ Direct 40-word definition sentence immediately under H2"
    },
    {
      step: "Step 3",
      title: "Measure the Token Budget of Your Sections",
      action: "Check paragraph length.",
      why: "A moderate chunk size helps avoid attention dilution and lost in the middle failures. Keeping blocks within a few hundred tokens gives models a better chance to use the whole section reliably.",
      exampleBad: "❌ 600-word uninterrupted block of text",
      exampleGood: "✅ 150-250 word atomic sections with bullet points"
    },
    {
      step: "Step 4",
      title: "Check for Fragmented Exceptions and Qualifiers",
      action: "Ensure directives and exceptions sit together.",
      why: "If exceptions are separated from the directive, AI may retrieve the directive but miss the safety condition.",
      exampleBad: "❌ Rule on line 5, exception on line 45",
      exampleGood: "✅ Rule and qualification paired in the same Atomic Block"
    },
    {
      step: "Step 5",
      title: "Audit the Placement of Trust Signals",
      action: "Identify where your key data points and citations sit.",
      why: "Place trust signals at the margins, not only in the middle. The middle is the easiest place for AI to miss information, especially in long, undifferentiated blocks.",
      exampleBad: "❌ Citation buried in sentence 14 of middle paragraph",
      exampleGood: "✅ Trust badge or callout placed at section margin"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Layout Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">

          {/* Article Category & Title Header */}
          <div className="space-y-6 border-b border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Technical Reading &bull; Dense Retrieval and LLM Architecture</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Positional Bias in <span className="text-gradient-aeo">AI SEO &amp; Answer Engines</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light font-serif leading-relaxed">
              Positional bias is a structural behaviour inside modern search and AI systems. It shapes how content is retrieved and how answers are formed. In practice, many answer engines give more weight to information at the beginning or end of a text block and often use middle content less effectively. This pattern influences how your business is seen, understood and selected across Search, Maps and AI.
            </p>
            <p className="text-white/80 text-base font-serif font-light leading-relaxed">
              <strong>Positional bias</strong> is the tendency for retrieval and answer engines to favour information at the beginning or end of a passage, reducing the reliability of middle-placed content.
            </p>

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

            {/* Atomic Answer Block for Positional Bias */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-aeo-cyan/30 text-left space-y-2.5 shadow-[0_0_25px_rgba(0,229,255,0.1)] mt-4">
              <div className="flex items-center gap-2 text-aeo-cyan font-mono font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>Atomic Summary: Positional Bias &amp; AI Retrieval Alignment</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-sans leading-relaxed">
                Positional bias is a critical factor in technical <strong>AI SEO</strong> and <strong>AEO SEO</strong>, where vector retrieval algorithms and Large Language Models exhibit attention degradation in the middle of long passages (&ldquo;lost in the middle&rdquo; phenomenon). AEObility mitigates positional bias by deploying 80&ndash;120 token Atomic Answer Blocks in top document quadrants, ensuring high-priority entity facts are captured during initial vector embedding scans and RAG synthesis.
              </p>
            </div>
          </div>

          {/* Definition Callout Block */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900/60 to-transparent border-l-4 border-aeo-cyan rounded-r-2xl space-y-2 shadow-xl">
            <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">Positional Bias in a Sentence</span>
            <p className="text-white text-base font-medium leading-relaxed">
              <strong>Definition:</strong> Positional bias is a retrieval and synthesis pattern where AI systems overweight the start and end of text blocks and underweight the middle, affecting how facts are found, interpreted, and used.
            </p>
          </div>

          {/* Section: What Is Dense Retrieval and LLM Architecture in SEO */}
          <section id="dense-retrieval-llm" className="space-y-6 border-b border-white/10 pb-10 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              What Is Dense Retrieval and LLM Architecture in SEO?
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Dense retrieval and LLM architecture describe how AI systems locate, interpret and present information. <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline font-medium">Dense retrieval</Link> focuses on matching meaning between queries and content. LLM architecture shapes how facts are read and expressed. Together, they influence how your business is understood, ranked and selected across Search, Maps and AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-aeo-cyan font-bold text-base">
                    <Cpu className="w-5 h-5" />
                    <h3>Dense Retrieval</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    Dense retrieval is a method where search systems convert text into numerical vectors. These vectors capture meaning rather than keywords. When someone searches, the system compares the query vector with content vectors and retrieves the closest matches.
                  </p>
                </div>
                <p className="text-xs text-aeo-cyan font-medium pt-3 border-t border-white/5">
                  For SEO, this means your content must be clear, structured and semantically rich so the model can recognise what your business actually does.
                </p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-aeo-cyan font-bold text-base">
                    <Network className="w-5 h-5 text-aeo-cyan" />
                    <h3>LLM Architecture</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    LLM architecture refers to how large language models process and generate text. These models read your content, interpret relationships between ideas and decide which facts matter most.
                  </p>
                </div>
                <p className="text-xs text-white/70 font-light pt-3 border-t border-white/5">
                  Their behaviour influences how answers are formed in AI search, especially when your content appears in summaries, overviews or conversational results.
                </p>
              </div>
            </div>

            {/* Why This Matters for SEO */}
            <div className="p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-white/15 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-aeo-cyan" />
                <span>Why This Matters for SEO</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-aeo-cyan bg-white/5 p-4 rounded-xl border border-white/5">
                <div>&bull; <strong>Dense retrieval</strong> determines what gets retrieved.</div>
                <div>&bull; <strong>LLM architecture</strong> determines what gets said.</div>
              </div>

              <p className="text-xs text-white/80 font-medium">Together, they shape:</p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                  <span>How your <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline">entity authority</Link> is recognised</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                  <span>How your facts are interpreted</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                  <span>How your business is ranked or selected</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan shrink-0" />
                  <span>How your content appears in AI‑generated answers</span>
                </li>
              </ul>

              <p className="text-xs text-white/70 font-light pt-2 border-t border-white/10 leading-relaxed">
                This is why AEObility focuses on <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-medium">entity clarity</Link>, <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-medium">structured content</Link> and positional bias. These elements help retrieval systems find you and help LLMs describe you accurately.
              </p>
            </div>
          </section>

          {/* Brand Guidelines Quote Box */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-purple-900/10 to-transparent border border-aeo-cyan/20 rounded-2xl space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-aeo-cyan flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>AEObility Core Purpose</span>
            </div>
            <blockquote className="text-sm md:text-base text-white/90 font-light leading-relaxed italic font-serif">
              “AEObility helps your business appear, make sense, and stand out across Search, Maps and AI.”
            </blockquote>
            <p className="text-xs text-white/60 font-light">
              Positional bias is one of the primary technical reasons this work is essential for Australian businesses.
            </p>
          </div>

          {/* Main Diagram Banner */}
          <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/knowledge-hub/positional-bias-retrieval-AEObility.webp"
              alt="Positional bias architecture diagram depicting AI search dense vector retrieval, LLM context window attention dilution, primacy and recency spikes, and Answer Engine Optimisation (AEO) entity salience by AEObility in Perth, Western Australia."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Section 1: Why Positional Bias Matters for Australian Businesses */}
          <div id="why-it-matters" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Why Positional Bias Matters for Australian Businesses
              </h2>
            </div>

            {/* Direct Answer Atomic Block for Featured Snippets */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">Impact on Search Visibility</span>
              <p className="text-sm text-white/90 font-medium leading-relaxed">
                Positional bias directly dictates whether an AI search system extracts your core business facts or skips them entirely. When key credentials sit in the middle of long pages, neural retrievers and LLMs exhibit primacy and recency preference, causing hidden content to suffer from attention dilution.
              </p>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Positional bias touches all areas of <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">answer engine optimisation</Link> including <strong>visibility, understanding, selection, local intent and trust</strong>.
            </p>

            {/* Value Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5 hover:border-aeo-cyan/20 transition-all">
                  <div className="text-xs font-bold text-aeo-cyan uppercase tracking-wider flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed font-serif">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan" />
                <span>The Core Purpose of AEO</span>
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
                <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline">Answer Engine Optimisation (AEO)</Link> exists to counter these effects. It structures your content so machines can read it, interpret it and use it with greater confidence.
              </p>
            </div>
          </div>

          {/* Section 2: The Two Bottlenecks Behind Positional Bias */}
          <div id="two-bottlenecks" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Two Bottlenecks Behind Positional Bias
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Positional bias is shaped by two key bottlenecks inside the search pipeline: the <strong>retrieval bottleneck</strong> and the <strong>synthesis bottleneck</strong>.
            </p>

            {/* Bottleneck Flowchart SVG */}
            <div className="p-6 bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-4">
              <span className="text-xs text-aeo-cyan font-mono font-bold uppercase tracking-wider">The Two Bottlenecks Architecture Flow</span>
              <svg viewBox="0 0 760 160" className="w-full h-auto text-xs font-mono max-w-xl">
                <g transform="translate(10, 60)">
                  <rect x="0" y="0" width="120" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="60" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">User Query</text>
                </g>
                <line x1="130" y1="80" x2="170" y2="80" stroke="#00cdd8" strokeWidth="2" strokeDasharray="3 3" />
                <g transform="translate(170, 60)">
                  <rect x="0" y="0" width="180" height="40" rx="8" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                  <text x="90" y="18" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Bottleneck 1</text>
                  <text x="90" y="32" textAnchor="middle" fill="#ffffff" fontSize="10">Retrieval (Embedding)</text>
                </g>
                <line x1="350" y1="80" x2="390" y2="80" stroke="#00cdd8" strokeWidth="2" strokeDasharray="3 3" />
                <g transform="translate(390, 60)">
                  <rect x="0" y="0" width="190" height="40" rx="8" fill="#3b0764" stroke="#c084fc" strokeWidth="1.5" />
                  <text x="95" y="18" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">Bottleneck 2</text>
                  <text x="95" y="32" textAnchor="middle" fill="#ffffff" fontSize="10">Synthesis (Lost in Middle)</text>
                </g>
                <line x1="580" y1="80" x2="620" y2="80" stroke="#00cdd8" strokeWidth="2" strokeDasharray="3 3" />
                <g transform="translate(620, 60)">
                  <rect x="0" y="0" width="130" height="40" rx="8" fill="#18181b" stroke="#00cdd8" strokeWidth="1.5" />
                  <text x="65" y="24" textAnchor="middle" fill="#00cdd8" fontSize="11" fontWeight="bold">AI Citation</text>
                </g>
              </svg>
            </div>

            {/* Bottleneck 1: Retrieval */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-aeo-cyan/20 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
                <Search className="w-4 h-4" />
                <span>Bottleneck 1 &bull; Passage Ingestion</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                1. The Retrieval Bottleneck
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                Dense vector models and late interaction models can be sensitive to where a fact sits inside a passage. Research indicates that these models often perform better when relevant information appears near the beginning of a text block rather than later. One explanation is that vector search models map text to high dimensional coordinates. When key facts are buried deep inside a passage, the opening sentences influence the embedding and the passage can appear less relevant.
              </p>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs text-white/70 leading-relaxed font-serif">
                <strong>Model Dynamics:</strong> Keyword matching models like BM25 and full interaction rerankers tend to be more robust to this variation, but modern answer engines often rely heavily on neural retrievers. That is why your most important information should sit near the top of each section where retrievers are most likely to recognise it.
              </div>
            </div>

            {/* Bottleneck 2: Synthesis */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-purple-400/20 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>Bottleneck 2 &bull; LLM Synthesis</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                2. The Synthesis Bottleneck
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                The <strong>lost in the middle</strong> effect can impair an LLM’s ability to find, verify and use facts from its context window. Even with large context windows, attention is not uniform. Experiments show a distinctive U-shaped pattern where models perform best when relevant information is at the beginning or end of a sequence and less well when it sits in the middle.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  When information is buried in the middle of a long document, several patterns appear in practice:
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-red-400 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      <span>Attention Dilution</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      The model’s attention is spread across surrounding text, making it harder to access or reason over hidden facts.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Weaker Reference Identification</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      As prompt lengths increase, extraction and reference identification can degrade.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-purple-400 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>Increased Hallucination Risk</span>
                    </div>
                    <p className="text-xs text-white/70 font-light font-serif">
                      When the model cannot easily locate the exact context, its reasoning can break down and hallucinations may rise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-aeo-cyan/10 to-transparent border border-aeo-cyan/30 rounded-xl text-xs text-white font-medium">
                <strong>AEObility Rule:</strong> This is why AEObility structures content for the margins, not the middle.
              </div>
            </div>
          </div>

          {/* Section 3: How to Engineer Content Around Positional Bias */}
          <div id="engineering-content" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                How to Engineer Content Around Positional Bias
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              To work effectively with both bottlenecks, you need to design your content for the margins of each section.
            </p>

            {/* Direct Answer Question Card */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white">
                Should You Put the Direct Answer at the Top of Every Section?
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed font-serif">
                <strong>In most cases, yes.</strong> In the era of Answer Engine Optimisation, placing the direct answer at the top of each section is a strong default. It significantly increases the chances that your expertise will be extracted, cited and used by AI systems.
              </p>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                Traditional SEO often rewarded long, narrative pages. AEO shifts the emphasis towards clear, modular sections. You want to keep your most important content out of the silent middle and structure each section as an <Link href="/knowledge-hub/semantic-seo" className="text-aeo-cyan hover:underline font-semibold">Atomic Answer Block</Link>.
              </p>
            </div>

            {/* Recommended Schemas Box */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase">Recommended Schemas to Support Positional Alignment</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {["FAQPage", "Article", "Organisation", "BreadcrumbList", "LocalBusiness"].map((schemaItem, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                    {schemaItem}
                  </span>
                ))}
              </div>
            </div>

            {/* Atomic Answer Block Blueprint */}
            <div className="p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-aeo-cyan/20 rounded-2xl space-y-4">
              <div className="text-xs uppercase tracking-widest font-bold text-aeo-cyan flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>The Atomic Answer Block Architecture</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">1</span>
                    <span>Question-Based Headings</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Match natural language queries people speak into AI assistants.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">2</span>
                    <span>Lead with Direct Answer</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Place a concise, 40 to 60 word definition or explanation directly beneath the heading.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-[10px]">3</span>
                    <span>Provide Deeper Context</span>
                  </div>
                  <p className="text-xs text-white/70 font-light font-serif">
                    Add supporting bullets, examples or narrative details below.
                  </p>
                </div>
              </div>

              <p className="text-xs text-white/50 pt-2 font-serif">
                <strong>Why this structure works:</strong> AI systems scan early, retrieval models show positional bias, and atomic blocks reduce noisy, averaged embeddings.
              </p>
            </div>
          </div>

          {/* Section: Common Mistakes in Content Placement */}
          <section id="common-mistakes" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Common Mistakes in Content Placement</h2>
            </div>
            <p className="text-white/80 leading-relaxed font-light">
              Avoid these 5 frequent pitfalls that trigger lost-in-the-middle context dilution and dense retrieval misses:
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

          {/* Section 4: The Positional Bias Audit Checklist */}
          <div id="audit-checklist" className="space-y-6 scroll-mt-24 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/30 flex items-center justify-center text-aeo-cyan font-bold text-sm">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                The Positional Bias Audit Checklist
              </h2>
            </div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed font-serif">
              Use this checklist to audit any page on your site, complete with real-world examples:
            </p>

            <div className="space-y-4">
              {checklistSteps.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-3 hover:border-aeo-cyan/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-xs font-bold">
                        {item.step}
                      </span>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <CheckSquare className="w-4 h-4 text-aeo-cyan/60 hidden sm:block" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-white/5 rounded-lg space-y-1">
                      <div className="text-[10px] font-bold text-aeo-cyan uppercase tracking-wider">Audit Action</div>
                      <p className="text-xs text-white/90 font-light">{item.action}</p>
                    </div>

                    <div className="p-3 bg-white/5 rounded-lg space-y-1">
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Why It Matters</div>
                      <p className="text-xs text-white/80 font-light font-serif">{item.why}</p>
                    </div>
                  </div>

                  {/* Concrete Good vs Bad Example */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-white/5 text-xs font-mono">
                    <div className="p-2.5 rounded bg-red-950/20 border border-red-500/20 text-red-300">
                      {item.exampleBad}
                    </div>
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300">
                      {item.exampleGood}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Audit CTA Banner */}
            <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-aeo-cyan/30 rounded-2xl text-center space-y-4 shadow-xl">
              <h3 className="text-xl md:text-3xl font-extrabold text-white">
                Audit Your Content for <span className="text-gradient-aeo">Positional Bias</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
                Want our team to review your website’s passage structure, heading alignment, and token chunking against neural search models?
              </p>
              <div className="pt-2">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aeo-cyan text-black font-extrabold text-sm hover:bg-white transition-all shadow-lg hover:shadow-aeo-cyan/20"
                >
                  <span>Get Your Free AI Search Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tools & Resources Section */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-aeo-cyan" />
              <h2 className="text-2xl font-bold text-white">Tools &amp; Resources for Positional Audit</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/diagnostic" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AI Search Visibility Audit</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Run a passage structure check and test vector retrieval performance for your brand.
                </p>
              </Link>

              <Link href="/knowledge-hub/semantic-seo" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Semantic SEO &amp; Atomic Blocks</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Learn how to construct Atomic Answer Blocks and schema microdata.
                </p>
              </Link>

              <Link href="/knowledge-hub/articles/entity-authority-building" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Entity Authority Guide</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Discover why AI search ranks entities instead of keyword pages.
                </p>
              </Link>

              <Link href="/solutions/aeo-blueprint" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>90-Day AEO Implementation Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  A structured roadmap for content chunking, entity salience, and LLM selection.
                </p>
              </Link>

              <Link href="/services/aeo/procedures" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO Engineering Procedures</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Actionable technical procedures for chunking token density and passages.
                </p>
              </Link>

              <Link href="/services/aeo/comparison" className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-aeo-cyan/40 transition-all space-y-2 block">
                <h3 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>AEO vs SEO Comparison</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Evaluate how passage retrieval contrasts with legacy keyword ranking.
                </p>
              </Link>
            </div>
          </section>

          {/* Technical FAQ Section */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Technical FAQ</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Positional Bias Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What is positional bias in retrieval and answer engines?</h4>
                <p className="text-xs text-white/70 leading-relaxed font-serif">
                  Positional bias is the tendency for retrieval and answer engines to favour information at the beginning or end of a passage, reducing the reliability of middle-placed content.
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What are the two bottlenecks behind positional bias?</h4>
                <p className="text-xs text-white/70 leading-relaxed font-serif">
                  Positional bias is shaped by two key bottlenecks: the Retrieval Bottleneck (dense vector models embedding sensitivity) and the Synthesis Bottleneck (LLM lost-in-the-middle context attention dilution).
                </p>
              </div>

              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">What is an Atomic Answer Block in AEO?</h4>
                <p className="text-xs text-white/70 leading-relaxed font-serif">
                  An <a href="https://www.linkedin.com/pulse/aeo-age-generative-search-understanding-ai-query-fan-out-vinnie-baker-ivncc/" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-semibold">Atomic Answer Block</a> consists of question-based headings matching natural language queries, a direct 40 to 60 word answer lead directly beneath, and supporting context below.
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Operational Service Bridge */}
          <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-aeo-purple/10 to-transparent border border-aeo-cyan/30 rounded-2xl my-8">
            <div className="text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold mb-2">Operational Service Bridge</div>
            <h3 className="text-lg font-bold text-white font-sans mb-2">Eliminating Positional Bias with Professional AEO</h3>
            <p className="text-sm text-white/80 font-serif leading-relaxed mb-4">
              Mitigating primacy and recency spikes requires restructuring text blocks into crisp answer fragments. Businesses can implement dedicated <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">enterprise AEO services</Link> and an <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">operational AEO architecture</Link> to protect content density across deep retrieval pipelines.
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
          <section className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-aeo-cyan/50 shrink-0 shadow-lg">
              <Image
                src="/images/about/Profile-Picture-Vinnie.png"
                alt="Vince Baker - AEO &amp; Semantic Search Specialist Perth"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-white">Vince Baker</h3>
                <span className="text-xs text-aeo-cyan font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">AEO &amp; Semantic Search Specialist</span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Vince Baker is an Answer Engine Optimisation (AEO) consultant based in Perth, Western Australia. He specialises in positional bias audits, dense retrieval vector engineering, and context window optimisation for Australian enterprises.
              </p>
              <div className="pt-1 text-xs">
                <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Entity Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles Navigation */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link 
              href="/knowledge-hub/articles/retrieval-augmented-generation" 
              className="group text-xs font-semibold text-white/60 hover:text-aeo-cyan transition-colors flex items-center gap-1"
            >
              &larr; Prev: RAG &amp; Answer Engines
            </Link>
            
            <Link 
              href="/knowledge-hub/articles" 
              className="text-xs font-semibold text-aeo-cyan hover:text-white transition-colors"
            >
              All Articles &amp; Technical Reading &rarr;
            </Link>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
