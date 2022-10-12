const { i18n } = require('./i18n.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = nextConfig
