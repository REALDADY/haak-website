/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (no Node server).
  output: 'export',
  pageExtensions: ['ts', 'tsx'],
  images: {
    // GitHub Pages cannot run the Next.js image optimizer.
    unoptimized: true,
  },
}

export default nextConfig
