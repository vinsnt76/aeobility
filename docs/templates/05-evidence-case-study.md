# Template 05: Evidence Case Study (`05-evidence-case-study.md`)

> **Archetype:** Quantified Empirical Case Study & Client Evidence  
> **Target Routes:** `/knowledge-hub/case-studies/baby-bento`, `/knowledge-hub/case-studies/aeo-geo-blueprint-90-days`  
> **Primary Goal:** Provide verifiable machine-readable proof of commercial and traffic uplift from AEObility's structural optimisation, grounding claims in client telemetry and converting prospects directly into service engagements.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "Case Study: Structural Search Alignment | AEObility",
  description: "See how structural search alignment reversed declining organic momentum and delivered a +17% sales uplift for an Australian ecommerce store.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
  },
  openGraph: {
    title: "Baby Bento Case Study — +17% Sales Uplift via AEO | AEObility",
    description: "Discover how AEObility rebuilt intent alignment and lifted AI search visibility for Baby Bento — resulting in +17% sales and +95% CTR.",
    url: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/case-study-aeo-lifts-traffic_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Telemetry graph showing +17% sales uplift and +95% CTR improvement for Baby Bento following structural search alignment by AEObility.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Empirical Proof & Validation Intent* (Prompts: *"AEO case study Australia", "Baby Bento search alignment results", "AEO ROI ecommerce", "evidence of answer engine sales lift", "AEObility client results"*). Primary transition routes directly to commercial sprint engagement.
* **Semantic Density Architecture:**
  - Highly concentrated numerical density per passage (`+17–18% core sales uplift`, `95% CTR improvement`, `+55% qualified clicks`, `+29% ranking position`, `+46% YoY discount volume blowout`).
  - Recessed data wells and side-by-side Before vs After telemetry matrices comparing baseline metrics against post-sprint gains.
  - Verified downloadable PDF evidence report with file size and hash checksum.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The 5-card metric strip is placed immediately below the hero cover image. The executive summary states the full-year baseline challenge and turnaround metrics in the first two paragraphs above the fold.
  - *Section-Level:* The Baseline Problem statement highlights the single core metric failure (*"Search Engines Had Lost the Plot: +46% Discount Volume YoY"*) in the headline and opening sentence.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `TechArticle`, `ClaimReview`, `Organization`, `Thing`.
  - Explicitly sets `mainEntity` to `/services/aeo#service`.
  - Declares client entity (`Baby Bento`), target audience (`Australian ecommerce operators`), and verified claim review text.
  - Canonical Tri-Graph Triples:
    - **Evidence Node:** Case Study (`https://aeobility.com.au/knowledge-hub/case-studies/baby-bento`)
    - **Relationship:** Commercial Service Mention (`https://aeobility.com.au/services/aeo/shopify`, `mentions`)
    - **Entity Root:** Commercial Service Entity (`https://aeobility.com.au/services/aeo#service`, `about`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#case-header` | Main case study title and cover image | Breadcrumbs, back-to-top |
| `#stats-bar` | 5-card telemetry metric strip | In-page jump links, social shares |
| `#executive-summary` | Executive summary narrative | External quotation anchors |
| `#baseline-problem` | Baseline problem statement | Article cross-links |
| `#baseline-pressure` | Baseline bar chart / YoY graphic | Telemetry citations |
| `#sprint-breakdown` | Chronological intervention timeline | Service methodology links |
| `#results-table` | Before vs After empirical proof table | Client evidence references |
| `#pdf-report` | Downloadable PDF verification well | Audit verification anchors |
| `#service-cta` | Direct entity link back to service | Conversion buttons |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Case Study Header (`<section id="case-header">`)**:
   - Translucent glass category pill: `Case Studies -> Knowledge Hub`.
   - Single `<h1>` in Söhne Bold: Quantified outcome headline (e.g. `How Structural Search Alignment Drove a +17% Sales Uplift`).
   - Editorial lead paragraph summarizing context and commercial impact.
   - 21:9 Featured telemetry chart banner with priority loading (`1200x800` `.webp`).
4. **Key Telemetry Stats Bar (`<div id="stats-bar">`)**:
   - 5-column elevated glass grid (`+17–18% Sales Uplift`, `+95% CTR`, `+55% Qualified Clicks`, `+29% Rank`, `+28% Engagement`).
5. **Protected Core Narrative Zone (`<section id="executive-summary">`)**:
   - Grounded on solid `#0C0D12` / `bg-slate-950/95` to ensure maximum reading comfort.
   - Executive Summary: Context, symptom analysis, and commercial stakes.
   - The Baseline Problem Statement: Why search engines lost clarity.
   - Pull quote in serif italic with cyan left border.
6. **Baseline Pressure Visual / YoY Chart (`<div id="baseline-pressure">`)**:
   - Recessed data well (`bg-black/60 border border-slate-700`) illustrating pre-intervention deficits (e.g. discount blowout, return rate rise).
7. **Strategic Intervention & 4-Week Sprint Breakdown (`<section id="sprint-breakdown">`)**:
   - Step-by-step chronology (Week 1 Audit $\rightarrow$ Week 2 Schema Refactor $\rightarrow$ Week 3 Passage Chunking $\rightarrow$ Week 4 Citation Alignment).
   - Numbered milestone cards with Geist Mono markers (`01`, `02`, `03`, `04`).
8. **Results & Empirical Proof Table (`<div id="results-table">`)**:
   - Non-translucent, high-contrast Before vs After table comparing baseline metrics to post-sprint gains.
9. **Downloadable Verification Report Well (`<div id="pdf-report">`)**:
   - Tactile glass card with PDF download trigger (`/files/*.pdf`), verified file size, and SHA checksum.
10. **Direct Entity Link Back & Sprint CTA (`<section id="service-cta">`)**:
    - Formal CTA card routing the reader directly to the service entity that delivered the result (`/services/aeo#service`).
    - Button geometry: `Discuss AEO Services` or `Order $995 Blueprint`.
11. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight` (Söhne Bold 700).
* **Section H2:** `font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Metric Counter Values:** `font-display text-xl sm:text-2xl font-extrabold text-aeo-cyan font-soehne-breit`.
* **Metric Labels:** `font-sans text-[10px] text-slate-400 uppercase tracking-wider font-semibold`.
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, $\ge$ 16px).
* **Pull Quotes:** `font-serif text-sm sm:text-base text-slate-300 italic pl-4 border-l-2 border-aeo-cyan` (IBM Plex Serif 400).
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate / Obsidian Black `#030303` with ambient cyan and purple neon orbs.
* **Tier 1 (Strong Glass):** Telemetry stats bar: `bg-slate-900/70 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-6 transform translate-z-0`.
* **Tier 2 (Mid Glass):** PDF report download well: `bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6`.
* **Protected Narrative Base:** Executive summary and baseline narrative sit on solid `#0C0D12` / `bg-slate-950/95` with zero background blur beneath text.
* **The Solid Breakout Rule:** Before/After results table sits on solid `#080B12`; primary CTA button is solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.

---

## 7. JSON-LD Schema Architecture (`TechArticle` & `ClaimReview`)

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
      "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento#webpage",
      "url": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
      "name": "Case Study: Baby Bento — Structural Search Alignment | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/services/aeo#service"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento#case-study",
      "headline": "Case Study: Baby Bento — Structural Search Alignment & AI Visibility Recovery",
      "description": "Discover how AEObility restored structural clarity and lifted Baby Bento's AI search visibility, resulting in a +17% sales uplift and 95% CTR improvement.",
      "author": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "datePublished": "2026-07-16",
      "inLanguage": "en-AU",
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo#service"
      },
      "about": [
        {
          "@type": "Thing",
          "@id": "https://aeobility.com.au/services/aeo#service",
          "name": "Answer Engine Optimisation"
        },
        {
          "@type": "Thing",
          "name": "Baby Bento",
          "description": "Australian ecommerce brand specialising in kids' lunchboxes and insulated food jars."
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
import { ArrowRight, FileText, Calendar, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Case Study: Structural Search Alignment | AEObility",
  description: "See how structural search alignment reversed declining organic momentum and delivered a +17% sales uplift for an Australian ecommerce store.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
  },
};

export default function BabyBentoCaseStudyPage() {
  const keyStats = [
    { value: "+17–18%", label: "Core Sales Uplift" },
    { value: "+95%", label: "CTR Improvement" },
    { value: "+55%", label: "Qualified Clicks" },
    { value: "+29%", label: "Ranking Position" },
    { value: "+28%", label: "On-Site Engagement" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
    "headline": "Case Study: Baby Bento — Structural Search Alignment & AI Visibility Recovery",
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
      <Breadcrumbs />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        
        {/* Header Block */}
        <section id="case-header" className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan font-semibold">
            <span>Case Studies &rarr; <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link></span>
          </div>

          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
            <Image
              src="/images/knowledge-hub/case-study-aeo-lifts-traffic_AEObility.webp"
              alt="Graph illustrating improved CTR, ranking position, and qualified organic traffic following AEObility's structural optimisation."
              fill
              priority
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-display text-white">
            How Structural Search Alignment Drove a +17% Sales Uplift
          </h1>
          <p className="text-slate-200 text-lg leading-relaxed font-sans font-medium">
            A real-world case study showing how AEObility rebuilt clarity, intent alignment, and organic momentum for an Australian ecommerce store.
          </p>
        </section>

        {/* 5-Column Tactile Glass Stats Bar */}
        <div id="stats-bar" className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transform translate-z-0">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-extrabold text-aeo-cyan font-display">{stat.value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-1 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Protected Narrative Zone */}
        <article id="executive-summary" className="bg-[#0C0D12] space-y-8 rounded-2xl p-6 sm:p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">Executive Summary</h2>
            <p className="text-base text-slate-200 leading-relaxed font-medium font-sans">
              Baby Bento entered the year with steady activity but fading organic momentum. Search engines were losing clarity, high-intent traffic was slipping, and promotions were doing most of the heavy lifting. Margins tightened. Returns crept up.
            </p>
            <p className="text-base text-slate-200 leading-relaxed font-medium font-sans">
              After implementing AEObility's structural optimisation framework, Baby Bento recorded a 17–18% uplift in core sales, a 95% CTR improvement, and a clear reduction in discount dependency.
            </p>
            <blockquote className="border-l-2 border-aeo-cyan pl-4 text-slate-300 italic font-serif my-4">
              &ldquo;When search engines lose clarity, your high-intent traffic disappears. Promotions become the only lever left to hit targets.&rdquo;
            </blockquote>
          </div>

          {/* Section: Baseline Pressure Visual & Proof Table */}
          <div id="results-table" className="pt-6 border-t border-white/10 space-y-4">
            <h3 className="text-xl font-bold font-display text-white">Verified Outcome Telemetry</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B12]">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white font-mono font-bold uppercase">
                    <th className="p-3">Performance Metric</th>
                    <th className="p-3">Pre-Sprint Baseline</th>
                    <th className="p-3">Post-Sprint Gains</th>
                    <th className="p-3 text-right">Net Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="p-3 font-medium">Core Brand Revenue</td>
                    <td className="p-3">Declining -4.2% YoY</td>
                    <td className="p-3">+17.8% Uplift</td>
                    <td className="p-3 text-right text-emerald-400 font-bold">+22% Swing</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Organic Click-Through Rate</td>
                    <td className="p-3">1.8% Avg CTR</td>
                    <td className="p-3">3.5% Avg CTR</td>
                    <td className="p-3 text-right text-emerald-400 font-bold">+95% Lift</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Direct Entity Link Back CTA */}
          <section id="service-cta" className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h4 className="text-lg font-bold font-display text-white">Ready to Rebuild Your Search Clarity?</h4>
              <p className="text-xs text-slate-400 font-sans">Learn how our AEO services rebuild intent alignment and eliminate discount dependency.</p>
            </div>
            <Link
              href="/services/aeo"
              className="btn-primary text-xs whitespace-nowrap"
            >
              <span>Discuss AEO Services</span>
              <ArrowRight className="w-4 h-4 text-black shrink-0" />
            </Link>
          </section>
        </article>
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
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold: Quantified outcome headline.
- [ ] **Stats Bar Elevated:** 5-column metric strip rendered as elevated glass card with `backdrop-blur-md` and `translate-z-0`.
- [ ] **Protected Narrative Base:** Executive summary sits on solid `#0C0D12` / `bg-slate-950/95`.
- [ ] **Direct Entity Link Active:** Formal CTA links directly to `/services/aeo#service`.
- [ ] **Zero Em Dashes:** Clean punctuation and standard hyphens only.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum with 100% opacity.
- [ ] **Reserved Anchors Intact:** Verified `#case-header`, `#stats-bar`, `#executive-summary`, `#baseline-problem`, `#baseline-pressure`, `#sprint-breakdown`, `#results-table`, `#pdf-report`, `#service-cta`.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Absolute Canonical Schema:** Verified `mainEntity` links to `https://aeobility.com.au/services/aeo#service`.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
