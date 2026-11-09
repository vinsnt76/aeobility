import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { getShopifyAeoSchemaGraph } from '@/lib/schema/shopifyAeo';
import FaqAccordion from '@/components/FaqAccordion';
import AeoDiagnosticSection from '@/components/services/AeoDiagnosticSection';
import AeoContactSection from '@/components/services/AeoContactSection';
import AeoStartingPointGrid from '@/components/services/AeoStartingPointGrid';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Code, 
  Database, 
  ShieldCheck, 
  AlertTriangle, 
  Calendar, 
  Boxes, 
  Cpu, 
  Check, 
  FileCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Shopify AEO Services & E-Commerce AI Search | AEObility",
  description: "Shopify e-commerce Answer Engine Optimisation. Refactor Liquid product templates, Google Merchant Center feeds, and collection schema graphs. Sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo/shopify",
  },
  openGraph: {
    title: "Shopify AEO Services & E-Commerce AI Search | AEObility",
    description: "Make your Shopify products and collections reliably discoverable across AI search interfaces, AI Overviews, digital maps, and conversational shopping surfaces.",
    url: "https://aeobility.com.au/services/aeo/shopify",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/shopify-aeo-and-ai-search-marketing_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility Shopify e-commerce audit interface mapping product graph data, Liquid schema structures, and collection page intent hierarchies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify AEO Services & E-Commerce AI Search | AEObility",
    description: "Make your Shopify products and collections discoverable across AI search interfaces, AI Overviews, and conversational shopping surfaces.",
    images: ["https://aeobility.com.au/images/services/shopify-aeo-and-ai-search-marketing_AEObility.webp"],
  },
  keywords: [
    "shopify aeo services",
    "shopify ai search marketing",
    "shopify product schema markup",
    "liquid product template aeo",
    "google merchant center feed optimisation",
    "shopify collection page schema"
  ]
};

export const SHOPIFY_AEO_INTERNAL_LINKS = [
  {
    targetSlug: "/services/aeo",
    anchorText: "canonical AEO Services Hub",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/services/aeo/costs-timing",
    anchorText: "AEO Costs & Timing",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/solutions/aeo-sprint",
    anchorText: "AEO Technical Sprints Package",
    entityRelation: "http://schema.org/isRelatedTo"
  },
  {
    targetSlug: "/contact",
    anchorText: "Book an AEO Content & Schema Audit",
    entityRelation: "http://schema.org/isRelatedTo"
  }
];

export default function ShopifyAeoPage() {
  const faqs = [
    {
      question: "How does AEO optimise Shopify collection pages?",
      answer: "By implementing CollectionPage and ItemList schema types that organise product sub-nodes into structured indexes, allowing AI scrapers to read catalogue relationships without relying on client-side script filtering."
    },
    {
      question: "What is included in a $495 Shopify Product Data Micro-Sprint?",
      answer: "One Micro-Sprint covers one agreed product, collection or structured-data priority. It includes the agreed implementation or rewrite work, validation checks, a summary of completed changes, and handover notes. Additional products or collections are scoped separately."
    },
    {
      question: "How long does a Shopify AEO sprint take to deliver?",
      answer: "Most Micro-Sprints are delivered within 4–5 business days after the scope, store access, and required product parameters are confirmed. More complex multi-collection requirements are scheduled across our 4-week AEO Foundation track."
    },
    {
      question: "Can I credit my Blueprint fee towards AEO Foundation?",
      answer: "Yes. If you complete the Strategic Blueprint and book AEO Foundation within 60 days of handover, the full $995 Blueprint fee is applied directly to the Foundation work. The credit does not apply to standalone Micro-Sprints."
    },
    {
      question: "Do you require ongoing monthly retainers or app subscriptions?",
      answer: "No. Shopify Sprints are fixed-scope, productised engagements. No ongoing retainer or AEObility app subscription is required; all changes are made directly within your Liquid theme and schema graphs."
    },
    {
      question: "What access is required to begin a Shopify sprint?",
      answer: "Depending on the agreed scope, we require collaborator access to your Shopify theme preview, Google Merchant Center feed access, and read-access to Google Search Console for validation. We confirm minimal necessary permissions before work begins."
    },
    {
      question: "What makes Shopify store optimisation for AI search different from traditional SEO?",
      answer: "AI search engines (such as ChatGPT, Perplexity, Claude, and Gemini) extract structured product details, price specifications, availability, and clear collection answers directly. We format your Shopify Liquid schema, Google Merchant Center feed fields, and product hierarchy so AI assistants interpret your inventory with high confidence."
    }
  ];

  const formattedFaqs = faqs.map((f) => ({
    q: f.question,
    a: f.answer,
  }));

  const jsonLdGraph = getShopifyAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Unified JSON-LD Connected Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.aeo} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* 1. Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-medium">
              <ShoppingBag className="w-4 h-4 text-aeo-cyan" />
              <span>Shopify E-Commerce AEO &amp; AI Search</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-soehne-breit">
              Shopify AEO Services: <span className="text-gradient-aeo">AI-Ready Ingestion Architecture</span>
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed font-soehne-breit">
                Make your Shopify products and collections reliably discoverable across AI search interfaces, AI Overviews, digital maps, and conversational shopping surfaces.
              </p>
              
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                This Shopify sub-node extends the canonical <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services Hub</Link> with platform-specific ingestion patterns for e-commerce.
              </p>

              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>AEO Foundation $1,990 AUD ex. GST</span>
              </div>
            </div>

            {/* Bespoke Engineering Consultancy Callout */}
            <div className="my-6 max-w-2xl mx-auto rounded-xl border border-aeo-cyan/30 bg-[#0D111A] p-6 shadow-2xl text-left">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-aeo-cyan/10 p-2 text-aeo-cyan flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Bespoke Engineering Consultancy (Not an App)</h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed font-light">
                    AEObility provides direct Liquid code refactoring, custom schema architecture, and server-side ingestion rules for Shopify stores. We operate as an independent Australian B2B consultancy, not an automated Shopify App Store plugin or subscription software extension.
                  </p>
                </div>
              </div>
            </div>

            {/* Who This Is For Qualification Matrix */}
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl max-w-2xl mx-auto text-left space-y-3 shadow-lg">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan flex items-center gap-1.5 font-soehne-breit">
                <Check className="w-4 h-4 text-aeo-cyan" />
                <span>Who this is for:</span>
              </h2>
              <ul className="space-y-2 text-xs text-white/80 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>Shopify store owners managing 20+ active product lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>E-commerce brands running synchronised Google Merchant Center feeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-aeo-cyan mt-0.5">&bull;</span>
                  <span>Retailers navigating variant-rich catalogues or high-frequency stock changes.</span>
                </li>
              </ul>
            </div>

            {/* Featured 1200x800 WebP Image Hero Banner with Overlaid CTAs */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/shopify-aeo-and-ai-search-marketing_AEObility.webp"
                alt="AEObility Shopify e-commerce audit interface mapping product graph data, Liquid schema structures, and collection page intent hierarchies."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Hero CTAs */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-3.5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one product-data issue or build a stronger store foundation.</span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 font-serif block">Typical delivery: 4–5 business days from confirmed scope and access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href="#shopify-contact-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,205,216,0.4)] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss your Shopify store</span>
                  </a>
                  <a
                    href="#shopify-diagnostic-form"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-white font-semibold text-xs transition-all duration-300 hover:bg-zinc-800 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Run a free store scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-serif">
              Not sure whether you need product schema clean-up or a broader store audit? We will help you choose the right starting point.
            </p>
          </section>

          {/* 2. Technical Building Blocks */}
          <section id="technical-blocks" className="border-t border-white/10 pt-16 space-y-10 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Shopify Ingestion Architecture &amp; Technical Foundations</h2>
              <p className="text-xs sm:text-sm text-white/60 font-serif">Practical engineering frameworks for product data, template rendering, and collection structure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Liquid Template Structure */}
              <div id="liquid-template-structure" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <Code className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR 01</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Liquid Template Structure</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    AI crawlers ingest products by parsing rendered HTML. We refactor your Shopify Liquid templates so descriptions, variant prices, and live availability appear in predictable, server-rendered blocks rather than delayed client-side scripts.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For developers: We ensure product variants render cleanly in the initial DOM without script dependencies that cause crawler timeouts.
                </p>
              </div>

              {/* Card 2: Merchant Feed and Schema Alignment */}
              <div id="merchant-center-feed" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-purple-400 font-bold">PILLAR 02</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Merchant Feed and Schema Alignment</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Conversational search engines verify product claims by cross-referencing on-page JSON-LD against external feeds. We align your Google Merchant Center data with your store schema, keeping identifiers like GTIN, brand, price, and stock status identical across both sources.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For developers: Eliminates Content API payload discrepancies against server-rendered Product and Offer schema graphs.
                </p>
              </div>

              {/* Card 3: Inventory and Variant Reconciliation */}
              <div id="inventory-variant-reconciliation" className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl space-y-4 text-left scroll-mt-24 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-black border border-white/10 rounded-xl">
                      <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR 03</span>
                      <h3 className="text-base font-bold text-white font-soehne-breit">Inventory and Variant Reconciliation</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    Mismatched variant data causes AI shopping engines to misquote prices or drop out-of-stock items from recommendations. We audit your variant arrays and collection hierarchies to ensure bots read live inventory states accurately without hallucinating archived options.
                  </p>
                </div>
                <p className="text-[11px] text-zinc-400 font-serif italic border-t border-white/5 pt-2">
                  For developers: Synchronises multi-variant availability states directly with collection indexes and parent entity IDs.
                </p>
              </div>
            </div>

            {/* Critical Conversion Warning Box */}
            <div className="p-5 bg-amber-500/10 border-l-4 border-amber-400 rounded-r-2xl text-xs text-amber-200/90 leading-relaxed shadow-lg">
              <p className="font-bold text-amber-300 uppercase tracking-wider font-mono mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Critical Conversion Warning</span>
              </p>
              <p>
                Without clean product schema and feed data, AI search engines and conversational shopping assistants may misread product variants, prices, or live stock availability, excluding your store from direct product recommendations.
              </p>
            </div>
          </section>

          {/* 3. Engagement Paths Grid */}
          <AeoStartingPointGrid
            id="engagement-paths"
            contactAnchor="#shopify-contact-form"
            diagnosticAnchor="#shopify-diagnostic-form"
          />

          {/* Comparison Matrix Table */}
          <div id="shopify-comparison" className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-md scroll-mt-24">
            <table className="w-full text-left text-xs font-serif border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-3.5 sm:p-4">Service / Tier</th>
                  <th className="p-3.5 sm:p-4">Target Scope</th>
                  <th className="p-3.5 sm:p-4">Best For</th>
                  <th className="p-3.5 sm:p-4 text-right">Price (ex. GST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Product Data Sprint</td>
                  <td className="p-3.5 sm:p-4">1 Collection or Product Schema</td>
                  <td className="p-3.5 sm:p-4">Quick fix for a single priority product line</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">From $495 AUD</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">E-Commerce Blueprint</td>
                  <td className="p-3.5 sm:p-4">Full Store Audit &amp; 90-Day Plan</td>
                  <td className="p-3.5 sm:p-4">Unclear what is blocking store AI visibility</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$995 AUD</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="p-3.5 sm:p-4 font-bold text-white font-sans">Shopify Foundation</td>
                  <td className="p-3.5 sm:p-4">Multi-Page &amp; Collection Alignment</td>
                  <td className="p-3.5 sm:p-4">Connected improvements across entire store</td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-cyan-300">$1,990 AUD</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Scope & Inclusion Box */}
          <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-5 text-xs text-zinc-300 font-serif leading-relaxed space-y-3 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>Every Shopify Sprint includes:</span>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 font-serif">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>One agreed store priority, specified product schema, or collection rewrite work.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Comprehensive validation checks, summary of completed changes, and handover notes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Typical delivery: 4–5 business days from confirmed scope and store access. Explore our productised <Link href="/solutions/aeo-sprint" className="text-cyan-400 hover:underline font-medium">Shopify structured implementation sprints</Link> or inspect our <Link href="/knowledge-hub/case-studies/baby-bento" className="text-purple-400 hover:underline font-medium">Baby Bento ecommerce case study</Link> to review empirical sales uplift results.</span>
              </li>
            </ul>
          </div>

          {/* Diagnostic Section */}
          <AeoDiagnosticSection
            id="shopify-diagnostic-form"
            badgeTitle="Instant Shopify Store Scan"
            heading="Run a Free Shopify Visibility Scan"
            subheading="Enter your store URL to check key product-data, collection-page, and AI-search readiness signals."
            formId="shopify_diagnostic_form"
            leadType="shopify_audit_request"
          />

          {/* AEO Foundation Upgrade Block */}
          <section id="shopify-foundation" className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-purple-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] scroll-mt-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <Boxes className="w-4 h-4 text-purple-400" />
                  <span>Connected improvements across priority products &amp; collections</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-soehne-breit">
                  Shopify AEO Foundation
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
                  Combine agreed improvements across product data, structured data, collection pages, internal linking, and selected product pages in one focused four-week engagement.
                </p>

                {/* Prominently Elevated Blueprint Credit Callout Box */}
                <div className="p-4 rounded-xl bg-black/70 border border-cyan-500/30 text-xs text-zinc-300 font-serif leading-relaxed space-y-1 shadow-md">
                  <strong className="text-cyan-300 font-mono text-sm block font-bold">Completed the Blueprint?</strong>
                  <p>
                    If you complete the Strategic Blueprint and book AEO Foundation within 60 days of handover, the full $995 Blueprint fee is applied to the Foundation work. The credit does not apply to standalone Micro-Sprints and cannot be exchanged for cash. View <Link href="/services/aeo/costs-timing" className="text-cyan-400 hover:underline font-medium">AEO Costs &amp; Timing</Link>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between space-y-4 shrink-0 w-full md:w-auto">
                <div className="text-left md:text-right">
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono block">$1,990 AUD ex. GST</span>
                  <span className="text-xs text-zinc-400 font-mono block mt-0.5">Typical schedule: delivered across four weeks</span>
                </div>
                <a
                  href="#shopify-contact-form"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Discuss Shopify Foundation</span>
                </a>
              </div>
            </div>
          </section>

          {/* Atomic Answer Block (Retail Schema Parsing) */}
          <section id="shopify-parsing-atomic-block" className="border-t border-white/10 pt-16 scroll-mt-24">
            <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-aeo-cyan/10 via-white/[0.02] to-aeo-purple/10 border-l-4 border-aeo-cyan rounded-r-2xl shadow-xl space-y-3" data-entity-type="AnswerBlock">
              <p className="text-xs font-mono font-bold uppercase text-aeo-cyan tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-aeo-cyan" />
                <span>Direct Answer &bull; E-Commerce Ingestion</span>
              </p>
              <h2 className="text-lg sm:text-xl font-bold text-white font-soehne-breit">
                How do AI search systems parse product data on Shopify stores?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                AI search crawlers read Shopify store data by moving systematically from collection overview pages down to individual product nodes. Eligible AI systems extract both visible text descriptions and embedded, machine-readable JSON-LD metadata, alongside synchronised Google Merchant Center feed signals. To resolve ambiguity between complex product variants, sizes, or fluctuating price options, engines rely on explicit identity attributes (such as Global Trade Item Numbers (GTIN), manufacturer brand data, and clear stock status entries). Well-scoped code blocks ensure these product facts stay unified during retrieval, improving your visibility when platforms compose conversational shopping recommendations.
              </p>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section id="faq-shopify" className="border-t border-white/10 pt-16 space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">Frequently asked questions</h2>
              <p className="text-xs text-white/60 font-serif">Everything you need to know about AEObility Shopify AEO sprints.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={formattedFaqs} />
            </div>
          </section>

          {/* Direct Contact Form Section */}
          <AeoContactSection
            id="shopify-contact-form"
            badgeTitle="Shopify AEO Sprint"
            heading="Discuss Your Shopify Store"
            subheading="Tell us about your Shopify store and product data priorities. We will confirm scope and pricing before you commit."
            formId="shopify_contact_form"
            leadType="shopify_enquiry"
            buttonText="Discuss Shopify Store"
            receivedHeading="Shopify Enquiry Received"
            founderCallout="You will speak directly with Vinnie Baker in Perth to confirm feasibility before any work starts."
          />

          {/* Bottom-Up Link to Root Hub */}
          <div className="pt-4 flex">
            <Link href="/services/aeo" className="text-xs font-medium text-white/40 hover:text-white transition-colors">
              &larr; Back to <strong className="text-white hover:underline">AEO Services Hub</strong>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
