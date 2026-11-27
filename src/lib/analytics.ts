import Clarity from '@microsoft/clarity';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const SKIP_CLARITY_TAG_KEYS = new Set(['query', 'search_term', 'card_message_id', 'target_url']);

/**
 * Dual-tracking analytics helper.
 * Sends full event parameters to GA4 (or dataLayer fallback) and mirrors the
 * event name to Microsoft Clarity as an API Smart Event.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...(params || {}),
    });
  }

  try {
    Clarity.event(eventName);
  } catch {
    // Clarity may not be initialised in restricted environments
  }
}

/**
 * Dual-tracking conversion helper.
 * Sends full parameters to GA4, attaches concise metadata as Clarity custom
 * session tags for recording filters, and triggers a Clarity Smart Event.
 */
export function trackConversion(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...(params || {}),
    });
  }

  try {
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (SKIP_CLARITY_TAG_KEYS.has(key)) return;
        Clarity.setTag(key, String(value));
      });
    }
    Clarity.event(eventName);
  } catch {
    // Clarity may not be initialised in restricted environments
  }
}

/**
 * Syncs cookie consent state across GA4 Consent Mode and Clarity Consent API v2.
 */
export function updateAnalyticsConsent(status: 'granted' | 'denied'): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      analytics_storage: status,
    });
  }

  try {
    Clarity.consentV2({
      ad_Storage: status,
      analytics_Storage: status,
    });
  } catch {
    // Clarity may not be initialised in restricted environments
  }
}
