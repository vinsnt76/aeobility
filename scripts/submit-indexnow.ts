/**
 * AEObility IndexNow Bulk Submission Script
 * Protocol: https://www.indexnow.org/documentation
 * Path: scripts/submit-indexnow.ts
 */

const HOST = "aeobility.com.au";
const KEY = "99f72a3935774040b8814ad6a76e6e59";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// IndexNow API endpoints supporting global distribution
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow"
];

// Complete Canonical Directory Matrix (1:1 with sitemap.ts & AEObility IA/SLM)
export const CANONICAL_URL_LIST: string[] = [
  // 1. Root & Diagnostic Core
  `https://${HOST}`,
  `https://${HOST}/diagnostic`,
  `https://${HOST}/brand-facts`,

  // 2. Services Hub & Corridors
  `https://${HOST}/services`,
  `https://${HOST}/services/aeo`,
  `https://${HOST}/services/aeo/definition`,
  `https://${HOST}/services/aeo/comparison`,
  `https://${HOST}/services/aeo/procedures`,
  `https://${HOST}/services/aeo/constraints`,
  `https://${HOST}/services/aeo/costs-timing`,
  `https://${HOST}/services/aeo/shopify`,
  `https://${HOST}/services/aeo/local-business`,
  `https://${HOST}/services/ai-search-agency`,
  `https://${HOST}/services/ai-search-marketing`,
  `https://${HOST}/services/ai-search-marketing/perth`,
  `https://${HOST}/services/ai-search-marketing/sydney`,
  `https://${HOST}/services/ai-search-marketing/melbourne`,
  `https://${HOST}/services/ai-search-marketing/adelaide`,
  `https://${HOST}/services/ai-search-marketing/brisbane`,
  `https://${HOST}/services/perth/seo-specialist`,
  `https://${HOST}/services/geo-marketing`,

  // 3. Solutions & Fixed-Scope Sprints
  `https://${HOST}/solutions`,
  `https://${HOST}/solutions/aeo-blueprint`,
  `https://${HOST}/solutions/aeo-sprint`,

  // 4. Knowledge Hub Indexes & Core Theory
  `https://${HOST}/knowledge-hub`,
  `https://${HOST}/knowledge-hub/aeo`,
  `https://${HOST}/knowledge-hub/ai-seo-tools`,
  `https://${HOST}/knowledge-hub/what-is-aeo`,
  `https://${HOST}/knowledge-hub/guides`,
  `https://${HOST}/knowledge-hub/guides/aeo`,
  `https://${HOST}/knowledge-hub/tutorials`,
  `https://${HOST}/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo`,
  `https://${HOST}/knowledge-hub/semantic-seo`,
  `https://${HOST}/knowledge-hub/geo`,
  `https://${HOST}/knowledge-hub/what-is-seo-optimisation`,
  `https://${HOST}/knowledge-hub/case-studies`,
  `https://${HOST}/knowledge-hub/case-studies/baby-bento`,
  `https://${HOST}/knowledge-hub/case-studies/aeo-geo-blueprint-90-days`,

  // 5. Canonical Technical Research Articles
  `https://${HOST}/knowledge-hub/articles`,
  `https://${HOST}/knowledge-hub/articles/how-to-fix-ai-brand-hallucinations-and-evidence-gaps`,
  `https://${HOST}/knowledge-hub/articles/optimising-for-different-ai-search-engines`,
  `https://${HOST}/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework`,
  `https://${HOST}/knowledge-hub/articles/positional-bias-in-retrieval`,
  `https://${HOST}/knowledge-hub/articles/entity-authority-building`,
  `https://${HOST}/knowledge-hub/articles/aeo-vs-seo`,
  `https://${HOST}/knowledge-hub/articles/retrieval-augmented-generation`,
  `https://${HOST}/knowledge-hub/articles/structured-data-query-fan-out`,
  `https://${HOST}/knowledge-hub/articles/telemetry-diagnostic-architecture`,
  `https://${HOST}/knowledge-hub/articles/machine-legibility-data-provenance`,
  `https://${HOST}/knowledge-hub/articles/seo-vs-geo-red-flags`,

  // 6. About & Consulting Profiles
  `https://${HOST}/about`,
  `https://${HOST}/about/freelance-digital-specialist-perth`,
  `https://${HOST}/about/freelance-seo-consultant-perth`,
  `https://${HOST}/about/freelance-google-ads-consultant-perth`,
  `https://${HOST}/about/freelance-ai-consultant-perth`,
  `https://${HOST}/vince-baker`,

  // 7. Conversational, Booking & Utility Endpoints
  `https://${HOST}/contact`,
  `https://${HOST}/book`,
  `https://${HOST}/docs/api`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
  `https://${HOST}/llms.txt`
];

import { execSync } from 'child_process';

function mapFileToUrl(filePath: string): string | null {
  const norm = filePath.replace(/\\/g, '/').trim();
  if (/^src\/app\/page\.(tsx|jsx|js|ts)$/.test(norm)) {
    return `https://${HOST}`;
  }
  const appMatch = norm.match(/^src\/app\/(.+)\/page\.(tsx|jsx|js|ts)$/);
  if (appMatch) {
    const route = appMatch[1]
      .split('/')
      .filter((segment) => !segment.startsWith('(') || !segment.endsWith(')'))
      .join('/');
    return `https://${HOST}/${route}`;
  }
  const layoutMatch = norm.match(/^src\/app\/(.+)\/layout\.(tsx|jsx|js|ts)$/);
  if (layoutMatch) {
    const route = layoutMatch[1]
      .split('/')
      .filter((segment) => !segment.startsWith('(') || !segment.endsWith(')'))
      .join('/');
    return `https://${HOST}/${route}`;
  }
  if (norm === 'src/lib/schema/aeoBlueprint.ts' || /^src\/components\/blueprint\//.test(norm)) {
    return `https://${HOST}/solutions/aeo-blueprint`;
  }
  if (norm === 'src/lib/schema/aeoSprint.ts') {
    return `https://${HOST}/solutions/aeo-sprint`;
  }
  if (norm === 'src/lib/schema/solutions.ts') {
    return `https://${HOST}/solutions`;
  }
  if (
    /^src\/components\/(Hero|HowItWorks|USPGrid|VideoExplainer|BlueprintSection)\.tsx$/.test(norm) ||
    /^src\/components\/sections\/Homepage/.test(norm)
  ) {
    return `https://${HOST}`;
  }
  if (
    norm === 'src/lib/brandFacts.ts' ||
    norm === 'src/app/api/brand-facts/route.ts' ||
    norm === 'public/brand-facts.json'
  ) {
    return `https://${HOST}/brand-facts`;
  }
  const publicMatch = norm.match(/^public\/(.+\.(md|txt|json|xml|html))$/);
  if (publicMatch) {
    return `https://${HOST}/${publicMatch[1]}`;
  }
  return null;
}

export function getTargetUrls(): string[] {
  const args = process.argv.slice(2);
  const explicitUrls = args.filter((a) => a.startsWith('http://') || a.startsWith('https://'));
  if (explicitUrls.length > 0) {
    return Array.from(new Set(explicitUrls));
  }

  const isChangedOnly = args.includes('--changed') || args.includes('-c');
  if (isChangedOnly) {
    try {
      const diffOutput = execSync('git diff --name-only HEAD~1', { encoding: 'utf-8' });
      const changedFiles = diffOutput.split('\n').map((s) => s.trim()).filter(Boolean);

      const isGlobal = changedFiles.some(
        (f) =>
          f === 'src/app/layout.tsx' ||
          f.includes('AEObility -IA & SLM.csv') ||
          f === 'next.config.ts'
      );
      if (isGlobal) {
        console.log('🔄 Global IA/Layout change detected: submitting all canonical URLs.');
        return CANONICAL_URL_LIST;
      }

      const detectedUrls: string[] = [];
      for (const file of changedFiles) {
        const url = mapFileToUrl(file);
        if (url) detectedUrls.push(url);
      }

      if (detectedUrls.length > 0) {
        return Array.from(new Set(detectedUrls));
      }
      console.log('ℹ️ No route-specific files modified in git diff. Defaulting to canonical matrix.');
    } catch {
      console.warn('⚠️ Could not run git diff. Falling back to canonical directory matrix.');
    }
  }

  return CANONICAL_URL_LIST;
}

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export async function submitToIndexNow(customUrls?: string[]) {
  const urls = customUrls && customUrls.length > 0 ? customUrls : getTargetUrls();
  const payload: IndexNowPayload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  console.log(`\n======================================================`);
  console.log(`⚡ Dispatching IndexNow Push for ${HOST}`);
  console.log(`📦 Payload: ${urls.length} Canonical/Changed URL(s)`);
  console.log(`🔑 Key Verification: ${KEY_LOCATION}`);
  console.log(`======================================================\n`);

  for (const u of urls) {
    console.log(`  -> ${u}`);
  }
  console.log('');

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      console.log(`📡 Pinging ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "AEObility-IndexNow-Dispatcher/1.0",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`  ✅ [${response.status} ${response.statusText}] Submission accepted by ${new URL(endpoint).hostname}`);
      } else {
        const errorText = await response.text();
        console.error(`  ⚠️ [${response.status} ${response.statusText}] Issue at ${endpoint}: ${errorText}`);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ❌ Failed to reach ${endpoint}:`, message);
    }
  }

  console.log(`\n✨ IndexNow submission cycle complete.\n`);
}

// Execute directly when run
submitToIndexNow();

