## allocation failure scavenge might not succeed
表象原因是内存不够爆掉！
解决：
```shell
修改package.json配置：
"build": "node --max-old-space-size=10000 node_modules/vuepress/cli.js build src",
```
https://www.cnblogs.com/longkui-site/articles/16029182.html
本质原因是：
md文件转html文件时，很多html标签，js写法，``里包裹的脚本，在转换过程中，变成可执行脚本导致js报错
解决：
```javascirpt
[脚本]
```
包裹脚本