import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',     
    images: {
    unoptimized: true,
  }, // nötig für GitHub Pages
  basePath: '/h_website', // Name deines Repos
};

export default nextConfig;
