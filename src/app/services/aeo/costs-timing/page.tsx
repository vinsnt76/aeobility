import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  Info, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Calendar, 
  Check, 
  ChevronRight,
  Target,
  FileText,
  Boxes,
  FileCheck,
  Code,
  Activity,
  Search,
  ExternalLink,
  Ban
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';
import { TECHNICAL_SPRINT_CATALOG, PRICING_TIERS, GOVERNANCE_RULES, formatAudCurrency } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'AEO Service Costs & Project Timing | AEObility',
  description: `Explore AEObility's fixed-scope AEO service costs. Review milestones for the ${formatAudCurrency(TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst, { includeTaxSuffix: false })} Strategic Blueprint and AEO Foundation packages. Custom scope by application.`,
  alternates: {
    canonical: 'https://aeobility.com.au/services/aeo/costs-timing',
  },
  openGraph: {
    title: 'AEO Service Costs & Project Timing | AEObility',
    description: `Explore AEObility's fixed-scope AEO service costs. Review milestones for the ${formatAudCurrency(TECHNICAL_SPRINT_CATALOG['BPSTRAT'].priceExGst, { includeTaxSuffix: false })} Strategic Blueprint and AEO Foundation packages. Custom scope by application.`,
    url: 'https://aeobility.com.au/services/aeo/costs-timing',
    type: 'website',
  },
};

export default function AEOPricingPage() {
  const bpSku = TECHNICAL_SPRINT_CATALOG['BPSTRAT'];
  const foundationCore = TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION-CORE'] || TECHNICAL_SPRINT_CATALOG['AEO-FOUNDATION'];
  const macroSku = TECHNICAL_SPRINT_CATALOG['SS1MACRO'];
  const onboardingSku = TECHNICAL_SPRINT_CATALOG['ONBOARD'];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': 'https://aeobility.com.au/services/aeo/costs-timing#itemlist',
        'name': 'AEObility AEO Pricing and Implementation Pathway',
        'description': 'Four-stage commercial ladder for Answer Engine Optimisation (AEO) services, from free diagnostic assessment to custom application-based implementation.',
        'itemListOrder': 'https://schema.org/ItemListOrderAscending',
        'numberOfItems': 4,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/diagnostic#service',
              'name': 'AI Visibility Score',
              'description': 'Automated 6-stage telemetry diagnostic checking entity clarity, structured schema coverage, and machine readability within 24 hours.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'AUD',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/solutions/aeo-blueprint#service',
              'name': 'The AEObility Strategic Blueprint',
              'description': `Standalone 90-day operational roadmap and technical gap analysis. 100% credited back into implementation if booked within ${GOVERNANCE_RULES.creditWindowDays} days.`,
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': `${bpSku.priceExGst}`,
                'priceCurrency': 'AUD',
                'priceValidUntil': '2027-06-30',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/solutions/aeo-sprint#service',
              'name': 'AEO Foundation',
              'description': 'A 4-week structured deployment executing connected schema graphs, atomic page rewrites, and internal link architecture.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'price': `${foundationCore.priceExGst}`,
                'priceCurrency': 'AUD',
                'priceValidUntil': '2027-06-30',
                'availability': 'https://schema.org/InStock'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'item': {
              '@type': 'Service',
              '@id': 'https://aeobility.com.au/contact#custom-implementation',
              'name': 'Custom AEO Implementation',
              'description': 'Custom multi-entity and complex network implementation available by application following Blueprint review.',
              'provider': {
                '@type': 'ProfessionalService',
                '@id': 'https://aeobility.com.au/#organization',
                'name': 'AEObility'
              },
              'offers': {
                '@type': 'Offer',
                'description': 'Available by application following Blueprint review',
                'availability': 'https://schema.org/LimitedAvailability'
              }
            }
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://aeobility.com.au/services/aeo/costs-timing#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How much does Answer Engine Optimisation (AEO) cost in Australia?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `In Australia, fixed-scope Answer Engine Optimisation (AEO) with AEObility starts with a free AI Visibility Score. The standalone Strategic Blueprint costs ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD ex. GST (100% credited toward eligible implementation within ${GOVERNANCE_RULES.creditWindowDays} days). Targeted Micro-Sprints start at $495 AUD ex. GST, Governed Macro Sprints are ${formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} AUD/month ex. GST with zero contract lock-in, and AEO Foundation is ${formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD ex. GST across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core commercial pages.`
            }
          },
          {
            '@type': 'Question',
            'name': 'How does AEO pricing vary for single-site vs. multi-entity deployments?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Single-site Australian SMBs, local trades, and clinics qualify for fixed-price packages: the ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Strategic Blueprint and ${formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD AEO Foundation (covering up to ${GOVERNANCE_RULES.turnkeyPageLimit} priority pages with complimentary ${formatAudCurrency(onboardingSku.priceExGst, { includeTaxSuffix: false })} technical onboarding). Multi-entity organisations, national franchise networks, and large e-commerce catalogues require parent-child schema graphs, cross-domain canonical reconciliation, and regional location nodes. These deployments are scoped by application following a Strategic Blueprint audit.`
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I run an AEO pilot with a 90-day plan and clear success criteria?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Start your 90-day AEO pilot by commissioning the ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Strategic Blueprint. Days 1 to 10 establish your baseline AI Visibility Score, map entity and schema gaps, and lock in a prioritised 90-day execution checklist. In Weeks 2 to 6, apply your 100% ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint credit toward AEO Foundation or targeted Micro-Sprints to deploy connected JSON-LD schema, rewrite priority pages into self-contained 80 to 120-word answer blocks, and align directory facts. In Weeks 7 to 12, evaluate pilot success against four clear criteria: 100% schema validation with zero syntax errors, verified AI crawler access (GPTBot, ClaudeBot, PerplexityBot), direct passage extraction on target buyer prompts, and measurable brand citation growth across ChatGPT Search, Perplexity, and Google AI Overviews.`
            }
          },
          {
            '@type': 'Question',
            'name': `How does the ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint credit work?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with AEO Foundation (${formatAudCurrency(foundationCore.priceExGst)} AUD), or are accepted for a custom implementation engagement, the entire ${formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Blueprint investment is credited back against the approved implementation scope.`
            }
          },
          {
            '@type': 'Question',
            'name': 'What is included in the AEO Foundation package?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `AEO Foundation is a fixed-scope turnkey engagement at ${formatAudCurrency(foundationCore.priceExGst)} ex. GST across up to ${GOVERNANCE_RULES.turnkeyPageLimit} core commercial pages. It deploys verified JSON-LD schema graphs, rewrites priority content into machine-extractable atomic answer blocks, strengthens internal link paths, and standardises citation evidence, with full deployment handled in your CMS or via engineering pull requests. Includes complimentary technical onboarding (${formatAudCurrency(onboardingSku.priceExGst, { includeTaxSuffix: false })} value).`
            }
          },
          {
            '@type': 'Question',
            'name': 'What is not included in AEO Foundation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Foundation is designed for a defined, four-week scope across your priority commercial pages. It does not include full website rebuilds, ongoing blog content production, custom application development, or large multi-location and multi-entity rollouts. Where a broader scope is required, you can apply for a custom implementation path following a full Blueprint review.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can AEObility support larger or more complex implementations?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. For multi-location brands, extensive ecommerce catalogues, or multi-entity networks, custom implementation may be available by application. Every engagement is assessed after Blueprint review to confirm strategic fit, technical readiness, delivery scope, and capacity.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does it take to see measurable results from AEO?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Initial visibility diagnostic scans are delivered within 24 hours. The Blueprint establishes a 90-day roadmap, and measurable improvements in AI retrieval and citation footprints typically become observable within 6 to 12 weeks of initial schema and content deployment, though timing varies by site condition and platform indexing cycles.'
            }
          }
        ]
      }
    ]
  };

  const timelineSteps = [
    {
      weekNumber: 'Week 1',
      title: 'Structured-Data Implementation & Validation',
      action: "Building out your company's backend code cleanly so AI search engines can index your exact business details.",
      outcome: 'Entity-reference and identity linking to eliminate machine ambiguity.'
    },
    {
      weekNumber: 'Week 2',
      title: 'Atomic Answer Copywriting',
      action: 'Crafting clear, high-density answers to high-value customer questions across your primary pages.',
      outcome: 'Placing key answers exactly where readers and AI systems can find them quickly.'
    },
    {
      weekNumber: 'Week 3',
      title: 'Internal Relationship Mapping',
      action: 'Constructing a clear network of internal links that connect your services directly to your supporting educational guides.',
      outcome: 'Connecting your expertise to your primary conversion offers.'
    },
    {
      weekNumber: 'Week 4',
      title: 'Technical Verification & Handover Audit',
      action: 'Running a final visibility scan and implementing your technical handover.',
      outcome: 'Ensuring your complete information layer is fully readable by modern AI search models.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      <Navbar subnavItems={HUB_SUBNAV_MAPS.aeo} />
      <Breadcrumbs />

      {/* Main Container with Defensive Bottom Spacing for Floating Widgets */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 sm:pb-24 w-full space-y-10">
        
        {/* 1. Headline & Primacy Direct-Answer Hero Block */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/25 text-aeo-cyan text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing &amp; Service Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
            How Much Does AEO Cost and <span className="text-gradient-aeo">What Do I Get?</span>
          </h1>

          {/* Primacy Direct-Answer Block (45 Words) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg text-white/95 font-serif font-medium leading-relaxed">
              AEO with AEObility starts with a free <Link href="/diagnostic" className="text-aeo-cyan font-semibold hover:underline">AI Visibility Score</Link>. The <Link href="/solutions/aeo-blueprint" className="text-aeo-purple font-semibold hover:underline">Strategic Blueprint costs {formatAudCurrency(bpSku.priceExGst)}</Link> and is fully credited toward eligible implementation. <Link href="/solutions/aeo-sprint" className="text-emerald-400 font-semibold hover:underline">AEO Foundation</Link> is a fixed turnkey investment of {formatAudCurrency(foundationCore.priceExGst)} ex. GST.
            </p>
          </div>

          {/* Restrained Utility Trust Bar */}
          <div className="py-2.5 px-3.5 rounded-xl bg-zinc-950/80 border border-white/5 text-[11px] sm:text-xs font-mono text-zinc-400 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-aeo-cyan" />
              <span>Fixed scope</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>Australian pricing, ex. GST</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>Blueprint credit applied to eligible implementation</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>No ongoing retainer required</span>
          </div>
        </header>

        {/* 2. Standardised Four-Stage Card Architecture */}
        <section aria-label="AEO Commercial Product Ladder" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 pb-3">
            <h2 className="text-base sm:text-lg font-bold text-white font-soehne-breit flex items-center gap-2">
              <Layers className="w-4 h-4 text-aeo-cyan" />
              <span>Choose your AEO starting point</span>
            </h2>
            <span className="text-[11px] font-mono text-zinc-400">All prices in AUD, excluding GST</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Stage 1: Discover */}
            <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-mono font-semibold">
                  Stage 1: Discover
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">AI Visibility Score</h3>
                
                <div className="space-y-1.5 text-xs text-zinc-400 font-serif">
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Price:</span>
                    <strong className="text-white font-mono">Free</strong>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Delivery:</span>
                    <span className="text-zinc-300 font-mono text-[11px]">Immediate / 24 Hours</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                  <strong className="text-zinc-200 font-sans block text-[11px] mb-0.5">Best For:</strong>
                  Businesses wanting to instantly locate their site&apos;s machine-readability gaps.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <Link
                  href="/diagnostic"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all text-center"
                >
                  <span>Generate Your Score</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 2: Define */}
            <div className="p-5 bg-zinc-950/80 border border-aeo-purple/30 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-aeo-purple/50 transition-all relative">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-aeo-purple/15 border border-aeo-purple/30 text-[10px] text-aeo-purple font-mono font-semibold">
                  Stage 2: Define
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Strategic Blueprint</h3>
                
                <div className="space-y-1.5 text-xs text-zinc-400 font-serif">
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Price:</span>
                    <strong className="text-white font-mono">{formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD</strong>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Delivery:</span>
                    <span className="text-zinc-300 font-mono text-[11px]">{bpSku.deliverySla}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                  <strong className="text-zinc-200 font-sans block text-[11px] mb-0.5">Best For:</strong>
                  Businesses requiring an actionable, jargon-free 90-day technical roadmap and structured <Link href="/services/aeo/definition" className="text-aeo-purple hover:underline">AEO entity definitions</Link> before committing to developer implementation hours.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="p-1.5 rounded-lg bg-aeo-purple/10 border border-aeo-purple/20 text-[10px] text-purple-200 font-mono text-center">
                  100% credited into implementation within {GOVERNANCE_RULES.creditWindowDays} days
                </div>
                <Link
                  href="/solutions/aeo-blueprint"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-aeo-purple text-white font-semibold text-xs hover:bg-aeo-purple/90 transition-all text-center"
                >
                  <span>View Blueprint Options</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 3: Build */}
            <div className="p-5 bg-gradient-to-br from-cyan-950/40 via-zinc-950 to-zinc-950 border-2 border-aeo-cyan/40 rounded-2xl flex flex-col justify-between space-y-5 shadow-2xl hover:border-aeo-cyan transition-all relative">
              <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-aeo-cyan text-black text-[9px] font-mono font-extrabold uppercase tracking-wider shadow">
                Core Execution
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-aeo-cyan/15 border border-aeo-cyan/30 text-[10px] text-aeo-cyan font-mono font-semibold">
                  Stage 3: Build
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">AEO Foundation</h3>
                
                <div className="space-y-1.5 text-xs text-zinc-400 font-serif">
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Price:</span>
                    <strong className="text-white font-mono">{formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD</strong>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Delivery:</span>
                    <span className="text-zinc-300 font-mono text-[11px]">Fixed 3-4 Week Timeline</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                  <strong className="text-cyan-200 font-sans block text-[11px] mb-0.5">Best For:</strong>
                  Australian SMBs, local service trades, and single-domain clinics ready to establish an authoritative, machine-readable digital footprint across up to {GOVERNANCE_RULES.turnkeyPageLimit} core pages.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="p-1.5 rounded-lg bg-aeo-cyan/10 border border-aeo-cyan/20 text-[10px] text-cyan-200 font-mono text-center">
                  {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint fee deducted
                </div>
                <Link
                  href="/solutions/aeo-sprint"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-aeo-cyan text-black font-semibold text-xs hover:bg-aeo-cyan/90 transition-all text-center shadow-lg shadow-aeo-cyan/20"
                >
                  <span>Explore Foundation Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Stage 4: Scale */}
            <div className="p-5 bg-zinc-950/80 border border-white/10 rounded-2xl flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition-all">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] text-amber-400 font-mono font-semibold">
                  Stage 4: Scale
                </div>
                <h3 className="text-base font-bold text-white font-soehne-breit">Custom Implementation</h3>
                
                <div className="space-y-1.5 text-xs text-zinc-400 font-serif">
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Engagement:</span>
                    <strong className="text-amber-400 font-mono text-xs uppercase">By Application</strong>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-zinc-500 font-mono text-[11px]">Delivery:</span>
                    <span className="text-zinc-300 font-mono text-[11px]">Post-Blueprint Review</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-serif leading-relaxed pt-1">
                  <strong className="text-zinc-200 font-sans block text-[11px] mb-0.5">Best For:</strong>
                  Multi-location brands, extensive e-commerce catalogues, or multi-entity networks whose requirements exceed fixed Foundation boundaries.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="p-1.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-[9px] text-amber-300 font-mono text-center">
                  Limited capacity • Selected projects
                </div>
                <Link
                  href="/contact?inquiry=custom-application"
                  className="group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-all text-center"
                >
                  <span>Apply for Custom Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Path Clarification & Mid-Page Decision CTA */}
        <section className="space-y-4">
          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-white font-soehne-breit flex items-center gap-2">
                <Target className="w-5 h-5 text-aeo-cyan" />
                <span>Which option is right for your business?</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif">
                Choose the closest fit now; every implementation pathway starts with a clear scope.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs font-serif pt-1">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-aeo-purple/30 space-y-1.5">
                <span className="text-[10px] font-mono text-aeo-purple uppercase font-bold">Stage 2: Strategic Blueprint</span>
                <strong className="text-white font-sans text-xs block">Recommended for most implementation-ready businesses.</strong>
                <p className="text-zinc-300 leading-relaxed">
                  Gives your team a complete 90-day operational roadmap that you own outright, with 100% credit applied if you choose to build with us.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-amber-500/30 space-y-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">Stage 4: Custom Implementation</span>
                <strong className="text-white font-sans text-xs block">Limited capacity. Selected projects only.</strong>
                <p className="text-zinc-300 leading-relaxed">
                  Applications are assessed following Blueprint review to ensure strict technical and strategic fit before any proposal is issued.
                </p>
              </div>
            </div>

            {/* Mid-Page Decision Capture Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-aeo-cyan/15 via-black to-aeo-purple/15 border border-aeo-cyan/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <strong className="text-white text-sm font-sans block">
                  Not sure which path fits? Start with the free AI Visibility Score.
                </strong>
                <p className="text-xs text-zinc-300 font-serif">
                  Get a baseline in 24 hours before choosing a Blueprint or full build.
                </p>
              </div>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-aeo-cyan text-black font-bold text-xs hover:bg-white transition-colors shrink-0 shadow-lg shadow-aeo-cyan/20"
              >
                <span>Generate Your Score</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Buyer-Benefit Delivery Timeline (4-Week Foundation Scope) */}
        <section aria-label="AEO Foundation Timeline" className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-7 space-y-6 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/20 text-[10px] text-aeo-cyan font-mono font-semibold">
                <Calendar className="w-3 h-3" />
                <span>Structured Delivery Schedule</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-soehne-breit">
                Clear, Fixed-Scope Delivery Timeline (4-Week Foundation Scope)
              </h2>
            </div>
            <span className="text-[11px] font-mono text-zinc-400">Fixed-Scope • Milestone Driven</span>
          </div>

          {/* Responsive CSS Vertical Timeline (Mobile Stack -> Desktop 4-Column Grid) */}
          <div className="relative border-l-2 border-aeo-cyan/30 ml-3.5 my-4 md:border-l-0 md:ml-0 md:my-0 md:grid md:grid-cols-4 md:gap-4">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="mb-8 pl-6 relative md:mb-0 md:pl-0 flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-aeo-cyan/30 transition-all">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-aeo-cyan border-2 border-black md:static md:mb-3 md:left-auto md:top-auto shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-aeo-cyan uppercase font-bold tracking-wider">
                      {step.weekNumber}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                      Active
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-soehne-breit">
                    {step.title}
                  </h3>

                  <div className="space-y-2 text-xs font-serif pt-1">
                    <div>
                      <strong className="text-zinc-300 font-sans block text-[10px] uppercase font-semibold text-zinc-400">
                        Operational Action:
                      </strong>
                      <p className="text-zinc-300 leading-relaxed mt-0.5">
                        {step.action}
                      </p>
                    </div>

                    <div>
                      <strong className="text-cyan-300 font-sans block text-[10px] uppercase font-semibold">
                        Core Outcome:
                      </strong>
                      <p className="text-zinc-200 leading-relaxed mt-0.5 font-medium">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-zinc-400 font-serif">
            <span>Every milestone concludes with completed validation checks, schema testing, and handover notes.</span>
            <Link href="/services/aeo/procedures" className="text-aeo-cyan hover:underline font-mono text-[11px] shrink-0 ml-2">
              Review procedures →
            </Link>
          </div>
        </section>

        {/* 5. Pricing, Timelines & Scope Exclusions FAQ Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-aeo-cyan font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Pricing &amp; Timelines Frequently Asked Questions</span>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-950/80 divide-y divide-white/5 shadow-xl">
            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-much-does-aeo-cost-in-australia" className="font-semibold text-sm sm:text-base text-white">
                How much does Answer Engine Optimisation (AEO) cost in Australia?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                In Australia, fixed-scope Answer Engine Optimisation (AEO) with AEObility starts with a free <Link href="/diagnostic" className="text-aeo-cyan hover:underline">AI Visibility Score</Link>. The standalone <Link href="/solutions/aeo-blueprint" className="text-aeo-purple hover:underline font-semibold">Strategic Blueprint costs {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD ex. GST</Link> and is 100% credited toward eligible implementation within {GOVERNANCE_RULES.creditWindowDays} days. Targeted Micro-Sprints start at $495 AUD ex. GST, Governed Macro Sprints are {formatAudCurrency(macroSku.priceExGst, { includeTaxSuffix: false })} AUD/month ex. GST with zero contract lock-in, and <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">AEO Foundation</Link> is {formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD ex. GST across up to {GOVERNANCE_RULES.turnkeyPageLimit} core commercial pages.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="single-site-vs-multi-entity-pricing" className="font-semibold text-sm sm:text-base text-white">
                How does AEO pricing vary for single-site vs. multi-entity deployments?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Single-site Australian SMBs, local trades, and clinics qualify for fixed-price packages: the {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD <Link href="/solutions/aeo-blueprint" className="text-aeo-purple hover:underline">Strategic Blueprint</Link> and {formatAudCurrency(foundationCore.priceExGst, { includeTaxSuffix: false })} AUD <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">AEO Foundation</Link> (covering up to {GOVERNANCE_RULES.turnkeyPageLimit} priority pages with complimentary {formatAudCurrency(onboardingSku.priceExGst, { includeTaxSuffix: false })} technical onboarding). Multi-entity organisations, national franchise networks, and large e-commerce catalogues require parent-child schema graphs, cross-domain canonical reconciliation, and regional location nodes. These deployments are scoped by application following a Strategic Blueprint audit.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-to-run-a-90-day-aeo-pilot" className="font-semibold text-sm sm:text-base text-white">
                How do I run an AEO pilot with a 90-day plan and clear success criteria?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Start your 90-day AEO pilot by commissioning the <Link href="/solutions/aeo-blueprint" className="text-aeo-purple hover:underline font-semibold">{formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Strategic Blueprint</Link>. Days 1 to 10 establish your baseline AI Visibility Score, map entity and schema gaps, and lock in a prioritised 90-day execution checklist (see our <Link href="/knowledge-hub/case-studies/aeo-geo-blueprint-90-days" className="text-aeo-cyan hover:underline">90-day Blueprint case study</Link>). In Weeks 2 to 6, apply your 100% {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint credit toward <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">AEO Foundation</Link> or targeted Micro-Sprints to deploy connected JSON-LD schema, rewrite priority pages into self-contained 80 to 120-word answer blocks, and align directory facts. In Weeks 7 to 12, evaluate pilot success against four clear criteria: 100% schema validation with zero syntax errors, verified AI crawler access (GPTBot, ClaudeBot, PerplexityBot), direct passage extraction on target buyer prompts, and measurable brand citation growth across ChatGPT Search, Perplexity, and Google AI Overviews.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="what-is-the-aeobility-blueprint-price" className="font-semibold text-sm sm:text-base text-white">
                How does the {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} Blueprint credit work?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                The Blueprint is a complete 90-day strategy document that you own outright. If you proceed with <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">AEO Foundation ({formatAudCurrency(foundationCore.priceExGst)})</Link> within {GOVERNANCE_RULES.creditWindowDays} days, or are accepted for a custom implementation engagement, the entire {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} AUD Blueprint investment is credited back and deducted from your approved implementation scope.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="what-is-included-in-foundation-implementation" className="font-semibold text-sm sm:text-base text-white">
                What is included in the AEO Foundation ({formatAudCurrency(foundationCore.priceExGst)}) package?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                AEO Foundation is a complete turnkey 4-week execution bridging strategic discovery into live production across up to {GOVERNANCE_RULES.turnkeyPageLimit} core pages. It includes complimentary technical onboarding ({formatAudCurrency(onboardingSku.priceExGst, { includeTaxSuffix: false })} value waived) and deploys verified JSON-LD schema graphs, atomic answer blocks, strengthened link paths, and citation evidence. Flexible deployment is built-in at no extra charge: our engineering team handles direct CMS and DOM injection with live testing, or provides production-ready pull requests and copy blocks for internal engineering teams. Learn more on our <Link href="/solutions/aeo-sprint" className="text-aeo-cyan hover:underline">AEO Foundation page</Link>.
              </p>
            </div>

            {/* Scope Exclusion FAQ */}
            <div className="p-5 sm:p-6 space-y-2 bg-white/[0.01]">
              <h3 id="what-is-not-included-in-foundation-implementation" className="font-semibold text-sm sm:text-base text-white flex items-center gap-2">
                <Ban className="w-4 h-4 text-rose-400 shrink-0" />
                <span>What is not included in AEO Foundation?</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Foundation is designed for a defined, four-week scope across your priority commercial pages. It does not include full website rebuilds, ongoing blog content production, custom application development, or large multi-location and multi-entity rollouts. Where a broader scope is required, you can <Link href="/contact?inquiry=custom-application" className="text-aeo-cyan hover:underline font-semibold">apply for a custom implementation path</Link> following a full Blueprint review.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-much-do-professional-aeo-optimisation-services-cost" className="font-semibold text-sm sm:text-base text-white">
                Can AEObility support larger or more complex implementations?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Yes. For multi-location brands, extensive ecommerce catalogues, or multi-entity networks, custom implementation may be available by application. Every engagement is assessed after Blueprint review to confirm strategic fit, technical readiness, delivery scope, and capacity. You can <Link href="/contact?inquiry=custom-application" className="text-aeo-cyan hover:underline">apply for custom implementation with our team</Link>.
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-2">
              <h3 id="how-long-does-it-take-to-see-measurable-results" className="font-semibold text-sm sm:text-base text-white">
                How long does it take to see measurable results from AEO?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                Initial visibility diagnostic scans are delivered within 24 hours. The Blueprint establishes a 90-day roadmap, and measurable improvements in AI retrieval and citation footprints typically become observable within 6 to 12 weeks of initial schema and content deployment. Learn <Link href="/services/aeo/procedures" className="text-aeo-cyan hover:underline">how AEObility implements AEO strategy</Link>. Note that timing varies by initial site condition, implementation scope, and platform re-indexing cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Semantic Connections Grid (L3 Commercial Lattice Links) */}
        <section className="border-t border-white/10 pt-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-aeo-cyan font-mono">
            Commercial &amp; Strategic Semantic Connections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
            <Link 
              href="/solutions/aeo-blueprint" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-purple/40 hover:text-aeo-purple transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Strategic Blueprint</div>
              <p className="text-zinc-400 font-serif text-[11px]">View Blueprint inclusions, deliverables, and {formatAudCurrency(bpSku.priceExGst, { includeTaxSuffix: false })} pricing details.</p>
            </Link>

            <Link 
              href="/solutions/aeo-sprint" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO Foundation</div>
              <p className="text-zinc-400 font-serif text-[11px]">Fixed-scope execution sprint at {formatAudCurrency(foundationCore.priceExGst)} ex. GST.</p>
            </Link>

            <Link 
              href="/contact?inquiry=custom-application" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-amber-400/40 hover:text-amber-400 transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Custom Implementation Application</div>
              <p className="text-zinc-400 font-serif text-[11px]">Apply for custom scope for multi-entity or large ecommerce sites.</p>
            </Link>

            <Link 
              href="/services/aeo/procedures" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO Execution Procedures</div>
              <p className="text-zinc-400 font-serif text-[11px]">How AEObility executes technical AEO and schema refactoring.</p>
            </Link>

            <Link 
              href="/services/aeo/constraints" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-white/20 hover:text-white transition-all space-y-1 block"
            >
              <div className="font-bold text-white">AEO System Constraints</div>
              <p className="text-zinc-400 font-serif text-[11px]">What prevents businesses from showing up in conversational search.</p>
            </Link>

            <Link 
              href="/diagnostic" 
              className="p-4 bg-zinc-950/80 border border-white/10 rounded-xl hover:border-aeo-cyan/40 hover:text-aeo-cyan transition-all space-y-1 block"
            >
              <div className="font-bold text-white">Free AI Visibility Check</div>
              <p className="text-zinc-400 font-serif text-[11px]">Launch an instant 6-stage telemetry diagnostic for your domain.</p>
            </Link>
          </div>
        </section>

        {/* Bottom-Up Link to Parent AEO Hub */}
        <div className="pt-2 flex">
          <Link href="/services/aeo" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
            <span>← Back to</span>
            <strong className="text-aeo-cyan hover:underline">AEO Services Hub</strong>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
