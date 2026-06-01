import type { NextConfig } from "next";

const localizedPagePaths = [
  "/about",
  "/animal-charades-game",
  "/charades-generator-for-kids",
  "/charades-ideas",
  "/christmas-charades-generator",
  "/classroom-charades-guide",
  "/contact",
  "/disney-charades-generator",
  "/emotion-charades",
  "/family-game-night",
  "/family-game-night-ideas",
  "/faq",
  "/funny-charades-for-adults",
  "/hard-charades-ideas",
  "/halloween-party-games",
  "/how-to-play-imposter-game",
  "/how-to-use",
  "/imposter-game",
  "/imposter-game/play",
  "/imposter-game-word-list",
  "/movie-charades-generator",
  "/online-charades-guide",
  "/pictionary-word-generator",
  "/privacy-policy",
  "/quick-play-kit",
  "/random-charades-generator",
  "/reverse-charades-game",
  "/terms-of-service",
  "/truth-or-dare-generator",
  "/would-you-rather-generator",
  "/bible-charades",
  "/christmas-party-games",
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imglab.dev',
        pathname: '/svg/**',
      },
      {
        protocol: 'https',
        hostname: 'fwfw.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acidtools.com',
        pathname: '/assets/images/**',
      },
    ],
  },
  // Cloudflare Workers configuration
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Enable Server Components for SSR
  serverExternalPackages: [],
  // Optimize for CF Workers environment
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds for now
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/word-charades-generator",
        destination: "/",
        permanent: true,
      },
      {
        source: "/word-charades-generator/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/word-charades-generator",
        destination: "/es/",
        permanent: true,
      },
      {
        source: "/es/word-charades-generator/",
        destination: "/es/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/es",
        headers: [
          {
            key: "Content-Language",
            value: "es",
          },
        ],
      },
      {
        source: "/es/:path*",
        headers: [
          {
            key: "Content-Language",
            value: "es",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/en",
      },
      ...localizedPagePaths.map((path) => ({
        source: path,
        destination: `/en${path}`,
      })),
    ];
  },
};

export default nextConfig;
