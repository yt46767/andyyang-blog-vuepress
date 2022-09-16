## webpack 高版本 devserver实现原理

webpack-dev-middleware等插件组合逻辑实现。

https://blog.csdn.net/weixin_33989780/article/details/91471527

## webpack之loader和plugin简介

https://zhuanlan.zhihu.com/p/28245984

## webpack_dev_server启动

![image-20210806122528029](https://gitee.com/yt46767/doc/raw/master/image-20210806122528029.png)

![image-20210806122556284](https://gitee.com/yt46767/doc/raw/master/image-20210806122556284.png)

![image-20210806122616445](https://gitee.com/yt46767/doc/raw/master/image-20210806122616445.png)

## 热更新功能—热替换功能 — Hot Module Replacement运行机制

交互过程：

![img](https://images2015.cnblogs.com/blog/605230/201707/605230-20170708154637690-517688262.png)

### 基本原理

webapck在编译的过程中，将HMR Runtime嵌入到bundle中；编译结束后，webpack对项目代码文件进行监视，发现文件变动重新编译变动的模块，同时通知HMR Runtime，然后HMR Runtime加载变动的模块文件，尝试执行热更新操作。更新的逻辑是：先检查模块是否能支持accept方法，不支持的话，则冒泡查找模块树的父节点，直到入口模块，accept方法也就是模块hot-replace的handler。

https://www.cnblogs.com/wmhuang/p/7137480.html

更详细的源码+原理分析：

![img](https://upload-images.jianshu.io/upload_images/8686817-df9d7893912a9313.png?imageMogr2/auto-orient/strip|imageView2/2/w/771/format/webp)

https://www.jianshu.com/p/652fbae768bf

热替换实现的里一个方案：webpack-dev-server

它和webpack使用差不多，直接输入命令行：

```
 webpack-dev-server --progress --colors
```

配置也非常简单：只需要在webpack.config中配置devServer,如下：

```
devServer: { //新增配置项
    // SERVER 将从哪个目录去查找内容文件 （即页面文件，比如 HTML）
     contentBase: path.join(__dirname, "src/html"),
    // http://localhost:3333 来访问应用
     port: 3333
 } 
```

https://blog.csdn.net/aaouvi0202/article/details/102400775

## commonchunkplugin 拆分

https://blog.csdn.net/mugongxu/article/details/106811109

## 代码利用率与提高方法—代码分割

https://blog.csdn.net/ai52learn/article/details/113523341