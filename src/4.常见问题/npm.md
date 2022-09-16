## imagemin安装报错
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16123624242947.png)
https://www.cnblogs.com/shenZS/p/13376516.html

## npm uninstall 和 npm install 报错：Maximum call stack size exceeded
解决：
npm更新

## npm WARN package.json xxx@0.0.0 No README data.
解决
增加README文件。

## 报错：npm no repository field
玩vue出现nmp安装问题总是包这个错，但是其实是安装成功的

npm warn package.json @1.0.0 no repository field.
看字面意思大概是package.json里缺少repository字段，也就是说缺少项目的仓库字段

{
    ...
    "repository": {
        "type": "git",
        "url": "http://baidu.com"
    },
    ...
}
但作为测试项目或者练习用，只需在package.json里面做如下配置即可:

{
    ...
    "private": true,
    ...
}
以这种方式把项目声明为私有。

## 之前使用npm包管理器安装包，卸载还是要用npm来卸载。

## jason-logger 依赖 colors、moment包，要自己单独安装！！！

## 报错 npm Error : EBUSY resource busy or locked

总共有以下解决方法：

1. 尝试执行npm cache clean清除缓存

2. 安全软件原因：关闭360等安全软件，关掉之后最好再看看任务管理器，是否还有后台运行的一些安全程序。

3. 尝试关闭项目文件夹以及命令行，重新启动

4. 若使用VS Code，则关闭VS Code，使用命令行执行npm install命令
————————————————
版权声明：本文为CSDN博主「Y_lx」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_29797697/article/details/91038799

## 【重点】一个项目，同时安装一个npm包的两个版本

```
npm i <alias>@npm:<packageName>@版本

# 例子
npm i antd3@npm:antd@3
npm i antd4@npm:antd@4
```

https://www.cnblogs.com/amiezhang/p/13166240.html

## bash: npx: command not found

```
npm i -g npx
```

## 12909 verbose stack Error: sha1-VM CY= integrity checksum failed when using sha1: wanted sha1-VM CY= but got sha512-KU/VDdA== sha1-U/N=. (3771 bytes)

可能原因:

　　1. npm安装的依赖同一个版本，作者提交了多次，导致npm包的唯一识别码不一致 

 

解决方法：

　　方法一： 删除package-lock.json后重新npm i

　　方法二：复制but got 后面的识别码（yyyy），替换package-lock.json中 but got前的识别码（xxxx）

https://www.cnblogs.com/keepLeung/p/14202962.html

## open\index.js:29...options^^^

解决办法：
查看[node](https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020)版本：node -v
实践证明并不是所有的node版本都叫node；

重新安装node：node **v8.11.2**这个版本

https://blog.csdn.net/museions/article/details/104842242

## [node](https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020)-sass、sass-load安装不了

后来网上查询发现是node版本问题，我的是node 16 据说 降到 node 14就可以了

https://blog.csdn.net/danger_man/article/details/123966367

## options.viteOptions ?? {});
问题：

my-blog-vuepress2\node_modules\@vuepress\bundler-vite\lib\resolveViteConfig.js:15
}, options.viteOptions ?? {});
                        ^

SyntaxError: Unexpected token '?'

解决：

node和npm版本太高/太低