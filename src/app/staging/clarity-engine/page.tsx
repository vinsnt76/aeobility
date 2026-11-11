import React from 'react';
import { Metadata } from 'next';
import ClarityEngineStaging from '@/components/staging/ClarityEngineStaging';

export const metadata: Metadata = {
  title: "The Clarity Engine | AEObility AI Search Staging",
  description: "Staging preview of AEObility's redesigned homepage: The Clarity Engine. Engineering-grade conversion and diagnostic architecture for Australian AI search visibility.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ClarityEngineStagingPage() {
  return <ClarityEngineStaging />;
}
