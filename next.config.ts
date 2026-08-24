import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel runs this as a Next.js app. Static export is gone so preview
  // deployments get a URL per pull request.
  trailingSlash: false,
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
