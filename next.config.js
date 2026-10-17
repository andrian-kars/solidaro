// Static export for GitHub Pages. andrian-kars.com proxies /solidaro to the Pages build,
// so the site is built for the same base path in both places.
const basePath = "/solidaro";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
};

module.exports = nextConfig;
