# Template 04: Concept Research Article (`04-concept-article.md`)

> **Archetype:** Long-Form Technical Research & Thought Leadership  
> **Target Routes:** `/knowledge-hub/articles/*` (e.g. RAG, Entity Authority, Query Fan-Out, Positional Bias, AI Hallucinations)  
> **Primary Goal:** Establish definitive technical authority on AI search engine mechanics, optimise passage retrieval and chunk grounding for LLM scrapers, and drive organic citations and diagnostic scans.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "AI Search Optimisation: RAG, Answer Engines & Content | AEObility",
  description: "Master AI search optimisation with Retrieval-Augmented Generation (RAG). Learn how vector retrieval, passage chunking, and semantic schemas power brand visibility.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
  },
  openGraph: {
    title: "RAG, Answer Engines & Why Machine-Readable Content Matters | AEObility",
    description: "A technical guide explaining Retrieval-Augmented Generation and its role in AI search optimisation. Structured content, chunking, and entity clarity.",
    url: "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp",
        width: 1200,
        height: 800,
        alt: "AI Search Optimisation and Retrieval-Augmented Generation (RAG) visual diagram depicting vector retrieval, passage chunking, and semantic entity grounding by AEObility.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Conceptual, Mechanistic & Educational Intent* (Prompts: *"how does RAG retrieval work", "what is positional bias in AI search", "how to structure content for ChatGPT search", "structured data query fan out"*). Secondary transition leads to related case studies or diagnostic tools.
* **Semantic Density Architecture:**
  - Strict 90–120 token atomic passage blocks.
  - Zero conversational preamble or rhetorical throat-clearing ("In today's fast-paced digital world...").
  - Technical comparison tables (e.g. Pre-Chunking vs Post-Chunking parameters) anchored on solid opaque bases.
  - Atomic DefinedTerm cards matching the page's `DefinedTermSet` JSON-LD schema vocabulary.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The core definition/verdict is delivered within the first 100 words under the H1 before any visual elements. Sticky Quick-Jump TOC bar immediately exposes all section anchors so crawlers can index sub-sections independently.
  - *Section-Level:* Inverted pyramid prose. Sentence 1 of every H2/H3 states the exact answer/mechanism. Middle sentences elaborate on vector implications. Concluding sentence binds the concept to commercial impact.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `TechArticle`, `DefinedTermSet`, `FAQPage`.
  - Disambiguated `about` nodes link to authoritative Wikidata URIs (`Large Language Model`, `Vector Space Model`, `Search Engine Optimisation`).
  - Author provenance grounded in `Person` schema (`https://aeobility.com.au/vince-baker#author`).
  - Canonical Tri-Graph Triples:
    - **Concept:** TechArticle (`https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article`)
    - **Relationship:** Commercial Service Pillar (`https://aeobility.com.au/services/aeo#service`, `isRelatedTo`)
    - **Evidence:** Quantified Case Study (`https://aeobility.com.au/knowledge-hub/case-studies/baby-bento`, `subjectOf`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#article-header` | Main title and author metadata | Breadcrumbs, back-to-top |
| `#rag-pipeline` | 4-node visual schematic | Internal article links, sitemap |
| `#grounding-mechanics` | Core grounding prose block | External citation anchors |
| `#passage-chunking` | Atomic chunking section | Technical guide cross-links |
| `#positional-bias` | Retrieval bias breakdown | Glossary definition links |
| `#rag-faq` | FAQ accordion | Search engine rich results |
| `#diagnostic-scan` | Bottom conversion scan well | Contextual guide CTAs |

---

## 4. Dual-Zone Layout Architecture & Wireframe

To achieve a futuristic, dimensional aesthetic without compromising reading ergonomics, Template 04 enforces a strict **Dual-Zone Layout**:

```
+---------------------------------------------------------------------------------------------------+
|  SubNavPills + Breadcrumbs (Navigation Layer)                                                    |
+---------------------------------------------------------------------------------------------------+
|  Deep Canvas (#0C0D12) with Ambient Neon Underlay Orbs (Cyan #00E5FF & Violet #BD00FF)            |
|                                                                                                   |
|  [Translucent Glass Hero Chip: Category Pill]                                                     |
|  Page Title (Pure White #FFFFFF, Söhne Bold, Single H1)                                           |
|  Author Metadata Bar (Avatar, Vinnie Baker, Date, Read Time)                                      |
|  21:9 Featured Diagram Banner (with Figcaption)                                                   |
|  Hero Visual Pipeline Schematic (4-Node Tactile Glass Cards)                                      |
|                                                                                                   |
|  +-----------------------------+  +------------------------------------------------------------+  |
|  | LEFT: Sticky Glass Sidebar  |  | RIGHT: Protected Core Reading Zone                         |  |
|  | (md:col-span-4)             |  | (md:col-span-8 • Solid #0C0D12 or 85%+ Dark Base)          |  |
|  | - Reading Progress Bar      |  | - Zero background noise beneath body text                  |  |
|  | - Interactive Anchor TOC    |  | - Headings: Pure White #FFFFFF Söhne Bold                  |  |
|  | - Author Provenance Card    |  | - Body Prose: Geist Sans Medium (500), #E2E8F0, >=16px     |  |
|  | - DefinedTerm Quick Links   |  | - Strict 100% Text Opacity (No alpha text fading)          |  |
|  | - Frosted Glass: 35% tint,  |  | - Multi-Row Comparison Tables on Opaque Slate Base         |  |
|  |   blur(16px), 1px border    |  | - Styled Callout Blockquotes (Cyan Left Accent)            |  |
|  +-----------------------------+  +------------------------------------------------------------+  |
|                                                                                                   |
|  Defined Term Cards Grid (2-Column DefinedTermSet Units)                                          |
|  Comprehensive FAQ Accordion (6+ Questions in FAQPage Schema)                                     |
|  Related Evidence & Services Lattice (3-Card Grid to Case Studies & Services)                    |
|  Contextual Diagnostic Scan Well (Solid Breakout Primary Button)                                 |
+---------------------------------------------------------------------------------------------------+
```

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight` (Söhne Bold 700).
* **Section H2:** `font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Sub H3:** `font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug` (Söhne Halbfett 600).
* **Continuous Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, strictly $\ge$ 16px, 100% opacity).
* **Blockquotes:** `font-serif text-sm sm:text-base text-slate-300 italic leading-relaxed pl-4 border-l-2 border-aeo-cyan` (IBM Plex Serif 400).
* **Code Snippets:** `font-mono text-xs sm:text-sm text-cyan-300 bg-black/60 p-4 rounded-xl border border-white/10`.

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Setup:** Deep baseline `#0C0D12` with subtle cyan/violet ambient neon underlays.
* **Tier 2 (Mid Glass Sidebar):** Sticky TOC sidebar: `bg-slate-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-xl transform translate-z-0`.
* **Tier 3 (Light Glass Chips):** Hero category badge and author strip: `bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs`.
* **Protected Reading Zone:** Right column uses `bg-[#0C0D12]` or `bg-slate-950/90` with zero blur or dynamic noise directly behind text.
* **The Solid Breakout Rule:** Comparison tables use solid `#080B12` base; primary CTA button in scan well is solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.

---

## 7. JSON-LD Schema Architecture (`TechArticle` & `DefinedTermSet`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au/",
      "logo": "https://aeobility.com.au/icons/android-chrome-512x512.png",
      "founder": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "sameAs": [
        "https://www.linkedin.com/company/aeobility"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://aeobility.com.au/#vincebaker",
      "name": "Vince Baker",
      "jobTitle": "Founder & Principal AEO Specialist",
      "worksFor": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "url": "https://aeobility.com.au/about",
      "sameAs": [
        "https://www.linkedin.com/in/vincebaker/"
      ]
    },
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
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#webpage",
      "url": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
      "name": "RAG, Answer Engines & Why Machine-Readable Content Matters | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article",
      "headline": "RAG, Answer Engines & Why Machine-Readable Content Matters",
      "description": "A technical guide explaining Retrieval-Augmented Generation (RAG) and its role in AI search optimisation.",
      "author": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "datePublished": "2026-07-23",
      "dateModified": "2026-08-31",
      "inLanguage": "en-AU",
      "about": [
        {
          "@type": "Thing",
          "name": "Large Language Model",
          "sameAs": "https://www.wikidata.org/wiki/Q115305900"
        },
        {
          "@type": "Thing",
          "name": "Vector Space Model",
          "sameAs": "https://www.wikidata.org/wiki/Q641344"
        }
      ]
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#terms",
      "name": "RAG & Answer Engine Technical Glossary",
      "hasDefinedTerm": [
        {
          "@type": "DefinedTerm",
          "name": "Atomic Passage Chunks",
          "description": "Self-contained text blocks (typically 90-120 tokens) optimised for direct vector retrieval and synthesis."
        }
      ]
    }
  ]
}
```

---

## 8. Next.js 15 Server Component Boilerplate

```tsx
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { Layers, FileText, Search, Sparkles, ArrowRight } from 'lucide-react';
import InteractiveFaqAccordion from '@/components/FaqAccordion'; // Client leaf

export const metadata: Metadata = {
  title: "AI Search Optimisation: RAG, Answer Engines & Content | AEObility",
  description: "Master AI search optimisation with Retrieval-Augmented Generation (RAG). Learn how vector retrieval and passage chunking work.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation",
  },
};

export default function RagArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation#article",
        "headline": "RAG, Answer Engines & Why Machine-Readable Content Matters",
        "inLanguage": "en-AU"
      }
    ]
  };

  const faqs = [
    {
      question: "How does RAG support AI search optimisation?",
      answer: "RAG is one of the core technical workflows powering AI search optimisation. It converts structured content into vector embeddings, enabling answer engines to retrieve, cite, and recommend relevant passages."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0D12] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Ambient Neon Underlay Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        
        {/* Header Block */}
        <section id="article-header" className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan font-semibold">
            <span>Articles &amp; Guides &rarr; <Link href="/knowledge-hub/articles" className="hover:underline">Technical Reading</Link></span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-display text-white">
            RAG, Answer Engines &amp; Why Machine-Readable Content Matters
          </h1>
          <p className="text-lg md:text-xl text-aeo-cyan font-semibold font-display">
            AI Search Optimisation: Get Found. Get Chosen.
          </p>

          {/* Author Metadata Strip */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 font-sans border-b border-white/10 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative border border-white/20">
                <Image src="/images/about/Profile-Picture-Vinnie.png" alt="Vinnie Baker" fill sizes="32px" className="object-cover" />
              </div>
              <span className="font-semibold text-white">Vinnie Baker</span>
            </div>
            <span>&bull;</span>
            <time dateTime="2026-07-23">Jul 23, 2026</time>
            <span>&bull;</span>
            <span>6 min read</span>
          </div>
        </section>

        {/* Featured 21:9 Graphic Banner */}
        <figure className="my-2">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/knowledge-hub/ai-search-optimisation-why-RAG-matters-AEObilty.webp"
              alt="Visual guide to AI Search Optimisation and Retrieval-Augmented Generation (RAG) passage extraction."
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-center text-xs text-slate-400 mt-3 font-sans italic">
            Visual guide to AI Search Optimisation and Retrieval-Augmented Generation (RAG) passage extraction.
          </figcaption>
        </figure>

        {/* Hero Visual Pipeline Schematic (4-Node Tactile Glass) */}
        <div id="rag-pipeline" className="p-6 md:p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative shadow-xl transform translate-z-0">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <span className="text-xs uppercase tracking-widest text-aeo-cyan font-bold font-mono flex items-center gap-2">
              <Layers className="w-4 h-4" /> RAG Content Pipeline
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Source &rarr; Chunk &rarr; Retrieval &rarr; Answer</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-1 font-display">1. Source Content</h3>
              <p className="text-xs text-slate-300 font-sans">Raw web pages, schemas, and brand documentation.</p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-1 font-display">2. Atomic Chunks</h3>
              <p className="text-xs text-slate-300 font-sans">90-120 token self-contained passage blocks.</p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-1 font-display">3. Vector Retrieval</h3>
              <p className="text-xs text-slate-300 font-sans">Vector distance search fetches matching passages.</p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl">
              <h3 className="font-bold text-white text-sm mb-1 font-display">4. Answer Features</h3>
              <p className="text-xs text-slate-300 font-sans">Cited answer snippets, panels &amp; recommendations.</p>
            </div>
          </div>
        </div>

        {/* Dual-Column Layout: Left Sticky Sidebar + Right Protected Reading Zone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mt-4">
          
          {/* Left Column: Sticky Glass TOC Companion */}
          <aside className="md:col-span-4 space-y-6">
            <div className="sticky top-28 p-5 bg-slate-900/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transform translate-z-0 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-aeo-cyan">
                Quick Navigation
              </div>
              <nav className="flex flex-col gap-2 text-xs font-sans text-slate-300">
                <a href="#rag-pipeline" className="hover:text-cyan-300 transition-colors">1. RAG Content Pipeline</a>
                <a href="#grounding-mechanics" className="hover:text-cyan-300 transition-colors">2. Grounding Mechanics &amp; Drift</a>
                <a href="#passage-chunking" className="hover:text-cyan-300 transition-colors">3. Atomic Passage Chunking</a>
                <a href="#positional-bias" className="hover:text-cyan-300 transition-colors">4. Positional Bias &amp; Inverted Pyramids</a>
                <a href="#rag-faq" className="hover:text-cyan-300 transition-colors">5. Frequently Asked Questions</a>
              </nav>
            </div>
          </aside>

          {/* Right Column: Protected Core Reading Zone */}
          <article className="md:col-span-8 bg-[#0C0D12] space-y-8">
            <section id="grounding-mechanics" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                How Retrieval-Augmented Generation Shapes AI Search
              </h2>
              <p className="text-base text-slate-200 leading-relaxed font-medium font-sans">
                Retrieval-Augmented Generation combines real-time search retrieval with generative AI synthesis. Instead of relying solely on parametric memory, answer engines fetch high-similarity passage chunks from external web pages before generating an answer.
              </p>
              <blockquote className="border-l-2 border-aeo-cyan pl-4 text-slate-300 italic font-serif my-4">
                When content is formatted into atomic answer blocks, vector distance drops and citation confidence surges.
              </blockquote>
            </section>

            {/* Additional Article Sections, Tables, Glossary Cards... */}
            <section id="rag-faq" className="scroll-mt-28 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold font-display text-white mb-6">Frequently Asked Questions</h2>
              <InteractiveFaqAccordion faqs={faqs} />
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 9. Pre-Flight QA Checklist

- [ ] **Server Component Root:** No `'use client'` at root of `page.tsx`; standard `metadata` exported.
- [ ] **Exact Single Eyebrow:** Exactly one mono category badge above the hero headline.
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold with exact concept phrasing.
- [ ] **Dual-Zone Layout Active:** Left column uses sticky frosted glass; right column is grounded on solid `#0C0D12` / `bg-slate-950/90`.
- [ ] **Zero Em Dashes:** Clean colons, commas, periods, or standard hyphens only.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum with 100% opacity.
- [ ] **Reserved Anchors Intact:** Verified `#article-header`, `#rag-pipeline`, `#grounding-mechanics`, `#passage-chunking`, `#positional-bias`, `#rag-faq`.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Absolute Canonical Schema:** Verified `@id` links to `https://aeobility.com.au/knowledge-hub/articles/...#article`.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
