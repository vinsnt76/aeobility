/**
 * Strategic Blueprint Schema.org Modular Graph Builder
 * Path: src/lib/schema/aeoBlueprint.ts
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

export const getAeoBlueprintSchemaGraph = (faqs?: FaqItem[]) => {
  const bpStrat = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];

  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#webpage",
      "url": "https://aeobility.com.au/solutions/aeo-blueprint",
      "name": "Strategic Blueprint: Deep Audit + 90-Day Roadmap",
      "description": `Get a deep technical audit and an actionable 90-day strategic roadmap for ${formatAudCurrency(bpStrat.priceExGst)} ex. GST. 100% of your ${formatAudCurrency(bpStrat.priceExGst)} Blueprint fee is credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} days.`,
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Strategic Blueprint",
          "item": "https://aeobility.com.au/solutions/aeo-blueprint"
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product",
      "name": "Strategic Blueprint",
      "image": "https://aeobility.com.au/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp",
      "description": `${bpStrat.purpose} Deliverables: ${bpStrat.deliverables.join('; ')}.`,
      "sku": bpStrat.code,
      "brand": {
        "@type": "Organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au"
      },
      "offers": {
        "@type": "Offer",
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#offer",
        "url": "https://aeobility.com.au/solutions/aeo-blueprint",
        "name": bpStrat.name,
        "sku": bpStrat.code,
        "price": bpStrat.priceExGst,
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": bpStrat.priceExGst,
          "priceCurrency": "AUD",
          "valueAddedTaxIncluded": false,
          "unitText": bpStrat.deliverySla
        },
        "category": "AEO Strategic Diagnostic",
        "description": `${bpStrat.purpose} Deliverables: ${bpStrat.deliverables.join('; ')}. 100% of the ${formatAudCurrency(bpStrat.priceExGst)} fee is credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} calendar days.`,
        "eligibleCustomerType": "Australian SMBs, Allied Health Clinics, and Home Service Trades",
        "seller": {
          "@id": "https://aeobility.com.au/#organization"
        }
      }
    },
    {
      "@type": "Service",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#service",
      "name": bpStrat.name,
      "alternateName": bpStrat.code,
      "description": `${bpStrat.purpose} Deliverables: ${bpStrat.deliverables.join('; ')}. 100% of the ${formatAudCurrency(bpStrat.priceExGst)} fee is credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} days.`,
      "provider": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Australian SMBs, Allied Health Clinics, and Home Service Trades"
      },
      "isRelatedTo": [
        {
          "@id": "https://aeobility.com.au/solutions/aeo-sprint#service"
        },
        {
          "@id": "https://aeobility.com.au/services/geo-marketing#service"
        },
        {
          "@id": "https://aeobility.com.au/services/aeo#service"
        }
      ],
      "offers": {
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#offer"
      }
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/solutions/aeo-blueprint#faq",
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
