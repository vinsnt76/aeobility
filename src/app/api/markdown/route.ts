import { NextRequest, NextResponse } from 'next/server';
import { handleCorsOptions, corsHeaders } from '@/lib/cors';
import knowledgeBaseData from '@/lib/search/knowledgeBase.json';
import { KnowledgeNode, KnowledgeBaseExport } from '@/lib/search/types';

export const runtime = 'edge';

const rawData = knowledgeBaseData as unknown as KnowledgeBaseExport;
const knowledgeBase: KnowledgeNode[] = Array.isArray(rawData) ? rawData : rawData.nodes;

const HOMEPAGE_MARKDOWN = `# AEObility: Answer Engine Optimisation (AEO) Systems

> **Get Found. Get Chosen. Grow Faster.**
> Australia's specialist Answer Engine Optimisation (AEO) and AI Search consultancy based in Perth, Western Australia.

## Executive Summary

AEObility helps growth-focused Australian businesses restructure their digital presence to be crawled, indexed, and cited by Large Language Models (LLMs), conversational search engines (ChatGPT, Gemini, Perplexity, Claude), and spatial map packs (Google Maps, Apple Maps).

Traditional SEO focuses on keyword stuffing and backlinks. AEO focuses on entity salience, structured data provenance, and 90-120 token atomic answer blocks designed for direct AI ingestion.

---

## Core Capabilities & Services

### 1. Answer Engine Optimisation (AEO)
- Restructuring web content into 90-120 token atomic answer blocks and FAQ Knowledge Graph topologies.
- Maximising positional bias, entity salience, and citation likelihood in generative AI answers.
- Canonical URL: https://aeobility.com.au/services/aeo

### 2. Geographic Engine Optimisation (GEO)
- Location-aware optimisation rules, coordinate precision mapping, and regional intent frameworks.
- Optimising local service business map packs and proximity matrices for Apple Maps, Google Maps, and local voice queries.
- Canonical URL: https://aeobility.com.au/services/geo-marketing

### 3. AI Search Strategy & Consultancy
- Tailored strategies for Perplexity, ChatGPT, Google AI Overviews, and Gemini generative search results.
- Serving businesses in Perth, Melbourne, Sydney, Adelaide, and Brisbane.
- Canonical URL: https://aeobility.com.au/services/ai-search-agency

### 4. AI Search Visibility Diagnostic Engine
- Free 5-dimensional diagnostic audit tool evaluating schema completeness, entity authority, positional bias, vector proximity, and RAG survival probability.
- Canonical URL: https://aeobility.com.au/diagnostic

---

## Transparent, Fixed-Scope Solutions

1. **The Strategic Blueprint Method**: $995 AUD standalone Clarity Phase deep technical audit and 90-day strategic roadmap (100% credited into implementation).
   - Canonical URL: https://aeobility.com.au/solutions/aeo-blueprint
2. **AEO Technical Sprints**: Programmatic schema graph nesting, code refactoring, passage extraction, and atomic block rewrites with zero lock-in contracts.
   - Canonical URL: https://aeobility.com.au/solutions/aeo-sprint
3. **GEO Services Sprint**: Coordinate precision mapping, verified map pack foundations, and regional intent frameworks.
   - Canonical URL: https://aeobility.com.au/services/geo-marketing

---

## Machine-Readable Specifications & Agent Protocols

- **Agent Registration & Discovery (\`auth.md\`)**: https://aeobility.com.au/auth.md
- **OAuth Protected Resource Metadata (PRM)**: https://aeobility.com.au/.well-known/oauth-protected-resource
- **OAuth Authorization Server Metadata**: https://aeobility.com.au/.well-known/oauth-authorization-server
- **RFC 9727 API Catalog**: https://aeobility.com.au/.well-known/api-catalog
- **OpenAPI 3.1.0 Specification**: https://aeobility.com.au/openapi.json
- **AI Agent Grounding Specification**: https://aeobility.com.au/AGENTS.md
- **llms.txt Machine Manifest**: https://aeobility.com.au/llms.txt
- **Brand Facts & Evidence Ledger**: https://aeobility.com.au/brand-facts

---

## Organisation & Provenance

- **Brand Name**: AEObility
- **Legal Entity Name**: AEObility
- **ABN**: 61 029 803 255
- **Headquarters**: Perth, Western Australia, Australia
- **Contact Email**: vince@aeobility.com.au
- **Contact Form**: https://aeobility.com.au/contact
- **Machine Legibility Guarantee**: All answers and citations are verifiable against canonical brand facts.
`;

function generateNodeMarkdown(node: KnowledgeNode): string {
  const primaryKws = node.primaryKeywords ? node.primaryKeywords.split('\n').filter(Boolean).join(', ') : 'AEO, AI Search';
  const secondaryKws = node.secondaryKeywords ? node.secondaryKeywords.split('\n').filter(Boolean).join(', ') : 'Semantic SEO, Entity Authority';

  return `# ${node.h1 || node.pageName} - AEObility

> **Canonical URL**: https://aeobility.com.au${node.url}
> **Schema Type**: ${node.schemaType}
> **Focus Keyphrase**: ${node.focusKeyphrase}

## Executive Summary

${node.description}

---

## Entity Focus & Semantic Context

- **Primary Entities & Keyphrases**: ${primaryKws}
- **Secondary Latent Topics**: ${secondaryKws}
- **Latent Semantic Relevance**: ${node.latentKeywords || 'AEO, GEO, Knowledge Graphs, Retrieval-Augmented Generation'}

---

## Core Engagements & Next Steps

1. **AI Visibility Diagnostic**: Run a free real-time diagnostic scan at https://aeobility.com.au/diagnostic
2. **Strategic Blueprint Method**: Lock in a comprehensive clarity phase audit at https://aeobility.com.au/solutions/aeo-blueprint
3. **AEO Technical Sprint**: Programmatic schema nesting and atomic block rewrites at https://aeobility.com.au/solutions/aeo-sprint
4. **Agent Documentation**: View the complete agent specification at https://aeobility.com.au/AGENTS.md or https://aeobility.com.au/auth.md

---

## Brand Information & Provenance

- **Entity**: AEObility (ABN: 61 029 803 255)
- **Location**: Perth, Western Australia, Australia
- **Canonical Ledger**: https://aeobility.com.au/brand-facts
- **Direct Contact**: vince@aeobility.com.au | https://aeobility.com.au/contact
`;
}

function generateGenericMarkdown(pathname: string): string {
  const cleanTitle = pathname
    .replace(/^\//, '')
    .split('/')
    .map((seg) => seg.replace(/[-_]/g, ' '))
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join(' > ') || 'Overview';

  return `# ${cleanTitle} - AEObility

> **Requested Path**: https://aeobility.com.au${pathname}
> **Status**: Verified Canonical Entity

## Overview

AEObility is an Answer Engine Optimisation (AEO) and AI Search consultancy based in Perth, Western Australia. We specialise in helping Australian SMBs and enterprise teams build machine-readable entity consensus for Google AI Overviews, ChatGPT, Gemini, and Perplexity.

---

## Key Corridors & Navigation

- **Homepage**: https://aeobility.com.au/
- **AEO Services Hub**: https://aeobility.com.au/services/aeo
- **AI Search Agency**: https://aeobility.com.au/services/ai-search-agency
- **GEO Marketing Services**: https://aeobility.com.au/services/geo-marketing
- **Strategic Blueprint**: https://aeobility.com.au/solutions/aeo-blueprint
- **AI Diagnostic Review**: https://aeobility.com.au/diagnostic
- **Agent Specification**: https://aeobility.com.au/AGENTS.md
- **API Catalog**: https://aeobility.com.au/.well-known/api-catalog

---

## Contact & Grounding

- **ABN**: 61 029 803 255
- **Headquarters**: Perth, Western Australia, Australia
- **Email**: vince@aeobility.com.au
- **Enquiries**: https://aeobility.com.au/contact
`;
}

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET(request: NextRequest) {
  let targetPath = request.nextUrl.searchParams.get('path') || '/';

  // Normalize path
  targetPath = targetPath.trim();
  if (targetPath.endsWith('.md')) {
    targetPath = targetPath.replace(/\.md$/, '') || '/';
  }
  if (!targetPath.startsWith('/')) {
    targetPath = `/${targetPath}`;
  }
  if (targetPath.length > 1 && targetPath.endsWith('/')) {
    targetPath = targetPath.slice(0, -1);
  }

  let markdownContent = '';

  if (targetPath === '/' || targetPath === '') {
    markdownContent = HOMEPAGE_MARKDOWN;
  } else {
    // Look up in knowledgeBase nodes
    const lower = targetPath.toLowerCase();
    const matchedNode = knowledgeBase.find((n) => n.url.toLowerCase() === lower);

    if (matchedNode) {
      markdownContent = generateNodeMarkdown(matchedNode);
    } else {
      markdownContent = generateGenericMarkdown(targetPath);
    }
  }

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      ...corsHeaders,
    },
  });
}
