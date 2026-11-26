'use client';

import React, { useState } from 'react';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { trackGaEvent } from '@/lib/gtag';

interface AeoDiagnosticSectionProps {
  id?: string;
  badgeTitle?: string;
  heading?: string;
  subheading?: string;
  formId?: string;
  leadType?: string;
}

export default function AeoDiagnosticSection({
  id = "aeo-diagnostic-form",
  badgeTitle = "Instant AEO Visibility Scan",
  heading = "Run a Free AEO Visibility Scan",
  subheading = "Enter your website URL to check structured data, entity clarity, and AI search readiness signals.",
  formId = "canonical_aeo_diagnostic_form",
  leadType = "aeo_visibility_scan",
}: AeoDiagnosticSectionProps) {
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [diagnosticData, setDiagnosticData] = useState({
    websiteUrl: '',
    name: '',
    email: '',
  });

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: diagnosticData.name,
          email: diagnosticData.email,
          website: diagnosticData.websiteUrl,
          targetQuery: heading,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Unable to submit your scan request. Please email support@aeobility.com.au directly.');
      }
      trackGaEvent('generate_lead', {
        event_category: 'lead_generation',
        form_id: formId,
        lead_type: leadType,
        value: 1,
      });
      setDiagnosticSubmitted(true);
      setDiagnosticData({ websiteUrl: '', name: '', email: '' });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit your scan request. Please email support@aeobility.com.au directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="border-t border-slate-800/80 pt-16 scroll-mt-24">
      <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800/80 p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full filter blur-3xl -z-10" />

        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium">
            <Search className="w-3.5 h-3.5 text-teal-400" />
            <span>{badgeTitle}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {heading}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {diagnosticSubmitted ? (
          <div className="p-6 bg-teal-950/40 border border-teal-500/30 rounded-xl text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-teal-400 mx-auto" />
            <h4 className="font-bold text-white text-base">AEO Visibility Scan Submitted</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Thank you. Our AEObility team will audit your website structure and send your gap report within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleDiagnosticSubmit} className="space-y-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Website URL Field */}
              <div className="col-span-12 space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300" htmlFor="aeo-diag-url">
                  Website URL
                </label>
                <input
                  type="text"
                  id="aeo-diag-url"
                  required
                  value={diagnosticData.websiteUrl}
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, websiteUrl: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder="e.g. mybusiness.com.au"
                />
                <p className="text-[11px] text-slate-400 font-mono leading-tight">
                  We check website structure, structured-data setup, and content clarity for common visibility gaps.
                </p>
              </div>

              {/* First Name Field */}
              <div className="col-span-12 md:col-span-6 space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300" htmlFor="aeo-diag-name">
                  First Name
                </label>
                <input
                  type="text"
                  id="aeo-diag-name"
                  required
                  value={diagnosticData.name}
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, name: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder="e.g. Sarah"
                />
              </div>

              {/* Primary Email Field */}
              <div className="col-span-12 md:col-span-6 space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300" htmlFor="aeo-diag-email">
                  Primary Email
                </label>
                <input
                  type="email"
                  id="aeo-diag-email"
                  required
                  value={diagnosticData.email}
                  onChange={(e) => setDiagnosticData({ ...diagnosticData, email: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  placeholder="sarah@mybusiness.com.au"
                />
              </div>

              <div className="col-span-12">
                <p className="text-[11px] text-slate-400 font-mono leading-tight">
                  We use your details to deliver your AEO visibility score and gap report. We will not add you to marketing communications without your consent.
                </p>
              </div>
            </div>

            {submitError && (
              <div role="alert" className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200">
                {submitError}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Run Free Visibility Scan'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
