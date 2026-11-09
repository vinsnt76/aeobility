/**
 * AEObility Master Solutions & Pricing Overview Schema.org Graph Builder
 * Path: src/lib/schema/solutions.ts
 * Dynamically generated from Single Source of Truth (SSOT) src/lib/pricing.ts
 * Locale: en-AU
 */

import {
  TECHNICAL_SPRINT_CATALOG,
  GOVERNANCE_RULES,
  formatAudCurrency,
} from '@/lib/pricing';

export interface FaqItem {
  question: string;
  answer: string;
}

export const getSolutionsSchemaGraph = (faqs?: FaqItem[]) => {
  const bpStrat = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationTurnkey = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const foundationDirect = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-DIRECT'];
  const macroSample = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];
  const microSample = TECHNICAL_SPRINT_CATALOG['SS1MICRO1'];

  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/solutions#webpage",
      "url": "https://aeobility.com.au/solutions",
      "name": "Transparent AEO Solutions, Sprints & Pricing | AEObility",
      "description": `Explore transparent pricing models for Australian businesses. Standalone ${formatAudCurrency(bpStrat.priceExGst)} Blueprint audit, fixed-scope micro-sprints from ${formatAudCurrency(microSample.priceExGst)}, macro sprints from ${formatAudCurrency(macroSample.priceExGst)}, and AEO Foundation from ${formatAudCurrency(foundationDirect.priceExGst)}.`,
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/solutions#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/solutions#catalog"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/solutions#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aeobility.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solutions",
          "item": "https://aeobility.com.au/solutions"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://aeobility.com.au/solutions#catalog",
      "name": "AEObility Master Service Solutions & Pricing Framework",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-blueprint",
          "name": bpStrat.name,
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
          "sku": bpStrat.code,
          "price": bpStrat.priceExGst,
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": bpStrat.priceExGst,
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false,
            "unitText": bpStrat.deliverySla
          },
          "availability": "https://schema.org/InStock",
          "category": "AEO Strategic Diagnostic",
          "description": `${bpStrat.purpose} Standalone digital presence audit and prioritised 90-day execution roadmap. 100% credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} calendar days.`,
          "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-foundation-direct",
          "name": foundationDirect.name,
          "url": "https://aeobility.com.au/solutions/aeo-sprint",
          "sku": foundationDirect.code,
          "price": foundationDirect.priceExGst,
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": foundationDirect.priceExGst,
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false,
            "unitText": foundationDirect.deliverySla
          },
          "availability": "https://schema.org/InStock",
          "category": "AEO Foundation",
          "description": `${foundationDirect.purpose} Includes complimentary Technical Onboarding ($250 value).`,
          "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-foundation",
          "name": foundationTurnkey.name,
          "url": "https://aeobility.com.au/solutions#solutions-foundation",
          "sku": foundationTurnkey.code,
          "price": foundationTurnkey.priceExGst,
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": foundationTurnkey.priceExGst,
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false,
            "unitText": foundationTurnkey.deliverySla
          },
          "availability": "https://schema.org/InStock",
          "category": "AEO Foundation",
          "description": `${foundationTurnkey.purpose} Turnkey 4-pillar execution across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core commercial pages. Includes complimentary Technical Onboarding ($250 value).`,
          "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-macro-sprints",
          "name": "AEO Technical Macro Sprints (4-Pillar Bundles)",
          "url": "https://aeobility.com.au/solutions/aeo-sprint",
          "sku": "SS1-SS4-MACRO",
          "price": macroSample.priceExGst,
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": macroSample.priceExGst,
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false,
            "unitText": macroSample.deliverySla
          },
          "availability": "https://schema.org/InStock",
          "category": "AEO Technical Macro-Sprint",
          "description": `Fixed-scope 10-day macro sprints (${formatAudCurrency(macroSample.priceExGst)} each) bundling 4 micro-sprints across Identity & Schema, Answer Architecture, Semantic Lattice, or Brand Facts & Trust. Includes complimentary Technical Onboarding ($250 value).`,
          "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions#offer-micro-sprints",
          "name": "AEO Technical Micro-Sprints",
          "url": "https://aeobility.com.au/solutions/aeo-sprint",
          "sku": "SS1-SS4-MICRO",
          "price": microSample.priceExGst,
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": microSample.priceExGst,
            "priceCurrency": "AUD",
            "valueAddedTaxIncluded": false,
            "unitText": microSample.deliverySla
          },
          "availability": "https://schema.org/InStock",
          "category": "AEO Technical Micro-Sprint",
          "description": `Modular half-day micro-sprints (${formatAudCurrency(microSample.priceExGst)} each) targeting a single agreed priority: schema injection, atomic page rewrites, internal link lattice, or citation standardisation.`,
          "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/solutions#faq-solutions",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
};
