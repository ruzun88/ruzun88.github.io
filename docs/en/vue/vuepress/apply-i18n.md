---
lang: en-US
title: How to apply i18n
description: This page is for practical vuepress i18n
tags: ['vuepress', 'vuepress i18n']
---
# Practical i18n with Vuepress
::: tip
Vuepress provides basic guide for applying i18n, but it's to short, not practical.   
In this page, I will explain how to apply PRACTICAL i18n in vuepress.
:::

## i18n Basic
In vuepress, you should apply i18n on two spots.
1. site config (Meta for your vuepress site)
2. theme config (Navbar, sidebar, etc)   
   
All these two should be defined at `config.js` file.   
The keyword is `locales` and `themeConfig.locales`.

### Apply to Site Config
Same as official guide, write down your internationalization information according to the uri.   
At this point, uri(`/`, `/en/`) is very important. These uri must same as folder structure.   
If you enter `/`, it is Korean page and reads README.md file at `root` directory.   
If you enter `/en/`, it is English page and reads README.md file at `root/en` directory, likewise.   
If the file not exists, you can see 404...
``` js
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
}
```

### Apply to Theme config
This guide is for i18n on default theme   
Fill `themeConfig`, `locales` like below.   
After this, you can see Language button on navbar like this.
![Language 정보](@assets/vue/vuepress/apply-i18n-01.png)

``` js
module.exports = {
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: '한국어',
        ...
      },
      '/en/': {
        selectLanguageName: 'English',
        ...
      }
    }
  }
}
```

## Practical vuepress i18n (advance)
I know, it's not practical, just same as guide.   
Now, here we go.
There are some minor issues when you follow just basic guide.

### Issue for Vuepress i18n
Vuepress doesn't support same structure navbar, sidebar for internationalization, automatically.   
Some can say it's good, but I should make exactly same structure documentation. (maybe also you)   
Here's the issue.   
You have to write almose same code, twice, three comes, perhaps more, according to kinds of languages.   
Because, routing uri is different by language.

### How to manage it?
Down below is part of my vuepress config. You can see `navbar` and `sidbar` in **`/`, `/en/`** is 99% same.   
Just uris are different. Loot at the highlighted code lines.   

``` js{6,12,13,21,35,41,42,50}
// themeConfig.locales
{
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
      {
        text: 'Backend',
        children: [
          { text: 'Spring',
            children:[
              { text: 'Spring Security', link: '/en/spring/security' },
              { text: 'Spring Boot', link: '/en/spring/boot' }
            ]
          },
        ]
      },
      { text: 'Github', link: 'https://www.github.com/ruzun88' }
    ],
    sidebar: {
      '/en/vue/vuepress' : [
        {
          text: 'Vuepress Tips',
          collapsable: true,
          children: [
            'beautify-config.md'
          ]
        }
      ]
    }
  }
}
```
Fortunately, I support just two languages, Korean and English. If you need to support more languages... does config file should be longger infinitely? It's just some different uri prefix!   
As you expected, it should be refactored.   
At now, my config looks like this. I made generally usable function and every configs are called by function.   
**Now you can use same navbar, same sidebar easily!**
``` js
/*
   config.js
*/
const themeLocales = require('./config/themeLocales')
module.exports = {
  locales: locales,
  head: head,
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: themeLocales,
  },
```
``` js
/*
   config/themeLocales.js
*/
module.exports = {
  themeConfig: {
    locales: {
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
    { text: 'Github', link: 'https://www.github.com/ruzun88' }
  ]
}

function getSideBar (prefix = '') {
  let sidebar = {
    '/vue/vuepress' : [
      {
        text: 'Vuepress Tips',
        collapsable: true,
        children: [
          'beautify-config.md',
          'apply-i18n.md',
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
```

Now, you don't have to worry about consistency between different language pages,   
also you can manange your config clean even if you need to support new languages :)   
Hope this page helps you.   
Thanks XD