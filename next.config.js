/** @type {import('next').NextConfig} */
const { redirectRules, rewritesRules } = require('./config/routes');

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesRules;
  },
  async redirects() {
    return redirectRules;
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
