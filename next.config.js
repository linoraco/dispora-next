/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["217.15.171.240"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cdn.sanity.io",
        port: "4000",
      },
    ],
  },
};

module.exports = nextConfig;
