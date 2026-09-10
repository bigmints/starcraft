import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: githubPages ? '/starcraft/' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
