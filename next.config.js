/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove all custom configs that are causing issues
};

module.exports = nextConfig;