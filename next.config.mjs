/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
};

export default nextConfig;
