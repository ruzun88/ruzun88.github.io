const { keys } = require("./inHeadTag")

module.exports = {
  '/': {
    selectLanguageName: '한국어',
    navbar: getNavBar(),
    sidebar: getSideBar(),
  },
  '/en/': {
    selectLanguageName: 'English',
    navbar: getNavBar('/en'),
    sidebar: getSideBar('/en'),
  }
}

function getNavBar (prefix = '') {
  return [
    { text: 'Home', link: prefix + '/' },
    {
      text: 'Backend',
      children: [
        { text: 'Spring',
          children:[
            { text: 'Spring Security', link: prefix + '/spring/security/' },
            { text: 'Spring Boot', link: prefix + '/spring/boot/' }
          ]
        },
      ]
    },
    {
      text: 'Frontend',
      children: [
        { text: 'Vue',
          children:[
            { text: 'Vue', link: prefix + '/vue/itself/' },
            { text: 'Vuepress', link: prefix + '/vue/vuepress/' }
          ]
        },
      ]
    },
    { text: 'Github', link: 'https://www.github.com/ruzun88' },
    { text: 'Contact', link: '/contact/slack'}
  ]
}

function getSideBar (prefix = '') {
  let sidebar = {
    '/vue/vuepress' : [
      {
        text: 'Vuepress Tips (v2.x)',
        collapsable: true,
        children: [
          'beautify-config.md',
          'apply-i18n.md',
        ]
      }
    ],
    '/spring/security' : [
      {
        text: 'Spring Security',
        collapsable: true,
        children: [
          '403-forbidden',
        ]
      }
    ]
  }
  let ret = {}
  for (var key in sidebar) {
    let val = sidebar[key]
    ret[prefix + key] = val
  }
  return ret
}