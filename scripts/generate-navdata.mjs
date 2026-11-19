import fs from 'fs';
import path from 'path';
import parse from 'csv-simple-parser';

function toAustralianEnglish(text) {
  if (!text) return text;
  return text
    .replace(/\bOptimization\b/g, 'Optimisation')
    .replace(/\boptimization\b/g, 'optimisation')
    .replace(/\bOptimizations\b/g, 'Optimisations')
    .replace(/\boptimizations\b/g, 'optimisations')
    .replace(/\bOptimize\b/g, 'Optimise')
    .replace(/\boptimize\b/g, 'optimise')
    .replace(/\bOptimized\b/g, 'Optimised')
    .replace(/\boptimized\b/g, 'optimised')
    .replace(/\bOptimizing\b/g, 'Optimising')
    .replace(/\boptimizing\b/g, 'optimising')
    .replace(/\bSpecialized\b/g, 'Specialised')
    .replace(/\bspecialized\b/g, 'specialised')
    .replace(/\bSpecializing\b/g, 'Specialising')
    .replace(/\bspecializing\b/g, 'specialising')
    .replace(/\bSpecialize\b/g, 'Specialise')
    .replace(/\bspecialize\b/g, 'specialise')
    .replace(/\bAnalyze\b/g, 'Analyse')
    .replace(/\banalyze\b/g, 'analyse')
    .replace(/\bAnalyzed\b/g, 'Analysed')
    .replace(/\banalyzed\b/g, 'analysed')
    .replace(/\bAnalyzing\b/g, 'Analysing')
    .replace(/\banalyzing\b/g, 'analysing')
    .replace(/\bPrioritize\b/g, 'Prioritise')
    .replace(/\bprioritize\b/g, 'prioritise')
    .replace(/\bPrioritized\b/g, 'Prioritised')
    .replace(/\bprioritized\b/g, 'prioritised')
    .replace(/\bOrganize\b/g, 'Organise')
    .replace(/\borganize\b/g, 'organise')
    .replace(/(?<!@type":\s*"|Schema.org\s*)\bOrganization\b/g, 'Organisation')
    .replace(/\borganization\b/g, 'organisation')
    .replace(/\bCustomization\b/g, 'Customisation')
    .replace(/\bcustomization\b/g, 'customisation')
    .replace(/\bCustomize\b/g, 'Customise')
    .replace(/\bcustomize\b/g, 'customise')
    .replace(/\bBehavior\b/g, 'Behaviour')
    .replace(/\bbehavior\b/g, 'behaviour')
    .replace(/\bColor\b/g, 'Colour')
    .replace(/\bcolor\b/g, 'colour');
}

export function generateNavData() {
  console.log('⚡ Compiling AEObility NavData.ts from IA & SLM architecture...');

  const csvPath = path.join(process.cwd(), 'AEObility -IA & SLM.csv');
  const targetPath = path.join(process.cwd(), 'src', 'components', 'navigation', 'NavData.ts');

  if (!fs.existsSync(csvPath)) {
    console.error(`❌ Cannot find IA dataset at: ${csvPath}`);
    return;
  }

  const csvRaw = fs.readFileSync(csvPath, 'utf8');
  const rows = parse(csvRaw, { header: true });

  // Custom Hub Ordering
  const hubOrder = ['/services', '/solutions', '/knowledge-hub', '/about', '/contact'];

  const hubs = {
    '/services': {
      title: 'Services',
      href: '/services',
      children: []
    },
    '/solutions': {
      title: 'Packages',
      href: '/solutions',
      children: []
    },
    '/knowledge-hub': {
      title: 'Knowledge Hub',
      href: '/knowledge-hub',
      children: []
    },
    '/about': {
      title: 'About',
      href: '/about'
    },
    '/contact': {
      title: 'Contact',
      href: '/contact'
    }
  };

  const footerLinks = [];

  const SERVICE_PILLAR_URLS = [
    '/services/aeo',
    '/services/ai-search-marketing',
    '/services/aeo/local-business',
    '/services/geo-marketing',
    '/services/aeo/shopify',
    '/services/aeo/procedures'
  ];

  const PILLAR_TITLE_OVERRIDES = {
    '/services/aeo': 'AEO & SEO',
    '/services/ai-search-marketing': 'AI Search Marketing',
    '/services/aeo/local-business': 'Local Business GEO',
    '/services/geo-marketing': 'GEO Marketing',
    '/services/aeo/shopify': 'Ecommerce AEO',
    '/services/aeo/procedures': 'AI Strategy'
  };

  const KNOWLEDGE_CAPSULE_URLS = [
    '/knowledge-hub/articles',
    '/knowledge-hub/guides',
    '/knowledge-hub/case-studies',
    '/knowledge-hub/tutorials'
  ];

  const KNOWLEDGE_CAPSULE_TITLE_OVERRIDES = {
    '/knowledge-hub/articles': 'Articles',
    '/knowledge-hub/guides': 'Guides',
    '/knowledge-hub/case-studies': 'Case Studies',
    '/knowledge-hub/tutorials': 'Tutorials'
  };

  rows.forEach((row) => {
    const pageName = toAustralianEnglish((row.PageName || '').trim());
    const url = (row.URL || '').trim();
    const metaDesc = toAustralianEnglish((row.MetaDescription || '').trim());

    if (!url || url === '/') return;

    function getCorridorsForUrl(u) {
      if (u.includes('local-business') || u.includes('geo')) {
        return ['phone', 'scan', 'contact'];
      }
      if (u.includes('shopify') || u.includes('blueprint') || u.includes('sprint') || u.includes('definition') || u.includes('comparison') || u.includes('procedures') || u.includes('constraints') || u.includes('costs-timing') || u.includes('ai-search-marketing')) {
        return ['scan', 'blueprint', 'contact'];
      }
      return ['scan', 'contact'];
    }

    const isServicePillar = SERVICE_PILLAR_URLS.includes(url);
    const isKnowledgeCapsule = KNOWLEDGE_CAPSULE_URLS.includes(url);
    const displayTitle = KNOWLEDGE_CAPSULE_TITLE_OVERRIDES[url] || PILLAR_TITLE_OVERRIDES[url] || pageName;

    const item = {
      title: displayTitle,
      href: url,
      description: metaDesc,
      entityName: pageName,
      isServicePillar: isServicePillar,
      isKnowledgeCapsule: isKnowledgeCapsule,
      corridors: getCorridorsForUrl(url)
    };

    // Determine Hub Membership
    if (url.startsWith('/services')) {
      // Avoid duplicate self link if Overview is already present
      if (!hubs['/services'].children.some(c => c.href === url)) {
        hubs['/services'].children.push(item);
      }
    } else if (url.startsWith('/solutions')) {
      if (!hubs['/solutions'].children.some(c => c.href === url)) {
        hubs['/solutions'].children.push(item);
      }
    } else if (url.startsWith('/knowledge-hub')) {
      if (!hubs['/knowledge-hub'].children.some(c => c.href === url)) {
        hubs['/knowledge-hub'].children.push(item);
      }
    }

    if (row.HierarchySub && row.HierarchySub.includes('Footer')) {
      footerLinks.push(item);
    }
  });

  // Ensure Privacy & Terms exist in footer
  if (!footerLinks.some(f => f.href === '/privacy')) {
    footerLinks.push({
      title: 'Privacy Policy',
      href: '/privacy',
      description: 'AEObility privacy, personal data protection policies.',
      entityName: 'AEObility Privacy Policy'
    });
  }
  if (!footerLinks.some(f => f.href === '/terms')) {
    footerLinks.push({
      title: 'Terms of Service',
      href: '/terms',
      description: 'AEObility service terms and client agreements.',
      entityName: 'AEObility Terms of Service'
    });
  }

  // Filter Services hub children to ONLY the 6 Service Pillars in exact order
  hubs['/services'].children = hubs['/services'].children
    .filter(c => c.isServicePillar)
    .sort((a, b) => SERVICE_PILLAR_URLS.indexOf(a.href) - SERVICE_PILLAR_URLS.indexOf(b.href));

  // Ensure Articles & Tutorials capsules exist in Knowledge Hub if missing
  if (!hubs['/knowledge-hub'].children.some(c => c.href === '/knowledge-hub/articles')) {
    hubs['/knowledge-hub'].children.unshift({
      title: 'Articles',
      href: '/knowledge-hub/articles',
      description: 'Technical articles on AEO, RAG, and AI search indexing.',
      entityName: 'Articles',
      isKnowledgeCapsule: true,
      corridors: ['scan', 'contact']
    });
  }
  if (!hubs['/knowledge-hub'].children.some(c => c.href === '/knowledge-hub/tutorials')) {
    hubs['/knowledge-hub'].children.push({
      title: 'Tutorials',
      href: '/knowledge-hub/tutorials',
      description: 'Step-by-step technical tutorials for schema and entity optimisation.',
      entityName: 'Tutorials',
      isKnowledgeCapsule: true,
      corridors: ['scan', 'contact']
    });
  }

  // Filter Knowledge Hub children to ONLY the 4 Knowledge Capsules in exact order
  hubs['/knowledge-hub'].children = hubs['/knowledge-hub'].children
    .filter(c => c.isKnowledgeCapsule)
    .sort((a, b) => KNOWLEDGE_CAPSULE_URLS.indexOf(a.href) - KNOWLEDGE_CAPSULE_URLS.indexOf(b.href));

  const navDataArray = hubOrder.map(key => hubs[key]);

  const hubSubnavMaps = {
    aeo: [
      { title: "AEO Hub", url: "/services/aeo" },
      { title: "What is AEO?", url: "/services/aeo/definition" },
      { title: "AEO vs SEO", url: "/services/aeo/comparison" },
      { title: "Best Strategies", url: "/services/aeo/procedures" },
      { title: "Constraints", url: "/services/aeo/constraints" },
      { title: "Costs & Timing", url: "/services/aeo/costs-timing" },
      { title: "Shopify AEO", url: "/services/aeo/shopify" },
      { title: "Local Business", url: "/services/aeo/local-business" }
    ],
    services: [
      { title: "Services Hub", url: "/services" },
      { title: "AEO & SEO", url: "/services/aeo" },
      { title: "AI Search Marketing", url: "/services/ai-search-marketing" },
      { title: "Local Business GEO", url: "/services/aeo/local-business" },
      { title: "GEO Marketing", url: "/services/geo-marketing" },
      { title: "Ecommerce AEO", url: "/services/aeo/shopify" },
      { title: "AI Strategy", url: "/services/aeo/procedures" }
    ],
    knowledgeHub: [
      { title: "Knowledge Hub", url: "/knowledge-hub" },
      { title: "AI SEO Tools", url: "/knowledge-hub/ai-seo-tools" },
      { title: "What is AEO?", url: "/knowledge-hub/what-is-aeo" },
      { title: "Articles", url: "/knowledge-hub/articles" },
      { title: "Guides", url: "/knowledge-hub/guides" },
      { title: "Case Studies", url: "/knowledge-hub/case-studies" },
      { title: "Tutorials", url: "/knowledge-hub/tutorials" }
    ],
    solutions: [
      { title: "Packages Overview", url: "/solutions" },
      { title: "AEO Blueprint", url: "/solutions/aeo-blueprint" },
      { title: "AEO Sprints", url: "/solutions/aeo-sprint" },
      { title: "GEO Services", url: "/services/geo-marketing" },
      { title: "Visibility Scan", url: "/diagnostic" }
    ]
  };

  const fileContent = `// Auto-generated from AEObility -IA & SLM.csv - DO NOT EDIT DIRECTLY
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

export const NAVIGATION_DATA: NavItemL1[] = ${JSON.stringify(navDataArray, null, 2)};

export const FOOTER_NAVIGATION: NavItemL2[] = ${JSON.stringify(footerLinks, null, 2)};

export const HUB_SUBNAV_MAPS: Record<string, SubNavPillItem[]> = ${JSON.stringify(hubSubnavMaps, null, 2)};
`;

  fs.writeFileSync(targetPath, fileContent, 'utf8');
  console.log(`✅ Successfully generated NavData.ts at: ${targetPath}`);
}

// Execute if run directly via CLI
if (process.argv[1] && process.argv[1].includes('generate-navdata.mjs')) {
  generateNavData();
}
