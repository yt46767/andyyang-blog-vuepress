## 语法
## class
```javascript
var Foo = function() {
  this.foo = 21;
};
```
等价于：
```
class Foo {
    constructor() {
        this.foo = 37;
    }
}
```

## ES6解构
* 对象解构是：
```
{...obj}
```
注意：...obj直接执行，是错误！

* 数组解构是：
```
...array
```
![](https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010db458823b.png)

## console.log
支持对象解构打印
```
console.log(...obj);
```

# 对象转url参数字符串
```javascript
function appendParamsToURL(params) {
        let qs = [];
        for (let k in params) {
            qs.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
        }
        let q = qs.join('&amp;');
                return q;
    }
```

## 替换指定字符
```
var reg = /\&lt;\!-- git列表开始--\&gt;(.*?)\&lt;\!-- git列表结束--\&gt;/g
var otxt = '沙发斯蒂芬&lt;!-- git列表开始--&gt; 胜多负少的 &lt;!-- git列表结束--&gt; 撒范德萨发 0002019-09-25 16:00:31000';
otxt.replace(reg,'杨涛最棒')
```
![](https://gitee.com/yt46767/doc/raw/master/2021-02-02/60193a87a3528.png)

## png动画跟随鼠标变化
这个博客有个动态的跟随动画
https://www.cnblogs.com/anniey/p/11732796.html

## Object.keys[注意点]
不管Object的key是数字还是字符串，Object.keys(target)的值，key-list还是按照key从小到大排序
不管是数字还是字符串，Object.keys返回值是按照key从小到大排序

## apply、call[区别]
入参格式不一样
apply： 
* 第一个参数作为this的作用域；
* 第二个参数必须为数组对应于arguments数据格式。
![](https://gitee.com/yt46767/doc/raw/master/2021-02-03/601a41c230e13.png)
call：
* 第一个参数作为this的作用域；
* 第二个参数为单独属性，第三个参数也是，以此类推。
![](https://gitee.com/yt46767/doc/raw/master/2021-02-03/601a41a26813d.png)

## promise.all
all()中的Promise对象执行先后顺序由自己快慢控制，全部执行完毕后，按照放入all()的先后顺序放入Promise.all().then®的r中。
https://blog.csdn.net/qq_32754575/article/details/102969266
![](https://gitee.com/yt46767/doc/raw/master/2021-02-03/601a4bdeb7bac.png)
![](https://gitee.com/yt46767/doc/raw/master/2021-02-03/601a4be860b59.png)
list结果返回：
![](https://gitee.com/yt46767/doc/raw/master/2021-02-09/6021f63507438.png)

## npm包引用策略：
引用的npm包，优先考虑全局的npm包，全局找不到才会去找项目本地的npm包

## new Function()，带入参执行return函数
![](https://gitee.com/yt46767/doc/raw/master/2021-02-08/6020f162a2c0a.png)

## js拿dataset数据属性字段
会全部转为小写字母+去中划线方式组合
dataset拿到数据属性字段时，已被全部处理为小写字母
例如：dataset-ni-hao，js拿到是dataset.nihao

## 删除对象的属性
* delete parsent[key]
* delete parsent.key

## 取整
向上取整、向下取整、四舍五入
https://www.cnblogs.com/yujiubo/p/5911728.html

## [].includes使用的注意事项：
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16158655262439.png)

## apply、call的区别
apply来运行函数，定义当前作用域变量 + 入参
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16158003304255.png)

call来运行函数，定义当前作用域变量 + 入参
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16158004836069.png)

https://m.jb51.net/article/205203.htm

## startwith
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16154346604716.png)

## 复制文本
document.execCommand("copy"); // 执行浏览器复制命令

## pop() 方法，删除数组的最后一个元素，并返回数组的最后一个元素

## 链式调用
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16148643696361.png)

## 数据类型转布尔:!
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16143239125746.png)

## 已声明变量，按需暴露
已声明变量 export
例子：
```javascript
const aaa = 'aaa';
export { aaa };
export default 1 + 2; 
```

## 数组的属性名，如果不为symbol/string类型，会自动转string
比如：
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_1613964747678.png)

## Symbol值作为对象属性名时，不能用点运算符。
var a = {};
var name = Symbol();
a.name = 'lili';
a[name] = 'lucy';
console.log(a.name,a[name]);             //lili,lucy

## new Function()
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16125124148339.png)

## 字符串 指定位置 插入字符
let insertStr = (soure,start, newStr) => {
  return soure.slice(0, start) + newStr + soure.slice(start)
}
let testStr = "蚂蚁部落";
console.log(insertStr(testStr,1,"奋斗"));

还有更优化的写法！

## s.search(regExp) 强于 s.indexOf(find)

## 手机号空白间隔，也叫分段

## 原生插入dom
  var delBtn=document.createElement("input");//再创建一个用于删除input file的Button
  delBtn.type="button";
  delBtn.value="删除";
  delBtn.οnclick=function(){ removeInput(parentID,divName)};//为button设置onclick方法

  div.appendChild(aElement);//将input file加入div容器

https://blog.csdn.net/remotesupport/article/details/7066207

    插入method
```javascript
var periodDiv = Vue.extend({
        template: "<div @click='toLink($event);' class='class-item' data-url='http://baoxian.pingan.com/dangerous_zone/war.shtml'>" +
            "Available" +
            "</div>",
        methods: {
            toLink: function ($event) {
                var urlStr = $event.target.getAttribute("data-url").trim();
               // 一些复杂的逻辑判断
                myApp.doLink(urlStr); // 调用myApp的方法
            }
        }
    });
```
https://www.meiwen.com.cn/subject/kkbfzctx.html

## input file change方法
```javascript
Vue中Html

<input ref="referenceUpload" @change="referenceUpload" type="file" accept=".map"  multiple/>
JS

 methods: {
    referenceUpload(e) {
        this.$refs.referenceUpload.value = null;
    },
}
```

## javascript函数内设置传入参数对象导致函数外的实参被修改
只有入参为对象，才会影响！
如果为字符串，则不会影响。

![enter image description here](https://images.gitee.com/uploads/images/2021/0329/163821_8685cdb8_1779874.png "屏幕截图.png")
![enter image description here](https://images.gitee.com/uploads/images/2021/0329/164101_d6b8027c_1779874.png "屏幕截图.png")

## 取数组第一个元素
![enter image description here](https://images.gitee.com/uploads/images/2021/0331/101622_e8cf722d_1779874.png "屏幕截图.png")

## 删除dom节点
```javascript
document.getElementById('xxx').remove()
```

## 判断dom节点是否存在
![输入图片说明](https://images.gitee.com/uploads/images/2021/0419/154736_86953c70_1779874.png "屏幕截图.png")
https://www.py.cn/web/js/23083.html

## 创建dom节点
```javascript
// 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部
var div = document.createElement("div");
div.id = 'wEchart'
document.body.appendChild(p);
```

## export 与 export default 用法    

### export用法 

```
export {firstName, lastName, year};
```
等价于       
```
export {firstName};
export {lastName};
export {year};
```
等价于 
```
export var firstName = '';
export var lastName= '';
export var year= '';
```

### export default 用法 
```
export default {firstName}
```
等价于    
```
export {firstName as default }
```

## 动态引入 动态加载 import()
*******import和export命令只能在模块的顶层，不能在代码块之中。否则会语法报错。

这样的设计，可以提高编译器效率，但是没有办法实现运行时加载。

因为require是运行时加载，所以import命令没有办法代替require的动态加载功能。

所以引入了import()函数。完成动态加载。
https://www.cnblogs.com/kreo/p/11069640.html

它存在的坑
https://blog.csdn.net/pingqizhendi/article/details/102610818

补充：

import()、require.ensure的用法：

https://blog.csdn.net/qq_33505829/article/details/90748342

## npx
npm install -g npx
http://www.ruanyifeng.com/blog/2019/02/npx.html

## 数组删除元素

- 删除最后一个元素

  ```
  var colors = ["red", "blue", "grey"];
  var color = colors.pop();
  
  console.log(color); // "grey"
  console.log(colors); // ["red", "blue"]
  console.log(colors.length); // 2
  ```

- 删除首个元素

  ```
  var colors = ["red", "blue", "grey"];
  var color = colors.shift();
  
  console.log(color); // "red"
  console.log(colors); // ["blue", "grey"]
  console.log(colors.length); // 2
  ```

## 按时间排序

```
var rowsData=info.rows;   // rowsData 为数组
rowsData.sort(function(a, b) {
if(a.num === b.num) {
	return new Date(b.createTime) - new Date(a.createTime)
} else {
    return b.num - a.num;
}
});         
```

https://blog.51cto.com/u_12943278/1928338

### 回车查询

```
JS监听某个输入框
  //回车事件绑定
  $('#search_input').bind('keyup', function(event) {
    if (event.keyCode == "13") {
      //回车执行查询
      $('#search_button').click();
    }
  });
```

https://www.cnblogs.com/sxhlf/p/6734628.html

form表单-回车查询

```
<form class="form-inline" v-on:submit.prevent="onQuery" v-on:keyup.enter="onQuery">
```

https://www.cnblogs.com/xxl910/p/12867891.html

#### Object.create

![Image Text](data:image/png;base64,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)

### const块声明的特别之处

```javascript
if(true){  
	const a = '1223';  
}  
console.log(a)  
报错信息：  
VM677:4 Uncaught ReferenceError: a is not defined  
    at <anonymous>:4:13  
```

### 字符串转数字

1. 纯数字转换

   ```
   var s = "234";
   ```

   1. 字符串在运算操作中会被当做数字类型来处理
      s * 1 // 234

   2. 字符前加“+”
      +s // 234

   3. string的两个转换函数，只对string有效
      parseInt(s); // 234
      parseFloat(s); // 234

   4. 强制类型转换
      Number(s); // 234

2. 数字加字母等非数字转换

   ```
   var s = '234string';
   parseInt(s);　// 234
   parseFloat(s); // 234.0
   ```

   ## 前端技术概览
   
   https://zhuanlan.zhihu.com/p/334969545
