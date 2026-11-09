import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { CopySchemaButton } from '@/components/GeoClientComponents';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Code, 
  MapPin, 
  Cpu, 
  Layers, 
  HelpCircle, 
  AlertTriangle, 
  CheckSquare,
  Compass,
  FileText,
  ShieldCheck,
  TrendingDown,
  AlertCircle,
  Search,
  Award,
  Network,
  Users
} from 'lucide-react';

export const metadata = {
  title: "Local GEO vs Local SEO Guide | AEObility",
  description: "Determine if your local business needs Generative Engine Optimisation (GEO). Evaluate AI Overviews, competitor LLM citations, and machine-readable entity signals.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/geo",
  },
};

export default function GEOKnowledgeNodePage() {
  const faqList = [
    {
      question: "What is the difference between Local SEO and GEO for local businesses?",
      answer: "Local SEO focuses on improving visibility within established Google Search and Map interfaces through relevance, prominence, reviews, and proximity signals. GEO shapes how AI models learn about, synthesise, and recommend your brand across conversational interfaces, AI Overviews, and multi-brand roundups."
    },
    {
      question: "How does traditional geolocation SEO differ from Generative Engine Optimisation?",
      answer: "Traditional geolocation SEO focuses on optimising physical rank signals (IP address, localised keywords, Google Maps pins) to rank on static 10-blue-link or map pack SERPs. GEO ensures AI systems accurately retrieve, parse, and cite your local service boundaries during multi-constraint conversational queries."
    },
    {
      question: "How do GEO and Local SEO work together to capture local market share?",
      answer: "Local SEO drives organic map pack placements and local search rankings, while GEO reduces ambiguity around business facts and builds the citation footprint required for AI recommendation engines. Together, they align proximity signals with cross-source factual reconciliation."
    },
    {
      question: "Are GeoCoordinates and areaServed schema mandatory for AI search indexing?",
      answer: "No. No schema markup is strictly mandatory for AI search indexing or guarantees inclusion in generative answers. However, deploying GeoCoordinates and areaServed JSON-LD microdata provides a machine-readable data layer that clarifies your physical location and coverage boundaries when search systems reconcile local entities."
    },
    {
      question: "How should local businesses handle location pages without creating thin duplicate content?",
      answer: "Avoid creating templated suburb pages that lack distinct substance. Publish location-specific landing pages only where you have genuine local value, original evidence, unique customer proofs, and distinct service context. Quality location pages with authentic regional proof support local discovery without risking thin-content penalties."
    },
    {
      question: "Can I do GEO myself or do I need to hire someone, and what does a good GEO engagement actually include?",
      answer: "In-house teams can successfully perform basic GEO tasks: claiming your Google Business Profile, updating operating hours, eliminating NAP discrepancies on local directories, and writing direct answers to frequently asked customer queries. Hiring an outside specialist becomes necessary when dealing with technical schema architecture, such as building connected JSON-LD graphs with GeoCoordinates and areaServed definitions, setting up semantic chunking for passage retrieval, and reconciling entity confusion across AI knowledge bases. A legitimate GEO engagement provides a multi-platform baseline audit, nested schema deployment, atomic content structuring, citation reconciliation, and full IP handover with zero lock-in retainers."
    },
    {
      question: "How do I evaluate a GEO agency?",
      answer: "When evaluating a GEO agency, test their own machine readability first: inspect their schema markup, verify their agent readiness on independent benchmarks like isitagentready.com, and check whether they publish a transparent brand-facts ledger. Reject agencies that propose generic monthly retainers without clear engineering milestones, and avoid providers promising guaranteed rankings or exclusive AI deals. A reliable GEO consultancy delivers fixed-scope sprints, open documentation, and verified before-and-after citation tracking across Google AI Overviews, ChatGPT Search, and Perplexity."
    },
    {
      question: "What are the top indicators or red flags that a business needs GEO help instead of just SEO?",
      answer: "The primary signs that a business has outgrown standard SEO and requires GEO include: declining organic click-through rates despite steady keyword rankings (due to zero-click AI answers); competitor brands dominating conversational recommendations in ChatGPT and Perplexity; generative models hallucinating incorrect pricing, services, or locations; and customer search behaviour shifting to complex, multi-constraint conversational queries that require vector retrieval rather than basic keyword matching."
    }
  ];

  const diagnosticSigns = [
    {
      id: 1,
      icon: Users,
      title: "Competitors Are Cited in AI Recommendations, But Your Brand Is Missing",
      mechanism: "Conversational tools generate shortlists for your category or metro area (for example, \"Top commercial lawyers in Perth\"), naming competitors while skipping your business entirely.",
      action: "Prompt leading LLMs with your primary service category and location to identify AI visibility gaps."
    },
    {
      id: 2,
      icon: TrendingDown,
      title: "Organic Traffic Decay from \"Zero-Click\" AI Overviews",
      mechanism: "Search volume and traditional keyword rankings remain stable, but click-through rates decline because AI Overviews resolve informational and transactional intent directly in SERPs.",
      action: "Shift strategy to ensure your brand is cited as the source authority inside the synthesised AI box."
    },
    {
      id: 3,
      icon: AlertCircle,
      title: "AI Models Hallucinate or Misrepresent Core Business Facts",
      mechanism: "Prompting AI engines with \"What are the hours/services of [Brand]?\" returns outdated pricing, incorrect service areas, closed hours, or confusion with another business.",
      action: "Reconcile unstructured web mentions with machine-readable canonical schema (LocalBusiness, Organisation, sameAs) to establish a single source of truth."
    },
    {
      id: 4,
      icon: Search,
      title: "Buyers Search with Long, Constraint-Rich Prompts",
      mechanism: "Users no longer query 2–3 keywords; they use complex multi-constraint prompts (for example, \"Emergency plumber in Osborne Park open Sunday with upfront pricing\").",
      action: "Structure content into semantically rich chunks that survive background retrieval sweeps during AI query fan-out."
    },
    {
      id: 5,
      icon: Award,
      title: "You Operate in High-Trust, High-Consideration Markets",
      mechanism: "Buyers evaluate trade-offs, credentials, and risks rather than just price. AI engines use Chain-of-Thought (CoT) reasoning and pairwise evaluations to evaluate providers.",
      action: "Embed explicit E-E-A-T proofs, transparent pricing tiers, and verifiable case studies to win AI reasoning steps."
    },
    {
      id: 6,
      icon: Network,
      title: "Discovery Relies Heavily on Aggregators and Entity Signals",
      mechanism: "LLMs frequently cross-reference third-party sources (review directories, industry listicles, Reddit discussions, and digital PR) to verify entity details.",
      action: "Fortify off-page entity corroboration across Google Business Profile, directories, and authoritative knowledge graphs."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/geo",
        "name": "Does My Business Need GEO? A Guide to Local GEO vs Local SEO",
        "description": "Learn how local SEO improves visibility in Google Search and Maps, while GEO strengthens the entity, location, and service-boundary signals AI search systems need to identify and recommend a local business accurately.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "primaryImageOfPage": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/fix-local-discovery-with-geo-seo_AEObility.webp"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/geo/breadcrumb"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/geo/breadcrumb",
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
            "name": "GEO vs Local SEO",
            "item": "https://aeobility.com.au/knowledge-hub/geo"
          }
        ]
      },

      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vince Baker",
        "jobTitle": "Founder & Principal AEO Architect",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "sameAs": [
          "https://linkedin.com/in/vincebaker"
        ]
      },

      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "description": "Optimising Australian small businesses for the future of search across maps, SERPs, and generative AI corridors.",
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "location": {
          "@type": "Place",
          "name": "AEObility Perth HQ",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        }
      },

      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/images/knowledge-hub/fix-local-discovery-with-geo-seo_AEObility.webp",
        "name": "GEO vs Local SEO Framework Banner",
        "description": "Framework diagram comparing Local SEO and Geographic Engine Optimisation (GEO) signals across physical proximity and AI entity discovery by AEObility.",
        "creator": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/fix-local-discovery-with-geo-seo_AEObility.webp",
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.9505,
            "longitude": 115.8605
          }
        },
        "fileFormat": "image/webp",
        "width": "3840",
        "height": "1080"
      },

      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/geo#article",
        "headline": "Does My Business Need GEO? A Guide to Local GEO vs Local SEO",
        "datePublished": "2026-10-01T00:00:00+08:00",
        "dateModified": "2026-10-06T00:00:00+08:00",
        "inLanguage": "en-AU",
        "about": [
          "Generative Engine Optimisation",
          "Local SEO",
          "Entity Verification",
          "GeoCoordinates",
          "Spatial Intent Parsing",
          "Service Boundaries"
        ],
        "author": [
          { "@id": "https://aeobility.com.au/#vincebaker" },
          { "@id": "https://aeobility.com.au/#organization" }
        ],
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "image": {
          "@id": "https://aeobility.com.au/images/knowledge-hub/fix-local-discovery-with-geo-seo_AEObility.webp"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/geo#faq",
        "mainEntity": faqList.map((faq, idx) => ({
          "@type": "Question",
          "@id": `https://aeobility.com.au/knowledge-hub/geo#faq${idx + 1}`,
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/#local",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "postalCode": "6000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -31.9505,
          "longitude": 115.8605
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Perth Metropolitan Area"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Western Australia"
          }
        ]
      }
    ]
  };

  const jsonLdExample = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aeobility.com.au/#organization",
  "name": "AEObility",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "postalCode": "6000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-31.9505",
    "longitude": "115.8605"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Perth Metropolitan Area"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Western Australia"
    }
  ]
}`;

  const matrixRows = [
    {
      dimension: "Need Indicator",
      localSeo: "Needed when standard Map Pack rankings and local organic clicks drop.",
      geo: "Needed when conversational queries, AI Overviews, or LLMs omit, misquote, or misrepresent business facts and brand services."
    },
    {
      dimension: "Primary Outcome",
      localSeo: "Visibility in organic local results and map experiences",
      geo: "Clear, corroborated business facts and brand synthesis for AI-assisted discovery"
    },
    {
      dimension: "Primary User Context",
      localSeo: "“Near me,” map, category, and location searches",
      geo: "Conversational local recommendations, multi-brand roundups, and fact-led prompts"
    },
    {
      dimension: "Important Signals",
      localSeo: "Relevance, prominence, proximity, GBP quality, reviews, local links",
      geo: "Consistent entity identity, service coverage, structured data, corroborating off-page sources"
    },
    {
      dimension: "Core Business Facts",
      localSeo: "Category, address, phone, reviews, location relevance",
      geo: "Organisation identity, address, hours, services, areas served, supporting E-E-A-T evidence"
    },
    {
      dimension: "Content Priority",
      localSeo: "Helpful service and location pages for users",
      geo: "Concise, semantically rich factual answers and defensive citation footprints"
    },
    {
      dimension: "Measurement",
      localSeo: "Local rankings, map visibility, calls, direction requests, leads",
      geo: "Accuracy of business facts across monitored LLMs, competitive citation overlap, and AI Overview inclusion"
    },
    {
      dimension: "Relationship",
      localSeo: "Helps users find the business in established local search surfaces",
      geo: "Shapes how AI models learn about, synthesise, and recommend your brand across multi-turn queries"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative overflow-x-hidden">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Multi-Layer Ambient Glow Mesh Orbs (Reveals Glass Translucency) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aeo-cyan/10 rounded-full filter blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-aeo-purple/10 rounded-full filter blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/3 w-[550px] h-[550px] bg-aeo-cyan/8 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
        <section className="flex flex-col gap-12">
          
          {/* HERO BLOCK (Primacy Zone & E-E-A-T Attribution) */}
          <div id="sec1" className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 font-light">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Field Notes on AI Search &amp; Entity Discovery</span>
              </div>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-white/60">
                Authored by <Link href="/brand-facts#vince-baker" className="text-aeo-cyan hover:underline font-medium">Vince Baker</Link>, Principal AEO Architect
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-white/60">
                Updated: <time dateTime="2026-10-06" className="text-white/80 font-medium">6 October 2026</time>
              </span>
            </div>

            {/* 1. Primary H1 Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Does My Business Need GEO? <span className="text-gradient-aeo">A Guide to Local GEO vs Local SEO</span>
            </h1>

            {/* 2. Consolidated Quick Answer Block */}
            <div className="relative isolate overflow-hidden p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 border-l-4 border-l-aeo-cyan rounded-2xl space-y-3 shadow-2xl">
              {/* Top Specular Light Catch */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aeo-cyan/50 to-transparent pointer-events-none" />
              
              <div className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>The Quick Answer</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                Generative Engine Optimisation (GEO) bridges local operational facts—like your address, trading hours, and service radius—with how AI models synthesise your brand. While Local SEO targets traditional map packs and blue links, GEO ensures platforms like ChatGPT, Gemini, and Google AI Overviews cite you accurately in conversational searches.
              </p>
            </div>

            {/* 3. Hero Banner Image Graphic */}
            <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-4">
              <Image
                src="/images/knowledge-hub/fix-local-discovery-with-geo-seo_AEObility.webp"
                alt="GEO vs Local SEO framework diagram showing physical location signals and AI entity verification by AEObility in Perth, Western Australia."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>

            {/* Disambiguation Section: GEO SEO & Geolocation */}
            <div className="relative isolate overflow-hidden p-5 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <h3 className="text-sm font-bold text-aeo-cyan flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Clarifying &quot;GEO SEO&quot; and Geolocation in the AI Era</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                For years, &quot;geolocation SEO&quot; and &quot;geo-targeting&quot; meant adding suburb keywords to title tags and setting up radius targeting in ad platforms. In Generative Engine Optimisation (GEO), <strong>Local GEO</strong> is fundamentally different: it is the process of structuring your business entity—address, service areas, credentials, and real-world proof—so that generative AI models (ChatGPT, Gemini, Perplexity, and AI Overviews) can verify, cite, and recommend you in conversational local queries.
              </p>
            </div>

            {/* Mandated Core Conceptual Distinction Callout */}
            <div className="relative isolate overflow-hidden p-6 bg-slate-900/60 backdrop-blur-xl border border-aeo-cyan/30 rounded-2xl space-y-3 shadow-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aeo-cyan/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Where SEO Stops and GEO Starts</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                Traditional SEO gets your website indexed for search queries. GEO shapes how conversational systems understand and recommend your whole business. Think of AEO as winning the direct answer to a single question, while GEO builds the wider authority needed to show up in broad, multi-brand shortlists.
              </p>
            </div>

            {/* Distinct Conceptual Sequence: GEO & AEO Integration & Verifiable Empirical Case Evidence */}
            <div className="relative isolate overflow-hidden p-5 bg-aeo-cyan/10 backdrop-blur-lg border border-aeo-cyan/30 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-aeo-cyan font-bold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 flex-shrink-0" />
                <span>Conceptual Sequence &amp; Empirical Case Evidence</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                <strong>GEO verifies who and where a local business is.</strong> AEO helps shape the concise, evidence-backed content that answer engines can retrieve and present when responding to a user’s question. Explore our <Link href="/services/aeo/definition" className="text-aeo-cyan hover:underline font-semibold">AEO Definition &amp; Concepts Guide</Link>, <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link>, <Link href="/services/geo-marketing" className="text-aeo-cyan hover:underline font-semibold">GEO Marketing Services</Link>, and <Link href="/services/perth/seo-specialist" className="text-aeo-cyan hover:underline font-semibold">Perth Local SEO Specialist</Link> hub, alongside our <Link href="/knowledge-hub/case-studies/baby-bento" className="text-aeo-cyan hover:underline font-semibold">Baby Bento Case Study</Link> for answer-focused content structure, question coverage, and empirical retrieval proof.
              </p>
            </div>

            {/* Hero CTA & Spatial Psychology Proximity Reassurance */}
            <div className="space-y-2.5 pt-1">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm rounded-xl hover:opacity-95 transition-all duration-300 shadow-lg shadow-aeo-cyan/10"
              >
                <span>Run AI Visibility Scan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Law of Proximity Reassurance Row */}
              <div className="flex items-center gap-2 text-xs text-white/60 font-light">
                <CheckCircle2 className="w-3.5 h-3.5 text-aeo-cyan flex-shrink-0" />
                <span>Free 60-second diagnostic • No credit card required • Clear 90-day roadmap</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: ELEVATED MISCONCEPTIONS SECTION (High-Intent Query Target in Primacy Zone) */}
          <div id="sec-misconceptions" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs text-amber-400 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Search Reality vs Assumptions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Common Misconceptions About Local SEO and Geotargeting in AI Search
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative isolate overflow-hidden p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                <h3 className="text-base font-bold text-white">
                  Misconception 1: &quot;Building templated suburb landing pages covers local AI discovery.&quot;
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  <strong className="text-amber-400">Reality:</strong> Search engines and LLMs view dozens of near-identical suburb pages as low-effort doorway pages. Generative models look for corroborated operational boundaries via <code className="text-aeo-cyan font-mono">areaServed</code> and real local proofs, not keyword-swapped thin text.
                </p>
              </div>

              <div className="relative isolate overflow-hidden p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                <h3 className="text-base font-bold text-white">
                  Misconception 2: &quot;If my Google Business Profile ranks in the 3-Pack, AI will automatically recommend me.&quot;
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  <strong className="text-amber-400">Reality:</strong> Map Pack algorithms rely heavily on proximity and GBP categories. Conversational AI assistants perform query fan-out across multiple sources (review platforms, forums, directories, and your site) to evaluate trust and capability before synthesising a recommendation.
                </p>
              </div>

              <div className="relative isolate overflow-hidden p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                <h3 className="text-base font-bold text-white">
                  Misconception 3: &quot;Geo-targeting is purely a technical IP or schema task.&quot;
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  <strong className="text-amber-400">Reality:</strong> While <code className="text-aeo-cyan font-mono">GeoCoordinates</code> and schema markup provide clean machine-readable data, AI engines prioritise consensus. If third-party directories or review citations contradict your on-page data, retrieval models discard the entity as ambiguous.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: DIAGNOSTIC FRAMEWORK: 6 SIGNS YOUR BUSINESS NEEDS GEO */}
          <div id="sec-diagnostic" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Where Most Brands Get Caught Out</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                6 Signs Your Business Needs GEO
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-3xl leading-relaxed">
                Use this 6-point self-diagnostic framework to evaluate your brand&apos;s vulnerability to zero-click AI SERPs, competitor LLM citations, and AI hallucination risk across generative engines. Before restructuring your site schema, learn how to audit your site for vector drift and client-side rendering bottlenecks by{' '}
                <Link href="/knowledge-hub/articles/seo-vs-geo-red-flags" className="text-aeo-cyan hover:underline font-semibold">
                  identifying AI search retrieval red flags
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {diagnosticSigns.map((sign) => {
                const IconComponent = sign.icon;
                return (
                  <div
                    key={sign.id}
                    className="relative isolate overflow-hidden p-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-aeo-cyan/40 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl hover:shadow-aeo-cyan/5 group"
                  >
                    {/* Top Specular Edge Highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none group-hover:via-aeo-cyan/60 transition-colors" />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-white/40 group-hover:text-aeo-cyan transition-colors whitespace-nowrap flex-shrink-0">
                          SIGNAL 0{sign.id}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug group-hover:text-aeo-cyan transition-colors">
                        {sign.title}
                      </h3>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-white/5">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-bold uppercase text-white/40 tracking-wider">
                          What is happening under the hood
                        </div>
                        <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                          {sign.mechanism}
                        </p>
                      </div>

                      <div className="p-3 bg-aeo-cyan/[0.03] border border-aeo-cyan/20 rounded-xl space-y-1">
                        <div className="text-[10px] font-mono font-bold uppercase text-aeo-cyan tracking-wider flex items-center gap-1.5">
                          <ArrowRight className="w-3 h-3" />
                          <span>How to test and fix this</span>
                        </div>
                        <p className="text-xs sm:text-sm text-aeo-cyan font-medium leading-relaxed">
                          {sign.action}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: DEFENSIBLE COMPARISON MATRIX TABLE */}
          <div id="sec-diff" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                GEO vs Local SEO: What Is the Difference?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Side-by-side comparison matrix mapping local search surfaces against AI-assisted local discovery.
              </p>
            </div>

            {/* Defensible Comparison Matrix Table */}
            <div className="overflow-x-auto border border-white/10 rounded-2xl bg-neutral-950/90 shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-aeo-cyan w-1/4">Dimension</th>
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-white/90 w-3/8">Local SEO</th>
                    <th className="p-4 font-mono font-bold uppercase tracking-wider text-aeo-cyan w-3/8">GEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light text-white/80">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-white/[0.02] transition-colors ${idx === 0 ? 'bg-aeo-cyan/[0.04]' : ''}`}>
                      <td className="p-4 font-bold text-white bg-white/[0.01]">{row.dimension}</td>
                      <td className="p-4 text-white/80 leading-relaxed">{row.localSeo}</td>
                      <td className="p-4 text-white/90 leading-relaxed bg-aeo-cyan/[0.02] border-l border-white/5 font-normal">{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 5: CONSOLIDATED LOCAL GEO IMPLEMENTATION CHECKLIST */}
          <div id="sec-checklist" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-xs text-aeo-cyan font-semibold">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Actionable Deployment Guide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <span>Local GEO Implementation &amp; Verification Checklist</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-3xl leading-relaxed">
                Follow this consolidated checklist to eliminate local discovery friction, align on-page entity signals with off-page sources, and deploy verified machine-readable schema.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Item 1: NAP Consistency */}
              <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">1. Canonical Business Identity &amp; NAP Reconciliation</h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      Standardise visible business name, physical address, local phone number, and operating hours across your canonical site, Google Business Profile, Apple Maps, Bing Places, and third-party directories to establish machine consensus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2: LocalBusiness & GeoCoordinates Schema */}
              <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">2. Machine-Readable Schema &amp; GeoCoordinates</h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      Deploy structured <code className="text-aeo-cyan font-mono">LocalBusiness</code> JSON-LD microdata containing exact <code className="text-aeo-cyan font-mono">GeoCoordinates</code> matching your physical building location to resolve spatial ambiguity during AI query parsing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Operational Service Radius (areaServed) */}
              <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">3. Operational Service Radius &amp; areaServed Boundaries</h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      Declare explicit suburb and regional service coverage boundaries using <code className="text-aeo-cyan font-mono">areaServed</code> schema arrays paired with visible service radius copy rather than creating thin, duplicate suburb pages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4: Visible Fact Blocks & Q&A Structure */}
              <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">4. High-Density Q&amp;A Blocks &amp; Emergency Facts</h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      Prevent long-form prose from obscuring key facts. Place trading hours, after-hours emergency availability, pricing structures, and eligibility criteria in concise, visible Q&amp;A blocks paired with <code className="text-aeo-cyan font-mono">FAQPage</code> schema.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5: Authentic Regional Proof & E-E-A-T Evidence */}
              <div className="p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-aeo-cyan flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">5. Authentic Regional Proof &amp; Verified Case Evidence</h3>
                    <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                      Anchor location landing pages with authentic local proof: customer case studies, local project photos, verified reviews, and regional E-E-A-T credentials that survive background retrieval sweeps during AI query fan-out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: GET A LOCAL ENTITY AUDIT (CLOSING CONVERSION PANEL) */}
          <div id="sec-audit-panel" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Practical Small Business GEO Services &amp; Entity Auditing
            </h2>
            <div className="relative isolate overflow-hidden p-8 bg-gradient-to-r from-aeo-cyan/15 via-slate-900/80 to-aeo-purple/15 backdrop-blur-2xl border border-aeo-cyan/40 rounded-3xl text-center space-y-4 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aeo-cyan/60 to-transparent pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Turn Local Business Facts Into a Verifiable Entity System
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                If your local service business is losing ground to zero-click AI summaries or missing from conversational category roundups, start with an inspection of your entity clarity. Discover how AEObility&apos;s local GEO services diagnose entity drift, schema gaps, and citation inconsistencies.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-xs sm:text-sm rounded-xl hover:bg-neutral-100 transition-all duration-300 shadow-lg"
                >
                  <span>Run AI Visibility Scan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/aeo-blueprint"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <span>Explore Strategic Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-aeo-cyan" />
                </Link>
              </div>
            </div>
          </div>

          {/* SECTION 7: LOCALBUSINESS SCHEMA EXAMPLE */}
          <div id="sec-schema-blueprint" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              LocalBusiness Schema Example
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-aeo-cyan" />
                <span>Valid GEO Microdata Blueprint</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Add this <code className="text-aeo-cyan font-mono">LocalBusiness</code> JSON-LD as a script block in the page <code className="text-aeo-cyan font-mono">&lt;head&gt;</code> or body, and customise it to match visible, canonical business facts:
              </p>

              <details className="group border border-white/10 rounded-2xl bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all duration-200" open>
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:text-aeo-cyan list-none text-base transition-colors">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-aeo-cyan" />
                    <span>LocalBusiness &amp; GeoCoordinates JSON-LD Snippet</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-aeo-cyan transition-transform duration-200 group-open:rotate-180" />
                </summary>
                
                <div className="px-6 pb-6 border-t border-white/5 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-white/60">JSON-LD Microdata Script</span>
                    <CopySchemaButton code={jsonLdExample} />
                  </div>
                  <div className="p-4 bg-neutral-950 rounded-xl border border-white/10 overflow-x-auto font-mono text-xs text-aeo-cyan">
                    <pre>{jsonLdExample}</pre>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
          <div id="sec-faqs" className="space-y-6 border-t border-white/5 pt-10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-aeo-cyan" />
                <span>Frequently Asked Questions: GEO vs Local SEO</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Direct answers to core questions about local search, entity discovery, and AI recommendation systems.
              </p>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => (
                <div key={idx} className="relative isolate overflow-hidden border border-white/10 rounded-2xl bg-slate-900/60 backdrop-blur-xl p-6 space-y-3 shadow-lg">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span className="text-aeo-cyan font-mono font-bold">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-3">
                    <strong className="text-aeo-cyan">A:</strong> {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER CTA */}
          <div id="sec-footer-cta" className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              Align Your Local Map &amp; AI Entity Assets
            </h2>
            <div className="relative isolate overflow-hidden p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 backdrop-blur-2xl border border-white/10 rounded-3xl text-center space-y-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <p className="text-sm text-white/80 max-w-lg mx-auto font-light leading-relaxed">
                Help search, maps, and AI-assisted experiences find and represent your business facts more consistently. Secure your local entity clarity check today.
              </p>
              <div className="flex justify-center gap-3">
                <Link
                  href="/diagnostic"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300"
                >
                  <span>Check Local Entity Clarity</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
