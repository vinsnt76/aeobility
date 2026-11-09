# Template 07: Hub & Directory Index (`07-hub-index.md`)

> **Archetype:** Directory Index, Section Hub & Taxonomy Navigator  
> **Target Routes:** `/knowledge-hub`, `/knowledge-hub/articles`, `/knowledge-hub/case-studies`, `/services`, `/solutions`  
> **Primary Goal:** Organize and present AEObility's content clusters, empower users and AI crawlers to discover relevant leaf nodes, and provide fast interactive filtering across categories.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "Knowledge Hub — AI Search & Answer Engine Insights | AEObility",
  description: "Explore technical research, empirical case studies, and practical playbooks on Answer Engine Optimisation (AEO) and Retrieval-Augmented Generation.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub",
  },
  openGraph: {
    title: "AEObility Knowledge Hub — Articles, Case Studies & Playbooks",
    description: "Discover how AI search engines retrieve and recommend brands. Machine-readable research and real-world results.",
    url: "https://aeobility.com.au/knowledge-hub",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/brand/knowledge-hub-overview_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility Knowledge Hub overview mapping technical articles, case studies, and playbooks.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Exploratory & Taxonomy Discovery Intent* (Prompts: *"AEObility knowledge hub", "AEO articles directory", "AEO case studies list", "AEObility guides"*). Primary transition routes user into specific leaf articles or case studies.
* **Semantic Density Architecture:**
  - High card density with category metadata, reading time, publication date, and target audience tag.
  - Uniform card geometry preventing ragged text rags. Zero filler descriptions.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The primary category filter pills sit directly below the H1. A featured spotlight card showcases the highest-impact resource in prime first-fold position.
  - *Section-Level:* Card titles lead with the target entity or concept; cards conclude with directional anchor links.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `CollectionPage`, `ItemList`, `ListItem`.
  - Explicit `hasPart` links point to all child canonical URLs in the directory.

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#hub-hero` | Main hub hero and introductory copy | Breadcrumbs, back-to-top |
| `#hub-filters` | Live category filter pills | Subnav pills, internal routing |
| `#featured-spotlight` | Featured hero resource banner | Direct promo links |
| `#hub-grid` | 3-column responsive resource card grid | Search modal jump links |
| `#hub-search` | In-hub search modal trigger | Global header search trigger |
| `#hub-cta` | Bottom diagnostic scan well | Global footer links |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **Navbar (`<Navbar />`)**
2. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />`)**
3. **Hub Hero Section (`<section id="hub-hero">`)**:
   - Single Geist Mono eyebrow badge with `BookOpen` icon (`font-mono text-xs uppercase text-aeo-cyan`).
   - Single `<h1>` in Söhne Bold: `AEObility <span className="text-gradient-aeo">Knowledge Hub</span>`.
   - Lead paragraph explaining the taxonomy and technical scope.
4. **Interactive Filter Pills (`<div id="hub-filters">`)**:
   - Pill bar allowing users to filter between `All`, `Articles`, `Case Studies`, and `Playbooks`.
5. **Featured Spotlight Card (`<section id="featured-spotlight">`)**:
   - Prominent large card spotlighting the latest/highest-impact resource (e.g. RAG technical reading or Baby Bento case study).
6. **Directory Resource Grid (`<section id="hub-grid">`)**:
   - 3-column responsive card grid with equal-height cards.
   - Each card features: thumbnail image, category pill, reading time, publication date, Söhne title, excerpt, and arrow link.
7. **Search Trigger Bar (`<div id="hub-search">`)**:
   - Prominent search input triggering internal search modal and firing GA4 `search` telemetry.
8. **Bottom Diagnostic Scan Well (`<section id="hub-cta">`)**:
   - Tactile glass card with solid primary CTA (`Run Free Visibility Scan`).
9. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` (Söhne Bold 700).
* **Card H2 / H3:** `font-display text-lg sm:text-xl font-bold text-white leading-snug` (Söhne Bold 700).
* **Card Excerpt:** `font-sans text-sm text-slate-300 leading-relaxed font-normal` (Geist Sans 400).
* **Metadata Text:** `font-sans text-xs text-slate-400 font-medium`.
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate `#030303` with ambient cyan underlays.
* **Tier 1 (Strong Glass):** Featured spotlight card: `bg-zinc-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl`.
* **Tier 2 (Mid Glass):** Directory grid cards: `bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all`.
* **The Solid Breakout Rule:** Filter pill active state uses solid cyan `#00cdd8 text-black font-bold`; primary CTA button in bottom well is solid gradient `from-aeo-cyan to-aeo-purple text-black font-bold`.

---

## 7. JSON-LD Schema Architecture (`CollectionPage`)

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
      "@type": "CollectionPage",
      "@id": "https://aeobility.com.au/knowledge-hub#webpage",
      "url": "https://aeobility.com.au/knowledge-hub",
      "name": "AEObility Knowledge Hub",
      "description": "Technical articles, empirical case studies, and playbooks on answer engine optimisation.",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        }
      ],
      "hasPart": [
        {
          "@type": "TechArticle",
          "name": "RAG, Answer Engines & Machine-Readable Content",
          "url": "https://aeobility.com.au/knowledge-hub/articles/retrieval-augmented-generation"
        },
        {
          "@type": "TechArticle",
          "name": "Baby Bento Case Study",
          "url": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento"
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
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { BookOpen, ArrowRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: "Knowledge Hub — AI Search & Answer Engine Insights | AEObility",
  description: "Explore technical research, empirical case studies, and practical playbooks on Answer Engine Optimisation (AEO).",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub",
  },
};

export default function KnowledgeHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://aeobility.com.au/knowledge-hub",
    "name": "AEObility Knowledge Hub",
    "inLanguage": "en-AU"
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-12">
        
        {/* Hub Hero */}
        <section id="hub-hero" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
            <BookOpen className="w-4 h-4 text-aeo-cyan" />
            <span>Research &amp; Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight font-display text-white">
            AEObility <span className="text-gradient-aeo">Knowledge Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
            Machine-readable research, empirical case studies, and engineering playbooks designed for Australian business operators.
          </p>
        </section>

        {/* Directory Grid */}
        <section id="hub-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/knowledge-hub/articles/retrieval-augmented-generation"
            className="p-6 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-semibold uppercase">Article &bull; 6 min read</span>
              <h2 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                RAG, Answer Engines &amp; Machine-Readable Content
              </h2>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Learn how vector retrieval, passage chunking, and semantic schemas power brand visibility across AI assistants.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-aeo-cyan pt-2">
              <span>Read technical article</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 9. Pre-Flight QA Checklist

- [ ] **Server Component Root:** No `'use client'` at root of `page.tsx`; standard `metadata` exported.
- [ ] **Exact Single Eyebrow:** Exactly one mono pill badge above the hero headline.
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold.
- [ ] **Card Grid Responsive:** Equal-height 3-column grid on desktop, single column on mobile.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Reserved Anchors Intact:** Verified `#hub-hero`, `#hub-filters`, `#featured-spotlight`, `#hub-grid`, `#hub-search`, `#hub-cta`.
- [ ] **Button Geometry:** Primary button capped at 2–4 words (`Run Free Visibility Scan`).
- [ ] **Absolute Canonical Schema:** Verified schema uses `CollectionPage` with absolute canonical URIs.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
