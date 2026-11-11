/**
 * Strategic Blueprint Schema.org Modular Graph Builder
 * Path: src/lib/schema/aeoBlueprint.ts
 * Single Source of Truth (SSOT): Tri-Graph Architecture (Entity, Semantic Corridor, Evidence)
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

export const DEFAULT_BLUEPRINT_FAQS: FaqItem[] = [
  {
    question: "What is included in the Strategic Blueprint?",
    answer: "The Blueprint includes a website visibility assessment, structured-data review, visibility scorecard, prioritised 90-day action roadmap, and an audit of key service and content pages. You receive practical recommendations for technical gap analysis and entity optimisation."
  },
  {
    question: "How long does the Blueprint take to deliver?",
    answer: "Most Blueprints are completed within 5 business days once we have confirmed the required information and access. Larger or multi-location businesses may require a custom scope, which we will confirm before work begins."
  },
  {
    question: "Can I implement the Blueprint myself or give it to my developer?",
    answer: "Yes. Your Blueprint is designed to be actionable whether you implement the recommendations internally, with a developer or agency partner, or ask AEObility to execute implementation. It includes clear priorities and technical handover notes."
  },
  {
    question: "Does the Blueprint include implementation work?",
    answer: "No. The Blueprint is a standalone diagnostic audit and strategic roadmap. Technical implementation, structured-data deployment, content rewrites, citation updates, and ongoing support are scoped separately as Micro-Sprints or AEO Foundation."
  },
  {
    question: "How does the 100% fee credit work?",
    answer: "If you book AEO Foundation within 60 days of receiving your Blueprint, we apply the full $995 Blueprint fee to the Foundation work. The credit applies to AEO Foundation only, is applied to the agreed implementation fee and cannot be exchanged for cash."
  },
  {
    question: "Is the Blueprint suitable for agencies or multi-location businesses?",
    answer: "Yes. We can scope the Blueprint for agency partners, internal marketing teams, and multi-location businesses. Contact us before booking so we can confirm the scope and deliverables."
  },
  {
    question: "How much does AEO cost in Australia, and how does pricing vary for single-site vs. multi-entity deployments?",
    answer: "Fixed-scope AEO in Australia starts with our free AI Visibility Score and the $995 AUD ex. GST Strategic Blueprint (100% credited toward eligible implementation within 60 days). Single-site SMBs qualify for fixed-rate Micro-Sprints from $495 AUD ex. GST or AEO Foundation ($1,990 AUD ex. GST across up to 10 core commercial pages). Multi-entity organisations, franchise networks, and large e-commerce catalogues are scoped by application following your Blueprint audit."
  },
  {
    question: "How do I run an AEO pilot with a 90-day plan and clear success criteria?",
    answer: "The $995 AUD Strategic Blueprint is engineered specifically as the entry point for a 90-day AEO pilot. Days 1 to 5 establish your baseline visibility scorecard and lock in a prioritised 90-day execution roadmap. In Weeks 2 to 6, you can apply your 100% $995 fee credit toward AEO Foundation or targeted Micro-Sprints to deploy connected JSON-LD schema and self-contained answer passages. Weeks 7 to 12 measure pilot performance against clear success criteria: zero-error schema validation, verified AI crawler access, direct passage extraction on target buyer queries, and brand citation growth across ChatGPT Search, Perplexity, and Google AI Overviews."
  }
];

export const getAeoBlueprintSchemaGraph = (faqs?: FaqItem[]) => {
  const bpStrat = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const activeFaqs = faqs && faqs.length > 0 ? faqs : DEFAULT_BLUEPRINT_FAQS;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "founder": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "sameAs": [
          "https://www.linkedin.com/company/aeobility"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vince Baker",
        "jobTitle": "Founder & Principal AEO Specialist",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "url": "https://aeobility.com.au/vince-baker",
        "sameAs": [
          "https://www.linkedin.com/in/vince-baker/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://aeobility.com.au/#website",
        "url": "https://aeobility.com.au",
        "name": "AEObility",
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        }
      },
      {
        "@type": "CollectionPage",
        "@id": "https://aeobility.com.au/solutions#collection",
        "url": "https://aeobility.com.au/solutions",
        "name": "AEObility Solutions",
        "description": "Fixed-scope Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) services and sprint packages.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#webpage",
        "url": "https://aeobility.com.au/solutions/aeo-blueprint",
        "name": "Strategic Blueprint: $995 Technical Diagnostic & Roadmap | AEObility",
        "description": `Get a deep technical audit and an actionable 90-day strategic roadmap for ${formatAudCurrency(bpStrat.priceExGst)} ex. GST. 100% of your ${formatAudCurrency(bpStrat.priceExGst)} Blueprint fee is credited toward AEO Foundation within ${GOVERNANCE_RULES.creditWindowDays} days.`,
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/solutions#collection"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/solutions/aeo-blueprint#breadcrumb"
        },
        "about": [
          {
            "@id": "https://aeobility.com.au/#organization"
          },
          {
            "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product"
          }
        ],
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
            "item": "https://aeobility.com.au"
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
            "name": "AEO Blueprint",
            "item": "https://aeobility.com.au/solutions/aeo-blueprint"
          }
        ]
      },
      {
        "@type": ["Product", "Service"],
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#product",
        "name": "Strategic Blueprint",
        "sku": bpStrat.code,
        "image": "https://aeobility.com.au/images/solutions/aeo-blueprint-strategic-audit_AEObility.webp",
        "description": "Comprehensive digital presence audit, technical entity gap analysis, AI visibility scorecard, and 90-day action plan for Australian businesses.",
        "category": "AEO Strategic Diagnostic",
        "brand": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "provider": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "subjectOf": {
          "@type": "CreativeWork",
          "name": "AEObility 90-Day AEO Case Study",
          "url": "https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Delivery SLA",
            "value": "5 Business Days"
          },
          {
            "@type": "PropertyValue",
            "name": "Credit Terms",
            "value": "100% Credited Toward AEO Foundation"
          }
        ],
        "offers": {
          "@type": "Offer",
          "@id": "https://aeobility.com.au/solutions/aeo-blueprint#offer",
          "url": "https://aeobility.com.au/solutions/aeo-blueprint",
          "name": bpStrat.name,
          "sku": bpStrat.code,
          "price": String(bpStrat.priceExGst),
          "priceCurrency": "AUD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "description": `100% of the ${formatAudCurrency(bpStrat.priceExGst)} audit fee is credited toward eligible AEO Foundation implementation sprints within ${GOVERNANCE_RULES.creditWindowDays} days.`,
          "seller": {
            "@id": "https://aeobility.com.au/#organization"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/solutions/aeo-blueprint#faq",
        "mainEntity": activeFaqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };
};
