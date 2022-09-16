## reject(false)警告提示：Expected the Promise rejection reason to be an Error.

正确写法：reject(new Error(false))

## 路由传参，不要用boolean类型的true/false,要用string

因为，路由把boolean数据传参到下个页面就会变成string数据

## 连续上传同一张图片第二次调用change事件无反应

解决：
第一次change处理的最后：
e.srcElement.value = ""//及时清空

## resolve promise.then只执行一次 下一次不执行 第二次不执行

```javascript
/**
     * 选取本地图片
     * @param[object] params
     */
    async chooseAndUploadPic(params: {}) {
        return new Promise((resolve, reject) => {
            const maxSize = 2;
            // 插入file dom节点
            const temp = document.getElementById('chooseAndUploadPic') as any;
            let FileComponent = Vue.extend({
                props: ['cb'],
                template:
                    '<input type="file" @change="onChange" id="chooseAndUploadPic" ref="chooseAndUploadPic" accept="image/*" style="opacity:0;z-index-99999;">',
                methods: {
                    onChange(e) {
                        const file = e.currentTarget.files[0] || {};
                        console.log(file);
                        // 限制上传图片的大小
                        if (file.size > maxSize * 1024 * 1024) {
                            vm.$modal.show({
                                content: `请选择小于${maxSize}MB的图片重新上传`,
                                footer: [
                                    {
                                        text: '确定',
                                        type: 'primary',
                                        event: 'confirm',
                                    },
                                ],
                                onConfirm: () => {
                                    vm.$modal.hide();
                                },
                            });
                            e.srcElement.value = ''; //及时清空
                            return resolve();
                        }
                        waService.buttonClick('H5_upload_invoice', '');
                        e.srcElement.value = ''; //及时清空
                        if (temp) temp.value = '';
                        return resolve({
                            localId: file,
                            imageData: file,
                            fileName: file.name,
                            url: file.path,
                        });
                    },
                },
            });
            if (!temp) {
                let FileComponent = Vue.extend({
                    props: ['cb'],
                    template:
                        '<div id="chooseAndUploadPic" style="opacity:0;z-index-99999;"></div>',
                });
                document.body?.appendChild(new FileComponent().$mount().$el);
            }
            new FileComponent().$mount('#chooseAndUploadPic');
            document.getElementById('chooseAndUploadPic')?.click();
        });
    }
```

原因：
不能用appendchild一次就行，因为resolve是第一次的。
解决：
需要替换component,重新注入resolve函数。

## h5 input type=file 预览图片

要把e.currentTarget.files[0]对象，经过FileReader读取后获得base64，base64才能显示！

```javascript
function baseHandle(file) {
    return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = '' as any;
        let base64 = '' as any;
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgResult = reader.result || '';
            base64 = reader.result || '';
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.onloadend = function () {
            resolve(imgResult);
        };
    });
}
```

## split + 判空 处理

直接使用split，前后各有一个“”值。 

```
>> var str=',a,b,c,d,e,f,';
>> str.split(',');

//(8) ["", "a", "b", "c", "d", "e", "f", ""]
```

临时方法：split后，可以用filter过滤掉空值。

```
>> var str=',a,b,c,d,e,f,';
>> str.Split(',').filter(item => item != '');

//(6) ["a", "b", "c", "d", "e", "f"]
```

一劳永逸的干法：

```
>> String.prototype.Split = function (s)
>> { 
>>      return this.split(s).filter(item => item != '');
>> }

>> var str=',a,b,c,d,e,f,';
>> str.Split(',');

//(6) ["a", "b", "c", "d", "e", "f"]
```

https://blog.csdn.net/admans/article/details/103308466

## npm WARN deprecated core-js@2.6.12: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

npm install --save  -g core-js@^3
https://www.cnblogs.com/xbxxf/p/12514258.html

## babel-polyfill引用

最后发现就是ie9和一些低版本的高级浏览器对es6新语法并不支持，babel-polyfill可以解决

首先：在main.js中引入babel-polyfill

import 'babel-polyfill';
然后在webpack.config.js的入口引用

entry: [
    'babel-polyfill',
 。。。
]

https://blog.csdn.net/weixin_39827306/article/details/111834330

## browserslist 配置

官网查询
https://browserl.ist/
配置说明：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0428/113528_85428280_1779874.png "屏幕截图.png")
https://zqianduan.com/pages/browserslist-config.html#%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95

## IE11 兼容问题 bundle.js   SCRIPT1002: 语法错误

package.json
    "dependencies": {
        "@github/wechart": "^1.0.14",
        "axios": "^0.21.1",
        "babel-polyfill": "^6.26.0"
    },
    "browserslist": [
        "> 1%",
        "last 2 versions"
    ]

main.js
import 'babel-polyfill';

## SCRIPT5045: strict 模式下不允许分配到只读属性

![输入图片说明](https://images.gitee.com/uploads/images/2021/0428/145710_fd6db108_1779874.png "屏幕截图.png")

## rollup 编译 css

npm install --save-dev rollup-plugin-postcss
https://blog.csdn.net/weixin_33955681/article/details/89224103

## Error: '__moduleExports' is not exported by xxxx

原因：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0429/150825_51a9162c_1779874.png "屏幕截图.png")
https://blog.csdn.net/DreamFJ/article/details/93876688

解决：
安装rollup-plugin-commonjs

其中commonjs插件配置了选项，指明./lib/main.js文件的导出变量__moduleExports。

namedExports配置项的格式：

Options.namedExports?: {
    // 文件路径：[导出变量名]
    [key: string]: string[];
}

// 即键是文件路径，值是导出变量数组（字符串数组）。

## 辨别模块写法

https://www.cnblogs.com/niklai/p/6095974.html

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gridjs = {}));
}(this, (function (exports) { 'use strict';
exports是commonjs规范，define是amd规范的写法
注意：
umd模块引入，用require来解决

## js  class  遍历 删除 节点

https://zhidao.baidu.com/question/1799835097226743627.html

## 请求 get post put delete 传参方式 差别

只有get是?key=value字符串方式，其它都是json格式传参

## js循环依赖问题

![输入图片说明](https://images.gitee.com/uploads/images/2021/0701/150839_a7318f00_1779874.png "屏幕截图.png")
eslint可以进行提示：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0701/150945_d69346cf_1779874.png "屏幕截图.png")
https://blog.csdn.net/visionke/article/details/89395086

## axios下载文件流

https://cloud.tencent.com/developer/article/1455136

## encodeURI 不能编码的特殊字符

以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#
如果 URI 组件中含有分隔符，比如 ? 和 #，则应当使用encodeURIComponent() 方法分别对各组件进行编码。

## encodeURI(encodeURI([字符]))
双重编码 不等于 一次编码

## jquery动态添加dom

```
$('<input />', {
        id: 'cbx',
        name: 'cbx',
        type: 'checkbox',
        checked: 'checked',
        click: function() {
          alert("点我了~~");
        }
      }).appendTo($('#wrap'));
```

https://www.cnblogs.com/wolfocme110/p/4294834.html

## jquery复制到粘贴板 浏览器 全兼容

```
var clipboard = new ClipboardJS("#clipboardData", { // #clipboardData,为点击目标dom节点
    text: function () {
        return res;
    },
});
clipboard.on("success", function (e) {
     // alert("复制成功");
    console.log("复制成功");
});

clipboard.on("error", function (e) {
    console.log(e);
});
```

https://www.cnblogs.com/cathyxiao/p/9829419.html

## $.ajax超时处理

```
$.ajax({
    url: '/getData',
    timeout:3000 //3 second timeout【关键】
})).then(function(){
    //do something
}).catch(function(e) {
    if(e.statusText == 'timeout'){ //【关键】
        alert('Native Promise: Failed from timeout');
        //do something. Try again perhaps?
    }
});
```

https://blog.csdn.net/weixin_39859394/article/details/119433787

## 数字 / 字符串 按 千分位 处理

转成字符串：

```
parseFloat(num).toLocaleString()
```

https://www.cnblogs.com/hjvsdr/p/7808097.html

## [document.getElementsByClassName('class').forEach 报错Uncaught TypeError: undefined is not a function](https://www.cnblogs.com/ming1025/p/13649635.html)

解决：

```
[...document.getElementsByClassName('myClass'))].forEach(v=>{
   console.log(v)
});
```

https://www.cnblogs.com/ming1025/p/13649635.html

### style js控制无效

原因：

js找不到这个属性

解决方法：

css样式先加上样式，js才能找到这个属性，才能控制这个属性。

## html2PDF 失效

引入：
import html2PDF from 'jspdf-html2canvas';
webpack编译配置：
{
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src'),
     resolve('test'),
     resolve('node_modules/vue-tree-color/src'),
     resolve('node_modules/vue-tree-color/dist')]
     resolve('node_modules/canvg/lib'),
     resolve('node_modules/canvg/lib/presets'),
     resolve('node_modules/highcharts/lib/canvg.js'),
     resolve('node_modules/jspdf-html2canvas/dist')]
   },
出问题的原因：
 resolve('node_modules/canvg/lib'), 
 resolve('node_modules/canvg/lib/presets'),
 resolve('node_modules/highcharts/lib/canvg.js'),
 resolve('node_modules/jspdf-html2canvas/dist')]

### iview的spin显示范围，不在选定的模块里

要在他的父级节点加样式： "position: relative;"，才能框定在这个模块显示loading动画

```
<Spin size='large' fix v-if="analysisLoading"></Spin>
```

## iview select 数据 大 卡顿

展示前100条数据：on-open-change

https://www.cnblogs.com/huoshengmiao/p/13764176.html

搜索用全数据搜索：remote-method

http://v1.iviewui.com/components/select

## for循环里setTimeout(延时器)使用方法

https://www.cnblogs.com/wl0804/p/11987833.html

## js 怎么 改变 传入 参数

参数为对象，即可。

```
const data = {
  a: 1,
  b: 2
};

function s(data){
    data.a += data.b;
    return true
}
```

https://www.zhihu.com/question/433032811

像组件，直接传入this对象

### eslint检测：vscode Expected indentation of 12 spaces but found 3 tabs.

https://www.cnblogs.com/xuanmanstein/p/9181592.html

### [#](http://localhost:8080/my-blog-vuepress/1_前端/1_基础/JS.html#什么是伪代码？)什么是伪代码？

不正式、不标准、接近自然语言的语言，把程序员的意思表达出来。

### [#](http://localhost:8080/my-blog-vuepress/1_前端/1_基础/JS.html#js声明变量没有赋值)js声明变量没有赋值

初始值为undefined

## 形参 o 的指向发生改变，指向堆内存中一个新的对象

```js
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object() // 形参 o 的指向发生改变，指向堆内存中一个新的对象
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
// 结果是：http://www.baidu.com
```

## node历史版本地址：

npm 对照 node 版本：

[Previous Releases | Node.js](https://nodejs.org/en/download/releases/ "https://nodejs.org/en/download/releases/")

或者

[CNPM Binaries Mirror](https://registry.npmmirror.com/binary.html?path=node/v10.13.0/ "https://registry.npmmirror.com/binary.html?path=node/v10.13.0/")

node与npm对应

![](C:\Users\ASUS\AppData\Roaming\marktext\images\2022-07-21-09-50-30-image.png)

![](C:\Users\ASUS\AppData\Roaming\marktext\images\2022-07-21-09-54-49-image.png)

## Js 如何判断两张图片是否相同

[【Web前端问题】Js 如何判断两张图片是否相同 - H5W3](https://www.h5w3.com/139799.html)
