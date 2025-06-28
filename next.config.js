// next.config.js
const nextConfig = {
  // Basic settings only
  compress: true,
  poweredByHeader: false,
  
  // Simple image config
  images: {
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
