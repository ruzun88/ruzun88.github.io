const path = require('path')
const themeLocales = require('./config/themeLocales')
const locales = require('./config/locales')
const head = require('./config/inHeadTag')

module.exports = {
  locales: {
    '/': {
      lang: 'ko-KR',
      title: 'ruzun devlog',
      description: 'Vue 문서',
    },
    '/en/': {
      lang: 'en-US',
      title: 'ruzun devlog',
      description: 'Vue-powered Static Site Generator',
    }
  },
  head: head,
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: themeLocales,
  },
  alias: {
    '@assets': path.resolve(__dirname, '/docs/assets'),
  },
}