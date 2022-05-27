/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  webpack: (config, {isServer, webpack}) => {
    if (!isServer) {
      config.node = {
        fs: `empty`,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
