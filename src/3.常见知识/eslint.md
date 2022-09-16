## 在vscode系统配置autofix属性

![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16151759979971.png)
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16151760258020.png)

## vscode 使用eslint 第一步

https://blog.csdn.net/xss392795158/article/details/88228922

## eslint.validate

![](https://gitee.com/yt46767/doc/raw/master/image-20210707150510623.png)

![](https://gitee.com/yt46767/doc/raw/master/image-20210707150543466.png)

## eslint commit前置钩子的相关设置

https://www.jianshu.com/p/fed0fbf95172

## eslint规则手册

带查询功能

https://cloud.tencent.com/developer/chapter/12618

## eslint所有规则

![image-20220621185403245](https://gitee.com/yt46767/doc/raw/master/image-20220621185403245.png)

![img](https://cdn.jsdelivr.net/npm/@qinyuanqiu/statics@1.0.5/images/subscription/eslint2.png)

http://t.zoukankan.com/qinyuandong-p-13649904.html

三大通用规则

https://blog.csdn.net/txl910514/article/details/76178988

规则强度是 airbnb > standard > recommended

https://www.jianshu.com/p/2d6550a83f06

 配置eslint语法检查和自动纠正

https://www.csdn.net/tags/NtTacg2sOTI2NDAtYmxvZwO0O0OO0O0O.html

设置

https://www.csdn.net/tags/NtzaUgwsODMxNjQtYmxvZwO0O0OO0O0O.html

https://zhuanlan.zhihu.com/p/74887917

https://blog.csdn.net/jasonsong2008/article/details/113571784

项目安装eslint

http://t.zoukankan.com/codexlx-p-14366241.html

常见问题

https://blog.csdn.net/jameszou707/article/details/121749796

与prettier配合

https://blog.csdn.net/qq_44209274/article/details/121233357

## eslint 测速提速

如果`TIMING`设置了环境变量,则eslint显示规则的花费时间.例如:

```
$ TIMING=1 eslint lib
Rule                         | Time (ms) | Relative
:----------------------------|----------:|--------:
valid-jsdoc                  |   203.798 |     6.7%
camelcase                    |   142.146 |     4.6%
no-unmodified-loop-condition |   136.811 |     4.5%
indent                       |   127.138 |     4.2%
no-undefined                 |   124.525 |     4.1%
keyword-spacing              |    85.397 |     2.8%
space-in-parens              |    76.179 |     2.5%
no-this-before-super         |    72.317 |     2.4%
no-implied-eval              |    69.945 |     2.3%
space-infix-ops              |    57.128 |     1.9%
```

另请参阅有关[Per-rule性能](http://eslint.org/docs/developer-guide/working-with-rules#per-rule-performance)的官方文档.

- 太糟糕了，它没有显示解析器计时器。我正在使用`@ typescript-eslint / parser`，它花了很长时间，想要一个基准。 <u class="">(3认同)</u>

我发现删除缓慢的规则并没有太大帮助，因为加载`eslint`和解析文件需要一段时间。

可以使用（[docs](https://eslint.org/docs/user-guide/command-line-interface#caching)）`--cache`选项显着加快处理速度。`eslint`[](https://eslint.org/docs/user-guide/command-line-interface#caching)

`eslint`在各种编辑器中使用“ [按需](https://github.com/mantoni/eslint_d.js)输入”时，安装[eslint_d](https://github.com/mantoni/eslint_d.js)可以`eslint`作为守护程序运行，并节省了`node`加载时间。

在我目前正在进行的项目中，将两者结合在一起`eslint_d`，`--cache`使起毛时间从4+秒缩短到0.17！

- I use vim with the [ALE](https://github.com/dense-analysis/ale) plugin for linting. Setting `let g:ale_javascript_eslint_executable = 'eslint_d --cache'` to use both `eslint_d` and `--cache` speed it up from ~1 second to be almost instant! <u class="">(2认同)</u>

[我的配置中哪些eslint规则很慢？ |](https://qa.1r1g.com/sf/ask/2692064721/)

## vuepress settings.json

```javascript
{
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "html",
      "markdown"
    ],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "search.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.hg": true,
      "**/CVS": true,
      "**/.DS_Store": true,
      "docs/docs/out/**": true,
      "packages/*/lib/**": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[markdown]": {
      "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
      }
    },
    "eslint.trace.server": "verbose"
  }
```

## element-plus settings.json

```javascript
{
  "cSpell.words": ["Element Plus", "element-plus"],
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": true,
  "npm.packageManager": "pnpm",
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "json",
    "jsonc"
  ],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "json",
    "jsonc"
  ],
  "vite.devCommand": "pnpm run dev -- --",
  "i18n-ally.localesPaths": "packages/locale/lang",
  "i18n-ally.enabledParsers": ["ts"],
  "i18n-ally.enabledFrameworks": ["vue", "vue-sfc"],
  "i18n-ally.keystyle": "nested",
  "iconify.includes": ["ep"],
  "unocss.root": "./docs"
}
```

## vscode 高效插件

https://blog.csdn.net/qq_21567385/article/details/119968366