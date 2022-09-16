## wepy-beautify插件编写示例
https://zhuanlan.zhihu.com/p/74240805

## wepy的template模板里，class可以同时存在两个class变量
```
class=&quot;collection-card collection-image {{'card'+unComposeItem.newIndex}} {{unComposeItem.isMeet?'z-light':''}}&quot;
```

## wepy 的 watch
deep、immediate都是无效设置
![](https://gitee.com/yt46767/doc/raw/master/2021-02-09/602251d142141.png)

## 父级的onload报错，会阻塞子级的onload渲染等

## this.$apply();
触发页面双向数据绑定
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16046427737756.png)

## wepy的watch、computed的好与坏:
watch改变data时，需要调用this.$apply()
computed改变data时,会自动更新
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_1604640227995.png)
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16046402352727.png)

## block 的 hidden不生效
解决：
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16037090942237.png)
https://www.cnblogs.com/auto123-num/p/11163862.html

## 返回组件的实例
```javascript
ownerInstance.selectComponent('.classSelector')
```

## mixin的onLoad执行, 在page的onLoad执行之前