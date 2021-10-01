module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'ko-KR',
      title: 'ruzun devlog',
      description: 'Vue 문서',
    },
    '/en/': {
      lang: 'en-US',
      title: 'ruzun devlog',
      description: 'Vue-powered Static Site Generator',
    },
  },
  plugins: [
    [
      // '@vuepress/google-analytics',
      {
        'ga': 'G-WLKRXL08F6' // UA-00000000-0
      }
    ]
  ],
  head: [
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-WLKRXL08F6',
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-WLKRXL08F6');",
        ],
    ],
],

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: {
      '/': {
        selectLanguageName: '한국어',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Github', link: 'https://www.github.com/ruzun88' }
        ]
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Github', link: 'https://www.github.com/ruzun88' }
        ]
      },
    },
  },
}