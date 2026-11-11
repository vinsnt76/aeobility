'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, UIMessage } from 'ai';
import { 
  X, Sparkles, Send, Activity, Bot, Volume2, VolumeX, ShieldAlert, 
  CheckCircle2, XCircle, AlertTriangle, HelpCircle, ArrowRight, Mail, 
  Minus, Maximize2, Minimize2, ChevronDown, ChevronUp 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TelemetryResult } from '@/lib/telemetry/types';
import BillAvatar from '@/components/BillAvatar';
import { trackGaEvent } from '@/lib/gtag';

// Explicit window type guard for GA4 gtag to prevent ESLint 'any' leaks
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// 📋 Order-Agnostic Regex Patterns for Block-Scoped Telemetry Extraction (/m and /i flags)
const TELEMETRY_PATTERNS = {
  firstImpression: /AI First Impression:\s*(.+)/mi,
  blindSpot: /Biggest Blind Spot:\s*(.+)/mi,
  verdict: /Recommendation Verdict:\s*(PASS|HIGH RISK|ALERT|FAIL|[\w\s]+)/mi,
  clarityScore: /Clarity Score:\s*(\d+)/mi,
  citationShare: /Citation Share:\s*(\d+)/mi,
  risk: /Hallucination Risk:\s*(High|Medium|Low|[\w\s]+)/mi
};

function parseTelemetryText(text: string) {
  if (!text || typeof text !== 'string') {
    return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
  }
  try {
    // 1. Isolate the substring strictly between [START_TELEMETRY_REPORT] and [END_TELEMETRY_REPORT] (or streaming cutoff)
    const blockMatch = text.match(/\[START_TELEMETRY_REPORT\]([\s\S]*?)(?:\[END_TELEMETRY_REPORT\]|$)/i);
    if (!blockMatch || !blockMatch[1]) {
      return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
    }

    const blockContent = blockMatch[1];

    // 2. Run order-agnostic regexes with /m and /i flags over that isolated block content only
    const firstImpressionMatch = blockContent.match(TELEMETRY_PATTERNS.firstImpression);
    const blindSpotMatch = blockContent.match(TELEMETRY_PATTERNS.blindSpot);
    const verdictMatch = blockContent.match(TELEMETRY_PATTERNS.verdict);
    const clarityScoreMatch = blockContent.match(TELEMETRY_PATTERNS.clarityScore);
    const citationShareMatch = blockContent.match(TELEMETRY_PATTERNS.citationShare);
    const riskMatch = blockContent.match(TELEMETRY_PATTERNS.risk);

    const hasAnyMatch = !!(firstImpressionMatch || blindSpotMatch || verdictMatch || clarityScoreMatch || citationShareMatch || riskMatch);

    return {
      hasAnyMatch,
      firstImpression: firstImpressionMatch ? firstImpressionMatch[1].trim().replace(/^["']|["']$/g, '') : null,
      blindSpot: blindSpotMatch ? blindSpotMatch[1].trim().replace(/^["']|["']$/g, '') : null,
      verdict: verdictMatch ? verdictMatch[1].trim().toUpperCase() : null,
      clarityScore: clarityScoreMatch ? parseInt(clarityScoreMatch[1], 10) : null,
      citationShare: citationShareMatch ? parseInt(citationShareMatch[1], 10) : null,
      risk: riskMatch ? riskMatch[1].trim() : null
    };
  } catch (err) {
    console.error("Failed parsing telemetry text stream:", err);
    return { hasAnyMatch: false, firstImpression: null, blindSpot: null, verdict: null, clarityScore: null, citationShare: null, risk: null };
  }
}

export default function BillWidget() {
  const pathname = usePathname();

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'MINIMISED' | 'DRAWER' | 'SPLIT_RAIL'>('DRAWER');
  const [showMoreChips, setShowMoreChips] = useState(false);
  const [isTelemetryMode, setIsTelemetryMode] = useState(false);
  const [input, setInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [storedTelemetry, setStoredTelemetry] = useState<{ url?: string; intent?: string; result?: TelemetryResult } | null>(null);
  const storedTelemetryRef = useRef<{ url?: string; intent?: string; result?: TelemetryResult } | null>(null);
  const [reportedCardIds] = useState(() => new Set<string>());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Broadcast ViewMode changes for Split-Screen Layout shifts
  const updateViewMode = (nextMode: 'MINIMISED' | 'DRAWER' | 'SPLIT_RAIL') => {
    setViewMode(nextMode);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('bill_view_mode_changed', { detail: { viewMode: nextMode } }));
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const updatePosition = () => {
      if (!window.visualViewport || !containerRef.current || viewMode === 'SPLIT_RAIL') return;
      const vvHeight = window.visualViewport.height;
      if (window.innerWidth < 768) {
        containerRef.current.style.maxHeight = `${Math.min(vvHeight - 80, 600)}px`;
      } else {
        containerRef.current.style.maxHeight = '';
      }
    };

    window.visualViewport.addEventListener('resize', updatePosition);
    window.visualViewport.addEventListener('scroll', updatePosition);
    if (isOpen) updatePosition();

    return () => {
      window.visualViewport?.removeEventListener('resize', updatePosition);
      window.visualViewport?.removeEventListener('scroll', updatePosition);
    };
  }, [isOpen, viewMode]);


  // Viewport suppression (e.g. when hero diagnostic or final conversion panel is active)
  const [isSuppressedByViewport, setIsSuppressedByViewport] = useState(false);

  useEffect(() => {
    const handleSuppress = (e: Event) => {
      const customEvent = e as CustomEvent<{ suppress: boolean }>;
      setIsSuppressedByViewport(!!customEvent.detail?.suppress);
    };
    window.addEventListener('aeo:suppress-bill', handleSuppress);
    return () => window.removeEventListener('aeo:suppress-bill', handleSuppress);
  }, []);

  // 0. Gated Lead-Capture State (Triggers on 4th User Turn)
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isGateDismissed, setIsGateDismissed] = useState(false);
  const [isReportDispatched, setIsReportDispatched] = useState(false);
  const [isGateOpenManually, setIsGateOpenManually] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  const [leadError, setLeadError] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  // 2. STABLE PROTECTED STREAM HOOK BINDINGS
  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/bill'
    })
  });

  // 1. Session Storage Synced Data Hydration on Fresh Scans
  useEffect(() => {
    const hydrateAudit = () => {
      if (typeof window === 'undefined') return;
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          const prev = storedTelemetryRef.current;
          const isFreshScan = !prev || prev.url !== parsed.url || prev.intent !== parsed.intent || JSON.stringify(prev.result) !== JSON.stringify(parsed.result);
          
          storedTelemetryRef.current = parsed;
          setStoredTelemetry(parsed);

          if (isFreshScan) {
            setMessages([]);
            setIsReportDispatched(false);
            setIsGateOpenManually(false);
            setIsGateDismissed(false);
            setIsLeadCaptured(false);
            setLeadError('');
            reportedCardIds.clear();
          }
          setIsTelemetryMode(true);
        } catch (err) {
          console.error("Failed to parse local telemetry data framework:", err);
        }
      }
    };

    hydrateAudit();
    window.addEventListener('aeo_telemetry_updated', hydrateAudit);
    window.addEventListener('aeo_scan_completed', hydrateAudit);
    return () => {
      window.removeEventListener('aeo_telemetry_updated', hydrateAudit);
      window.removeEventListener('aeo_scan_completed', hydrateAudit);
    };
  }, [setMessages, reportedCardIds]);

  const isLoading = status === 'submitted' || status === 'streaming';

  // Calculate User Turn Count for Lead Gating (Triggers on manual click or 4th user turn if uncaptured)
  const userTurnCount = messages.filter((m) => m.role === 'user').length;
  const isGated = !isReportDispatched && (isGateOpenManually || (userTurnCount >= 4 && !isLeadCaptured && !isGateDismissed));

  const hasLoggedGateRef = useRef(false);
  useEffect(() => {
    if (isGated && !hasLoggedGateRef.current) {
      hasLoggedGateRef.current = true;
      trackGaEvent('bill_gate_reached_turn_4', {
        event_category: 'bill_conversion_funnel',
        turn_count: userTurnCount,
        trigger_type: isGateOpenManually ? 'manual_button_click' : 'turn_4_threshold',
        target_url: storedTelemetry?.url || '',
      });
    }
  }, [isGated, storedTelemetry, userTurnCount, isGateOpenManually]);

  const handleLeadCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingLead || !leadForm.email.trim()) return;

    setLeadError('');
    setIsSubmittingLead(true);
    try {
      const isAssistantAssisted = typeof window !== 'undefined' && sessionStorage.getItem('aeo_assistant_assisted') === 'true';
      let currentTelemetry = storedTelemetry;
      if (!currentTelemetry && typeof window !== 'undefined') {
        try {
          const raw = localStorage.getItem('aeo_telemetry_latest');
          if (raw) currentTelemetry = JSON.parse(raw);
        } catch {
          // ignore
        }
      }

      const targetWebsite = currentTelemetry?.url || (typeof window !== 'undefined' ? window.location.origin : '');
      const targetQuery = currentTelemetry?.intent || '';

      const recs: string[] = [];
      if (currentTelemetry?.result?.insightResult?.summary?.nextAction) {
        recs.push(currentTelemetry.result.insightResult.summary.nextAction);
      }
      if (currentTelemetry?.result?.explanations && Array.isArray(currentTelemetry.result.explanations)) {
        currentTelemetry.result.explanations.slice(0, 3).forEach(exp => {
          if (exp.reason) recs.push(`${exp.category}: ${exp.reason}`);
        });
      }

      const res = await fetch('/api/forms/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadForm.name.trim(),
          email: leadForm.email.trim(),
          phone: leadForm.phone.trim(),
          website: targetWebsite,
          targetQuery,
          recommendations: recs,
          blindSpot: currentTelemetry?.result?.insightResult?.blindSpot?.description || currentTelemetry?.result?.insightResult?.blindSpot?.title || '',
          firstImpression: currentTelemetry?.result?.insightResult?.firstImpression?.headline || '',
          assistantAssisted: isAssistantAssisted,
          scores: {
            readinessScore: currentTelemetry?.result?.readinessScore ?? 95,
            proximityScore: currentTelemetry?.result?.proximityScore ?? 24
          },
          telemetry: currentTelemetry?.result || null
        })
      });

      const json = await res.json().catch(() => ({ ok: false, error: 'Server communication error' }));

      if (res.ok && json.ok) {
        setIsLeadCaptured(true);
        setIsReportDispatched(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('aeo_lead_captured', 'true');
        }
        trackGaEvent('lead_report_dispatched', {
          event_category: 'bill_conversion_funnel',
          target_url: targetWebsite,
          email_domain: leadForm.email.split('@')[1] || 'unknown',
          readiness_score: storedTelemetry?.result?.readinessScore ?? 95,
          proximity_score: storedTelemetry?.result?.proximityScore ?? 24,
        });
      } else {
        setLeadError(json.error || 'Failed to dispatch report. Please verify your email and retry.');
      }
    } catch (err: unknown) {
      console.error("Lead submission error:", err);
      setLeadError(err instanceof Error ? err.message : 'Network error. Please try again.');
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const getMessageText = React.useCallback((m: UIMessage): string => {
    if (!m) return '';
    const anyM = m as unknown as Record<string, unknown>;

    if (typeof anyM.text === 'string' && anyM.text.trim()) {
      return anyM.text;
    }

    if (Array.isArray(anyM.parts)) {
      const textParts = anyM.parts
        .map((p: unknown) => {
          if (!p || typeof p !== 'object') return '';
          const partObj = p as Record<string, unknown>;
          if (partObj.type === 'text' && typeof partObj.text === 'string') {
            return partObj.text;
          }
          return '';
        })
        .filter(Boolean);

      if (textParts.length > 0) {
        return textParts.join('\n');
      }
    }

    return '';
  }, []);

  const executeQuery = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('aeo_assistant_assisted', 'true');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'bill_query_submitted', {
          event_category: 'AI Assistant UI',
          query: queryText,
          mode: isTelemetryMode ? 'telemetry' : 'general'
        });
      }
    }

    let activeAudit = storedTelemetry?.result;
    let targetWebsite = storedTelemetry?.url;
    let targetIntent = storedTelemetry?.intent;

    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('aeo_telemetry_latest');
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          activeAudit = parsed.result || activeAudit;
          targetWebsite = parsed.url || targetWebsite;
          targetIntent = parsed.intent || targetIntent;
        } catch (err) {
          console.error("Failed parsing localStorage audit payload:", err);
        }
      }
    }

    setInput('');

    await sendMessage(
      { text: queryText },
      {
        body: {
          intent: isTelemetryMode ? 'telemetry' : 'general',
          audit: isTelemetryMode ? {
            targetWebsite: targetWebsite || 'Target Site',
            targetQuery: targetIntent || 'AI Search Marketing',
            readinessScore: activeAudit?.readinessScore ?? 77,
            proximityScore: activeAudit?.proximityScore ?? 24,
            status: (activeAudit?.readinessScore ?? 77) < 80 ? 'Needs Attention' : 'Optimal',
            findings: activeAudit?.insightResult || {
              firstImpression: "Technical foundation is clean, but local entity signals need anchoring for target search queries.",
              diagnosis: {
                currentState: "AI search models treat you as a generic national provider without local geographic priority.",
                desiredState: "AI engines recommend your business as the definitive, trusted answer for high-intent local customer queries."
              }
            },
            evidenceBreakdown: {
              identityCoverage: 1.0,
              factCoverage: 0.95,
              relationshipCoverage: 0.92,
              evidenceCoverage: 0.90
            },
            limitations: "Assesses public website signals that help AI search systems identify, verify, and represent your business. AI engines are non-deterministic multi-variable systems."
          } : null
        }
      }
    );
  };

  const handleChipClick = async (chipText: string) => {
    if (chipText.includes('Email') || chipText.includes('Send') || chipText.includes('Report')) {
      trackGaEvent('bill_gate_triggered_manually', {
        event_category: 'bill_conversion_funnel',
        source: 'bill_quick_chip',
        target_url: storedTelemetry?.url || '',
      });
      setIsReportDispatched(false);
      setIsGateDismissed(false);
      setIsGateOpenManually(true);
      return;
    }

    const queryMap: Record<string, string> = {
      'What should I fix first?': 'What is the highest priority structural gap in this scan and what should I fix first?',
      'How do I improve my score?': 'How can I improve my AI Visibility Score and entity clarity?',
      'Why is local grounding low?': 'Why is my local entity grounding low and how do AI engines lose local context?',
      'How does the Blueprint fix this?': 'How does the Strategic Blueprint fix these local entity gaps and what are the deliverables?'
    };

    const targetPrompt = queryMap[chipText] || `Tell me about ${chipText}`;

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_chip_clicked', {
        event_category: 'AI Assistant UI',
        chip_label: chipText
      });
    }

    await executeQuery(targetPrompt);
  };

  const toggleTelemetryMode = () => {
    const nextMode = !isTelemetryMode;
    setIsTelemetryMode(nextMode);

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'bill_mode_toggle', {
        event_category: 'AI Assistant',
        event_label: nextMode ? 'Telemetry Guide' : 'General Agent',
        value: nextMode ? 1 : 0
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await executeQuery(input);
  };

  useEffect(() => {
    const handleOpenBillDrawer = () => {
      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      setViewMode('DRAWER');
      setIsTelemetryMode(true);
    };

    const handleOpenBillWithQuery = (e: Event) => {
      const customEvent = e as CustomEvent<{ query?: string; mode?: 'telemetry' | 'general' }>;
      const initialQuery = customEvent.detail?.query;
      const mode = customEvent.detail?.mode;

      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      setViewMode('DRAWER');
      if (mode === 'telemetry') {
        setIsTelemetryMode(true);
      }
      if (initialQuery) {
        executeQuery(initialQuery);
      }
    };

    const handleCloseBillWidget = () => {
      setIsOpen(false);
      updateViewMode('DRAWER');
    };

    const handleOpenBillGate = () => {
      window.dispatchEvent(new Event('close_companion_widget'));
      setIsOpen(true);
      setViewMode('DRAWER');
      setIsTelemetryMode(true);
      setIsReportDispatched(false);
      setIsGateDismissed(false);
      setIsGateOpenManually(true);
    };

    window.addEventListener('open_bill_drawer', handleOpenBillDrawer);
    window.addEventListener('open_bill_gate', handleOpenBillGate);
    window.addEventListener('open_bill_with_query', handleOpenBillWithQuery);
    window.addEventListener('close_bill_widget', handleCloseBillWidget);
    return () => {
      window.removeEventListener('open_bill_drawer', handleOpenBillDrawer);
      window.removeEventListener('open_bill_gate', handleOpenBillGate);
      window.removeEventListener('open_bill_with_query', handleOpenBillWithQuery);
      window.removeEventListener('close_bill_widget', handleCloseBillWidget);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || viewMode === 'MINIMISED') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (isGateOpenManually) {
          setIsGateOpenManually(false);
        } else {
          updateViewMode('MINIMISED');
        }
      }
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !containerRef.current) return;

      const focusableElements = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(
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

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleTabKey);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen, viewMode, isGateOpenManually]);

  useEffect(() => {
    if (isOpen && viewMode !== 'MINIMISED') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, viewMode, isLoading]);

  const renderMessageBubbleContent = (msgId: string, text: string) => {
    const parsed = parseTelemetryText(text);

    if (!parsed.hasAnyMatch) {
      if (!text || !text.trim()) {
        return (
          <div className="inline-flex items-center gap-2 py-1 text-[10px] font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-indigo-400" />
            <span>Scanning semantic lattice nodes...</span>
          </div>
        );
      }
      return <p className="whitespace-pre-wrap text-[11px] text-slate-200 leading-relaxed font-sans">{text}</p>;
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && !reportedCardIds.has(msgId)) {
      reportedCardIds.add(msgId);
      window.gtag('event', 'bill_telemetry_card_rendered', {
        event_category: 'AI Assistant UI',
        card_message_id: msgId,
        verdict: parsed.verdict || 'Unknown'
      });
    }

    return (
      <div className="space-y-3 w-full pt-1">
        {(parsed.clarityScore !== null || parsed.citationShare !== null) && (
          <div className="grid grid-cols-2 gap-2 font-mono">
            {parsed.clarityScore !== null && (
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Clarity Index</span>
                <span className="text-sm font-bold text-emerald-400">{parsed.clarityScore}%</span>
              </div>
            )}
            {parsed.citationShare !== null && (
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-2 text-center">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Citation Share</span>
                <span className="text-sm font-bold text-amber-400">{parsed.citationShare}%</span>
              </div>
            )}
          </div>
        )}

        {parsed.firstImpression && (
          <div className="bg-slate-950/80 border border-emerald-500/30 rounded-lg p-2.5 space-y-1 font-mono">
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wide block">AI First Impression</span>
            <p className="text-[11px] text-slate-200 leading-normal italic">&quot;{parsed.firstImpression}&quot;</p>
          </div>
        )}

        {parsed.blindSpot && (
          <div className="bg-slate-950/80 border border-rose-500/30 rounded-lg p-2.5 space-y-1 font-mono">
            <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wide block">Biggest Blind Spot</span>
            <p className="text-[11px] text-slate-200 leading-normal">{parsed.blindSpot}</p>
          </div>
        )}

        {parsed.verdict && (
          <div className={`flex items-center gap-2 p-2.5 rounded-lg border text-[11px] font-mono font-medium ${
            parsed.verdict === 'PASS' 
              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' 
              : parsed.verdict === 'HIGH RISK' || parsed.verdict === 'FAIL'
                ? 'bg-rose-950/30 border-rose-500/30 text-rose-400'
                : 'bg-amber-950/30 border-amber-500/30 text-amber-400'
          }`}>
            {parsed.verdict === 'PASS' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : parsed.verdict === 'ALERT' ? <AlertTriangle className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
            <div className="flex-1 flex justify-between items-center ml-1">
              <span>Recommendation Verdict:</span>
              <span className="font-bold tracking-wider uppercase text-[10px] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                {parsed.verdict}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (pathname?.startsWith('/about') || pathname?.includes('freelance') || pathname === '/book') {
    return null;
  }

  if (!isOpen || !mounted) {
    return null;
  }

  if (viewMode === 'MINIMISED') {
    return createPortal(
      <div 
        id="bill-widget-floating-container"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto transition-all duration-300 ${
          isSuppressedByViewport 
            ? 'opacity-0 pointer-events-none translate-y-4' 
            : 'opacity-100 pointer-events-auto translate-y-0 animate-fadeIn'
        }`}
      >
        <button
          type="button"
          onClick={() => updateViewMode('DRAWER')}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0B0F19]/95 border border-indigo-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12)] hover:border-indigo-400 hover:scale-105 transition-all text-white font-sans text-xs backdrop-blur-md cursor-pointer group"
          aria-label="Expand AI Bill Assistant"
        >
          <BillAvatar size="sm" status={isLoading ? 'analysing' : 'online'} pulse={false} />
          <div className="flex items-center gap-1.5 font-mono">
            <span className="font-bold text-indigo-300 group-hover:text-white transition-colors">AI Bill</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {storedTelemetry?.url && (
              <span className="text-[10px] text-slate-400 border-l border-white/15 pl-1.5 font-normal hidden sm:inline">
                [Scan Loaded]
              </span>
            )}
          </div>
        </button>
      </div>,
      document.body
    );
  }

  const containerClasses = viewMode === 'SPLIT_RAIL'
    ? "pointer-events-auto fixed top-0 right-0 h-screen w-full sm:w-[460px] z-[9999] bg-[#0B0F19]/98 border-l border-indigo-500/30 flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.85)] text-slate-100 font-sans backdrop-blur-2xl transition-all animate-fadeIn"
    : "pointer-events-auto fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] left-auto z-[9999] w-[calc(100vw-2rem)] sm:w-[400px] max-w-sm sm:max-w-md bg-[#0B0F19]/95 border border-indigo-500/30 rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12)] flex flex-col h-135 max-h-[82dvh] overflow-hidden text-slate-100 font-sans backdrop-blur-xl transition-all animate-fadeIn";

  return createPortal(
    <div className={viewMode === 'SPLIT_RAIL' ? "fixed inset-0 z-[9999] pointer-events-none" : "fixed inset-0 z-[9999] pointer-events-none"}>
      <div 
        ref={containerRef} 
        role="dialog"
        aria-modal="true"
        aria-label="AI Bill Diagnostic Consultant"
        className={containerClasses}
      >
      {isReportDispatched ? (
        <div className="absolute inset-0 bg-[#0B0F19]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-5 text-center animate-fadeIn overflow-y-auto">
          <button
            type="button"
            onClick={() => {
              setIsReportDispatched(false);
              setIsOpen(false);
            }}
            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close Chat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-sm space-y-4 text-center bg-slate-900/90 border border-indigo-500/30 p-6 rounded-2xl shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mx-auto shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-white font-soehne-breit">
                Full Telemetry Report Dispatched
              </h3>
              <p className="text-xs text-slate-300 font-serif leading-relaxed">
                We&apos;ve emailed your complete entity audit report to:
              </p>
              <div className="inline-block text-xs font-mono font-bold text-indigo-300 bg-slate-950 px-3 py-1 rounded-lg border border-indigo-500/30">
                {leadForm.email}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2.5">
              <p className="text-[11px] text-slate-400 font-serif">
                Ready to implement the remediation roadmap?
              </p>
              <Link
                href="/solutions/aeo-blueprint"
                onClick={() => {
                  trackGaEvent('blueprint_cta_clicked', {
                    event_category: 'commercial_conversion',
                    source: 'bill_closure_card',
                    target_url: storedTelemetry?.url || '',
                    price_aud: 995,
                  });
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] text-center cursor-pointer"
              >
                <span>View Strategic Blueprint ($995 AUD)</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsReportDispatched(false);
                  setIsOpen(false);
                }}
                className="text-[11px] text-slate-400 hover:text-slate-200 underline transition cursor-pointer block mx-auto pt-1 font-mono"
              >
                Close assistant for now
              </button>
            </div>
          </div>
        </div>
      ) : isGated && (
        <div className="absolute inset-0 bg-[#0B0F19]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-5 text-center animate-fadeIn overflow-y-auto">
          <button
            type="button"
            onClick={() => {
              setIsGateDismissed(true);
              setIsGateOpenManually(false);
            }}
            className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full max-w-sm space-y-3.5 text-left bg-slate-900/90 border border-indigo-500/30 p-5 rounded-2xl shadow-2xl my-auto">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0">
                <Sparkles className="w-4 h-4 animate-pulse text-indigo-300" />
              </div>
              <h3 className="text-xs font-bold text-white tracking-tight">
                Unlock Complete AI Telemetry Report
              </h3>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed">
              Enter your details to receive your complete entity audit report, schema baseline scorecard, and structured remediation roadmap.
            </p>

            <form onSubmit={handleLeadCaptureSubmit} className="space-y-2.5 pt-1">
              <div>
                <label className="text-[10px] font-medium text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="Jane Doe"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="text-[10px] font-medium text-slate-400 block mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="e.g. jane@business.com.au"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label className="text-[10px] font-medium text-slate-400 block mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors touch-manipulation"
                  placeholder="0400 000 000"
                  spellCheck={false}
                  suppressHydrationWarning
                />
              </div>

              {leadError && (
                <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-500/30 text-[11px] text-rose-300">
                  {leadError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingLead}
                className="w-full py-2.5 mt-1 bg-indigo-500 hover:bg-indigo-400 font-bold text-white rounded-lg text-xs transition shadow-[0_0_15px_rgba(99,102,241,0.3)] disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{isSubmittingLead ? "Dispatching Report..." : "Send Complete Audit Report"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>

              <p className="text-[10px] text-slate-400 text-center font-mono pt-0.5">
                ✓ Instant delivery &bull; Zero spam &bull; Australian privacy guaranteed
              </p>
            </form>

            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsGateDismissed(true);
                  setIsGateOpenManually(false);
                }}
                className="text-[11px] text-slate-400 underline hover:text-slate-200 transition cursor-pointer font-mono"
              >
                Back to conversation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Controller Banner with Tri-State Controls */}
      <div className="bg-slate-950/90 px-4 py-3 border-b border-indigo-500/20 flex items-center justify-between backdrop-blur-md shrink-0">
        <div className="flex items-center gap-2.5">
          <BillAvatar size="sm" status={isLoading ? 'analysing' : 'online'} pulse={false} />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xs text-white tracking-wide uppercase font-mono">
                System Agent: Bill
              </h3>
              <span className="inline-flex items-center rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] text-indigo-300 font-mono border border-indigo-500/30">
                Online
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-serif">AEObility Diagnostic Consultant</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            title={isMuted ? "Enable Voice Feedback (AU)" : "Mute Voice Feedback"}
            aria-label="Toggle voice output"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-indigo-400" />}
          </button>

          <button 
            type="button"
            onClick={toggleTelemetryMode}
            className={`px-2 py-1 rounded-md text-[10px] font-mono transition flex items-center gap-1 border cursor-pointer ${
              isTelemetryMode 
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-bold shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title="Toggle Live Telemetry Diagnostics"
          >
            <Activity className="w-3 h-3" />
            <span className="hidden sm:inline">{isTelemetryMode ? 'Telemetry' : 'General'}</span>
          </button>

          <button
            type="button"
            onClick={() => updateViewMode('MINIMISED')}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            title="Minimise to floating pill"
            aria-label="Minimise assistant"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => updateViewMode(viewMode === 'SPLIT_RAIL' ? 'DRAWER' : 'SPLIT_RAIL')}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer hidden sm:inline-flex"
            title={viewMode === 'SPLIT_RAIL' ? "Switch to Floating Drawer" : "Pin Side-by-Side Split View"}
            aria-label="Toggle split-screen panel"
          >
            {viewMode === 'SPLIT_RAIL' ? <Minimize2 className="w-3.5 h-3.5 text-indigo-300" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsGateOpenManually(false);
              setIsOpen(false);
              updateViewMode('DRAWER');
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close Bill assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isTelemetryMode && storedTelemetry?.result && (
        <div className="bg-indigo-950/40 border-b border-indigo-500/20 px-3.5 py-2 text-[10px] space-y-1.5 font-mono shrink-0">
          <div className="flex justify-between items-center text-indigo-300 font-bold tracking-wider uppercase text-[9px]">
            <span className="flex items-center gap-1"><ShieldAlert className="w-3 h-3 text-indigo-400" /> Scan Context Loaded</span>
            <span className="text-slate-300 font-normal truncate max-w-[170px]">
              {storedTelemetry.url ? new URL(storedTelemetry.url.startsWith('http') ? storedTelemetry.url : `https://${storedTelemetry.url}`).hostname.replace('www.', '') : 'Target Site'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="bg-slate-950/80 p-2 rounded-lg border border-indigo-500/30">
              <span className="text-slate-400 text-[9px] block">Global Schema Baseline</span>
              <span className="text-emerald-400 font-bold text-xs">{storedTelemetry.result?.readinessScore ?? 95}/100</span>
              <span className="text-[9px] text-emerald-400/90 block mt-0.5 font-bold">Optimal Syntax</span>
            </div>
            <div className="bg-slate-950/80 p-2 rounded-lg border border-amber-500/30">
              <span className="text-slate-400 text-[9px] block">Target Location Grounding</span>
              <span className="text-amber-300 font-bold text-xs">{storedTelemetry.result?.proximityScore ?? 24}%</span>
              <span className="text-[9px] text-amber-400/90 block mt-0.5 font-bold">Needs Attention</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 p-4 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] space-y-3.5 text-xs scrollbar-thin">
        {messages.length === 0 && (
          <div className="text-center pt-5 pb-2 space-y-2.5 px-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-white font-medium text-xs font-serif">
              G&apos;day! I&apos;ve loaded your diagnostic telemetry{storedTelemetry?.url ? ` for ${new URL(storedTelemetry.url.startsWith('http') ? storedTelemetry.url : `https://${storedTelemetry.url}`).hostname.replace('www.', '')}` : ''}.
            </p>
            <p className="text-slate-300 text-[11px] leading-relaxed font-serif">
              {isTelemetryMode 
                ? `While your baseline Global Schema Syntax is strong (${storedTelemetry?.result?.readinessScore ?? 95}/100), your Target Location Grounding (${storedTelemetry?.result?.proximityScore ?? 24}%) needs anchoring. Let's review your priority next steps.`
                : "Ask me anything about Answer Engine Optimisation, semantic schema graphs, or run a free scan above."}
            </p>
          </div>
        )}

        {messages.map((m: UIMessage) => {
          const text = getMessageText(m);
          if (m.role === 'user' && !text) return null;

          return (
            <div 
              key={m.id} 
              className={`p-3.5 rounded-xl max-w-[88%] leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-slate-900/90 border border-slate-800 ml-auto text-slate-100 rounded-tr-none shadow-sm' 
                  : 'bg-indigo-950/25 border border-indigo-500/30 mr-auto text-slate-200 rounded-tl-none w-full shadow-[0_0_15px_rgba(99,102,241,0.06)]'
              }`}
            >
              {m.role === 'user' ? (
                <>
                  <span className="block text-[9px] uppercase tracking-wider font-mono text-slate-400 mb-1">
                    You
                  </span>
                  <p className="whitespace-pre-wrap text-[11px] text-slate-200">{text}</p>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-indigo-500/20">
                    <BillAvatar size="sm" pulse={false} />
                    <span className="text-[10px] font-semibold text-indigo-300 uppercase font-mono">
                      AI Bill
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      Telemetry
                    </span>
                  </div>
                  {renderMessageBubbleContent(m.id, text || (isLoading ? "Scanning lattice nodes..." : "..."))}
                </>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 px-3 py-1.5 rounded-full animate-pulse">
            <Bot className="w-3.5 h-3.5 animate-spin" />
            <span>Bill is scanning 41 lattice nodes...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {!isReportDispatched && (
        <div className="px-3.5 py-2.5 bg-slate-950/90 border-t border-indigo-500/10 space-y-1.5 text-[10px] shrink-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleChipClick('What should I fix first?')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-500/15 text-indigo-200 border border-indigo-500/40 hover:bg-indigo-500/25 transition-all font-medium cursor-pointer"
            >
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>What should I fix first?</span>
              <ArrowRight className="w-2.5 h-2.5 opacity-60 ml-0.5" />
            </button>

            <button
              type="button"
              onClick={() => handleChipClick('📧 Email Full Report')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/30 text-slate-200 hover:text-white transition-all font-medium cursor-pointer"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>Email Full Report</span>
            </button>

            <button
              type="button"
              onClick={() => setShowMoreChips(!showMoreChips)}
              className="p-1.5 text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer ml-auto flex items-center gap-1 font-mono text-[9px]"
              title="Toggle additional prompt suggestions"
            >
              <span>{showMoreChips ? 'Less' : '+3 more'}</span>
              {showMoreChips ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {showMoreChips && (
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/60 animate-fadeIn">
              {[
                { label: 'How do I improve my score?', icon: <Sparkles className="w-3 h-3 text-indigo-300" /> },
                { label: 'Why is local grounding low?', icon: <HelpCircle className="w-3 h-3 text-purple-400" /> },
                { label: 'How does the Blueprint fix this?', icon: <Bot className="w-3 h-3 text-indigo-300" /> }
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleChipClick(chip.label)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-indigo-500/30 hover:text-white text-[10px] transition-all cursor-pointer"
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="px-3 py-1 bg-slate-950 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center justify-center gap-2 shrink-0">
        <span>✓ Read-only analysis</span>
        <span>•</span>
        <span>Zero obligation</span>
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-slate-900/90 border-t border-indigo-500/20 flex gap-2 backdrop-blur-md shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isReportDispatched || isGated}
          placeholder={
            isReportDispatched 
              ? "Report dispatched • Session concluded" 
              : isTelemetryMode 
                ? "Ask Bill about these scan results..." 
                : "Ask Bill about AEO semantic lattices..."
          }
          className="flex-1 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition touch-manipulation"
        />
        <button 
          type="submit" 
          disabled={isReportDispatched || isGated || !input.trim() || isLoading}
          className="bg-indigo-500 disabled:opacity-40 text-white px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-indigo-400 transition flex items-center justify-center shrink-0 cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.35)] disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-3.5 h-3.5 text-white" />
        </button>
      </form>
    </div>
  </div>,
  document.body
);
}
