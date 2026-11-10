'use client';

import React, { useEffect, useRef } from 'react';
import { trackGaEvent } from '@/lib/gtag';

interface TelemetryViewTrackerProps {
  formId?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function TelemetryViewTracker({
  formId = 'how_it_works_preview',
  children,
  className,
  id,
}: TelemetryViewTrackerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined') {
            trackGaEvent('audit_form_view', {
              form_id: formId,
              page_location: window.location.pathname,
            });
          }
          observer.disconnect(); // Track once per page load
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [formId]);

  return (
    <aside id={id} ref={ref} className={className} aria-label="Diagnostic telemetry sample preview">
      {children}
    </aside>
  );
}

export default TelemetryViewTracker;

