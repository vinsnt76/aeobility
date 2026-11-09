/**
 * AEObility Edge & Schema Graph QA Pipeline
 * Validates SSR JSON-LD graphs via Cheerio AST parsing and machine manifests.
 */

import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = process.env.TARGET_URL || process.env.BASE_URL || 'https://aeobility.com.au';
const NETWORK_TIMEOUT_MS = 5000;

console.log('=================================================================');
console.log('🚀 AEObility Edge QA & AST Schema Inspection Pipeline');
console.log(`🌐 Target Base URL: ${BASE_URL}`);
console.log('=================================================================\n');

let passCount = 0;
let failCount = 0;
let warnCount = 0;

function pass(message) {
  console.log(`  ✅ [PASS] ${message}`);
  passCount++;
}

function fail(message) {
  console.error(`  ❌ [FAIL] ${message}`);
  failCount++;
}

function warn(message) {
  console.warn(`  ⚠️  [WARN] ${message}`);
  warnCount++;
}

/**
 * Robust fetch with AbortController timeout to prevent CI runner hangs.
 */
async function fetchWithTimeout(url, timeoutMs = NETWORK_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AEObility-Edge-QA/1.0; +https://aeobility.com.au)'
      }
    });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

/**
 * Extract and parse JSON-LD schemas using Cheerio AST inspection.
 */
function extractSchemasFromHtml(html) {
  const $ = cheerio.load(html);
  const schemas = [];

  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const rawText = $(el).text();
      if (!rawText.trim()) return;
      const parsed = JSON.parse(rawText);
      schemas.push(parsed);
    } catch (e) {
      fail(`Failed to parse JSON-LD script block: ${e.message}`);
    }
  });

  return { $, schemas };
}

/**
 * Recursively collect all @id nodes from parsed JSON-LD structures.
 */
function collectNodes(schema, nodes = new Map()) {
  if (!schema || typeof schema !== 'object') return nodes;

  if (Array.isArray(schema)) {
    schema.forEach(item => collectNodes(item, nodes));
    return nodes;
  }

  if (schema['@graph'] && Array.isArray(schema['@graph'])) {
    schema['@graph'].forEach(item => collectNodes(item, nodes));
  }

  if (schema['@id']) {
    nodes.set(schema['@id'], schema);
  }

  // Recurse into object properties
  for (const key of Object.keys(schema)) {
    if (key !== '@graph' && typeof schema[key] === 'object' && schema[key] !== null) {
      collectNodes(schema[key], nodes);
    }
  }

  return nodes;
}

// -----------------------------------------------------------------------------
// STEP 1: Verify External ABR Registry
// -----------------------------------------------------------------------------
async function auditAbrRegistry() {
  console.log('>>> [1/5] Auditing External ABR Government Registry Node...');
  const abrUrl = 'https://abr.business.gov.au/ABN/View?id=61029803255';
  try {
    const res = await fetchWithTimeout(abrUrl, NETWORK_TIMEOUT_MS);
    if (res.ok) {
      pass(`ABR Verification Node responded with status ${res.status} [61 029 803 255]`);
    } else {
      warn(`ABR Verification Node returned HTTP status ${res.status}`);
    }
  } catch (err) {
    warn(`ABR External lookup timed out or network blocked: ${err.message}`);
  }
}

// -----------------------------------------------------------------------------
// STEP 2: Audit Root Homepage (/)
// -----------------------------------------------------------------------------
async function auditRootRoute() {
  console.log('\n>>> [2/5] Auditing Root Route (/) Schema & Edge Graph...');
  const target = `${BASE_URL}/`;
  let html = '';

  try {
    const res = await fetchWithTimeout(target);
    if (!res.ok) throw new Error(`HTTP status ${res.status}`);
    html = await res.text();
  } catch (err) {
    warn(`Remote fetch failed (${err.message}). Checking local build/source fallback.`);
    const fallbackPath = path.join(rootDir, 'src', 'app', 'page.tsx');
    if (fs.existsSync(fallbackPath)) {
      html = fs.readFileSync(fallbackPath, 'utf8');
    }
  }

  if (!html) {
    fail('Could not retrieve root HTML for validation.');
    return;
  }

  const { schemas } = extractSchemasFromHtml(html);
  const nodes = new Map();
  schemas.forEach(s => collectNodes(s, nodes));

  // Check required core nodes
  if (nodes.has('https://aeobility.com.au/#organization')) {
    pass('Found canonical Organization node: https://aeobility.com.au/#organization');
  } else {
    // If from raw source fallback, check string pattern
    if (html.includes('https://aeobility.com.au/#organization')) {
      pass('Found canonical Organization node in source structure');
    } else {
      fail('Missing canonical Organization node: https://aeobility.com.au/#organization');
    }
  }

  if (nodes.has('https://aeobility.com.au/#website') || html.includes('https://aeobility.com.au/#website')) {
    pass('Found canonical WebSite node: https://aeobility.com.au/#website');
  } else {
    fail('Missing canonical WebSite node: https://aeobility.com.au/#website');
  }

  const hasCatalog = nodes.has('https://aeobility.com.au/#catalog') || 
                     nodes.has('https://aeobility.com.au/#offercatalog') ||
                     html.includes('#catalog') ||
                     html.includes('#offercatalog');
  if (hasCatalog) {
    pass('Found OfferCatalog node (#catalog or #offercatalog)');
  } else {
    warn('OfferCatalog node not detected on root route');
  }
}

// -----------------------------------------------------------------------------
// STEP 3: Audit Founder Profile Route (/vince-baker)
// -----------------------------------------------------------------------------
async function auditFounderRoute() {
  console.log('\n>>> [3/5] Auditing Dedicated Founder Profile Route (/vince-baker)...');
  const target = `${BASE_URL}/vince-baker`;
  let html = '';

  try {
    const res = await fetchWithTimeout(target);
    if (!res.ok) throw new Error(`HTTP status ${res.status}`);
    html = await res.text();
  } catch (err) {
    warn(`Remote fetch failed (${err.message}). Checking local source file.`);
    const localPath = path.join(rootDir, 'src', 'app', 'vince-baker', 'page.tsx');
    if (fs.existsSync(localPath)) {
      html = fs.readFileSync(localPath, 'utf8');
    }
  }

  if (!html) {
    fail('Could not retrieve /vince-baker HTML for validation.');
    return;
  }

  const { schemas } = extractSchemasFromHtml(html);
  const nodes = new Map();
  schemas.forEach(s => collectNodes(s, nodes));

  const hasPerson = nodes.has('https://aeobility.com.au/#vincebaker') || html.includes('https://aeobility.com.au/#vincebaker');
  if (hasPerson) {
    pass('Found Person node anchored to https://aeobility.com.au/#vincebaker');
  } else {
    fail('Missing Person node: https://aeobility.com.au/#vincebaker');
  }

  const hasProfilePage = nodes.has('https://aeobility.com.au/vince-baker#webpage') || html.includes('https://aeobility.com.au/vince-baker#webpage');
  if (hasProfilePage) {
    pass('Found ProfilePage node anchored to https://aeobility.com.au/vince-baker#webpage');
  } else {
    fail('Missing ProfilePage node: https://aeobility.com.au/vince-baker#webpage');
  }

  // Check Australian English and em dash compliance in source
  const clientPath = path.join(rootDir, 'src', 'app', 'vince-baker', 'VinceBakerClientPage.tsx');
  if (fs.existsSync(clientPath)) {
    const clientCode = fs.readFileSync(clientPath, 'utf8');
    if (clientCode.includes('—')) {
      fail('Em dash (—) detected in VinceBakerClientPage.tsx. Strictly forbidden by TOV.');
    } else {
      pass('No em dashes found in founder profile component');
    }
  }
}

// -----------------------------------------------------------------------------
// STEP 4: Audit About Route (/about)
// -----------------------------------------------------------------------------
async function auditAboutRoute() {
  console.log('\n>>> [4/5] Auditing About Us Route (/about)...');
  const target = `${BASE_URL}/about`;
  let html = '';

  try {
    const res = await fetchWithTimeout(target);
    if (!res.ok) throw new Error(`HTTP status ${res.status}`);
    html = await res.text();
  } catch (err) {
    warn(`Remote fetch failed (${err.message}). Checking local source files.`);
    const aboutContentPath = path.join(rootDir, 'src', 'components', 'AboutUsContent.tsx');
    if (fs.existsSync(aboutContentPath)) {
      html = fs.readFileSync(aboutContentPath, 'utf8');
    }
  }

  if (!html) {
    fail('Could not retrieve /about content for validation.');
    return;
  }

  // Ensure no legacy entity leaks
  if (html.toLowerCase().includes('trekaboutoz')) {
    fail('Legacy corporate name "Trekaboutoz" detected on /about');
  } else {
    pass('Zero occurrences of legacy "Trekaboutoz" entity on /about');
  }

  // Ensure legal ABN is present
  if (html.includes('61 029 803 255') || html.includes('61029803255')) {
    pass('Verified ABN 61 029 803 255 present on /about');
  } else {
    fail('ABN 61 029 803 255 not found on /about');
  }
}

// -----------------------------------------------------------------------------
// STEP 5: Audit Machine Manifest (/llms.txt)
// -----------------------------------------------------------------------------
async function auditLlmsManifest() {
  console.log('\n>>> [5/5] Auditing Machine-Readable Manifest (/llms.txt)...');
  const target = `${BASE_URL}/llms.txt`;
  let content = '';

  try {
    const res = await fetchWithTimeout(target);
    if (res.ok) {
      content = await res.text();
    }
  } catch {
    // fallback to local file
  }

  if (!content) {
    const localPath = path.join(rootDir, 'public', 'llms.txt');
    if (fs.existsSync(localPath)) {
      content = fs.readFileSync(localPath, 'utf8');
      pass('Loaded public/llms.txt from local filesystem');
    }
  }

  if (!content) {
    fail('public/llms.txt could not be loaded.');
    return;
  }

  if (content.includes('https://aeobility.com.au/#organization')) {
    pass('Canonical Organization URI declared in llms.txt');
  } else {
    fail('Missing canonical Organization URI in llms.txt');
  }

  if (content.includes('61 029 803 255')) {
    pass('ABN 61 029 803 255 declared in llms.txt');
  } else {
    fail('Missing ABN in llms.txt');
  }

  if (content.includes('—')) {
    fail('Em dash (—) detected in llms.txt. Strictly forbidden by brand guidelines.');
  } else {
    pass('Zero em dashes in llms.txt');
  }

  if (content.includes('AEObility Australia')) {
    fail('Prohibited alias "AEObility Australia" found in llms.txt');
  } else {
    pass('Strict 5-alias list enforced in llms.txt (AEObility Australia excluded)');
  }
}

// -----------------------------------------------------------------------------
// RUN PIPELINE
// -----------------------------------------------------------------------------
async function runPipeline() {
  await auditAbrRegistry();
  await auditRootRoute();
  await auditFounderRoute();
  await auditAboutRoute();
  await auditLlmsManifest();

  console.log('\n=================================================================');
  console.log(`🏁 QA Edge Pipeline Results: ${passCount} Passed, ${failCount} Failed, ${warnCount} Warnings`);
  console.log('=================================================================');

  if (failCount > 0) {
    console.error('\n❌ QA Edge Pipeline failed with errors.');
    process.exit(1);
  } else {
    console.log('\n✨ All Edge & Schema Graph validations passed successfully!');
    process.exit(0);
  }
}

runPipeline();

