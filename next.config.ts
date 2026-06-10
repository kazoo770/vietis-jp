import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  serverExternalPackages: [],
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
