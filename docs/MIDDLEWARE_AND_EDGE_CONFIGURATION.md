# AEObility Middleware & Edge Configuration Architecture

> **Target Platform:** Vercel (Edge Network & Serverless Infrastructure)  
> **Framework:** Next.js 15+ (App Router) • React 19 • TypeScript  
> **Repository:** `c:/Users/vince/agy2/projects/aeobility`  
> **Locale & Guidelines:** Australian English (`en-AU`) • Zero em dashes (`—`) strictly enforced.  
> **Edge Execution Status:** 15 Edge Route Handlers active • Centralised `next.config.ts` header and rewrite pipeline.

---

## 1. Executive Summary & Routing Execution Layer

AEObility deploys to **Vercel's global edge network and serverless infrastructure**. Routing, security headers, canonical link relations, and request rewrites are orchestrated through a hybrid execution model:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   AEObility Request Routing & Edge Flow                │
├────────────────────────────────────────────────────────────────────────┤
│ 1. DNS & Edge CDN (Vercel Global Edge Network)                         │
│    └── Canonical 301 Redirect: www.aeobility.com.au -> aeobility.com.au │
│                                                                        │
│ 2. Next.js Infrastructure Config (next.config.ts)                      │
│    ├── Global CORS: Access-Control-Allow-* on /api/:path*              │
│    ├── Machine Protocol Link Headers on all routes (/:path*)           │
│    ├── Protocol Rewrites: /.well-known/* -> /api/*                     │
│    └── Content Negotiation: /:path*.md -> /api/markdown?path=/:path*   │
│                                                                        │
│ 3. Execution Runtime Division                                          │
│    ├── 15 Edge Route Handlers (export const runtime = 'edge')          │
│    └── Serverless Node.js Route Handlers (export const runtime = 'nodejs')│
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Existing `middleware.ts` Analysis

### Current Status
* **File Presence:** Neither `middleware.ts` nor `src/middleware.ts` currently exists in the repository.
* **Architectural Rationale:** All route matching, CORS headers, discovery `Link` relations, protocol rewrites, and legacy 301 redirects are currently declared **declaratively at build time** inside [`next.config.ts`](file:///c:/Users/vince/agy2/projects/aeobility/next.config.ts).

### Performance Benefit of Declarative Next.js Config vs. Middleware
1. **Zero Edge Invocation Overhead:** Declaring headers and redirects in `next.config.ts` instructs Vercel's Edge CDN to handle redirects and response headers directly at the edge cache layer without spinning up a Vercel Edge Function invocation per request.
2. **Cold Start Elimination:** Static assets and pre-rendered SSG pages are served immediately from Vercel's Edge CDN without triggering middleware compute.

---

## 3. Declarative Header & Route Configuration (`next.config.ts`)

The file [`next.config.ts`](file:///c:/Users/vince/agy2/projects/aeobility/next.config.ts) spans 516 lines and serves as the authoritative edge rules engine for the application:

### A. Global AI Agent CORS Headers
All API endpoints (`/api/:path*`) are provisioned with open CORS headers to allow autonomous coding agents, LLMs, and client tools to communicate with AEObility endpoints:
* `Access-Control-Allow-Origin`: `*`
* `Access-Control-Allow-Methods`: `GET, OPTIONS, PATCH, DELETE, POST, PUT`
* `Access-Control-Allow-Headers`: `X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization`
* `Access-Control-Allow-Credentials`: `true`

### B. Machine Protocol Discovery `Link` Header (Injected on `/:path*`)
Every incoming HTTP request across the entire site receives a canonical `Link` response header advertising machine-readable metadata and agent protocols:
```http
Link: <https://aeobility.com.au/llms.txt>; rel="describedby"; type="text/markdown",
      <https://aeobility.com.au/AGENTS.md>; rel="documentation"; type="text/markdown",
      <https://aeobility.com.au/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json",
      <https://aeobility.com.au/auth.md>; rel="service-doc"; type="text/markdown",
      <https://aeobility.com.au/.well-known/oauth-protected-resource>; rel="oauth-protected-resource"; type="application/json",
      <https://aeobility.com.au/.well-known/http-message-signatures-directory>; rel="http-message-signatures-directory"; type="application/http-message-signatures-directory+json",
      <https://aeobility.com.au/.well-known/poppy.json>; rel="personal-agent-protocol"; type="application/json",
      <https://aeobility.com.au/.well-known/acp.json>; rel="acp"; type="application/json",
      <https://aeobility.com.au/.well-known/ucp>; rel="ucp"; type="application/json",
      <https://aeobility.com.au/index.md>; rel="alternate"; type="text/markdown"
```

### C. Content-Type and Cache-Control Headers for Agent Endpoints
* `/.well-known/api-catalog`: `Content-Type: application/linkset+json`, `Cache-Control: public, max-age=3600, s-maxage=3600`
* `/.well-known/http-message-signatures-directory`: `Content-Type: application/http-message-signatures-directory+json; charset=utf-8`
* `/.well-known/oauth-protected-resource`: `Content-Type: application/json`
* `/.well-known/oauth-authorization-server`: `Content-Type: application/json`
* `/.well-known/openid-configuration`: `Content-Type: application/json`
* `/.well-known/poppy.json`: `Content-Type: application/json`
* `/.well-known/acp.json`: `Content-Type: application/json`
* `/.well-known/ucp`: `Content-Type: application/json`
* `/auth.md`: `Content-Type: text/markdown; charset=utf-8`
* `/openapi.json`: `Content-Type: application/json`
* `/api/markdown`: `Content-Type: text/markdown; charset=utf-8`, `Vary: Accept`

### D. Protocol Rewrites (`rewrites()`)
Maps standard web protocol paths to underlying API route handlers:
* `/.well-known/api-catalog` $\longrightarrow$ `/api/api-catalog`
* `/.well-known/http-message-signatures-directory` $\longrightarrow$ `/api/http-message-signatures-directory`
* `/.well-known/oauth-protected-resource` $\longrightarrow$ `/api/oauth-protected-resource`
* `/.well-known/oauth-authorization-server` $\longrightarrow$ `/api/oauth-authorization-server`
* `/.well-known/openid-configuration` $\longrightarrow$ `/api/oauth-authorization-server`
* `/.well-known/ucp` $\longrightarrow$ `/.well-known/ucp.json`
* `/auth.md` $\longrightarrow$ `/api/auth-md`
* `/:path*.md` $\longrightarrow$ `/api/markdown?path=/:path*` (Dynamic Markdown Negotiation)
* `/api/openapi.json` $\longrightarrow$ `/openapi.json`

### E. Redirects Engine (`redirects()`)
* **Canonical Apex Redirection:** Enforces strict non-www routing by redirecting any request with `host: www.aeobility.com.au` permanently (301) to `https://aeobility.com.au/:path*`.
* **Legacy URL Migration:** Over 50 permanent 301 redirects routing old URLs, aliases, and campaign parameters to canonical targets.

---

## 4. Hosting & Infrastructure Target Environment

### Deployment Platform: Vercel
* **Platform Target:** **Vercel**
* **Connected Repository:** `https://github.com/vinsnt76/aeobilty.git` (tracked on branch `main`)
* **Vercel Integrations:**
  * `@vercel/speed-insights` (Real User Monitoring & Core Web Vitals tracking)
  * Vercel Secrets & Environment Variables (e.g., `RESEND_API_KEY`, `VERCEL_AI_OPENAI_API_KEY`)
  * Vercel Edge Network CDN (Anycast global points of presence)

### Node.js vs. Edge Runtime Allocation

| Runtime Environment | Route Handlers Active | Characteristics & Constraints |
| :--- | :--- | :--- |
| **Vercel Edge Network** (`export const runtime = 'edge'`) | **15 Endpoints**:<br>• `/api`<br>• `/api/v1`<br>• `/api/agent/register`<br>• `/api/api-catalog`<br>• `/api/auth-md`<br>• `/api/auth/token`<br>• `/api/auth/revoke`<br>• `/api/brand-facts`<br>• `/api/health`<br>• `/api/http-message-signatures-directory`<br>• `/api/markdown`<br>• `/api/mcp`<br>• `/api/oauth-authorization-server`<br>• `/api/oauth-protected-resource`<br>• `/api/search` | • Executes in Vercel Edge Workers (V8 isolates)<br>• Near-zero cold start (< 15ms)<br>• Web standard APIs (`fetch`, `Request`, `Response`, `crypto`)<br>• Cannot use Node.js `fs` or native binaries |
| **Vercel Serverless (Node.js)** (`export const runtime = 'nodejs'` or default) | **8 Endpoints**:<br>• `/api/bill`<br>• `/api/chat`<br>• `/api/diagnostic`<br>• `/api/search/answer`<br>• `/api/forms/audit`<br>• `/api/forms/quote`<br>• `/api/wallet-pass`<br>• `/api/indexnow` | • Full Node.js 20+ runtime environment<br>• Access to file system, `cheerio` HTML parser, `googleapis`, `resend`, and Google Wallet SDK |

---

## 5. KV Store & State Architecture

### Current Telemetry & Cache State
Located in [`src/lib/telemetry/cache.ts`](file:///c:/Users/vince/agy2/projects/aeobility/src/lib/telemetry/cache.ts):
* **Current Implementation:** In-memory `Map<string, CacheEntry>` with SHA-256 hash keying (`normalizedUrl | normalizedIntent`), 24-hour TTL, and explicit `CACHE_VERSION = 5` invalidation triggers.
* **Serverless Limitation:** In-memory storage resets during serverless cold starts.

### Target KV Store Integration Plan
As documented in `src/lib/telemetry/cache.ts` lines 11-13:
> *"For Phase 4, we would swap these implementations for Vercel KV / Redis. V3 Enhancement: Includes basic versioning and metadata to prep for KV swap."*

When provisioning persistent KV storage for telemetry caching, rate limiting, or agent state:
1. **Target Provider:** **Vercel KV** (`@vercel/kv` powered by Upstash Redis) or **Upstash Redis REST SDK** (`@upstash/redis`).
2. **Edge Compatibility:** `@vercel/kv` and `@upstash/redis` communicate over HTTPS REST, making them natively compatible with both Vercel Edge Workers (`runtime = 'edge'`) and Node.js Serverless Functions (`runtime = 'nodejs'`) without requiring TCP connection pooling.

### Token & Authentication State
* Located in [`src/app/api/auth/token/route.ts`](file:///c:/Users/vince/agy2/projects/aeobility/src/app/api/auth/token/route.ts).
* Currently generates stateless cryptographic bearer tokens with 24-hour expiry (`expires_in: 86400`).
* Future token revocation lookup (`/api/auth/revoke`) will connect directly to the Vercel KV store using token prefix matching.

---

## 6. Blueprint for Adding an Edge `middleware.ts` (If Required)

If dynamic edge logic is required (e.g. edge-level rate limiting, dynamic geo-IP header injection, or bot authentication before reaching route handlers), create `src/middleware.ts` targeting the Vercel Edge engine:

```typescript
// Proposed src/middleware.ts blueprint:
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimisation files)
     * - favicon.ico, icons, images, files (public assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|icons/|images/|files/).*)',
  ],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // 1. Edge Geo-IP Header Injection (Native to Vercel)
  const country = req.geo?.country || 'AU';
  const city = req.geo?.city || 'Perth';
  res.headers.set('X-Edge-Country', country);
  res.headers.set('X-Edge-City', city);

  // 2. Dynamic Agent Identification
  const userAgent = req.headers.get('user-agent') || '';
  const isAiAgent = /GPTBot|PerplexityBot|ClaudeBot|Google-Extended|CCBot|anthropic-ai/i.test(userAgent);
  if (isAiAgent) {
    res.headers.set('X-Agent-Access', 'permitted');
  }

  return res;
}
```

---

## 7. Summary & Recommendations

1. **Keep `next.config.ts` as the Primary Edge Engine:** Continue using `next.config.ts` for CORS, link headers, and 301 redirects. It avoids unnecessary compute costs and executes with near-zero latency on Vercel's Edge CDN.
2. **Standardise KV Store on `@vercel/kv`:** When persistent state is introduced for telemetry caching or token revocation, deploy `@vercel/kv` via REST to ensure cross-compatibility between Edge Workers and Node.js Serverless runtimes.
3. **Preserve Edge Runtime on Agent Endpoints:** Maintain `export const runtime = 'edge'` across all machine-discovery and agent endpoints (`/api/brand-facts`, `/api/markdown`, `/api/mcp`, `/.well-known/*`) to guarantee response times under 50ms for crawling AI agents.
