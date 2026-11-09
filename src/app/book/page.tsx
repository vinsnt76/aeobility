import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Calendar, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Clock, 
  Video, 
  Sparkles, 
  Search, 
  MapPin, 
  ArrowRight, 
  Phone, 
  Mail, 
  HelpCircle,
  FileText,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Book a Clarity Call | 15-Minute AI Search Review | AEObility",
  description: "Book a complimentary 15-minute clarity call with AEObility lead specialist Vince Baker. Review your AI search visibility, diagnose entity gaps, and get a clear 90-day action plan.",
  alternates: {
    canonical: "https://aeobility.com.au/book",
  },
  openGraph: {
    title: "Book a Clarity Call | AEObility",
    description: "Complimentary 15-minute diagnostic call with Vince Baker. Let's inspect your brand's AI search and local map visibility.",
    url: "https://aeobility.com.au/book",
    siteName: "AEObility",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://aeobility.com.au/images/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book an AEObility Clarity Call with Vince Baker",
      },
    ],
  },
  keywords: [
    "Book a Call",
    "Clarity Call",
    "AEO consultation",
    "AI search strategy call",
    "AEObility scheduling",
    "Perth SEO consultation",
    "Generative Engine Optimisation review"
  ]
};

export default function BookingPage() {
  const faqs = [
    {
      q: "Is the 15-minute Clarity Call genuinely free?",
      a: "Yes. The Clarity Call is 100% complimentary with zero sales pressure. We use this time to review how answer engines currently interpret your domain and determine whether your business genuinely requires structured AEO intervention."
    },
    {
      q: "Who will I speak with on the call?",
      a: "You will speak directly with Vince Baker, founder and lead AEO specialist at AEObility, based in Perth, Western Australia. We do not use commission-driven sales reps or offshore account handlers."
    },
    {
      q: "What should I prepare before our session?",
      a: "No technical preparation or credential handover is required. Simply have your primary website URL and target service offerings or priority geographic suburbs in mind."
    },
    {
      q: "What platform is used for the meeting?",
      a: "Calls are hosted via Google Meet by default. A secure meeting link is automatically generated upon selecting your time slot. If you prefer a phone call, simply provide your contact number during booking."
    },
    {
      q: "Do you work with businesses outside Western Australia?",
      a: "Yes. AEObility works with Australian SMBs, professional practices, and ecommerce brands nationally across Sydney, Melbourne, Brisbane, Adelaide, Hobart, and regional trade hubs."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://aeobility.com.au/book#webpage",
        "url": "https://aeobility.com.au/book",
        "name": "Book a Clarity Call | AEObility",
        "description": "Book a complimentary 15-minute clarity call with an AEObility specialist to review your AI search visibility, answer engine roadmap, and growth strategy.",
        "inLanguage": "en-AU",
        "isPartOf": {
          "@id": "https://aeobility.com.au/#website"
        },
        "mainEntity": {
          "@id": "https://aeobility.com.au/book#service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://aeobility.com.au/book#service",
        "name": "AEObility AI Visibility Clarity Call",
        "serviceType": "Answer Engine Optimisation & AI Search Strategy Review",
        "provider": {
          "@type": "Organization",
          "@id": "https://aeobility.com.au/#organization",
          "name": "AEObility",
          "legalName": "AEObility",
          "identifier": "ABN 61 029 803 255",
          "url": "https://aeobility.com.au"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "AUD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aeobility.com.au/book#faq",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-aeo-cyan selection:text-black relative">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Radial Gradient Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-radial from-aeo-purple/15 via-aeo-cyan/10 to-transparent glow-blur pointer-events-none z-0" />

      <Navbar />

      <main className="flex-grow w-full py-10 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <Breadcrumbs />

          {/* 1. Header Block with Clear Value Proposition & Reassurance */}
          <section className="text-center space-y-5 max-w-3xl mx-auto relative pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-aeo-cyan font-mono font-medium shadow-sm">
              <Compass className="w-3.5 h-3.5 text-aeo-cyan" />
              <span>15-Minute Strategy Review • Zero Pitch Pressure</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-soehne-breit text-white leading-tight">
              Book your <span className="text-gradient-aeo">Clarity Call</span>
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-serif max-w-2xl mx-auto">
              Select a time below for a 1-on-1 strategy call. We will review how conversational engines and local map algorithms read your website, pinpoint structural blind spots, and outline immediate fixes.
            </p>

            {/* Proximity Reassurance Pill Row (Law of Proximity) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-cyan-300 pt-1">
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-cyan-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>100% Free Consultation</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>15 Minutes</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                <Video className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Meet or Phone</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Australian Specialist</span>
              </span>
            </div>

            {/* 3 Clear Agenda Deliverables Checkmarks (Cognitive Friction Reduction) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left pt-3 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-start gap-3 shadow-md">
                <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider font-mono">1. Audit AI Visibility</h2>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed mt-1">
                    Examine how ChatGPT, Perplexity, and Google AI Overviews cite your core products and services.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-start gap-3 shadow-md">
                <div className="p-1.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider font-mono">2. Pinpoint Local Gaps</h2>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed mt-1">
                    Detect entity conflation, missing Schema microdata, and local Google Map pack ranking bottlenecks.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 flex items-start gap-3 shadow-md">
                <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider font-mono">3. 90-Day Action Plan</h2>
                  <p className="text-xs text-slate-300 font-serif leading-relaxed mt-1">
                    Walk away with clear next steps, whether you execute in-house or engage a fixed-scope sprint.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Interactive Booking Embed Container */}
          <section id="calendar-embed" className="scroll-mt-20">
            <div className="bg-zinc-950/90 border border-cyan-500/30 rounded-2xl p-2 sm:p-4 shadow-[0_0_40px_rgba(6,182,212,0.12)] relative overflow-hidden backdrop-blur-3xl">
              {/* Gradient Horizon Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-aeo-cyan via-aeo-purple to-aeo-cyan" />
              
              <iframe
                src="https://cal.com/vince-baker-aeo-call/15min?theme=dark"
                title="Schedule a 15-Minute Clarity Call with Vince Baker"
                style={{
                  width: '100%',
                  height: '760px',
                  border: 'none',
                  borderRadius: '12px'
                }}
                allow="camera; microphone; fullscreen"
                loading="eager"
              />
            </div>
          </section>

          {/* 3. What Happens on the Call (Process Walkthrough) */}
          <section className="border-t border-white/10 pt-14 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Transparent Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                What to expect during your 15 minutes
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-serif">
                No scripted sales funnels or vague marketing jargon. Just structured technical clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 01</span>
                <h3 className="text-base font-bold text-white">Pre-Call Baseline Audit</h3>
                <p className="text-xs text-slate-300 font-serif leading-relaxed">
                  Before we connect, we inspect your domain schema graphs, Google Business Profile signals, and LLM reference parity to establish baseline metrics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-purple-400 font-bold">STAGE 02</span>
                <h3 className="text-base font-bold text-white">Live Screen Share Diagnostics</h3>
                <p className="text-xs text-slate-300 font-serif leading-relaxed">
                  We walk you through exactly where answer engines experience retrieval failure, citation omission, or entity conflation with overseas competitors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 03</span>
                <h3 className="text-base font-bold text-white">Unhedged Recommendations</h3>
                <p className="text-xs text-slate-300 font-serif leading-relaxed">
                  We provide honest guidance on whether your brand needs an <Link href="/solutions/aeo-blueprint" className="text-cyan-400 underline hover:text-cyan-300 font-medium">$995 AEO Blueprint</Link>, a targeted micro-sprint, or if your legacy SEO is already doing its job.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Specialist Authority Box (Grounding Person & Business Entity) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-lg">
                <Image
                  src="/images/about/Profile-Picture-Vinnie.png"
                  alt="Vince Baker - Founder & Principal AEO Specialist at AEObility"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-white font-soehne-breit">Vince Baker</h3>
                  <span className="text-[11px] font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 px-2.5 py-0.5 rounded-full">
                    Lead Specialist &amp; Founder
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-serif leading-relaxed max-w-xl">
                  15+ years experience building custom web architectures, automation workflows, and machine-legible entity graphs in Perth, WA. You will speak directly with Vince on your call.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span>ABN: 61 029 803 255</span>
                  <span>•</span>
                  <span>Perth, Western Australia</span>
                  <span>•</span>
                  <Link href="/vince-baker" className="text-cyan-400 hover:underline">
                    View Verified Bio &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
              <a
                href="tel:0480286282"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white font-mono text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>0480 286 282</span>
              </a>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 font-mono text-xs transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Run Self-Service Audit</span>
              </Link>
            </div>
          </section>

          {/* 5. Frequently Asked Questions (DOM-Rendered Accordion + FAQPage Schema) */}
          <section id="faq-booking" className="border-t border-white/10 pt-14 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-soehne-breit">
                Common questions about booking a call
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>

          {/* 6. Contextual Outbound Hub Navigation */}
          <section className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>Explore alternative corridors:</span>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/services/aeo" className="hover:text-cyan-300 transition-colors">
                AEO Services
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/solutions/aeo-blueprint" className="hover:text-cyan-300 transition-colors">
                Strategic Blueprint
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/services/perth/seo-specialist" className="hover:text-cyan-300 transition-colors">
                Perth SEO Specialist
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                Contact Page
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
