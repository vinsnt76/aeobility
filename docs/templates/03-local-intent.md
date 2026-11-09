# Template 03: Local Metro Intent (`03-local-intent.md`)

> **Archetype:** Local Metro & Geo-Targeted Intent Landing Page  
> **Target Routes:** `/services/ai-search-marketing/{perth,sydney,melbourne,brisbane,adelaide}`, `/services/perth/seo-specialist`  
> **Primary Goal:** Capture high-intent regional searches for AI search marketing, solve Google Maps 3-pack blind spots and multi-engine citation drift, and generate localized consultations.

---

## 1. Frontmatter & Metadata Specification

```typescript
export const metadata: Metadata = {
  title: "AI Search Marketing Perth — Answer Engine Optimisation | AEObility",
  description: "Specialist AI search marketing and answer engine optimisation in Perth, Western Australia. Fix Google Maps blind spots and get recommended in AI search.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing/perth",
  },
  openGraph: {
    title: "Perth AI Search Marketing — Get Chosen in Local AI Search | AEObility",
    description: "Connect your Perth business to ChatGPT, Gemini, and Google Local AI recommendations. Fixed-scope local visibility sprints.",
    url: "https://aeobility.com.au/services/ai-search-marketing/perth",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/services/perth-ai-search-marketing_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "Perth AI search marketing interface showing local map packs, geo-targeted answer engines, and entity corroboration.",
      },
    ],
  },
};
```

---

## 2. AEO & GEO Retrieval Grounding Specifications

* **Intent Family:** *Localized Proximity & Regional Commercial Intent* (Prompts: *"AI search agency Perth", "Perth SEO specialist", "local business visibility Google Maps Sydney", "who does AEO in Brisbane"*).
* **Semantic Density Architecture:**
  - Hyper-dense localized schema attributes: LGA and suburb boundary definitions (e.g. Perth CBD, Osborne Park, Subiaco, Fremantle), State-specific context (WA / NSW / VIC), operating hours, physical coordinates, local citation drift analysis.
  - Problem-to-remedy breakdown contrasting legacy local directory spam with verified local entity graphs. Zero filler prose.
* **Positional Bias Mitigation:**
  - *Page-Level Primacy:* The City name and core local deliverable are declared in the Hero eyebrow, H1, and opening 10 words above the fold.
  - *Immediate Triage:* The Local Search Blind Spot Analysis card sits directly below the hero image, intercepting local business owners experiencing Map drops.
  - *Recency:* Concludes with a pre-populated localized consultation form and regional corridor cross-links.
* **Entity Density & Tri-Graph Architecture:**
  - Core JSON-LD `@graph` defines `LocalBusiness`, `areaServed` (`City`, `State`), `geoCoordinates`, `hasOfferCatalog`.
  - Canonical Tri-Graph Triples:
    - **Entity:** Localized Service Node (`https://aeobility.com.au/services/ai-search-marketing/perth#local-service`)
    - **Relationship:** National Service Pillar (`https://aeobility.com.au/services/aeo#service`, `isRelatedTo`)
    - **Evidence:** Quantified Case Study (`https://aeobility.com.au/knowledge-hub/case-studies/baby-bento`, `subjectOf`)

---

## 3. Reserved Anchor ID Registry (Do Not Alter)

| Anchor ID | Target Section | Current Dependent Links |
| :--- | :--- | :--- |
| `#hero` | Primary localized hero container | Breadcrumbs, back-to-top |
| `#local-map-gaps` | Local search blind spot analysis | Contextual links in guides |
| `#local-framework` | 4-pillar local AI search system | National corridor links |
| `#local-evidence` | Australian client evidence snippet | Case study cross-links |
| `#ai-contact-form` | Localized consultation & quote form | Overlaid hero CTAs, bottom buttons |
| `#local-faqs` | City-specific FAQ accordion | Regional sitemaps |

---

## 4. Mandatory Section Sequence & Component Wireframe

1. **SubNavPills (`<SubNavPills items={HUB_SUBNAV_MAPS.services} />`)**
2. **Breadcrumbs (`<Breadcrumbs />`)**
3. **Localized Hero Section (`<section id="hero">`)**:
   - Single Geist Mono eyebrow badge with `MapPin` icon (`font-mono text-xs uppercase text-aeo-cyan`): `Perth AI Search Marketing`.
   - Single `<h1>` in Söhne Bold: `AI Search Marketing in Perth — <span className="text-gradient-aeo">Get Chosen Locally</span>`.
   - Localized lead subhead: Clear explanation of how answer engines, Google Maps, and Apple Intelligence recommend local Perth businesses.
   - Price indicator: `Micro-Sprints from $495 AUD ex. GST | Local Foundation from $1,990 AUD ex. GST`.
   - Featured 1200x800 `.webp` localized dashboard banner with overlaid dark glass CTA card:
     - Left: Delivery commitment (`Typical delivery: 4–5 business days from confirmed access`).
     - Right: Dual action buttons (Primary: `Discuss Perth Sprints`, Secondary: `Run Free Local Scan`).
4. **Local Search Blind Spot Analysis (`<section id="local-map-gaps">`)**:
   - Data-backed cards illustrating local map gaps, suburb drift, and NAP discrepancies.
5. **Local AI Search Framework (`<section id="local-framework">`)**:
   - 4 localized pillars: `1. Geo-Schema & ServiceArea Markup`, `2. Local Knowledge Graph Integration`, `3. Atomic Suburb Landing Units`, `4. Corroborated Citations & GMB Verification`.
6. **Local Business Evidence Snippet (`<section id="local-evidence">`)**:
   - Direct callout referencing quantified Australian ecommerce and service turnaround studies.
7. **City-Specific FAQ Accordion (`<section id="local-faqs">`)**:
   - Minimum 6 localized questions wrapped in `FAQPage` schema addressing suburban coverage and local competitors.
8. **Localized Consultation Form (`<section id="ai-contact-form">`)**:
   - Form pre-populated with current city parameter, requesting Australian business URL and phone number.
9. **Regional Corridor Links**:
   - Clean horizontal pill grid cross-linking to other Australian metro corridors (`Sydney`, `Melbourne`, `Brisbane`, `Adelaide`).
10. **Footer (`<Footer />`)**.

---

## 5. Typography & UI Token Mapping

* **Eyebrow:** `font-mono text-xs font-semibold uppercase tracking-widest text-aeo-cyan` (Geist Mono 500).
* **Page H1:** `font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]` (Söhne Bold 700).
* **Section H2:** `font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug` (Söhne Bold 700).
* **Card H3:** `font-display text-base font-bold text-white leading-snug` (Söhne Halbfett 600).
* **Body Prose:** `font-sans text-base text-slate-200 leading-relaxed font-medium` (Geist Sans 500, $\ge$ 16px).
* **CTA Button Labels:** `font-sans text-xs sm:text-sm font-bold tracking-wide text-black uppercase` (2–4 words max).

---

## 6. Dark Glass Surface Tiering & Solid Breakout Rules

* **Canvas Root:** Deep Slate / Obsidian Black `#030303` with ambient cyan underlays.
* **Tier 1 (Strong Glass):** Overlaid Hero CTA container: `bg-zinc-950/90 backdrop-blur-md border border-white/15 shadow-2xl p-6 rounded-2xl transform translate-z-0`.
* **Tier 2 (Mid Glass):** Blind spot analysis cards & framework cards: `bg-zinc-950/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-cyan-500/40 transition-all`.
* **The Solid Breakout Rule:**
  - Primary button: Solid gradient `bg-gradient-to-r from-aeo-cyan to-aeo-purple text-black font-bold`.
  - Form input wells: Solid recessed `#080B12` base with solid `#64748B` border (3:1 contrast ratio guaranteed).

---

## 7. JSON-LD Schema Architecture (`LocalBusiness`)

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
      "@id": "https://aeobility.com.au/services/ai-search-marketing/perth#webpage",
      "url": "https://aeobility.com.au/services/ai-search-marketing/perth",
      "name": "AI Search Marketing Perth — AEO Services | AEObility",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": [
        {
          "@id": "https://aeobility.com.au/#organization"
        },
        {
          "@id": "https://aeobility.com.au/services/ai-search-marketing/perth#local-service"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aeobility.com.au/services/ai-search-marketing/perth#local-service",
      "name": "AEObility AI Search Marketing Perth",
      "url": "https://aeobility.com.au/services/ai-search-marketing/perth",
      "telephone": "+61 8 0000 0000",
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
          "@type": "City",
          "name": "Perth"
        },
        {
          "@type": "State",
          "name": "Western Australia"
        }
      ],
      "parentOrganization": {
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
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { MapPin, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import InteractiveFaqAccordion from '@/components/FaqAccordion'; // Client leaf
import LocalContactForm from '@/components/forms/LocalContactForm'; // Client leaf

export const metadata: Metadata = {
  title: "AI Search Marketing Perth — Answer Engine Optimisation | AEObility",
  description: "Specialist AI search marketing in Perth, Western Australia. Fix Google Maps blind spots and get recommended in AI search.",
  alternates: {
    canonical: "https://aeobility.com.au/services/ai-search-marketing/perth",
  },
};

export default function PerthAISearchPage() {
  const faqs = [
    {
      question: "How does AEO help Perth businesses on Google Maps?",
      answer: "AEO aligns entity details, regional service areas, and local customer decision answers, making your business easier for Google Maps and voice assistants to accurately recommend."
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://aeobility.com.au/services/ai-search-marketing/perth#local-service",
        "name": "AEObility AI Search Marketing Perth",
        "url": "https://aeobility.com.au/services/ai-search-marketing/perth",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.services} />
      <Breadcrumbs />

      <main className="flex-grow w-full py-12 pb-24 sm:pb-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          
          {/* Hero Block */}
          <section id="hero" className="text-center max-w-4xl mx-auto space-y-6 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-aeo-cyan uppercase tracking-widest font-semibold">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Perth AI Search Marketing &amp; AEO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight font-display text-white">
              AI Search Marketing in Perth — <span className="text-gradient-aeo">Get Chosen Locally</span>
            </h1>

            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed font-sans">
                Position your Perth business for recommendations across Google Maps, Apple Intelligence, and conversational AI search assistants.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 pt-1">
                <span>Micro-Sprints from $495 AUD ex. GST</span>
                <span className="text-zinc-600">|</span>
                <span>Local Foundation from $1,990 AUD ex. GST</span>
              </div>
            </div>

            {/* Featured Hero Banner */}
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] my-8 group min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/images/services/perth-ai-search-marketing_AEObility.webp"
                alt="Perth AI search marketing interface showing local map packs, geo-targeted answer engines, and entity corroboration."
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[420px] object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent" />

              {/* Overlaid Solid Breakout CTA Card */}
              <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-20 p-4 sm:p-6 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xl">
                <div className="text-left space-y-0.5 sm:space-y-1">
                  <span className="text-xs font-mono text-cyan-300 font-bold block uppercase tracking-wider">Fix Perth map blind spots &amp; citation drift</span>
                  <span className="text-xs text-zinc-300 font-sans block">Typical delivery: 4–5 business days from confirmed access.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                  <a
                    href="#ai-contact-form"
                    className="btn-primary text-xs whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Discuss Perth Sprints</span>
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

          {/* Section components: Blind Spots, Framework, Evidence, Forms */}
          <InteractiveFaqAccordion faqs={faqs} />
          <LocalContactForm city="Perth" />
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
- [ ] **Single H1:** Exactly one `<h1>` in Söhne Bold with city name included.
- [ ] **Reserved Anchors Intact:** Verified `#hero`, `#local-map-gaps`, `#local-framework`, `#local-evidence`, `#ai-contact-form`, `#local-faqs`.
- [ ] **AU Spelling Verified:** `optimisation`, `specialises`, `organisation`, `behaviour`.
- [ ] **Button Geometry:** Primary buttons capped at 2–4 words (`Discuss Perth Sprints`, `Run Free Scan`).
- [ ] **Solid Breakout Active:** Primary button is solid/gradient; form wells use solid `#080B12` base.
- [ ] **Body Text $\ge$ 16px:** Continuous reading copy set to Geist Sans Medium 500 at 16px minimum.
- [ ] **Absolute Canonical Schema:** Verified `@id` links to `https://aeobility.com.au/services/ai-search-marketing/perth#local-service`.
- [ ] **Build & Vector Sync:** Run `npm run build` and `node test_retrieval.mjs`.
