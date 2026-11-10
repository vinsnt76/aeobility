import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate browser source maps in production builds for Lighthouse and DevTools debugging
  productionBrowserSourceMaps: true,
  experimental: {
    inlineCss: true,
  },
  // 1. Inject Global CORS Headers for all external AI Agents
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ],
      },
      {
        source: "/.well-known/api-catalog",
        headers: [
          { key: "Content-Type", value: "application/linkset+json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/agent-card.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/agent-card",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/ai-agent.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/ai-agent",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/auth.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/oauth-protected-resource",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/oauth-authorization-server",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/openid-configuration",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/openapi.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/vcard.vcf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/vince-baker.vcf",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/api/markdown",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "Vary", value: "Accept" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      {
        source: "/assets/geo-banner",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/.well-known/poppy.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/acp.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/ucp",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/.well-known/http-message-signatures-directory",
        headers: [
          { key: "Content-Type", value: "application/http-message-signatures-directory+json; charset=utf-8" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,HEAD" },
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Vary", value: "Accept" },
          { key: "Link", value: '<https://aeobility.com.au/llms.txt>; rel="describedby"; type="text/markdown", <https://aeobility.com.au/AGENTS.md>; rel="documentation"; type="text/markdown", <https://aeobility.com.au/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", <https://aeobility.com.au/auth.md>; rel="service-doc"; type="text/markdown", <https://aeobility.com.au/.well-known/oauth-protected-resource>; rel="oauth-protected-resource"; type="application/json", <https://aeobility.com.au/.well-known/http-message-signatures-directory>; rel="http-message-signatures-directory"; type="application/http-message-signatures-directory+json", <https://aeobility.com.au/.well-known/poppy.json>; rel="personal-agent-protocol"; type="application/json", <https://aeobility.com.au/.well-known/acp.json>; rel="acp"; type="application/json", <https://aeobility.com.au/.well-known/ucp>; rel="ucp"; type="application/json", <https://aeobility.com.au/index.md>; rel="alternate"; type="text/markdown"' },
        ],
      },
    ];
  },

  // 1.5. RFC 9727 api-catalog, auth.md, and OAuth metadata rewrites
  async rewrites() {
    return [
      {
        source: '/.well-known/api-catalog',
        destination: '/api/api-catalog',
      },
      {
        source: '/.well-known/http-message-signatures-directory',
        destination: '/api/http-message-signatures-directory',
      },
      {
        source: '/.well-known/oauth-protected-resource',
        destination: '/api/oauth-protected-resource',
      },
      {
        source: '/.well-known/oauth-authorization-server',
        destination: '/api/oauth-authorization-server',
      },
      {
        source: '/.well-known/openid-configuration',
        destination: '/api/oauth-authorization-server',
      },
      {
        source: '/.well-known/ucp',
        destination: '/.well-known/ucp.json',
      },
      {
        source: '/.well-known/agent-card',
        destination: '/.well-known/agent-card.json',
      },
      {
        source: '/.well-known/ai-agent',
        destination: '/.well-known/ai-agent.json',
      },
      {
        source: '/.well-known/agent.json',
        destination: '/.well-known/agent-card.json',
      },
      {
        source: '/api/a2a',
        destination: '/.well-known/agent-card.json',
      },
      {
        source: '/auth.md',
        destination: '/api/auth-md',
      },
      {
        source: '/:path*.md',
        destination: '/api/markdown?path=/:path*',
      },
      {
        source: '/api/openapi.json',
        destination: '/openapi.json',
      },
    ];
  },

  // 2. Keep existing redirects intact
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aeobility.com.au',
          },
        ],
        destination: 'https://aeobility.com.au/:path*',
        permanent: true,
      },
      {
        source: '/vcard.vcf',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
      {
        source: '/my-portfolio',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
      {
        source: '/digital-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/perth',
        destination: '/services/ai-search-marketing/perth',
        permanent: true,
      },
      {
        source: '/knowledge-hub/digital-services',
        destination: '/knowledge-hub/tutorials',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/rag-misconceptions',
        destination: '/knowledge-hub/articles/retrieval-augmented-generation#rag-misconceptions',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/rag-faq',
        destination: '/knowledge-hub/articles/retrieval-augmented-generation#rag-faq',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/semantic-seo-vs-aeo',
        destination: '/knowledge-hub/semantic-seo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/positional-bias-mitigation',
        destination: '/knowledge-hub/articles/positional-bias-in-retrieval',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/ai-visibility-telemetry',
        destination: '/knowledge-hub/articles/structured-data-query-fan-out',
        permanent: true,
      },
      {
        source: '/knowledge-hub/structured-data-query-fan-out',
        destination: '/knowledge-hub/articles/structured-data-query-fan-out',
        permanent: true,
      },
      {
        source: '/knowledge-hub/telemetry-diagnostic-architecture',
        destination: '/knowledge-hub/articles/telemetry-diagnostic-architecture',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/assets/geo-banner',
        destination: '/services/geo-marketing',
        permanent: true,
      },
      {
        source: '/knowledge-hub/entity-authority-building',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/entity-authority',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/entity-authority',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/knowledge-hub/aeo/entity-authority-building',
        destination: '/knowledge-hub/articles/entity-authority-building',
        permanent: true,
      },
      {
        source: '/freelance-ai-consultant-perth',
        destination: '/about/freelance-ai-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-seo-consultant-perth',
        destination: '/about/freelance-seo-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-google-ads-consultant-perth',
        destination: '/about/freelance-google-ads-consultant-perth',
        permanent: true,
      },
      {
        source: '/freelance-digital-specialist-perth',
        destination: '/about/freelance-digital-specialist-perth',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/free-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/visibility-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/ai-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/ai-visibility-audit',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/diagnostics',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/tools/diagnostic',
        destination: '/diagnostic',
        permanent: true,
      },
      {
        source: '/knowledge-hub/competitor-overlap-semantic-dominance-framework',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/competitor-overlap',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/semantic-dominance-framework',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/competitor-overlap',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/semantic-dominance',
        destination: '/knowledge-hub/articles/competitor-overlap-semantic-dominance-framework',
        permanent: true,
      },
      {
        source: '/packages/the-aeobility-blueprint',
        destination: '/solutions/aeo-blueprint',
        permanent: true,
      },
      {
        source: '/packages/aeo-blueprint',
        destination: '/solutions/aeo-blueprint',
        permanent: true,
      },
      {
        source: '/packages/aeo-sprints',
        destination: '/solutions/aeo-sprint',
        permanent: true,
      },
      {
        source: '/packages/the-aeobility-sprint',
        destination: '/solutions/aeo-sprint',
        permanent: true,
      },
      {
        source: '/solutions/geo-services',
        destination: '/services/geo-marketing',
        permanent: true,
      },
      {
        source: '/knowledge-hub/case-studies/first-90-days',
        destination: '/knowledge-hub/case-studies/aeo-geo-blueprint-90-days',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/vibrational-alignment/:path*',
        destination: '/knowledge-hub/articles/machine-legibility-data-provenance',
        permanent: true,
      },
      {
        source: '/knowledge-hub/articles/vibrational-alignment',
        destination: '/knowledge-hub/articles/machine-legibility-data-provenance',
        permanent: true,
      },
      {
        source: '/knowledge-hub/vibrational-alignment/:path*',
        destination: '/knowledge-hub/articles/machine-legibility-data-provenance',
        permanent: true,
      },
      {
        source: '/knowledge-hub/vibrational-alignment',
        destination: '/knowledge-hub/articles/machine-legibility-data-provenance',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/how-to-build-entity-density/:path*',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/how-to-build-entity-density',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/how-bulid-entity-density/:path*',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/how-bulid-entity-density',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/entity-density/:path*',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      {
        source: '/knowledge-hub/tutorials/entity-density',
        destination: '/knowledge-hub/tutorials/how-to-audit-and-build-entity-density-for-aeo',
        permanent: true,
      },
      // Public Asset Reorganisation Redirects
      {
        source: '/AI_Visibility_Report_AEObility.pdf',
        destination: '/files/AI_Visibility_Report_AEObility.pdf',
        permanent: true,
      },
      {
        source: '/fullllms.txt',
        destination: '/llms-full.txt',
        permanent: true,
      },
      {
        source: '/apple-touch-icon.png',
        destination: '/icons/apple-touch-icon.png',
        permanent: true,
      },
      {
        source: '/android-chrome-192x192.png',
        destination: '/icons/android-chrome-192x192.png',
        permanent: true,
      },
      {
        source: '/android-chrome-512x512.png',
        destination: '/icons/android-chrome-512x512.png',
        permanent: true,
      },
      {
        source: '/favicon-16x16.png',
        destination: '/icons/favicon-16x16.png',
        permanent: true,
      },
      {
        source: '/favicon-32x32.png',
        destination: '/icons/favicon-32x32.png',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
