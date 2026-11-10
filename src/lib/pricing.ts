/**
 * AEObility Technical Sprint Pricing Architecture
 * Path: src/lib/pricing.ts
 * Single Source of Truth (SSOT) for all SKUs, tiers, SLAs, and commercial governance rules.
 * Locale: en-AU (Australian English spelling and AUD currency)
 */

export type SprintSKUCategory =
  | 'blueprint'
  | 'onboarding'
  | 'macro'
  | 'micro'
  | 'foundation'
  | 'enterprise'
  | 'hourly'
  | 'advisory';

export interface SprintSKU {
  code: string;
  name: string;
  priceExGst: number;
  handsOnEffort: string;
  deliverySla: string;
  category: SprintSKUCategory;
  purpose: string;
  deliverables: string[];
  isWaivedWithPackage?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  priceExGst: number;
  sla: string;
  targetGoal: string;
  deliverables: string[];
  skuCodes: string[];
  popular: boolean;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

export interface GovernanceRules {
  creditWindowDays: number;
  creditAmountExGst: number;
  outOfScopeHourlyRate: number;
  hourlyRateExGst: number;
  turnkeyPageLimit: number;
  clientIpOwnership: string;
  ipOwnership: string;
  retainerCadence: string;
  retainerCadenceDays: number;
}

// ============================================================================
// 1. GOVERNANCE RULES
// ============================================================================

export const GOVERNANCE_RULES: GovernanceRules = {
  creditWindowDays: 60,
  creditAmountExGst: 995,
  outOfScopeHourlyRate: 220,
  hourlyRateExGst: 220,
  turnkeyPageLimit: 10,
  clientIpOwnership: "100% Outright Client IP Ownership",
  ipOwnership: "100% Outright Client IP Ownership",
  retainerCadence: "Governed 30-Day Sprint Cycles (3x $1,980/mo MRR)",
  retainerCadenceDays: 30,
};

// ============================================================================
// 2. TECHNICAL SPRINT CATALOGUE (ALL SKUs)
// ============================================================================

export const TECHNICAL_SPRINT_CATALOG: Record<string, SprintSKU> = {
  // Top-of-Funnel & Diagnostic Core
  'FREE-AUDIT': {
    code: 'FREE-AUDIT',
    name: 'Free Automated Website Audit',
    priceExGst: 0,
    handsOnEffort: 'Automated (0 Hrs)',
    deliverySla: '24 Hours',
    category: 'blueprint',
    purpose: 'Top-of-funnel diagnostic entry point generating baseline visibility metrics and readiness indicators.',
    deliverables: [
      'Automated 6-stage technical crawl',
      'AI First Impression score and classification',
      'Readiness PASS/FAIL verdict report'
    ],
  },
  'BPMICRO': {
    code: 'BPMICRO',
    name: 'Micro-Blueprint Scope Validation',
    priceExGst: 295,
    handsOnEffort: '30 Minutes',
    deliverySla: '1 Business Day',
    category: 'blueprint',
    purpose: 'Streamlined diagnostic scope validation for lower-barrier subsprint engagements.',
    deliverables: [
      'Pre-meeting automated scan',
      'Baseline entity resolution check',
      'Subsprint scoping report'
    ],
  },
  'BPSTRAT': {
    code: 'BPSTRAT',
    name: 'Strategic Blueprint',
    priceExGst: 995,
    handsOnEffort: '4–6 Hours',
    deliverySla: '5 Business Days',
    category: 'blueprint',
    purpose: 'De-risk technical execution through comprehensive diagnostic discovery. Identify missing business entities, broken citation links, and outdated schema across your digital footprint so search engines and AI models accurately recognise your services before deploying code.',
    deliverables: [
      'Entity Architecture & Gap Analysis: Comprehensive audit of brand entities, multi-source knowledge graph alignment, and competitive schema coverage.',
      'Schema Drift & Syntax Report: DOM-level diagnostic identifying malformed JSON-LD, missing entity nodes, and rich-result errors so search engines parse your content without confusion.',
      'Retrieval & Search Visibility Evaluation: Empirical evaluation of answer passage retrieval and semantic coverage to ensure your services get recommended in AI Overviews and conversational search.',
      '90-Day Prioritised Implementation Roadmap: Chronological sprint plan detailing priority fixes, required labour allocation, and engineering prerequisites.',
      'Executive Stakeholder Briefing (45 Mins): Dedicated presentation and strategic walkthrough of diagnostic findings with your marketing and engineering leads.'
    ],
  },

  // Onboarding & Setup
  'ONBOARD': {
    code: 'ONBOARD',
    name: 'Technical Onboarding & Setup',
    priceExGst: 250,
    handsOnEffort: '1–1.5 Hours',
    deliverySla: '2 Business Days',
    category: 'onboarding',
    isWaivedWithPackage: true,
    purpose: 'Initial technical client setup, system integration, and baseline configuration (included at $0.00 with Turnkey Foundation and all Macro Sprints; $250 standalone).',
    deliverables: [
      'System onboarding and credential access validation',
      'Google Search Console and Bing Places pipeline integration',
      'Baseline pre-deployment telemetry environment initialisation'
    ],
  },

  // Advisory & Scoping Sessions
  'CL-INTAKE': {
    code: 'CL-INTAKE',
    name: 'Architecture & Discovery Kickoff',
    priceExGst: 220,
    handsOnEffort: '45 Mins (Fixed-Fee Live Call)',
    deliverySla: 'Within 3 Business Days of Booking',
    category: 'advisory',
    purpose: 'Live stakeholder scoping, entity fact alignment, and tech onboarding (fixed-fee session, distinct from standard $220/hr technical rate).',
    deliverables: [
      'Live scoping session recording and transcript',
      'Baseline entity fact intake document',
      'Technical access and staging environment confirmation'
    ],
  },
  'CL-REVIEW': {
    code: 'CL-REVIEW',
    name: 'Sprint Handover & Strategy Debrief',
    priceExGst: 285,
    handsOnEffort: '45 Mins (Fixed-Fee Live Call)',
    deliverySla: 'Within 2 Business Days of Completion',
    category: 'advisory',
    purpose: 'Screen-share walkthrough of schema validation, IndexNow responses, and next steps (fixed-fee session, distinct from standard $220/hr technical rate).',
    deliverables: [
      'Handover walkthrough screen-share recording',
      'Validated schema audit report',
      'IndexNow submission log and verification summary'
    ],
  },
  'CL-ADV': {
    code: 'CL-ADV',
    name: 'Monthly Advisory Call',
    priceExGst: 350,
    handsOnEffort: '60 Mins (Fixed-Fee Live Call)',
    deliverySla: 'Monthly Scheduled Cadence',
    category: 'advisory',
    purpose: 'High-level monthly entity health review, schema drift audit, and AI search visibility check (fixed-fee scheduled cadence).',
    deliverables: [
      'Monthly entity health scorecard',
      'Schema drift and citation parity audit log',
      'Strategic optimisation priorities and roadmap guidance'
    ],
  },

  // Foundation Implementation Packages
  'AEO-FOUNDATION-CORE': {
    code: 'AEO-FOUNDATION-CORE',
    name: 'AEO Foundation',
    priceExGst: 1980,
    handsOnEffort: '16–20 Hours',
    deliverySla: '90 Days (Staged Milestones)',
    category: 'foundation',
    purpose: 'Bridge strategic AI visibility into live production. Establish deterministic machine readability, high-density atomic answers, and connected entity graphs across up to 10 priority commercial pages to secure retrieval across AI Overviews, Perplexity, and conversational search engines.',
    deliverables: [
      'Pillar 1: Structured Data & Schema Graph Deployment: Custom nested JSON-LD schema injected into the DOM (Organisation, LocalBusiness, Service, PostalAddress, GeoCoordinates, FAQPage) with 0 syntax errors.',
      'Pillar 2: Atomic Answer Copywriting & Structuring: High-intent, answer-first content restructuring across up to 10 priority pages formatted into 90–120 token extraction passages with strict H1–H3 intent hierarchy.',
      'Pillar 3: Semantic Lattice Mapping: Structured internal entity links that connect your core services directly to proof assets, ensuring AI models accurately verify and cite your capabilities.',
      'Pillar 4: Citation Provenance & NAP Parity: Deployed canonical Brand Facts architecture with multi-platform audit and standardisation of Name, Address, and Phone (NAP) across GBP, Apple Maps, Bing Places, and primary Australian directories.',
      'Complimentary Technical Setup & Telemetry: Pre-sprint environment access verification, index ping baseline, and final telemetry verification audit ($250 value included at $0.00).'
    ],
  },
  'AEO-FOUNDATION': {
    code: 'AEO-FOUNDATION',
    name: 'AEO Foundation',
    priceExGst: 1980,
    handsOnEffort: '16–20 Hours',
    deliverySla: '90 Days (Staged Milestones)',
    category: 'foundation',
    purpose: 'Comprehensive 4-pillar turnkey implementation establishing machine-readable entity graph, atomic answer architecture, semantic lattice, and citation consistency.',
    deliverables: [
      'Turnkey deployment across up to 10 core commercial pages',
      'Pillar 1: Nested JSON-LD schema graph (Organisation, LocalBusiness, Service, FAQPage)',
      'Pillar 2: 90–120 token atomic answer copy rewrites across priority pages',
      'Pillar 3: Hub-and-spoke semantic lattice and contextual internal linking',
      'Pillar 4: Brand Facts architecture and primary directory citation parity',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },
  'AEO-FOUNDATION-DIRECT': {
    code: 'AEO-FOUNDATION-DIRECT',
    name: 'AEO Foundation (Direct)',
    priceExGst: 1980,
    handsOnEffort: '11.25 Hours',
    deliverySla: '90 Days (Staged Milestones)',
    category: 'foundation',
    purpose: 'Core 4-pillar modular implementation establishing entity graph, answer architecture, semantic lattice, and citation consistency across priority pages.',
    deliverables: [
      'Core modular deployment across up to 10 priority commercial pages',
      'Pillar 1: Nested JSON-LD schema implementation and validation',
      'Pillar 2: High-intent atomic content blocks and FAQ units',
      'Pillar 3: Semantic relationship mapping and internal link lattice',
      'Pillar 4: Brand Facts deployment and core NAP consistency audit',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },

  // Macro Sprints (Pillars 1–4)
  'SS1MACRO': {
    code: 'SS1MACRO',
    name: 'SS1: Brand Identity & Schema',
    priceExGst: 1980,
    handsOnEffort: '12 Hours (4x Sprints)',
    deliverySla: '10 Business Days',
    category: 'macro',
    purpose: 'Establish machine-readable identity, resolve entity confusion, and deploy rich schema graphs.',
    deliverables: [
      'Bundles 4x Micro Sprints (SS1MICRO1–SS1MICRO4)',
      'Location and Service Schema Injection with GeoCoordinates',
      'Canonical Business Facts consolidation and legalName mapping',
      'Complete JSON-LD validation, nesting repair, and syntax cleanup',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },
  'SS1MICRO1': {
    code: 'SS1MICRO1',
    name: 'Location Schema Injection',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Add complete location-level schema to one target page.',
    deliverables: [
      'LocalBusiness JSON-LD schema deployment',
      'GeoCoordinates, OpeningHoursSpecification, and ServiceArea definition',
      'ContactPoint verification and schema markup test validation'
    ],
  },
  'SS1MICRO2': {
    code: 'SS1MICRO2',
    name: 'Service Schema Injection',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Add structured Service schema to one primary service page.',
    deliverables: [
      'Service schema graph deployment',
      'ServiceType, AreaServed, Provider, and offers definition',
      'Parent organisation linkage and related service mapping'
    ],
  },
  'SS1MICRO3': {
    code: 'SS1MICRO3',
    name: 'Canonical Business Facts Consolidation',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Standardise business facts for AI engines and local directory profiles.',
    deliverables: [
      'Single-source-of-truth business facts dictionary',
      'Name, Address, Phone (NAP) standardisation across site assets',
      'Legal name, ABN, and founding details verification'
    ],
  },
  'SS1MICRO4': {
    code: 'SS1MICRO4',
    name: 'JSON-LD Validation and Repair',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Validate and repair broken or conflicting schema blocks across priority pages.',
    deliverables: [
      'JSON-LD syntax and hierarchy validation audit',
      'Correction of schema collision and circular references',
      'Removal of deprecated Schema.org fields and warning resolution'
    ],
  },

  'SS2MACRO': {
    code: 'SS2MACRO',
    name: 'SS2: Commercial Answer Architecture',
    priceExGst: 1980,
    handsOnEffort: '12 Hours (4x Sprints)',
    deliverySla: '10 Business Days',
    category: 'macro',
    purpose: 'Convert priority pages into retrieval-ready atomic content blocks for generative engines.',
    deliverables: [
      'Bundles 4x Micro Sprints (SS2MICRO1–SS2MICRO4)',
      'Answer-first atomic copy restructuring (90–120 token blocks)',
      'Conversational FAQ extraction and expansion with FAQPage schema',
      'Passage-level chunking and heading hierarchy optimisation',
      'Conversational query alignment and intent mapping',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },
  'SS2MICRO1': {
    code: 'SS2MICRO1',
    name: 'Single Page Atomic Rewrite',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Rewrite one critical page into retrieval-ready atomic answer blocks.',
    deliverables: [
      'Answer-first copy restructuring for direct AI passage extraction',
      'Problem-solution-outcome segmentation',
      'Optimised 90–120 token chunk formatting'
    ],
  },
  'SS2MICRO2': {
    code: 'SS2MICRO2',
    name: 'FAQ Extraction and Expansion',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Build AI-ready conversational FAQs for one priority service page.',
    deliverables: [
      '5 to 8 atomic conversational FAQ pairs',
      'Direct answer-first phrasing targeting real customer questions',
      'FAQPage Schema.org markup injection'
    ],
  },
  'SS2MICRO3': {
    code: 'SS2MICRO3',
    name: 'Passage-Level Structuring and Chunking',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Restructure one page into machine-friendly content chunks.',
    deliverables: [
      'Intent-aligned heading hierarchy restructuring (H1 -> H2 -> H3)',
      'Semantic density optimisation preventing context dilution',
      'Clear topical boundaries per passage'
    ],
  },
  'SS2MICRO4': {
    code: 'SS2MICRO4',
    name: 'Query Alignment and Intent Mapping',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Align one page with active conversational AI search queries.',
    deliverables: [
      'Conversational search intent mapping and user intent matrix',
      'Integration of high-frequency AI prompt patterns',
      'Direct answer placement in high-salience positions'
    ],
  },

  'SS3MACRO': {
    code: 'SS3MACRO',
    name: 'SS3: Semantic Lattice & Query Coverage',
    priceExGst: 1980,
    handsOnEffort: '12 Hours (4x Sprints)',
    deliverySla: '10 Business Days',
    category: 'macro',
    purpose: 'Build internal concept relationships, hub-and-spoke lattices, and cross-page structural meaning.',
    deliverables: [
      'Bundles 4x Micro Sprints (SS3MICRO1–SS3MICRO4)',
      'Three-node semantic lattice deployment connecting services to proof',
      'Descriptive entity anchor text optimisation across priority pages',
      'Concept cluster reinforcement and orphan page mitigation',
      'Long-tail conversational query coverage expansion',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },
  'SS3MICRO1': {
    code: 'SS3MICRO1',
    name: 'Three-Node Semantic Lattice Patch',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Build a concept lattice connecting one core service cluster.',
    deliverables: [
      'Three-node micro-lattice architecture',
      'Bidirectional contextual linking between service, concept, and evidence',
      'Descriptive entity anchor text implementation'
    ],
  },
  'SS3MICRO2': {
    code: 'SS3MICRO2',
    name: 'Anchor Optimisation for One Page',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Improve internal linking logic and anchor signalling for one key page.',
    deliverables: [
      'Audit of inbound and outbound anchors',
      'Rewrite generic anchors into descriptive topical entity links',
      'Contextual relationship mapping for crawler extraction'
    ],
  },
  'SS3MICRO3': {
    code: 'SS3MICRO3',
    name: 'Concept Cluster Reinforcement',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Strengthen semantic meaning across a small cluster of related pages.',
    deliverables: [
      'Cluster relevance mapping across 3 to 5 pages',
      'Cross-page anchor alignment and topical hierarchy reinforcement',
      'Elimination of internal link dead-ends'
    ],
  },
  'SS3MICRO4': {
    code: 'SS3MICRO4',
    name: 'Query Coverage & Intent Expansion',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Expand semantic lattice nodes to cover long-tail conversational query patterns.',
    deliverables: [
      'Intent-to-cluster query map',
      'Target semantic query injection list',
      'Answer retrieval coverage validation report'
    ],
  },

  'SS4MACRO': {
    code: 'SS4MACRO',
    name: 'SS4: Brand Facts & External Trust',
    priceExGst: 1980,
    handsOnEffort: '12 Hours (4x Sprints)',
    deliverySla: '10 Business Days',
    category: 'macro',
    purpose: 'Standardise cross-directory citations, build canonical brand facts, and eliminate external hallucination risks.',
    deliverables: [
      'Bundles 4x Micro Sprints (SS4MICRO1–SS4MICRO4)',
      'Hyper-local NAP consistency audit across primary directories',
      'Legacy directory citation cleanup and duplicate removal',
      'Canonical Brand Facts page deployment on client domain',
      'Bing Places entity claiming, verification, and synchronisation',
      'Complimentary Technical Onboarding & Setup ($250 value included)'
    ],
  },
  'SS4MICRO1': {
    code: 'SS4MICRO1',
    name: 'NAP Standardisation',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Correct Name, Address, and Phone inconsistencies across core directories.',
    deliverables: [
      'Hyper-local NAP audit across Google Business Profile, Apple Maps, Bing, and directories',
      'Cross-directory standardisation checklist',
      'Resolution of conflicting phone numbers, addresses, and naming variations'
    ],
  },
  'SS4MICRO2': {
    code: 'SS4MICRO2',
    name: 'Directory Citation Cleanup',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Clean up legacy citations in one major directory set.',
    deliverables: [
      'Directory account credentials and profile audit',
      'Correction of outdated business hours, URLs, and descriptions',
      'Removal or merge of duplicate directory entries'
    ],
  },
  'SS4MICRO3': {
    code: 'SS4MICRO3',
    name: 'Brand Facts Page Creation',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Deploy a canonical Brand Facts page on the client domain.',
    deliverables: [
      'Single source of truth Brand Facts page deployment',
      'Machine-readable atomic business facts block',
      'Entity graph reinforcement with direct verification provenance'
    ],
  },
  'SS4MICRO4': {
    code: 'SS4MICRO4',
    name: 'Bing Places & Secondary Engine Optimisation',
    priceExGst: 495,
    handsOnEffort: '3 Hours (Half-Day)',
    deliverySla: '3 Business Days',
    category: 'micro',
    purpose: 'Claim, verify, and synchronise entity data across Bing Places and secondary AI retrieval sources.',
    deliverables: [
      'Bing Places entity profile claiming and verification',
      'Structured business profile synchronisation with GBP baseline',
      'Schema/NAP cross-link audit and Copilot readiness check'
    ],
  },

  // Enterprise & Roadmap Offerings
  'ADV-LATTICE': {
    code: 'ADV-LATTICE',
    name: 'Advanced Semantic Lattice Architecture',
    priceExGst: 6359,
    handsOnEffort: '~30 Hours (Full Architecture)',
    deliverySla: '15–20 Business Days',
    category: 'enterprise',
    purpose: 'Enterprise-grade full-site concept graph and cross-page structural linking network.',
    deliverables: [
      'Full-site semantic lattice across multi-tier service categories',
      'Comprehensive entity anchor strategy and contextual taxonomy',
      'Multi-location relationship mapping and entity disambiguation',
      'Custom vector passage chunking architecture for complex enterprise domains'
    ],
  },
  'HO-ROADMAP': {
    code: 'HO-ROADMAP',
    name: 'Handover Roadmap & Strategic Transition',
    priceExGst: 155,
    handsOnEffort: '1 Hour',
    deliverySla: '3–5 Business Days',
    category: 'enterprise',
    purpose: 'Formalise quarterly handover roadmap, strategic transition, and ongoing retainer governance.',
    deliverables: [
      'Comprehensive 90-day handover roadmap report',
      'Governance transition scorecard with telemetry verification logs',
      'Quarter-ahead optimisation priorities and ongoing SLA options'
    ],
  },
  'HOURLY-DEV': {
    code: 'HOURLY-DEV',
    name: 'Hourly Technical Engineering',
    priceExGst: 220,
    handsOnEffort: '1 Hour',
    deliverySla: '1–3 Business Days',
    category: 'hourly',
    purpose: 'Dedicated out-of-scope technical engineering, custom script injection, database integrations, or bespoke development.',
    deliverables: [
      'Dedicated technical engineering execution',
      'Sprint execution log and time tracking record',
      'Direct code commits / pull request deployment',
      'Post-implementation technical verification'
    ],
  },
};

// ============================================================================
// 3. CORE COMMERCIAL PRICING TIERS (FOR UI & GRIDS)
// ============================================================================

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'blueprint',
    name: 'Strategic Blueprint',
    tagline: 'Diagnostic & Planning',
    priceDisplay: '$995 AUD',
    priceExGst: 995,
    sla: '5–7 Business Days',
    targetGoal: 'Find the data errors, missing business facts, and structured code issues preventing search engines and AI models from recommending your business.',
    deliverables: [
      'Search & AI Visibility Audit: Checks how Google, Apple Maps, and AI tools extract your business details.',
      'Code & Schema Review: Identifies broken structured data, incorrect tags, and indexing errors.',
      'Prioritised 90-Day Plan: An ordered checklist of required technical fixes and page updates.',
      '45-Minute Review Call: A direct walkthrough of findings and next steps with your team.'
    ],
    skuCodes: ['BPSTRAT'],
    popular: false,
    ctaText: 'Commission Strategic Blueprint',
    ctaHref: '/contact?tier=blueprint',
    badge: 'Standalone audit • 100% credited toward implementation within 60 days',
  },
  {
    id: 'foundation',
    name: 'AEO Foundation',
    tagline: 'Core Setup (Recommended)',
    priceDisplay: '$1,980 AUD / mo',
    priceExGst: 1980,
    sla: '90 days in staged milestones',
    targetGoal: 'Hands-on technical implementation to resolve code errors, rewrite key pages for direct-answer search, and align your business listings.',
    deliverables: [
      'Structured Data Installation: Valid schema markup added directly to your site or supplied as ready-to-paste code.',
      'Direct-Answer Content: Up to 10 priority service pages updated into clear, extractable answer blocks.',
      'Internal Page Linking: Connects core services to relevant proof points and case studies.',
      'Directory Alignment: Syncs name, address, phone number, and services across Google, Apple Maps, and Bing.'
    ],
    skuCodes: ['AEO-FOUNDATION-CORE', 'AEO-FOUNDATION'],
    popular: true,
    ctaText: 'Deploy AEO Foundation',
    ctaHref: '/contact?tier=foundation',
    badge: '90 day execution • Covers up to 10 core pages • Includes Strategic Blueprint & $250 onboarding setup',
  },
  {
    id: 'macro-sprints',
    name: 'AEO Sprints',
    tagline: 'Monthly Improvements',
    priceDisplay: '$1,980 AUD / mo',
    priceExGst: 1980,
    sla: '10 business days per sprint cycle',
    targetGoal: 'Focused monthly technical work blocks to clear site bottlenecks, expand service pages, and adapt to search updates.',
    deliverables: [
      'Monthly Work Focus: Dedicated execution across code fixes, content updates, or directory cleanup.',
      'Flexible 30-Day Cycles: Clear scope agreed upon each month with zero long-term commitments.',
      'Progress Verification: Verification checks on indexing health, search appearance, and data accuracy.',
      'Documentation & Handoff: Plain-English summary and review call for all completed updates.'
    ],
    skuCodes: ['SS1MACRO', 'SS2MACRO', 'SS3MACRO', 'SS4MACRO'],
    popular: false,
    ctaText: 'Explore AEO Sprints',
    ctaHref: '/solutions/aeo-sprint',
    badge: 'Monthly technical cycles • No lock-in contracts • Pause anytime',
  },
];

// ============================================================================
// 4. HELPER FUNCTIONS
// ============================================================================

/**
 * Format a numeric amount into a standardised Australian Dollar string.
 * Example: formatAudCurrency(1980) -> "$1,980 AUD ex. GST"
 */
export function formatAudCurrency(
  amount: number,
  options: { includeTaxSuffix?: boolean; roundToZero?: boolean } = {}
): string {
  const { includeTaxSuffix = true, roundToZero = true } = options;

  const formattedNumber = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: roundToZero ? 0 : 2,
    maximumFractionDigits: roundToZero ? 0 : 2,
  }).format(amount);

  if (!includeTaxSuffix) {
    return `${formattedNumber} AUD`;
  }

  return `${formattedNumber} AUD ex. GST`;
}

/**
 * Calculates net balance payable for an implementation package,
 * subtracting the $995 Blueprint fee if within the 60-day credit window.
 */
export function calculateNetBalance(
  basePrice: number,
  appliesBlueprintCredit: boolean
): number {
  if (!appliesBlueprintCredit) {
    return basePrice;
  }
  return Math.max(0, basePrice - GOVERNANCE_RULES.creditAmountExGst);
}

/**
 * Retrieves a SKU by its canonical code.
 */
export function getSkuByCode(code: string): SprintSKU | undefined {
  return TECHNICAL_SPRINT_CATALOG[code];
}

/**
 * Retrieves all SKUs matching a specific category.
 */
export function getSkusByCategory(category: SprintSKUCategory): SprintSKU[] {
  return Object.values(TECHNICAL_SPRINT_CATALOG).filter(
    (sku) => sku.category === category
  );
}

/**
 * Retrieves all Macro Sprints (SS1MACRO through SS4MACRO).
 */
export function getMacroSprints(): SprintSKU[] {
  return getSkusByCategory('macro');
}

/**
 * Retrieves all Micro Sprints ($495 half-day units), optionally filtered by pillar prefix.
 * Example: getMicroSprints('SS1') returns SS1MICRO1 through SS1MICRO4.
 */
export function getMicroSprints(pillarPrefix?: 'SS1' | 'SS2' | 'SS3' | 'SS4'): SprintSKU[] {
  const micros = getSkusByCategory('micro');
  if (!pillarPrefix) {
    return micros;
  }
  return micros.filter((sku) => sku.code.startsWith(pillarPrefix));
}
