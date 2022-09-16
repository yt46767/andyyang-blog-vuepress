# 注意点
## input输入框的背景提示文案样式改动
```CSS
.shuru input::-webkit-input-placeholder {
    text-align: center;
}
```

##  visibility:hidden会影响布局
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16080008411406.png)

## pointer-events
阻止事件点击/滑动等事件的穿透


## Atomic CSS 这么丑陋，为什么雅虎还要用它？

https://juejin.cn/post/6926072695578689549

acss介绍：acss，是css语义化、模块化、缩写难记的框架。全名：Atomic CSS 

acss 官网：https://acss.io/

acss设计：https://www.kancloud.cn/cloud-dirge/css_book/1082709

### video标签的样式

参考：https://blog.csdn.net/qq_20757489/article/details/87879820

- object-fit:cover;
  https://blog.csdn.net/wuqingyou_w/article/details/51671356

### &的复合选择器

& 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器 参考：
https://www.jianshu.com/p/f5b41ce5580c

### 优先级

1. 基本公式：

```text
内联 > ID选择器 > 类选择器 > 标签选择器
```

1. 复杂样式的计算方法：

```text
A 的值等于 1 的前提是存在内联样式, 否则 A = 0   
B 的值等于 ID选择器 出现的次数   
C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数   
D 的值等于 标签选择器 和 伪元素 出现的总次数
```

2. 计算出：

```text
{A,B,C,D}
```

3. 排序方法：

```text
A比较，谁大谁优先级高   
A相等时，   
B比较，谁大谁优先级高   
B相等时，   
C比较，谁大谁优先级高   
C相等时，   
D比较，谁大谁优先级高    
D相等时，   
谁位置靠后谁优先级高 
```

### 伪类、伪元素的区别

#### 单位

- ##### px

  - 概念：
    精准像素

- ##### em

  - 概念：
    相对单位
  - 计算：
    基准点为父节点的字体大小，如果自身节点定义字体大小，则优先基于自身

- ##### rem

  - 概念：
    相对单位
  - 计算
    基准点为根节点html的字体大小
  - 兼容
    css3新增属性，支持chrome/firefox/IE9

### [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

```text
(常见)  
::before (:before)  
::after (:after)      
::first-letter (:first-letter)    
::first-line (:first-line)      
::placeholder    
::selection   
::backdrop  
(不常见)  
::grammar-error    
::marker  
::slotted()   
::spelling-error     
::cue (:cue)  
```

### [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

```text
(切换元素状态)  
:focus  
:hover  
:active  
:visited  
:link  
(元素位置)  
:first-child  
:last-child  
:nth-child()  
(元素状态)  
:checked  
:disabled  
:read-only  
:required  
:read-write  
(不常见)  
:nth-last-child()  
:any  
:default  
:dir()  
:empty  
:enabled  
:first  
:first-of-type  
:fullscreen  
:indeterminate  
:in-range  
:invalid  
:lang()  
:last-of-type  
:left  
:not()  
:nth-last-of-type()  
:nth-of-type()  
:only-child  
:only-of-type  
:optional  
:out-of-range  
:right  
:root  
:scope  
:target  
:valid  
```

汇总参考：https://www.cxymsg.com/guide/

## 样式 伪事件

![image-20220705154346399](https://gitee.com/yt46767/doc/raw/master/image-20220705154346399.png)
