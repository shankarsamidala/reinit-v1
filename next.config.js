/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove these problematic configs
  // distDir: '.next',  // REMOVE THIS
  // generateBuildId: async () => {  // REMOVE THIS
  //   return 'build-' + Date.now()
  // },
  
  // Add output for static export if needed
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;