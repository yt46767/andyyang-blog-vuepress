## html支持import    
http://www.bubuko.com/infodetail-3543391.html    

html对import export的支持与编译打包    
原理：    
把ES6代码转译成ES5;    
html文件引入转译后的ES5;    
然后在浏览器环境中运行;    
在node环境中运行;    
https://www.cnblogs.com/linjiu0505/p/10868143.html    

如果要实时编译，就要用到webpack的热更新功能

自动生成webpack.config.js、package.json整个项目配置在线工具
https://createapp.dev/
![输入图片说明](https://images.gitee.com/uploads/images/2021/0420/163608_0faf3c2a_1779874.png "屏幕截图.png")

## audio 核心

https://www.cnblogs.com/interdrp/p/4211883.html

safari特殊说明：

https://www.cnblogs.com/interdrp/p/4211883.html

## input checkbox 改变 change

```
<input type="checkbox" checked={state.allChecked} onChange={this.allCheckedChange.bind(this)}></input>

allCheckedChange(event){
    this.setState({
      allChecked: event.target.checked
    });
  }
```

## 标签 em 

em，本身是斜体字

## 标签 li

默认样式：前面带点点

自定义样式，需要清除默认样式：

list-style: none outside none;

## es6 图片上传 预览

http://www.oschina.net/code/snippet_2380634_49084#71212

## json ， key ， 带点

point.hloc[Object.keys(point.hloc)][0][0]

json ， key ， 带点

![image-20220118171212718](https://gitee.com/yt46767/doc/raw/master/image-20220118171212718.png)

## json 转 string

```
function obj2string(o){ 
 var r=[]; 
 if(typeof o=="string"){ 
 return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\""; 
 } 
 if(typeof o=="object"){ 
 if(!o.sort){ 
  for(var i in o){ 
  r.push(i+":"+obj2string(o[i])); 
  } 
  if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){ 
  r.push("toString:"+o.toString.toString()); 
  } 
  r="{"+r.join()+"}"; 
 }else{ 
  for(var i=0;i<o.length;i++){ 
  r.push(obj2string(o[i])) 
  } 
  r="["+r.join()+"]"; 
 } 
 return r; 
 } 
 return o.toString(); 
}
```

## png ie 6 阴影

做法：

背景，做成白色

## input radio 写法

http://www.w3school.com.cn/tags/att_input_type.asp

## table

+ th td 同级

## 空白 html

```
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>

</body>
</html>
```

## html5 - 移动端，页面链接

```
  <div class="top-guide2">
 <i></i><a href="/">首页</a>><a href="/area/10000/">找医院</a>><a href=""><{$hosptail['HOSP_NAME']}></a>
  </div>

注：
href，不用绝对地址
```

## html5 - 没有则删除，display_none，没有用的！样式照样执行！

```
<header class="header fixed-top" style="display:none;"></header>
<header class="header fixed-top"></header>
<footer class="footer fixed-bottom" style="display:none;"></footer>
```

```
.footer ~ .wrap-page {
  padding-bottom: 44px;
}
```

这样虽然footer隐藏了，但是对于下面这条样式同样还是会解析生效，wrap-page会有44px的padding-bottom

## 资源

http://www.w3cplus.com/mobile/mobile-terminal-refactoring-uniform-and-center.html

## rem

来自：

https://www.zhihu.com/question/21504656

以需求来介入：

都知道现在手机屏幕分辨率越来越多了，假设我们的网页需要适配的iPhone4（320px），iPhone6(375px)，iPhone6 Plus(414px)。

我们的需求是，当用户浏览网页时，根据屏幕的尺寸，来向用户展示更适合用户的文字、图片、按钮大小。

（1）iPhone4的时候，希望网页的内容文字大小12px=12*（320/320）px，按钮的大小是240px。

（2）Iphone6的时候，虚妄网页的内容文字大小14px=12*（375/320）px，按钮的大小是280px，等比缩放。

（3）Iphone6 Plus的时候，虚妄网页的内容文字大小15.5px=12*（414/320）px，按钮的大小是310px，等比缩放。

**以前的做法**

在rem概念没引入前我们的做法是，以最小的屏幕（iPhone）做一版数据出来，然后通过js去控制

viewport 的 initial-scale （网页缩放比例）。

如：iPhone4下：

那么对应的到了iPhone6需要调整缩放比例 initial-scale=375/320 =1.18

同理到了iPhone6 Plus对应的应该是 initial-scale=414/320 =1.30

早期【天猫】移动端也是用用这样的方法实现的。能满足我们的需求。

缺点是：这样做会使得，因为initial-scale越来越大，相当于拉伸网页，而使得在大屏幕的移动端设备下，文字、图片会变模糊。

**rem做法**

现在【天猫】的做法就是用rem来做。

rem（font size of the root element）是指相对于根元素的字体大小的单位（可以联想一下em）。也就是比如我定义：

html{ font-size:14px}

那么如引用.test-box font-size/width/height 设为2rem的话就相当于 2*14px。也就是

.test-box{        font-size:2rem;       /*font-size:28px;*/       /*2*14px/ }

我们可以理解为，一旦根节点html 定义的 font-size 变化，那么整个网页中运用到 rem的也会变化。

我们来看一下【淘宝】的实例：

先展示效果，可以看到页面上的文字、按钮、logo都有相应的变大调整。

**iPhone4下的效果。**

![image-20220118180253848](https://gitee.com/yt46767/doc/raw/master/image-20220118180253848.png)

**iPhone6下的效果。**

![image-20220118180305691](https://gitee.com/yt46767/doc/raw/master/image-20220118180305691.png)

**iPhone6 Plus下的效果。**

![image-20220118180317398](https://gitee.com/yt46767/doc/raw/master/image-20220118180317398.png)

![image-20220118180324828](https://gitee.com/yt46767/doc/raw/master/image-20220118180324828.png)

（图片上传太慢，图片上传不了啊.........，用代码展示）

**iPhone4下html节点font-size**

```
<html data-dpr="2" style="font-size: 64px; width: 100%; height: 100%; overflow: hidden;">
```

**iPhone6下html节点font-size**

```
<html data-dpr="2" style="font-size: 75px; width: 100%; height: 100%; overflow: hidden;">
```

**iPhone6 Plus下html节点font-size**

```
<html data-dpr="2" style="font-size: 82.8px; width: 100%; height: 100%; overflow: hidden;">
```

具体大家可以去看【淘宝】的移动端页面的案例。

给大家介绍一片写rem的详细文章。腾旭ISUX的一篇文章。

## touch事件

+ 只触发 touch  ，不触发click

  ```
  var content = document.querySelector('.content');
  content.addEventListener('touch',function(e){
  e.preventDefault();
  })
  
  ```

+ 手势

  ![image-20220118180513462](https://gitee.com/yt46767/doc/raw/master/image-20220118180513462.png)

```
rotate：旋转
pinch：缩放
press：按压
pan：移动
tap：轻敲
swipe：滑动
```

+ touch click 冲突

  ```
  冲突-解决方案：
  level10.addEventListener('touchstart', function(e) {
        console.log(1);
        e.preventDefault(); //阻止触发click事件
  });
  
  或
  
  level10.addEventListener('touchend', function(e) {
        console.log(1);
        e.preventDefault(); //阻止触发click事件
  });
  注：在touchend里面加效果也一样。
  ```

+ 点透

  ```
  原因：
  当手指触摸到屏幕的时候，系统生成两个事件，一个是touch 一个是click，touch先执行，touch执行完成后，A从文档树上面消失了，而且由于移动端click还有延迟200-300ms的关系，当系统要触发click的时候，发现在用户点击的位置上面，目前离用户最近的元素是B，所以就直接把click事件作用在B元素上面了.
  
  解决：
  系统提供了先触发的touch事件去取消系统生成的click事件，所以只要在touch事件的某个处理函数中 执行 e.preverDefault即可， 一般我们在touchend中执行
  注：e.preverDefault是系统先触发的touch事件，去取消系统生成的click事件。
  
  或
  
  setTimeout(() => {
      level10.style.display = 'none';
  }, 300);
  注：将其一延迟300ms在关闭
  ```


### HTML转义字符对照表

http://tool.oschina.net/commons?type=2

### 转义字符

| 字符 | 转义字符 |
| :--: | :------: |
|  "   |    "     |
|  &   |    &     |
|  <   |    <     |
|  >   |    >     |
