'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const GlobalConsentBanner = dynamic(
  () => import('@/components/GlobalConsentBanner'),
  { ssr: false }
);

const BillWidget = dynamic(
  () => import('@/components/BillWidget'),
  { ssr: false }
);

const AIModalAssistant = dynamic(
  () => import('@/components/AIModalAssistant'),
  { ssr: false }
);

export function ClientOverlays() {
  return (
    <>
      <GlobalConsentBanner />
      <BillWidget />
      <AIModalAssistant />
    </>
  );
}

export default ClientOverlays;
