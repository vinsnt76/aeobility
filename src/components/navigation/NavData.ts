// Auto-generated from AEObility -IA & SLM.csv - DO NOT EDIT DIRECTLY
export interface NavItemL2 {
  title: string;
  href: string;
  description?: string;
  entityName: string;
  isServicePillar?: boolean;
  isKnowledgeCapsule?: boolean;
  corridors?: Array<'phone' | 'scan' | 'blueprint' | 'contact'>;
}

export interface NavItemL1 {
  title: string;
  href?: string;
  children?: NavItemL2[];
}

export interface SubNavPillItem {
  title: string;
  url: string;
}

export const NAVIGATION_DATA: NavItemL1[] = [
  {
    "title": "Services",
    "href": "/services",
    "children": [
      {
        "title": "AEO & SEO",
        "href": "/services/aeo",
        "description": "Structure your business data for direct RAG passage retrieval. Expert AEO services built to capture conversational AI search queries.",
        "entityName": "Canonical AEO Hub",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "AI Search Marketing",
        "href": "/services/ai-search-marketing",
        "description": "Deploy optimisation strategies built for generative search engines (Gemini, Perplexity, ChatGPT). Elevate your brand citation index scores.",
        "entityName": "AI Search Marketing",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "Local Business GEO",
        "href": "/services/aeo/local-business",
        "description": "Ensure your local service business surfaces instantly in local map packs, AI assistants, and proximity engines. Built for Aussie trades and clinics.",
        "entityName": "AEO for Local Businesses",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      },
      {
        "title": "GEO Marketing",
        "href": "/services/geo-marketing",
        "description": "Optimise your brand for GEO Google search, Maps, and AI Overviews. Schema graph engineering for ChatGPT, Gemini, and Google local discovery.",
        "entityName": "GEO Google Marketing Services",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "phone",
          "scan",
          "contact"
        ]
      },
      {
        "title": "Ecommerce AEO",
        "href": "/services/aeo/shopify",
        "description": "Optimise your Shopify store for AI search, ChatGPT recommendations, and Google Merchant Center. Structured liquid refactoring and server-side rules.",
        "entityName": "AEO for Shopify",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AI Strategy",
        "href": "/services/aeo/procedures",
        "description": "Discover the best AEO strategies to make your business AI-readable. Actionable procedures for structured data, atomic answer blocks, entity authority, and RAG retrieval optimisation.",
        "entityName": "Best AEO Strategies",
        "isServicePillar": true,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "Packages",
    "href": "/solutions",
    "children": [
      {
        "title": "AEO Packages",
        "href": "/solutions",
        "description": "Discover transparent AEO solutions, fixed-scope strategic blueprints, and rapid schema implementation sprints for Australian SMBs with zero contract lock-in.",
        "entityName": "AEO Packages",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Strategic Blueprint",
        "href": "/solutions/aeo-blueprint",
        "description": "Get a complete 90-day AEO execution blueprint for $995 AUD. Full implementation cost offset if AEObility executes setup.",
        "entityName": "Strategic Blueprint",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      },
      {
        "title": "AEO Sprints",
        "href": "/solutions/aeo-sprint",
        "description": "Accelerate your machine discovery with intensive execution sprints: custom nesting graphs, code refactoring, and atomic block rewrites.",
        "entityName": "AEO Sprints",
        "isServicePillar": false,
        "isKnowledgeCapsule": false,
        "corridors": [
          "scan",
          "blueprint",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "Knowledge Hub",
    "href": "/knowledge-hub",
    "children": [
      {
        "title": "Articles",
        "href": "/knowledge-hub/articles",
        "description": "Read our latest articles on Answer Engine Optimisation (AEO), generative search, and semantic content structuring.",
        "entityName": "Articles Index",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Guides",
        "href": "/knowledge-hub/guides",
        "description": "Access industry-standard technical guides on Answer Engine Optimisation (AEO), vector search architecture, RAG dilution mitigation, and entity authority.",
        "entityName": "Guides",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Case Studies",
        "href": "/knowledge-hub/case-studies",
        "description": "Read our case studies to see how AEObility helps Australian businesses improve their AI search visibility, traffic, and leads through expert strategies.",
        "entityName": "Case Studies",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      },
      {
        "title": "Tutorials",
        "href": "/knowledge-hub/tutorials",
        "description": "Explore step-by-step technical tutorials on Answer Engine Optimisation (AEO), vector semantic density, and positional bias mitigation.",
        "entityName": "Technical Tutorials",
        "isServicePillar": false,
        "isKnowledgeCapsule": true,
        "corridors": [
          "scan",
          "contact"
        ]
      }
    ]
  },
  {
    "title": "About",
    "href": "/about"
  },
  {
    "title": "Contact",
    "href": "/contact"
  }
];

export const FOOTER_NAVIGATION: NavItemL2[] = [
  {
    "title": "Privacy Policy",
    "href": "/privacy",
    "description": "Read the AEObility privacy policy to understand how we securely collect, use, and protect your personal information across our digital platforms.",
    "entityName": "Privacy Policy",
    "isServicePillar": false,
    "isKnowledgeCapsule": false,
    "corridors": [
      "scan",
      "contact"
    ]
  },
  {
    "title": "Terms of Service",
    "href": "/terms",
    "description": "Review the terms of service for AEObility. Learn about our service agreements, AI search marketing terms, and standard client policies.",
    "entityName": "Terms of Service",
    "isServicePillar": false,
    "isKnowledgeCapsule": false,
    "corridors": [
      "scan",
      "contact"
    ]
  }
];

export const HUB_SUBNAV_MAPS: Record<string, SubNavPillItem[]> = {
  "aeo": [
    {
      "title": "AEO Hub",
      "url": "/services/aeo"
    },
    {
      "title": "What is AEO?",
      "url": "/services/aeo/definition"
    },
    {
      "title": "AEO vs SEO",
      "url": "/services/aeo/comparison"
    },
    {
      "title": "Best Strategies",
      "url": "/services/aeo/procedures"
    },
    {
      "title": "Constraints",
      "url": "/services/aeo/constraints"
    },
    {
      "title": "Costs & Timing",
      "url": "/services/aeo/costs-timing"
    },
    {
      "title": "Shopify AEO",
      "url": "/services/aeo/shopify"
    },
    {
      "title": "Local Business",
      "url": "/services/aeo/local-business"
    }
  ],
  "services": [
    {
      "title": "Services Hub",
      "url": "/services"
    },
    {
      "title": "AEO & SEO",
      "url": "/services/aeo"
    },
    {
      "title": "AI Search Marketing",
      "url": "/services/ai-search-marketing"
    },
    {
      "title": "Local Business GEO",
      "url": "/services/aeo/local-business"
    },
    {
      "title": "GEO Marketing",
      "url": "/services/geo-marketing"
    },
    {
      "title": "Ecommerce AEO",
      "url": "/services/aeo/shopify"
    },
    {
      "title": "AI Strategy",
      "url": "/services/aeo/procedures"
    }
  ],
  "knowledgeHub": [
    {
      "title": "Knowledge Hub",
      "url": "/knowledge-hub"
    },
    {
      "title": "AI SEO Tools",
      "url": "/knowledge-hub/ai-seo-tools"
    },
    {
      "title": "What is AEO?",
      "url": "/knowledge-hub/what-is-aeo"
    },
    {
      "title": "Articles",
      "url": "/knowledge-hub/articles"
    },
    {
      "title": "Guides",
      "url": "/knowledge-hub/guides"
    },
    {
      "title": "Case Studies",
      "url": "/knowledge-hub/case-studies"
    },
    {
      "title": "Tutorials",
      "url": "/knowledge-hub/tutorials"
    }
  ],
  "solutions": [
    {
      "title": "Packages Overview",
      "url": "/solutions"
    },
    {
      "title": "AEO Blueprint",
      "url": "/solutions/aeo-blueprint"
    },
    {
      "title": "AEO Sprints",
      "url": "/solutions/aeo-sprint"
    },
    {
      "title": "GEO Services",
      "url": "/services/geo-marketing"
    },
    {
      "title": "Visibility Scan",
      "url": "/diagnostic"
    }
  ]
};
