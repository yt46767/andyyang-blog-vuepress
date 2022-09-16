## eslint报错：Use array destructuring

let localId = res.localIds[0];
结果：
let localId = res.localIds[0] || '';

## 类型“{}”上不存在属性“msg”。

解决：
export const goCommonErrorPage = (errData = {} as any, showCloseBtn = false) => {

## recordInfo.hasOwnProperty('pay_type')

报错：
Do not access Object.prototype method 'hasOwnProperty' from target object.
解决：
Object.prototype.hasOwnProperty.call(recordInfo, 'pay_type')

## Unexpected lexical declaration in case block.

该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。
解决：
在switch外声明let const语句

## Assignment to function parameter 'zeroNum'

不推荐给function的参数赋值，新设一个变量做这个事

## eslint 保存 不生效

原因：

配置文件，不要配置。它会默认去读取，比如：eslintrc.yml/eslintrc.js/eslintrc.json等

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16256418701791.png)

## Parsing error: x-invalid-end-tag

解决：

错误解决：

https://www.cnblogs.com/matd/p/11236975.html

或

https://my.oschina.net/huanjoy/blog/1809703?tdsourcetag=s_pctim_aiomsg

真正解决：

https://blog.csdn.net/weixin_41601114/article/details/103764582

## Expected error to be handled.eslint(handle-callback-err)

为什么没有规则解决它，是因为它复杂

比如：

```js
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {}
}
```

https://www.wenjiangs.com/doc/eslint-docs-rules-handle-callback-err

## console 分级别 webpack  配置 去除  开发 配置

```
//打包环境去掉console.log
new UglifyJsPlugin({
  uglifyOptions: {
    compress: { // 压缩
        // warnings: false, // 控制台是否显示压缩器的警告信息，默认为否false
        drop_console: false, //不移除console
        drop_debugger: true, //移除debugger
        pure_funcs: ['console.log'], //移除开发日志console.log
    },
    sourcemap:false,
  },
})
```

注：

（1）`drop_console` -- 默认 `false`. 传`true`的话会干掉`console.*`函数。如果你要干掉特定的函数比如`console.info` ，又想删掉后保留其参数中的副作用，那用`pure_funcs`来处理吧。

（2）sourcemap   编译后代码对源码的映射，用于网页调试

https://segmentfault.com/a/1190000008995453

https://blog.csdn.net/weixin_34220834/article/details/89069645

## webpack.optimize.UglifyJsPlugin不生效

**webpack 4.x 版本**：`webpack 4.x` 版本移除了 `webpack.optimize.UglifyJsPlugin` 的使用，通过配置 `optimization.minimize` 与 `optimization.minimizer` 来自定义压缩相关的操作。

**npm i -D uglifyjs-webpack-plugin**

```
/* webpack.config.js */` `···``const UglifyJsPlugin = require('uglifyjs-webpack-plugin');``module.exports = {`` ``optimization: {``  ``minimizer: [``   ``new UglifyJsPlugin({``      ``// 相关配置``    ``})``  ``],`` ``},``};``复制代码
```

http://www.zyiz.net/tech/detail-134440.html

## webpack-parallel-uglify-plugin 出现Cannot read property 'compilation' of undefined问题

解决：安装1.0.0版本

## (alias) const string Unexpected trailing comma.eslint(comma-dangle)

增加配置：

.prettierrc文件:

```
{
  "semi": false,//格式化时不加分号 
  "singleQuote": true,//用单引号替换双引号
  "trailingComma":none//对象后面默认添加逗号
}
```

https://blog.csdn.net/weixin_41924621/article/details/113746270

## 46:14 error Arrow function should not return assignment no-return-assign

如果是表达式就要加{}，如果是个判断式子就可以不用加

![image-20210914161237753](https://gitee.com/yt46767/doc/raw/master/image-20210914161237753.png)

https://blog.csdn.net/qq_39088110/article/details/113562590

## 正在保存“ .vue”: 正在从“'Vetur', 'ESLint', 'path-alias'”获取代码操作(配 ，一直卡住

设置为false。然后在开发完需求，全局eslint -fix就好。

这样，电脑cpu不会爆卡，保存也不用等待！！！

![img](https://img-blog.csdnimg.cn/20210114114019907.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM2NzI4NTE4,size_16,color_FFFFFF,t_70)

## 每次VS code中添加新项目格式化就会失效

[每次VS code中添加新项目格式化就会失效 - 走看看](http://t.zoukankan.com/s1-myblog-p-15246342.html)
