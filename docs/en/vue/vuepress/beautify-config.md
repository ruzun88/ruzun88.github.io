---
lang: en-US
title: How to refactor Configs
description: This page is for vuepress config refactoring
tags: ['vuepress', 'vuepress config']
---
# How to refactor complex configs?
::: tip
When you use Vuepress long time, Configs are getting more dirty.   
Hundreds of lines will make you confused...   
It's really hard to read, recognize, also change configs.
This page tells how to manage your configuration with multi files.
:::
**After** refactor your `Config`, your `config.js` may similar to this.
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

## Just Follow Along
1. In `.vuepress` folder, make `config` folder.
1. In `config.js` file, you need to decide which part would be refactored. (In this page, I gonna use `locales`.)
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
1. In `config` Folder, make `locales.js` file.
1. Open `locales.js` file, and move codes you selected.
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
1. Go back to `config.js` file, and modify your code like this.
    ``` js {1,4}
    const locales = require('./config/locales')

    module.exports = {
      locales: locales
      ...
    }
    ```

## Failed Logs
Conceptually, it is very simple to refactor configs.   
Just refactor configs like normal code lines   
But, you should remind these two.
1. each separated file config shoule return with `module.exports`   
   At first, I made my configs with function, and tried with `export default`.   
   But I failed with this exception...
   ```
   Unexpected token 'export'
   ```
   I googled, and found the reason. In vuepress, it seems not properly work with es6. (If wrong, let me know.)
1. You should you `require`, not `import`.   
   if you use `import`, you may see this exception.
   ```
   SyntaxError: Cannot use import statement outside a module
   ```
   It might be same issue (ES5 / ES6)

Hope this helps you. thanks

#vuepress #vue #vuepress-config #vuepress-refactoring