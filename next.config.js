/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

module.exports = nextConfig;