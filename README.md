# AEObility — Australian AEO Consultancy & AI Search Marketing Platform

**AEObility** ([aeobility.com.au](https://aeobility.com.au)) is an Australian Answer Engine Optimisation (AEO), Geographic Engine Optimisation (GEO), and AI Search Strategy consultancy based in Perth, Western Australia. 

This repository contains the complete Next.js 16 (App Router) web platform, RAG vector search engine, AI Visibility Telemetry Engine, Natural Language Web (NLWeb) protocols, GA4-instrumented site search, automated test harnesses, machine-readable discovery manifests (`llms.txt`, `AGENTS.md`), and native Google Wallet digital business card pass integration.

---

## ⚡ Core Value Propositions & Offerings

* **Answer Engine Optimisation (AEO)**: Restructuring content into 90–120 token atomic answer blocks, balancing token weights, and mitigating positional bias to maximise citation rates across ChatGPT, Claude, and Perplexity.
* **Geographic Engine Optimisation (GEO)**: Hyper-local coordinate mapping, spatial vector alignment, and proximity signal engineering for Google Maps, Apple Maps, and local voice search.
* **AI Search Strategy**: Positioning brands to capture conversational queries, query fan-out behaviours, and generative AI search Overviews (Gemini, ChatGPT Search).
* **Strategic Blueprint**: A standalone $995 AUD Clarity Phase delivering a deep technical audit, entity visibility score, and actionable 90-day roadmap (credited 100% back if clients proceed to AEO Foundation within 60 days).
* **AEO Foundation**: A 4-week turnkey implementation ($1,990 AUD ex. GST) establishing entity graphs, answer architecture, semantic lattice, and citation consistency.
* **AEO Sprints**: Governed sprint execution ($1,980 AUD ex. GST per 10-day macro bundle / $495 AUD ex. GST per micro-sprint) with zero lock-in contracts.

---

## 🔬 Telemetry Engine, Site Search & NLWeb Architecture

### 1. AI Visibility Telemetry Audit Engine (`src/lib/telemetry/`)
* **Interactive Diagnostic (`/diagnostic` & `POST /api/diagnostic`)**: Evaluates any website URL across 5 AI search readiness dimensions:
  1. *Schema Completeness*: Mapped JSON-LD microdata and entity markup.
  2. *Entity Authority*: Verifiable brand signals, Knowledge Graph alignment, and citation anchors.
  3. *Positional Bias*: Head/tail canonical fact placement and token weight balances.
  4. *Vector Proximity*: Cosine similarity in vector space.
  5. *RAG Survival*: Extraction probability in multi-modal retrieval pipelines.
* **Telemetry V3 Test Harness (`npm run test:telemetry`)**: Automated test runner executing live evaluations against SaaS, E-Commerce, Local Business, Blog, and Enterprise site fixtures (`scripts/test-telemetry.ts`).

### 2. Internal Site Search Engine & GA4 Instrument (`src/components/SearchModal.tsx`)
* **Instant Search Modal**: Press `Ctrl+K` or click the search icon to open the client-side vector search modal.
* **Vector & Keyword Matcher**: Queries the 42 vector nodes compiled in `knowledgeBase.json` using instant fuzzy keyword and semantic matching.
* **GA4 Search Telemetry**: Automatically dispatches Google Analytics `gtag('event', 'search', { search_term: query })` telemetry events to track user query intent.

### 3. Natural Language Web (NLWeb) & Model Context Protocol (`/api/*`)
* **Model Context Protocol (MCP) Server (`GET /api/mcp`)**: Exposes structured JSON-schema tool descriptors and resource capabilities for AI agents and IDE assistants.
* **Conversational AI Chat API (`POST /api/chat`)**: Multi-turn conversational endpoint powered by grounded knowledge base retrieval.
* **Grounded Answer API (`POST /api/search/answer`)**: High-performance REST endpoint returning similarity scores, grounded 2-sentence responses, and matched entity URLs.

---

## 🕸️ 5-Node AEO & RAG Internal Link Graph Architecture

The platform's internal link structure is engineered as a directed graph distinguishing between **Linear Conversion Corridors** (direct paths to conversion) and **Radial Trust Loops** (supporting evidence nodes that feed authority back into money pages):

```
                               ┌─────────────────────────┐
                               │     1. ROOT NODE        │
                               │      Homepage (/)       │
                               └────────────┬────────────┘
                                            │
                                            ▼
                       ┌─────────────────────────────────────────┐
                       │        2. PRIMARY SERVICE NODES         │
                       │ (/services/aeo, /services/geo-marketing)│
                       └────────────────────┬────────────────────┘
                                            │ (Linear CTA)
                                            ▼
                       ┌─────────────────────────────────────────┐
                       │           3. DIAGNOSTIC NODE            │
                       │     (/solutions/aeo-blueprint)          │
                       └────────────────────┬────────────────────┘
                                            │ (Linear CTA)
                                            ▼
                       ┌─────────────────────────────────────────┐
                       │           4. TERMINAL NODE              │
                       │         Contact & Support               │
                       │            (/contact)                   │
                       └─────────────────────────────────────────┘
                                            ▲
                                            │ (Radial Return Loops)
                       ┌────────────────────┴────────────────────┐
                       │        5. LATERAL TRUST NODES           │
                       │          (/knowledge-hub/*)             │
                       └─────────────────────────────────────────┘
```

1. **Root Node (`/`)**: Distributes link equity directly into primary service entities.
2. **Primary Service Nodes (`/services/*`)**: High-density capability hubs featuring linear CTAs to `/solutions/aeo-blueprint` and `/contact`.
3. **Diagnostic Node (`/solutions/aeo-blueprint`)**: Intent qualifier leading directly to terminal conversion (`/contact`).
4. **Terminal Node (`/contact`)**: Conversion endpoint with minimal outbound link noise for high-confidence transactional retrieval.
5. **Lateral Trust Nodes (`/knowledge-hub/*`)**: Case studies (e.g. `/knowledge-hub/case-studies/baby-bento`) and research articles feeding authority back into money pages via radial return loops.

---

## 🧠 RAG Vector Grounding & Knowledge Base

The platform features a proprietary Retrieval-Augmented Generation (RAG) vector search engine:

* **Information Architecture Matrix (`AEObility -IA & SLM.csv`)**: Single source of truth defining 42 verified entity nodes, H1 headers, focus keyphrases, latent keywords, and schema types.
* **Prebuild Vector Hook (`node scripts/build-knowledge-base.mjs`)**: Parses `AEObility -IA & SLM.csv` and compiles 384-dimensional embeddings into `src/lib/search/knowledgeBase.json` during `npm run prebuild` (fired automatically during `npm run build`).
* **Real-Time Vector Search API (`POST /api/search/answer`)**: Accepts `{ "query": "..." }`, calculates cosine similarity against the 42 vector embeddings, and returns a grounded 2-sentence answer, top match URL, and similarity score.
* **Quote Submission API (`POST /api/forms/quote`)**: Handles interactive quote requests via `Forms.wire()` and dispatches transactional notification emails via Resend API.

---

## 🤖 Machine Discovery & Agent Grounding

AEObility implements state-of-the-art AI agent grounding specifications:

* **[`/AGENTS.md`](https://aeobility.com.au/AGENTS.md)**: Public AI agent grounding specification detailing legal entity identity, ABN, AEO/GEO corridors, 5-node link graph, and REST API contracts.
* **[`/llms.txt`](https://aeobility.com.au/llms.txt)**: Standardised markdown directory mapping canonical site routes, core terminology, and API endpoints for LLM crawlers.
* **[`/llms-full.txt`](https://aeobility.com.au/llms-full.txt)**: Full machine-readable master knowledge base manifest for RAG retrieval engines and AI agents.
* **[`/robots.txt`](https://aeobility.com.au/robots.txt)**: Crawl permissions tailored for GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended.
* **[`/sitemap.xml`](https://aeobility.com.au/sitemap.xml)**: Dynamic sitemap (`src/app/sitemap.ts`) mapping canonical 200 OK site routes.

---

## 💳 Google Wallet Digital Business Card Integration

The platform includes a native, dependency-free Google Wallet Pass implementation for Vince Baker's digital business card (`/vince-baker`):

* **Serverless Pass Generator (`/api/wallet-pass`)**: Compiles a Google Wallet `GenericObject` and signs the payload into an RS256 JWT using Node's native `crypto` module.
* **Dynamic vCard Server (`/vince-baker.vcf`)**: Outputs raw vCard data with explicit `Content-Type: text/vcard; charset=utf-8` headers.
* **Wallet Pass QR Code**: Embeds a QR code pointing to `https://aeobility.com.au/vince-baker.vcf`, triggering the smartphone's native "Add to Contacts" drawer upon scanning.

---

## 🛠️ Technology Stack & Guidelines

* **Core**: Next.js 16.2 (App Router with Turbopack), React 19, TypeScript
* **Styling**: TailwindCSS v4, Glassmorphism, Modern Typography (Outfit, Soehne Breit)
* **Email & Forms**: Resend API (`resend`)
* **Testing & Telemetry**: Vitest, tsx, Cheerio, Custom Telemetry V3 Harness (`npm run test:telemetry`, `npm run test:agent`)
* **Spelling**: Enforces strict Australian English (AU) spelling across all copy and API responses (`optimisation`, `specialises`, `organisation`, `behaviour`, `maximise`).

---

## 💻 Developer Commands

### Environment Setup
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=re_...
GOOGLE_WALLET_ISSUER_ID=3388000000023168657
GOOGLE_WALLET_SERVICE_ACCOUNT_EMAIL=wallet-service-account@wallet-businesscard.iam.gserviceaccount.com
GOOGLE_WALLET_PROJECT_ID=wallet-businesscard
GOOGLE_WALLET_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
```

### Development & Build Scripts
```bash
# Start local development server
npm run dev

# Re-compile vector knowledge base embeddings
npm run prebuild

# Run TypeScript check & full production Next.js build
npm run build

# Run agent preflight & POST answer API test
npm run test:agent

# Test external API connections (Gemini, Brave, PSI)
npm run test:apis

# Run Telemetry V3 test harness across 5 test fixtures
npm run test:telemetry

# Submit updated site URLs to IndexNow participant search engines
npx tsx scripts/submit-indexnow.ts
```

---

© AEObility. AEObility | ABN: 61 029 803 255. Built for Australian local entities.
