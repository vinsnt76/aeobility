import { trackEvent } from '@/lib/analytics';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-3WVLWVG6VH';

/**
 * Standard GA4 + Microsoft Clarity dual-tracking event dispatcher.
 * Dispatches telemetry events to window.gtag (or window.dataLayer fallback)
 * and mirrors the event name to Microsoft Clarity via Clarity.event().
 */
export const trackGaEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {}
): void => {
  trackEvent(eventName, eventParams);
};
