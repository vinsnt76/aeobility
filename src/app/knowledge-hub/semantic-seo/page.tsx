import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Network, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Cpu, 
  Search, 
  CheckSquare, 
  ShieldCheck 
} from 'lucide-react';

export const metadata = {
  title: "AI Semantic SEO & AEO SEO Frameworks Australia | AEObility",
  description: "AI Semantic SEO and AEO SEO frameworks to transition from legacy keyword strings to relational topic graphs. Map RDF triples and build machine-readable entity salience.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/semantic-seo",
  },
};

export default function SemanticSEONodePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo",
        "url": "https://aeobility.com.au/knowledge-hub/semantic-seo",
        "name": "AI Semantic SEO & Entity-Based Layout Frameworks",
        "description": "Learn how Semantic SEO helps businesses move from keyword strings to relational topic graphs. AEObility in Perth explains how to map RDF triples, strengthen entity clarity, and build contextual salience across Search, Maps and AI.",
        "isPartOf": {
          "@id": "https://aeobility.com.au/knowledge-hub"
        },
        "breadcrumb": {
          "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#breadcrumb"
        }
      },
      {
        "@type": "Article",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#article",
        "headline": "AI Semantic SEO & Entity-Based Layout Frameworks",
        "articleSection": [
          "Moving from Strings to Entities",
          "How Large Language Models Embed Context",
          "Building High-Density Content Lattices",
          "Relational SEO Over Keyword Clustering",
          "Semantic Optimisation Checklist"
        ],
        "keywords": [
          "AI Semantic SEO",
          "entity-based optimisation",
          "semantic SEO",
          "RDF triples",
          "topic graphs",
          "semantic vectors",
          "predicate mapping",
          "LLM ingestion",
          "contextual salience",
          "AEObility Perth"
        ],
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#imageobject"
        },
        "author": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "publisher": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "datePublished": "2026-07",
        "dateModified": "2026-07"
      },
      {
        "@type": "ImageObject",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#imageobject",
        "url": "https://aeobility.com.au/images/knowledge-hub/semantic-seo-for-aeo-entities_AEObility.webp",
        "contentUrl": "https://aeobility.com.au/images/knowledge-hub/semantic-seo-for-aeo-entities_AEObility.webp",
        "encodingFormat": "image/webp",
        "name": "Cyberpunk Abstract Semantic SEO Visualisation",
        "description": "An abstract cyberpunk artwork visualising Semantic SEO relationships: cause->effect, problem->solution, feature->benefit, and prerequisite->outcome: using neon gradients and geometric shapes.",
        "creator": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "uploadDate": "2026-07-01",
        "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#creativework",
        "name": "Cyberpunk Abstract Visualisation of Semantic SEO Relationships",
        "description": "A neon cyberpunk visualisation showing how Semantic SEO connects cause-effect, problem-solution, feature-benefit, and prerequisite-outcome relationships.",
        "creator": {
          "@id": "https://aeobility.com.au/#vincebaker"
        },
        "image": {
          "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#imageobject"
        },
        "genre": "Abstract Cyberpunk Digital Art",
        "encodingFormat": "image/webp",
        "dateCreated": "2026-07",
        "contentLocation": {
          "@type": "Place",
          "name": "Perth, Western Australia"
        }
      },
      {
        "@type": "Person",
        "@id": "https://aeobility.com.au/#vincebaker",
        "name": "Vince Baker",
        "jobTitle": "Senior Information Architect & AEO Strategist",
        "description": "Author of AEObility’s technical guides on Semantic SEO, entity optimisation, and AI search architecture.",
        "worksFor": {
          "@id": "https://aeobility.com.au/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://aeobility.com.au/#organization",
        "name": "AEObility",
        "url": "https://aeobility.com.au",
        "logo": "https://aeobility.com.au/icons/android-chrome-512x512.png",
        "description": "AEObility helps Australian businesses appear, make sense, and stand out across Search, Maps & AI. Get Found. Get Chosen.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "Australia"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Knowledge Hub",
            "item": "https://aeobility.com.au/knowledge-hub"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Semantic SEO",
            "item": "https://aeobility.com.au/knowledge-hub/semantic-seo"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/knowledge-hub/semantic-seo#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an entity in Semantic SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An entity is a person, place, service, or concept that search engines can recognise and store in their knowledge databases. Clear entities help AI understand your business and recommend it confidently."
            }
          },
          {
            "@type": "Question",
            "name": "Why do topic graphs matter more than keywords?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Keywords show what you typed. Topic graphs show what you mean. AI uses relationships between topics to understand your services, not just the words on the page."
            }
          },
          {
            "@type": "Question",
            "name": "What is contextual salience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is how clearly your main topic stands out. When your page stays focused and uses related terms consistently, AI systems can interpret your content more accurately."
            }
          },
          {
            "@type": "Question",
            "name": "How do internal links help AI understand my site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Internal links act like relationship labels. They tell AI how your pages connect: whether something is a cause, effect, feature, benefit, or explanation."
            }
          },
          {
            "@type": "Question",
            "name": "What is an RDF triple?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a simple structure: subject -> predicate -> object. This helps machines understand how two things relate (for example, AEObility -> provides -> AEO services)."
            }
          },
          {
            "@type": "Question",
            "name": "What does high-density content lattice mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a structured cluster of pages that clearly connect through relationships. This makes your site easier for AI to parse and classify."
            }
          }
        ]
      }
    ]
  };

  const pillars = [
    {
      title: "Moving from Strings to Entities",
      desc: "Search engines no longer match exact keyword strings. They link relational facts to absolute brand entities stored in knowledge databases."
    },
    {
      title: "How Large Language Models Embed Context",
      desc: "LLMs map text into high-dimensional semantic vector spaces. Relational distance determines topical authority."
    },
    {
      title: "Building High-Density Content Lattices",
      desc: "Connect your content pages using explicit predicate mapping rules, forming a clean relational graph crawlers can easily parse."
    }
  ];

  const microFaqs = [
    {
      q: "What is an entity in Semantic SEO?",
      a: "An entity is a person, place, service, or concept that search engines can recognise and store in their knowledge databases. Clear entities help AI understand your business and recommend it confidently."
    },
    {
      q: "Why do topic graphs matter more than keywords?",
      a: "Keywords show what you typed. Topic graphs show what you mean. AI uses relationships between topics to understand your services, not just the words on the page."
    },
    {
      q: "What is contextual salience?",
      a: "It is how clearly your main topic stands out. When your page stays focused and uses related terms consistently, AI systems can interpret your content more accurately."
    },
    {
      q: "How do internal links help AI understand my site?",
      a: "Internal links act like relationship labels. They tell AI how your pages connect: whether something is a cause, effect, feature, benefit, or explanation."
    },
    {
      q: "What is an RDF triple?",
      a: "It is a simple structure: subject -> predicate -> object. This helps machines understand how two things relate (for example, AEObility -> provides -> AEO services)."
    },
    {
      q: "What does 'high-density content lattice' mean?",
      a: "It is a structured cluster of pages that clearly connect through relationships. This makes your site easier for AI to parse and classify."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aeo-cyan/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-aeo-purple/5 rounded-full filter blur-[120px] -z-10" />

      <Navbar />
      <SubNavPills items={HUB_SUBNAV_MAPS.knowledgeHub} />
      <Breadcrumbs />

      {/* Main Container */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold mb-4">
              <span>AI Semantic SEO &amp; Entity Based Optimisation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              AI Semantic SEO &amp; AEO SEO: <span className="text-gradient-aeo">Entity‑Based Frameworks</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Semantic SEO is about helping search engines and AI understand what your business actually offers: not just the keywords on the page. Instead of matching strings, modern systems look at how your topics connect and how clearly your main ideas are expressed. Aligning with our <Link href="/services/aeo/definition" className="text-aeo-cyan hover:underline font-semibold">foundational AEO definition</Link> and <Link href="/knowledge-hub/aeo" className="text-aeo-cyan hover:underline font-semibold">AEO Core Principles</Link> reinforces this shift.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 border-t border-b border-white/10 py-4 mt-6">
              <span>Organisation: <strong className="text-white">AEObility</strong></span>
              <span>&bull;</span>
              <span>Location: <strong className="text-white">Perth, Western Australia</strong></span>
              <span>&bull;</span>
              <span>Service / Topic: <strong className="text-white">Semantic SEO</strong></span>
              <span>&bull;</span>
              <span>Author: <Link href="/about/freelance-seo-consultant-perth" className="text-aeo-cyan hover:underline font-semibold">Vince Baker</Link></span>
            </div>

            {/* Atomic Answer Block for AI Retrieval */}
            <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/90 border border-aeo-cyan/30 text-left space-y-2.5 shadow-[0_0_25px_rgba(0,229,255,0.1)] mt-6">
              <div className="flex items-center gap-2 text-aeo-cyan font-mono font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>Atomic Summary: AI Semantic SEO &amp; Entity Relationships</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-sans leading-relaxed">
                AI Semantic SEO replaces legacy keyword stuffing with machine-readable RDF triples (Subject &rarr; Predicate &rarr; Object) to establish high-salience topic graphs. In modern <strong>AEO SEO</strong> and <strong>AI SEO</strong>, search engines evaluate entity relationships rather than isolated keywords. AEObility structures business facts, services, and credentials into verifiable content lattices so Large Language Models and vector search engines across Australia can index and cite your brand with high confidence.
              </p>
            </div>

            {/* Page Banner Image */}
            <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl mt-6">
              <Image
                src="/images/knowledge-hub/semantic-seo-for-aeo-entities_AEObility.webp"
                alt="High-tech AI Semantic SEO and entity-based layout framework diagram illustrating RDF triple mapping, topic vector graphs, and Answer Engine Optimisation (AEO) entity salience by AEObility in Perth, Western Australia."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          </div>

          <p className="text-white/75 text-base sm:text-lg leading-relaxed font-light bg-white/[0.01] p-5 rounded-2xl border border-white/5">
            At AEObility here in Perth, we map these relationships so machines can recognise your business, understand your services, and confidently use your content across Search, Maps and AI. Learn <Link href="/knowledge-hub/articles/entity-authority-building" className="text-aeo-cyan hover:underline font-semibold">what entity clarity means</Link> for your digital presence. This guidance is written by Vince Baker as part of AEObility’s ongoing effort to make complex AI concepts simple, practical and useful for Australian businesses.
          </p>

          {/* Technical Snapshot Banner */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-aeo-cyan uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Snapshot: Subject-Predicate-Object Mapping</span>
            </div>
            
            {/* Graphic mapping interconnected semantic circles representing complex technical entity nodes */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.06),transparent_60%)]" />
              <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Entity Relationship Graph</span>
                <span className="text-[9px] font-mono text-aeo-purple bg-aeo-purple/10 px-2 py-0.5 rounded border border-aeo-purple/20">RDF Triple Map</span>
              </div>
              <div className="relative h-24 my-auto flex justify-center items-center gap-8 z-10">
                <div className="w-16 h-16 rounded-full border border-aeo-cyan flex items-center justify-center bg-aeo-cyan/5 text-[9px] font-mono text-white text-center">Subject (Brand)</div>
                <div className="h-[2px] w-12 bg-gradient-to-r from-aeo-cyan to-aeo-purple relative flex items-center justify-center">
                  <span className="absolute -top-3 text-[8px] font-mono text-white/40">predicate</span>
                </div>
                <div className="w-16 h-16 rounded-full border border-aeo-purple flex items-center justify-center bg-aeo-purple/5 text-[9px] font-mono text-white text-center">Object (Service)</div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-10 pt-3 border-t border-white/5">
                <span>Knowledge Graph Path: Active</span>
                <span>Semantic Vector Dimensions: 1536</span>
              </div>
            </div>
          </div>

          {/* How Semantic SEO maps and understands entity relationships */}
          <section className="space-y-8 border-t border-white/10 pt-10">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                How does Semantic SEO map and understand relationships between entities?
              </h2>

              {/* Atomic Answer Block */}
              <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 via-neutral-900 to-transparent border-l-4 border-aeo-cyan rounded-r-xl space-y-2">
                <span className="text-xs text-aeo-cyan font-mono font-bold uppercase">Atomic Answer: Entity Relationships</span>
                <p className="text-sm text-white/90 font-medium leading-relaxed">
                  Search engines no longer rely on exact keyword matches. They interpret your site as a set of connected entities and the relationships between them. When these relationships are clear, AI systems can understand your business, classify your services, and recommend you confidently across <Link href="/knowledge-hub/geo" className="text-aeo-cyan hover:underline font-semibold">Generative Engine Optimisation (GEO)</Link> channels.
                </p>
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                Search engines and AI models read your website as a <strong>connected knowledge corpus</strong>: a set of entities (people, places, services, concepts) and the relationships that link them. When these relationships are clear, your business becomes easier for machines to understand and easier for customers to find.
              </p>
              <p className="text-xs font-mono text-aeo-cyan uppercase tracking-wider font-semibold pt-2">
                Semantic SEO builds these relationships through four core mechanisms:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mechanism 1: Vector Embeddings */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <span className="w-6 h-6 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-xs font-mono">1</span>
                    <h3>Vector Embeddings: How AI Measures Meaning</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    Modern search engines do not &ldquo;see&rdquo; words: they see <strong>math</strong>. Every entity, sentence, and concept is converted into a high‑dimensional vector. The closer two vectors sit together, the more related they are. Discover <Link href="/knowledge-hub/articles/retrieval-augmented-generation" className="text-aeo-cyan hover:underline font-medium">how answer engines interpret context</Link>.
                  </p>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    This lets AI recognise meaning even when a keyword is not used. If your page talks about &ldquo;Primaris Marines,&rdquo; &ldquo;Citadel paints,&rdquo; and &ldquo;edge highlighting,&rdquo; the model understands you are talking about <strong>Space Marines</strong> because those concepts consistently appear together across the web.
                  </p>
                </div>
              </div>

              {/* Mechanism 2: Internal Linking */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <span className="w-6 h-6 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-xs font-mono">2</span>
                    <h3>Internal Linking: How You Declare Relationships</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    Internal links are no longer just for PageRank. They act as <strong>explicit relationship signals</strong> that teach AI <Link href="/knowledge-hub/articles/positional-bias-in-retrieval" className="text-aeo-cyan hover:underline font-medium">how internal links define relationships</Link>.
                  </p>
                  <div className="p-3 bg-white/5 rounded-xl text-xs font-mono text-aeo-cyan space-y-1">
                    <div>&bull; cause &rarr; effect</div>
                    <div>&bull; problem &rarr; solution</div>
                    <div>&bull; feature &rarr; benefit</div>
                    <div>&bull; prerequisite &rarr; outcome</div>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Instead of linking because a keyword matches, you link because a relationship exists. This builds your own private knowledge graph inside your domain.
                  </p>
                </div>
              </div>

              {/* Mechanism 3: Schema Markup */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <span className="w-6 h-6 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-xs font-mono">3</span>
                    <h3>Schema Markup: How You Remove Ambiguity</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    Schema helps search engines understand <strong>which entity</strong> you are talking about.
                  </p>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    If your page mentions &ldquo;Apple,&rdquo; schema tells the machine whether you mean the fruit or the company. Declaring <code className="text-aeo-cyan font-mono text-[11px]">Organisation</code>, <code className="text-aeo-cyan font-mono text-[11px]">Person</code>, <code className="text-aeo-cyan font-mono text-[11px]">Product</code>, or adding <code className="text-aeo-cyan font-mono text-[11px]">sameAs</code> links gives AI a clear, machine-readable reference point. This reduces confusion and strengthens your entity&apos;s position in the global Knowledge Graph.
                  </p>
                </div>
              </div>

              {/* Mechanism 4: Entity Salience & Monosemanticity */}
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3 hover:border-aeo-cyan/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <span className="w-6 h-6 rounded-full bg-aeo-cyan/20 text-aeo-cyan flex items-center justify-center text-xs font-mono">4</span>
                    <h3>Entity Salience &amp; Monosemanticity: How You Stay Clear</h3>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Two structural principles make your content easier for AI to interpret:
                  </p>
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="p-2.5 bg-white/5 rounded-lg">
                      <strong className="text-aeo-cyan">Entity Salience:</strong> Your main entity should be obvious from the start: in your H1, early paragraphs, and supporting sections.
                    </li>
                    <li className="p-2.5 bg-white/5 rounded-lg">
                      <strong className="text-aeo-cyan">Monosemanticity:</strong> Each paragraph should focus on one idea. When topics blend together, the model&apos;s attention becomes diluted and your meaning becomes harder to retrieve.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why This Matters Block */}
            <div className="p-5 bg-gradient-to-r from-aeo-cyan/10 to-transparent border border-aeo-cyan/20 rounded-xl space-y-2">
              <span className="text-xs font-mono text-aeo-cyan font-bold uppercase">Why This Matters for AI Search</span>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Clear structure leads to clear understanding: and clear understanding leads to visibility across generative AI answers.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-white/5 rounded-xl w-fit">
                  <Network className="w-5 h-5 text-aeo-cyan" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Dive Section */}
          <div className="space-y-6 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-bold text-white">Relational SEO Over Keyword Clustering</h2>
            
            <div className="space-y-4 text-sm text-white/80 font-light leading-relaxed">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase font-mono">1. What AI Does</h4>
                <p>
                  Traditional SEO agencies focus heavily on keywords, but AI search models look for contextual entity salience. When Google or OpenAI indexes site data, it builds a complex knowledge graph path connecting your business nodes to specific categories.
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase font-mono">2. Why It Matters</h4>
                <p>
                  By structuring page data into high-density content lattices using explicit RDF predicate mapping rules, you tell LLMs exactly who you serve and where, allowing them to categorise your brand confidently.
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                <h4 className="text-xs font-bold text-aeo-cyan uppercase font-mono">3. What Your Business Should Do</h4>
                <p>
                  Transition away from thin keyword pages toward interconnected topic hubs. Ensure every service page defines clear subjects, predicates, and objects.
                </p>
              </div>
            </div>
          </div>

          {/* Action List */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Semantic Optimisation Checklist</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Map RDF relationships to define subjects and predicates.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Optimise website copy density to increase entity salience scores.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Format internal links into a clear contextual semantic grid.</span>
              </li>
              <li className="flex gap-2 items-start text-xs font-light text-white/80">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan flex-shrink-0 mt-0.5" />
                <span>Test how transformers parse topic patterns on your site.</span>
              </li>
            </ul>
          </div>

          {/* Micro-FAQs Section */}
          <section className="space-y-6 border-t border-white/10 pt-10">
            <div className="flex items-center gap-2 text-xs font-bold text-aeo-cyan uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Semantic SEO Micro-FAQs</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Frequently Asked Questions About Semantic SEO &amp; Entities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {microFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 hover:border-aeo-cyan/30 transition-all">
                  <h4 className="text-sm font-bold text-white leading-snug">{faq.q}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing CTA */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/10 to-aeo-cyan/15 border border-white/5 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Claim Your Entity Analysis</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
              Find out if search machines represent your services correctly. <Link href="/diagnostic" className="text-aeo-cyan hover:underline font-semibold">Get your free visibility audit</Link> with AEObility today.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/diagnostic"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-300"
              >
                <span>Get Your Free Visibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
