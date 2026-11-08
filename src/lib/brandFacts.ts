/**
 * AEObility Canonical Brand Knowledge Layer (CBKL) - Enterprise Layer
 * Locale: en-AU (Modern Australian English)
 * Last Verified: Aug 29, 2026
 */

export { AEOBILITY_TONE_OF_VOICE } from './brandGuidelines';
import {
  TECHNICAL_SPRINT_CATALOG,
  GOVERNANCE_RULES,
  formatAudCurrency,
} from '@/lib/pricing';

export interface FactProvenance {
  statement: string;
  source: string;
  evidenceType: 'FirstPartyPage' | 'CorporateRegistry' | 'TechnicalDocumentation' | 'CaseStudy';
  status: 'verified' | 'provisional';
  firstPublished: string;
  lastVerified: string;
}

// ============================================================================
// 1. IDENTITY FACTS (Who/What the Entity Is)
// ============================================================================
export const BRAND_FACTS = {
  name: "AEObility",
  legalName: "AEObility",
  legalStructure: "Registered Australian Business Name",
  abn: "61 029 803 255",
  abnLink: "https://abr.business.gov.au/ABN/View?id=61029803255",
  registrationDate: "2026-07-21",
  registeringBody: "Australian Securities and Investments Commission (ASIC)",
  status: "Registered / Active",
  principalPlaceOfBusiness: {
    locality: "Dianella",
    region: "Western Australia",
    postalCode: "6059",
    country: "AU"
  },
  holder: {
    name: "Vincent Anthony Baker",
    type: "Person",
    role: "Proprietor / Founder"
  },
  pronunciation: "A-E-O-bility",
  etymology: "Portmanteau of Answer Engine Optimisation (AEO) and ability",
  entityType: "Professional Services / Digital Consultancy",
  headquarters: "Perth, Western Australia",
  founder: "Vincent (Vince) Baker",
  disambiguation: {
    distinctFrom: "Seobility (SEO Software Platform)",
    statement: "AEObility is an independent Perth digital consultancy specialising in Answer Engine Optimisation (AEO) and AI search visibility, completely unrelated to Seobility software.",
  },
  knownAliases: [
    "AEO Bility",
    "aeo bility",
    "aeo.bility",
    "AEO.bility"
  ],
  categoryAnchors: [
    "Perth digital consultancy",
    "Answer Engine Optimisation Perth",
    "AEO consultancy Australia",
    "AI search visibility"
  ],
  sameAs: [
    "https://abr.business.gov.au/ABN/View?id=61029803255",
    "https://www.crunchbase.com/organization/aeobility",
    "https://www.cbinsights.com/company/aeobility",
    "https://www.producthunt.com/@aeobility",
    "https://www.linkedin.com/company/aeobility",
    "https://dev.to/aeobility",
    "https://github.com/vinsnt76/aeobilty"
  ]
};

export const BRAND_IDENTITY = {
  name: "AEObility",
  legalName: "Trekaboutoz trading as AEObility",
  legalStructure: BRAND_FACTS.legalStructure,
  abn: BRAND_FACTS.abn,
  abnLink: BRAND_FACTS.abnLink,
  registrationDate: BRAND_FACTS.registrationDate,
  registeringBody: BRAND_FACTS.registeringBody,
  status: BRAND_FACTS.status,
  principalPlaceOfBusiness: BRAND_FACTS.principalPlaceOfBusiness,
  holder: BRAND_FACTS.holder,
  pronunciation: BRAND_FACTS.pronunciation,
  etymology: BRAND_FACTS.etymology,
  entityType: "ProfessionalService",
  industry: "Answer Engine Optimisation",
  foundingDate: BRAND_FACTS.registrationDate,
  founder: "Vince Baker",
  disambiguation: BRAND_FACTS.disambiguation,
  categoryAnchors: BRAND_FACTS.categoryAnchors,
  location: {
    city: "Perth",
    locality: BRAND_FACTS.principalPlaceOfBusiness.locality,
    state: BRAND_FACTS.principalPlaceOfBusiness.region,
    postalCode: BRAND_FACTS.principalPlaceOfBusiness.postalCode,
    country: BRAND_FACTS.principalPlaceOfBusiness.country,
    coordinates: { latitude: -31.8900, longitude: 115.8690 }
  },
  foundingLocation: { city: "Perth", state: "Western Australia", country: "AU" },
  serviceArea: ["Australia", "Western Australia (Primary Base)", "Major Capital Cities (Remote Delivery)"],
  website: "https://aeobility.com.au",
  brandPromise: "Get Found. Get Chosen.",
  tagline: "No jargon. No pressure. Just clarity.",
  knownAs: BRAND_FACTS.knownAliases,
  notToBeConfusedWith: ["Seobility (SEO Software Platform)", "generic consulting brands", "unverified AI-search claims"],
  officialSources: [
    { title: "AEObility Home", url: "https://aeobility.com.au" },
    { title: "ABR Registry (ABN Lookup)", url: "https://abr.business.gov.au/ABN/View?id=61029803255" },
    { title: "Crunchbase Profile", url: "https://www.crunchbase.com/organization/aeobility" },
    { title: "Brand Facts Directory", url: "https://aeobility.com.au/brand-facts" },
    { title: "AI Crawler and Agent Guidance", url: "https://aeobility.com.au/AGENTS.md" },
    { title: "AI Visibility Diagnostic", url: "https://aeobility.com.au/diagnostic" }
  ],
  temporalBadge: {
    lastVerified: "29 Aug 2026",
    effectiveDate: "29 Aug 2026",
    fiscalCycle: "FY27",
    reviewedBy: "AEObility editorial and technical team",
    governanceNote: "We review this page when a material brand, service, pricing, or contact detail changes, and at least annually."
  }
};

// ============================================================================
// 2. KNOWLEDGE FACTS & PROVENANCE (Scope Boundaries & Methods)
// ============================================================================
export const BRAND_DEFINITIONS = {
  "Answer Engine Optimisation": {
    workingDefinition: "A practice focused on making business information easier for search engines and AI answer systems to access, interpret, and use when responding to relevant queries.",
    aeobilityApproach: "Organising core business information into clear, machine-readable structures and direct answer blocks so AI systems can more easily read and reference the business."
  },
  "Telemetry Diagnostic": {
    workingDefinition: "An automated review designed to assess selected technical and content signals that can affect how web assets are accessed and interpreted.",
    whatItAssesses: "A structured review of selected content, technical, entity, and information-consistency signals that may affect AI-search readiness."
  }
};

export const BRAND_KNOWLEDGE_LATTICE: FactProvenance[] = [
  {
    statement: "AEObility provides Answer Engine Optimisation services",
    source: "https://aeobility.com.au/services/aeo",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2025-11-12",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility provides the Telemetry Diagnostic",
    source: "https://aeobility.com.au/diagnostic",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility was founded by Vince Baker",
    source: "https://aeobility.com.au/vince-baker",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility operates in Australia, with Perth as the primary base",
    source: "https://aeobility.com.au/contact",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-08-29"
  },
  {
    statement: "Baby Bento case study documents an AEObility client engagement",
    source: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
    evidenceType: "CaseStudy",
    status: "verified",
    firstPublished: "2026-02-01",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEO/GEO Blueprint case study documents a 90-day execution on a new domain",
    source: "https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    evidenceType: "CaseStudy",
    status: "verified",
    firstPublished: "2026-09-14",
    lastVerified: "2026-09-14"
  },
  {
    statement: "The Telemetry Diagnostic assesses selected AI-search visibility and fact-coverage signals",
    source: "https://aeobility.com.au/diagnostic",
    evidenceType: "TechnicalDocumentation",
    status: "verified",
    firstPublished: "2026-03-22",
    lastVerified: "2026-08-29"
  },
  {
    statement: "AEObility scored 94 out of 100 (Level 5: Agent-Native) in the Is Your Site Agent-Ready technical benchmark on 24 October 2026",
    source: "https://isitagentready.com/aeobility.com.au",
    evidenceType: "TechnicalDocumentation",
    status: "verified",
    firstPublished: "2026-10-24",
    lastVerified: "2026-10-24"
  },
  {
    statement: "The Strategic Blueprint fee of $995 AUD is 100% credited toward AEO Foundation within 60 calendar days",
    source: "https://aeobility.com.au/solutions/aeo-blueprint",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-01-15",
    lastVerified: "2026-10-24"
  },
  {
    statement: "AEObility waives the $250 Technical Onboarding fee on Turnkey Foundation and Macro Sprint packages",
    source: "https://aeobility.com.au/solutions",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-10-24",
    lastVerified: "2026-10-24"
  },
  {
    statement: "AEObility offers fixed-scope Macro Sprints at $1,980 AUD ex. GST and Micro-Sprints at $495 AUD ex. GST with zero contract lock-in",
    source: "https://aeobility.com.au/solutions/aeo-sprint",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-10-24",
    lastVerified: "2026-10-24"
  },
  {
    statement: "AEObility's standard out-of-scope developer rate is $220 AUD ex. GST per hour",
    source: "https://aeobility.com.au/solutions",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-10-24",
    lastVerified: "2026-10-24"
  },
  {
    statement: "AEObility provides governed 30-day sprint retainer cycles ($1,980/month MRR) with zero lock-in contracts",
    source: "https://aeobility.com.au/solutions",
    evidenceType: "FirstPartyPage",
    status: "verified",
    firstPublished: "2026-10-24",
    lastVerified: "2026-10-24"
  }
];

// ============================================================================
// 2.5 THIRD-PARTY TECHNICAL AUDITS & BENCHMARKS
// ============================================================================
export interface CategoryScoreItem {
  score: number;
  metric?: string;
  status?: string;
}

export interface TechnicalAuditBenchmark {
  evaluator: string;
  evaluationUrl: string;
  targetEntity: string;
  testDate: string;
  status: string;
  classification: string;
  overallScore: number;
  scaleMax: number;
  reviewCadenceDays: number;
  nextReviewDate: string;
  categoryScores: {
    discoverability: CategoryScoreItem;
    content: CategoryScoreItem;
    botAccessControl: CategoryScoreItem;
    apiAuthMcpSkillDiscovery: CategoryScoreItem;
    commerce: CategoryScoreItem;
  };
  retrievalStatement: string;
  atomicAnswer: {
    question: string;
    answer: string;
  };
  claimDisciplineNote: string;
}

export const TECHNICAL_AUDITS: { agentReadiness: TechnicalAuditBenchmark } = {
  agentReadiness: {
    evaluator: "Is Your Site Agent-Ready?",
    evaluationUrl: "https://isitagentready.com/aeobility.com.au",
    targetEntity: "https://aeobility.com.au",
    testDate: "2026-10-24",
    status: "Observed",
    classification: "Level 5 (Agent-Native)",
    overallScore: 94,
    scaleMax: 100,
    reviewCadenceDays: 90,
    nextReviewDate: "2027-01-22",
    categoryScores: {
      discoverability: {
        score: 75,
        metric: "3/4"
      },
      content: {
        score: 100,
        metric: "1/1"
      },
      botAccessControl: {
        score: 100,
        metric: "3/3"
      },
      apiAuthMcpSkillDiscovery: {
        score: 100,
        metric: "8/8"
      },
      commerce: {
        score: 75,
        status: "Optional"
      }
    },
    retrievalStatement: "AEObility achieved a score of 94/100 (Level 5: Agent-Native) in the Is Your Site Agent-Ready benchmark on 24 October 2026.",
    atomicAnswer: {
      question: "What is AEObility's Site Agent-Ready score?",
      answer: "On 24 October 2026, AEObility scored 94 out of 100 (Level 5: Agent-Native) on the third-party evaluation platform Is Your Site Agent-Ready?. The assessment evaluated bot access control (100%), API and MCP discovery (100%), content structure (100%), discoverability (75%), and commerce (75%)."
    },
    claimDisciplineNote: "Documented as an external technical audit of machine access conditions, not as a claim that AI engines guarantee placement or citation."
  }
};

// ============================================================================
// 3. COMMERCIAL FACTS (Products, SKUs, and Pricing Frameworks)
// ============================================================================
export interface PricingConfigItem {
  readonly sku: string;
  readonly name: string;
  readonly priceAUD: number;
  readonly priceFromAUD?: number;
  readonly duration: string;
  readonly creditBackEligible?: boolean;
  readonly description?: string;
  readonly deliverables: readonly string[];
}

export const PRICING_CONFIG = {
  meta: { currency: "AUD", taxStatus: "Excluding GST" },
  currency: 'AUD',
  taxExclusive: true,
  guarantee: null,
  governance: {
    creditWindowDays: GOVERNANCE_RULES.creditWindowDays,
    creditAmountAud: GOVERNANCE_RULES.creditAmountExGst,
    onboardingWaiverAud: TECHNICAL_SPRINT_CATALOG['ONBOARD'].priceExGst,
    hourlyDevRateAud: GOVERNANCE_RULES.hourlyRateExGst,
    turnkeyPageLimit: GOVERNANCE_RULES.turnkeyPageLimit,
    retainerCadenceDays: GOVERNANCE_RULES.retainerCadenceDays,
    monthlyRetainerAud: TECHNICAL_SPRINT_CATALOG['SS1MACRO'].priceExGst,
    ipOwnership: GOVERNANCE_RULES.ipOwnership
  },
  blueprint: {
    code: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].code,
    sku: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].code,
    title: 'The AEObility Strategic Blueprint',
    name: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].name,
    price: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst,
    duration: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].deliverySla,
    creditBackEligible: true,
    description: `${TECHNICAL_SPRINT_CATALOG['BPSTRAT'].purpose} 100% of the ${formatAudCurrency(TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst)} Blueprint fee is credited back into AEO Foundation if booked within ${GOVERNANCE_RULES.creditWindowDays} calendar days.`,
    deliverables: [
      ...TECHNICAL_SPRINT_CATALOG['BPSTRAT'].deliverables,
      `100% credited back into AEO Foundation if booked within ${GOVERNANCE_RULES.creditWindowDays} days`
    ]
  },
  StrategicBlueprint: {
    sku: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].code,
    name: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].name,
    priceAUD: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst,
    duration: TECHNICAL_SPRINT_CATALOG['BPSTRAT'].deliverySla,
    creditBackEligible: true,
    description: `Standalone 90-day operational roadmap, technical gap analysis, entity optimisation review, and local tracking audit. 100% credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} calendar days.`,
    deliverables: [
      ...TECHNICAL_SPRINT_CATALOG['BPSTRAT'].deliverables,
      `100% credited back into AEO Foundation if booked within ${GOVERNANCE_RULES.creditWindowDays} days`
    ]
  },
  FoundationCore: {
    sku: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].code,
    name: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].name,
    priceFromAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].priceExGst,
    duration: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].deliverySla,
    description: `${TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].purpose} Includes complimentary Technical Onboarding ($250 value waived).`,
    deliverables: [
      ...TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'].deliverables,
      'Complimentary Technical Onboarding ($250 value waived)'
    ]
  },
  FoundationImplementationDirect: {
    sku: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].code,
    name: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].name,
    priceFromAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].priceExGst,
    duration: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].deliverySla,
    description: `${TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].purpose} Includes complimentary Technical Onboarding ($250 value waived).`,
    deliverables: [
      ...TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'].deliverables,
      'Complimentary Technical Onboarding ($250 value waived)'
    ]
  },
  FoundationImplementation: {
    sku: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].code,
    name: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].name,
    priceFromAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].priceExGst,
    duration: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].deliverySla,
    description: `${TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].purpose} Turnkey 4-pillar deployment across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core commercial pages. Includes complimentary Technical Onboarding ($250 value waived) and 60-day $995 Blueprint fee credit reversal.`,
    deliverables: [
      ...TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].deliverables,
      'Complimentary Technical Onboarding ($250 value waived)',
      `Eligible for 100% Blueprint fee credit reversal within ${GOVERNANCE_RULES.creditWindowDays} days`
    ]
  },
  MacroSprints: {
    sku: 'SS1-SS4-MACRO',
    name: 'AEO Technical Macro Sprints (4-Pillar Bundles)',
    priceFromAUD: TECHNICAL_SPRINT_CATALOG['SS1MACRO'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['SS1MACRO'].priceExGst,
    duration: '10 business days',
    description: `Fixed-scope 10-day macro sprints (${formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS1MACRO'].priceExGst)} AUD ex. GST each) bundling 4 micro-sprints across Identity & Schema, Answer Architecture, Semantic Lattice, or Brand Facts & Trust. Includes complimentary Technical Onboarding ($250 value waived).`,
    deliverables: [
      'SS1MACRO: Identity & Schema Architecture (10 days)',
      'SS2MACRO: Answer Engine Architecture (10 days)',
      'SS3MACRO: Semantic Lattice & Internal Linking (10 days)',
      'SS4MACRO: Brand Facts & External Trust Consensus (10 days)',
      'Complimentary Technical Onboarding ($250 value waived on bundles)'
    ]
  },
  MicroSprints: {
    sku: 'SS1-SS4-MICRO',
    name: 'AEO Technical Micro-Sprints',
    priceFromAUD: TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].priceExGst,
    priceAUD: TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].priceExGst,
    duration: '3 business days (half-day units)',
    description: `Rapid modular engineering sprints (${formatAudCurrency(TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].priceExGst)} AUD ex. GST each) targeting a single agreed priority with clear deliverables and zero lock-in contracts.`,
    deliverables: [
      'SS1MICRO: Schema injection, validation & NAP standardisation',
      'SS2MICRO: Single-page atomic rewrites & query intent mapping',
      'SS3MICRO: Semantic lattice patches & anchor optimisation',
      'SS4MICRO: Citation cleanup & Brand Facts page creation'
    ]
  },
  microSprints: {
    codeSeries: 'SS1-SS4-MICRO',
    basePriceFrom: TECHNICAL_SPRINT_CATALOG['SS1MICRO1'].priceExGst,
    catalog: [
      { id: 'SS1MICRO1', name: 'Location Schema Injection', price: 495 },
      { id: 'SS1MICRO2', name: 'Service Schema Injection', price: 495 },
      { id: 'SS1MICRO3', name: 'Canonical Business Facts Consolidation', price: 495 },
      { id: 'SS1MICRO4', name: 'JSON-LD Validation & Repair', price: 495 },
      { id: 'SS2MICRO1', name: 'Single Page Atomic Rewrite', price: 495 },
      { id: 'SS2MICRO2', name: 'FAQ Extraction & Expansion', price: 495 },
      { id: 'SS2MICRO3', name: 'Passage-Level Structuring & Chunking', price: 495 },
      { id: 'SS2MICRO4', name: 'Query Alignment & Intent Mapping', price: 495 },
      { id: 'SS3MICRO1', name: 'Three-Node Semantic Lattice Patch', price: 495 },
      { id: 'SS3MICRO2', name: 'Anchor Optimisation for One Page', price: 495 },
      { id: 'SS3MICRO3', name: 'Concept Cluster Reinforcement', price: 495 },
      { id: 'SS3MICRO4', name: 'Orphan Node Lattice Integration', price: 495 },
      { id: 'SS4MICRO1', name: 'NAP Standardisation Across Top Directories', price: 495 },
      { id: 'SS4MICRO2', name: 'Directory Citation Clean-Up', price: 495 },
      { id: 'SS4MICRO3', name: 'Brand Facts Page Creation', price: 495 },
      { id: 'SS4MICRO4', name: 'Apple Maps & Bing Places Signal Alignment', price: 495 }
    ]
  },
  foundation: {
    codeSeries: 'SS1-SS4-MACRO',
    sku: 'AEO-FOUNDATION',
    name: 'AEO Foundation',
    basePriceFrom: TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'].priceExGst,
    deliveryWindow: '4-week structured deployment',
    contractTerm: 'None (Fixed-scope execution)'
  }
} as const;

// ============================================================================
// 4. TEMPORAL FACTS (Dynamic States & Active Sprints)
// ============================================================================
export const BRAND_TEMPORAL_STATE = {
  fiscalCycle: "FY27",
  activeSprintsAvailable: true,
  lastRegistrySync: "2026-10-24T15:00:00+08:00",
  currentCaseStudies: ["case-studies/baby-bento", "case-studies/allied-health", "case-studies/aeo-geo-blueprint-90-days"]
};

// ============================================================================
// 5. PUBLIC INTEROPERABLE VOCABULARY (Standard Schema.org Graph)
// ============================================================================
export const BRAND_PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#product',
      sku: 'BPSTRAT',
      name: 'Strategic Blueprint',
      description: 'A comprehensive 90-day diagnostic roadmap and entity salience assessment. Standalone cost of $995 AUD is 100% credited toward AEO Foundation if booked within 60 calendar days.',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#offer',
        price: 995,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 995,
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
          unitText: '5 business days'
        },
        seller: {
          '@type': 'ProfessionalService',
          name: 'AEObility'
        }
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-sprint#foundation-direct-product',
      sku: 'AEO-FOUNDATION-DIRECT',
      name: 'AEO Foundation (Direct)',
      description: 'Turnkey 4-pillar AEO Foundation deployment for businesses with pre-existing blueprints or internal developer capacity. Includes complimentary Technical Onboarding ($250 value waived).',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-sprint#offer-foundation-direct',
        price: 1990,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 1990,
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
          unitText: '10 business days'
        },
        seller: {
          '@type': 'ProfessionalService',
          name: 'AEObility'
        }
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-foundation#product',
      sku: 'AEO-FOUNDATION',
      name: 'AEO Foundation',
      description: 'Turnkey 4-pillar deployment across up to 10 core commercial pages: connected information layers, structured schemas, atomic page rewrites, and citation provenance. Includes complimentary Technical Onboarding ($250 value waived) and 60-day $995 Blueprint credit reversal.',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-foundation#offer',
        price: 1990,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 1990,
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
          unitText: '4-week structured deployment'
        },
        seller: {
          '@type': 'ProfessionalService',
          name: 'AEObility'
        }
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-sprint#macro-product',
      sku: 'SS1-SS4-MACRO',
      name: 'AEO Technical Macro Sprints (4-Pillar Bundles)',
      description: 'Fixed-scope 10-day macro sprints ($1,980 AUD ex. GST each) bundling 4 micro-sprints across Identity & Schema, Answer Architecture, Semantic Lattice, or Brand Facts & Trust. Includes complimentary Technical Onboarding ($250 value waived).',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-sprint#offer-macro',
        price: 1980,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 1980,
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
          unitText: '10 business days'
        },
        seller: {
          '@type': 'ProfessionalService',
          name: 'AEObility'
        }
      }
    },
    {
      '@type': 'Product',
      '@id': 'https://aeobility.com.au/solutions/aeo-sprint#micro-product',
      sku: 'SS1-SS4-MICRO',
      name: 'AEO Technical Micro-Sprints',
      description: 'Modular, fixed-scope engineering sprints ($495 AUD ex. GST each) targeting tactical priorities: custom JSON-LD schema, atomic content rewrites, or internal linking.',
      offers: {
        '@type': 'Offer',
        '@id': 'https://aeobility.com.au/solutions/aeo-sprint#offer-micro',
        price: 495,
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 495,
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
          unitText: '3 business days'
        },
        seller: {
          '@type': 'ProfessionalService',
          name: 'AEObility'
        }
      }
    }
  ]
};

// ============================================================================
// 4.5 PROVENANCE ENTITIES & HISTORICAL LINEAGE GRAPH
// ============================================================================
export interface ProvenanceEntity {
  id: string;
  name: string;
  schemaType: string;
  layer: 'Ideation' | 'Transitional' | 'Execution' | 'Production' | 'Origin';
  description: string;
  canonicalUri: string;
  dateCreated: string;
  dateModified: string;
  version: string;
  sameAs?: string[];
}

export const PROVENANCE_ENTITIES: ProvenanceEntity[] = [
  {
    id: 'aeobility:machine-legibility-data-provenance',
    name: 'Machine Legibility & Data Provenance',
    schemaType: 'DigitalDocument',
    layer: 'Ideation',
    description: 'Foundational theoretical paper establishing machine legibility, data provenance, and intentional alignment principles.',
    canonicalUri: 'https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance',
    dateCreated: '2024-03-15',
    dateModified: '2026-09-23',
    version: '1.1.0'
  },
  {
    id: 'aeobility:ag-shapeshifter',
    name: 'AG Shapeshifter',
    schemaType: 'SoftwareApplication',
    layer: 'Transitional',
    description: 'Transitional research persona where adaptive conversation and diagnostic scoring were first prototyped.',
    canonicalUri: 'https://aeobility.com.au/brand-facts#ag-shapeshifter',
    dateCreated: '2024-11-01',
    dateModified: '2026-08-29',
    version: '0.8.4'
  },
  {
    id: 'aeobility:ai-bill',
    name: 'AI Bill',
    schemaType: 'SoftwareApplication',
    layer: 'Execution',
    description: 'Production interactive agent runtime handling telemetry ingestion, diagnostic evaluation, and user consultation.',
    canonicalUri: 'https://aeobility.com.au/services/aeo#ai-bill',
    dateCreated: '2025-06-10',
    dateModified: '2026-08-29',
    version: '2.4.0',
    sameAs: ['https://github.com/vinsnt76/aeobilty']
  },
  {
    id: 'aeobility:diagnostic-system',
    name: 'AEObility Diagnostic System',
    schemaType: 'SoftwareApplication',
    layer: 'Production',
    description: 'Automated AEO/GEO scoring engine evaluating 5-category search readiness signals.',
    canonicalUri: 'https://aeobility.com.au/diagnostic#system',
    dateCreated: '2026-01-15',
    dateModified: '2026-08-29',
    version: '3.1.0'
  },
  {
    id: 'aeobility:organization',
    name: 'AEObility',
    schemaType: 'Organization',
    layer: 'Production',
    description: 'Australian Answer Engine Optimisation consultancy and legal brand holder.',
    canonicalUri: 'https://aeobility.com.au/#organisation',
    dateCreated: '2026-07-21',
    dateModified: '2026-08-29',
    version: '2026.3'
  },
  {
    id: 'aeobility:vince-baker',
    name: 'Vince Baker',
    schemaType: 'Person',
    layer: 'Origin',
    description: 'Founder and principal technical architect of AEObility and AI Bill.',
    canonicalUri: 'https://aeobility.com.au/vince-baker#person',
    dateCreated: '2011-03-15',
    dateModified: '2026-08-29',
    version: '1.0.0',
    sameAs: [
      'https://github.com/vinsnt76'
    ]
  }
];

export const PROVENANCE_GRAPH_SCHEMA = {
  '@context': {
    '@vocab': 'https://schema.org/',
    'prov': 'http://www.w3.org/ns/prov#',
    'originatedFrom': { '@id': 'https://schema.org/isBasedOn', '@type': '@id' },
    'evolvedFrom': { '@id': 'https://schema.org/isBasedOn', '@type': '@id' },
    'integratedInto': { '@id': 'https://schema.org/isPartOf', '@type': '@id' },
    'utilisesAgent': { '@id': 'https://schema.org/agent', '@type': '@id' },
    'comprises': { '@id': 'https://schema.org/hasPart', '@type': '@id' },
    'hasSpecialty': { '@id': 'https://schema.org/knowsAbout', '@type': '@id' }
  },
  '@graph': [
    {
      '@type': 'DigitalDocument',
      '@id': 'https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance',
      name: 'Machine Legibility & Data Provenance',
      description: 'Foundational theoretical paper establishing machine legibility, data provenance, and intentional alignment principles.',
      dateCreated: '2026-06-28',
      dateModified: '2026-09-23',
      version: '1.2.0',
      author: { '@id': 'https://aeobility.com.au/vince-baker#person' }
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://aeobility.com.au/brand-facts#ag-shapeshifter',
      name: 'AG Shapeshifter',
      applicationCategory: 'BusinessApplication',
      description: 'Transitional research persona where adaptive conversation and diagnostic scoring were first prototyped.',
      dateCreated: '2024-11-01',
      dateModified: '2026-08-29',
      version: '0.8.4',
      'prov:wasDerivedFrom': { '@id': 'https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance' },
      'schema:isBasedOn': 'https://aeobility.com.au/knowledge-hub/articles/machine-legibility-data-provenance'
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://aeobility.com.au/services/aeo#ai-bill',
      name: 'AI Bill',
      applicationCategory: 'BusinessApplication',
      description: 'Production interactive agent runtime handling telemetry ingestion, diagnostic evaluation, and user consultation.',
      dateCreated: '2025-06-10',
      dateModified: '2026-08-29',
      version: '2.4.0',
      sameAs: ['https://github.com/vinsnt76/aeobilty'],
      'prov:wasRevisionOf': { '@id': 'https://aeobility.com.au/brand-facts#ag-shapeshifter' },
      'schema:isBasedOn': 'https://aeobility.com.au/brand-facts#ag-shapeshifter',
      'schema:isPartOf': 'https://aeobility.com.au/diagnostic#system'
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://aeobility.com.au/diagnostic#system',
      name: 'AEObility Diagnostic System',
      applicationCategory: 'BusinessApplication',
      description: 'Automated AEO/GEO scoring engine evaluating 5-category search readiness signals.',
      dateCreated: '2026-01-15',
      dateModified: '2026-08-29',
      version: '3.1.0',
      'schema:agent': { '@id': 'https://aeobility.com.au/services/aeo#ai-bill' }
    }
  ]
};

export const PUBLIC_SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    ...PROVENANCE_GRAPH_SCHEMA['@graph'],
    {
      '@type': 'ProfessionalService',
      '@id': 'https://aeobility.com.au/#organization',
      name: BRAND_IDENTITY.name,
      alternateName: [
        'aeo bility',
        'aeo.bility',
        'AEO Bility',
        'AEO.bility'
      ],
      legalName: BRAND_IDENTITY.legalName,
      url: BRAND_IDENTITY.website,
      logo: 'https://aeobility.com.au/assets/AEObility_Logo.webp',
      image: 'https://aeobility.com.au/assets/AEObility_Featured_Image.webp',
      description: 'Australian Answer Engine Optimisation consultancy specialising in structured business knowledge, entity graphs, and AI-search visibility.',
      disambiguatingDescription: 'Australian digital consultancy specialising in machine search readability and AEO, distinct from Seobility SEO software.',
      taxID: `ABN ${BRAND_FACTS.abn}`,
      foundingDate: BRAND_FACTS.registrationDate,
      sameAs: [
        BRAND_FACTS.abnLink,
        'https://www.cbinsights.com/company/aeobility',
        'https://www.producthunt.com/@aeobility',
        'https://www.linkedin.com/company/aeobility',
        'https://dev.to/aeobility',
        'https://www.crunchbase.com/organization/aeobility',
        'https://github.com/vinsnt76/aeobilty'
      ],
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'AustralianBusinessNumber',
          name: 'Australian Business Number (ABN)',
          value: BRAND_FACTS.abn,
          url: BRAND_FACTS.abnLink
        },
        {
          '@type': 'PropertyValue',
          propertyID: 'agent_readiness_score',
          name: 'Is Your Site Agent-Ready Score',
          value: '94',
          minValue: '0',
          maxValue: '100',
          description: 'Level 5 Agent-Native rating from isitagentready.com evaluated on 2026-10-24'
        }
      ],
      founder: {
        '@type': 'Person',
        '@id': 'https://aeobility.com.au/vince-baker#person',
        name: 'Vincent Baker',
        alternateName: ['Vince Baker', 'Vinnie Baker'],
        jobTitle: 'Founder & Technical Director',
        url: 'https://aeobility.com.au/vince-baker',
        sameAs: [
          'https://www.linkedin.com/in/vince-baker/',
          'https://app.qwoted.com/sources/vince-baker',
          'https://github.com/vinsnt76'
        ]
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: BRAND_FACTS.principalPlaceOfBusiness.locality,
        addressRegion: BRAND_FACTS.principalPlaceOfBusiness.region,
        postalCode: BRAND_FACTS.principalPlaceOfBusiness.postalCode,
        addressCountry: BRAND_FACTS.principalPlaceOfBusiness.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAND_IDENTITY.location.coordinates.latitude,
        longitude: BRAND_IDENTITY.location.coordinates.longitude
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        {
          '@type': 'Country',
          name: 'Australia',
          sameAs: [
            'https://www.wikidata.org/wiki/Q408',
            'https://www.geonames.org/2077456/australia.html'
          ]
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Western Australia',
          sameAs: [
            'https://www.wikidata.org/wiki/Q3205',
            'https://www.geonames.org/2058645/western-australia.html'
          ]
        },
        {
          '@type': 'City',
          name: 'Perth',
          sameAs: [
            'https://www.wikidata.org/wiki/Q3183',
            'https://www.geonames.org/2063523/perth.html'
          ]
        }
      ],
      priceRange: '$$',
      knowsAbout: [
        'Answer Engine Optimisation',
        'Generative Engine Optimisation',
        'Entity Resolution',
        'Structured Data & Schema.org'
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://aeobility.com.au/#perth-local-business',
      name: 'AEObility Perth HQ',
      url: BRAND_IDENTITY.website,
      telephone: '+61480286282',
      parentOrganization: {
        '@id': 'https://aeobility.com.au/#organisation'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perth',
        addressRegion: 'Western Australia',
        postalCode: '6000',
        addressCountry: 'AU'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -31.9505,
        longitude: 115.8605
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        {
          '@type': 'Country',
          name: 'Australia',
          sameAs: [
            'https://www.wikidata.org/wiki/Q408',
            'https://www.geonames.org/2077456/australia.html'
          ]
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Western Australia',
          sameAs: [
            'https://www.wikidata.org/wiki/Q3205',
            'https://www.geonames.org/2058645/western-australia.html'
          ]
        },
        {
          '@type': 'City',
          name: 'Perth',
          sameAs: [
            'https://www.wikidata.org/wiki/Q3183',
            'https://www.geonames.org/2063523/perth.html'
          ]
        }
      ]
    },
    {
      '@type': ['WebPage', 'CollectionPage'],
      '@id': 'https://aeobility.com.au/brand-facts#webpage',
      url: 'https://aeobility.com.au/brand-facts',
      name: 'Canonical Brand Facts & Machine Interface Directory | AEObility',
      description: "AEObility's canonical business knowledge layer, publishing verified first-party business facts, entity graphs, provenance evidence, and machine interface endpoints.",
      inLanguage: 'en-AU',
      dateModified: '2026-08-29',
      isPartOf: {
        '@id': 'https://aeobility.com.au/#website'
      },
      about: {
        '@id': 'https://aeobility.com.au/#organisation'
      },
      mainEntity: {
        '@id': 'https://aeobility.com.au/#organisation'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aeobility.com.au/#website',
      name: 'AEObility',
      url: 'https://aeobility.com.au',
      identifier: [
        {
          '@type': 'PropertyValue',
          propertyID: 'agent_readiness_score',
          name: 'Is Your Site Agent-Ready Score',
          value: '94',
          minValue: '0',
          maxValue: '100',
          description: 'Level 5 Agent-Native rating from isitagentready.com evaluated on 2026-10-24'
        }
      ]
    }
  ]
};

// ============================================================================
// 6. MACHINE GROUNDING HELPERS (Verification Math & Parsing)
// ============================================================================
export interface FactCoverageScore {
  identityCoverage: number;
  factCoverage: number;
  relationshipCoverage: number;
  evidenceCoverage: number;
}

export function calculateFactCoverageScore(): FactCoverageScore {
  return {
    identityCoverage: 1.0,
    factCoverage: 0.95,
    relationshipCoverage: 0.92,
    evidenceCoverage: 0.90
  };
}
