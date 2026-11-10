# Template 02: Commercial Solution Sprint (`02-commercial-solution.md`)

> **Archetype:** Productised Solution Sprint & Strategic Roadmap  
> **Target Routes:** `/solutions/aeo-blueprint`, `/solutions/aeo-sprint`  
> **Primary Goal:** Present fixed-scope sprint packages with unambiguous deliverable boundaries, establish 100% fee-crediting risk reversal, and convert users into diagnostic blueprint orders or sprint consultations.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "Strategic Blueprint: $995 Technical Diagnostic & Roadmap | AEObility",
  description: "Get a comprehensive technical audit and a practical 90-day strategic AEO roadmap. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
  openGraph: {
    title: "Strategic Blueprint: Fixed-Scope AEO Audit | AEObility",
    description: "Deep technical audit & 90-day execution roadmap. 100% of your $995 fee credited toward implementation.",
    url: "https://aeobility.com.au/solutions/aeo-blueprint",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Commercial Commitment & Risk-Reversal Intent* (Prompts: *"AEObility Blueprint cost", "AEO sprint deliverables", "risk-free AEO roadmap", "AEO fee crediting policy"*).
* **Atomic Answer Block (First-Fold Retrieval Anchor):**
  - **Position:** Positioned immediately beneath the H1 / hero area and overlaid on the hero banner as an accessible, machine-extractable container (`<aside aria-label="Executive Summary" data-agent-purpose="direct-answer">`).
  - **Verdict:** The Strategic Blueprint (BPSTRAT) is a standalone $995 AUD ex. GST deep technical audit and 90-day execution roadmap that identifies entity gaps, schema errors, and LLM answer-retrieval blind spots.
  - **Mechanism:** Completed within 5-10 business days, the blueprint delivers a site crawl review, knowledge graph audit, and prioritised action plan.
  - **Risk Reversal:** 100% of your $995 Blueprint fee is credited toward eligible AEO implementation sprints within 60 calendar days.
  - **Token Budget:** ~70 words (~90 tokens), engineered for direct LLM passage extraction and zero-shot retrieval grounding.
* **Core Conversion & Narrative Architecture Rules:**
  - **Lead with the problem, not the product:** Frame copy around buyer pain, search engine behavioural shifts, and wasted agency retainer costs rather than self-serving tooling or agency jargon. Lead with the structural failure of legacy retainers before detailing blueprint deliverables.
  - **Mirror audience language:** Use the exact terminology, frustrations, and phrasing searchers, founders, and marketing directors express when diagnosing lost search visibility (e.g. *"AI search engines cite our competitors"*, *"paying monthly retainers with zero visibility"*, *"disappearing from ChatGPT Search"*).
  - **One page, one goal:** Keep the core conversion path singular and unified: commit to the diagnostic audit (Primary: `Order $995 Blueprint`) or verify baseline visibility (Secondary: `Run Free Scan` / `View Sample 90-Day Roadmap`). Eliminate competing secondary funnels or distracting off-ramps.
  - **Headline Formula:** `[End result wanted] + [Time frame] + [Without the thing they fear]`
    - Structure page headlines to deliver clear, risk-free velocity.
    - *Example H1:* "Make AI Search Engines Cite Your Brand in 90 Days Without Trapping Your Business in Monthly Agency Retainers"
    - *Example H2:* "Fix AI Retrieval & Knowledge Graph Gaps in 5 Days Without Paying Open-Ended Retainers"
  - **Design for scannability:**
    - *Von Restorff Stat Numerals:* Standalone stat blocks with oversized numerals for SLA, price, and risk-reversal guarantee (`5 Days Delivery Turnaround`, `$995 Fixed Investment`, `100% Fee Credited Back`).
    - *Asymmetric Card Contrast:* Dim legacy retainer models to muted charcoal (`bg-zinc-950/40 border-white/5 opacity-70`), and illuminate generative synthesis with brand cyan glow (`bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-zinc-950 border-cyan-400/60 ring-1 ring-cyan-400/30 shadow-[0_0_30px_rgba(0,229,255,0.15)]`).
    - *Parallel Micro-Layouts in Deliverables:* Re-chunk deliverable cards into parallel schemas: `Scope` (1-line summary), `What We Fix` (2-3 concise bullet points), and `Deliverable:` badge.
    - *Explicit Calendar Delivery Milestones:* Clear day markers (`Day 1: URL Intake & Scope`, `Days 2-4: Deep Entity Diagnostics`, `Day 5: Executive Walkthrough & Handover`).
    - *Standardised Comparison Table:* Standardised attribute rows (`Scope`, `Turnaround`, `Deliverable`, `Credit-Back Eligibility`, `Investment`) with the Strategic Blueprint column prominently highlighted as the diagnostic foundation.
* **Semantic Density Architecture:**
  - 100% Fee-Crediting Guarantee formula explicitly declared in exact figures (`100% of your $995 Blueprint fee is credited toward eligible implementation sprints`).
  - Step-by-step 3-step delivery workflow mapping concrete calendar outputs (`Day 1` URL Intake $\rightarrow$ `Days 2-4` Deep Entity Diagnostics $\rightarrow$ `Day 5` 45-Minute Walkthrough & 90-Day Roadmap Presentation).
  - 3-Tier service comparison table comparing Micro-Sprints, Foundation Tier, and Diagnostic Blueprint. Zero vague agency promises.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The 100% fee-crediting guarantee and $995 flat rate are placed in the Hero eyebrow, Atomic Answer Block, and Von Restorff stat blocks above the fold within the first 60 words.
  - *Immediate Triage:* The `"Which option fits your current priority?"` decision triage strip sits directly beneath the delivery workflow to capture user intent before long scroll.
  - *Recency:* The bottom section features the direct order form anchored to the 3-point de-risking reassurance notice.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `Product`, `OfferCatalog`, `FAQPage`.
  - Canonical Tri-Graph Triples:
    - **Entity:** Blueprint Product (`https://aeobility.com.au/solutions/aeo-blueprint#product`)
    - **Relationship:** Commercial Solutions Corridor (`https://aeobility.com.au/solutions`, `isPartOf`)
    - **Evidence:** 90-Day Empirical Case Study (`https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days`, `subjectOf`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#hero` | Primary solution hero container | Breadcrumbs, back-to-top |
| `#decision-strip` | 3-way triage ("Which option fits?") | Contextual guide links |
| `#bpstrat-deliverables` | 4 Core Audit Deliverables grid | Service cross-links |
| `#blueprint-comparison` | 3-Tier comparison table | Micro-sprint routing links |
| `#blueprint-timeline` | 4-week sprint execution milestones | Case study evidence links |
| `#blueprint-contact-form`| Direct order & consultation form | Overlaid hero CTAs, bottom scan wells |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.solutions} />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Solution Hero Section (`<section id="hero">`)**:
   - Single Geist Mono badge with `Compass` icon (`font-mono text-xs uppercase text-cyan-300`).
   - Single `<h1>` adhering to formula `[End result wanted] + [Time frame] + [Without the thing they fear]`:
     `Make AI Search Engines Cite Your Brand <span className="text-gradient-aeo">in 90 Days Without Monthly Retainers</span>`.
   - Subhead with fee credit guarantee line: `Get a deep technical audit and a practical 90-day strategic roadmap. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.`
   - Atomic Answer Block overlaid on featured hero banner:
     - Machine-extractable container (`<aside aria-label="Executive Summary" data-agent-purpose="direct-answer">`).
     - Contains exact Verdict, Mechanism, and Risk Reversal.
     - 3-column micro-metric strip: `Turnaround: 5-10 Business Days`, `Investment: $995 AUD ex. GST`, `Risk Reversal: 100% Fee Credited Back`.
   - Standalone Von Restorff Stat Numerals:
     - Oversized numerals for high scannability: `5 Days` Turnaround, `$995` Flat Investment, `100%` Credited Back.
   - Dual action buttons: Primary `Order $995 Blueprint`, Secondary `View Sample 90-Day Roadmap` / `Run Free Scan`.
4. **The Agency Retainer Trap vs. One-Time Diagnostic (`<section id="retainer-problem">`)**:
   - Leads with the problem, not the product. Explains why open-ended monthly contracts fail AI answer engines.
   - Asymmetric contrast cards: Dimmed legacy retainer model vs. illuminated generative synthesis model.
5. **Deliverables Breakdown Grid (`<section id="bpstrat-deliverables">`)**:
   - 4 modular cards rendered in parallel micro-layout:
     - `Scope`: 1-line summary.
     - `What We Fix`: 2-3 concise technical bullet points.
     - `Deliverable:` exact asset handed over (`Raw JSON-LD snippet`, `Scorecard PDF`, `Sprint Matrix`, `Passage Blueprint`).
     - Proof snippet anchor on the Roadmap card linking to live evidence.
6. **Sprint Execution Workflow (`<section id="blueprint-process">`)**:
   - 3-step timeline with explicit calendar markers: `Day 1` URL Intake & Scope $\rightarrow$ `Days 2-4` Deep Entity Diagnostics $\rightarrow$ `Day 5` 45-Minute Walkthrough & Handover.
   - Prominently elevated 100% Risk-Reversal Implementation Credit callout box.
7. **Service Fit & Comparison Matrix (`<section id="decision-strip">`, `<div id="blueprint-comparison">`)**:
   - Section heading (`h2`): `Which option fits your current priority?`
   - 3 triage cards mapping business situations to exact solutions:
     - Unsure what limits visibility $\rightarrow$ *Strategic Blueprint ($995)*.
     - Single priority gap identified $\rightarrow$ *Micro-Sprint ($495)*.
     - Connected multi-page overhaul $\rightarrow$ *AEO Foundation ($1,990)*.
   - Standardised comparison table with attribute rows: `Scope`, `Turnaround`, `Deliverable`, `Credit-Back Eligibility`, `Investment`.
   - Strategic Blueprint column prominently highlighted with cyan border framing as the diagnostic foundation.
8. **Direct Order Form with De-Risking Reassurances (`<section id="blueprint-contact-form">`)**:
   - 3-field streamlined intake with locked package indicator (`BPSTRAT-995`).
   - 3 reassurance bullet points directly below submit trigger: scope confirmation within 4 hours before invoicing, 100% credit applied automatically to follow-on sprints, and 100% IP code ownership.
9. **FAQ Accordion (`<section id="faq-blueprint">`)**:
   - Minimum 6 solution-specific FAQs wrapped in `FAQPage` schema. Default to collapsed (`null`) for clean initial scan.
10. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300` (Geist Mono 500).
* **Page H1:** `font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` (Söhne Bold 700).
* **Section H2:** `font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Card H3:** `font-display text-base font-bold text-white leading-snug` (Söhne Halbfett 600).
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, $\ge$ 16px).
* **Data Values / Price:** `font-mono text-xl sm:text-2xl font-bold text-cyan-300` (Geist Mono Semibold 600).
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate / Obsidian Black `#030303` with ambient cyan and purple neon orbs.
* **Tier 1 (Strong Glass):** Hero CTA banner: `bg-zinc-950/90 backdrop-blur-md border border-white/15 shadow-2xl p-6 rounded-2xl transform translate-z-0`.
* **Tier 2 (Mid Glass):** Deliverables cards & Decision Strip cards: `bg-zinc-950/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-500/40 transition-all`.
* **The Solid Breakout Rule:**
  - Primary button: Solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.
  - Comparison table: Solid opaque slate `#080B12` with solid `#334155` cell dividers (eliminates translucent reading glare).
  - Form input wells: Solid recessed `#080B12` base with solid `#64748B` border.

---

## 7. JSON-LD Schema Architecture (`getAeoBlueprintSchemaGraph`)

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
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#webpage",
      "url": "https://aeobility.com.au/solutions/aeo-blueprint",
      "name": "Strategic Blueprint: $995 Technical Diagnostic & Roadmap | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product"
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product",
      "name": "Strategic Blueprint",
      "description": "Comprehensive digital presence audit, technical gap analysis, visibility scorecard, and 90-day action plan for Australian businesses.",
      "brand": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "offers": {
        "@type": "Offer",
        "price": "995",
        "priceCurrency": "AUD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://aeobility.com.au/solutions/aeo-blueprint"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is included in the Strategic Blueprint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Strategic Blueprint includes a website visibility assessment, structured-data review, visibility scorecard, prioritised 90-day action roadmap, and an audit of key service and content pages."
          }
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
import { getAeoBlueprintSchemaGraph } from '@/lib/schema/aeoBlueprint';
import { Compass, Calendar, ArrowRight, Map, FileText, CheckCircle2 } from 'lucide-react';
import InteractiveFaqAccordion from '@/components/FaqAccordion'; // Client leaf
import BlueprintContactForm from '@/components/forms/BlueprintContactForm'; // Client leaf

export const metadata: Metadata = {
  title: "Strategic Blueprint: $995 Technical Diagnostic & Roadmap | AEObility",
  description: "Get a comprehensive technical audit and a practical 90-day roadmap. 100% fee credited toward eligible sprints.",
  alternates: {
    canonical: "https://aeobility.com.au/solutions/aeo-blueprint",
  },
};

export default function AEOBlueprintPage() {
  const faqs = [
    {
      question: "What is included in the Strategic Blueprint?",
      answer: "The Strategic Blueprint includes a website visibility assessment, structured-data review, visibility scorecard, and a prioritised 90-day action roadmap."
    }
  ];

  const jsonLdGraph = getAeoBlueprintSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.solutions} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Strategic Diagnostic Audit &amp; 90-Day Roadmap</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display text-white">
              The AEObility <span className="text-gradient-aeo">Blueprint</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed font-sans">
                Get a deep technical audit and a practical 90-day strategic roadmap. 100% of your $995 Blueprint fee is credited toward eligible implementation sprints.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Standalone Audit: $995 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>100% Fee Credited to Eligible Sprints</span>
              </div>
            </div>

            {/* Featured Hero Banner */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp"
                alt="AEObility Blueprint technical audit interface displaying digital presence review, entity scorecard, and 90-day action plan timeline."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Solid Breakout CTA Card */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Audit your digital footprint &amp; get a 90-day roadmap</span>
                  <span className="text-xs text-zinc-300 font-sans block">Typical delivery: 7–10 business days from confirmed access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                  <a
                    href="#blueprint-contact-form"
                    className="btn-primary text-xs whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Order $995 Blueprint</span>
                  </a>
                  <Link
                    href="/diagnostic"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/20 text-white font-semibold text-xs hover:border-cyan-400 transition-colors"
                  >
                    <span>Run Free Scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section components: Decision Strip, Deliverables Grid, Comparison Table, Form */}
          <InteractiveFaqAccordion faqs={faqs} />
          <BlueprintContactForm />
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
- [ ] **Exact Single Eyebrow:** Exactly one mono pill badge above the hero headline.
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold following formula `[End result wanted] + [Time frame] + [Without the thing they fear]`.
- [ ] **Atomic Answer Block Present:** First-fold `<aside>` contains exact Verdict, Mechanism, and Risk Reversal.
- [ ] **Lead with Problem, Not Product:** Problem-first framing highlighting retainer model breakdown before blueprint features.
- [ ] **Mirror Audience Language:** Captures exact buyer search queries, complaints, and citation gap terminology.
- [ ] **One Page, One Goal:** Clear unified decision path to `$995 Blueprint` order or sample roadmap verification without secondary distraction.
- [ ] **Scannability Engineered:** Standalone Von Restorff stat numerals, asymmetric card contrast, parallel micro-layouts, and standardised comparison rows.
- [ ] **Reserved Anchors Intact:** Verified `#hero`, `#decision-strip`, `#bpstrat-deliverables`, `#blueprint-comparison`, `#blueprint-process`, `#blueprint-contact-form`.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`, `prioritised`.
- [ ] **Zero Em Dashes:** Clean hyphens, commas, or colons only; no em dashes (`—`).
- [ ] **Fee Crediting Line Present:** `100% of your $995 Blueprint fee is credited toward eligible implementation sprints within 60 calendar days.`
- [ ] **Button Geometry:** Primary buttons capped at 2–4 words (`Order $995 Blueprint`, `Run Free Scan`).
- [ ] **Solid Breakout Active:** Primary button is solid/gradient; table is on solid `#080B12` base.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum.
- [ ] **Absolute Canonical Schema:** Verified `@id` links to `https://aeobility.com.au/solutions/aeo-blueprint#product`.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
