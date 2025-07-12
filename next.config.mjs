/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/Excel-Analytics-Platform', // Must match your repo name
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
