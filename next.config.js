const { format } = require("path");

// next.config.js
const nextConfig = {

};

module.exports = nextConfig;

module.exports = {
  images: {
    format:['jpg'],
    domains: ['images.pexels.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
}



// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
