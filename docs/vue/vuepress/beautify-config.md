---
lang: ko-KR
title: 복잡한 Config 정리하기
description: 설명
tags: ['vuepress', 'vuepress config']
---
# 복잡한 Config를 보기 좋게 만드는 방법
::: tip
Vuepress를 사용하다 보면, Config가 복잡해지기 시작합니다.   
수없이 길어지는 라인들... 보기에도 불편하고, 수정하기도 어렵죠.   
깔끔하게 정리하는 방법을 알아봅시다.
:::
**정리 결과**
``` js
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
}
```

## 무작정 따라하기
1. `.vuepress` 폴더 안에 `config` 폴더를 만들어주세요.
1. `config.js`에서 분리하고자 하는 scope을 정하세요. (예제에서는 locales를 사용합니다.)
    ``` js {2-13}
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
      }
      ...
    }
1. `config` 폴더 안에 `locales.js` 파일을 만들어주세요.
1. `locales.js` 파일을 열어 아래와 같이 내용을 채워주세요.
    ``` js
    module.exports = {
      // anything you want to configure
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
    }
    ```
1. `config.js` 파일로 돌아와 수정해주세요
    ``` js {1,4}
    const locales = require('./config/locales')

    module.exports = {
      locales: locales
      ...
    }
    ```

## 삽질로그
원리는 간단합니다. 코드 리팩토링과 동일하게 config를 리팩토링 하는 것입니다.   
이때, 주의해야 할 것은 두가지입니다.
1. 각 설정은 module.exports로 리턴해야 합니.   
   저는 분리한 설정을 function으로 만들어, export default로 노출시키려고 했습니다.   
   아래와 같은 오류로 실패...
   ```
   Unexpected token 'export'
   ```
   저는 backend 개발자라 잘 모르겠지만, 구글링 해보니 vuepress에서 es6 문법이 제대로 작동되지 않는것이 아닌가 싶습니다. (아니라면 가르침 부탁드립니다^^)
1. import가 아니라 require를 사용하여야 합니다.   
   import를 사용하면 아래와 같은 에러가 발생합니다.
   ```
   SyntaxError: Cannot use import statement outside a module
   ```
   아마 이것도 위와 같이 ES5 / ES6문제로 보입니다. 개발시 참고하세요 :)
   
#vuepress #vue #vuepress-config #vuepress-refactoring