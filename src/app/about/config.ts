export interface RoleFaq {
  question: string;
  answer: string;
}

export interface RoleConfig {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    titlePart1: string;
    titleGradient: string;
    tagline: string;
    description: string;
  };
  faqs?: RoleFaq[];
}

export const roleConfigs: Record<string, RoleConfig> = {
  'freelance-seo-consultant-perth': {
    slug: 'freelance-seo-consultant-perth',
    metadata: {
      title: 'Freelance SEO & AEO Consultant Perth | Vince Baker | AEObility',
      description: 'Perth freelance SEO and AEO consultant delivering technical audits, JSON-LD schema, and local visibility. Fixed-scope $995 AEO Blueprint, zero lock-in.',
    },
    hero: {
      titlePart1: 'Freelance SEO ',
      titleGradient: 'Consultant Perth',
      tagline: 'Perth Freelance SEO & AEO Consultant',
      description: 'Direct Perth freelance SEO and Answer Engine Optimisation with founder Vince Baker. Deliverables include technical site audits, JSON-LD entity graphs, local Google Maps alignment, and answer-block architecture. Start with a fixed-scope $995 AEO Blueprint with zero ongoing agency lock-in.'
    },
    faqs: [
      {
        question: 'What does a Perth freelance SEO and AEO engagement include?',
        answer: 'Every engagement covers technical crawl and indexation fixes, Schema.org JSON-LD entity graphs, direct answer-block structuring, and Perth local Google Maps alignment so your business is cited across Google Search, AI Overviews, ChatGPT, and Perplexity.'
      },
      {
        question: 'How much does it cost to work with a freelance SEO consultant in Perth?',
        answer: 'Entry starts with the fixed-scope $995 AEO Blueprint, which includes a full technical diagnostic, entity gap map, and 90-day execution roadmap. There are zero ongoing agency retainers, and 100% of the Blueprint fee can be credited toward eligible implementation sprints.'
      },
      {
        question: 'Do you work directly on my site or outsource to junior staff?',
        answer: 'All diagnostics, schema engineering, and technical implementation are delivered directly by founder Vince Baker in Perth, Western Australia, with full ownership of every deliverable handed over to your team.'
      }
    ]
  },
  'freelance-google-ads-consultant-perth': {
    slug: 'freelance-google-ads-consultant-perth',
    metadata: {
      title: 'Freelance Google Ads Consultant Perth | Vince Baker',
      description: 'Freelance Google Ads consultant in Perth. Optimise shopping feeds, server-side conversion tracking, and PPC campaigns to maximise ROI for local WA brands.',
    },
    hero: {
      titlePart1: 'Freelance Google Ads ',
      titleGradient: 'Consultant Perth',
      tagline: 'Growth Marketing Specialist',
      description: 'Data-driven Google Ads frameworks. Maximising ROAS through precise intent targeting and conversion architecture.'
    }
  },
  'freelance-digital-specialist-perth': {
    slug: 'freelance-digital-specialist-perth',
    metadata: {
      title: 'Freelance Digital Specialist Perth | Vince Baker',
      description: 'Perth freelance digital specialist building robust web infrastructure, custom automations, and AEO search systems. Book a free consultation call today.',
    },
    hero: {
      titlePart1: 'Freelance Digital ',
      titleGradient: 'Specialist Perth',
      tagline: 'Systems & Automation Specialist',
      description: 'Full-stack digital architecture. Building integrated systems across marketing, sales, and operations.'
    }
  },
  'freelance-ai-consultant-perth': {
    slug: 'freelance-ai-consultant-perth',
    metadata: {
      title: 'Freelance AI Consultant Perth | Vince Baker',
      description: 'Freelance AI and automation consultant in Perth specialising in custom n8n workflows, API integrations, and LLM answer engine search optimisation strategy.',
    },
    hero: {
      titlePart1: 'Freelance AI ',
      titleGradient: 'Consultant Perth',
      tagline: 'AI & Automation Specialist',
      description: 'Implementing custom LLM workflows, conversational interfaces, and intelligent data pipelines.'
    }
  }
};
