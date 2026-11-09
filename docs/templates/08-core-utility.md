# Template 08: Core Utility & Trust (`08-core-utility.md`)

> **Archetype:** Trust, Brand Governance, Interactive Diagnostic & Factual Ledger  
> **Target Routes:** `/about`, `/contact`, `/diagnostic`, `/brand-facts`  
> **Primary Goal:** Provide immutable machine-readable brand facts, founder provenance, verified business credentials (ABN, address, pricing SKUs), and frictionless interactive diagnostic scans.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "Canonical Brand Facts & SKU Pricing Registry | AEObility",
  description: "Official, machine-readable brand registry for AEObility. Verified company credentials, founder provenance, ABN, and fixed-scope pricing SKUs.",
  alternates: {
    canonical: "https://aeobility.com.au/brand-facts",
  },
  openGraph: {
    title: "AEObility Canonical Brand Facts & Registry",
    description: "Machine-readable verified business facts, SKU pricing registry, and founder credentials for AEObility.",
    url: "https://aeobility.com.au/brand-facts",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Provenance, Trust & Factual Ledger Intent* (Prompts: *"who owns AEObility", "AEObility ABN", "is AEObility Australian owned", "AEObility pricing registry", "free AEO scan"*).
* **Semantic Density Architecture:**
  - Dense tabular ledgers of immutable company facts: Legal name, Australian Business Number (ABN), founder provenance, SKU registry, fixed sprint pricing, operating territory, and verified external profiles.
  - Zero prose fluff or agency exaggeration.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The factual ledger or interactive diagnostic form is positioned immediately in the first fold above the fold.
  - *Section-Level:* Ledgers format entity attributes in clean Key: Value pairs for instantaneous crawler ingestion.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `AboutPage`, `ContactPage`, `Organization`, `Person` (Vinnie Baker), `DefinedTermSet`.
  - Canonical `@id` bindings link to root Organization (`https://aeobility.com.au/#organization`).

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#utility-header` | Main utility title and context | Breadcrumbs, back-to-top |
| `#brand-ledger` | Factual tabular entity ledger | AI grounding links, public AGENTS.md |
| `#founder-credentials` | Founder bio & provenance card | Author schema references |
| `#contact-form` | Contact / enquiry form well | Direct email/call links |
| `#diagnostic-engine` | Interactive multi-step diagnostic | Scan CTAs from all pages |
| `#privacy-reassurance` | Security pledge and ABN footer | Compliance anchors |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **Navbar (`<Navbar />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Utility Header Section (`<section id="utility-header">`)**:
   - Single Geist Mono eyebrow badge with `ShieldCheck` icon (`font-mono text-xs uppercase text-aeo-cyan`).
   - Single `<h1>` in Söhne Bold: Concise action or registry title.
   - Lead paragraph explicitly describing the purpose.
4. **Content Core (Varies by Route)**:
   - *For `/brand-facts` (`<div id="brand-ledger">`)*: High-density 2-column table of official business facts, registered entity numbers, official URLs, and fixed SKU pricing catalog.
   - *For `/about` (`<section id="founder-credentials">`)*: Founder provenance, credentials, architectural philosophy, and Australian business registration.
   - *For `/contact` (`<section id="contact-form">`)*: Direct contact form, guaranteed response time (within 1 business day), and direct email/phone.
   - *For `/diagnostic` (`<section id="diagnostic-engine">`)*: Full interactive multi-step diagnostic engine with live telemetry calculation.
5. **Reassurance & Security Strip (`<div id="privacy-reassurance">`)**:
   - 100% Australian owned and operated pledge, zero-lock-in contract guarantee, and privacy statement.
6. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-wider text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight` (Söhne Bold 700).
* **Ledger Key:** `font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider` (Geist Mono Semibold 600).
* **Ledger Value:** `font-sans text-sm sm:text-base text-slate-200 font-medium` (Geist Sans 500).
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, $\ge$ 16px).
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate `#030303` with ambient cyan underlays.
* **Tier 1 (Strong Glass):** Form containers & interactive diagnostic cards: `bg-zinc-950/90 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl`.
* **The Solid Breakout Rule:**
  - Fact ledger table sits on solid `#080B12` base with solid `#334155` cell dividers.
  - Primary form submission buttons must use solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.
  - Form input wells: Solid recessed `#080B12` base with solid `#64748B` border.

---

## 7. JSON-LD Schema Architecture (`Organization` & `AboutPage`)

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
      "@type": "AboutPage",
      "@id": "https://aeobility.com.au/brand-facts#webpage",
      "url": "https://aeobility.com.au/brand-facts",
      "name": "Canonical Brand Facts & SKU Registry | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        }
      ],
      "mainEntity": {
        "@id": "https://aeobility.com.au/#organization"
      }
    }
  ]
}
```

---

## 8. Next.js 15 Server Component Boilerplate

```tsx
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Canonical Brand Facts & SKU Pricing Registry | AEObility",
  description: "Official machine-readable brand registry for AEObility. Verified company credentials, founder provenance, and SKU catalog.",
  alternates: {
    canonical: "https://aeobility.com.au/brand-facts",
  },
};

export default function BrandFactsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://aeobility.com.au/brand-facts#webpage",
        "name": "AEObility Brand Facts Registry",
        "inLanguage": "en-AU"
      }
    ]
  };

  const brandLedger = [
    { key: "Legal Name", value: "AEObility" },
    { key: "Country of Registration", value: "Australia (AU)" },
    { key: "Core Service Offering", value: "Answer Engine Optimisation (AEO) & AI Search Marketing" },
    { key: "Founder & Lead Consultant", value: "Vinnie Baker" },
    { key: "Core Productised Sprint", value: "Strategic Blueprint ($995 AUD ex. GST)" },
    { key: "Micro-Sprint Starting Rate", value: "From $495 AUD ex. GST" }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        
        {/* Header Block */}
        <section id="utility-header" className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan font-semibold">
            <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
            <span>Official Entity Registry</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-display text-white">
            Canonical Brand Facts &amp; Registry
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Machine-readable factual registry of AEObility credentials, corporate entity declarations, and service SKU definitions.
          </p>
        </section>

        {/* Brand Facts Ledger Table */}
        <div id="brand-ledger" className="overflow-hidden rounded-2xl border border-white/10 bg-[#080B12] shadow-2xl">
          <table className="w-full text-left text-xs font-sans border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-white font-mono font-bold uppercase">
                <th className="p-4 w-1/3">Entity Attribute</th>
                <th className="p-4 w-2/3">Canonical Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {brandLedger.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-mono text-xs font-bold text-cyan-300 uppercase">{row.key}</td>
                  <td className="p-4 text-sm font-medium text-slate-100">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reassurance Strip */}
        <div id="privacy-reassurance" className="p-6 bg-zinc-950 border border-white/10 rounded-2xl flex items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Australian Owned &amp; Operated &bull; Verified Entity Registry</span>
          </div>
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
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold.
- [ ] **Ledger Base Solid:** Tabular facts sit on solid `#080B12` base with clean borders.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Reserved Anchors Intact:** Verified `#utility-header`, `#brand-ledger`, `#founder-credentials`, `#contact-form`, `#diagnostic-engine`, `#privacy-reassurance`.
- [ ] **Button Geometry:** Primary button capped at 2–4 words (`Request Sprint Scope`, `Run Free Visibility Scan`).
- [ ] **Absolute Canonical Schema:** Verified schema uses `AboutPage`, `ContactPage`, or `Organization` with absolute canonical URIs.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
