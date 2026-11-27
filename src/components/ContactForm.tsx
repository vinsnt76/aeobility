"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { trackGaEvent } from '@/lib/gtag';
import { 
  Calendar, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  Globe,
  MapPin,
  Building2,
  Lock
} from 'lucide-react';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    category: 'AEO / SEO Audit or $995 Blueprint',
    message: '',
    website_hp: '' // Honeypot field for invisible bot protection
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Ignore bot submissions if honeypot field is filled
    if (formData.website_hp) {
      setFormSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const rawWebsite = formData.website.trim();
      const normalisedWebsite = rawWebsite && !/^https?:\/\//i.test(rawWebsite) ? `https://${rawWebsite}` : rawWebsite;
      const res = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: normalisedWebsite,
          category: formData.category,
          message: formData.message,
          website_hp: formData.website_hp,
          source: 'Contact Page (/contact)',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send your enquiry right now. Please email support@aeobility.com.au directly.');
      }

      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: 'contact_page_form',
        lead_type: formData.category,
        value: 1,
      });

      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to send your enquiry right now. Please email support@aeobility.com.au directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Do you work with businesses outside Perth?",
      answer: "Yes. While AEObility is founded and based in Perth, Western Australia, we deliver AEO consulting, structured schema engineering, and entity mapping for clients right across Australia (Sydney, Melbourne, Brisbane, Adelaide, Hobart, and regional WA)."
    },
    {
      question: "Do you work alongside existing SEO agencies or web developers?",
      answer: "Yes. AEObility frequently collaborates with internal marketing leads, web developers, and SEO agencies to handle technical schema graphs and AI retrieval readiness."
    },
    {
      question: "What is included in the Free AI Visibility Scan vs the $995 Blueprint?",
      answer: "The free scan evaluates key schema markers and search signals. The $995 Strategic Blueprint provides a complete technical audit, nested JSON-LD schema files, atomic answer block rewrites, an entity relationship map, and step-by-step implementation documentation with 100% client ownership."
    },
    {
      question: "Is the $995 Blueprint price inclusive of GST and how is the credit applied?",
      answer: "Yes, the $995 price is 100% GST-inclusive for Australian clients. If you choose to transition to a full AEO implementation sprint within 60 days of receiving your Blueprint, the full $995 is credited directly against your sprint fee."
    },
    {
      question: "What should I prepare for a 15-minute clarity call?",
      answer: "Zero formal preparation is required. Having your current website URL and primary commercial goals in mind is helpful. We will review live search signals together on Google Meet or phone."
    },
    {
      question: "Can you work with Shopify, WordPress, Webflow, or custom websites?",
      answer: "Yes. AEObility works with all major Content Management Systems (WordPress, Shopify, Webflow, Next.js, custom HTML/React) by inserting clean, validated schema code and refining page content structure."
    },
    {
      question: "Do you offer phone support or walk-in office appointments?",
      answer: "We operate remotely from Perth, WA to maintain focused, founder-led execution. Consultations and support are delivered via booked video call (Google Meet) and direct email (support@aeobility.com.au). Dedicated telephone callbacks are scheduled during consultation windows."
    },
    {
      question: "How does existing-client support work?",
      answer: "Existing clients receive priority technical support via support@aeobility.com.au with response SLAs specified in their sprint agreement."
    },
    {
      question: "Can you guarantee 100% inclusion in ChatGPT, Gemini, or Google AI Overviews?",
      answer: "No consultant can guarantee rankings or citations in third-party AI platforms. AEObility optimises entity clarity, structured data, and evidence so search engines have maximum confidence to cite your business accurately."
    },
    {
      question: "How long does a typical AEO sprint take?",
      answer: "A standard AEO sprint is completed over 14 to 30 days depending on your site size and technical requirements."
    }
  ];

  return (
    <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex flex-col gap-14 sm:gap-20">
      
      {/* Hero Header Section */}
      <header className="max-w-3xl space-y-5 isolation isolate relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-aeo-cyan font-mono font-medium shadow-[0_0_12px_rgba(0,229,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-aeo-cyan animate-pulse" />
          <span>Direct Advisory &amp; Technical Support</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-soehne-breit tracking-tight leading-[1.1]">
          Speak directly with AEObility <br />
          <span className="text-gradient-aeo">about search visibility and entity engineering.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
          AEObility provides technical Answer Engine Optimisation (AEO), schema graph engineering, and AI retrieval consulting for Australian businesses from Perth, Western Australia. Whether you need a baseline audit of how generative engines like Google AI Overviews and ChatGPT parse your brand, want to review your technical data architecture, or require sprint support from founder Vinnie Baker, you can book a direct consultation below. We review your actual site code and entity footprint on the call, with zero sales pressure.
        </p>

        {/* Dual CTA Jump Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://cal.com/vince-baker-aeo-call/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.55)] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#050811]" />
            <span>Book 15-Minute Clarity Call</span>
          </a>
          <a
            href="#enquiry-form"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all hover:bg-slate-800/80 hover:border-slate-500"
          >
            <Mail className="w-4 h-4 text-aeo-cyan" />
            <span>Send Written Enquiry</span>
          </a>
        </div>
      </header>

      {/* Main Grid: Level 1 Glass Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left Column: Direct Booking Pathway & Operational Context (Level 1 + Level 2 Glass) */}
        <section className="lg:col-span-6 flex flex-col gap-8">
          
          {/* Level 1 Primary Glass: Direct Booking Pathway Card */}
          <div className="relative isolate rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 sm:p-8 space-y-6 overflow-hidden">
            {/* Directional Top Specular Edge Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase tracking-widest block">15-Minute Clarity Call</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Book an introductory consult with Vinnie Baker in Perth.</h2>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Speak directly with Vinnie Baker (Founder &amp; Principal Consultant). Review live search engine and AI model signals for your business with zero sales pressure.
              </p>
            </div>

            <div className="space-y-3 pt-4 text-xs font-mono text-slate-200 border-t border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Format: 1-on-1 Video Call (Google Meet) or Phone</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Host: Vinnie Baker (Founder &amp; Lead Specialist)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Timezone: AWST (Perth, WA) with auto conversion</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-aeo-cyan shrink-0" />
                <span>Preparation: Zero prep required (have URL ready)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://cal.com/vince-baker-aeo-call/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#00E5FF] text-[#050811] font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:shadow-[0_0_36px_rgba(0,229,255,0.6)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#050811]" />
                <span>Open Live Calendar Availability</span>
                <ExternalLink className="w-4 h-4 text-[#050811]" />
              </a>
            </div>
          </div>

          {/* Level 2 Glass: Who We Work With */}
          <div className="relative isolate rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-aeo-cyan" />
              <span>Target Audience Fit</span>
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Who we work with</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              AEObility is engineered specifically for Australian service businesses, local operators, trade firms, and growth-focused SMEs seeking legible, high-confidence visibility across Google Search, Maps, and AI platforms like ChatGPT and Gemini.
            </p>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              We specialise in verified schema architecture, structured entity graphs, and atomic answer rewrites. We do not offer generic low-cost SEO packages or speculative link-spam schemes.
            </p>
          </div>

          {/* Level 2 Glass: Headquarters & Operational Metadata */}
          <div className="relative isolate rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 space-y-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-aeo-cyan" />
              <span>Headquarters &amp; Service Region</span>
            </div>
            <h3 className="text-lg font-bold text-white font-soehne-breit">Based in Perth, servicing nationwide</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Based in Perth, Western Australia, AEObility operates remotely to service clients across Australia. Consultations and technical support are delivered via 1-on-1 video call and direct email.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>support@aeobility.com.au</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>Mon–Fri 9:00 AM – 5:00 PM AWST</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>Perth, WA 6000 (Australia-wide)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-aeo-cyan shrink-0" />
                <span>ABN: 61 029 803 255</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Level 1 Glass Categorised Enquiry Form */}
        <section id="enquiry-form" className="lg:col-span-6 relative isolate rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] self-start scroll-mt-24">
          {/* Top Specular Edge Highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-aeo-cyan uppercase tracking-widest block">Direct Enquiry</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Send a direct enquiry.</h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Tell us briefly about your site and what you&apos;re looking to improve.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-cyan-950/70 border border-cyan-500/40 rounded-2xl flex flex-col items-center text-center gap-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-aeo-cyan" />
              <h3 className="font-bold text-xl text-white font-soehne-breit">Enquiry Received</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                Thank you for reaching out. Vinnie Baker normally responds within 1 business day (Monday to Friday, 9:00 AM to 5:00 PM AWST) from <strong className="text-white">support@aeobility.com.au</strong>.
              </p>
              <p className="text-xs text-slate-300 font-sans">
                Need immediate assistance? You can also <a href="https://cal.com/vince-baker-aeo-call/15min" target="_blank" rel="noopener noreferrer" className="text-aeo-cyan underline font-semibold">book a 15-minute clarity call directly</a>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs font-mono text-aeo-cyan hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Invisible Honeypot Field */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2" htmlFor="name">
                  Full Name <span className="text-aeo-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-[#080B12] border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-aeo-cyan focus:ring-2 focus:ring-aeo-cyan/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  placeholder="Alex Taylor"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2" htmlFor="email">
                  Email Address <span className="text-aeo-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-[#080B12] border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-aeo-cyan focus:ring-2 focus:ring-aeo-cyan/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  placeholder="alex@yourbusiness.com.au"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2" htmlFor="website">
                  Website URL <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  inputMode="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-[#080B12] border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-aeo-cyan focus:ring-2 focus:ring-aeo-cyan/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  placeholder="https://yourbusiness.com.au"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2" htmlFor="category">
                  What are you looking for? <span className="text-aeo-cyan">*</span>
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl bg-[#080B12] border border-slate-600 text-slate-100 focus:outline-none focus:border-aeo-cyan focus:ring-2 focus:ring-aeo-cyan/25 text-sm transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  <option value="AEO / SEO Audit or $995 Blueprint">AEO / SEO Audit or $995 Blueprint</option>
                  <option value="Agency / White-Label Partnership">Agency / White-Label Partnership</option>
                  <option value="Existing Client Support">Existing Client Support</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-2" htmlFor="message">
                  Project or Question <span className="text-aeo-cyan">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-[#080B12] border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-aeo-cyan focus:ring-2 focus:ring-aeo-cyan/25 text-sm transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  placeholder="What's your main goal right now? (e.g. ranking in AI Overviews, fixing schema, or booking a Blueprint)"
                />
              </div>

              {/* Privacy & Consent Statement */}
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400 font-sans leading-relaxed">
                <Lock className="w-3.5 h-3.5 text-aeo-cyan shrink-0 mt-0.5" />
                <span>
                  By submitting this form, you agree that AEObility may process your details to respond to your enquiry in accordance with our <Link href="/privacy" className="text-aeo-cyan underline hover:text-white transition-colors">Privacy Policy</Link>. Zero marketing spam.
                </span>
              </div>

              {submitError && (
                <div role="alert" className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200 font-sans">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00E5FF] text-[#050811] font-bold text-sm uppercase tracking-wider py-4 px-6 rounded-xl hover:shadow-[0_0_28px_rgba(0,229,255,0.5)] transition-all cursor-pointer text-center mt-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}

          {/* Compact Trust Proof Box */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs font-sans text-slate-300">
            <div className="font-bold text-white font-soehne-breit flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-aeo-cyan" />
              <span>Founder-Led Quality &amp; Blueprint Guarantee</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[12px]">
              You work 100% directly with founder Vinnie Baker. The $995 Strategic Blueprint is 100% GST-inclusive and fully credited toward your implementation sprint if booked within 60 days.
            </p>
          </div>
        </section>
      </div>

      {/* Expanded FAQ Accordion Section (Level 3 Quiet Surface) */}
      <section className="border-t border-white/10 pt-12 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-aeo-cyan font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-soehne-breit tracking-tight">Frequently asked questions about AEO consulting and sprints.</h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-slate-950/70 border border-white/10 rounded-xl overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-100 font-soehne-breit pr-4">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 text-aeo-cyan shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-white/10 bg-black/50' : 'max-h-0'}`}
                >
                  <p className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}

