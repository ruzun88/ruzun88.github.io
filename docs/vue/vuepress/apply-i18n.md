---
lang: ko-KR
title: i18n 적용하기
description: Vuepress에 i18n(다국어) 적용하는 방법
tags: ['vuepress', 'vuepress i18n']
---
# Vuepress에 i18n을 적용하는 방법
::: tip
Vuepress에서 i18n을 적용하는 방법은 기본 가이드를 통해 제공됩니다. 하지만 너무 축약되어있습니다.   
이 페이지를 통해서 실전에 적용할 수 있는 방법을 알아봅시다.
:::

## i18n 기본 적용
vuepress의 i18n은 2군데에 적용해야 합니다.
1. site config (사이트의 메타 정보)
2. theme config (내부 동작. Navbar, sidebar 등)   
   
위 두 가지 모두 설정 파일, `config.js`에서 이루어집니다.   
적용할 때, 보아야 하는 keyword는 `locales` 입니다.

### site에 적용하기
공식 가이드와 같이, 아래와 같이 uri에 따른 다국어 정보를 등록해줍니다.   
여기서, `/`와 `/en/`의 uri는 매우 중요합니다. 마크다운(.md)으로 작성되는 폴더의 구조와 동일하기 때문입니다.   
즉, `/`에 들어가면, 한글 페이지에 대한 url이며, 최상위 폴더의 README.md 파일을 읽습니다.   
마찬가지로, `/en/`에 들어가면, 영어 페이지에 대한 url이며, `/en/` 폴더 안의 README.md 파일을 읽습니다.   
만약 파일이 없다면, 404를 보실 수 있습니다...
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

### theme에 적용하기
이 가이드는 default theme에 i18n을 적용하는 방법입니다.   
공식 가이드와 같이, `themeConfig` 안에 `locales` 정보를 채워줍니다.
이 과정이 끝나고 나면, 상단 메뉴바(navbar)에 Language 정보가 뜨게 됩니다.
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

## 실전 i18n (advance)
위의 예제를 실전에서 쓰기에는 minor한 몇가지 문제점이 있습니다.

### Vuepress i18n의 문제점
Vuepress는 언어마다 페이지 구성을 다르게 할 수 있습니다. 상단의 메뉴바(navbar)도, sidebar도 언어마다 다르게 설정할 수 있다는 것입니다.   
누군가에게는 장점이 될 수 도 있겠지만, 저는 영어와 한국어 페이지를 동일하게 만들기 때문에, 같은 설정을 두번 해주어야 합니다.   
왜냐하면, 언어에 따라 routing uri 자체가 다르기 때문입니다.

### 어떻게 수정할까?
아래는 제 vuepress 문서의 config 일부입니다. `/`와 `/en/`의 navbar와 sidebar를 보면, 거의 99%가 동일합니다.   
uri 부분만 다릅니다. `navbar`의 `link` 정보와, `sidebar`의 `key` 정보를 보면 알 수 있습니다.   

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
지금은 다행히 한국어와 영어만 있지만, 더 많은 언어를 지원해야 하는 상황이 온다면... uri의 prefix가 다르다고 파일이 무한정 확장되어 할까요..?   
다들 예상하셨듯, 이것 또한 refactoring 되어야 합니다.   
지금의 제 config는 아래와 같이 정리되어 있습니다. 모두 함수로 빼두었고, prefix만 달라질 수 있도록 함수를 만들었습니다.
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

이렇게 하면, 언어별로 theme locales 정보를 따로 관리할 필요가 없습니다.   
그리고, 새로운 언어을 지원해야 할 때도, config를 깔끔하게 유지할 수 있을거라 생각합니다 :)
도움이 되었기를 바라면서 글을 마칩니다.
읽어주셔서 감사합니다.