const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/translator',
  assetPrefix: '/translator',
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
