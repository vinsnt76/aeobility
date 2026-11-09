# Template 06: Practical Tutorial & Guide (`06-practical-tutorial.md`)

> **Archetype:** Procedural How-To Guide, Technical Playbook & Schema Deployment Manual  
> **Target Routes:** `/knowledge-hub/tutorials/*`, `/knowledge-hub/guides/aeo`  
> **Primary Goal:** Guide developers and technical teams through step-by-step implementations (schema injection, robots.txt directives, vector chunking audit), establishing procedural authority and routing complex deployments to AEObility sprints.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "How to Deploy JSON-LD Schema for AEO — Technical Playbook | AEObility",
  description: "A step-by-step technical implementation guide for deploying nested JSON-LD schema graphs to optimise brand visibility across AI answer engines.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo",
  },
  openGraph: {
    title: "Deploying JSON-LD Schema for AEO — Step-by-Step Playbook | AEObility",
    description: "Learn how to structure Organization, Service, and FAQPage schemas into an absolute canonical graph for AI crawlers.",
    url: "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo",
    siteName: "AEObility",
    locale: "en_AU",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/schema-deployment-guide_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Visual code schematic illustrating nested JSON-LD schema deployment for answer engine optimisation.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Procedural & Task Execution Intent* (Prompts: *"how to deploy schema markup for AEO", "step by step AEO audit guide", "how to configure robots.txt for AI crawlers", "JSON-LD graph tutorial"*). Primary transition leads to micro-sprint hand-off.
* **Semantic Density Architecture:**
  - Pre-flight prerequisites checklist (required credentials, CLI tools, CMS access, and vector database test harness).
  - Monospace code blocks with exact syntax (JSON-LD schemas, terminal cURL commands, next.config headers).
  - High-density troubleshooting matrix pairing exact error messages with code resolutions. Zero filler prose.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* Required tools, time commitment, and the primary copyable code snippet sit directly below the H1 before Step 1.
  - *Section-Level:* Step headers formulate explicit imperative tasks (`Step 01: Inject Canonical Service Schema Graph`). First line inside the step provides the copyable code snippet; secondary text explains validation.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `HowTo`, `HowToStep`, `HowToSupply`, `HowToTool`.
  - Disambiguates tools used (e.g. `Google Search Console`, `Schema.org Validator`).
  - Canonical Tri-Graph Triples:
    - **Tutorial:** HowTo (`https://aeobility.com.au/knowledge-hub/tutorials/schema-deployment#howto`)
    - **Relationship:** Commercial Service Procedure (`https://aeobility.com.au/services/aeo/procedures`, `isRelatedTo`)
    - **Evidence:** Quantified Result (`https://aeobility.com.au/knowledge-hub/case-studies/baby-bento`, `result`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#tutorial-header` | Main title and difficulty metadata | Breadcrumbs, back-to-top |
| `#prerequisites` | Required access & setup well | Developer cross-links |
| `#step-sequence` | Step-by-step numbered instructions | Direct step anchor links |
| `#verification` | Schema testing & verification steps | Validator tool references |
| `#troubleshooting` | Error & remedy matrix | Technical support citations |
| `#next-steps` | Commercial sprint hand-off CTA | Conversion buttons |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Tutorial Header (`<section id="tutorial-header">`)**:
   - Translucent glass category pill: `Playbooks & Implementation Guides`.
   - Single `<h1>` in Söhne Bold: Exact imperative procedural task (e.g. `How to Deploy Nested JSON-LD Schema for AEO`).
   - Difficulty level badge, estimated completion time (e.g. `30 mins`), and target audience tag.
4. **Prerequisites & Environment Setup Well (`<div id="prerequisites">`)**:
   - Elevated glass well listing required access (Search Console, CMS access, terminal, vector testing tools).
5. **Step-by-Step Execution Sequence (`<section id="step-sequence">`)**:
   - Numbered steps (`01`, `02`, `03`...) using Geist Mono step markers.
   - Styled monospace code blocks with syntax highlighting and copy buttons.
   - Caution and note alerts formatted with clean left-bordered accent wells.
6. **Testing & Verification Protocols (`<section id="verification">`)**:
   - Concrete validation protocols: Google Rich Results Test, Schema.org Validator, vector distance checks.
7. **Common Troubleshooting Matrix (`<section id="troubleshooting">`)**:
   - Opaque slate table pairing error codes/warnings with exact fixes.
8. **Professional Sprint Hand-Off CTA (`<section id="next-steps">`)**:
   - Direct CTA card offering fixed-scope Micro-Sprints ($495 AUD ex. GST) for technical teams that prefer managed deployment.
9. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight` (Söhne Bold 700).
* **Step H2:** `font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Step Number Marker:** `font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded`.
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, $\ge$ 16px).
* **Code Text:** `font-mono text-xs sm:text-sm text-cyan-300 leading-normal`.
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate `#030303` with ambient cyan underlays.
* **Tier 2 (Mid Glass):** Prerequisites container & validation steps: `bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6`.
* **Code Wells:** Solid opaque black wells (`bg-black/90 border border-white/15`) to ensure character contrast and prevent background blur from degrading monospace code readability.
* **The Solid Breakout Rule:** Troubleshooting table sits on solid `#080B12`; primary CTA button is solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.

---

## 7. JSON-LD Schema Architecture (`HowTo`)

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
      "@id": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo#webpage",
      "url": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo",
      "name": "How to Deploy Nested JSON-LD Schema for AEO | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo#howto"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo#howto",
      "name": "How to Deploy Nested JSON-LD Schema for AEO",
      "description": "Step-by-step playbook for configuring absolute canonical JSON-LD schema graphs for answer engine optimisation.",
      "author": {
        "@id": "https://aeobility.com.au/#vincebaker"
      },
      "publisher": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "totalTime": "PT30M",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Google Rich Results Test"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Declare Absolute Canonical @graph",
          "text": "Open your root layout or page component and initialize the JSON-LD script tag with absolute canonical URIs.",
          "url": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo#step-1"
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
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { Terminal, CheckCircle2, AlertTriangle, ArrowRight, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: "How to Deploy JSON-LD Schema for AEO | AEObility",
  description: "A step-by-step technical implementation guide for deploying nested JSON-LD schema graphs for AI answer engines.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo",
  },
};

export default function SchemaTutorialPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://aeobility.com.au/knowledge-hub/tutorials/deploy-json-ld-schema-for-aeo#howto",
    "name": "How to Deploy Nested JSON-LD Schema for AEO",
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

      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        
        {/* Header Block */}
        <section id="tutorial-header" className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan font-semibold">
            <span>Playbooks &amp; Guides &rarr; <Link href="/knowledge-hub/tutorials" className="hover:underline">Implementation</Link></span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-display text-white">
            How to Deploy Nested JSON-LD Schema for AEO
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>Estimated Time: 30 mins</span>
            <span>&bull;</span>
            <span>Level: Intermediate</span>
            <span>&bull;</span>
            <span className="text-cyan-400">Next.js 15+ / React 19</span>
          </div>
        </section>

        {/* Prerequisites Well */}
        <div id="prerequisites" className="p-6 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transform translate-z-0 space-y-3">
          <h2 className="text-base font-bold font-display text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-aeo-cyan" /> Prerequisites &amp; Required Access
          </h2>
          <ul className="text-xs text-slate-300 font-sans space-y-2 list-disc pl-5">
            <li>Production code access to root Next.js App Router repository.</li>
            <li>Verified Google Search Console property access for rich-results testing.</li>
            <li>Official brand facts registry (ABN, registered name, canonical URLs).</li>
          </ul>
        </div>

        {/* Step Sequence */}
        <section id="step-sequence" className="space-y-8">
          <div className="p-6 bg-[#0C0D12] border border-white/10 rounded-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">01</span>
              <h3 className="text-lg font-bold font-display text-white">Initialize the Unified Schema Graph</h3>
            </div>
            <p className="text-base text-slate-200 leading-relaxed font-medium font-sans">
              Deploy an absolute canonical graph containing Organization, WebSite, and Service entities. Always reference root IDs using fully-qualified URLs.
            </p>
            <div className="bg-black/90 p-4 rounded-xl border border-white/15 overflow-x-auto">
              <pre className="text-xs font-mono text-cyan-300">
{`const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility"
    }
  ]
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section id="next-steps" className="p-6 rounded-2xl bg-zinc-950 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <h4 className="text-base font-bold font-display text-white">Prefer Managed Schema Deployment?</h4>
            <p className="text-xs text-slate-400 font-sans">Our technical micro-sprint deploys and validates your entire schema lattice in 4–5 business days.</p>
          </div>
          <Link
            href="/services/aeo#aeo-micro-sprints"
            className="btn-primary text-xs whitespace-nowrap"
          >
            <span>Explore Micro-Sprints</span>
            <ArrowRight className="w-4 h-4 text-black shrink-0" />
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
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold with procedural command phrasing.
- [ ] **Monospace Code Opaque:** Code blocks sit on solid black `bg-black/90` base.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Reserved Anchors Intact:** Verified `#tutorial-header`, `#prerequisites`, `#step-sequence`, `#verification`, `#troubleshooting`, `#next-steps`.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum with 100% opacity.
- [ ] **Button Geometry:** Primary button capped at 2–4 words (`Explore Micro-Sprints`).
- [ ] **Absolute Canonical Schema:** Verified schema uses `HowTo` and `HowToStep` with absolute canonical URIs.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
