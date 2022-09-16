## 继承父级的字符是：&
比如：
```
&:first-child {}
```
```
@mixin does-parent-exist {
  @if & {
    &:hover {
      color: red;
    }
  } @else {
    a {
      color: red;
    }
  }
}
```

## 全局引入less文件

![](https://gitee.com/yt46767/doc/raw/master/image-20210809104938037.png)

vue引入后，打包进app总包里，体积太大，而且还是less的方式存在生产包

https://www.cnblogs.com/eddina/p/9553110.html

**正确打包引入less方式：**

webpack2—style-resources-loader ，引入全局样式

https://blog.csdn.net/qq1498982270/article/details/96896559

scss/less引入方式（大全）：

https://www.jianshu.com/p/7a06e7b43cab

<p style="color:red;">没有生效！</p>

解决：app.vue的单页父级引入全局样式。

## 改变滚动条样式

```
 .innerbox::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
            scrollbar-arrow-color:red;

        }
        .innerbox::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
            scrollbar-arrow-color:red;
        }
        .innerbox::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
        }

```

https://www.cnblogs.com/polly-ling/p/9875112.html
