/**
 * AEObility Best AEO Strategies & Procedures Schema.org Graph Builder
 * Path: src/lib/schema/aeoProcedures.ts
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const getAeoProceduresSchemaGraph = (faqs?: FaqItem[]) => {
  const graphNodes: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/services/aeo/procedures#webpage",
      "url": "https://aeobility.com.au/services/aeo/procedures",
      "name": "Best AEO Strategies: How to Make Your Business AI-Readable | AEObility",
      "description": "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
      "inLanguage": "en-AU",
      "isPartOf": {
        "@id": "https://aeobility.com.au/#website"
      },
      "about": {
        "@id": "https://aeobility.com.au/#organization"
      },
      "breadcrumb": {
        "@id": "https://aeobility.com.au/services/aeo/procedures#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://aeobility.com.au/services/aeo/procedures#howto"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aeobility.com.au/services/aeo/procedures#breadcrumb",
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
          "name": "Services",
          "item": "https://aeobility.com.au/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AEO Services",
          "item": "https://aeobility.com.au/services/aeo"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "AEO Procedures",
          "item": "https://aeobility.com.au/services/aeo/procedures"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://aeobility.com.au/services/aeo/procedures#howto",
      "name": "Best AEO Strategies: How to Make Your Business AI-Readable",
      "description": "A technical step-by-step procedure for structuring website content, JSON-LD schema, and internal links so AI platforms can parse, chunk, and cite your business with high confidence.",
      "totalTime": "PT30M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Establish Semantic Boundaries with Question-Based Headings",
          "text": "Structure content using H2 and H3 headings phrased as natural-language questions to prevent context dilution during RAG chunking.",
          "url": "https://aeobility.com.au/services/aeo/procedures#strategy1"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Craft Self-Contained Atomic Answer Blocks",
          "text": "Write direct 40–60 word answer summaries directly beneath headings for passage-level extraction.",
          "url": "https://aeobility.com.au/services/aeo/procedures#strategy2"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Deploy Nested JSON-LD Schema Markup",
          "text": "Provide machine-readable entity context connecting Organisation, LocalBusiness, Service, and Offer nodes.",
          "url": "https://aeobility.com.au/services/aeo/procedures#strategy3"
        }
      ]
    }
  ];

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": "https://aeobility.com.au/services/aeo/procedures#faq-procedures",
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
