'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'zk016zby6e';

function getRouteSection(pathname: string): string {
  if (!pathname || pathname === '/') return 'home';
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment || 'home';
}

export default function MicrosoftClarity() {
  const initialized = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (initialized.current || !CLARITY_PROJECT_ID) return;
    Clarity.init(CLARITY_PROJECT_ID);
    Clarity.consentV2({
      ad_Storage: 'granted',
      analytics_Storage: 'granted',
    });
    initialized.current = true;
  }, []);

  useEffect(() => {
    if (!initialized.current || !pathname) return;
    Clarity.setTag('route_section', getRouteSection(pathname));
    Clarity.setTag('route_path', pathname);
  }, [pathname]);

  return null;
}
