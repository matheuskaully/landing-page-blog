import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withContentlayer(nextConfig)
