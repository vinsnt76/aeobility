import React from 'react';
import Link from 'next/link';
import { NAVIGATION_DATA, FOOTER_NAVIGATION } from './NavData';

export function SSRFallbackNav() {
  return (
    <nav
      aria-label="Static Crawler Navigation"
      className="sr-only"
    >
      <ul>
        {NAVIGATION_DATA.map((l1, i) => (
          <li key={i}>
            {l1.href ? <Link href={l1.href}>{l1.title}</Link> : <span>{l1.title}</span>}
            {l1.children && l1.children.length > 0 && (
              <ul>
                {l1.children.map((l2, j) => (
                  <li key={j}>
                    <Link href={l2.href}>{l2.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {FOOTER_NAVIGATION.map((foot, k) => (
          <li key={`footer-${k}`}>
            <Link href={foot.href}>{foot.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SSRFallbackNav;
