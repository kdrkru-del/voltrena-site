/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/voltrena-site',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
