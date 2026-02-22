/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Ensure proper static export for Vercel
  output: 'standalone',
}

module.exports = nextConfig
