## select的option，内嵌标签会被自动剔除，剩下文本

![image-20211119155502939](https://gitee.com/yt46767/doc/raw/master/image-20211119155502939.png)

##  错误写法

```
<a href="#" class="btnSend"  id="send" >发送</a>
```

## html 禁止页面缓存

```
现在，采用：
--------------------------------------------------------------------------------
在html里的head标签中加
 <meta http-equiv ="proma" content = "no-cache"/>
 <meta http-equiv="cache-control" content="no cache" />
 <meta http-equiv="expires" content="0" />

为什么要禁用页面缓存呢？
--------------------------------------------------------------------------------
用户后退到之前的编辑页，编辑页必须是空白的，才对！
所以才要禁用页面缓存。

参考：
--------------------------------------------------------------------------------
https://blog.csdn.net/vuturn/article/details/44461981

```

## 手机端上传图片，旋转90度bug

| 主题                        | 介绍           | 备注                                                         | 文章                                                         |
| --------------------------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 手机端上传图片，旋转90度bug | 这bug，针对iOS | 解决：npm install exif-js --save import {EXIF} from 'exif-js';重点：ctx.save();ctx.translate(width / 2, height / 2);ctx.rotate(90 * Math.PI / 180);ctx.drawImage(img, 0 - height / 2, 0 - width / 2, height, width);ctx.restore(); | exif-js的github:https://github.c[om/exif-js/exif-js](https://github.com/exif-js/exif-js)使用并解决：http://www.jb51.[net/article/123543.htm](https://github.com/exif-js/exif-js)多系统兼容解决：https://www.jian[shu.com/p/ad4501db178e](https://github.com/exif-js/exif-js)三个系统兼容解决：http://www.bcty3[65.com/content-142-3055-1.html](https://github.com/exif-js/exif-js) |
|                             |                |                                                              |                                                              |
|                             |                |                                                              |                                                              |

exif-js说明：

![image-20220118180912227](https://gitee.com/yt46767/doc/raw/master/image-20220118180912227.png)

## 不同终端 选择器 select标签 显示

android样式为：

![image-20220214095354113](https://gitee.com/yt46767/doc/raw/master/image-20220214095354113.png)

ios样式为：

![image-20220214095413074](https://gitee.com/yt46767/doc/raw/master/image-20220214095413074.png)

## xmp

定义预格式文本。

（里面放的html标签内容，都被转成文本显示）
