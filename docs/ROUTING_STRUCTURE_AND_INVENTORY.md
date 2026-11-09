# AEObility Project Routing Structure & Route Inventory

> **Framework:** Next.js 15+ (App Router) • React 19 • Tailwind CSS v4  
> **Repository:** `c:/Users/vince/agy2/projects/aeobility`  
> **Locale & Spelling:** Australian English (`en-AU`) strictly enforced.  
> **Total Active Pages:** 60 (`src/app/**/page.tsx`)  
> **Total API Route Handlers:** 23 (`src/app/api/**/route.ts`)  
> **Status:** Fully catalogued and mapped to the 8 Page Archetypes.

---

## 1. Executive Summary & Routing Architecture

AEObility uses the Next.js 15+ App Router architecture. All page entries (`page.tsx`) are authored as **Server Components** to guarantee server-side rendering (SSR/SSG), zero client hydration waterfalls, and predictable meta tags.

### Architecture Highlights
- **Total Registered Page Routes:** 60 active pages (exceeding the baseline 52+ route inventory).
- **Static Scaffolding Over Dynamic Wildcards:** With the exception of `/about/[slug]`, all articles, services, and local metro city hubs are implemented as **dedicated static directories**. This ensures explicit static generation, robust canonical linking, and strict type safety across machine-readable metadata.
- **Dynamic Slug Inventory:** 1 parameterized dynamic folder (`src/app/about/[slug]/page.tsx`), statically rendered via `generateStaticParams()` into 3 specialist role profiles.
- **New Routes Added (Since 57-route baseline):** 3 new routes added (`/docs/api`, `/knowledge-hub/articles/google-ai-search`, and `/knowledge-hub/articles/seo-vs-geo-red-flags`).

---

## 2. Dynamic Routes Analysis & Slug Inventory

The repository maintains an intentional design choice: **explicit static folders** are preferred over generic wildcard routes (e.g. `[slug]/page.tsx` or `[city]/page.tsx`) for core content. This structure prevents crawl orphan loops, guarantees deterministic sitemaps, and eliminates dynamic SSR rendering delays.

### A. Parameterized Dynamic Slugs

| Dynamic Route Pattern | Source File Path | Parameter | Static Param Generation | Generated Live URL Slugs |
| :--- | :--- | :--- | :--- | :--- |
| `/about/[slug]` | `src/app/about/[slug]/page.tsx` | `slug` | `generateStaticParams()` in `page.tsx` sourced from `src/app/about/config.ts` | 1. `/about/freelance-seo-consultant-perth`<br>2. `/about/freelance-google-ads-consultant-perth`<br>3. `/about/freelance-digital-specialist-perth` |

### B. Static Folder Implementations (Previously Proposed as Dynamic Slugs)

In earlier planning specifications, several directories were drafted as dynamic catch-alls. During development, these were elevated to explicit, fully-typed static directories:

1. **Local Metro Intent Landing Pages (`/services/ai-search-marketing/[city]`):**
   * Implemented as individual static routes:
     * `/services/ai-search-marketing/adelaide`
     * `/services/ai-search-marketing/brisbane`
     * `/services/ai-search-marketing/melbourne`
     * `/services/ai-search-marketing/perth`
     * `/services/ai-search-marketing/sydney`
   * Plus metropolitan anchor: `/services/perth/seo-specialist`
2. **Concept Research Articles (`/knowledge-hub/articles/[slug]`):**
   * Implemented as 12 individual static sub-directories under `src/app/knowledge-hub/articles/`.
   * Each article maintains its own bespoke JSON-LD graph, interactive diagrams, and verified citation references.
3. **Sub-Service Corridors (`/services/[slug]`):**
   * Implemented as explicit dedicated sub-directories under `src/app/services/aeo/*`, `src/app/services/geo-marketing`, and `src/app/services/ai-search-agency`.

---

## 3. Newly Added Routes (Audit Variance)

A comparison against the initial 57-route baseline audit (`docs/templates/audit-discrepancies.json`) confirms **3 new production routes**:

| # | Route | Source File | Archetype | Description & Strategic Purpose |
| :-: | :--- | :--- | :--- | :--- |
| 1 | `/docs/api` | `src/app/docs/api/page.tsx` | **08: Core Brand & Utility** | Machine documentation, OpenAPI specification viewer, and agent endpoint schema references. |
| 2 | `/knowledge-hub/articles/google-ai-search` | `src/app/knowledge-hub/articles/google-ai-search/page.tsx` | **04: Concept Research Article** | Technical breakdown of Google AI Overviews, Gemini integration, and the transition from keywords to entity embeddings. |
| 3 | `/knowledge-hub/articles/seo-vs-geo-red-flags` | `src/app/knowledge-hub/articles/seo-vs-geo-red-flags/page.tsx` | **04: Concept Research Article** | Critical comparison highlighting legacy agency traps and procedural red flags when migrating from SEO to GEO. |

---

## 4. Master Route Inventory by Page Archetype

All 60 current routes map directly into the **8 Authoritative Page Archetypes** specified in `docs/templates/`:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      AEObility 8 Page Archetypes                       │
├────────────────────────────────┬───────────────────────────────────────┤
│ 01: Commercial Service Pillar  │ 05: Empirical Case Study              │
│ 02: Productised Solution Sprint│ 06: Practical Tutorial & Guide        │
│ 03: Local Metro Landing        │ 07: Directory & Hub Index             │
│ 04: Concept Research Article   │ 08: Core Brand, Trust & Utility       │
└────────────────────────────────┴───────────────────────────────────────┘
```

### Archetype 01: Commercial Service Pillar & Sub-Service Corridors (11 Routes)
* **SSOT Specification:** `docs/templates/01-commercial-service.md`
* **Primary Intent:** Commercial Decision Intent
* **Target Schema:** `Service`, `Offer`, `Product`

| Route | Source File | Description / Function |
| :--- | :--- | :--- |
| `/services/aeo` | `src/app/services/aeo/page.tsx` | Core Answer Engine Optimisation flagship service pillar. |
| `/services/aeo/comparison` | `src/app/services/aeo/comparison/page.tsx` | Structured comparison corridor: AEO vs. SEO vs. GEO. |
| `/services/aeo/constraints` | `src/app/services/aeo/constraints/page.tsx` | Technical constraints, edge cases, and agent boundaries. |
| `/services/aeo/costs-timing` | `src/app/services/aeo/costs-timing/page.tsx` | Pricing schedules, sprint turnaround, and ROI mechanics. |
| `/services/aeo/definition` | `src/app/services/aeo/definition/page.tsx` | Definitive commercial definition of Answer Engine Optimisation. |
| `/services/aeo/local-business`| `src/app/services/aeo/local-business/page.tsx` | AEO frameworks tailored for local service operators. |
| `/services/aeo/procedures` | `src/app/services/aeo/procedures/page.tsx` | Standard operating procedures and engineering playbooks. |
| `/services/aeo/shopify` | `src/app/services/aeo/shopify/page.tsx` | Ecommerce AEO and product schema optimisation for Shopify. |
| `/services/ai-search-agency` | `src/app/services/ai-search-agency/page.tsx` | Commercial positioning page for AI search agency services. |
| `/services/ai-search-marketing`| `src/app/services/ai-search-marketing/page.tsx`| Overview pillar for AI search and conversational marketing. |
| `/services/geo-marketing` | `src/app/services/geo-marketing/page.tsx` | Flagship Generative Engine Optimisation service pillar. |

---

### Archetype 02: Productised Solution Sprint & Strategic Roadmap (3 Routes)
* **SSOT Specification:** `docs/templates/02-commercial-solution.md`
* **Primary Intent:** Commercial Commitment & Risk Reversal
* **Target Schema:** `Product`, `OfferCatalog`, `FAQPage`

| Route | Source File | Description / Function |
| :--- | :--- | :--- |
| `/solutions/aeo-blueprint` | `src/app/solutions/aeo-blueprint/page.tsx` | Fixed-scope $995 Strategic Architecture & Audit Blueprint. |
| `/solutions/aeo-sprint` | `src/app/solutions/aeo-sprint/page.tsx` | Rapid implementation sprints for entity and schema refactoring. |
| `/solutions/geo-services` | `src/app/solutions/geo-services/page.tsx` | Packaged Generative Engine Optimisation deliverables. |

---

### Archetype 03: Local Metro & Geo-Targeted Intent Landing Pages (6 Routes)
* **SSOT Specification:** `docs/templates/03-local-intent.md`
* **Primary Intent:** Localised Proximity & Regional Search Discovery
* **Target Schema:** `LocalBusiness`, `areaServed`, `geoCoordinates`

| Route | Source File | Location Anchor |
| :--- | :--- | :--- |
| `/services/ai-search-marketing/adelaide` | `src/app/services/ai-search-marketing/adelaide/page.tsx` | Adelaide, South Australia |
| `/services/ai-search-marketing/brisbane` | `src/app/services/ai-search-marketing/brisbane/page.tsx` | Brisbane, Queensland |
| `/services/ai-search-marketing/melbourne` | `src/app/services/ai-search-marketing/melbourne/page.tsx` | Melbourne, Victoria |
| `/services/ai-search-marketing/perth` | `src/app/services/ai-search-marketing/perth/page.tsx` | Perth, Western Australia |
| `/services/ai-search-marketing/sydney` | `src/app/services/ai-search-marketing/sydney/page.tsx` | Sydney, New South Wales |
| `/services/perth/seo-specialist` | `src/app/services/perth/seo-specialist/page.tsx` | Perth Metropolitan Region |

---

### Archetype 04: Concept Research Article & Thought Leadership (12 Routes)
* **SSOT Specification:** `docs/templates/04-concept-article.md`
* **Primary Intent:** Conceptual & Mechanistic Intent
* **Target Schema:** `TechArticle`, `DefinedTermSet`, `FAQPage`

| Route | Source File | Core Research Subject |
| :--- | :--- | :--- |
| `/knowledge-hub/articles/aeo-vs-seo` | `src/app/knowledge-hub/articles/aeo-vs-seo/page.tsx` | Structural divergences between traditional SEO and AEO. |
| `/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework` | `src/app/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework/page.tsx` | Competitor embedding overlap and semantic authority capture. |
| `/knowledge-hub/articles/entity-authority-building` | `src/app/knowledge-hub/articles/entity-authority-building/page.tsx` | Building durable entity authority in Google Knowledge Graph. |
| `/knowledge-hub/articles/google-ai-search` *(NEW)* | `src/app/knowledge-hub/articles/google-ai-search/page.tsx` | Mechanics of Google AI Overviews and passage indexing. |
| `/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps` | `src/app/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps/page.tsx` | Grounding protocols to eliminate LLM brand hallucinations. |
| `/knowledge-hub/articles/machine-legibility-data-provenance` | `src/app/knowledge-hub/articles/machine-legibility-data-provenance/page.tsx` | Machine legibility standards and verifiable data provenance. |
| `/knowledge-hub/articles/optimising-for-different-ai-search-engines` | `src/app/knowledge-hub/articles/optimising-for-different-ai-search-engines/page.tsx` | Contrasting ChatGPT Search, Perplexity, Claude, and Gemini. |
| `/knowledge-hub/articles/positional-bias-in-retrieval` | `src/app/knowledge-hub/articles/positional-bias-in-retrieval/page.tsx` | Mitigating "lost in the middle" positional retrieval bias. |
| `/knowledge-hub/articles/retrieval-augmented-generation` | `src/app/knowledge-hub/articles/retrieval-augmented-generation/page.tsx` | Refactoring web architecture for RAG chunk extractors. |
| `/knowledge-hub/articles/seo-vs-geo-red-flags` *(NEW)* | `src/app/knowledge-hub/articles/seo-vs-geo-red-flags/page.tsx` | Red flags and technical traps in legacy SEO agency retainers. |
| `/knowledge-hub/articles/structured-data-query-fan-out` | `src/app/knowledge-hub/articles/structured-data-query-fan-out/page.tsx` | Structuring multi-predicate graphs for query fan-out models. |
| `/knowledge-hub/articles/telemetry-diagnostic-architecture` | `src/app/knowledge-hub/articles/telemetry-diagnostic-architecture/page.tsx` | Telemetry pipelines measuring synthetic answer engine share. |

---

### Archetype 05: Quantified Empirical Case Study & Evidence (2 Routes)
* **SSOT Specification:** `docs/templates/05-evidence-case-study.md`
* **Primary Intent:** Empirical Proof & Verification
* **Target Schema:** `TechArticle`, `ClaimReview`, `about` -> `/services/aeo#service`

| Route | Source File | Evidence Subject |
| :--- | :--- | :--- |
| `/knowledge-hub/case-studies/baby-bento` | `src/app/knowledge-hub/case-studies/baby-bento/page.tsx` | Ecommerce entity restructuring and schema deployment case study. |
| `/knowledge-hub/case-studies/aeo-geo-blueprint-90-days` | `src/app/knowledge-hub/case-studies/aeo-geo-blueprint-90-days/page.tsx` | 90-day empirical performance report across Perplexity and Gemini. |

---

### Archetype 06: Practical Tutorial, Technical Playbook & Guide (2 Routes)
* **SSOT Specification:** `docs/templates/06-practical-tutorial.md`
* **Primary Intent:** Procedural & Task Execution
* **Target Schema:** `HowTo`, `HowToStep`, `HowToSupply`

| Route | Source File | Tutorial Topic |
| :--- | :--- | :--- |
| `/knowledge-hub/guides/aeo` | `src/app/knowledge-hub/guides/aeo/page.tsx` | Comprehensive AEO implementation guide and execution checklist. |
| `/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo` | `src/app/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo/page.tsx` | Step-by-step entity density audit and schema construction tutorial. |

---

### Archetype 07: Directory Index, Section Hub & Taxonomy Navigator (6 Routes)
* **SSOT Specification:** `docs/templates/07-hub-index.md`
* **Primary Intent:** Exploratory & Taxonomy Discovery
* **Target Schema:** `CollectionPage`, `ItemList`, `hasPart`

| Route | Source File | Hub Section |
| :--- | :--- | :--- |
| `/services` | `src/app/services/page.tsx` | Services index and capability directory. |
| `/solutions` | `src/app/solutions/page.tsx` | Solutions catalogue and sprint packages index. |
| `/knowledge-hub` | `src/app/knowledge-hub/page.tsx` | Root research and documentation knowledge hub. |
| `/knowledge-hub/articles` | `src/app/knowledge-hub/articles/page.tsx` | Concept research articles directory. |
| `/knowledge-hub/case-studies` | `src/app/knowledge-hub/case-studies/page.tsx` | Client case studies and empirical evidence hub. |
| `/knowledge-hub/tutorials` | `src/app/knowledge-hub/tutorials/page.tsx` | Practical tutorials and technical manuals index. |

---

### Archetype 08: Core Brand, Trust, Interactive Diagnostic & Factual Ledger (18 Routes)
* **SSOT Specification:** `docs/templates/08-core-utility.md`
* **Primary Intent:** Provenance, Brand Trust, Governance & Factual Verification
* **Target Schema:** `AboutPage`, `ContactPage`, `Organization`, `DefinedTermSet`

| Route | Source File | Role / Purpose |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Flagship Homepage with Root Schema Tri-Graph. |
| `/about` | `src/app/about/page.tsx` | Corporate identity, methodology, and firm history. |
| `/about/[slug]` | `src/app/about/[slug]/page.tsx` | Dynamic specialist profile corridor (SEO, PPC, Digital). |
| `/book` | `src/app/book/page.tsx` | Diagnostic consultation and discovery call scheduler. |
| `/brand-facts` | `src/app/brand-facts/page.tsx` | Machine-readable Single Source of Truth Brand Ledger. |
| `/contact` | `src/app/contact/page.tsx` | General inquiry and project submission portal. |
| `/diagnostic` | `src/app/diagnostic/page.tsx` | Interactive AEO and AI visibility diagnostic audit tool. |
| `/docs/api` *(NEW)* | `src/app/docs/api/page.tsx` | Developer API documentation and agent schema specification. |
| `/knowledge-hub/aeo` | `src/app/knowledge-hub/aeo/page.tsx` | Definitive reference card: Answer Engine Optimisation. |
| `/knowledge-hub/ai-seo-tools` | `src/app/knowledge-hub/ai-seo-tools/page.tsx` | Industry tool assessment and technology stack directory. |
| `/knowledge-hub/geo` | `src/app/knowledge-hub/geo/page.tsx` | Definitive reference card: Generative Engine Optimisation. |
| `/knowledge-hub/guides` | `src/app/knowledge-hub/guides/page.tsx` | Strategic guides repository. |
| `/knowledge-hub/semantic-seo` | `src/app/knowledge-hub/semantic-seo/page.tsx` | Definitive reference card: Semantic SEO and Ontologies. |
| `/knowledge-hub/what-is-aeo` | `src/app/knowledge-hub/what-is-aeo/page.tsx` | Evergreen primer on Answer Engine Optimisation fundamentals. |
| `/knowledge-hub/what-is-seo-optimisation` | `src/app/knowledge-hub/what-is-seo-optimisation/page.tsx` | Educational contrast between keyword SEO and semantic AEO. |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy Policy and Australian Privacy Principles compliance. |
| `/terms` | `src/app/terms/page.tsx` | Terms of Service and intellectual property assignment. |
| `/vince-baker` | `src/app/vince-baker/page.tsx` | Founder biography, credentials, and entity authority anchor. |

---

## 5. API Route Handlers Inventory (`src/app/api/**/route.ts`)

In addition to the 60 page routes, the application serves **23 API Route Handlers** powering telemetry, conversational tools, and machine-readable agent protocols:

| Route Path | Handler File | Protocol / Function |
| :--- | :--- | :--- |
| `/api` | `src/app/api/route.ts` | Base API health and discovery endpoint. |
| `/api/agent/register` | `src/app/api/agent/register/route.ts` | Autonomous agent registration and handshake. |
| `/api/api-catalog` | `src/app/api/api-catalog/route.ts` | Machine-readable API catalogue generator. |
| `/api/auth/revoke` | `src/app/api/auth/revoke/route.ts` | Token revocation handler. |
| `/api/auth/token` | `src/app/api/auth/token/route.ts` | OAuth token exchange and client authorization. |
| `/api/auth-md` | `src/app/api/auth-md/route.ts` | Serves `auth.md` protocol documentation. |
| `/api/bill` | `src/app/api/bill/route.ts` | AI Bill interactive assistant conversational backend. |
| `/api/brand-facts` | `src/app/api/brand-facts/route.ts` | JSON API endpoint serving canonical `BRAND_FACTS`. |
| `/api/chat` | `src/app/api/chat/route.ts` | Streaming chat endpoint for on-site agent queries. |
| `/api/diagnostic` | `src/app/api/diagnostic/route.ts` | On-demand domain audit and AI readiness evaluator. |
| `/api/forms/audit` | `src/app/api/forms/audit/route.ts` | Lead capture handler for audit form submissions. |
| `/api/forms/quote` | `src/app/api/forms/quote/route.ts` | Project quote and engagement scoping submission handler. |
| `/api/health` | `src/app/api/health/route.ts` | Production health check and uptime monitor endpoint. |
| `/api/http-message-signatures-directory` | `src/app/api/http-message-signatures-directory/route.ts` | RFC 9421 cryptographic signature key directory. |
| `/api/indexnow` | `src/app/api/indexnow/route.ts` | IndexNow instant indexing dispatch engine (Bing/Yandex). |
| `/api/markdown` | `src/app/api/markdown/route.ts` | Markdown conversion and extraction utility. |
| `/api/mcp` | `src/app/api/mcp/route.ts` | Model Context Protocol (MCP) server endpoints. |
| `/api/oauth-authorization-server` | `src/app/api/oauth-authorization-server/route.ts` | RFC 8414 OAuth 2.0 authorization server metadata. |
| `/api/oauth-protected-resource` | `src/app/api/oauth-protected-resource/route.ts` | RFC 8414 protected resource discovery metadata. |
| `/api/search` | `src/app/api/search/route.ts` | Vector search API for knowledge hub queries. |
| `/api/search/answer` | `src/app/api/search/answer/route.ts` | NLWeb question-answering endpoint with source provenance. |
| `/api/v1` | `src/app/api/v1/route.ts` | Versioned REST API entry point. |
| `/api/wallet-pass` | `src/app/api/wallet-pass/route.ts` | Digital business card and Apple Wallet pass generator. |

---

## 6. Static Machine-Readable Protocols & Agent Manifests

Located in `public/` and statically served at root:

- **`/AGENTS.md`**: Public grounding and instruction manifest for autonomous AI agents.
- **`/llms.txt`**: Compact LLM context index with key entity definitions and pricing.
- **`/llms-full.txt`**: Comprehensive knowledge base export for deep LLM retrieval.
- **`/.well-known/ai-catalog.json`**: AI agent discoverability catalogue.
- **`/.well-known/poppy.json`**: Personal Agent Protocol declaration.
- **`/site.webmanifest`**: Progressive Web App (PWA) manifest.
- **`/robots.txt`**: Crawler guidance specifying AI user-agent allowances.
- **`/sitemap.xml`**: Canonical XML sitemap indexing all 60 live pages.

---

## 7. Archetype Route Count Summary

| Archetype ID | Archetype Name | Route Count | Percentage of Total |
| :--- | :--- | :-: | :-: |
| **01** | Commercial Service Pillar & Sub-Services | 11 | 18.3% |
| **02** | Productised Solution Sprint | 3 | 5.0% |
| **03** | Local Metro Intent Landing Pages | 6 | 10.0% |
| **04** | Concept Research Articles | 12 | 20.0% |
| **05** | Empirical Case Studies | 2 | 3.3% |
| **06** | Practical Tutorials & Guides | 2 | 3.3% |
| **07** | Directory & Hub Indexes | 6 | 10.0% |
| **08** | Core Brand, Trust & Utility | 18 | 30.0% |
| **TOTAL** | **All 8 Archetypes** | **60** | **100.0%** |

