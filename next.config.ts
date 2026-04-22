import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'veriwatch.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
