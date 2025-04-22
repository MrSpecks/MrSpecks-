/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-image-host.com'], // Add trusted image sources if using next/image
    }
  };
  
  module.exports = nextConfig;