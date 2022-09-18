## allocation failure scavenge might not succeed
原因:
内存不够爆掉！

解决：
```shell
修改package.json配置：
"build": "node --max-old-space-size=10000 node_modules/vuepress/cli.js build src",
```
https://www.cnblogs.com/longkui-site/articles/16029182.html
