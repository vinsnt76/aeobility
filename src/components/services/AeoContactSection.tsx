'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

interface AeoContactSectionProps {
  id?: string;
  badgeTitle?: string;
  heading?: string;
  subheading?: string;
  formId?: string;
  leadType?: string;
  buttonText?: string;
  receivedHeading?: string;
  founderCallout?: string;
  defaultService?: string;
}

export default function AeoContactSection({
  id = "aeo-contact-form",
  badgeTitle = "AEO Scope Call",
  heading = "Discuss Your AEO Priorities",
  subheading = "Tell us about your business goals and Answer Engine Optimisation priorities. We will confirm scope and pricing before you commit.",
  formId = "canonical_aeo_contact_form",
  leadType = "aeo_services_enquiry",
  buttonText = "Book Scope Call",
  receivedHeading = "AEO Scope Request Received",
  founderCallout = "You will speak directly with Vince Baker in Perth to confirm feasibility before any work starts.",
  defaultService = "unsure"
}: AeoContactSectionProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    website: '',
    serviceType: defaultService,
    message: '',
  });

  useEffect(() => {
    const handleSelectSprint = (e: CustomEvent<string>) => {
      if (e.detail) {
        setContactData((prev) => ({ ...prev, serviceType: e.detail }));
      }
    };
    window.addEventListener('select-aeo-sprint' as any, handleSelectSprint as any);
    return () => {
      window.removeEventListener('select-aeo-sprint' as any, handleSelectSprint as any);
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          website: contactData.website,
          service: `${badgeTitle}: ${contactData.serviceType}`,
          message: contactData.message,
          source: `Service Contact Form (${formId})`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to submit your enquiry. Please email support@aeobility.com.au directly.');
      }
      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: formId,
        lead_type: leadType,
        service_selected: contactData.serviceType,
        value: 1,
      });
      setContactSubmitted(true);
      setContactData({ name: '', email: '', website: '', serviceType: defaultService, message: '' });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit your enquiry. Please email support@aeobility.com.au directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="border-t border-slate-800/80 pt-16 text-center space-y-8 scroll-mt-24">
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">{heading}</h2>
        <p className="text-sm text-slate-300 leading-relaxed font-sans">
          {subheading} <Link href="/contact" className="text-teal-400 hover:underline font-semibold">Confirm scope and pricing</Link>.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pt-1">
          <Users className="w-4 h-4 text-teal-400 shrink-0" />
          <span>{founderCallout}</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl text-left shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full filter blur-2xl -z-10" />
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <h3 className="text-xl font-extrabold text-white tracking-tight">Send Your Project Details</h3>
          <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded-full font-medium">
            {badgeTitle}
          </span>
        </div>
        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          Select the option you are considering, or choose &quot;Not sure yet: Help me decide&quot; if you would like help deciding.
        </p>

        {contactSubmitted ? (
          <div className="p-6 bg-teal-950/40 border border-teal-500/30 rounded-xl text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
            <h4 className="font-bold text-white text-base">{receivedHeading}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Thank you for reaching out. Our AEObility team will review your details and get in touch within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="aeo-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="aeo-name"
                  required
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder="e.g. Vince Baker"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="aeo-email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="aeo-email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder="vince@example.com.au"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="aeo-service-type">
                What would you like to discuss?
              </label>
              <select
                id="aeo-service-type"
                value={contactData.serviceType}
                onChange={(e) => setContactData({ ...contactData, serviceType: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors font-medium"
              >
                <option value="unsure">Not sure yet: Help me decide</option>
                <option value="blueprint">Strategic Blueprint ($995 AUD)</option>
                <option value="foundation">AEO Foundation ($1,990 AUD)</option>
                <option value="sprints">AEO Sprints (From $495 AUD)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="aeo-website">
                Website URL (Optional)
              </label>
              <input
                type="text"
                id="aeo-website"
                value={contactData.website}
                onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                placeholder="mybusiness.com.au"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="aeo-message">
                What would you like help with?
              </label>
              <textarea
                id="aeo-message"
                required
                rows={3}
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                placeholder="For example: schema markup deployment, restructuring key service pages, or a 90-day AEO roadmap..."
              />
            </div>

            {submitError && (
              <div role="alert" className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-[11px] text-slate-400 text-center font-mono">
              Clear scope. Fixed pricing. No lock-in contracts. Your privacy is protected.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
