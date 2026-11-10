'use client';

import React from 'react';
import Link from 'next/link';
import { trackGaEvent } from '@/lib/gtag';

interface PackageSelectLinkProps {
  href: string;
  packageId: string;
  packageName: string;
  priceExGst: number;
  className: string;
  children: React.ReactNode;
}

export function PackageSelectLink({
  href,
  packageId,
  packageName,
  priceExGst,
  className,
  children,
}: PackageSelectLinkProps) {
  const handleClick = () => {
    trackGaEvent('package_selected', {
      package_id: packageId,
      package_name: packageName,
      price: priceExGst,
      currency: 'AUD',
    });
    trackGaEvent('select_item', {
      item_list_id: 'homepage_packages',
      item_list_name: 'Homepage Engagement Packages',
      items: [
        {
          item_id: packageId,
          item_name: packageName,
          price: priceExGst,
          currency: 'AUD',
        },
      ],
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export default PackageSelectLink;
