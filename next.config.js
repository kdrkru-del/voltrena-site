/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/voltrena-site',
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
