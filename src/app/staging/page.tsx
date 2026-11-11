import React from 'react';
import { Metadata } from 'next';
import ClarityEngineStaging from '@/components/staging/ClarityEngineStaging';

export const metadata: Metadata = {
  title: "Staging Preview | AEObility",
  description: "Staging environment for AEObility design variations.",
  robots: {
    index: false,
    follow: false
  }
};

export default function StagingIndexPage() {
  return <ClarityEngineStaging />;
}
