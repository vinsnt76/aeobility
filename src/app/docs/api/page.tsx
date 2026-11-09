import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Terminal, 
  FileCode2, 
  Cpu, 
  Activity, 
  Database, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  Code2, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Public API & Agent Interface Documentation | AEObility',
  description: 'Official API documentation and automated discovery catalog for AEObility public web services, RFC 9727 linksets, OpenAPI 3.1.0 specifications, and Model Context Protocol (MCP) tools.',
  alternates: {
    canonical: 'https://aeobility.com.au/docs/api',
  },
  openGraph: {
    title: 'Public API & Agent Interface Documentation | AEObility',
    description: 'Official API documentation and automated discovery catalog for AEObility public web services, RFC 9727 linksets, and OpenAPI specifications.',
    url: 'https://aeobility.com.au/docs/api',
    type: 'website',
  },
};

export default function ApiDocumentationPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://aeobility.com.au/#organization',
        'name': 'AEObility',
        'legalName': 'AEObility',
        'alternateName': [
          'AEO Bility',
          'aeo bility',
          'aeo.bility',
          'AEO.bility',
          'AEObility Perth'
        ],
        'url': 'https://aeobility.com.au/',
        'telephone': '+61-480-286-282',
        'logo': 'https://aeobility.com.au/aeobility-logo-light.svg',
        'foundingDate': '2026-07-21',
        'taxID': 'ABN 61 029 803 255',
        'founder': {
          '@id': 'https://aeobility.com.au/#vincebaker'
        },
        'identifier': {
          '@type': 'PropertyValue',
          'propertyID': 'AUSTRALIAN_BUSINESS_NUMBER',
          'name': 'ABN',
          'value': '61029803255',
          'url': 'https://abr.business.gov.au/ABN/View?id=61029803255'
        },
        'sameAs': [
          'https://abr.business.gov.au/ABN/View?id=61029803255',
          'https://www.crunchbase.com/organization/aeobility',
          'https://www.cbinsights.com/company/aeobility',
          'https://www.producthunt.com/@aeobility',
          'https://www.linkedin.com/company/aeobility',
          'https://dev.to/aeobility',
          'https://github.com/vinsnt76/aeobility'
        ],
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Dianella',
          'addressRegion': 'WA',
          'postalCode': '6059',
          'addressCountry': 'AU'
        }
      },
      {
        '@type': 'WebAPI',
        '@id': 'https://aeobility.com.au/docs/api#webapi',
        'name': 'AEObility Public Telemetry & Discovery APIs',
        'description': 'Automated discovery catalog and REST endpoints for AI search visibility scoring, canonical consensus facts, and Model Context Protocol (MCP) tools.',
        'url': 'https://aeobility.com.au/docs/api',
        'documentation': 'https://aeobility.com.au/docs/api',
        'publisher': {
          '@id': 'https://aeobility.com.au/#organization'
        },
        'provider': {
          '@id': 'https://aeobility.com.au/#organization'
        },
        'termsOfService': 'https://aeobility.com.au/terms',
        'serviceType': 'Search Engine Optimisation & AI Agent Infrastructure'
      },
      {
        '@type': 'TechArticle',
        '@id': 'https://aeobility.com.au/docs/api#article',
        'headline': 'AEObility Public API & Agent Interface Documentation',
        'description': 'Technical guide and endpoint reference for developers, autonomous agents, and search engines querying AEObility services.',
        'url': 'https://aeobility.com.au/docs/api',
        'author': {
          '@type': 'Person',
          '@id': 'https://aeobility.com.au/#vincebaker',
          'name': 'Vince Baker'
        },
        'publisher': {
          '@type': 'ProfessionalService',
          '@id': 'https://aeobility.com.au/#organization',
          'name': 'AEObility'
        }
      }
    ]
  };

  const endpoints = [
    {
      id: 'diagnostic',
      name: 'AI Visibility Diagnostic Scan',
      path: '/api/diagnostic',
      method: 'POST',
      category: 'Telemetry',
      description: 'Executes a multi-stage telemetry scan checking entity salience, structured schema coverage, vector proximity, and AI search readiness.',
      requestExample: `{
  "intent": "AEO consultant Perth",
  "url": "https://example.com.au"
}`,
      responseExample: `{
  "readinessScore": 84,
  "salienceRatio": 0.92,
  "status": "completed",
  "provenanceVerified": true
}`
    },
    {
      id: 'brand-facts',
      name: 'Brand Facts & Knowledge Lattice',
      path: '/api/brand-facts',
      method: 'GET',
      category: 'Consensus',
      description: 'Retrieves canonical consensus facts, business identity triples, fixed-scope pricing catalogs, and verified provenance lineage.',
      requestExample: `curl -s https://aeobility.com.au/api/brand-facts`,
      responseExample: `{
  "account": "AEObility CBKL Domain Engine",
  "payload": {
    "identity": { "legalName": "AEObility", "abn": "39 635 245 422" },
    "commercialManifest": { "currency": "AUD", "taxStatus": "Excluding GST" }
  }
}`
    },
    {
      id: 'mcp',
      name: 'Model Context Protocol (MCP) Tools',
      path: '/api/mcp',
      method: 'GET',
      category: 'Agent Protocol',
      description: 'Exposes MCP v1.0.0 tools and schema definitions for autonomous AI agents, including entity retrieval and knowledge hub queries.',
      requestExample: `curl -s https://aeobility.com.au/api/mcp`,
      responseExample: `{
  "mcpVersion": "1.0.0",
  "tools": [
    { "name": "get_organization_entity", "description": "Retrieves canonical consensus facts" },
    { "name": "query_knowledge_hub_node", "description": "Searches semantic lattice links" }
  ]
}`
    },
    {
      id: 'search',
      name: 'Grounded Vector Knowledge Retrieval',
      path: '/api/search',
      method: 'GET / POST',
      category: 'Retrieval',
      description: 'Performs hybrid semantic and lexical retrieval across AEObility articles, guides, and Atomic Answer Blocks.',
      requestExample: `curl -s "https://aeobility.com.au/api/search?q=what+is+aeo"`,
      responseExample: `{
  "answer": "Answer Engine Optimisation (AEO) structures first-party business facts...",
  "similarityScore": 0.94,
  "topMatch": { "title": "What is AEO", "url": "/services/aeo/definition" }
}`
    },
    {
      id: 'health',
      name: 'API Health & Status',
      path: '/api/health',
      method: 'GET',
      category: 'Operations',
      description: 'Returns operational availability, server timestamp, and automated catalog links for monitoring.',
      requestExample: `curl -s https://aeobility.com.au/api/health`,
      responseExample: `{
  "status": "ok",
  "service": "AEObility API Platform",
  "system": "operational",
  "catalog": "https://aeobility.com.au/.well-known/api-catalog"
}`
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-20 w-full space-y-12">
        {/* Header Hero */}
        <header className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RFC 9727 Compliant API Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            AEObility Public API &amp; <span className="text-gradient-aeo">Agent Interface</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-serif leading-relaxed max-w-3xl">
            Welcome to the official developer and AI agent interface directory for AEObility. All public endpoints support automated discovery via RFC 9727 linksets, strict CORS headers, and machine-readable OpenAPI specifications.
          </p>

          {/* Quick Standards Pill Bar */}
          <div className="py-2.5 px-3.5 rounded-xl bg-zinc-950/80 border border-white/5 text-[11px] sm:text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 text-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
              <span>Format: application/linkset+json</span>
            </span>
            <span className="text-zinc-600">•</span>
            <span>OpenAPI 3.1.0</span>
            <span className="text-zinc-600">•</span>
            <span>MCP v1.0.0 Enabled</span>
            <span className="text-zinc-600">•</span>
            <span>Public Read Access (No Auth Required)</span>
          </div>
        </header>

        {/* Discovery Gateways Card */}
        <section aria-label="Automated Discovery Endpoints" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/.well-known/api-catalog"
            target="_blank"
            className="p-5 rounded-2xl bg-zinc-950/90 border border-aeo-cyan/30 hover:border-aeo-cyan transition-all space-y-2 group block"
          >
            <div className="flex items-center justify-between text-xs font-mono text-aeo-cyan">
              <span className="font-bold">RFC 9727 Catalog</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
            <div className="text-sm font-bold text-white font-mono break-all">/.well-known/api-catalog</div>
            <p className="text-xs text-zinc-400 font-serif">
              Machine-readable linkset mapping API anchors, specs, and status indicators.
            </p>
          </Link>

          <Link
            href="/openapi.json"
            target="_blank"
            className="p-5 rounded-2xl bg-zinc-950/90 border border-aeo-purple/30 hover:border-aeo-purple transition-all space-y-2 group block"
          >
            <div className="flex items-center justify-between text-xs font-mono text-aeo-purple">
              <span className="font-bold">OpenAPI Specification</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
            <div className="text-sm font-bold text-white font-mono break-all">/openapi.json</div>
            <p className="text-xs text-zinc-400 font-serif">
              Full OpenAPI 3.1.0 schema definitions and parameters for all public endpoints.
            </p>
          </Link>

          <Link
            href="/api/health"
            target="_blank"
            className="p-5 rounded-2xl bg-zinc-950/90 border border-emerald-500/30 hover:border-emerald-400 transition-all space-y-2 group block"
          >
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="font-bold">Operational Status</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
            <div className="text-sm font-bold text-white font-mono break-all">/api/health</div>
            <p className="text-xs text-zinc-400 font-serif">
              Real-time operational status, availability verification, and uptime heartbeats.
            </p>
          </Link>
        </section>

        {/* Endpoint Directory */}
        <section aria-label="Available Endpoints" className="space-y-6">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white font-soehne-breit flex items-center gap-2">
              <Terminal className="w-5 h-5 text-aeo-cyan" />
              <span>Public Endpoint Catalog</span>
            </h2>
            <span className="text-xs font-mono text-zinc-400">5 Active Services</span>
          </div>

          <div className="space-y-6">
            {endpoints.map((ep) => (
              <div 
                key={ep.id} 
                id={ep.id}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-4 hover:border-white/20 transition-all scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-white/10 text-white">
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm font-bold text-aeo-cyan">
                      {ep.path}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 self-start sm:self-auto">
                    {ep.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{ep.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                    {ep.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                      Request Example
                    </span>
                    <pre className="p-3 rounded-xl bg-black border border-white/10 text-[11px] font-mono text-zinc-300 overflow-x-auto">
                      <code>{ep.requestExample}</code>
                    </pre>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      Response Example (200 OK)
                    </span>
                    <pre className="p-3 rounded-xl bg-black border border-white/10 text-[11px] font-mono text-emerald-300/90 overflow-x-auto">
                      <code>{ep.responseExample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Instructions for AI Agents */}
        <section aria-label="AI Agent Integration" className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-white font-soehne-breit flex items-center gap-2">
            <Cpu className="w-5 h-5 text-aeo-purple" />
            <span>Autonomous Agent Guidelines</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
            AI bots, crawlers, and retrieval systems can discover AEObility services automatically without manual configuration. All responses are served with permissive cross-origin headers (<code className="text-aeo-cyan font-mono">Access-Control-Allow-Origin: *</code>). For grounding specifications and brand facts provenance, refer to our public <Link href="/AGENTS.md" className="text-aeo-cyan hover:underline font-mono">AGENTS.md</Link> specification and <Link href="/llms.txt" className="text-aeo-cyan hover:underline font-mono">llms.txt</Link>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
