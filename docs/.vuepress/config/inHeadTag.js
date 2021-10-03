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
]