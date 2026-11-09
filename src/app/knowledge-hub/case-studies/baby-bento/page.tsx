import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import SubNavPills from '@/components/navigation/SubNavPills';
import { HUB_SUBNAV_MAPS } from '@/components/navigation/NavData';

export const metadata = {
  title: "Case Study: Structural Search Alignment | AEObility",
  description: "See how structural search alignment reversed declining organic momentum and delivered a +17% sales uplift for a prominent ecommerce store.",
  alternates: {
    canonical: "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",
  },
};

export default function BabyBentoCaseStudyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento",

    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento"
    },

    "headline": "Case Study: Baby Bento — Structural Search Alignment & AI Visibility Recovery",
    "alternativeHeadline": "How AEObility Rebuilt Clarity and Drove a +17% Sales Uplift",

    "description": "Discover how AEObility restored structural clarity, rebuilt intent alignment, and lifted Baby Bento’s AI search visibility — resulting in a 17–18% sales uplift, 95% CTR improvement, and reduced discount dependency.",

    "keywords": [
      "Baby Bento case study",
      "AI search visibility",
      "AEO case study",
      "Australian ecommerce",
      "structural optimisation",
      "organic growth study",
      "answer engine optimisation"
    ],

    "image": "https://aeobility.com.au/_next/image?url=%2Fcase-study-aeo-lifts-traffic.webp&w=750&q=75",

    "author": {
      "@type": "Person",
      "name": "Vince Baker",
      "url": "https://aeobility.com.au/vince-baker"
    },

    "publisher": {
      "@type": "Organization",
      "@id": "https://aeobility.com.au/#organization",
      "name": "AEObility",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aeobility.com.au/icons/android-chrome-192x192.png"
      }
    },

    "datePublished": "2026-07-16",
    "dateCreated": "2026-07-16",
    "dateModified": "2026-07-16",

    "inLanguage": "en-AU",
    "articleSection": "Case Studies",

    "about": [
      {
        "@type": "Thing",
        "@id": "https://aeobility.com.au/services/aeo#service",
        "name": "Answer Engine Optimisation"
      },
      {
        "@type": "Thing",
        "name": "Baby Bento",
        "description": "Australian ecommerce brand specialising in kids’ lunchboxes, insulated food jars, and eco-friendly lunch solutions."
      }
    ],

    "mainEntity": {
      "@id": "https://aeobility.com.au/services/aeo#service"
    },

    "audience": {
      "@type": "Audience",
      "audienceType": "Australian ecommerce operators"
    },

    "genre": "AI Search Visibility Case Study",

    "isPartOf": {
      "@type": "CreativeWorkSeries",
      "name": "AEObility Knowledge Hub",
      "url": "https://aeobility.com.au/knowledge-hub"
    },

    "mentions": [
      {
        "@type": "WebPage",
        "url": "https://aeobility.com.au/services/aeo",
        "name": "AEO Services"
      },
      {
        "@type": "WebPage",
        "url": "https://aeobility.com.au/services/aeo/shopify",
        "name": "AEO for Shopify"
      }
    ],


    "articleBody": "Organic momentum was slipping, discount dependency was rising, and search engines had lost clarity around Baby Bento’s entity structure. AEObility rebuilt structural clarity using schema injection, intent-aligned routing, and conversational content alignment. This led to a 17–18% sales uplift, 95% CTR improvement, and +55% qualified clicks. Baby Bento’s turnaround wasn’t driven by more content, more keywords, or more ads. It was driven by structural clarity, intent alignment, and answer-engine readability.",

    "potentialAction": {
      "@type": "ReadAction",
      "target": "https://aeobility.com.au/knowledge-hub/case-studies/baby-bento"
    }
  };

  const keyStats = [
    { value: "+17–18%", label: "Core Sales Uplift" },
    { value: "+95%", label: "CTR Improvement" },
    { value: "+55%", label: "Qualified Clicks" },
    { value: "+29%", label: "Ranking Position" },
    { value: "+28%", label: "On‑Site Engagement" }
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
        <section className="flex flex-col gap-12">
          
          {/* Header Block */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-semibold">
              <span>Case Studies &rarr; <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link></span>
            </div>
            
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
              <Image
                src="/images/knowledge-hub/case-study-aeo-lifts-traffic.webp"
                alt="Graph illustrating improved CTR, ranking position, and qualified organic traffic following AEObility’s structural optimisation."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              How Structural Search Alignment Drove a +17% Sales Uplift
            </h1>
            <p className="text-white/80 text-lg leading-relaxed font-light font-serif">
              A real‑world case study showing how AEObility rebuilt clarity, intent alignment, and organic momentum for a prominent ecommerce store.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            {keyStats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-aeo-cyan font-soehne-breit">{stat.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="space-y-4">
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento entered the year with steady activity but fading organic momentum. Search engines were losing clarity, high‑intent traffic was slipping, and promotions were doing most of the heavy lifting. Margins tightened. Returns crept up. The business was working harder for the same results.
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              In the second half of the year, everything changed.
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              After implementing AEObility’s structural optimisation framework, Baby Bento recorded a 17–18% uplift in core sales, a 95% CTR improvement, and a clear reduction in discount dependency. This wasn’t achieved through more content, more keywords, or more ads. It was achieved by rebuilding clarity — the thing modern AI search engines rely on most.
            </p>
          </div>

          {/* Baseline Challenge */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">The Baseline Problem: Search Engines Had Lost the Plot</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Full‑year telemetry showed a simple truth:<br />
              <strong>search engines no longer understood the business.</strong>
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Discount volume had blown out by +46% YoY, returns were up +39% YoY, and organic momentum was sliding. When clarity drops, high‑intent traffic disappears. Promotions become the only lever left.
            </p>
            <blockquote className="border-l-2 border-aeo-cyan pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines lose clarity, your high‑intent traffic disappears. Promotions become the only lever left to hit targets.&rdquo;
            </blockquote>
          </div>

          {/* Chart 1: Baseline Pressure (Bar Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Full-Year Baseline Pressure (YoY Growth %)</h4>
            <div className="space-y-4 pt-4">
              {/* Discount Growth Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Discount Volume Growth</span>
                  <span className="text-red-400">+46% YoY</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-red-500/30 border-r border-red-400 h-full rounded-full" style={{ width: '46%' }} />
                </div>
              </div>
              {/* Return Growth Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Product Return Growth</span>
                  <span className="text-orange-400">+39% YoY</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-orange-500/30 border-r border-orange-400 h-full rounded-full" style={{ width: '39%' }} />
                </div>
              </div>
              {/* Organic Momentum Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Organic Search Momentum</span>
                  <span className="text-neutral-400">Declining</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-white/10 border-r border-white/20 h-full rounded-full" style={{ width: '15%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* The Pivot */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">The Pivot: Structural Alignment Over Keyword Volume</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Baby Bento replaced legacy SEO tactics with AEObility’s structural optimisation pillars — a clarity‑first rebuild designed for modern AI engines:
            </p>
            <ul className="space-y-4 pl-4 pt-2">
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">1.</span>
                <div>
                  <strong className="text-white">Product Schema Injector:</strong> Rich schema attributes made product specifications readable to AI systems that rank based on entity understanding, not keyword density.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">2.</span>
                <div>
                  <strong className="text-white">Collection Architecture Re‑engineering:</strong> Routing and hierarchy were rebuilt around intent clusters, giving search engines a clean, interpretable structure.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">3.</span>
                <div>
                  <strong className="text-white">Guide Engine JS Deployment:</strong> Interactive decision assistants created strong crawl signals and helped users choose products with confidence.
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70 font-serif font-light">
                <span className="text-aeo-cyan font-bold">4.</span>
                <div>
                  <strong className="text-white">Intent‑Driven Content Alignment:</strong> Unhelpful content nodes were pruned. Product copy was aligned to conversational search criteria — the way AI actually evaluates relevance.
                </div>
              </li>
            </ul>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif mt-4">
              This wasn’t “more SEO.”<br />
              It was structural clarity.
            </p>
          </div>

          {/* Technical Performance */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Technical Performance Signals: Refinement Over Reach</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Google Search Console showed a clear refinement pattern. Total impressions dropped, but qualified engagement surged.
            </p>
            <blockquote className="border-l-2 border-aeo-purple pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;Fewer impressions. Better impressions. Search engines stopped serving low‑intent queries and focused on conversion intent.&rdquo;
            </blockquote>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              <strong>CTR:</strong> +94%<br />
              <strong>Impressions:</strong> &ndash;20%
            </p>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              This is what happens when AI engines finally understand what a business is and who it serves.
            </p>
          </div>

          {/* Chart 2: Search Quality Shift (Line Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Search Quality Shift (Impressions vs CTR)</h4>
            <div className="relative h-48 w-full pt-4">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* Horizontal gridlines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                {/* Line 1: Impressions (Declining) - Red */}
                <path
                  d="M 20 40 L 100 60 L 180 80 L 260 110 L 340 125"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                {/* Dots for Line 1 */}
                <circle cx="20" cy="40" r="4" fill="#ef4444" />
                <circle cx="340" cy="125" r="4" fill="#ef4444" />

                {/* Line 2: Click-Through Rate (Rising) - Green */}
                <path
                  d="M 20 130 L 100 100 L 180 65 L 260 45 L 340 20"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                {/* Dots for Line 2 */}
                <circle cx="20" cy="130" r="4" fill="#10b981" />
                <circle cx="340" cy="20" r="4" fill="#10b981" />

                {/* Text Labels */}
                <text x="350" y="25" fill="#10b981" fontSize="10" fontWeight="bold">CTR +94%</text>
                <text x="350" y="130" fill="#ef4444" fontSize="10" fontWeight="bold">Imp -20%</text>
              </svg>
            </div>
            <div className="flex justify-center gap-6 text-[10px] text-white/50 uppercase tracking-widest font-semibold pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <span>Impressions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span>Click-Through Rate</span>
              </div>
            </div>
          </div>

          {/* On-Site Behaviour */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">On‑Site Behaviour: Deeper, More Intent‑Aligned Engagement</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              GA4 confirmed the shift:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="text-sm font-semibold text-white">Average Engagement Time</div>
                <div className="text-lg font-bold text-aeo-cyan mt-1">+28.0%</div>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="text-sm font-semibold text-white">Total Event Count</div>
                <div className="text-lg font-bold text-aeo-cyan mt-1">+24.8%</div>
              </div>
            </div>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif mt-2">
              Users stayed longer, explored more, and took more meaningful actions. High‑intent traffic behaves differently when the structure matches the intent.
            </p>
          </div>

          {/* Chart 3: Engagement Depth (Bar Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">On-Site User Engagement Depth (Growth %)</h4>
            <div className="space-y-4 pt-4">
              {/* Engagement Time Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Engagement Time</span>
                  <span className="text-aeo-cyan">+28%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-aeo-cyan/30 border-r border-aeo-cyan h-full rounded-full" style={{ width: '28%' }} />
                </div>
              </div>
              {/* Event Count Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-white/60">
                  <span>Event Count (Actions taken)</span>
                  <span className="text-aeo-cyan">+24.8%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-aeo-cyan/30 border-r border-aeo-cyan h-full rounded-full" style={{ width: '24.8%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Inflection */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Commercial Inflection: H2 Recovery</h2>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              The second half of the year showed a clear commercial reversal:
            </p>
            <ul className="list-disc pl-5 text-sm text-white/70 font-light leading-relaxed font-serif space-y-1">
              <li><strong>Sales:</strong> +17%</li>
              <li><strong>Discount growth moderated:</strong> from +46% &rarr; +28%</li>
            </ul>
            <blockquote className="border-l-2 border-pink-500 pl-4 my-6 text-sm text-white/50 font-serif italic">
              &ldquo;When search engines understand your business value, customers find you without needing a constant discount.&rdquo;
            </blockquote>
            <p className="text-sm text-white/70 font-light leading-relaxed font-serif">
              Returns rose in H2, but only in proportion to increased sales volume — normal scaling behaviour, not a regression.
            </p>
          </div>

          {/* Chart 4: H2 Inflection Point (Line Chart) */}
          <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">H2 Commercial Reversal Trend</h4>
            <div className="relative h-48 w-full pt-4">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* Horizontal gridlines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="white" strokeOpacity="0.05" strokeWidth="1" />

                {/* Line 1: Sales Growth (Upward) - Cyan */}
                <path
                  d="M 20 120 L 100 100 L 180 75 L 260 50 L 340 30"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                <circle cx="20" cy="120" r="4" fill="#00f0ff" />
                <circle cx="340" cy="30" r="4" fill="#00f0ff" />

                {/* Line 2: Discount Moderation (Downward) - Purple */}
                <path
                  d="M 20 35 L 100 45 L 180 65 L 260 85 L 340 95"
                  fill="none"
                  stroke="#bd00ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
                <circle cx="20" cy="35" r="4" fill="#bd00ff" />
                <circle cx="340" cy="95" r="4" fill="#bd00ff" />

                {/* Text Labels */}
                <text x="350" y="35" fill="#00f0ff" fontSize="10" fontWeight="bold">Sales +17%</text>
                <text x="350" y="100" fill="#bd00ff" fontSize="10" fontWeight="bold">Discounts +28%</text>
              </svg>
            </div>
            <div className="flex justify-center gap-6 text-[10px] text-white/50 uppercase tracking-widest font-semibold pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-aeo-cyan rounded-full" />
                <span>Sales Volume</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-aeo-purple rounded-full" />
                <span>Discount Growth</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-8 bg-gradient-to-r from-aeo-cyan/5 to-aeo-purple/5 border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-white">Conclusion</h3>
            <p className="text-sm text-white/80 leading-relaxed font-serif font-light">
              Our success in boosting organic impressions for Baby Bento was achieved by establishing unambiguous corporate signals and structured product feeds. For online retail stores, our specialised <Link href="/services/aeo/shopify" className="text-aeo-cyan font-semibold hover:underline">Shopify AEO and ecommerce ingestion architecture</Link> applies these exact schema graphs and liquid refactoring principles. You can also explore our canonical <Link href="/services/aeo" className="text-aeo-cyan font-semibold hover:underline">AEO Services</Link> framework to see how structured sprints elevate brand discoverability.
            </p>
            <p className="text-base text-aeo-cyan font-bold font-soehne-breit mt-2">
              &ldquo;When AI understands your business, your customers finally can.&rdquo;
            </p>
          </div>

          {/* Phase 5 Radial Return CTA Banner */}
          <div className="p-8 bg-gradient-to-br from-aeo-purple/15 via-black to-aeo-cyan/15 border border-white/10 rounded-2xl text-center space-y-4 my-6">
            <h3 className="text-xl font-bold text-white">Achieve Structural AI Visibility for Your Business</h3>
            <p className="text-xs text-white/70 max-w-lg mx-auto font-light leading-relaxed">
              Ready to rebuild your entity clarity, eliminate discount dependency, and surface across Search, Maps, and AI platforms?
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="/services/aeo"
                className="px-5 py-2.5 bg-aeo-cyan text-black font-bold text-xs rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(0,205,216,0.3)]"
              >
                Explore AEO Services
              </Link>
              <Link
                href="/solutions/aeo-blueprint"
                className="px-5 py-2.5 bg-gradient-to-r from-aeo-purple to-pink-600 text-white font-bold text-xs rounded-xl hover:opacity-90 transition-all"
              >
                Get Strategic Blueprint ($995 AUD)
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Vince Baker
              </Link>
            </div>
          </div>

          {/* Back Navigation & Cross-Linking */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/5">
            <Link href="/knowledge-hub" className="group text-sm font-semibold text-aeo-cyan hover:text-white transition-colors flex items-center gap-1">
              &larr; Back to Knowledge Hub
            </Link>
            <div className="flex flex-wrap gap-4 text-xs text-white/40">
              <span>Explore primary nodes:</span>
              <Link href="/services/aeo" className="hover:text-aeo-cyan transition-colors">AEO Services</Link>
              <Link href="/services/aeo/shopify" className="hover:text-aeo-cyan transition-colors">Shopify AEO</Link>
              <Link href="/solutions/aeo-blueprint" className="hover:text-aeo-cyan transition-colors">AEO Blueprint</Link>
              <Link href="/contact" className="hover:text-aeo-cyan transition-colors">Contact Us</Link>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
