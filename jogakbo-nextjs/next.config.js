/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.node = {
        fs: `empty`,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
