// const path = require('path')
const { path } = require('@vuepress/utils')
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
    '@api': path.resolve(__dirname, '/docs/components/apis')
  },
  plugins: [
    // ['sitemap', { hostname: 'https://ruzun88.github.io' }],
    // ['@vuepress/pwa', { skipWaiting: true }],
    [
      '@vuepress/register-components',
      {
        components: {
          SlackSendForm: path.resolve(__dirname, '/docs/components/SlackSendForm'),
        },
      },
    ],
  ],
  // plugins: {
  //   'sitemap': {
  //     hostname: 'https://ruzun88.github.io'
  //   },
  // },
}