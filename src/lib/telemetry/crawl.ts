import * as cheerio from 'cheerio';

import { TechnicalSEO, CrawlQuality } from './types';

export async function crawlUrl(rawUrl: string): Promise<{ textContent: string; technicalSEO: TechnicalSEO; schemaValidation: import('./types').SchemaValidation; crawlQuality: CrawlQuality }> {
  const trimmed = rawUrl.trim();
  const url = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    // Add a fast 6s timeout and pretend to be a normal browser to avoid simple blocks
    const res = await fetch(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      signal: AbortSignal.timeout(6000),
      next: { revalidate: 3600 } // cache in Next.js if possible
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    }
    
    const html = await res.text();

    // 1. Technical SEO Extraction via Cheerio
    const $ = cheerio.load(html);
    const title = $('title').text() || null;
    const metaDescription = $('meta[name="description"]').attr('content') || null;
    
    const h1Count = $('h1').length;
    const h2Count = $('h2').length;
    const h3Count = $('h3').length;
    
    // Count internal links (starts with / or the domain itself)
    let internalDomain = '';
    try {
      const urlObj = new URL(url);
      internalDomain = urlObj.origin;
    } catch {
      // Ignore
    }
    
    let internalLinksCount = 0;
    $('a').each((_, el) => {
      const href = $(el).attr('href');
      if (href && (href.startsWith('/') || (internalDomain && href.startsWith(internalDomain)))) {
        internalLinksCount++;
      }
    });

    const technicalSEO: TechnicalSEO = {
      title,
      metaDescription,
      headingsCount: { h1: h1Count, h2: h2Count, h3: h3Count },
      internalLinksCount
    };

    // Extract Schema.org JSON-LD
    const typesFound: string[] = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        // Fallback to text() if html() is null/empty, though html() is standard for script tags in Cheerio
        const content = $(el).html() || $(el).text();
        if (content) {
          // Clean up potential invalid characters that break standard JSON.parse in some CMS themes
          const cleanContent = content.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'");
          const parsed = JSON.parse(cleanContent);
          
          const extractTypes = (obj: Record<string, unknown> | null) => {
            if (!obj) return;
            
            // Handle @type which can be a string or array of strings
            if (obj['@type']) {
              if (Array.isArray(obj['@type'])) {
                obj['@type'].forEach((t: string) => typesFound.push(t));
              } else if (typeof obj['@type'] === 'string') {
                typesFound.push(obj['@type']);
              }
            }
            
            // Handle @graph which contains nested schema objects
            if (obj['@graph'] && Array.isArray(obj['@graph'])) {
              obj['@graph'].forEach((item: Record<string, unknown>) => extractTypes(item));
            }
          };

          // Handle both single objects and arrays of schema objects at root
          const schemas = Array.isArray(parsed) ? parsed : [parsed];
          schemas.forEach(s => extractTypes(s));
        }
      } catch {
        // Ignore parse errors for individual scripts
      }
    });

    const schemaValidation = {
      hasValidSchema: typesFound.length > 0,
      typesFound
    };

    // 2. Semantic Content Extraction via Cheerio (Serverless safe)
    // Remove non-content elements to simulate Readability
    $('script, style, noscript, iframe, svg, nav, footer, header, aside').remove();
    const cheerioText = $('body').text().replace(/\s+/g, ' ').trim();
    
    let textContent = cheerioText;
    let method: CrawlQuality['method'] = 'Cheerio';
    
    if (!textContent) {
      textContent = "No readable content found.";
      method = 'Fallback';
    }
    
    // Calculate Crawl Quality Score
    const htmlLen = html.length;
    const contentLen = textContent.length;
    let hydrationRequired = false;
    let qualityScore = 100;
    
    if (htmlLen > 10000 && contentLen < 500) {
      // Extremely low text-to-html ratio implies JS-heavy SPA requiring hydration
      hydrationRequired = true;
      qualityScore = 20; 
    } else if (method === 'Fallback') {
      qualityScore = 40;
    } else if (method === 'Cheerio') {
      qualityScore = 80;
    }
    
    const crawlQuality: CrawlQuality = {
      score: qualityScore,
      method,
      hydrationRequired
    };
    
    // Truncate to reasonable length for LLM (e.g., 20000 chars)
    if (textContent.length > 20000) {
      textContent = textContent.slice(0, 20000);
    }

    return { textContent, technicalSEO, schemaValidation, crawlQuality };
  } catch (error) {
    console.error(`Error crawling ${url}:`, error);
    return {
      textContent: "Crawl failed. " + (error instanceof Error ? error.message : String(error)),
      technicalSEO: { title: null, metaDescription: null, headingsCount: { h1: 0, h2: 0, h3: 0 }, internalLinksCount: 0 },
      schemaValidation: { hasValidSchema: false, typesFound: [] },
      crawlQuality: { score: 0, method: 'Fallback', hydrationRequired: false }
    };
  }
}
