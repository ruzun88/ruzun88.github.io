module.exports = [
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
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]