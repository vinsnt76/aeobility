# Template 01: Commercial Service Pillar (`01-commercial-service.md`)

> **Archetype:** Commercial Service Pillar & Sub-Service Corridor  
> **Target Routes:** `/services/aeo`, `/services/geo-marketing`, `/services/aeo/shopify`, `/services/ai-search-agency`, `/services/aeo/local-business`  
> **Primary Goal:** Demystify technical answer engine optimisation, present transparent fixed-scope entry points, and drive high-intent consultation requests and diagnostic visibility scans.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "AEO Services — Answer Engine Optimisation Australia | AEObility",
  description: "Restructure your digital footprint for AI-first search engines and modern discovery platforms. Predictable fixed-scope sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
  openGraph: {
    title: "AEO Services — Get Found. Get Chosen. | AEObility",
    description: "Fixed-scope Answer Engine Optimisation sprints for Australian businesses. Micro-sprints from $495 AUD ex. GST.",
    url: "https://aeobility.com.au/services/aeo",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/canonical-aeo-services-hub_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "AEObility canonical Answer Engine Optimisation service dashboard mapping foundational pillars and sprint execution.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **IA & SLM Focus Keyphrase Alignment:** `aeo services` (from `AEObility -IA & SLM.csv` row 6).
* **Intent Family:** *Commercial Decision Intent* (Evaluative & Transactional prompts: *"how much does answer engine optimisation cost", "AEO agency Australia", "AEO vs SEO comparison", "Shopify AEO services"*).
* **Atomic Answer Block (First-Fold Retrieval Anchor):**
  - **Position:** Housed immediately beneath the featured hero banner and primary CTAs (or directly beneath H1/H2) to anchor the top fold.
  - **Formula:** 
    1. *Verdict:* "Answer Engine Optimisation (AEO) restructures your digital footprint, business facts, and credentials so AI answer engines (ChatGPT, Perplexity, Google AI Overviews) retrieve and cite your brand accurately."
    2. *Mechanism:* "AEObility delivers fixed-scope micro-sprints from $495 AUD ex. GST and AEO Foundation implementations in 4–5 business days, replacing speculative SEO with verifiable schema graphs and atomic content blocks."
    3. *Entity Binding:* "All engagements tie directly into authoritative registries (`ABN`, `LocalBusiness`, `Schema.org`) with zero ongoing lock-in contracts."
  - **Token Budget:** Exactly 84 words (~105 tokens), matching bi-encoder vector similarity sweet spot.
* **Dual-Reader E-E-A-T Framework:**
  - **Mechanical Credibility (LLMs & Graphs):** Linked `Service` schema connected to root `Organization` (`https://aeobility.com.au/#organization`), named practitioner provenance (`Person` schema for Vince Baker, Founder & Principal), timestamped recrawl validation.
  - **Human-Centred Usability (Buyers):** U.S. grade 8–9 plain English, zero agency jargon, transparent flat-rate pricing, risk-reducing operational reassurance (*"Zero lock-in"*, *"4–5 day turnaround"*) adjacent to CTAs.
  - **The Hybrid Rule:** Answer-first H2 lead paragraphs under every section; explicit naming of entities (`AEObility`, `Perplexity Pro`, `ChatGPT Search`, `Google AI Overviews`).
* **Semantic Density Architecture:**
  - High density of tangible deliverable specifications and fixed pricing (`Micro-Sprints from $495 AUD ex. GST`, `Foundation Tier $1,990 AUD ex. GST`).
  - Strict delivery turnarounds explicitly declared (`4–5 business days from confirmed scope and access`).
  - Structured multi-tier comparison table comparing scope, target suitability, and deliverables. Zero conversational padding.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The opening 80 words above the fold state the primary service outcome, flat rates, and delivery timeline. 
  - *Immediate Triage:* The `"Choose Your Starting Point"` 3-tier engagement selector directly follows the hero banner to intercept users before deep scrolling.
  - *Recency:* The bottom section delivers the diagnostic scan well and canonical triple summary.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `Service`, `Offer`, `Product`, `Organization`, and `FAQPage`.
  - Canonical Tri-Graph Triples:
    - **Entity:** Service offering (`https://aeobility.com.au/services/aeo#service`)
    - **Relationship:** Concept definition (`https://aeobility.com.au/services/aeo/definition`, `isRelatedTo`)
    - **Evidence:** Client case study (`https://aeobility.com.au/knowledge-hub/case-studies/baby-bento`, `subjectOf`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

To prevent breaking existing internal cross-links, Google sitelinks, and AI crawler jump targets, the following HTML anchor IDs are reserved:

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#hero` | Primary hero container | Back-to-top links, subnav pills |
| `#engagement-paths` | 3-tier starting point selector | Hero banner CTAs, external navigation |
| `#aeo-micro-sprints` | Targeted Micro-Sprint card | Direct pricing jump links |
| `#aeo-foundation` | AEO Foundation card | Commercial quote links |
| `#pillars` | 4 Foundational Pillars grid | Technical reading links |
| `#aeo-contact-form` | Sprint enquiry form | Overlaid hero CTAs, card action buttons |
| `#aeo-diagnostic-form` | Free visibility scan form | Secondary hero CTA, final CTA banner |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.services} />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Hero Section (`<section id="hero">`)**:
   - Single Geist Mono eyebrow badge with `Sparkles` icon (`font-mono text-xs uppercase text-aeo-cyan`).
   - Single `<h1>` in Söhne Bold with gradient accent: `Answer Engine Optimisation: <span className="text-gradient-aeo">Structure Your Digital Footprint for Modern AI Retrieval.</span>`
   - Outcome subhead (`h2` styled as lead paragraph, 18–20px / Medium 500, max 2 lines): Clear explanation of digital footprint restructuring for modern AI retrieval.
   - Price indicator subtitle in Geist Mono: `Micro-Sprints from $495 AUD ex. GST | Foundation $1,990 AUD ex. GST` (`font-mono font-bold text-cyan-300 text-sm sm:text-base`).
   - Featured 1200x800 `.webp` hero banner with overlaid dark glass CTA card:
     - Reassurance micro-copy: `Typical delivery: 4–5 business days from confirmed scope and access` (14–15px Medium 500, high contrast).
     - Dominant Primary Fill Button: `Run Free Scan` (Tier 1 Solid Breakout with dark text and cyan glow).
     - Secondary Ghost Button: `Discuss AEO Services` (Tier 2 recessed dark surface with white text).
   - Grounded Practitioner Field Note Callout (`max-w-2xl` measure / 60–75 chars per line, 14px minimum font size, 1.6 leading, local WA trade recovery).
   - Contextual guide recommendation alert well.
4. **"Choose Your Starting Point" Engagement Grid (`<section id="engagement-paths">`)**:
   - Section heading (`h2`): `Choose Your Starting Point`.
   - 3 equal-height sprint cards:
     - Card 1: `AEO Sprints` (`#aeo-micro-sprints` • $495 AUD micro-sprint / $1,980 AUD bundle ex. GST • Button: `Discuss Micro-Sprint`)
     - Card 2: `AEO Foundation` (`#aeo-foundation` • $1,990 AUD ex. GST • Button: `Discuss Foundation Tier`)
     - Card 3: `Strategic Blueprint` (`#aeo-blueprint` • $995 AUD ex. GST • Button: `Discuss Strategic Blueprint`)
5. **Technical Architecture / Four Pillars Grid (`<section id="pillars">`)**:
   - 4 discrete capability cards: `1. Machine-Readable Structure`, `2. Atomic Content Clarity`, `3. Internal Linking Lattice`, `4. Corroborated Brand Authority`.
   - Diagram elements adhere to minimum 14px bold node labels or are treated as illustrative abstract schematics with adjacent data tables.
6. **Deliverables & Execution Scope Table**:
   - Solid opaque table (`bg-[#080B12]`) detailing tangible sprint outputs, timelines, and deliverables.
7. **Problem & Symptom Matrix**:
   - Common AI search visibility deficits vs AEObility architectural remedies.
8. **Canonical Internal Links Lattice**:
   - Machine-readable anchor links pointing to definitions, guides, case studies, and brand facts registry.
9. **FAQ Accordion (`<FaqAccordion faqs={faqs} />`)**:
   - Minimum 6 service-specific questions wrapped in `FAQPage` schema.
10. **Lead Capture & Consultation Form (`<section id="aeo-contact-form">`)**:
    - Sprint selector form triggering `trackGaEvent('generate_lead')`.
11. **Final Diagnostic CTA Banner & Footer (`<Footer />`)**:
    - Diagnostic card titled `Free AI Visibility Scan` with primary button `Run Visibility Scan`.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-widest text-aeo-cyan` (Geist Mono 500, `+0.12em`).
* **Page H1:** `font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` (Söhne Bold 700).
* **Hero Subhead (Lead Value Prop):** `font-sans text-lg sm:text-xl font-medium text-zinc-100 leading-relaxed` (Geist Sans 500, high contrast to anchor F-pattern scanning).
* **Section H2:** `font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Card H3:** `font-display text-base sm:text-lg font-bold text-slate-100 leading-snug` (Söhne Halbfett 600).
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, strictly $\ge$ 16px).
* **Operational Reassurance Micro-Copy:** `font-sans text-sm sm:text-[15px] font-medium text-zinc-200` (Geist Sans 500, >= 14–15px).
* **Field Note Body:** `font-sans text-sm text-zinc-200 leading-relaxed max-w-prose` (Geist Sans 450–500, 14px minimum, 60–75 char measure).
* **Diagram / Schematic Node Labels:** `font-sans text-sm font-bold text-white` (Minimum 14px bold for non-abstract diagrams).
* **Pricing & Metrics:** `font-mono text-sm sm:text-base font-bold text-cyan-300 tracking-tight` (Geist Mono 600).
* **CTA Buttons (Canonical Taxonomy):**
  - **Dominant Primary Fill (`Run Free Scan`):** `bg-white hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.4)]`.
  - **Secondary Ghost / Border (`Discuss AEO Services`):** `bg-zinc-900/90 border border-white/20 hover:border-cyan-400 text-zinc-100 hover:text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl`.

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate / Obsidian Black `#030303` with ambient cyan (`#00cdd8/10`) and purple (`#bd00ff/10`) diffuse neon orbs.
* **Tier 1 (Strong Glass):** Overlaid Hero CTA container: `bg-zinc-950/90 backdrop-blur-md border border-white/15 shadow-2xl p-6 rounded-2xl transform translate-z-0`.
* **Tier 2 (Mid Glass):** Engagement starting point cards: `bg-zinc-950/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-500/40 transition-all`.
* **The Solid Breakout Rule & Attention Budget:**
  - Exactly ONE dominant primary fill button (`Run Free Scan` in solid white/cyan fill) paired with a subordinate ghost/outline button (`Discuss AEO Services`). Never use competing dual primary fills.
  - Form input wells: Solid recessed `#080B12` base with solid `#64748B` border (3:1 contrast ratio guaranteed).

---

## 7. JSON-LD Schema Architecture (`getCanonicalAeoSchemaGraph`)

All implementations must invoke the canonical schema generator returning an absolute `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "url": "https://aeobility.com.au/",
      "logo": "https://aeobility.com.au/icons/android-chrome-512x512.png"
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/services/aeo#service",
      "name": "Answer Engine Optimisation (AEO) Services",
      "url": "https://aeobility.com.au/services/aeo",
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "serviceType": "Search Engine Optimisation & AI Answer Engine Readiness",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AEO Technical Sprints",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "AEO Technical Micro-Sprint",
            "price": "495",
            "priceCurrency": "AUD"
          },
          {
            "@type": "Offer",
            "name": "AEO Foundation",
            "price": "1990",
            "priceCurrency": "AUD"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between AEO and traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional SEO focuses on organic rankings in search engines. Answer Engine Optimisation (AEO) structures business facts, services, and decision-stage answers for AI search assistants."
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
import { getCanonicalAeoSchemaGraph } from '@/lib/schema/canonicalAeo';
import { Sparkles, Calendar, ArrowRight, Layers, Brain, BarChart3, ShieldCheck } from 'lucide-react';
import InteractiveFaqAccordion from '@/components/FaqAccordion'; // Client leaf
import ServiceContactForm from '@/components/forms/ServiceContactForm'; // Client leaf

export const metadata: Metadata = {
  title: "AEO Services — Answer Engine Optimisation Australia | AEObility",
  description: "Restructure your digital footprint for AI-first search engines. Fixed-scope sprints from $495 AUD ex. GST.",
  alternates: {
    canonical: "https://aeobility.com.au/services/aeo",
  },
};

export default function AEOServicePage() {
  const faqs = [
    {
      question: "What is the difference between AEO and traditional SEO?",
      answer: "Traditional SEO focuses on organic rankings in search engines. AEO structures business facts and services for AI search assistants."
    }
  ];

  const jsonLdGraph = getCanonicalAeoSchemaGraph(faqs);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Canonical JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* 1. Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4 text-aeo-cyan" />
              <span>Answer Engine Optimisation (AEO) Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display text-white">
              AEO Services — <span className="text-gradient-aeo">Get Found. Get Chosen.</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed font-sans">
                Restructure your digital footprint for AI-first search engines and modern discovery platforms. Clear scope. Flat rates.
              </h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>AEO Foundation $1,990 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured Hero Banner */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/canonical-aeo-services-hub_AEObility.webp"
                alt="AEObility canonical Answer Engine Optimisation dashboard mapping 4 foundational pillars, structured content deliverables, and AEO sprint execution."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Solid Breakout CTA Card */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix one technical gap or build a comprehensive foundation.</span>
                  <span className="text-xs text-zinc-300 font-sans block">Typical delivery: 4–5 business days from confirmed scope.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                  <a
                    href="#aeo-contact-form"
                    className="btn-primary text-xs whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss AEO Services</span>
                  </a>
                  <a
                    href="#aeo-diagnostic-form"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/20 text-white font-semibold text-xs hover:border-cyan-400 transition-colors"
                  >
                    <span>Run Free Scan</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Sections (Choose Your Starting Point, Pillars, FAQs, Forms)... */}
          <InteractiveFaqAccordion faqs={faqs} />
          <ServiceContactForm />
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
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold; outcome-led.
- [ ] **Reserved Anchors Intact:** Verified `#hero`, `#engagement-paths`, `#aeo-micro-sprints`, `#aeo-foundation`, `#aeo-contact-form`, `#aeo-diagnostic-form`.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Button Geometry:** Primary buttons capped at 2–4 words (`Discuss AEO Services`, `Run Free Scan`).
- [ ] **Solid Breakout Rule Active:** Primary CTA is solid/gradient; form wells use solid `#080B12` base.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum.
- [ ] **Absolute Canonical Schema:** Verified `@id` links to `https://aeobility.com.au/services/aeo#service`.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
