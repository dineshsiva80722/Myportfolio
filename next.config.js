// next.config.js
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });
  
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // DO NOT put PWA options here (avoid nesting or adding arrays)
  };
  
  module.exports = withPWA(nextConfig);
  