import fs from 'node:fs';
import path from 'node:path';
import parse from 'csv-simple-parser';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const FIX_MODE = process.argv.includes('--fix');
const IA_CSV_PATH = path.join(rootDir, 'AEObility -IA & SLM.csv');
const SITEMAP_PATH = path.join(rootDir, 'src', 'app', 'sitemap.ts');
const ABOUT_CONFIG_PATH = path.join(rootDir, 'src', 'app', 'about', 'config.ts');

function walkFiles(dir, predicate) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full, predicate));
    } else if (predicate(full, entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function getAboutSlugs() {
  if (!fs.existsSync(ABOUT_CONFIG_PATH)) return [];
  const raw = fs.readFileSync(ABOUT_CONFIG_PATH, 'utf8');
  return [...raw.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => `/about/${m[1]}`);
}

function getAppRouterRoutes() {
  const appDir = path.join(rootDir, 'src', 'app');
  const pageFiles = walkFiles(appDir, (_, name) => name === 'page.tsx');
  const aboutSlugs = getAboutSlugs();
  const routes = new Set();

  for (const file of pageFiles) {
    const rel = file
      .replace(appDir, '')
      .replace(/[\\/]page\.tsx$/, '')
      .replace(/\\/g, '/') || '/';
    if (rel === '/about/[slug]') {
      for (const s of aboutSlugs) routes.add(s);
    } else {
      routes.add(rel);
    }
  }
  return routes;
}

function getSitemapRoutes() {
  const raw = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const routes = new Set(['/']);
  for (const m of raw.matchAll(/\$\{baseUrl\}([^`"']+)/g)) {
    routes.add(m[1].trim());
  }
  return routes;
}

function toAustralianEnglish(text) {
  if (!text) return text;
  return text
    .replace(/\bOptimization\b/g, 'Optimisation')
    .replace(/\boptimization\b/g, 'optimisation')
    .replace(/\bOptimizations\b/g, 'Optimisations')
    .replace(/\boptimizations\b/g, 'optimisations')
    .replace(/\bOptimize\b/g, 'Optimise')
    .replace(/\boptimize\b/g, 'optimise')
    .replace(/\bOptimized\b/g, 'Optimised')
    .replace(/\boptimized\b/g, 'optimised')
    .replace(/\bOptimizing\b/g, 'Optimising')
    .replace(/\boptimizing\b/g, 'optimising')
    .replace(/\bSynthesize\b/g, 'Synthesise')
    .replace(/\bsynthesize\b/g, 'synthesise')
    .replace(/\bSynthesized\b/g, 'Synthesised')
    .replace(/\bsynthesized\b/g, 'synthesised')
    .replace(/\bSynthesizing\b/g, 'Synthesising')
    .replace(/\bsynthesizing\b/g, 'synthesising')
    .replace(/\bSpecialized\b/g, 'Specialised')
    .replace(/\bspecialized\b/g, 'specialised')
    .replace(/\bSpecializing\b/g, 'Specialising')
    .replace(/\bspecializing\b/g, 'specialising')
    .replace(/\bSpecialize\b/g, 'Specialise')
    .replace(/\bspecialize\b/g, 'specialise')
    .replace(/\bAnalyze\b/g, 'Analyse')
    .replace(/\banalyze\b/g, 'analyse')
    .replace(/\bAnalyzed\b/g, 'Analysed')
    .replace(/\banalyzed\b/g, 'analysed')
    .replace(/\bAnalyzing\b/g, 'Analysing')
    .replace(/\banalyzing\b/g, 'analysing')
    .replace(/\bPrioritize\b/g, 'Prioritise')
    .replace(/\bprioritize\b/g, 'prioritise')
    .replace(/\bPrioritized\b/g, 'Prioritised')
    .replace(/\bprioritized\b/g, 'prioritised')
    .replace(/\bOrganize\b/g, 'Organise')
    .replace(/\borganize\b/g, 'organise')
    .replace(/(?<!LocalBusiness,\s*|@type":\s*"|Schema.org\s*)\bOrganization\b/g, 'Organisation')
    .replace(/\borganization\b/g, 'organisation')
    .replace(/\bCustomization\b/g, 'Customisation')
    .replace(/\bcustomization\b/g, 'customisation')
    .replace(/\bCustomize\b/g, 'Customise')
    .replace(/\bcustomize\b/g, 'customise')
    .replace(/\bBehavior\b/g, 'Behaviour')
    .replace(/\bbehavior\b/g, 'behaviour')
    .replace(/\bColor\b/g, 'Colour')
    .replace(/\bcolor\b/g, 'colour');
}

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function main() {
  let failures = 0;

  // 1. Parse IA & SLM CSV
  const rawCsv = fs.readFileSync(IA_CSV_PATH, 'utf8');
  const records = parse(rawCsv, { header: true }).filter((r) => r.URL && r.URL.trim().length > 0);
  const csvRoutes = new Set(records.map((r) => r.URL.trim()));
  console.log(`[IA/SLM] Parsed ${records.length} routes from ${path.basename(IA_CSV_PATH)}`);

  // 2. Check every CSV route exists in src/app
  const appRoutes = getAppRouterRoutes();
  const missingInApp = [...csvRoutes].filter((u) => !appRoutes.has(u));
  if (missingInApp.length > 0) {
    failures += missingInApp.length;
    console.error(`[FAIL] Routes in IA/SLM CSV missing from src/app (${missingInApp.length}):`);
    for (const u of missingInApp) console.error(`  - ${u}`);
  } else {
    console.log(`[PASS] All ${csvRoutes.size} IA/SLM CSV routes exist in src/app.`);
  }

  // 3. Check sitemap.ts parity against IA/SLM CSV
  const sitemapRoutes = getSitemapRoutes();
  const missingFromCsv = [...sitemapRoutes].filter((u) => !csvRoutes.has(u));
  const missingFromSitemap = [...csvRoutes].filter((u) => !sitemapRoutes.has(u));

  if (missingFromCsv.length > 0) {
    failures += missingFromCsv.length;
    console.error(`[FAIL] Routes in src/app/sitemap.ts missing from IA/SLM CSV (${missingFromCsv.length}):`);
    for (const u of missingFromCsv) console.error(`  - ${u}`);
  } else {
    console.log(`[PASS] All ${sitemapRoutes.size} sitemap.ts routes are present in IA/SLM CSV.`);
  }

  if (missingFromSitemap.length > 0) {
    console.warn(`[WARN] Routes in IA/SLM CSV not in sitemap.ts (${missingFromSitemap.length}):`);
    for (const u of missingFromSitemap) console.warn(`  - ${u}`);
  }

  // 4. Verify zero www.aeobility.com.au URLs in CSVs or src/
  const rootCsvFiles = fs
    .readdirSync(rootDir)
    .filter((f) => f.toLowerCase().endsWith('.csv'))
    .map((f) => path.join(rootDir, f));
  const srcFiles = walkFiles(path.join(rootDir, 'src'), (_, name) => /\.(ts|tsx|js|jsx|mjs|json)$/.test(name));

  const wwwHits = [];
  for (const file of [...rootCsvFiles, ...srcFiles]) {
    const rel = path.relative(rootDir, file).replace(/\\/g, '/');
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, idx) => {
      if (/www\.aeobility\.com\.au/i.test(line)) {
        wwwHits.push(`${rel}:${idx + 1}: ${line.trim().slice(0, 120)}`);
      }
    });
  }

  if (wwwHits.length > 0) {
    failures += wwwHits.length;
    console.error(`[FAIL] Found ${wwwHits.length} www.aeobility.com.au reference(s) in CSVs or src/:`);
    for (const hit of wwwHits) console.error(`  - ${hit}`);
  } else {
    console.log(`[PASS] Zero www.aeobility.com.au URLs found across ${rootCsvFiles.length} CSVs and ${srcFiles.length} src/ files.`);
  }

  // 5. Optional AU English & CharCount check (mutates CSV only with --fix)
  let driftCount = 0;
  for (const row of records) {
    for (const key of Object.keys(row)) {
      if (key === 'SchemaType') continue;
      const val = row[key];
      if (typeof val === 'string') {
        const auVal = toAustralianEnglish(val);
        if (auVal !== val) {
          driftCount++;
          if (FIX_MODE) row[key] = auVal;
          console.warn(`[WARN] AU spelling drift in ${row.URL} -> ${key}`);
        }
      }
    }
    const seoTitle = row.SEOTitle || '';
    const metaDesc = row.MetaDescription || '';
    if (parseInt(row.SEOTitle_CharCount, 10) !== seoTitle.length) {
      driftCount++;
      if (FIX_MODE) row.SEOTitle_CharCount = String(seoTitle.length);
      console.warn(`[WARN] SEOTitle_CharCount mismatch in ${row.URL}: CSV=${row.SEOTitle_CharCount}, actual=${seoTitle.length}`);
    }
    if (parseInt(row.MetaDescription_CharCount, 10) !== metaDesc.length) {
      driftCount++;
      if (FIX_MODE) row.MetaDescription_CharCount = String(metaDesc.length);
      console.warn(`[WARN] MetaDescription_CharCount mismatch in ${row.URL}: CSV=${row.MetaDescription_CharCount}, actual=${metaDesc.length}`);
    }
  }

  if (FIX_MODE && driftCount > 0) {
    const headers = Object.keys(records[0]);
    const csvLines = [headers.join(','), ...records.map((r) => headers.map((h) => escapeCsv(r[h])).join(','))];
    fs.writeFileSync(IA_CSV_PATH, csvLines.join('\r\n') + '\r\n', 'utf8');
    console.log(`[FIX] Applied ${driftCount} AU spelling / char-count fixes to ${path.basename(IA_CSV_PATH)}.`);
  } else if (driftCount === 0) {
    console.log('[PASS] Zero AU spelling or character-count mismatches in IA/SLM CSV.');
  }

  if (failures > 0) {
    console.error(`\nIA/SLM Audit FAILED with ${failures} issue(s).`);
    process.exit(1);
  }
  console.log('\nIA/SLM Audit PASSED.');
}

main();
