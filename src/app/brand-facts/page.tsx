import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  BRAND_FACTS,
  BRAND_IDENTITY, 
  BRAND_DEFINITIONS, 
  PRICING_CONFIG, 
  PricingConfigItem,
  BRAND_KNOWLEDGE_LATTICE,
  PUBLIC_SCHEMA_GRAPH,
  PROVENANCE_ENTITIES,
  TECHNICAL_AUDITS
} from '@/lib/brandFacts';
import { ShieldCheck, Tag, CheckCircle2, BookOpen, Layers, Sparkles, HelpCircle, Cpu, Database, Search, Bot, Activity, ArrowRight, Award, ExternalLink, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
  description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
  alternates: {
    canonical: 'https://aeobility.com.au/brand-facts',
  },
  openGraph: {
    title: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
    description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
    url: 'https://aeobility.com.au/brand-facts',
    type: 'website',
  },
};

export default function HumanBrandFactsPage() {
  const pricingItems: PricingConfigItem[] = [
    PRICING_CONFIG.StrategicBlueprint,
    PRICING_CONFIG.FoundationCore,
    PRICING_CONFIG.FoundationImplementation,
    PRICING_CONFIG.MacroSprints,
    PRICING_CONFIG.MicroSprints,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* Background Interoperable Schema Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PUBLIC_SCHEMA_GRAPH) }}
      />

      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-32 sm:pb-20 w-full space-y-12">
        
        {/* Header and Temporal Badge */}
        <header className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>AEObility Brand Facts and Reference Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit">
              Canonical Brand Facts &amp; Machine Interface Directory
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-serif max-w-2xl leading-relaxed">
              This page serves as AEObility&apos;s canonical business knowledge layer. It publishes verified, first-party business facts, entities, relationships, provenance evidence, and commercial information for structured human and machine consumption.
            </p>
          </div>
          <div className="bg-zinc-950/90 border border-white/10 rounded-xl p-4 text-xs font-mono text-zinc-300 space-y-1.5 shrink-0 shadow-lg max-w-xs">
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Verification Stamp</div>
            <div>Verified: <span className="text-emerald-400 font-bold">{BRAND_IDENTITY.temporalBadge.lastVerified}</span></div>
            <div>Effective: <span className="text-white">{BRAND_IDENTITY.temporalBadge.effectiveDate}</span></div>
            <div>Review cycle: <span className="text-aeo-cyan">{BRAND_IDENTITY.temporalBadge.fiscalCycle}</span></div>
            <div className="text-[10px] text-zinc-400 pt-0.5">Reviewed by: {BRAND_IDENTITY.temporalBadge.reviewedBy}</div>
            <p className="text-[10px] text-zinc-500 font-serif pt-1 border-t border-white/5 leading-snug">
              {BRAND_IDENTITY.temporalBadge.governanceNote}
            </p>
          </div>
        </header>

        {/* Lexical Disambiguation Block */}
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-5 text-sm text-zinc-300 space-y-3">
          <div className="flex items-center gap-2 font-mono text-amber-400 font-semibold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Lexical Disambiguation &amp; Trading Profile</span>
          </div>
          <p className="text-xs sm:text-sm font-serif leading-relaxed">
            Primary public trading name: <strong className="text-white font-mono">{BRAND_FACTS.name}</strong> (pronounced <span className="text-amber-300 font-mono">{BRAND_FACTS.pronunciation}</span>). Registered entity: <strong className="text-white font-mono">{BRAND_IDENTITY.legalName}</strong> (ABN: <a href={BRAND_FACTS.abnLink} target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-mono inline-flex items-center gap-1">{BRAND_FACTS.abn} <ExternalLink className="w-3 h-3 inline" /></a>).
          </p>
          <p className="text-xs sm:text-sm font-serif leading-relaxed">
            <strong>Etymology:</strong> {BRAND_FACTS.etymology}.
          </p>
          <p className="text-xs sm:text-sm font-serif leading-relaxed text-zinc-200">
            <strong>Disambiguation:</strong> {BRAND_FACTS.disambiguation.statement}
          </p>
          <div className="pt-2 border-t border-amber-500/20 flex flex-wrap gap-2 items-center text-xs">
            <span className="text-zinc-400 font-mono text-[11px]">Known Aliases:</span>
            {BRAND_FACTS.knownAliases.map((alias) => (
              <span key={alias} className="px-2 py-0.5 rounded bg-black/40 border border-amber-500/30 font-mono text-amber-200 text-[11px]">
                {alias}
              </span>
            ))}
          </div>
        </div>

        {/* 1. Identity Alignment Block */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Layers className="w-4 h-4" />
            <span>1. Identity Alignment &amp; Scope</span>
          </div>
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 grid sm:grid-cols-2 gap-6 shadow-xl">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Registered Corporate Entity</span>
                <p className="text-lg font-bold text-white mt-1">{BRAND_IDENTITY.legalName}</p>
                <p className="text-xs text-zinc-400 font-serif mt-0.5">
                  Legal Structure: <strong className="text-white font-mono">{BRAND_FACTS.legalStructure}</strong> (ABN: <a href={BRAND_FACTS.abnLink} target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-mono inline-flex items-center gap-1">{BRAND_FACTS.abn} <ExternalLink className="w-3 h-3 inline" /></a>)
                </p>
                <p className="text-xs text-zinc-400 font-serif">
                  Entity Verification: <a href={BRAND_FACTS.abnLink} target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline inline-flex items-center gap-1">Australian Business Register (ABR) <ExternalLink className="w-3 h-3 inline" /></a>
                </p>
                <p className="text-xs text-zinc-400 font-serif">
                  Registration: <strong className="text-white font-mono">{BRAND_FACTS.registrationDate}</strong> ({BRAND_FACTS.registeringBody})
                </p>
                <p className="text-xs text-zinc-400 font-serif">Trading Name: <strong className="text-white">{BRAND_IDENTITY.name}</strong> ({BRAND_FACTS.status})</p>
                <p className="text-xs text-zinc-300 font-serif pt-1">
                  Primary entity type: <strong className="text-white">{BRAND_FACTS.entityType}</strong>. AEObility operates from {BRAND_FACTS.headquarters}, and delivers services remotely across Australia.
                </p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Key Personnel &amp; Leadership</span>
                <p className="text-base font-semibold text-white mt-1">Founder: {BRAND_FACTS.founder}</p>
                <p className="text-xs text-zinc-400 font-serif">Holder: {BRAND_FACTS.holder.name} ({BRAND_FACTS.holder.role})</p>
                <p className="text-xs text-zinc-400 font-serif">Registered: {BRAND_FACTS.registrationDate}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Principal Place of Business</span>
                <p className="text-base font-bold text-aeo-cyan mt-1">{BRAND_FACTS.principalPlaceOfBusiness.locality}, {BRAND_FACTS.principalPlaceOfBusiness.region} {BRAND_FACTS.principalPlaceOfBusiness.postalCode}, Australia</p>
                <p className="text-xs text-zinc-400 font-serif pt-1">Brand Promise: &ldquo;{BRAND_IDENTITY.brandPromise}&rdquo;</p>
                <p className="text-xs text-zinc-500 font-serif">Tagline: &ldquo;{BRAND_IDENTITY.tagline}&rdquo;</p>
              </div>
              <div className="pt-2 border-t border-white/5 space-y-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Category Anchors</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {BRAND_FACTS.categoryAnchors.map((anchor) => (
                    <span key={anchor} className="px-2 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-aeo-cyan text-[11px] font-mono">
                      {anchor}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-white/5 space-y-2">
                <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Entity Grounding (sameAs)</span>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
                  <a href="https://abr.business.gov.au/ABN/View?id=61029803255" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-aeo-cyan underline inline-flex items-center gap-1">
                    ABR <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="https://www.crunchbase.com/organization/aeobility" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-aeo-cyan underline inline-flex items-center gap-1">
                    Crunchbase <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="https://www.cbinsights.com/company/aeobility" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-aeo-cyan underline inline-flex items-center gap-1">
                    CB Insights <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="https://www.linkedin.com/company/aeobility" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-aeo-cyan underline inline-flex items-center gap-1">
                    LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a href="https://github.com/vinsnt76/aeobility" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-aeo-cyan underline inline-flex items-center gap-1">
                    GitHub <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Provenance Lineage & Entity Graph */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Activity className="w-4 h-4" />
            <span>1.5 Canonical Provenance &amp; Entity Lineage Graph</span>
          </div>
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              Historical and operational entities mapped across the AEObility lineage. Every commercial offering and interactive system is bound to verifiable entity triples and canonical absolute URIs.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PROVENANCE_ENTITIES.map((entity) => (
                <div 
                  key={entity.id} 
                  id={entity.canonicalUri.includes('#') ? entity.canonicalUri.split('#')[1] : undefined}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-4 space-y-2 hover:border-aeo-cyan/50 transition-colors scroll-mt-24"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-aeo-cyan/10 text-aeo-cyan border border-aeo-cyan/20">
                      {entity.layer}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{entity.schemaType}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-soehne-breit">{entity.name}</h3>
                  <p className="text-xs text-zinc-400 font-serif leading-relaxed line-clamp-2">{entity.description}</p>
                  <Link href={entity.canonicalUri.replace('https://aeobility.com.au', '') || '/'} className="inline-flex items-center gap-1 text-[11px] font-mono text-aeo-cyan hover:underline pt-1">
                    <span>Inspect URI</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Atomic Q&A Extraction Layer */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <HelpCircle className="w-4 h-4" />
            <span>2. Atomic Q&amp;A Extraction Layer</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl divide-y divide-white/10">
            <div className="p-4 bg-white/5 grid md:grid-cols-3 gap-2 text-xs font-semibold text-zinc-400 uppercase font-mono">
              <div className="md:col-span-1">Target Extraction Question</div>
              <div className="md:col-span-2">Monosemantic Ingestion Block (Answer Box Content)</div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-cyan">What is AEObility?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility is an Australian Answer Engine Optimisation consultancy headquartered in Perth, Western Australia. We improve the clarity of business content, information architecture, and structured data so search, map, and AI-answer systems can more easily interpret relevant business information.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-purple">Who does AEObility serve?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility serves Australian small-to-medium businesses, regional service providers, and e-commerce brands seeking clearer AI-search visibility and stronger information architecture.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-emerald-400">Where does AEObility operate?</div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                AEObility operates from Perth and delivers projects remotely across Australia.
              </div>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm hover:bg-white/[0.02] transition-colors">
              <div className="font-semibold text-white md:col-span-1 text-xs font-mono text-aeo-cyan">
                {TECHNICAL_AUDITS.agentReadiness.atomicAnswer.question}
              </div>
              <div className="text-zinc-300 md:col-span-2 font-serif text-xs leading-relaxed">
                {TECHNICAL_AUDITS.agentReadiness.atomicAnswer.answer}
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Third-Party Technical Audits & Benchmark Ledger */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Award className="w-4 h-4" />
            <span>2.5 Third-Party Technical Audits &amp; Benchmark Ledger</span>
          </div>

          <div className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border border-aeo-cyan/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-aeo-cyan/5 rounded-full blur-3xl pointer-events-none" />

            {/* Benchmark Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-white/10 relative">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>{TECHNICAL_AUDITS.agentReadiness.classification}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit">
                  Agent Readiness Benchmark Audit
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  Independent third-party evaluation measuring crawler accessibility, markdown content negotiation, bot authorization, and autonomous agent protocol discovery.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end shrink-0 bg-black/50 border border-white/10 rounded-2xl p-4 sm:px-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Overall Score</div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-aeo-cyan tracking-tight">
                  {TECHNICAL_AUDITS.agentReadiness.overallScore}
                  <span className="text-xl sm:text-2xl text-zinc-500 font-normal">/{TECHNICAL_AUDITS.agentReadiness.scaleMax}</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-1 font-semibold">Maximum Tier (Level 5)</div>
              </div>
            </div>

            {/* Audit Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase text-zinc-500">Evaluation Platform</span>
                <p className="text-white font-semibold truncate">{TECHNICAL_AUDITS.agentReadiness.evaluator}</p>
                <a 
                  href={TECHNICAL_AUDITS.agentReadiness.evaluationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-[11px] text-aeo-cyan hover:underline pt-0.5"
                >
                  <span>Verify Report</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase text-zinc-500">Evaluation Date</span>
                <p className="text-white font-semibold">{TECHNICAL_AUDITS.agentReadiness.testDate}</p>
                <span className="text-[10px] text-emerald-400 font-bold block pt-0.5">{TECHNICAL_AUDITS.agentReadiness.status}</span>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase text-zinc-500">Audit Cadence</span>
                <p className="text-white font-semibold">{TECHNICAL_AUDITS.agentReadiness.reviewCadenceDays} Days</p>
                <span className="text-[10px] text-zinc-400 block pt-0.5">Next: {TECHNICAL_AUDITS.agentReadiness.nextReviewDate}</span>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase text-zinc-500">Target Entity</span>
                <p className="text-white font-semibold truncate">aeobility.com.au</p>
                <span className="text-[10px] text-aeo-cyan block pt-0.5">Canonical Apex</span>
              </div>
            </div>

            {/* Category Scores Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Category Score Breakdown</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-semibold">Discoverability</span>
                    <span className="text-aeo-cyan font-bold">{TECHNICAL_AUDITS.agentReadiness.categoryScores.discoverability.score}%</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-serif">
                    Robots.txt, XML sitemap, link relation headers ({TECHNICAL_AUDITS.agentReadiness.categoryScores.discoverability.metric})
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-semibold">Content Structure</span>
                    <span className="text-emerald-400 font-bold">{TECHNICAL_AUDITS.agentReadiness.categoryScores.content.score}%</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-serif">
                    RFC 7231 markdown content negotiation ({TECHNICAL_AUDITS.agentReadiness.categoryScores.content.metric})
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-semibold">Bot Access Control</span>
                    <span className="text-emerald-400 font-bold">{TECHNICAL_AUDITS.agentReadiness.categoryScores.botAccessControl.score}%</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-serif">
                    Crawler rules, Content Signals, Web Bot Auth ({TECHNICAL_AUDITS.agentReadiness.categoryScores.botAccessControl.metric})
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-semibold">API &amp; Protocol Discovery</span>
                    <span className="text-emerald-400 font-bold">{TECHNICAL_AUDITS.agentReadiness.categoryScores.apiAuthMcpSkillDiscovery.score}%</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-serif">
                    RFC 9727, OAuth PRM, MCP Server, A2A, Skills ({TECHNICAL_AUDITS.agentReadiness.categoryScores.apiAuthMcpSkillDiscovery.metric})
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-semibold">Agent Commerce</span>
                    <span className="text-zinc-300 font-bold">{TECHNICAL_AUDITS.agentReadiness.categoryScores.commerce.score}%</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-serif">
                    UCP, ACP, MPP, AP2, x402 payment tiers ({TECHNICAL_AUDITS.agentReadiness.categoryScores.commerce.status})
                  </div>
                </div>
              </div>
            </div>

            {/* Retrieval Statement & Claim Discipline */}
            <div className="bg-black/60 border border-white/10 rounded-xl p-4 space-y-2">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Canonical Retrieval Statement</div>
              <p className="text-xs text-white font-mono bg-white/[0.02] p-2.5 rounded border border-white/5">
                &ldquo;{TECHNICAL_AUDITS.agentReadiness.retrievalStatement}&rdquo;
              </p>
              <p className="text-[11px] text-zinc-400 font-serif pt-1 leading-relaxed">
                <strong className="text-zinc-300 font-sans">Claim Discipline &amp; Scope Boundary:</strong> {TECHNICAL_AUDITS.agentReadiness.claimDisciplineNote}
              </p>
            </div>
          </div>
        </section>


        {/* 3. Glossary Blocks */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-purple">
            <BookOpen className="w-4 h-4" />
            <span>3. Terminology Scope Boundaries</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(BRAND_DEFINITIONS).map(([term, data]) => (
              <div key={term} className="border border-white/10 rounded-2xl p-6 bg-zinc-950/80 shadow-xl space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-soehne-breit">{term}</h3>
                  <div className="space-y-2.5 text-xs text-zinc-300 font-serif leading-relaxed">
                    <p><strong className="text-white font-sans">Working definition:</strong> {data.workingDefinition}</p>
                    {'aeobilityApproach' in data && (
                      <p><strong className="text-aeo-cyan font-sans">AEObility approach:</strong> {data.aeobilityApproach}</p>
                    )}
                    {'whatItAssesses' in data && (
                      <p><strong className="text-aeo-purple font-sans">What the diagnostic assesses:</strong> {data.whatItAssesses}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Costing Table Registry */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Tag className="w-4 h-4" />
            <span>4. Commercial Facts &amp; Service Architecture</span>
          </div>
          <p className="text-xs text-white/70 font-serif leading-relaxed">
            All service tiers are deterministic, fixed-scope engineering and structural deliverables with clear outputs and zero contract lock-in.
          </p>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">Package code</th>
                    <th className="p-4">Package and inclusions</th>
                    <th className="p-4">Typical delivery time</th>
                    <th className="p-4 text-right">Investment, ex. GST</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {pricingItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono text-xs text-aeo-cyan">{item.sku}</td>
                      <td className="p-4 font-semibold text-white">
                        <div>{item.name}</div>
                        {'description' in item && (
                          <p className="text-xs text-zinc-300 font-serif font-normal mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <ul className="text-xs text-zinc-400 font-serif space-y-1 mt-1.5 list-disc pl-4 font-normal">
                          {item.deliverables.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-zinc-300 font-mono text-xs">{item.duration}</td>
                      <td className="p-4 text-right font-bold text-white text-base">
                        {item.priceFromAUD && item.sku.includes('MICRO')
                          ? `From $${item.priceFromAUD.toLocaleString()}*`
                          : `$${item.priceAUD.toLocaleString()}*`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white/[0.02] p-4 border-t border-white/10 text-xs text-zinc-400 font-serif">
              * All commercial configurations are quoted exclusive of GST. Standalone diagnostic review costs are credited back 100% into implementation sprints if booked within 60 days.
            </div>
          </div>
        </section>

        {/* 5. Provenance Triples Ledger */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>5. Factual Provenance &amp; Evidence Ledger</span>
          </div>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                    <th className="p-4">Brand fact or relationship</th>
                    <th className="p-4">Evidence source type</th>
                    <th className="p-4">Supporting source</th>
                    <th className="p-4 text-center">Last checked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {BRAND_KNOWLEDGE_LATTICE.map((fact, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-sans text-xs text-white font-medium">
                        {fact.statement}
                      </td>
                      <td className="p-4 text-xs font-mono text-zinc-400">{fact.evidenceType}</td>
                      <td className="p-4">
                        <Link href={fact.source.replace('https://aeobility.com.au', '') || '/'} className="text-aeo-cyan hover:underline text-xs font-mono">
                          {fact.source}
                        </Link>
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase">
                          {fact.lastVerified}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Machine Interfaces & Observability Control Plane */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan">
            <Cpu className="w-4 h-4" />
            <span>6. Machine Interfaces &amp; Observability Control Plane</span>
          </div>

          {/* Conceptual Symmetry Anchor */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-white font-soehne-breit flex items-center gap-2">
              <Database className="w-4 h-4 text-aeo-cyan" />
              <span>One knowledge layer. Multiple machine interfaces.</span>
            </h3>
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              AEObility maintains one canonical business knowledge layer. Different machine interfaces provide different ways of accessing, interacting with, or evaluating that knowledge to enable structured representation, machine discovery, retrieval and observability across compatible systems.
            </p>
          </div>

          {/* 4 Access & Observability Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 6.1 Structured Data */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>6.1 Structured Data</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">Schema.org / JSON-LD</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Embedded in page source DOM (<code className="text-aeo-cyan font-mono text-[11px]">application/ld+json</code>). Provides a structured representation of AEObility as a <code className="text-white font-mono text-[11px]">ProfessionalService</code>, mapping core entities, founder details, operating location (Perth, WA), services, and supported organisational relationships.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Location: Embedded in document DOM
              </div>
            </div>

            {/* 6.2 Natural-Language Retrieval */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-aeo-purple uppercase flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  <span>6.2 Natural-Language Retrieval</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">NLWeb-Compatible Retrieval</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Exposed via <code className="text-aeo-purple font-mono text-[11px]">&lt;link rel=&quot;nlweb-ask&quot;&gt;</code> discovery metadata. Provides grounded vector retrieval against AEObility&apos;s published knowledge resources for supported natural-language querying clients.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Endpoint: <code className="text-white font-mono">POST /api/search/answer</code>
              </div>
            </div>

            {/* 6.3 Agent Interface */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>6.3 Agent Interface</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">MCP-Compatible Server</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Exposed via <code className="text-emerald-400 font-mono text-[11px]">&lt;link rel=&quot;nlweb-mcp&quot;&gt;</code> discovery metadata. Exposes selected entity, service, and knowledge-resource tools to supported clients.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                Endpoint: <code className="text-white font-mono">POST /api/mcp</code>
              </div>
            </div>

            {/* 6.4 Visibility Observability */}
            <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-amber-400 uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>6.4 Visibility Observability</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold uppercase">Active</span>
              </div>
              <h4 className="text-base font-bold text-white font-soehne-breit">Telemetry Diagnostic Engine</h4>
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                Assesses and measures selected technical, semantic, entity, and retrieval-readiness signals to evaluate how effectively AEObility&apos;s published facts can be crawled and interpreted.
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>UI: <Link href="/diagnostic" className="text-aeo-cyan hover:underline">/diagnostic</Link></span>
                <span>API: <code className="text-white font-mono">POST /api/diagnostic</code></span>
              </div>
            </div>
          </div>

          {/* Machine Discovery Status Ledger */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Machine Discovery Status Ledger
            </div>
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-xs font-semibold text-zinc-400 uppercase font-mono">
                      <th className="p-4">Interface</th>
                      <th className="p-4">Access Point / Location</th>
                      <th className="p-4">Operational Role</th>
                      <th className="p-4 text-center">Interface Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-mono">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-aeo-cyan">JSON-LD</td>
                      <td className="p-4 text-zinc-300">Page source DOM</td>
                      <td className="p-4 text-zinc-300 font-serif">Structured entity representation (<code className="text-white font-mono">ProfessionalService</code>).</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-aeo-purple">NLWeb</td>
                      <td className="p-4 text-zinc-300"><code className="text-white font-mono">/api/search/answer</code></td>
                      <td className="p-4 text-zinc-300 font-serif">Natural-language knowledge retrieval.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-emerald-400">MCP</td>
                      <td className="p-4 text-zinc-300"><code className="text-white font-mono">/api/mcp</code></td>
                      <td className="p-4 text-zinc-300 font-serif">Tools and resources for compatible MCP clients.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-amber-400">AGENTS</td>
                      <td className="p-4 text-zinc-300">
                        <Link href="/AGENTS.md" className="text-aeo-cyan hover:underline">/AGENTS.md</Link>
                      </td>
                      <td className="p-4 text-zinc-300 font-serif">Crawler and agent guidance manifest.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-pink-400">Telemetry</td>
                      <td className="p-4 text-zinc-300">
                        <Link href="/diagnostic" className="text-aeo-cyan hover:underline">/diagnostic</Link> + <code className="text-white font-mono">/api/diagnostic</code>
                      </td>
                      <td className="p-4 text-zinc-300 font-serif">Machine-readiness and observability diagnostics.</td>
                      <td className="p-4 text-center">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Architectural Separation Directives (Callout Box) */}
          <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-5 text-xs text-zinc-300 space-y-2.5">
            <div className="flex items-center gap-2 font-mono text-aeo-cyan font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Separation Directives (Anti-Ontological Mixing)</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-4 font-serif text-zinc-300">
              <li><strong className="text-white font-sans">Strict Schema Boundaries:</strong> Do not generate or inject Model Context Protocol (MCP) tool capabilities, schema strings, or programmatic API arguments inside the global <code className="text-zinc-200 font-mono">application/ld+json</code> organisation graph.</li>
              <li><strong className="text-white font-sans">Separation of Concerns:</strong> Keep structural graph definitions (<code className="text-zinc-200 font-mono">@type: ProfessionalService</code>, <code className="text-zinc-200 font-mono">founder: Vince Baker</code>, <code className="text-zinc-200 font-mono">areaServed: Australia</code>) isolated to the JSON-LD payload. Tool execution logic lists remain strictly constrained within the JSON-RPC interface schema of <code className="text-zinc-200 font-mono">/api/mcp</code>.</li>
              <li><strong className="text-white font-sans">Interface Discovery Routing:</strong> Machine discovery of programmatic access points must utilise semantic HTML <code className="text-zinc-200 font-mono">&lt;link&gt;</code> elements within document metadata, keeping the entry path cleanly decoupled from static data entries.</li>
            </ul>
          </div>
        </section>

        {/* Closing Trust Corridor */}
        <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed max-w-2xl mx-auto">
            AEObility helps Australian businesses make their information easier to discover and understand across maps, search, and AI-search experiences.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
