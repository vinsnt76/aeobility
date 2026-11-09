import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { ArrowRight, AlertTriangle, CheckCircle2, Cpu, ShieldCheck, FileText, HelpCircle, XCircle } from 'lucide-react';

export const metadata = {
  title: "What is AEO in Digital Marketing? Meaning & Concepts | AEObility",
  description: "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/definition",
  },
};

export default function AEODefinitionPage() {
  const faqData = [
    {
      question: "What does AEO mean in digital marketing?",
      answer: "Answer Engine Optimisation (AEO) is the practice of making business information easy for AI-powered search and answer systems to find, interpret, and use. It combines clear, evidence-backed content, well-defined entities, structured data, accessible technical implementation, and logical internal linking."
    },
    {
      question: "How is AEO different from SEO?",
      answer: "Traditional SEO focuses on organic discoverability, technical foundations, and ranking pages across search engine results pages (SERPs). AEO builds upon these SEO foundations by structuring content into concise answer-ready passages and explicit schema, improving how business information is retrieved and represented in AI-mediated answers."
    },
    {
      question: "Why does AEO matter for businesses today?",
      answer: "Consumers increasingly ask conversational questions across AI search interfaces, AI Overviews, maps, and virtual assistants. Structuring information clearly helps ensure that AI systems accurately understand your services, reducing ambiguity and improving eligibility for citations where engines cite web sources."
    },
    {
      question: "How do modern AI systems retrieve and process content?",
      answer: "AI search platforms deploy varied architectures. They may retrieve and synthesise passages, full pages, structured data, and trusted third-party sources using vector embeddings, semantic matching, and traditional lexical retrieval pipelines."
    },
    {
      question: "What is semantic chunking?",
      answer: "Semantic chunking is the practice of structuring text into self-contained units of meaning that convey complete facts, qualifications, and evidence together. Keeping factual context intact reduces ambiguity during machine retrieval."
    },
    {
      question: "What are embeddings and why are they important?",
      answer: "Embeddings are mathematical vector representations of language meaning. They allow search and AI systems to evaluate conceptual relationships alongside keyword matches, helping content surface when user phrasing varies."
    },
    {
      question: "Does structured data guarantee AI citations or rankings?",
      answer: "No. Structured data makes entity relationships more explicit for systems that support it. It improves interpretability and eligibility, but no provider can guarantee inclusion, rich results, or direct recommendations."
    },
    {
      question: "Is AEO relevant for Australian small businesses?",
      answer: "Yes. Clear entity metadata, verified business credentials, and structured service-area details help local search engines and AI assistants accurately interpret regional relevance for queries across Perth and Australia."
    },
    {
      question: "Where should a business start with AEO?",
      answer: "Start with a technical baseline audit to assess how search engines and AI systems interpret your current web footprint. Then structure priority service content into self-contained answer blocks, implement explicit Schema.org markup, and establish descriptive internal links."
    },
    {
      question: "Can I do GEO myself or do I need to hire someone, and what does a good GEO engagement actually include?",
      answer: "Basic GEO execution can be handled internally, including auditing directory listings, aligning business NAP details, and writing concise answers to common buyer questions. Complex technical requirements, like engineering connected JSON-LD knowledge graphs, structuring content for semantic chunking, and reconciling cross-platform entity references, typically require specialist expertise. A thorough GEO engagement includes a multi-engine visibility audit, validated schema deployment, atomic content restructuring, brand facts corroboration, and complete IP handover with zero retainer lock-in."
    },
    {
      question: "How do I evaluate a GEO agency?",
      answer: "Assess potential GEO partners on their engineering transparency and technical proof. Verify whether they maintain machine-readable schema and an open brand-facts ledger on their own website, and check their agent-readiness scores on third-party benchmarks like isitagentready.com. Avoid agencies that propose open-ended monthly retainers without clear sprint deliverables or make unsubstantiated guarantees regarding AI rankings. Reputable specialists deliver fixed-scope sprints with documented validation logs."
    },
    {
      question: "What are the top indicators or red flags that a business needs GEO help instead of just SEO?",
      answer: "Key signs that traditional SEO is no longer sufficient include: organic web visits dropping despite stable keyword positions because AI Overviews answer searchers directly; competitors earning citations in ChatGPT and Perplexity recommendations while your brand is omitted; generative engines returning incorrect business facts or outdated rates; and prospective clients using conversational, constraint-heavy prompts that require semantic retrieval rather than traditional keyword indexing."
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Audit & Entity Mapping",
      desc: "Review digital assets to verify how search engines and AI assistants interpret your brand entity, core offerings, and credentials. Identify structural gaps across retrieval signals."
    },
    {
      step: "02",
      title: "Self-Contained Content Structuring",
      desc: "Use self-contained answer blocks of the length needed to state the answer, scope, evidence, and constraints clearly under descriptive subheadings."
    },
    {
      step: "03",
      title: "Explicit Structured Data Deployment",
      desc: "Implement nested DefinedTerm, Service, LocalBusiness, and FAQ schema. Structured data clarifies entity relationships for eligible systems, supporting interpretation without guaranteeing citations."
    },
    {
      step: "04",
      title: "Descriptive Internal Linking",
      desc: "Build descriptive internal links that connect related topics and services, establishing logical authority paths for users and web crawlers."
    },
    {
      step: "05",
      title: "Citation & Referral Telemetry",
      desc: "Track brand citations, AI Overview appearances, and referral traffic across supported platforms over time, refining passages where gaps emerge."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": "https://aeobility.com.au/services/aeo/definition#definedterm",
        "name": "Answer Engine Optimisation",
        "alternateName": "AEO",
        "description": "The practice of making business information easy for AI-powered search and answer systems to find, interpret, and use through evidence-backed content, explicit entity definitions, and structured data.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "@id": "https://www.wikidata.org/wiki/Q124314457",
          "name": "Wikidata Knowledge Base"
        },
        "sameAs": "https://www.wikidata.org/wiki/Q124314457"
      },
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/services/aeo/definition#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://aeobility.com.au/services/aeo/definition#webpage",
          "url": "https://aeobility.com.au/services/aeo/definition",
          "name": "What is AEO in Digital Marketing? Meaning & Concepts"
        },
        "headline": "What is AEO in Digital Marketing? Meaning & Concepts",
        "description": "Discover the definition of Answer Engine Optimisation (AEO) and learn how machine learning models read, index, and cite business information.",
        "inLanguage": "en-AU",
        "mainEntityOfPage": "https://aeobility.com.au/services/aeo/definition",
        "datePublished": "2026-08-31T10:56:41+08:00",
        "dateModified": "2026-08-31T11:20:00+08:00",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/#vincebaker",
          "name": "Vincent Anthony Baker",
          "alternateName": ["Vince Baker", "Vinnie Baker"],
          "url": "https://aeobility.com.au/vince-baker"
        },
        "publisher": {
          "@type": "ProfessionalService",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "about": [
          {
            "@id": "https://aeobility.com.au/services/aeo/definition#definedterm"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Vector Space",
            "sameAs": "https://www.wikidata.org/wiki/Q189569"
          },
          {
            "@type": "Thing",
            "name": "Retrieval-Augmented Generation",
            "sameAs": "https://www.wikidata.org/wiki/Q124314457"
          }
        ],
        "articleSection": [
          "What is AEO in Digital Marketing?",
          "What AEO is not",
          "Why AEO matters for your business",
          "The core principles of Answer Engine Optimisation",
          "AEO vs SEO comparison",
          "How to Implement AEO: 5-Step Technical Framework",
          "A practical retrieval example",
          "Real-World Proof: The Baby Bento Case Study",
          "How classic search compares to AI system retrieval",
          "Common AEO Implementation Mistakes"
        ],
        "keywords": [
          "AEO",
          "Answer Engine Optimisation",
          "AEO marketing",
          "semantic retrieval",
          "what is AEO in digital marketing",
          "AEO vs SEO meaning",
          "dense retrieval",
          "embeddings",
          "vector similarity",
          "passage-level extraction"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/services/aeo/definition#webpage",
        "url": "https://aeobility.com.au/services/aeo/definition",
        "name": "What is AEO in Digital Marketing? Meaning & Concepts",
        "breadcrumb": {
          "@id": "https://aeobility.com.au/services/aeo/definition#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/services/aeo/definition#breadcrumb",
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AEO Services",
            "item": "https://aeobility.com.au/services/aeo"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "What is AEO (Definition)",
            "item": "https://aeobility.com.au/services/aeo/definition"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/services/aeo/definition#faq",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "VideoObject",
        "@id": "https://aeobility.com.au/services/aeo/definition#video",
        "name": "What is AEO in Digital Marketing? Meaning & Concepts",
        "description": "A conceptual overview of Answer Engine Optimisation (AEO), semantic retrieval, embedding models, and passage chunking.",
        "thumbnailUrl": [
          "https://img.youtube.com/vi/ghX_txnK7WU/hqdefault.jpg"
        ],
        "uploadDate": "2026-08-16",
        "duration": "PT1M1S",
        "contentUrl": "https://www.youtube.com/watch?v=ghX_txnK7WU",
        "embedUrl": "https://www.youtube.com/embed/ghX_txnK7WU",
        "url": "https://aeobility.com.au/services/aeo/definition"
      }
    ]
  };

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

      <Navbar subnavItems={HUB_SUBNAV_MAPS.aeo} />
      <Breadcrumbs />

      {/* Main Container with Defensive Bottom Padding */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 pb-32 sm:pb-24 w-full flex flex-col gap-8">
        <section className="flex flex-col gap-8">
          <div>
            {/* Main Header Illustration */}
            <div className="w-full relative rounded-2xl overflow-hidden mb-3 border border-white/10 bg-white/[0.02]">
              <Image 
                src="/images/services/what-is-definiton-of-aeo_AEObility.webp" 
                alt="Answer Engine Optimisation (AEO) conceptual diagram showing semantic chunking, embeddings, and vector retrieval signals." 
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <p className="text-[11px] text-white/50 italic mb-8 font-light">
              Figure 1: A conceptual model of multi-engine retrieval pathways. Actual retrieval, ranking, and synthesis cycles are platform-specific and depend on diverse, platform-managed evidence signals.
            </p>
            
            {/* Hero Trust Signals */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/60 mb-4 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-aeo-cyan font-semibold">
                Technical Reference
              </span>
              <span>Author: Vince Baker, Founder &amp; Principal Consultant</span>
              <span>&bull;</span>
              <span>Last Reviewed: Aug 31, 2026</span>
              <span>&bull;</span>
              <Link href="/diagnostic" className="text-aeo-cyan hover:underline inline-flex items-center gap-1">
                <span>Methodology Baseline</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              What is AEO in Digital Marketing? <span className="text-gradient-aeo">Meaning & Concepts</span>
            </h1>

            {/* Primacy Token Density Direct-Answer Hero Block */}
            <div className="p-6 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl mb-6 shadow-lg">
              <p className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-aeo-cyan" />
                <span>Executive Summary &bull; Core Definition</span>
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                Answer Engine Optimisation (AEO) is the practice of making business information easy for AI-powered search and answer systems to find, interpret, and use. It combines clear, evidence-backed content, well-defined entities, structured data, accessible technical implementation, and logical internal linking. AEO can improve a site&apos;s eligibility to appear in AI-generated answers and citations, but no provider can guarantee inclusion or recommendation.
              </p>
            </div>

            {/* Corporate Provenance Attribution Byline (Positioned below the extractable block) */}
            <p className="text-xs text-slate-400 italic font-mono mb-6">
              Published by AEObility, an independent B2B digital consultancy based in Dianella, Perth, Western Australia (ABN: 61 029 803 255).
            </p>

            {/* What AEO is NOT (Epistemic Boundary Block) */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl mb-8 space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>What AEO is not</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/70 font-light leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">&times;</span>
                  <span><strong className="text-white font-medium">Not a replacement for SEO:</strong> It is an extension of technical and content SEO, relying on the same foundations of fast load speeds, mobile responsiveness, and high-quality content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">&times;</span>
                  <span><strong className="text-white font-medium">Not a visibility guarantee:</strong> It does not guarantee a citation, an AI Overview feature, or a conversational recommendation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">&times;</span>
                  <span><strong className="text-white font-medium">Not just schema or keyword repetition:</strong> Simply adding FAQ schema or repeating keywords without adding useful context fails modern retrieval tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">&times;</span>
                  <span><strong className="text-white font-medium">Not limited to a single retrieval model:</strong> AI search products use highly diverse, platform-specific approaches to parse, rank, and synthesise web sources.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-white/5 text-xs text-white/60 font-light flex items-center justify-between flex-wrap gap-2">
                <span>Looking for clear sprint deliverables and pricing?</span>
                <Link href="/services/aeo/costs-timing" className="text-aeo-cyan hover:underline font-medium">
                  Review our fixed-scope AEO service costs &rarr;
                </Link>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-light mb-8">
              Answer Engine Optimisation modifies how content is organised to align with AI search interfaces, AI Overviews, maps, and conversational assistants. To implement these frameworks systematically, businesses utilise structured <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services</Link> to clarify entity relationships and improve retrievability.
            </p>

            {/* Core Principles */}
            <div className="space-y-6 mb-10">
              <h2 className="text-xl font-bold mb-2">The core principles of Answer Engine Optimisation</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                AEO focuses on how modern machine learning systems read, index, and cite business information. Five practical concepts underpin the discipline:
              </p>

              {/* Block 1 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">1. Search has expanded from whole pages to passage retrieval</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>SEO helps search engines discover, understand, and rank pages. AI search systems may additionally retrieve passages, structured data, and other trusted sources to compose an answer, so each important section should state a complete, well-scoped fact.</p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">2. How modern AI systems interpret content</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>AI models map text into <strong className="text-white font-medium">embeddings</strong> (mathematical vector representations of language meaning). They evaluate conceptual relationships alongside lexical signals, allowing engines to recognise related entity concepts even when user phrasing differs.</p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">3. Semantic chunking and clear content boundaries</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>Well-scoped sections reduce ambiguity by keeping the claim, subject, location, qualification, and supporting evidence together. This allows retrieval systems to extract relevant facts with minimal distortion.</p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-purple border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">4. Query expansion and multi-intent retrieval</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>When a user asks a multifaceted question, AI engines may generate multiple internal sub-queries across definitions, specifications, geographic constraints, and procedures. Structuring content to answer these explicit needs improves overall retrievability.</p>
                </div>
              </div>

              {/* Block 5 */}
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl border-l-aeo-cyan border-l-2">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">5. Context clarity and evidence verification</h3>
                <div className="space-y-2 text-sm text-white/60 leading-relaxed font-light">
                  <p>Structured data makes important relationships (such as your business, service, location, offer, and FAQ) more explicit for systems that support it. It improves clarity, but does not guarantee a rich result, citation, or recommendation.</p>
                </div>
              </div>
            </div>

            {/* AEO vs SEO Comparison Table */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">AEO vs SEO: Complementary Disciplines</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
                AEO is an AI-search-oriented extension of technical and content SEO rather than a replacement discipline. Both work together across the discovery lifecycle.
              </p>
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-sm text-white/70">
                  <thead className="bg-white/5 text-white/90">
                    <tr>
                      <th className="px-6 py-4 font-bold border-b border-white/10">Area</th>
                      <th className="px-6 py-4 font-bold border-b border-white/10">SEO</th>
                      <th className="px-6 py-4 font-bold border-b border-white/10 text-aeo-cyan">AEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Primary Goal</td>
                      <td className="px-6 py-4">Improve organic discoverability across search engine results pages.</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">Improve how clearly business information can be retrieved and represented in AI-mediated answers.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Key Assets</td>
                      <td className="px-6 py-4">Crawlable pages, technical foundations, useful content, internal links, and authority.</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">The same SEO foundations, plus concise answer-ready sections, explicit entities, structured data, and sourceable evidence.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-white/80">Typical Outputs</td>
                      <td className="px-6 py-4">Organic listings, rich results, local map visibility, and organic search traffic.</td>
                      <td className="px-6 py-4 text-aeo-cyan/90 font-semibold">AI answer mentions, citations, summaries, and referral traffic where platforms support external links.</td>
                    </tr>
                    <tr className="bg-white/[0.01]">
                      <td className="px-6 py-4 font-medium text-white/80">Important Caveat</td>
                      <td className="px-6 py-4 text-white/60">Search rankings are not guaranteed.</td>
                      <td className="px-6 py-4 text-amber-300/80 font-medium">Citations and system recommendations are not guaranteed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5-Step Practical Implementation Framework */}
            <div className="mb-10 space-y-6">
              <h2 className="text-xl font-bold">How to Implement AEO: 5-Step Practical Framework</h2>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                To prepare website content for modern AI retrieval systems, follow this 5-step engineering framework:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {implementationSteps.map((s, idx) => (
                  <div key={idx} className={`p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-aeo-cyan uppercase tracking-wider">{s.step} &bull; {s.title}</span>
                      {idx === 0 && (
                        <Link href="/diagnostic" className="text-[10px] text-aeo-cyan hover:underline font-mono">
                          Run Diagnostic &rarr;
                        </Link>
                      )}
                      {idx === 3 && (
                        <Link href="/solutions/aeo-blueprint" className="text-[10px] text-aeo-purple hover:underline font-mono">
                          Explore Blueprint &rarr;
                        </Link>
                      )}
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-light">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-white/[0.01] border border-white/10 rounded-xl text-xs text-white/70 flex items-center justify-between flex-wrap gap-3">
                <span>Ready to deploy structured AEO across your business site?</span>
                <div className="flex gap-3 font-semibold">
                  <Link href="/solutions/aeo-blueprint" className="text-aeo-cyan hover:underline">
                    Strategic Blueprint &rarr;
                  </Link>
                  <Link href="/contact" className="text-aeo-purple hover:underline">
                    Book an AEO Content &amp; Schema Audit &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Practical Example */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">A practical retrieval example</h2>
              <div className="p-5 bg-white/[0.01] border border-white/10 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-aeo-purple"></div>
                <div className="space-y-4 text-sm text-white/80 font-light leading-relaxed">
                  <p>
                    When a user asks an AI assistant, <strong className="text-white font-medium">&ldquo;Who provides commercial electrical services in Perth?&rdquo;</strong> the model transforms the query into semantic vectors and searches indexed business passages.
                  </p>
                  <p>
                    Clear, structured information may improve retrievability. Whether a system cites or recommends a business depends on the platform, query intent, source quality, and competing evidence across the wider web.
                  </p>
                </div>
              </div>
            </div>

            {/* Baby Bento Case Study */}
            <div className="mb-10 p-6 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-aeo-cyan/5 border border-white/10 rounded-2xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-aeo-cyan uppercase px-2.5 py-1 bg-aeo-cyan/10 border border-aeo-cyan/20 rounded-full inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Real-World Proof &bull; Case Study
                </span>
                <Link 
                  href="/knowledge-hub/case-studies/baby-bento" 
                  className="text-xs font-semibold text-aeo-cyan hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h2 className="text-xl font-bold text-white">Case Study: E-Commerce Structure &amp; AI Answer Retrievability</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light text-white/70 pt-2">
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-aeo-purple font-mono block">Background</span>
                  <p>Baby Bento, an Australian e-commerce retail brand, sought to improve product visibility for conversational direct-answer queries around lunchware safety and sizing.</p>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-aeo-cyan font-mono block">AEO Strategy</span>
                  <p>Refactored product descriptions into concise answer blocks for material safety questions, and deployed nested Product and FAQ structured data.</p>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-1.5">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px] text-emerald-400 font-mono block">Monitored Results</span>
                  <p>Achieved measurable improvements in AI answer mentions and category search visibility across priority product queries during the monitored 60-day sprint.</p>
                </div>
              </div>
              <p className="text-[11px] text-white/40 italic pt-1">
                Results vary; see methodology and measurement period in <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline">Baby Bento case study</Link>.
              </p>
            </div>

            {/* Video Overview & Breakdown */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">How classic search compares to AI system retrieval</h2>
              
              {/* YouTube Video Embedded */}
              <div className="w-full relative rounded-2xl overflow-hidden mb-4 border border-white/10 bg-neutral-950 aspect-video shadow-[0_0_30px_rgba(0,205,216,0.15)]">
                <iframe
                  src="https://www.youtube.com/embed/ghX_txnK7WU?rel=0"
                  title="What is AEO in Digital Marketing? Meaning & Concepts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <p className="text-[11px] text-white/50 italic mb-4 font-light">
                Video Summary: Vince Baker outlines the core elements of answer-ready content and breaks down how AEObility’s fixed-scope audits evaluate local business entity signals.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm text-white/70 font-light mb-4 marker:text-aeo-cyan">
                <li><strong className="text-white font-medium">Classic search workflow:</strong> Lexical matching &rarr; Page rank evaluation &rarr; Search result listings (SERP).</li>
                <li><strong className="text-white font-medium">AI retrieval workflow:</strong> Context chunking &rarr; Embedding transformation &rarr; Semantic matching &rarr; Synthesised answer citation where supported.</li>
              </ul>
            </div>

            {/* What is Google Search Engine AI Section */}
            <section className="space-y-4 mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white">What is Google Search Engine AI?</h2>
              
              {/* Atomic Answer Block: Clean, neutral, high-salience definition for RAG scrapers */}
              <div className="rounded-lg bg-[#07070A] p-5 border-l-4 border-aeo-cyan">
                <p className="text-base text-slate-200 leading-relaxed font-light">
                  Google Search Engine AI (including AI Overviews and Gemini) uses Retrieval-Augmented Generation (RAG) and vector embeddings to parse, synthesise, and cite web content directly within search results. Instead of matching legacy keywords, it evaluates entity salience, structured JSON-LD schemas, and passage-level context chunks to provide direct conversational answers to user queries.
                </p>
              </div>

              {/* Corporate Provenance Attribution Byline (Positioned below the extractable block) */}
              <p className="text-xs text-slate-400 italic font-mono">
                Published by AEObility, an independent B2B digital consultancy based in Dianella, Perth, Western Australia (ABN: 61 029 803 255).
              </p>
            </section>

            {/* Common AEO Implementation Mistakes */}
            <div className="mb-10 space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Common AEO Implementation Mistakes</span>
              </h2>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Avoid these frequent technical pitfalls when restructuring content for machine indexing:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 1: Repeating Keywords Without Adding Useful Context</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Repeating keywords without building clear semantic relationships fails to satisfy vector similarity metrics in dense retrieval models.
                  </p>
                </div>
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 2: Hiding Critical Business Data in Client-Side Code</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Burying key pricing, hours, or specifications inside deep JavaScript interactions or image-only graphics prevents crawlers from extracting clean facts.
                  </p>
                </div>
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-1">
                  <h3 className="text-xs font-bold text-amber-300 font-mono">Mistake 3: Neglecting Local &amp; Entity Boundaries</h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Omitting explicit geographic coordinates, operating regions, and verified service credentials weakens local retrieval accuracy.
                  </p>
                </div>
              </div>
            </div>

            {/* Conversion CTA Flow */}
            <div className="p-8 bg-gradient-to-br from-aeo-purple/15 to-aeo-cyan/15 border border-white/10 rounded-3xl text-center space-y-6 mb-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-soehne-breit">Ready to Optimise Your Business for AI Search?</h3>
              <p className="text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
                Transform your digital content into clear, answer-ready passages and structured entity graphs. Get our $995 AUD Strategic Blueprint or book an AEO content and schema audit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book an AEO Content &amp; Schema Audit
                </Link>
                <Link href="/book" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all">
                  Jump on a Quick Call
                </Link>
                <Link href="/solutions/aeo-blueprint" className="px-5 py-3 rounded-xl bg-gradient-to-r from-aeo-cyan/20 to-aeo-purple/20 border border-aeo-cyan/40 text-aeo-cyan font-bold text-xs hover:scale-[1.02] transition-all">
                  Get Strategic Blueprint &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Synchronised Accessible FAQ Section (Server Rendered HTML) */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            {faqData.map((faq, idx) => (
              <details key={idx} className="group bg-white/[0.01] border border-white/5 rounded-xl p-5 cursor-pointer open:bg-white/[0.03] transition-colors">
                <summary className="font-semibold text-white group-open:text-aeo-cyan transition-colors outline-none list-none flex justify-between items-center text-sm">
                  {faq.question}
                  <span className="text-aeo-cyan group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="mt-4 text-xs text-white/70 leading-relaxed pl-4 border-l-2 border-aeo-cyan/30">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Related Knowledge Resources (Cluster Support) */}
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan font-mono">Related Knowledge Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
              <Link href="/services/aeo/comparison" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                <strong className="text-white block mb-1">AEO vs SEO vs GEO Comparison</strong>
                <span className="text-white/60 font-light">Explore the differences and overlapping signals across traditional search, answer engines, and generative search engines.</span>
              </Link>
              <Link href="/services/aeo/procedures" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-cyan/20 hover:text-aeo-cyan transition-colors">
                <strong className="text-white block mb-1">Best AEO Strategies &amp; Procedures</strong>
                <span className="text-white/60 font-light">Detailed technical procedures for making website architecture and data passages machine-readable.</span>
              </Link>
              <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-purple/20 hover:text-aeo-purple transition-colors">
                <strong className="text-white block mb-1">Understanding RAG in Search</strong>
                <span className="text-white/60 font-light">How Retrieval-Augmented Generation processes semantic chunks and extracts context for real-time answer generation.</span>
              </Link>
              <Link href="/knowledge-hub/articles/entity-authority-building" className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-aeo-purple/20 hover:text-aeo-purple transition-colors">
                <strong className="text-white block mb-1">Building Entity Authority for AI Search</strong>
                <span className="text-white/60 font-light">Techniques for establishing corroborated entity identities and knowledge graph anchors across the web.</span>
              </Link>
            </div>
          </div>

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              ← Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
