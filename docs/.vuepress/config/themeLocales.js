module.exports = {
  '/': {
    selectLanguageName: '한국어',
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Backend',
        children: [
          { text: 'Spring',
            children:[
              { text: 'Spring Security', link: '/spring/security' },
              { text: 'Spring Boot', link: '/spring/boot' }
            ]
          },
        ]
      },
      {
        text: 'Frontend',
        children: [
          { text: 'Vue',
            children:[
              { text: 'Vue', link: '/vue/itself' },
              { text: 'Vuepress', link: '/vue/vuepress' }
            ]
          },
        ]
      },
      { text: 'Github', link: 'https://www.github.com/ruzun88' }
    ],
    sidebar: {
      '/vue/vuepress' : [
        {
          text: 'Vuepress Tips',
          collapsable: true,
          children: [
            'beautify-config.md'
          ]
        }
      ]
    }
  },
  '/en/': {
    selectLanguageName: 'English',
    navbar: [
      { text: 'Home', link: '/en/' },
      // { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://www.github.com/ruzun88' }
    ]
  }
}
