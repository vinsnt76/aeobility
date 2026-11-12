'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Bot, Command, X, ArrowRight, CornerDownLeft, Loader2, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAssistantSuppression } from '@/hooks/useAssistantSuppression';
import { trackGaEvent } from '@/lib/gtag';

interface PromptPill {
  id: string;
  label: string;
  query: string;
}

interface TopMatch {
  pageName: string;
  url: string;
  h1?: string;
  focusKeyphrase?: string;
  schemaType?: string;
  description?: string;
}

const DEFAULT_SUGGESTION_PILLS: PromptPill[] = [
  {
    id: 'aeo-vs-seo',
    label: 'AEO vs Legacy SEO',
    query: 'How does Answer Engine Optimisation differ from traditional SEO?'
  },
  {
    id: 'entity-graph',
    label: 'Entity Authority',
    query: 'How does AEObility structure machine-readable entity graphs?'
  },
  {
    id: 'diagnostic-sprint',
    label: 'Diagnostic Sprint',
    query: 'What is included in a 15-minute fixed-scope diagnostic review?'
  },
  {
    id: 'ai-engines',
    label: 'AI Search Engines',
    query: 'How do you optimise visibility across ChatGPT, Perplexity, and Gemini?'
  }
];

export interface AIModalAssistantProps {
  highIntentSelectors?: string[];
  formSelector?: string;
  initialOpen?: boolean;
}

export default function AIModalAssistant({
  highIntentSelectors = [
    '#hero-cta',
    '#diagnostic-scanner',
    '.diagnostic-input',
    '#hero-diagnostic-instrument',
    '#final-conversion-panel'
  ],
  formSelector = '#diagnostic-scanner form, #hero-diagnostic-instrument form',
  initialOpen = false
}: AIModalAssistantProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [topMatch, setTopMatch] = useState<TopMatch | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activePillId, setActivePillId] = useState<string | null>(null);
  const [hasEngaged, setHasEngaged] = useState(false);
  const [isEventSuppressed, setIsEventSuppressed] = useState(false);

  const pathname = usePathname();
  const isDiagnosticRoute = pathname?.startsWith('/diagnostic');

  useEffect(() => {
    const handleSuppress = (e: Event) => {
      const customEvent = e as CustomEvent<{ suppress: boolean }>;
      setIsEventSuppressed(!!customEvent.detail?.suppress);
    };
    window.addEventListener('aeo:suppress-bill', handleSuppress);
    return () => window.removeEventListener('aeo:suppress-bill', handleSuppress);
  }, []);

  const { isSuppressed } = useAssistantSuppression({
    highIntentSelectors,
    formSelector,
    threshold: 0.15
  });

  const shouldSuppressLauncher = isSuppressed || isEventSuppressed || isDiagnosticRoute;

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const openTimeRef = useRef<number | null>(null);

  const openModal = useCallback(() => {
    previousActiveElementRef.current = document.activeElement as HTMLElement;
    openTimeRef.current = Date.now();
    setHasEngaged(false);
    setIsOpen(true);
    trackGaEvent('assistant_modal_opened', {
      event_category: 'AI Assistant',
      trigger_source: 'launcher_button'
    });
  }, []);

  const closeModal = useCallback(() => {
    const timeSpentSeconds = openTimeRef.current
      ? Math.round((Date.now() - openTimeRef.current) / 1000)
      : 0;

    if (!hasEngaged && !response) {
      trackGaEvent('assistant_modal_abandoned', {
        event_category: 'AI Assistant',
        time_spent_seconds: timeSpentSeconds
      });
    }

    trackGaEvent('assistant_modal_closed', {
      event_category: 'AI Assistant',
      time_spent_seconds: timeSpentSeconds,
      has_engaged: hasEngaged
    });

    setIsOpen(false);
    setQuery('');
    setResponse(null);
    setTopMatch(null);
    setIsLoading(false);
    setActivePillId(null);
    setHasEngaged(false);
    openTimeRef.current = null;

    // Return focus to previously active element
    if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
      previousActiveElementRef.current.focus();
    }
  }, [hasEngaged, response]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Escape) & Custom Event Dispatchers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          closeModal();
        } else {
          window.dispatchEvent(new Event('close_bill_widget'));
          openModal();
        }
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closeModal();
      }
    };

    const handleOpenExternal = () => {
      window.dispatchEvent(new Event('close_bill_widget'));
      openModal();
    };

    const handleBillDrawerOpened = () => {
      if (isOpen) closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open_answer_search_modal', handleOpenExternal);
    window.addEventListener('open_ai_modal_assistant', handleOpenExternal);
    window.addEventListener('open_bill_drawer', handleBillDrawerOpened);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open_answer_search_modal', handleOpenExternal);
      window.removeEventListener('open_ai_modal_assistant', handleOpenExternal);
      window.removeEventListener('open_bill_drawer', handleBillDrawerOpened);
    };
  }, [isOpen, openModal, closeModal]);

  // Dynamic Focus Trap using :not([disabled]) filtering
  useEffect(() => {
    if (!isOpen) return;

    // Focus input on open
    const focusTimeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      // Filter dynamically enabled elements only to prevent focus trap on inactive or disabled pills
      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
        )
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => {
      clearTimeout(focusTimeout);
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  const handleSubmit = useCallback(async (e?: React.FormEvent, directQuery?: string) => {
    if (e) e.preventDefault();
    const targetQuery = (directQuery || query).trim();
    if (!targetQuery || isLoading) return;

    const startTime = typeof performance !== 'undefined' ? performance.now() : 0;
    setHasEngaged(true);
    setIsLoading(true);
    setResponse(null);
    setTopMatch(null);

    trackGaEvent('search', {
      search_term: targetQuery,
      source: 'ai_modal_assistant'
    });

    trackGaEvent('assistant_query_submitted', {
      event_category: 'AI Assistant',
      query_length: targetQuery.length,
      is_pill_click: !!directQuery
    });

    try {
      const res = await fetch('/api/search/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: targetQuery })
      });

      const latencyMs = Math.round((typeof performance !== 'undefined' ? performance.now() : 0) - startTime);

      if (res.ok) {
        const data = await res.json();
        setResponse(data.answer || data.summary || 'Clear entity insights retrieved.');
        setTopMatch(data.topMatch || null);
        trackGaEvent('assistant_response_received', {
          event_category: 'AI Assistant',
          status: 'success',
          latency_ms: latencyMs,
          result_type: data.resultType || 'knowledge_graph',
          matched_page: data.topMatch?.pageName || 'None'
        });
      } else {
        setResponse('We specialises in building verifiable entity authority so AI answer engines recognise your brand without ambiguity. Lock in a diagnostic sprint to evaluate your visibility.');
        setTopMatch({
          pageName: 'AEO Technical Sprints',
          url: '/solutions/aeo-sprint',
          schemaType: 'Service'
        });
        trackGaEvent('assistant_response_received', {
          event_category: 'AI Assistant',
          status: 'fallback',
          latency_ms: latencyMs
        });
      }
    } catch {
      setResponse('Our optimisation framework structures your site as a machine-readable knowledge graph, giving LLMs verified data to cite.');
      setTopMatch(null);
      trackGaEvent('assistant_response_received', {
        event_category: 'AI Assistant',
        status: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  }, [query, isLoading]);

  const handlePillClick = (pill: PromptPill) => {
    if (isLoading) return;
    setActivePillId(pill.id);
    setQuery(pill.query);

    trackGaEvent('assistant_prompt_click', {
      event_category: 'AI Assistant',
      prompt_id: pill.id,
      prompt_label: pill.label,
      prompt_query: pill.query
    });

    handleSubmit(undefined, pill.query);
  };

  const handleConversionClick = (target: string, label: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('aeo_assistant_assisted', 'true');
    }

    trackGaEvent('assistant_conversion_click', {
      event_category: 'AI Assistant',
      conversion_target: target,
      conversion_label: label
    });

    closeModal();
  };

  const handleGuideClick = (match: TopMatch) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('aeo_assistant_assisted', 'true');
    }

    trackGaEvent('assistant_guide_click', {
      event_category: 'AI Assistant',
      guide_name: match.pageName,
      target_url: match.url,
      schema_type: match.schemaType || 'Article'
    });

    closeModal();
  };

  return (
    <>
      {/* Floating Assistant Launcher with iOS Safe-Area Inset Handling */}
      {!shouldSuppressLauncher && (
        <aside
          aria-label="AI Assistant Quick Launch"
          className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1.5rem+env(safe-area-inset-right,0px))] z-40 transition-all duration-300"
        >
          <button
            type="button"
            id="ai-assistant-trigger"
            data-testid="ai-assistant-trigger"
            onClick={openModal}
            aria-label="Chat with AI Bill (Press Control K)"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            className="group flex items-center gap-2.5 p-2 sm:px-4 sm:py-2.5 bg-[#0F172A]/95 hover:bg-[#1E293B] text-slate-100 rounded-full border border-slate-700/80 shadow-lg transition-all cursor-pointer backdrop-blur-md"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-[#22D3EE] border border-cyan-500/40 group-hover:scale-105 transition-transform">
              <Command className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide text-slate-200 pr-1">
              Chat with AI Bill
            </span>
          </button>
        </aside>
      )}

      {/* Accessible Modal Dialog with Dynamic Focus Trap & Safe Area Padding */}
      {isOpen && (
        <div
          id="ai-modal-dialog"
          data-testid="ai-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-modal-title"
          aria-describedby="ai-modal-desc"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-2xl bg-[#0A0F1D] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-slate-100 animate-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[#00E5FF]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 id="ai-modal-title" className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                    AEObility Knowledge Navigator
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-[#00E5FF] border border-cyan-500/30">
                      Entity Graph
                    </span>
                  </h2>
                  <p id="ai-modal-desc" className="text-xs text-slate-400">
                    Explore machine-readable answers on Answer Engine Optimisation.
                  </p>
                </div>
              </div>
              <button
                type="button"
                id="ai-modal-close"
                onClick={closeModal}
                aria-label="Close dialog"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {/* Suggestion Chips */}
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-slate-400 block mb-2.5">
                  Suggested Enquiries
                </label>
                <div className="flex flex-wrap gap-2">
                  {DEFAULT_SUGGESTION_PILLS.map((pill) => {
                    const isSelected = activePillId === pill.id;
                    return (
                      <button
                        key={pill.id}
                        type="button"
                        disabled={isLoading}
                        onClick={() => handlePillClick(pill)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-150 text-left flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-cyan-500/20 text-[#00E5FF] border-cyan-500/50 shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                            : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-cyan-500/30 hover:text-slate-100'
                        } disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
                      >
                        <span>{pill.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-60" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Response Display */}
              {isLoading && (
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3 text-cyan-400 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analysing semantic graph and synthesising response...</span>
                </div>
              )}

              {response && !isLoading && (
                <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-slate-200 text-sm leading-relaxed space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-cyan-500/20 pb-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Synthesised Entity Insight
                    </div>
                    {topMatch?.schemaType && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-[#00E5FF] border border-cyan-500/30">
                        {topMatch.schemaType}
                      </span>
                    )}
                  </div>

                  {/* Grounded Response Body with In-Text Linking */}
                  {topMatch && topMatch.pageName && response.includes(topMatch.pageName) ? (
                    <p className="whitespace-pre-line text-slate-300 font-sans leading-relaxed">
                      {response.split(topMatch.pageName).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <Link
                              href={topMatch.url}
                              onClick={() => handleGuideClick(topMatch)}
                              className="text-[#00E5FF] underline underline-offset-4 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
                            >
                              {topMatch.pageName}
                            </Link>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  ) : (
                    <p className="whitespace-pre-line text-slate-300 font-sans leading-relaxed">{response}</p>
                  )}

                  {/* Action Link CTAs */}
                  <div className="pt-3 border-t border-cyan-500/20 flex flex-wrap gap-2.5 items-center">
                    {topMatch?.url && (
                      <Link
                        href={topMatch.url}
                        onClick={() => handleGuideClick(topMatch)}
                        className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-[#00E5FF] border border-cyan-500/40 transition-colors shadow-[0_0_12px_rgba(0,229,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Guide: {topMatch.pageName}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    <Link
                      href="#diagnostic-scanner"
                      onClick={() => handleConversionClick('#diagnostic-scanner', 'Run Free Diagnostic Scan')}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                    >
                      <span>Run Free Diagnostic Scan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/solutions/aeo-sprint"
                      onClick={() => handleConversionClick('/solutions/aeo-sprint', 'Explore Fixed-Scope Sprints')}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                    >
                      <span>Explore Fixed-Scope Sprints</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800/80 bg-slate-900/60">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled={isLoading}
                  placeholder="Ask about AEO optimisation, entity schemas, or fixed-scope sprints..."
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 pr-24 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  aria-label="Submit search enquiry"
                  className="absolute right-2 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-600 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <span>Send</span>
                      <CornerDownLeft className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
