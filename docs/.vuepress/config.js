const path = require('path')
const themeLocales = require('./config/themeLocales')
const locales = require('./config/locales')
const head = require('./config/inHeadTag')

module.exports = {
  locales: locales,
  head: head,
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: themeLocales,
  },
  alias: {
    '@assets': path.resolve(__dirname, '/docs/assets'),
  },
  plugins: [
    ['sitemap', { hostname: 'https://ruzun88.github.io/' }]
  ],
}