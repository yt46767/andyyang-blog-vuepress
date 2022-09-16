### 官网(旧) - GitBook (Legacy)

新的访问不了时，可使用：
https://legacy.gitbook.com/
但原因其实是新官网加载太慢，让网页空置一下就出来了。

## 安装

### 安装gitbook-cli客户端

npm install gitbook-cli -g

## 基础

### 查看gitbook版本，并安装gitbook

gitbook -V
输出结果：

```text
CLI version: 2.3.2  
GitBook version: 3.2.3  
```

## 语法

### 块用法：/>


标签需正常闭合。

### 多层目录：

#### javascript

- ##### [#](http://localhost:8080/my-blog-vuepress/1_前端/2_框架/Gitbook.html#ecmascript)ECMAscript

  - ES6特性
  - ES7特性
  - ES8特性
  - ES9特性

### 段首开头：

写法：（错误）
大幅度发到付 写法：（正确）
大幅度发到付

### 正确的字体样式：

（正确）

### 错误的字体样式：

（错误）

- **[优化点]**
- **[安全点]**

### 序号加粗

**1.**

### 加圈的序号

1

## 插件

### Gitbook默认自带有5个插件：

highlight： 代码高亮
search： 导航栏查询功能（不支持中文）
sharing：右上角分享功能
font-settings：字体设置（最上方的"A"符号）
livereload：为GitBook实时重新加载

### gitbook插件

logo: "insert-logo"
高级搜索（支持中文）: "search-pro"
代码复制按钮: "copy-code-button"
导航目录折叠: "expandable-chapters"
导航目录展开: "expandable-chapters"
导航目录折叠: "chapter-fold"
回到顶部: "back-to-top-button"
在右上角添加github图标: "github"
分享当前页面: "sharing-plus"
页面添加页脚: "tbfed-pagefooter"
打赏: "donate"
自动生成目录树："atoc"
根据文件夹自动生成SUMMARY.md文件: "summary"
菜单可以折叠: "toggle-chapters"
主题插件, 修改标题和表格颜色: "theme-comscore"
侧边栏宽度可调节: "splitter"
参考：
http://gitbook.zhangjikai.com/plugins.html

### atoc

- 用法：
  book.json

```text
  "plugins": [  
    "atoc"  
  ],  
  "pluginsConfig": {  
    "atoc": {  
      "addClass": true,  
      "className": "atoc"  
    }  
  }  
```

需要生成目录树的文件：

```text
<!-- toc -->  
所有内容  
<!-- endtoc -->  
```

### theme-comscore

改变文章里标题的字体颜色

### theme-default

给文章里标题自动添加序号
具体如：
"theme-default": {
"showLevel": true
},

### chapter-fold

使用方式：
在book.json中写入以下内容
{
"plugins": ["chapter-fold"]
}
https://segmentfault.com/a/1190000019473512?utm_source=tag-newest

### 多个折叠目录插件

chapter-fold
expandable-chapters-small
Toggle Chapters
expandable-chapters
https://www.jianshu.com/p/427b8bb066e6
默认展开：
expandable-chapters
默认折叠：
chapter-fold
想要展开，最佳的组合是：
https://segmentfault.com/a/1190000019806829?utm_source=tag-newest

### popup弹出大图

https://www.jianshu.com/p/427b8bb066e6

### custom-favicon 修改标题栏图标

https://www.jianshu.com/p/427b8bb066e6

## 案例

https://xiaohuochai.site/utils/helper/gitbook.html

- 写得好的作品
  https://docs.cocos.com/creator/manual/zh/getting-started/
  https://mta.qq.com/docs/?q=
- 阮一峰的EcmaScript6文档
  也是gitbook写成的。
  \+ 网址
  http://es6.ruanyifeng.com/#docs/set-map#Map
  \+ github
  https://github.com/ruanyf/es6tutorial
- 用例：
  https://docs.gitbook.com/account
  https://www.jianshu.com/p/421cc442f06c

## gh-pages

### 结合 GitHub Pages 使用 GitBook

https://www.jianshu.com/p/3d03ab330df5
一键发布
https://blog.csdn.net/simplehouse/article/details/78766513
发布组件-gh-pages
https://github.com/tschaub/gh-pages

## 类似框架

### hexo

#### 主题配置

- 好用的主题：
  [Indigo](https://github.com/yscoder/hexo-theme-indigo)
  [hexo-theme-BlueLake](https://github.com/chaooo/hexo-theme-BlueLake)
- 配置:
  theme: hexo-theme-BlueLake
  [theme-ad](https://github.com/dongyuanxin/theme-ad.git)
- demo:
  https://xin-tan.com/
- 配置:
  theme: theme-ad

#### 本地重新编译&启动

hexo g
hexo s

#### 发布步骤：

hexo clean //清理服务器缓存
hexo g -d //生成+部署

#### 教程

##### 博客-hexo搭建教程

https://blog.csdn.net/grave2015/article/details/79961843

##### gh-pages部署hexo

https://www.jianshu.com/p/986b975a29ae

##### Github Pages(三)：使用Hexo博客生成工具

https://hans2936.github.io/2018/06/06/HexoLog/