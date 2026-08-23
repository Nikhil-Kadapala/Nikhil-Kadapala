import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // A stray package-lock.json in $HOME makes Next infer the wrong workspace root.
  outputFileTracingRoot: import.meta.dirname,
};
export default nextConfig;
