import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add CaseSensitivePathsPlugin to Webpack
    config.plugins.push(new CaseSensitivePathsPlugin());

    // Other customizations if needed
    return config;
  },
};

export default nextConfig;

