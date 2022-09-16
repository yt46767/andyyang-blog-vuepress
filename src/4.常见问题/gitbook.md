### Error: ENOENT: no such file or directory, open '_book/index.html'

- 描述：

```text
warn: "options" property is deprecated, use config.get(key) instead  
warn: "options.generator" property is deprecated, use "output.name" instead  
use simple mode:  true  

Error: ENOENT: no such file or directory, open '_book/index.html'  
```

- 解决方法：
  gitbook update
  tnpm run book-install

### Error loading version latest: Error: Cannot find module 'internal/util/types'

原因：
这个问题原因在于graceful-fs引入了node模块internal/util/types，此模块用处是给vm引入内置js文件，具体作用不可知也不想去考究了，重点在于此法已被废除，只有低版本nodejs和npm可用，但是强行降低node版本有点削足适履的意思，这种天怒人怨的低级bug，graceful-fs开发团队应该早就修复了才对，为什么还会出现报错，去gitbook的git仓库看了一下版本更迭，gitbook-cli默认的版本是2.6.9，最新的版本3.2.2，推测是旧版本没有使用最新版本的graceful-fs导致的问题，果然。。更新之后即可正常运行
参考：
https://www.zhihu.com/question/270284604/answer/766617038
解决：
gitbook fetch 3.2.2

### gitbook Error: EPERM: operation not permitted, open

原因：
不是这台机器创建的文件，由git工具拉取下来的新文件。
在windows中，创建的用户不一样，权限不一，导致部分文件没权限，最终热加载失败
解决办法：
赋予当前用户的读写权限
使用git-bash

```text
chown -R 用户名 赋权文件夹/文件  
```

### Error: ENOENT: no such file or directory, stat 'E:\kaifa\My\Git\MyGitBook_book\gitbook\gitbook-plugin-fontsettings\fontsettings.js'

- 方法一
  切换低版本的就行了，并且用Node V6
  在book.js中加入(使用3.0.0以下的版本）
  推荐是：2.6.7~2.6.4

```text
gitbook fetch 2.6.7  
```

- 方法二
  在book目录下，如下代码新建book.json

```text
{  
        "plugins": [  
                "fontsettings",  
                "sharing",  
                "lunr",  
                "search",  
                "highlight",  
                "livereload"  
        ]  
}  
```

保存文件后，运行gitbook install安装插件依赖
重新执行gitbook build或gitbook serve

- 方法二

```text
gitbook serve .   
```

参考：
https://segmentfault.com/q/1010000009569245

### windows 系统 GitBook生成PDF、epub报错Error during ebook generation: 'ebook-convert' 乱码

解决：
https://www.cnblogs.com/gobyte/p/10953081.html

### gitbook导出的pdf不显示图片

解决：
把图片放到文件的当前文件夹里，用./引入

### gitbook serve 在window热加载失败的解决办法：

（1）修改文件：C:\Users\tobeyang.gitbook\versions\3.2.2\lib\cli\serve.js
(家里电脑的路径)C:\Users\ASUS.gitbook\versions\3.2.3\lib\cli\serve.js ![Image Text](http://localhost:8080/my-blog-vuepress/assets/img/gitbook-serve-livereload-1.3bfbee9d.png)
![Image Text](http://localhost:8080/my-blog-vuepress/assets/img/gitbook-serve-livereload-2.2049d533.png)
实现：第一次启动成功后，删除_book文件夹 解决：重新编译，权限不通过。 增加代码：

```text
var process = require('child_process');
var isFirst = true;
if(isFirst){
    process.exec('rm -rf _book', function(err){ //当成功时，error是null
        if(err === null){
            console.log('delete folder _book success!');
        }else{
            console.log('delete folder _book fail!Because: ' + err);
        }
        isFirst = null;
    });
}
```

增加异常捕获 ![Image Text](http://localhost:8080/my-blog-vuepress/assets/img/gitbook-serve-livereload-catch1.bbbf8ac0.png)
![Image Text](http://localhost:8080/my-blog-vuepress/assets/img/gitbook-serve-livereload-catch2.87c429fa.png)
解决：新增文件时，编译权限不通过 增加代码：

```text
.catch(function(error1){
    console.log(error1);
});
.catch(function(error2){
    console.log(error2);
});
```

（2）修改文件：C:\Users\tobeyang.gitbook\versions\3.2.2\lib\output\website\copyPluginAssets.js
(家里电脑的路径)C:\Users\ASUS.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js ![Image Text](http://localhost:8080/my-blog-vuepress/assets/img/gitbook-serve-livereload-3.f8a520eb.png)
将 confirm: true 改为 confirm: false
解决：复制粘贴内容，实现热加载
（3）md文件不能为空，否则编译失败。

### [Error: EPERM: operation not permitted, open 'f:\My\GitBook\my-gitbook_book\LIFE\VPN\README.md'] {

errno: -4048, code: 'EPERM', syscall: 'open', path: 'f:\My\GitBook\my-gitbook\_book\LIFE\VPN\README.md' } 解决办法： md文件不能为空，既可解决！

### 去掉或者隐藏“Published with Gitbook”/“本书使用 GitBook 发布”

https://www.itsvse.com/thread-5819-1-1.html

##  