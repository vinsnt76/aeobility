# AEObility Build Configuration & Dependencies

> **Framework:** Next.js 16.2.9 (App Router) • React 19.2.4 • Tailwind CSS v4  
> **Compiler & Tooling:** TypeScript 5 • PostCSS • ESLint 9 (Flat Config) • Vitest 4 • Playwright 1.62  
> **Repository:** `c:/Users/vince/agy2/projects/aeobility`  
> **Locale & Guidelines:** Australian English (`en-AU`) • Zero em dashes (`—`) strictly enforced.  
> **Build Automation:** Automated `prebuild` Vector Hook • Dynamic Heap Allocation (4GB)

---

## 1. Executive Summary & Core Stack Confirmation

AEObility runs on the modern edge-ready Next.js App Router stack. All components adhere to React 19 Server Component standards, and styling is powered by the newly adopted Tailwind CSS v4 engine.

### Core Stack Versions

| Dependency Category | Package Name | Active Version | Architectural Role |
| :--- | :--- | :--- | :--- |
| **Framework** | `next` | `16.2.9` | App Router, Server Components, Edge Route Handlers, Turbopack |
| **UI Library** | `react` | `19.2.4` | Server Actions, React Compiler readiness, asynchronous metadata |
| **DOM Renderer** | `react-dom` | `19.2.4` | React 19 Client and Server DOM reconciliation |
| **CSS Engine** | `tailwindcss` | `^4` | High-performance CSS engine (`@import "tailwindcss"`, CSS `@theme`) |
| **PostCSS Plugin** | `@tailwindcss/postcss` | `^4` | PostCSS integration plugin replacing legacy `tailwind.config.js` |
| **Language** | `typescript` | `^5` | Strict type checking and ambient module definitions |

---

## 2. Complete Dependency Inventory (`package.json`)

### A. Production Dependencies (`dependencies`)

| Package Name | Installed Version | Primary Role & Usage |
| :--- | :--- | :--- |
| `next` | `16.2.9` | Core App Router framework and build runtime. |
| `react` | `19.2.4` | UI component architecture and Server Component lifecycle. |
| `react-dom` | `19.2.4` | DOM rendering and server streaming hydration. |
| `ai` | `^7.0.40` | Vercel AI SDK core library for streaming LLM responses. |
| `@ai-sdk/openai` | `^4.0.22` | OpenAI provider adapter for the Vercel AI SDK. |
| `@ai-sdk/react` | `^4.0.44` | React UI hooks (`useChat`, `useCompletion`) powering AI Bill. |
| `@vercel/speed-insights` | `^2.0.0` | Real User Monitoring (RUM) and Core Web Vitals telemetry. |
| `lucide-react` | `^1.22.0` | Feather-derived vector UI icon system. |
| `framer-motion` | `^12.42.2` | Fluid hardware-accelerated layout and interaction animations. |
| `clsx` | `^2.1.1` | Lightweight utility for conditionally joining CSS class names. |
| `resend` | `^6.17.1` | Transactional email delivery API for audit and quote forms. |
| `googleapis` | `^178.0.0` | Google Search Console API and Google Wallet integration. |
| `cheerio` | `^1.2.0` | Fast, flexible HTML parsing for telemetry crawl scripts. |

### B. Development Dependencies (`devDependencies`)

| Package Name | Installed Version | Primary Role & Usage |
| :--- | :--- | :--- |
| `tailwindcss` | `^4` | Tailwind CSS v4 compiler and design token parser. |
| `@tailwindcss/postcss` | `^4` | PostCSS bridge for Tailwind v4 integration. |
| `typescript` | `^5` | TypeScript compiler and language server. |
| `@types/node` | `^20` | Node.js type definitions. |
| `@types/react` | `^19` | React 19 type definitions. |
| `@types/react-dom` | `^19` | React DOM 19 type definitions. |
| `@types/cheerio` | `^0.22.35` | Type definitions for Cheerio HTML scraper. |
| `eslint` | `^9` | Flat-configuration code quality linter. |
| `eslint-config-next` | `16.2.9` | Official Next.js ESLint rules and Core Web Vitals standards. |
| `vitest` | `^4.1.10` | Fast unit and integration test runner for business logic. |
| `@playwright/test` | `^1.62.1` | End-to-end browser automation and visual regression testing. |
| `tsx` | `^4.23.1` | TypeScript execute engine for ad-hoc scripts without precompiling. |
| `csv-simple-parser` | `^2.0.2` | High-speed CSV parser used by the prebuild vector compiler. |

---

## 3. Package Scripts & Build Pipeline

The `scripts` block in [`package.json`](file:///c:/Users/vince/agy2/projects/aeobility/package.json) orchestrates compilation, CI validation, vector embedding generation, and testing:

```json
"scripts": {
  "dev": "next dev",
  "prebuild": "node scripts/build-knowledge-base.mjs",
  "build": "node --max-old-space-size=4096 ./node_modules/next/dist/bin/next build",
  "typecheck": "tsc --noEmit",
  "start": "next start",
  "lint": "eslint",
  "test:telemetry": "tsx scripts/test-crawl.ts",
  "test:crawl": "tsx scripts/test-crawl.ts",
  "test:apis": "tsx scripts/test-apis.ts",
  "test:agent": "node scripts/test-agent.mjs",
  "indexnow": "tsx scripts/submit-indexnow.ts",
  "indexnow:changed": "tsx scripts/submit-indexnow.ts --changed",
  "gsc:audit": "tsx scripts/gsc-audit.ts",
  "test": "vitest run",
  "test:e2e": "playwright test"
}
```

### Detailed Script Breakdown

#### 1. Pre-Build Automation Hook (`npm run prebuild`)
* **Command:** `node scripts/build-knowledge-base.mjs`
* **Trigger:** Automatically invoked by npm / pnpm / Vercel immediately prior to `npm run build`.
* **Execution Tasks:**
  1. **Parses Master CSV:** Ingests `AEObility -IA & SLM.csv` (48 rows across 5 classification layers).
  2. **Enforces Australian English:** Sanitises all page titles, focus keyphrases, and keywords using comprehensive regex transforms (e.g. `optimization` $\rightarrow$ `optimisation`, `specialized` $\rightarrow$ `specialised`).
  3. **Computes 384-Dim Vector Embeddings:** Builds dense character n-gram and word hash embeddings for every entity page.
  4. **Computes Pairwise Similarity Distribution:** Compares all $N(N-1)/2 = 1,128$ node pairs to calculate baseline $\mu_{\text{base}}$ and $\sigma_{\text{base}}$ for dynamic Z-score thresholding ($Z \ge 1.0$).
  5. **Outputs Knowledge Base:** Writes `src/lib/search/knowledgeBase.json`.
  6. **Triggers Navigation Generation:** Invokes `generateNavData()` from `scripts/generate-navdata.mjs` to re-compile `src/components/navigation/NavData.ts`.

#### 2. Main Production Build (`npm run build`)
* **Command:** `node --max-old-space-size=4096 ./node_modules/next/dist/bin/next build`
* **Heap Memory Allocation:** Sets V8 maximum heap memory to 4096MB (4GB). This ensures that heavy static site generation across 60 routes, high-density JSON-LD schemas, and vector math compile reliably without Out-Of-Memory (OOM) errors in CI/CD environments.

#### 3. TypeScript Typecheck (`npm run typecheck`)
* **Command:** `tsc --noEmit`
* **Execution:** Scans all TypeScript files (`**/*.ts`, `**/*.tsx`, `**/*.mts`) against [`tsconfig.json`](file:///c:/Users/vince/agy2/projects/aeobility/tsconfig.json) with strict mode enabled (`"strict": true`).

#### 4. Linting (`npm run lint`)
* **Command:** `eslint`
* **Execution:** Runs ESLint 9 Flat Config ([`eslint.config.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/eslint.config.mjs)) integrating `eslint-config-next/core-web-vitals` and TypeScript rules.

#### 5. Unit & Integration Testing (`npm run test`)
* **Command:** `vitest run`
* **Config:** [`vitest.config.mts`](file:///c:/Users/vince/agy2/projects/aeobility/vitest.config.mts) runs headless in Node environment with `@` path aliasing to `./src`.

#### 6. End-to-End Testing (`npm run test:e2e`)
* **Command:** `playwright test`
* **Config:** [`playwright.config.ts`](file:///c:/Users/vince/agy2/projects/aeobility/playwright.config.ts) starts the development server automatically and executes Chromium tests against `tests/e2e`.

#### 7. Search Engine Indexing Automation (`npm run indexnow`)
* **Command:** `tsx scripts/submit-indexnow.ts` (or with `--changed` flag)
* **Execution:** Dispatches instant URL indexing payloads directly to Bing and Yandex IndexNow APIs following content updates.

#### 8. Google Search Console Audit (`npm run gsc:audit`)
* **Command:** `tsx scripts/gsc-audit.ts`
* **Execution:** Connects via service account credentials (`antigravity-cli-and-adk-500010-6c74add7d8e4.json`) to audit URL indexing status and telemetry signals directly from Google Search Console.

---

## 4. Supporting Build & Verification Scripts Inventory

In addition to `package.json` scripts, the [`scripts/`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/) directory houses specialized operational tools:

| Script File | Execution Engine | Strategic Purpose |
| :--- | :--- | :--- |
| [`build-knowledge-base.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/build-knowledge-base.mjs) | Node.js (ESM) | Prebuild vector compilation and knowledge base generation. |
| [`generate-navdata.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/generate-navdata.mjs) | Node.js (ESM) | Slices CSV architecture into typed `NavData.ts`. |
| [`validate-brand-facts.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/validate-brand-facts.mjs) | Node.js (ESM) | Cross-validates `public/brand-facts.json` product SKUs and AUD pricing. |
| [`verify-absolute-schema-ids.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/verify-absolute-schema-ids.mjs) | Node.js (ESM) | Enforces fully-qualified canonical URIs on all JSON-LD `@id` tags. |
| [`project-health-audit.ps1`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/project-health-audit.ps1) | PowerShell 7+ | Comprehensive audit of SSR routes, live schema, brand tone, and assets. |
| [`post-deployment-audit.ps1`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/post-deployment-audit.ps1) | PowerShell 7+ | Edge health check testing production status codes and protocol headers. |
| [`test-crawl.ts`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/test-crawl.ts) | TSX | Scrapes and validates internal link graphs and metadata tags. |
| [`test-apis.ts`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/test-apis.ts) | TSX | Integration test suite verifying live API route responses. |
| [`convert-au-english.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/scripts/convert-au-english.mjs) | Node.js (ESM) | Automated repository-wide Australian English spelling converter. |

---

## 5. Tooling Configuration Files

### TypeScript Configuration ([`tsconfig.json`](file:///c:/Users/vince/agy2/projects/aeobility/tsconfig.json))
* **Target:** `ES2022`
* **Module & Resolution:** `esnext` with `moduleResolution: "bundler"`
* **Path Aliasing:** `@/*` maps to `./src/*`
* **Strict Mode:** Enabled (`"strict": true`, `"skipLibCheck": true`, `"noEmit": true`)
* **JSX:** `react-jsx`

### Tailwind CSS v4 Configuration ([`src/app/globals.css`](file:///c:/Users/vince/agy2/projects/aeobility/src/app/globals.css))
* Pure Tailwind v4 CSS imports: `@import "tailwindcss";`
* Design tokens configured directly in CSS via `@theme`:
  * `--color-aeo-cyan: #00cdd8`
  * `--color-aeo-purple: #bd00ff`
  * `--color-aeo-dark: #07070a`
* Custom brand utility definitions via `@utility`:
  * `@utility bg-gradient-aeo`
  * `@utility text-gradient-aeo`
  * `@utility btn-primary`
* PostCSS configuration ([`postcss.config.mjs`](file:///c:/Users/vince/agy2/projects/aeobility/postcss.config.mjs)):
  ```javascript
  const config = {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  };
  export default config;
  ```

---

## 6. Verification & Build Integrity Summary

1. **Deterministic Prebuild Pipeline:** Any alteration to site taxonomy or `AEObility -IA & SLM.csv` automatically recompiles vector embeddings and navigation trees before Next.js begins asset bundling.
2. **Memory Safety:** Allocating 4GB heap space (`--max-old-space-size=4096`) guarantees flawless Vercel CI/CD builds without memory starvation.
3. **Strict Australian English Compliance:** Integrated conversion and audit scripts guarantee that American English spelling is banned across all user-facing, metadata, and schema surfaces.

