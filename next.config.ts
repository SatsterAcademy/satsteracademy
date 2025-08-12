import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This makes Vercel skip ESLint errors when building
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
