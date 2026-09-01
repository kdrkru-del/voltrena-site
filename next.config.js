/** @type {import('next').NextConfig} */
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true' || process.env.NEXT_PUBLIC_BASE_PATH === '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : (isCustomDomain ? '' : '/voltrena-site');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
    workerThreads: true,
    webpackBuildWorker: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
