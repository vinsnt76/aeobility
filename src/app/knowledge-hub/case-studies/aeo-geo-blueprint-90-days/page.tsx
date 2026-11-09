import React from "react";
import Script from "next/script";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import SubNavPills from "@/components/navigation/SubNavPills";
import { HUB_SUBNAV_MAPS } from "@/components/navigation/NavData";
import { BarChart3, FileText, Download, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "90-Day AEO & GEO Case Study: Commercial Discovery | AEObility",
  description:
    "78-day AEO & GEO case study on a fresh domain. Resolving entity ambiguity to achieve Page 1 positions (pos 4–9) across 75k core commercial impressions in Perth and national Australian query sets.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
  },
};

export default function First90DaysCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["TechArticle", "AnalysisNewsArticle"],
    headline: "From Entity Ambiguity to Commercial Discovery",
    description:
      "78-day AEO & GEO case study on a fresh domain. Resolving entity ambiguity to achieve Page 1 positions (pos 4–9) across 75k core commercial impressions in Perth and national Australian query sets.",
    about: [
      {
        "@type": "Thing",
        name: "Answer Engine Optimisation",
      },
      {
        "@type": "Thing",
        name: "Generative Engine Optimisation",
      },
      {
        "@type": "Place",
        name: "Perth, Western Australia",
      },
      {
        "@type": "Thing",
        name: "Australian AI Citation Index",
      }
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "SEObility",
        sameAs: "https://www.seobility.net/"
      },
      {
        "@type": "Organization",
        name: "Aerobility",
        sameAs: "https://www.aerobility.com/"
      },
      {
        "@type": "Organization",
        name: "AEO Services",
        sameAs: "https://aeoservices.com.au/"
      }
    ],
    author: {
      "@type": "Person",
      name: "Vince Baker",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      name: "AEObility",
      legalName: "AEObility",
      identifier: "ABN 61 029 803 255",
      logo: {
        "@type": "ImageObject",
        url: "https://aeobility.com.au/images/brand/logo.png",
      },
    },
    datePublished: "2026-09-16T00:00:00+08:00",
    dateModified: "2026-10-31T00:00:00+08:00",
    mainEntityOfPage:
      "https://aeobility.com.au/knowledge-hub/case-studies/aeo-geo-blueprint-90-days",
    citation:
      "https://aeobility.com.au/knowledge-hub/articles/structured-data-query-fan-out",
  };

  const queries = [
    {
      query: "aeo services perth",
      impressions: 58000,
      position: 9.0,
      salience: 75.99,
      salienceScore: 44117,
    },
    {
      query: "aeo seo australia",
      impressions: 17000,
      position: 4.0,
      salience: 83.69,
      salienceScore: 14626,
    },
    {
      query: "Homepage Baseline (/)",
      impressions: 422000,
      position: 64.6,
      salience: 21.18,
    },
    {
      query: "AEO Services (/services/aeo)",
      impressions: 77000,
      position: 80.8,
      salience: 5.3,
    },
  ];

  const aiCitations = [
    { asset: "Structured Data Query Fan-Out", citations: 1052 },
    { asset: "Optimising for Different AI Search Engines", citations: 13 },
    { asset: "AEO Guide", citations: 10 },
  ];
  const maxCitations = Math.max(...aiCitations.map((c) => c.citations));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-aeo-cyan/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-6 py-8 w-full space-y-16 relative z-10 flex-grow">
        {/* Back Link to Case Studies Index */}
        <div className="pt-2">
          <Link
            href="/knowledge-hub/case-studies"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 hover:text-white hover:bg-white/10 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-medium font-mono uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>AEO/GEO Benchmark Report</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From entity ambiguity to commercial discovery
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-200 leading-[1.2]">
              The AEO/GEO Blueprint Methodology
            </h2>
          </div>

          <div className="bg-zinc-950/80 border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs text-slate-300 font-mono shadow-md backdrop-blur-sm">
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Publication Date
              </strong>
              <span>16 September 2026</span>
              <span className="text-slate-300 text-sm block">Data cut‑off: 16 September 2026 AWST. Results cover 1 July – 16 September 2026 (78 days).</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Reporting Window
              </strong>
              <span>1 July 2026 to 16 September 2026</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <div className="space-y-1">
              <strong className="text-white font-sans text-sm block">
                Phase 1 Cohort Window
              </strong>
              <span>1 July 2026 to 16 September 2026 (Q3 Window)</span>
            </div>
          </div>
        </header>

        <section className="space-y-8 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            The AEO/GEO Blueprint Methodology
          </h2>

          {/* Macro Cluster Architecture Telemetry Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="bg-zinc-950/80 border border-white/10 p-4 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-mono font-extrabold text-cyan-400">41</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Entities Mapped</div>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 p-4 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-mono font-extrabold text-cyan-400">7</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Topic Clusters</div>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 p-4 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-mono font-extrabold text-cyan-400">43</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">URLs Analysed</div>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 p-4 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-mono font-extrabold text-cyan-400">0.95</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Avg Semantic Pos</div>
            </div>
          </div>

          <details className="mt-6 text-slate-300 bg-zinc-950/80 border border-white/10 rounded-2xl p-5 shadow-md">
            <summary className="cursor-pointer font-semibold text-white flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Evidence & Data Sources (Looker Studio Telemetry Report PDF)</span>
            </summary>
            <div className="mt-4 space-y-4 pt-4 border-t border-white/10">
              <ul className="list-disc ml-5 space-y-1.5 text-sm text-slate-300">
                <li>
                  <strong>Internal Telemetry Dashboard (Looker Studio)</strong>: 58K impressions, avg. position 9 for “aeo services perth” (Salience Score: 44,117); 17K impressions, avg. position 4 for “aeo seo australia” (Salience Score: 14,626).
                </li>
                <li>
                  <strong>Google Search Console (1 July – 16 September 2026)</strong>: +12% organic impressions across core query corridors.
                </li>
                <li>
                  <strong>External AI Citation Index (October 2026)</strong>: Australian AI Citation Index published by AEO Services (#8 overall, #1 in individual citation volume with 5 citations across Perplexity Sonar and OpenAI Search).
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/files/AI_Visibility_Report_AEObility.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-xs text-cyan-300 font-mono font-medium hover:bg-cyan-900/60 hover:text-white transition-all shadow-sm"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Open Full PDF Report</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400/80" />
                </a>
                <a
                  href="/files/AI_Visibility_Report_AEObility.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono font-medium hover:bg-white/10 hover:text-white transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Download PDF Document</span>
                </a>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="mt-4 rounded-xl border border-white/10 overflow-hidden bg-black/60 shadow-lg">
                <div className="bg-black/80 px-4 py-2.5 text-xs font-mono text-slate-400 border-b border-white/10 flex items-center justify-between">
                  <span>Looker Studio Evidence Telemetry PDF (Jul 1 – Sep 16, 2026)</span>
                  <span className="text-cyan-400 font-semibold">Verified Proof Document</span>
                </div>
                <iframe
                  src="/files/AI_Visibility_Report_AEObility.pdf#toolbar=0"
                  className="w-full h-[650px] bg-zinc-900 border-none"
                  title="AEObility Looker Studio AI Visibility Evidence Report"
                />
              </div>
            </div>
          </details>
          <p className="font-sans text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            AEObility recorded a +35% uplift in search exposure during the first 30 days of structural graph deployment.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Independent search-platform telemetry (Google Search Console, 1 July – 16 September 2026) confirms 75,000 total impressions across primary commercial query sets (58K for &quot;aeo services perth&quot; and 17K for &quot;aeo seo australia&quot;), corroborating internal graph salience scores.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-sm backdrop-blur-sm mb-8">
            <table className="w-full text-left text-sm font-sans">
              <thead className="bg-black/40 border-b border-white/10 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Cohort Focus</th>
                  <th className="px-4 py-3 font-semibold">Target / Baseline</th>
                  <th className="px-4 py-3 font-semibold">Avg Position</th>
                  <th className="px-4 py-3 font-semibold">Impressions</th>
                  <th className="px-4 py-3 font-semibold">Salience Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-400">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-4 font-medium text-cyan-400">Local Authority</td>
                  <td className="px-4 py-4 italic">aeo services perth</td>
                  <td className="px-4 py-4 font-mono">9.0</td>
                  <td className="px-4 py-4 font-mono">58,000 (58K)</td>
                  <td className="px-4 py-4 font-mono">75.99%</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-4 font-medium text-cyan-400">National Reach</td>
                  <td className="px-4 py-4 italic">aeo seo australia</td>
                  <td className="px-4 py-4 font-mono">4.0</td>
                  <td className="px-4 py-4 font-mono">17,000 (17K)</td>
                  <td className="px-4 py-4 font-mono">83.69%</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors text-slate-500">
                  <td className="px-4 py-4 font-medium">Sitewide Baseline</td>
                  <td className="px-4 py-4 italic">AEO Services (/services/aeo)</td>
                  <td className="px-4 py-4 font-mono">80.8</td>
                  <td className="px-4 py-4 font-mono">77,000 (77K)</td>
                  <td className="px-4 py-4 font-mono">5.30%</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors text-slate-500">
                  <td className="px-4 py-4 font-medium">Sitewide Baseline</td>
                  <td className="px-4 py-4 italic">Homepage Baseline (/)</td>
                  <td className="px-4 py-4 font-mono">64.6</td>
                  <td className="px-4 py-4 font-mono">422,000 (422K)</td>
                  <td className="px-4 py-4 font-mono">21.18%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Entering a competitive digital marketing sector on a brand-new
            domain requires explicit machine readability, clear entity
            disambiguation, and structured retrieval readiness. Between 1 July 2026 and 16 September 2026, AEObility executed the
            opening 78 days of its{" "}
            <Link
              href="/solutions/aeo-blueprint"
              className="text-cyan-400 hover:underline font-semibold"
              data-gtag-event="case-study-view"
            >
              90-Day Blueprint
            </Link>{" "}
            across its primary digital property. Rather than relying on legacy
            domain authority or backlink accumulation, AEObility established
            canonical definitions for its brand, services, and location,
            engineered a semantic vector graph to govern internal link topology,
            and formatted answer blocks for direct citation across AI
            retrieval systems.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Across this initial 78-day window, internal query reports recorded
            strong early visibility across core commercial terms, generating a
            combined 75,000 impressions. Broader cluster data demonstrates
            established market visibility while defining a clear baseline for
            ongoing iterative optimisation.
          </p>
          <div className="mt-8">
            <Link
              href="/services/aeo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium font-sans text-slate-300 bg-transparent border border-slate-500/30 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Explore AEO Services
            </Link>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            1. The starting strategic challenge: Entity disambiguation and
            vulnerabilities
          </h2>

          <div className="space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Competitive footprint
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Established agencies commonly hold advantages in domain history,
              content breadth, and authority signals, defending primary search
              categories such as "AEO services" and "GEO marketing".
            </p>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Lexical and semantic collisions
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Because the domain had no prior historical footprint, early
              indexing faced immediate semantic and lexical collisions:
            </p>
            <ul className="space-y-4 pl-0 list-none">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Software Platforms:</strong> Direct lexical confusion
                  with SEObility (a global SEO tool platform).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Phonetic/Organisational Collisions:</strong> Vector
                  overlap with Aerobility (a UK aviation charity) and broad
                  category terms such as "mobility".
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Geographic Grounding:</strong> The immediate necessity
                  to anchor AEObility as a Perth-based Western Australian
                  ProfessionalService serving clients Australia-wide, preventing
                  misclassification as an offshore software tool or remote
                  directory.
                </span>
              </li>
            </ul>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-4">
              Cold-start and indexation risks
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              A fresh domain lacks historical graph connections, exposing the
              brand to specific structural vulnerabilities:
            </p>
            <ul className="space-y-4 pl-0 list-none">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Cold-Start Vulnerability:</strong> Unresolved entity
                  ambiguity can reduce the likelihood that retrieval systems
                  correctly associate a new brand with its intended category,
                  location, and services.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Categorical Ambiguity and Entity Conflation:</strong>{" "}
                  Algorithms risk conflating a new brand with established global
                  software or charities, diluting local commercial relevance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                  <strong>Perception Drift:</strong> Unstructured body text
                  allows search and retrieval systems to infer incorrect service
                  capabilities, resulting in inaccurate answer summaries.
                </span>
              </li>
            </ul>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-4">
              Disambiguation framework
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              To resolve entity ambiguity, AEObility deployed a four-part structural response:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Explicit Schema Typing
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Implemented precise Schema.org ProfessionalService and
                  Organization JSON-LD graphs across all primary nodes.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Geographic Scoping
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Declared Perth, Western Australia geographic coordinates
                  (-31.9523, 115.8613), Australian Business Number (ABN)
                  declarations, and explicit service area definitions.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  External Anchoring
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Corroborated brand facts across external knowledge profiles,
                  including Substack, Medium, LinkedIn, and Reddit.
                </p>
              </div>
              <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-2">
                  Semantic Topology
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-400">
                  Governed internal links via a vector model to explicitly
                  connect commercial offerings, founder profiles, and evidence
                  assets based on cosine similarity.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl">
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                <strong>Explicit Corrective Implementation:</strong> AEObility
                published a canonical Brand Facts directory, declared its
                Australian Business Number (ABN), attributed founder entity
                profiles, marked up geographic coordinates for Perth, Western
                Australia, and technically validated schema relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-medium font-mono uppercase tracking-wider">
              <span>Tri-Graph Architecture</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
              2. Vector-governed topology & SPO triple graph architecture
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            To eliminate ambiguity across AI search engines and RAG retrieval pipelines, AEObility drives its entire site architecture from a unified <strong>Single Source of Truth (SSOT)</strong>. Every page, commercial service, and technical article is mapped into a <strong>Semantic lattice map</strong> that uses a parent-child-sibling linking structure for conversion corridors and radial loops for L3 nodes to pass link equity back into the conversion corridors.
          </p>

          {/* Tri-Graph & SPO Visual Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-zinc-950/80 border border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  01. Entity Graph
                </div>
                <h3 className="font-display text-lg font-bold text-white">What Exists</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Defines canonical identity, organisation metadata, and Schema.org types bound to fully-qualified canonical URIs (<code className="text-cyan-300">@id</code>).
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-cyan-300/80">
                Subject Node: Canonical Entity
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-purple-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                  02. Semantic / Intent Graph
                </div>
                <h3 className="font-display text-lg font-bold text-white">How Concepts Link</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Algorithmically governs RAG retrieval space, contextual sub-nav topology, and high-affinity inter-node vector similarity.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-purple-300/80">
                Predicate: Contextual Relationship
              </div>
            </div>

            <div className="bg-zinc-950/80 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  03. Evidence Graph
                </div>
                <h3 className="font-display text-lg font-bold text-white">Where Claims Are Proven</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connects commercial offerings directly to empirical proof nodes, telemetry reports, and Looker Studio data.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-300/80">
                Object: Verifiable Evidence Node
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              Subject-Predicate-Object (SPO) Machine-Readable Triples
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Rather than presenting disconnected content, every commercial offering and technical claim is structured as an explicit machine-readable triple:
            </p>
            <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-cyan-400 block font-semibold uppercase text-[10px]">Subject (Entity)</span>
                <span className="text-white">/services/aeo#service</span>
              </div>
              <div className="text-cyan-500 font-bold hidden sm:block">➔</div>
              <div className="text-center sm:text-left">
                <span className="text-purple-400 block font-semibold uppercase text-[10px]">Predicate (Relationship)</span>
                <span className="text-white">/services/aeo/definition</span>
              </div>
              <div className="text-purple-500 font-bold hidden sm:block">➔</div>
              <div className="text-center sm:text-left">
                <span className="text-emerald-400 block font-semibold uppercase text-[10px]">Object (Evidence)</span>
                <span className="text-white">/case-studies/aeo-geo-blueprint-90-days</span>
              </div>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-4">
              Vector Space Encoding & Topology Control
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              At build time, entity nodes are encoded into a high-dimensional semantic vector space, evaluating pairwise inter-node similarity across the Information Architecture lattice. This pre-build hook automatically calibrates contextual link affinity and sub-navigation topology, ensuring LLMs and search crawlers traverse clean, topical pathways.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-mono italic">
              Note: This graph pipeline functions as an internal heuristic to structure high-affinity contextual linking and RAG answer extraction. Search crawlers and LLM engines parse the resulting deterministic HTML and structured JSON-LD output.
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            3. Phase 1 Architecture: Cold-Start Disambiguation
          </h2>

          <div className="my-10 max-w-xl mx-auto bg-zinc-900/50 border border-purple-500/20 rounded-2xl p-8 sm:p-10 text-center shadow-lg relative isolate overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="font-sans font-semibold text-slate-200 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                Core Brand Node: AEObility
              </div>
              <div className="text-slate-600">↓</div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Intent Families
                  </strong>
                  <span className="text-slate-400">
                    Category Nodes
                    <br />
                    Topic Clusters
                  </span>
                </div>
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Conversion Corridor
                  </strong>
                  <span className="text-slate-400">
                    High-Intent Offerings
                    <br />
                    Transparent Pricing
                  </span>
                </div>
                <div className="bg-black/40 px-4 py-3 rounded-lg border border-white/10 text-xs">
                  <strong className="text-cyan-400 block mb-1">
                    Radial Loops
                  </strong>
                  <span className="text-slate-400">
                    Contextual Links
                    <br />
                    Across Nodes
                  </span>
                </div>
              </div>
              <div className="text-slate-600">↓</div>
              <div className="font-sans font-semibold text-slate-200 bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                Off-Site Entity Corroboration Network
              </div>
              <div className="font-mono text-xs text-slate-500 mt-2">
                (Substack | Medium | LinkedIn | Reddit | Geo-Nodes)
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
                Days 1 to 30
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Entity Foundation
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Published canonical Brand Facts; implemented JSON-LD graph
                (Schema.org ProfessionalService), ABN declarations, founder
                attribution, Perth, Western Australia geographic coordinates
                (-31.9523, 115.8613), and external verification profiles on
                Substack, Medium, LinkedIn, and Reddit.
              </p>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2">
                Days 31 to 60
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Commercial Architecture
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Deployed an Intent-Family information architecture; established
                conversion corridors connecting educational articles to
                commercial service hubs; instituted radial internal linking to
                circulate context across brand, service, evidence, and founder
                pages.
              </p>
            </div>
            <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
                Days 61 to 78
              </h3>
              <strong className="font-sans text-sm text-slate-200 block mb-2">
                Retrieval Readiness and Observability
              </strong>
              <p className="font-sans text-sm text-slate-400">
                Implemented an answer-first section structure, using prominent
                placement as an editorial and retrieval-readiness hypothesis
                tested through AEObility's own methodology; structured atomic
                answer blocks (applying an internal editorial heuristic of 80 to
                120 words); tested open-protocol interfaces compatible with
                emerging NLWeb and Model Context Protocol (MCP) standards;
                instrumented telemetry reporting.{" "}
                <Link
                  href="/knowledge-hub/articles/structured-data-query-fan-out"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Read Query Fan-Out Study
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 bg-black/50 border border-white/10 p-6 sm:p-8 rounded-2xl">
            <h3 className="font-display text-lg font-bold text-slate-100 mb-4">
              Methodology and Data Interpretation
            </h3>
            <p className="font-sans text-sm text-slate-400 mb-6">
              How to Interpret the Evidence Sources. This case study reports
              data from three distinct, non-interchangeable systems:
            </p>
            <ul className="space-y-4 pl-0 list-none mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>Google Search Console (GSC):</strong> Records direct
                  organic Google Search clicks, impressions, click-through rate
                  (CTR), and average position across the measurement window
                  (filtered to Australia and property-level page variants).
                  Average position represents the average of the topmost
                  eligible URL across impressions, not a static SERP rank.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>Bing Webmaster Tools AI Performance:</strong> Reports
                  citations, cited pages, and sampled grounding-query data
                  across supported Microsoft AI experiences. Citation counts
                  indicate that a URL was referenced as a cited source; they do
                  not indicate answer placement, authority, rank, or conversion.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0"></div>
                <span className="font-sans text-sm text-slate-400">
                  <strong>AEObility Internal Looker Telemetry:</strong>{" "}
                  Proprietary diagnostic query and topic-cluster telemetry
                  tracking search exposure.{" "}
                  <strong>AEObility Adjusted Visibility Score (AAVS)</strong> is
                  an internal diagnostic metric that weights recorded
                  impressions against average position using a logarithmic
                  discount. <strong>Salience Share %</strong> represents
                  AEObility’s proprietary adjusted visibility share relative to
                  the defined benchmark set within that query family.
                </span>
              </li>
            </ul>
            <p className="font-sans text-xs text-slate-500 italic mb-8">
              Results are point-in-time, platform-specific, and query-set
              specific. They do not prove single-factor causation, guarantee
              future rankings or AI citations, or represent total market share.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-3">
                  What This Case Study Demonstrates
                </h4>
                <ul className="space-y-2 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Early visibility on a new domain for defined commercial
                      query sets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Observed AI citation activity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Implementation of an entity-first information
                      architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span className="font-sans text-xs text-slate-400">
                      Measurable movement between broad and focused query
                      clusters.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-slate-200 mb-3">
                  What This Case Study Does Not Demonstrate
                </h4>
                <ul className="space-y-2 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Causal ranking effects of individual SEO or AEO
                      techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Universal AI visibility or permanent rankings.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Increased revenue or sales conversions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">×</span>
                    <span className="font-sans text-xs text-slate-400">
                      Direct algorithmic ranking influence of private vector
                      similarity models.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            4. Empirical performance and results
          </h2>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-8">
              Early commercial query visibility
            </h3>
            <div className="space-y-8">
              {queries.map((item) => (
                <div key={item.query}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-slate-200">
                      {item.query}
                    </span>
                    <span className="font-mono text-sm font-semibold text-cyan-300">
                      {item.salience.toFixed(2)}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-black/50 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-aeo-cyan to-aeo-purple"
                      style={{ width: `${item.salience}%` }}
                    />
                  </div>

                  <div className="mt-2 text-xs text-slate-500 font-mono flex items-center justify-between">
                    <span>
                      <span className="text-slate-300">
                        {item.impressions.toLocaleString()}
                      </span>{" "}
                      impressions
                    </span>
                    <span>
                      Position{" "}
                      <span className="text-slate-300">
                        {item.position.toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-right">
              Source: AEObility Internal Visibility Telemetry
            </div>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-6">
            Commercial query analysis
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Location and Service Association:</strong> The two primary
            query definitions recorded a combined exposure of 75,000 impressions
            and defensible Page 1 positions (Avg Pos 9 for local Perth services with 44,117 salience score; Avg Pos 4 for national Australian SEO with 14,626 salience score)
            within internal Looker Studio telemetry.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Interpretation:</strong> This early result reflects observed
            visibility and salience for this narrowly defined query set, which
            is distinct from inferred entity recognition. It does not isolate
            the contribution of any single implementation, nor does it
            demonstrate universal ranking superiority across all engines,
            devices, or personalisation parameters.
          </p>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            <strong>Broader Market Distribution:</strong> The homepage baseline
            (422,000 impressions; 21.18% Salience Share; average position 64.6)
            and AEO Services baseline (77,000 impressions; 5.30% Salience Share;
            average position 80.8) confirm that broader category exposure
            remains distributed across competitive search results.
          </p>

          <div className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm mt-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-4">
              Qualitative intent capture
            </h3>
            <p className="font-sans text-sm text-slate-400 mb-6">
              The <code>/services/aeo/costs-timing</code> page recorded early pipeline interactions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-xl font-bold text-white">Single-digit impressions</div>
                <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Volume context
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="font-mono text-xl font-bold text-cyan-400">
                  Bottom-funnel clicks
                </div>
                <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  Interaction context
                </div>
              </div>
            </div>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              While the absolute volume remains too small to establish statistical significance or stable CTR benchmarks, the initial organic traffic flowing to transparent pricing assets confirms that specific bottom-funnel queries are successfully resolving to the targeted commercial corridor. This indicates qualitative intent alignment prior to scaling traffic volume.{" "}
              <Link
                href="/services/aeo/costs-timing"
                className="text-cyan-400 hover:underline font-semibold"
              >
                View AEO Costs & Milestones
              </Link>
              .
            </p>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug pt-8">
            Observed Bing AI performance citation data
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The Bing AI Performance report recorded a concentrated period of
            citation activity between 7 August and 12 August 2026, representing
            a point-in-time platform observation in supported Microsoft AI
            experiences.
          </p>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm mb-6 mt-6">
            <div className="space-y-8">
              {aiCitations.map((item) => (
                <div key={item.asset}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="font-sans text-sm font-semibold text-slate-200 truncate">
                      {item.asset}
                    </span>
                    <span className="font-mono text-sm font-semibold text-cyan-300">
                      {item.citations.toLocaleString()}
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-black/50 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-aeo-cyan to-aeo-cyan"
                      style={{
                        width: `${(item.citations / maxCitations) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <strong className="font-sans text-sm text-slate-200 block mb-3">
                Grounding Queries (Sampled by Bing):
              </strong>
              <ul className="space-y-3 pl-0 list-none">
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "essential features of query fan-out aware content tools"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    666 citations (4.53%)
                  </span>
                </li>
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "solutions optimised for query fan-out scenarios"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    334 citations (7.40%)
                  </span>
                </li>
                <li className="font-sans text-sm text-slate-400 flex justify-between">
                  <span className="italic">
                    "content best practices query fan-out scenarios"
                  </span>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap ml-4">
                    10 citations (12.82%)
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono text-right">
              Source: Bing AI Performance
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The grounding-query data suggests the page was associated with
            related query-fan-out topics in supported Microsoft AI experiences.
            This constitutes an observation of platform-reported citations; it
            does not demonstrate exact retrieval-pipeline operations, algorithm
            mechanics, or sustained citation placement.
          </p>

          <div className="mt-12">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug mb-4">
              Point-in-Time AI Retrieval Test Log
            </h3>
            <p className="font-sans text-xs text-slate-500 mb-4">
              Note: AI-search mentions and citations are logged separately using
              dated, reproducible prompt tests. These observations reflect
              point-in-time outputs and vary by model checkpoint, interface,
              geography, and index state.
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/80 shadow-sm backdrop-blur-sm">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-black/40 border-b border-white/10 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Test Date</th>
                    <th className="px-4 py-3 font-semibold">
                      Engine / Interface
                    </th>
                    <th className="px-4 py-3 font-semibold">Prompt Tested</th>
                    <th className="px-4 py-3 font-semibold">
                      Retrieval Result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-400">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-09-02</td>
                    <td className="px-4 py-4">Claude 3.5 Sonnet</td>
                    <td className="px-4 py-4 italic">
                      "Compare AEO vs SEO consultants Perth"
                    </td>
                    <td className="px-4 py-4 text-slate-500 font-medium">
                      Not Observed
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-28</td>
                    <td className="px-4 py-4">ChatGPT (Search)</td>
                    <td className="px-4 py-4 italic">
                      "Top national digital agencies Australia"
                    </td>
                    <td className="px-4 py-4 text-slate-500 font-medium">
                      Not Observed
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-20</td>
                    <td className="px-4 py-4">Perplexity AI</td>
                    <td className="px-4 py-4 italic">
                      "AEO agency Perth Western Australia"
                    </td>
                    <td className="px-4 py-4 text-purple-400 font-medium">
                      Mentioned
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-14</td>
                    <td className="px-4 py-4">Bing Copilot</td>
                    <td className="px-4 py-4 italic">
                      "solutions optimised for query fan-out scenarios"
                    </td>
                    <td className="px-4 py-4 text-cyan-400 font-medium">
                      Cited
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-mono text-xs">2026-08-12</td>
                    <td className="px-4 py-4">Bing Copilot</td>
                    <td className="px-4 py-4 italic">
                      "essential features of query fan-out aware content tools"
                    </td>
                    <td className="px-4 py-4 text-cyan-400 font-medium">
                      Cited
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Independent External Validation - October 2026 */}
          <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-zinc-950/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Third-Party Benchmark
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
              Independent External Validation - October 2026
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
              Following publication of the 90-day AEO blueprint, AEObility's AI visibility received further external validation through the October 2026 Australian AI Citation Index, published by AEO Services.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6 mb-6">
              <h4 className="font-sans text-sm font-semibold text-slate-200 mb-4">
                In the index's commercially oriented assessment of 10 AEO agency-hiring questions:
              </h4>
              <ul className="space-y-3 pl-0 list-none font-sans text-sm sm:text-base text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-200">AEObility ranked #8 overall</strong> among the providers listed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Highest individual citation volume:</strong> Its own domain pages received five citations, the highest individual citation volume recorded among the listed providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Perplexity Sonar</strong> cited AEObility in two of the ten hiring-related questions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>
                    <strong className="text-slate-200">OpenAI with Web Search:</strong> A separate OpenAI model with web search also cited AEObility in one question.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
              <p>
                The ranking prioritised coverage across distinct hiring questions, which placed AEObility behind providers appearing in three questions, despite its higher individual citation volume.
              </p>
              <p>
                This is particularly relevant given the original blueprint's focus on overcoming entity ambiguity and establishing AI discoverability from a new domain.
              </p>
              <p>
                The October findings provide external evidence that AEObility's own website was being retrieved and cited in commercially relevant AI provider searches following publication of the blueprint.
              </p>
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-slate-300">
                <p className="font-semibold text-white mb-1">The significance:</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  The exercise moved beyond demonstrating that AEObility could make itself visible in AI answers about its own brand. It recorded citations in questions where users were actively seeking AEO service providers.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-500 font-mono">
              Source: AEO Services, Australian AI Citation Index, October 2026. The index represents an external measurement exercise, not an independent audit of the underlying implementation or its causal impact.
            </div>
          </div>
        </section>

        <section className="space-y-8 scroll-mt-24 border-t border-white/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-[1.2]">
            5. Strategic priorities for the next Blueprint phase
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            The dataset dictates a clear evolutionary path for the architecture.
            The transition from phase one to phase two revolves around{" "}
            <strong>Hub Rebalancing</strong>, executed through the following
            strategic priorities:
          </p>
          <ul className="space-y-4 pl-0 list-none mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Hub Rebalancing:</strong> Transition from concentrated
                commercial query visibility on the homepage to broader URL-level
                commercial relevance by shifting high-impression queries onto
                targeted service hubs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Corridor Link Densification:</strong> Strengthen
                contextual internal linking from informational knowledge-hub
                articles into primary commercial nodes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Answer-Block Refinement:</strong> Refine title,
                description, heading, and answer-block alignment for high-intent
                query variations.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Independent Corroboration:</strong> Expand third-party
                proof assets and directory profiles to further distinguish
                AEObility from similarly named global entities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Query Segmentation:</strong> Track branded, non-branded,
                local, and Australia-wide queries separately across external
                rank-tracking tools.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
              <span className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
                <strong>Commercial Conversion Tracking:</strong> Measure
                completed enquiry forms, diagnostic audits, and qualified calls
                alongside impressions, clicks, and salience.
              </span>
            </li>
          </ul>
        </section>

        <section className="scroll-mt-24 border-t border-white/10 pt-16 pb-8">
          <div className="bg-zinc-950/80 border border-white/10 p-8 sm:p-12 rounded-2xl shadow-lg backdrop-blur-sm text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug mb-4">
              Ready to validate your domain's AI retrieval readiness?
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              Stop guessing how AI search engines interpret your business. Run a
              targeted diagnostic or review our fixed-scope execution plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-sans text-white bg-gradient-to-r from-[#A855F7] to-[#7C3AED] rounded-lg hover:from-purple-400 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-400/20"
              >
                Execute AI Diagnostic
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium font-sans text-slate-200 bg-slate-900/80 border border-slate-400/40 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1)" }}
              >
                View $995 Strategic Blueprint
              </Link>
            </div>
            <div className="mt-6 font-mono text-[11px] text-slate-500 uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span>Zero lock-in contracts</span>
              <span className="hidden sm:inline">•</span>
              <span>2-minute real-time audit</span>
              <span className="hidden sm:inline">•</span>
              <span>No agency jargon</span>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
