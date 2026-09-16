import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LP-project-1",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;