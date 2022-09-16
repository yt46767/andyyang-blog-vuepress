webpack devserver 代理 未转发 Post 请求 Body 
原因：缓存data数据已变，但res.json未转发出来
解决
onProxyReq: function(proxyReq, req, res, options) { // 由于vue中使用了body-parser 导致http中的body被序列化两次，从而使得配置代理后后端无法获取body中的数据
···
                if (req.body) {
                        const reg = new RegExp('application/json')
                        if (reg.test(proxyReq.getHeader('Content-Type'))) {
                                const bodyData = JSON.stringify(req.body)
                                proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
                                // stream the content
                                proxyReq.write(bodyData)
                        }
                }
        }
由于我使用的是vue-cli，不好修改其代码，我就使用了http-proxy-middleware向外暴露的onProxyReq方法，在请求发送前对request - body进行一次处理，代码如下：
https://blog.csdn.net/yuse6262/article/details/107393394

## postcss-loader TypeError: this.getOptions is not a function 的解决
问题的分析：这个实际上就是 postcss-loader 的版本过高，不兼容 getOptions 函数方法，所以需要对 postcss-loader 进行降级处理

## 【重点】webpack跨域代理请求

https://blog.csdn.net/zwq56693/article/details/109392721

```
const proxyObj = {}
proxyObj['/'] = {
  target: 'http://localhost:8085',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
}
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}
```

实例二：

举例：localhost:8080/api/xxx 代理到 http://192.168.10.183:8103/api/xxx,

![img](https://images2018.cnblogs.com/blog/1100891/201802/1100891-20180227154919492-799319761.png)

实际解决：

![](https://gitee.com/yt46767/doc/raw/master/image-20210714141937692.png)

解决痛点：前端验证业务代码，之前只能通过部署测试环境才能验证

## js/ts代码用webpack打包，如何实现tree-shaking

https://blog.csdn.net/haodawang/article/details/77199980

### 什么是tree-shaking?

 Tree-shaking只对ES Module起作用，对于commonjs无效，对于umd亦无效

因为tree-shaking是针对静态结构进行分析，只有import和export是静态的导入和导出。而commonjs有动态导入和导出的功能，无法进行静态分析。

package.json中的sideEffects字段，默认为true

https://www.cnblogs.com/mengff/p/12845204.html

## lodash按需引入

import {isEmpty,forIn, cloneDeep} from 'lodash-es'

https://blog.csdn.net/weixin_45377314/article/details/105657309

更完整文章：

https://www.cnblogs.com/fancyLee/p/10932050.html

更完美的配置：

全局引入+配套插件能按需引入，已验证是错的！

**lodash之tree-shaing的正确书写方式： import indexOf from "lodash/indexOf"; + 配套插件**

https://www.dazhuanlan.com/cosis/topics/1269426

## ERROR in static/js/vendor.f177572460bee23d0f73.js from UglifyJs Unexpected token name «i», expected punc «;» [static/js/vendor.f177572460bee23d0f73.js:6015,13]
解决：

```awk
//webpack.bae.conf.js
{
   test: /iview.src.*?js$/,
   loader: 'babel-loader'
}
```

https://segmentfault.com/q/1010000009666527

## webpack对es6的类没按需剔除

解决：我们需要将 ES6+ 代码传给 BabiliPlugin，否则它不用移除（未使用的）类。

https://www.sohu.com/a/166599083_463970

使用方法：

```
const BabiliPlugin = require('babili-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


new BabiliPlugin(),
new webpack.DefinePlugin({"process.env.NODE_ENV":JSON.stringify("production")}),
new UglifyJSPlugin(),
```

https://www.cnblogs.com/tanshuai1001/p/6977967.html

## import() 为什么会打进生产包

import() ，用于webpack2 按访问路由按需加载，它只会生成不同的chunk包。

## iview 引入

```
import iView from 'iview'; 
import 'iview/dist/styles/iview.css';
```

### ERROR in static/js/vendor.9886bb87fbe7f5995e0a.js from UglifyJs Unexpected t

原因：由于 UglifyJs 只支持 ES5 而 **ui框架** 可能引入了一部分 ES6 的写法，所以导致 webpack 打包失败

错误解决：

```
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [resolve('src'), resolve('test'),      
              resolve('node_modules/iview/packages'), 
              resolve('/node_modules/iview/src')]
          },
          ...
      ]
  }
```

### es6 转 es5

采用babel-ployfill方案：http://www.512pic.com/184/5655-0.html

### ERROR in static/js/vendor.6062eb4d57c9f1e079fe.js from UglifyJs Unexpected token: operator (>) [static/js/vendor.6062eb4d57c9f1e079fe.js:108002,21]
![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16327275144506(1).png)

解决：

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16328212131182.png)

# module property was removed from Dependency

https://blog.csdn.net/wanggmm/article/details/124444804

## 安装sass-loader后，运行项目报错this.getOptions is not a function

https://www.cnblogs.com/lgh344902118/p/16457595.html

