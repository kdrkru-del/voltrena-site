/** @type {import('next').NextConfig} */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? '').replace(/\/+$/, '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
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
