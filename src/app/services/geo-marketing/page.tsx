import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getGeoMarketingSchemaGraph } from '@/lib/schema/geoMarketing';
import FaqAccordion from '@/components/FaqAccordion';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Building2, 
  FileText, 
  Navigation, 
  Code, 
  BarChart3, 
  AlertTriangle, 
  Layers, 
  Search, 
  Calendar, 
  Boxes, 
  Check, 
  Users, 
  XCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) Services Perth | AEObility",
  description: "AEObility helps Perth and Australian businesses improve visibility across Google AI Overviews, ChatGPT Search, and Perplexity. Scoped micro-sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/geo-marketing",
  },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) Services Perth | AEObility",
    description: "Fix structured signals, business facts, and entity architecture to improve discovery across Google AI features, ChatGPT Search, and Perplexity.",
    url: "https://aeobility.com.au/services/geo-marketing",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/geo-marketing-services_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Diagram explaining how Generative Engine Optimisation extends local SEO foundations to improve AI search visibility.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Engine Optimisation (GEO) Services Perth | AEObility",
    description: "Fix structured signals, business facts, and entity architecture to improve discovery across Google AI features, ChatGPT Search, and Perplexity.",
    images: ["https://aeobility.com.au/images/services/geo-marketing-services_AEObility.webp"],
  },
  keywords: [
    "generative engine optimisation perth",
    "geo services perth",
    "ai search optimisation",
    "chatgpt search marketing perth",
    "google ai overviews optimisation",
    "business facts clean up",
    "local entity architecture"
  ]
};

export default function GeoMarketingPage() {
  const faqs = [
    {
      question: "Is GEO different from SEO?",
      answer: "Yes. GEO builds on SEO foundations. While traditional SEO focuses on earning rankings and clicks in search result lists, GEO focuses on whether AI-assisted search experiences (like Google AI Overviews, ChatGPT Search, and Perplexity) can retrieve, verify, and accurately reference your business when generating answers."
    },
    {
      question: "Can you guarantee AI citations or ChatGPT recommendations?",
      answer: "No agency can control proprietary AI results or guarantee citations. AEObility identifies the structural, factual, and entity gaps you can influence, implements agreed fixes on your site and key platforms, and measures changes against a transparent baseline."
    },
    {
      question: "Which platforms do you assess?",
      answer: "We scope our diagnostics around the search engines and AI surfaces relevant to your audience, including Google AI features (AI Overviews), ChatGPT Search, Perplexity, and Gemini."
    },
    {
      question: "Do I need to replace my existing SEO provider?",
      answer: "No. Our GEO services are designed to work alongside your in-house team, existing SEO partner, web developer, or content partner. We deliver scoped technical implementation, validated structured facts, and practical handover documentation."
    },
    {
      question: "How long does a GEO sprint take?",
      answer: "A single Micro-Sprint is delivered within 4–5 business days once scope, access, and business facts are confirmed. Comprehensive AEO Foundation is delivered across a four-week structured timeframe."
    },
    {
      question: "Is GEO just schema markup?",
      answer: "No. Schema markup is only one implementation layer. GEO also involves cleaning up conflicting business information across directories, restructuring priority pages for passage-level extraction, establishing clear internal entity relationships, providing verifiable proof, and tracking cross-platform visibility."
    },
    {
      question: "Can I do GEO myself or do I need to hire someone, and what does a good GEO engagement actually include?",
      answer: "You can handle foundational GEO tasks in-house, such as claiming Google Business Profiles, auditing NAP consistency across directories, publishing transparent service pricing, and structuring website answers under clear headings. However, technical GEO requires engineering nested JSON-LD knowledge graphs (LocalBusiness, GeoCoordinates, areaServed), configuring semantic passage chunking, and reconciling entity records across national business registries, authoritative directories, and the Google Knowledge Graph. A credible GEO engagement should always include: 1) a multi-platform visibility audit across ChatGPT Search, Perplexity, and Google AI Overviews; 2) validated Schema.org entity graph deployment; 3) atomic content restructuring for passage extraction; 4) directory citation alignment and a verifiable /brand-facts ledger; and 5) 100% client IP ownership with zero locked-in retainers."
    },
    {
      question: "How do I evaluate a GEO agency?",
      answer: "Evaluate a GEO agency on their technical proof rather than marketing promises. First, audit their own assets: do they score high on independent agent-readiness tests (such as isitagentready.com) and publish verifiable JSON-LD graphs alongside a clean /brand-facts ledger? Second, demand fixed-scope deliverables rather than open-ended monthly retainers: avoid agencies charging $2,000 to $5,000 per month without defined technical sprint milestones. Third, avoid anyone guaranteeing specific AI citations or ChatGPT recommendations: legitimate practitioners focus on verifiable schema architecture, entity reconciliation, and empirical prompt telemetry across AI search engines."
    },
    {
      question: "What are the top indicators or red flags that a business needs GEO help instead of just SEO?",
      answer: "The clearest signal is a divergence between traditional search ranks and AI discovery: your site ranks on page one of Google, but ChatGPT, Perplexity, or Google AI Overviews ignore or misquote your business details. Other key indicators include declining local map enquiries despite stable keyword rankings, AI tools confusing your brand with competitors, and website copy loaded with abstract marketing terms that modern vector engines filter out. If search engines index your pages but answer engines fail to cite your facts, your site requires GEO entity restructuring. For a full technical checklist, review our 5-Point Diagnostic Guide at /knowledge-hub/articles/seo-vs-geo-red-flags."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getGeoMarketingSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Perth &amp; Regional AI Search Optimisation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Generative Engine Optimisation (GEO) Services <span className="text-gradient-aeo">in Perth</span>
            </h1>

            <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto font-soehne-breit">
              Find out why your business is missing, misrepresented or uncited in AI search, and fix the content, entity and local visibility signals that make it easier to verify.
            </p>

            <div className="space-y-3 max-w-3xl mx-auto text-base text-zinc-300 font-serif leading-relaxed">
              <p>
                AEObility helps Perth and Australian businesses improve how they are understood across Google AI features, ChatGPT Search, and Perplexity. We test the buyer questions that matter, identify visibility gaps, and fix the structured signals that make your services easy to verify. GEO does not replace SEO. It extends your existing organic foundations for search engines that synthesise answers instead of listing links. Explore our <Link href="/knowledge-hub/guides" className="text-aeo-cyan underline hover:text-white font-medium">technical guides on entity optimisation and location signals</Link>, or run an instant readiness scan.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-black" />
                <span>Run an AI Visibility Scan</span>
              </Link>
              <a
                href="#local-sprints"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-cyan-400 text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap"
              >
                <span>View GEO Micro-Sprints</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            <p className="text-xs text-zinc-400 font-mono pt-1">
              Fixed scope, practical deliverables, zero ongoing retainer required.
            </p>

            {/* Featured Image Hero Graphic */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] my-8">
              <Image
                src="/images/services/geo-marketing-services_AEObility.webp"
                alt="Diagram explaining how Generative Engine Optimisation extends local SEO foundations to improve AI search visibility."
                width={1200}
                height={800}
                className="w-full h-[320px] sm:h-[380px] object-cover opacity-85"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </section>

          {/* 2. Buyer Pain Section */}
          <section id="buyer-pain" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>The AI Search Gap</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                You rank in search, but AI answers miss or misrepresent you
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-zinc-300 font-serif">
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">1. Uncited in AI Answers</span>
                <p className="leading-relaxed">
                  Potential clients search ChatGPT or Google AI Overviews for your exact services in Perth, but AI synthesises answers recommending competitors who have clearer machine-readable proof.
                </p>
              </div>
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">2. Inaccurate Business Details</span>
                <p className="leading-relaxed">
                  Conflicting address records, outdated phone numbers, or inconsistent service names across legacy directories lead AI engines to present inaccurate business details to buyers.
                </p>
              </div>
              <div className="p-5 bg-black/60 border border-white/10 rounded-xl space-y-2">
                <span className="text-amber-300 font-bold font-mono text-sm block">3. Lack of Measurement</span>
                <p className="leading-relaxed">
                  Most businesses have no visibility into how often their brand is mentioned, cited, or misrepresented across generative engines, making strategic decisions pure guesswork.
                </p>
              </div>
            </div>
          </section>

          {/* 3. GEO vs SEO Comparison Section */}
          <section id="geo-vs-seo" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Strategic Alignment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Understanding GEO vs SEO: How AI Search Builds on Organic Foundations
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                While traditional SEO focuses on keyword positions and backlink volume, Generative Engine Optimisation (GEO) focuses on vector similarity and factual verification. To understand how AI search models digest structured facts, review our <Link href="/knowledge-hub/what-is-aeo" className="text-cyan-400 underline hover:text-cyan-300 font-medium">comprehensive Answer Engine Optimisation definition guide</Link>, or read our technical deep-dives on <Link href="/knowledge-hub/articles/entity-authority-building" className="text-cyan-400 underline hover:text-cyan-300 font-medium">Entity Authority Building</Link> and <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-cyan-400 underline hover:text-cyan-300 font-medium">Retrieval-Augmented Generation (RAG)</Link>. For local Australian businesses and multi-suburb trade providers, explore our dedicated <Link href="/services/aeo/local-business" className="text-purple-300 underline hover:text-purple-200 font-medium">Local Business GEO &amp; AI Search System</Link> or consult our <Link href="/knowledge-hub/geo" className="text-cyan-300 underline hover:text-cyan-200 font-medium">Generative Engine Optimisation Knowledge Hub</Link>.
              </p>
            </div>

            {/* Practical Evidence Block: 90-Day Build */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 font-serif leading-relaxed space-y-1">
              <strong className="text-white font-semibold font-sans block text-sm">How We Proved This: Our 90-Day Build</strong>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                We built this service framework by troubleshooting our own business footprint over 90 days. By connecting our ABN registration (ABN: 61 029 803 255), physical Perth entity coordinates, and atomic service definitions, we eliminated brand confusion across generative benchmark runs. We use this exact audit workflow on client sites.
              </p>
            </div>

            {/* GEO vs SEO Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 border-b border-white/10 text-cyan-400">
                  <tr>
                    <th className="p-3.5 w-1/4">Dimension</th>
                    <th className="p-3.5 w-3/8">Traditional SEO</th>
                    <th className="p-3.5 w-3/8 text-cyan-300">GEO / AI-Search Optimisation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 font-serif">
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Main Aim</td>
                    <td className="p-3.5">Help relevant pages earn visibility and ranking positions in web search results.</td>
                    <td className="p-3.5 text-cyan-200">Help accurate business information become easier to retrieve, verify, and reference in AI-assisted answers.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Core Work</td>
                    <td className="p-3.5">Technical website health, target keywords, backlinks, internal linking, and search intent.</td>
                    <td className="p-3.5 text-cyan-200">Builds on SEO with answer-focused page structure, entity clarity, structured proof, source consistency, and AI visibility testing.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">What is Measured</td>
                    <td className="p-3.5">Organic rankings, impressions, clicks, traffic volume, and web conversions.</td>
                    <td className="p-3.5 text-cyan-200">Brand inclusion, factual accuracy, source/citation inclusion, AI referral traffic, and Search Console AI overview impressions.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">What it is Not</td>
                    <td className="p-3.5">A guarantee of top-ranking search positions or instant traffic.</td>
                    <td className="p-3.5 text-cyan-200">A guarantee of AI citations, recommendations, or model behaviour across proprietary platforms.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Primary Offer Gateway: GEO Visibility Diagnostic */}
          <section id="geo-diagnostic" className="bg-gradient-to-r from-cyan-950/40 via-zinc-950 to-purple-950/40 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,205,216,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <span>Primary Starting Point / Pre-Sprint Gateway</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                  GEO Visibility Diagnostic
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Best for businesses that rank in traditional search but are missing, misrepresented, or uncited in AI answers. We test the real buyer questions that matter and deliver a prioritised 30- or 90-day action plan.
                </p>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-serif pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Prompt set testing based on real services, locations, and buyer questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cross-platform review across Google AI features, ChatGPT Search, and Perplexity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Brand mention accuracy, citation inclusion, and competitor comparison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>First-party content, technical structure, and business fact consistency audit</span>
                  </li>
                </ul>

                {/* Credit Guarantee Note */}
                <div className="p-3.5 bg-black/60 border border-cyan-500/30 rounded-lg text-xs font-serif text-cyan-300">
                  <strong className="font-mono text-white block mb-0.5 font-bold">100% Credit Guarantee:</strong>
                  <span>The full $995 diagnostic fee is credited toward AEO Foundation booked within 60 days of handover.</span>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-3xl font-extrabold text-cyan-300 font-mono block">$995 AUD</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">ex. GST • Standalone Audit &amp; Roadmap</span>
                </div>
                <a
                  href="#geo-contact-form"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book GEO Diagnostic</span>
                </a>
              </div>
            </div>
          </section>

          {/* 5. GEO Micro-Sprints Grid */}
          <AeoStartingPointGrid
            id="local-sprints"
            contactAnchor="#geo-contact-form"
            diagnosticAnchor="#geo-diagnostic"
          />

          {/* 6. AEO Foundation Section */}
          <section id="foundation-implementation" className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Four-Week Structured Engagement</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  AEO Foundation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  A structured four-week deployment for businesses requiring comprehensive, connected improvements across content, entity architecture, and measurement.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 font-serif pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Priority service and location page rewrites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Canonical Brand Facts reference page</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Internal linking &amp; entity mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Structured data validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Profile &amp; citation consistency work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Measurement baseline setup</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-serif italic pt-1">
                  We promise defined technical work, validated schema, and transparent handover. We do not make unsupported claims regarding guaranteed rankings or proprietary model behaviour.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono block">$1,990 AUD ex. GST</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5 font-normal">Delivered across 4 business weeks</span>
                </div>
                <a
                  href="#geo-contact-form"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss AEO Foundation Scope</span>
                </a>
              </div>
            </div>
          </section>

          {/* 7. What We Assess and Measure Section */}
          <section id="measurement" className="bg-zinc-950/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl scroll-mt-24">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Proof &amp; Accountability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                What We Measure
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Clear baseline metrics to evaluate visibility, citation accuracy, and brand inclusion over time.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/5 border-b border-white/10 text-cyan-400">
                  <tr>
                    <th className="p-3.5 w-1/3">Metric</th>
                    <th className="p-3.5 w-2/3">What it Tells You</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 font-serif">
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">AI Visibility Baseline</td>
                    <td className="p-3.5">Whether your business appears for a defined set of service, location, and problem-led buyer prompts across target AI surfaces.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Brand-Answer Accuracy</td>
                    <td className="p-3.5">Whether your core services, locations, contact details, pricing structure, and key differentiators are described correctly by generative engines.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Source or Citation Inclusion</td>
                    <td className="p-3.5">Whether your primary website domain or verified third-party profiles are linked or cited in generative search answers.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Competitor Presence</td>
                    <td className="p-3.5">Which market competitors repeatedly appear in AI answers for target buyer questions, and which source platforms support them.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">AI Referral Traffic</td>
                    <td className="p-3.5">Website visits and downstream user actions attributable to AI search engines (e.g. ChatGPT, Perplexity, Claude).</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono font-semibold text-white">Search Generative-AI Performance</td>
                    <td className="p-3.5">Google Search visibility data from generative features, where reporting and segmentation are accessible within your client Search Console.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-zinc-400 font-serif italic">
              Google advises site owners to follow standard technical and content quality practices for AI features. Performance measurement approaches align with standard Webmaster and Search Console reporting.
            </p>
          </section>

          {/* 8. High-Trust Transparency Section */}
          <section id="transparency" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Service Scope &amp; Boundaries</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Radical transparency on suitability, testing parameters, and service limitations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Who This Is For */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm font-soehne-breit">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Who This Is For</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Businesses with solid organic SEO visibility that are missing or misrepresented in AI search.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Multi-location service providers with inconsistent address or service details online.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Marketing teams needing an auditable AI search baseline before modifying strategy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Perth businesses seeking local relevance without committing to ongoing agency retainers.</span>
                  </li>
                </ul>
              </div>

              {/* What We Test */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm font-soehne-breit">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>What We Test</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>&quot;Best [service] in Perth&quot; and suburb-level regional intent prompts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Problem-led commercial buyer questions (&quot;Who provides X in Perth?&quot;).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Service comparisons, pricing queries, and eligibility requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Branded queries assessing factual accuracy and citation sources.</span>
                  </li>
                </ul>
              </div>

              {/* What GEO Cannot Do */}
              <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm font-soehne-breit">
                  <XCircle className="w-4 h-4 text-amber-400" />
                  <span>What GEO Cannot Do</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Cannot force ChatGPT, Google, or Perplexity to cite your website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Cannot compensate for unclear service offerings, weak proof, or poor technical foundations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>Should not replace core SEO, paid acquisition, reputation management, or conversion optimisation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Evaluating Your AI Visibility & Diagnostic Signals */}
            <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                  Evaluating Your AI Visibility &amp; Diagnostic Signals
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  If your website ranks on page one of Google but is omitted by conversational AI search engines, review our{' '}
                  <Link href="/knowledge-hub/articles/seo-vs-geo-red-flags" className="text-cyan-400 underline hover:text-cyan-300 font-medium">
                    5-point diagnostic checklist on SEO vs GEO red flags
                  </Link>{' '}
                  to identify your site&apos;s retrieval bottlenecks.
                </p>
              </div>
              <Link
                href="/knowledge-hub/articles/seo-vs-geo-red-flags"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-500/20 transition-all shrink-0"
              >
                <span>Read Diagnostic Guide &rarr;</span>
              </Link>
            </div>
          </section>

          {/* 9. FAQ Accordion Section */}
          <section id="faq" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">Direct answers to common questions about AEObility GEO services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

          {/* 10. Direct Contact / Enquiry Form Section */}
          <AeoContactSection
            id="geo-contact-form"
            badgeTitle="GEO Sprint"
            heading="Discuss Your GEO Priority"
            subheading="Tell us about your business services and AI search priorities. We will review your details and confirm scope and pricing before you commit."
            formId="geo_marketing_contact_form"
            leadType="geo_enquiry"
            buttonText="Submit Enquiry"
            receivedHeading="GEO Enquiry Received"
            founderCallout="You will speak directly with Vinnie Baker in Perth to confirm feasibility before any work starts."
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
