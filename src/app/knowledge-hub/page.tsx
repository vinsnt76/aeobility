import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Brain, ShieldAlert, BadgeDollarSign, FileCode2, GraduationCap, Compass, BookOpenCheck, TrendingUp, FileText } from 'lucide-react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export const metadata: Metadata = {
  title: "AEO, GEO & AI Search Knowledge Hub | AEObility",
  description: "Explore our AI Search Knowledge Hub for practical AEO guides, schema templates, and modern machine-ingestion strategies to boost your digital visibility.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub",
  },
  keywords: [
    "AI Search Marketing Course",
    "ai search marketing examples",
    "answer engine optimisation tools",
    "structured content templates",
    "prompt strategy templates",
    "ai search audit checklist",
    "structured search patterns",
    "content modelling",
    "schema frameworks"
  ]
};

export default function KnowledgeHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI Search Marketing Course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI Search Marketing Course covers how to optimise content for AI engines and generative platforms using neural matching, semantic context, and structured schema maps."
        }
      },
      {
        "@type": "Question",
        "name": "What are Answer Engine Optimisation Tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Answer Engine Optimisation (AEO) tools include schema validators, entity extraction tools, and semantic analysis platforms to test how machines parse your digital presence."
        }
      }
    ]
  };

  const articles = [
    {
      name: "Answer Engine Optimisation Core Principles",
      href: "/knowledge-hub/aeo",
      description: "Technical guide on how search bots parse files for direct citation extraction. Learn to maximise positional bias within text fields.",
      icon: <GraduationCap className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "What Is SEO Optimisation?",
      href: "/knowledge-hub/what-is-seo-optimisation",
      description: "Understand traditional lexical search, technical SEO pillars, and how page-level optimisation feeds AI Knowledge Graphs.",
      icon: <BookOpen className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "AI Semantic SEO & Entity-Based Layout Frameworks",
      href: "/knowledge-hub/semantic-seo",
      description: "Transition from legacy keyword strings to relational topic graphs. Learn to map RDF triples and build contextual entity salience.",
      icon: <Compass className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "GEO and SEO: Local Discovery Matrix",
      href: "/knowledge-hub/geo",
      description: "Advanced techniques balancing localized map rankings and systemic generative visibility rules without focus dilution.",
      icon: <BookOpenCheck className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "Articles & Technical Guides",
      href: "/knowledge-hub/articles",
      description: "Deep dives into generative search, entity modelling, and the strategies shaping modern machine readability.",
      icon: <FileText className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "Client Case Studies",
      href: "/knowledge-hub/case-studies",
      description: "Real-world evidence of structural search optimisation, AEO implementations, and organic search momentum recovery.",
      icon: <TrendingUp className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  const guides = [
    {
      name: "What is AEO and why does it matter?",
      href: "/services/aeo/definition",
      description: "Understand the core concepts of Answer Engine Optimisation and how generative AI models represent your brand entities.",
      icon: <BookOpen className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "Is AEO just SEO with a new name?",
      href: "/services/aeo/comparison",
      description: "Compare traditional keyword density search optimisation with vector embeddings, neural search, and RAG pipelines.",
      icon: <Brain className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "How do I make my business AI-readable?",
      href: "/services/aeo/procedures",
      description: "Step-by-step technical guide to structuring answers, optimising schemas, and building clean topical entity maps.",
      icon: <FileCode2 className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "What stops my business from showing up?",
      href: "/services/aeo/constraints",
      description: "Identify indexation limits, entity ambiguity, conflicting web data sources, and trust parameters in LLM reasoning.",
      icon: <ShieldAlert className="w-5 h-5 text-aeo-cyan" />
    },
    {
      name: "How much does AEO cost & what do I get?",
      href: "/services/aeo/costs-timing",
      description: "Transparent pricing breakdown of the Strategic Blueprint, AEO Foundation, and fixed-scope AEO Sprints.",
      icon: <BadgeDollarSign className="w-5 h-5 text-aeo-cyan" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>AI Search Marketing Course & Resource Center</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                The AEObility <br />
                <span className="text-gradient-aeo">Knowledge Hub</span> & Learning Centre
              </h1>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl">
                Master modern SEO frameworks, discover concrete AI search marketing examples, and access professional answer engine optimisation tools.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/diagnostic"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-semibold text-base transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.3)]"
                >
                  <span>Get Visibility Score</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/knowledge-hub/what-is-aeo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-base transition-all hover:bg-zinc-800"
                >
                  <span>What is AEO?</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/60 shadow-[0_0_40px_rgba(0,205,216,0.2)] group transition-all">
                <Image
                  src="/images/knowledge-hub/ai-search-knowledge-hub.webp"
                  alt="AEObility AI Search Knowledge Hub banner interface illustrating Answer Engine Optimisation (AEO), Geographic Engine Optimisation (GEO), structured content schemas, and RAG entity indexing matrices for Australian businesses"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs text-white/90">
                  <span className="font-semibold text-aeo-cyan">AEO &amp; GEO Knowledge Index</span>
                  <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded text-white/70">Verified Schema Nodes</span>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Guides and Learning Paths */}
          <section className="space-y-12 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technical Guides and Learning Paths</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Step-by-step training resources detailing machine-readability requirements for Australian organisations. Access the dedicated <Link href="/knowledge-hub/guides" className="text-aeo-cyan underline hover:text-white font-medium">Technical Guides Directory</Link> for system specifications, RAG architecture, and entity authority frameworks.
              </p>
            </div>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
              {guides.map((item, idx) => (
                <Link 
                  key={idx}
                  href={item.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 hover:bg-white/[0.04] transition-all flex gap-5 items-start group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white group-hover:text-aeo-cyan transition-colors">{item.name}</h3>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-aeo-cyan group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}

              <div className="text-center pt-3">
                <Link
                  href="/knowledge-hub/guides"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-aeo-cyan/40 hover:bg-white/10 text-white font-mono text-xs font-semibold transition-all group"
                >
                  <span>Explore Complete Technical Guides Directory</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Advanced Knowledge Hub */}
          <section className="space-y-12 border-t border-white/5 pt-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Advanced Knowledge Hub</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Relational search layouts and coordinate matrices to map local brands to AI intent dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {articles.map((item, idx) => (
                <Link 
                  key={idx}
                  href={item.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-aeo-cyan/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-aeo-cyan transition-colors">{item.name}</h3>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-xs font-semibold text-aeo-cyan">
                    <span>Read Node Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              <div className="text-center pt-3 md:col-span-3">
                <Link
                  href="/knowledge-hub/articles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-aeo-cyan/40 hover:bg-white/10 text-white font-mono text-xs font-semibold transition-all group"
                >
                  <span>Browse All Knowledge Hub Articles</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* AEO & Semantic SEO Frameworks */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/50 shadow-2xl">
                <Image
                  src="/images/knowledge-hub/structured-search-audit-wireframe.png"
                  alt="Wireframe diagram of a structured search optimisation audit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-white">AEO & Semantic SEO Frameworks</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Generative model discovery relies heavily on organised data schemas. We provide detailed blueprints explaining <span className="font-semibold text-white">structured search patterns</span>, <span className="font-semibold text-white">content modelling</span>, and <span className="font-semibold text-white">schema frameworks</span> to align your site context with neural vector databases.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <Compass className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Structured Content Templates</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">Frameworks mapping core entity facts to JSON-LD microdata.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
                    <BookOpenCheck className="w-4 h-4 text-aeo-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prompt Strategy Templates</h4>
                    <p className="text-xs text-white/60 font-light leading-relaxed">Guidance for reviewing what AI assistants state regarding your services.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GEO and Local Proximity Guides */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-16">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-white">GEO and Local Proximity Guides</h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                AEO and map visibility are closely tied. Our local search guides provide a clear breakdown of geographical targeting across Australia, map ranking variables, and mobile proximity metrics to ensure your service slots show up first for local enquiries.
              </p>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan">Australia Local Targeting</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Learn how Google Maps, Apple Maps, and immediate regional voice query systems parse physical coordinates alongside website entity signals.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 bg-gradient-to-br from-aeo-cyan/10 to-aeo-purple/10 border border-white/5 rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold">Secure Your AEO Learning Resources</h3>
              <p className="text-sm text-white/60 font-light max-w-sm mx-auto">
                Get a free manual audit analysing your brand readability across AI platforms today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300"
                >
                  <span>Get Visibility Score</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/knowledge-hub/what-is-aeo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-zinc-800"
                >
                  <span>What is AEO?</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
