import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  FileSpreadsheet, 
  Layers, 
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "How to Build Entity Density for AI Search | AEObility",
  description: "Stop counting keywords like it's 2015. Here is a 5-step workflow to audit and build 80%+ entity density into your headers and opening copy for ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
  },
  openGraph: {
    title: "How to Build Entity Density for AI Search | AEObility",
    description: "Audit and engineer 80%+ entity density into on-page copy for modern answer engines. Free Google Sheet diagnostic template included.",
    url: "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
    type: "article",
    images: [
      {
        url: "https://aeobility.com.au/images/knowledge-hub/how-to-build-entity-density-thumbnail_AEObility.webp",
        width: 1200,
        height: 800,
        alt: "How to Build Entity Density tutorial thumbnail with AEObility specialist guide and AI search optimisation workflow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build Entity Density for AI Search | AEObility Tutorial",
    description: "Audit and engineer 80%+ entity density into on-page copy for modern answer engines.",
    images: ["https://aeobility.com.au/images/knowledge-hub/how-to-build-entity-density-thumbnail_AEObility.webp"],
  },
};

export default function HowToAuditAndBuildEntityDensityPage() {
  const tutorialSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#article",
        "name": "How to Build Entity Density into Your On-Page Copy for AI Search",
        "headline": "How to Build Entity Density into Your On-Page Copy for AI Search (Step-by-Step Guide)",
        "description": "Tactical standard operating procedure for auditing, mapping, and engineering 80%+ entity density into on-page structural zones for Answer Engine Optimisation.",
        "url": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo",
        "image": "https://aeobility.com.au/images/knowledge-hub/how-to-build-entity-density-thumbnail_AEObility.webp",
        "inLanguage": "en-AU",
        "datePublished": "2026-09-24",
        "dateModified": "2026-09-24",
        "author": {
          "@type": "Person",
          "@id": "https://aeobility.com.au/vince-baker#person",
          "name": "Vince Baker",
          "jobTitle": "Founder & Principal Technical Architect"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "url": "https://aeobility.com.au"
        },
        "about": [
          "Entity Density",
          "Answer Engine Optimisation",
          "Generative Engine Optimisation",
          "Semantic SEO",
          "Schema.org Entity Graph"
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#howto",
        "name": "How to Audit and Build Entity Density for AEO",
        "description": "A 5-step workflow to audit opening copy and hit the 80% entity coverage threshold that turns ambiguous pages into cited sources.",
        "image": "https://aeobility.com.au/images/knowledge-hub/how-to-build-entity-density-thumbnail_AEObility.webp",
        "totalTime": "PT25M",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Pick Your Framework",
            "text": "Select whether you are auditing a Homepage, Service Page, or Location Hub to load the matching 5-node entity targets."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Grab Your Opening Copy",
            "text": "Copy your H1, immediate subheaders, and the first 150-200 words from your live site."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Paste into Cell A5",
            "text": "Drop the extracted opening copy directly into cell A5 of the AEObility diagnostic sheet."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Check Green vs Red Flags",
            "text": "Review automated detection formulas to see which of your 5 core entity anchors are detected or missing."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Rewrite Until You Hit 80%+",
            "text": "Swap vague agency buzzwords for concrete entity statements until cell E5 ticks into the green 80%+ threshold."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is entity density in SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Think of entity density as your page's factual signal-to-noise ratio: the percentage of real-world facts (business name, founder, location, and core services) packed cleanly into your H1, subheaders, and the first 150 words relative to total word count."
            }
          },
          {
            "@type": "Question",
            "name": "How does entity density differ from keyword density?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Old search engines acted like calculators counting how many times a keyword repeated. AI engines connect dots: they scan for real-world relationships mapped to knowledge graphs, verifying who you are, what you do, and where you operate."
            }
          },
          {
            "@type": "Question",
            "name": "What is the ideal entity score for generative search engines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aim for at least an 80% entity coverage score across your first 150 words. Hitting this benchmark gives AI models sufficient confidence to cite your business directly without hallucinating attributes or defaulting to a competitor."
            }
          },
          {
            "@type": "Question",
            "name": "Can high entity density lead to search over-optimisation penalties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Unlike legacy keyword stuffing, entity density relies on natural grammatical triples (Subject-Predicate-Object). Providing precise factual anchors like founding year, practitioner credentials, and city locations improves human readability while eliminating ambiguity for machines."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tutorialSchema) }}
      />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24 w-full space-y-12">
        
        {/* Article Header & Hook */}
        <header className="space-y-6 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aeo-cyan/10 border border-aeo-cyan/30 text-aeo-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AEO Tutorial &bull; On-Page Entity Architecture</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-soehne-breit leading-tight">
              How to Build Entity Density into Your On-Page Copy for AI Search
            </h1>
            <div className="space-y-2 text-lg sm:text-xl text-slate-300 font-serif border-l-2 border-aeo-cyan pl-4 py-1 leading-snug">
              <p className="font-semibold text-white not-italic">
                Stop counting keywords like it&apos;s 2015.
              </p>
              <p className="text-slate-300 italic text-base sm:text-lg">
                AI models like ChatGPT, Perplexity, and Google AI Overviews don&apos;t care how many times you squeeze &ldquo;best plumber&rdquo; onto a page. They scan for concrete facts: who you are, what you do, and where you operate.
              </p>
              <p className="text-slate-400 text-sm sm:text-base not-italic pt-1">
                Here is a simple 5-step workflow to audit your opening copy and hit the 80% entity coverage threshold that turns ambiguous pages into cited sources.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400 pt-2">
            <div>Author: <strong className="text-white">Vince Baker</strong></div>
            <div>Published: <span className="text-slate-300">24 Sep 2026</span></div>
            <div>Difficulty: <span className="text-aeo-cyan font-bold">Intermediate</span></div>
            <div>Duration: <span className="text-aeo-purple font-bold">25 Mins</span></div>
            <div>Format: <span className="text-emerald-400 font-bold">Interactive SOP</span></div>
          </div>
        </header>

        {/* The Core Definition Anchor (Level 2 Validated Dark Glass Card) */}
        <section 
          aria-label="Core Definition" 
          className="relative isolate overflow-hidden rounded-2xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_30px_rgba(0,229,255,0.08)] p-6 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>What is Entity Density, Really?</span>
            </div>
            <p className="text-base sm:text-lg text-slate-100 font-serif leading-relaxed">
              Think of it as your page&apos;s factual signal-to-noise ratio. It is the percentage of real-world facts: your business name, founder, location, and core services, packed cleanly into your H1, subheaders, and the first 150 words.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span>Benchmark Target: <strong className="text-aeo-cyan font-bold">80%+ Semantic Coverage</strong></span>
              <span>&bull;</span>
              <span>Primary Structural Zone: <strong className="text-slate-200">First 150 Words &amp; Headers</strong></span>
            </div>
          </div>
        </section>

        {/* Embedded Diagnostic Sheet Preview Container (Option 2: Scrollable Preview + Floating Header) */}
        <section aria-label="Interactive Diagnostic Tool" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-white font-soehne-breit flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-aeo-cyan" />
              <span>Free Diagnostic Tool: AEObility Entity SEO Template</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">Google Sheets SOP &amp; Audit Engine</span>
          </div>

          <div className="relative isolate overflow-hidden rounded-2xl bg-slate-950/90 backdrop-blur-md border border-purple-500/30 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />
            
            {/* Template Card Floating Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-900/90 border-b border-white/10">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span>AEObility | Entity SEO Diagnostic Template</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-aeo-cyan/20 border border-aeo-cyan/40 text-aeo-cyan uppercase font-bold">v2.4</span>
                </div>
                <div className="text-xs text-slate-400">Automated 5-node entity matching formula and semantic coverage auditor</div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-aeo-cyan to-cyan-400 hover:from-cyan-300 hover:to-aeo-cyan text-black font-semibold text-xs font-mono shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-200"
                >
                  <span>⚡ Make a Copy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Read-Only Sheet Preview */}
            <div className="relative w-full h-[460px] bg-slate-950">
              <iframe
                src="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/preview?rm=minimal"
                title="AEObility Entity SEO Diagnostic Tool Preview"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Preview Footer Utility Row */}
            <div className="p-3 bg-slate-900/60 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span>Free template &bull; Zero login required</span>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/template/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aeo-cyan hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Open in Google Template Preview Mode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Tutorial Body Sections */}
        <article className="space-y-12 font-serif text-base leading-relaxed text-slate-300">
          
          {/* Section 1: Why AI Search Skips The Small Talk */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">01.</span>
              <span>Why AI Search Skips The Small Talk</span>
            </h2>
            <p>
              Old search engines acted like calculators: mention &ldquo;commercial refrigeration repairs&rdquo; six times in 800 words, and you got a gold star.
            </p>
            <p className="text-white font-semibold">
              AI engines don&apos;t count words; they connect dots.
            </p>
            <p>
              When an LLM scans your page, it strips out the filler to find hard relationships:
            </p>

            {/* Triples Schematic Box */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/75 backdrop-blur-md border border-purple-500/20 shadow-xl p-5 space-y-2 font-mono text-xs sm:text-sm text-slate-300">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="text-xs text-slate-400 uppercase font-semibold">Hard Relationship Syntax:</div>
              <div className="text-aeo-cyan font-bold text-sm sm:text-base">
                [Who] &rarr; [Does What] &rarr; [Where]
              </div>
              <div className="text-xs text-slate-400 pt-1 border-t border-white/5">
                Example: <span className="text-white">[AEObility]</span> &rarr; <span className="text-purple-300">[founded by]</span> &rarr; <span className="text-cyan-300">[Vince Baker]</span> in <span className="text-emerald-300">[Perth, Western Australia]</span>.
              </div>
            </div>

            <h3 className="text-lg font-bold text-white font-soehne-breit pt-2">The Catch? Placement Matters.</h3>
            <p>
              Language models suffer from short attention spans. During chunk retrieval, models heavily favour facts placed right at the top. If an engine can&apos;t verify who you are, what you specialise in, and where you operate within the first two paragraphs, it skips your site and cites a competitor with cleaner data.
            </p>
          </section>

          {/* Section 2: The 5 Facts Every Commercial Page Needs */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">02.</span>
              <span>The 5 Facts Every Commercial Page Needs</span>
            </h2>
            <p>
              Before touching code or schema, make sure your page explicitly nails these five anchors:
            </p>

            {/* 5-Node Table in Glass Container */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/90 backdrop-blur-md border border-purple-500/25 shadow-2xl not-prose">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-slate-900/60 text-slate-400 font-mono uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-semibold">Anchor</th>
                      <th className="py-3.5 px-4 font-semibold">What Models Look For</th>
                      <th className="py-3.5 px-4 font-semibold">Example (AEObility About Page)</th>
                      <th className="py-3.5 px-4 font-semibold">Matching Schema Property</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">1. Legal Business Name</td>
                      <td className="py-3.5 px-4 font-medium text-aeo-cyan font-serif text-slate-300">No clever nicknames: use the real registered commercial name.</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">AEObility</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">Organization.legalName</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">2. Founder or Specialist</td>
                      <td className="py-3.5 px-4 font-medium text-aeo-purple font-serif text-slate-300">Tie a real human name to the brand for E-E-A-T and authority.</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Vince Baker</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">Person.name / founder</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">3. Founding Year</td>
                      <td className="py-3.5 px-4 font-medium text-amber-400 font-serif text-slate-300">Tell models how long you&apos;ve existed so they don&apos;t guess.</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Established 2026</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">foundingDate</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">4. Core Service Domain</td>
                      <td className="py-3.5 px-4 font-medium text-emerald-400 font-serif text-slate-300">State your exact specialty without generic agency jargon.</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Answer Engine Optimisation</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">knowsAbout / Service</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white whitespace-nowrap">5. Geographic Base</td>
                      <td className="py-3.5 px-4 font-medium text-cyan-400 font-serif text-slate-300">Specify city and state so models don&apos;t confuse you with namesakes abroad.</td>
                      <td className="py-3.5 px-4 font-serif text-slate-200 font-medium">Perth, Western Australia</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-purple-300">PostalAddress / location</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3: The 5-Minute Audit Workflow */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">03.</span>
              <span>The 5-Minute Audit Workflow</span>
            </h2>
            <p>
              Grab the <a href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan hover:underline font-semibold font-mono">AEObility Diagnostic Template</a> and follow this quick checklist:
            </p>

            <div className="space-y-4 not-prose">
              {/* Step 1 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-1.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-cyan uppercase">
                  <span>Step 1</span>
                  <span>&bull;</span>
                  <span>Pick Your Framework</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Select whether you are auditing a <strong>Homepage</strong>, <strong>Service Page</strong>, or <strong>Location Hub</strong> in the template sheet to load matching entity targets.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-1.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-purple uppercase">
                  <span>Step 2</span>
                  <span>&bull;</span>
                  <span>Grab Your Opening Copy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Copy your H1 headline, immediate subheaders, and the first 150–200 words from your live website.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-1.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
                  <span>Step 3</span>
                  <span>&bull;</span>
                  <span>Paste into Cell A5</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Drop the extracted text directly into cell <code className="text-aeo-cyan font-mono text-xs bg-black/60 px-1.5 py-0.5 rounded border border-white/10">A5</code> of the diagnostic tab.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-1.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-400 uppercase">
                  <span>Step 4</span>
                  <span>&bull;</span>
                  <span>Check Green vs Red Flags</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  The sheet automatically evaluates whether your 5 core entity anchors are detected (<span className="text-emerald-400 font-mono font-bold">MATCH</span>) or missing (<span className="text-rose-400 font-mono font-bold">MISSING</span>).
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 p-5 space-y-1.5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-aeo-cyan uppercase">
                  <span>Step 5</span>
                  <span>&bull;</span>
                  <span>Rewrite Until You Hit 80%+</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Swap vague agency buzzwords for concrete entity statements until cell <code className="text-aeo-cyan font-mono text-xs bg-black/60 px-1.5 py-0.5 rounded border border-white/10">E5</code> ticks into the green.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: What This Looks Like in Practice */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">04.</span>
              <span>What This Looks Like in Practice</span>
            </h2>
            <p>
              Here is how a real-world agency opening passage transforms when re-engineered for machine legibility:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose font-sans">
              {/* Before Card */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.06)] p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>The &ldquo;Corporate Fluff&rdquo; Version</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold">20% Score</span>
                </div>
                <blockquote className="text-xs text-slate-300 leading-relaxed font-serif italic border-l-2 border-amber-500/30 pl-3">
                  &ldquo;We are a premier digital marketing agency passionate about helping businesses grow online. Our expert team delivers world-class results for modern brands.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] font-mono text-slate-400">
                  <div className="text-slate-300 font-bold font-sans">Why AI ignores this:</div>
                  <div><strong className="text-rose-400">&times; Legal Name:</strong> No company name mentioned.</div>
                  <div><strong className="text-rose-400">&times; Location:</strong> Generic (&ldquo;online&rdquo;).</div>
                  <div><strong className="text-rose-400">&times; Service:</strong> Ambiguous (&ldquo;world-class results&rdquo;).</div>
                  <div><strong className="text-rose-400">&times; Verdict:</strong> Completely invisible to a knowledge graph.</div>
                </div>
              </div>

              {/* After Card */}
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_25px_rgba(0,229,255,0.08)] p-6 space-y-3">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-aeo-cyan text-xs font-mono font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The &ldquo;Machine-Legible&rdquo; Rewrite</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-aeo-cyan font-mono text-[10px] font-bold">100% Score</span>
                </div>
                <blockquote className="text-xs text-slate-100 leading-relaxed font-serif border-l-2 border-aeo-cyan pl-3">
                  &ldquo;AEObility is an Answer Engine Optimisation (AEO) consultancy founded by Vince Baker in Perth, Western Australia. We specialise in generative engine optimisation (GEO), helping enterprise brands establish canonical entity density across ChatGPT, Perplexity, and Google AI Overviews.&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-white/5 space-y-1 text-[11px] font-mono text-slate-300">
                  <div className="text-aeo-cyan font-bold font-sans">Why this works:</div>
                  <div><strong className="text-emerald-400">&check; Legal Name:</strong> AEObility</div>
                  <div><strong className="text-emerald-400">&check; Founder:</strong> Vince Baker</div>
                  <div><strong className="text-emerald-400">&check; Location:</strong> Perth, Western Australia</div>
                  <div><strong className="text-emerald-400">&check; Verdict:</strong> In two sentences, the model extracts identity without ambiguity.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Back It Up in Your Schema */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <span className="text-aeo-cyan font-mono text-base font-normal">05.</span>
              <span>Back It Up in Your Schema</span>
            </h2>
            <p>
              On-page text is only step one. Structured JSON-LD schema is the proof.
            </p>
            
            {/* Golden Rule Callout */}
            <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/75 backdrop-blur-md border border-purple-500/25 p-5 space-y-3 font-mono text-xs text-slate-300">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 text-aeo-purple font-bold uppercase">
                <Layers className="w-4 h-4" />
                <span>The Golden Rule: Match Visible Text 1:1 with Schema Tags</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                If your JSON-LD script says you were founded in Perth by Vince Baker, but your visible copy never mentions Perth or Vince, retrieval models spot the discrepancy. Ensure every key schema field (<code className="text-cyan-300">legalName</code>, <code className="text-cyan-300">founder</code>, <code className="text-cyan-300">foundingDate</code>, <code className="text-cyan-300">addressLocality</code>) matches the exact words written in your opening paragraph.
              </p>
            </div>
          </section>

          {/* Section 6: Frequently Asked Questions */}
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-white font-soehne-breit tracking-tight flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-aeo-cyan" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-4 not-prose">
              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">What is entity density in SEO?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Think of it as your page&apos;s factual signal-to-noise ratio. It is the percentage of real-world facts: your business name, founder, location, and core services, packed cleanly into your H1, subheaders, and the first 150 words relative to total word count.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">How does entity density differ from keyword density?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Old search engines acted like calculators counting how many times a keyword repeated. AI engines connect dots: they scan for real-world relationships mapped to knowledge graphs, verifying who you are, what you do, and where you operate.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">What is the ideal entity score for generative search engines?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  Aim for at least an 80% entity coverage score across your first 150 words. Hitting this benchmark gives AI models sufficient confidence to cite your business directly without hallucinating attributes or defaulting to a competitor.
                </p>
              </div>

              <div className="relative isolate overflow-hidden rounded-xl bg-slate-950/70 backdrop-blur-sm border border-white/10 p-5 space-y-2">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none" />
                <h3 className="text-sm font-bold text-white font-mono">Can high entity density lead to search over-optimisation penalties?</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  No. Unlike legacy keyword stuffing, entity density relies on natural grammatical triples (Subject-Predicate-Object). Providing precise factual anchors like founding year, practitioner credentials, and city locations improves human readability while eliminating ambiguity for machines.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Next Steps & Conversion */}
          <section className="space-y-6 border-t border-white/10 pt-8 not-prose">
            <div className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />
              <div className="text-xs font-mono text-aeo-cyan uppercase font-bold tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Take Action on Your Entity Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-soehne-breit">
                See What AI Search Actually Thinks of Your Brand
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-serif">
                Download the free diagnostic template to audit your opening copy, or run an automated visibility scan to inspect how AI engines parse your business today.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://docs.google.com/spreadsheets/d/1ON5tJWkeVXZYMSCKLV48C1hcdeBeIdVjA7UEzmrrMPk/copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-aeo-cyan to-cyan-400 hover:from-cyan-300 hover:to-aeo-cyan text-black font-semibold text-xs font-mono shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Make a Copy of the Diagnostic Sheet</span>
                </a>
                <Link
                  href="/diagnostic"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/15 hover:border-aeo-cyan/50 text-white font-medium text-xs font-mono transition-all flex items-center gap-2"
                >
                  <span>Run Free AI Visibility Scan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-aeo-cyan" />
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Book Specialist Review &rarr;
                </Link>
              </div>
            </div>
          </section>

        </article>

        {/* Navigation CTAs */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <Link href="/knowledge-hub/tutorials" className="inline-flex items-center gap-2 text-aeo-cyan hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Explore All Tutorials</span>
          </Link>
          <Link href="/knowledge-hub/articles/machine-legibility-data-provenance" className="inline-flex items-center gap-2 text-aeo-purple hover:underline">
            <span>Read: Machine Legibility &amp; Data Provenance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
