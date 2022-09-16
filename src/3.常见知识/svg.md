# svg嵌入标签

+ ellipse(椭圆)

  + cx cy rx ry

  ![image-20220118172034303](https://gitee.com/yt46767/doc/raw/master/image-20220118172034303.png)

+ line(直线)
  + x1 y1 x2 y2

​	![image-20220118172228497](https://gitee.com/yt46767/doc/raw/master/image-20220118172228497.png)

​	备注：

​	  x1 , y1 :  直线的起点

+ path(路径)

  + M L Z

  ![image-20220118172413237](https://gitee.com/yt46767/doc/raw/master/image-20220118172413237.png)

  + 示例

    + 直线 椭圆 点 文字

    ![image-20220118172431743](https://gitee.com/yt46767/doc/raw/master/image-20220118172431743.png)

+ polygon(多边形)

  + points

    + 多边形

      ![image-20220118172546063](https://gitee.com/yt46767/doc/raw/master/image-20220118172546063.png)

    + 三角形

      ![image-20220118172611001](https://gitee.com/yt46767/doc/raw/master/image-20220118172611001.png)

    + 星形

      + fill-rule

        + evenodd

          + 星形  fill-rule evenodd

            ![image-20220118173112944](https://gitee.com/yt46767/doc/raw/master/image-20220118173112944.png)

        + nonzero

          ![image-20220118173125807](https://gitee.com/yt46767/doc/raw/master/image-20220118173125807.png)

+ text(文本)
  + 顺序文本

    ![image-20220118173335450](https://gitee.com/yt46767/doc/raw/master/image-20220118173335450.png)

  + 弯曲文本

    + 注意

      ![image-20220118173411534](https://gitee.com/yt46767/doc/raw/master/image-20220118173411534.png)

    + 基本 使用

      ![image-20220118173433358](https://gitee.com/yt46767/doc/raw/master/image-20220118173433358.png)

  + 倾斜文本

    + 基本 使用

      ![image-20220118173524027](https://gitee.com/yt46767/doc/raw/master/image-20220118173524027.png)

    + transform rotate

      ![image-20220118173543847](https://gitee.com/yt46767/doc/raw/master/image-20220118173543847.png)

  + 简单文本

    ![image-20220118173625125](https://gitee.com/yt46767/doc/raw/master/image-20220118173625125.png)

+ rect (矩形)

  + rect

    ![image-20220118173744494](https://gitee.com/yt46767/doc/raw/master/image-20220118173744494.png)

  + rx ry

    圆角的x弧度、y弧度相同：

    ![image-20220118173829868](https://gitee.com/yt46767/doc/raw/master/image-20220118173829868.png)

    圆角的x弧度较大：

    ![image-20220118173837340](https://gitee.com/yt46767/doc/raw/master/image-20220118173837340.png)

  + stroke-opacity fill-opacity

    ![image-20220118173902276](https://gitee.com/yt46767/doc/raw/master/image-20220118173902276.png)

+ polyline(曲线)

  + points

    + 任意

      + 任意形状 曲线

        ![image-20220118174052924](https://gitee.com/yt46767/doc/raw/master/image-20220118174052924.png)

    + 阶梯

      ![image-20220118174127256](https://gitee.com/yt46767/doc/raw/master/image-20220118174127256.png)

# svg嵌入属性

+ 线性渐变

  ![image-20220118174424459](https://gitee.com/yt46767/doc/raw/master/image-20220118174424459.png)

+ 滤镜

  + 劣点

    Internet Explorer和Safari不支持SVG滤镜！

+ 阴影
  + 阴影 + 模糊

    + 阴影颜色

      + 自定义颜色

        ![image-20220118174619929](https://gitee.com/yt46767/doc/raw/master/image-20220118174619929.png)

      + 默认

        + 阴影颜色 2种 默认 颜色

            1为fill颜色

            2为黑色

          ![image-20220118174650481](https://gitee.com/yt46767/doc/raw/master/image-20220118174650481.png)

    + feGaussianBlur

      + 阴影 + 模糊

        ![image-20220118174717749](https://gitee.com/yt46767/doc/raw/master/image-20220118174717749.png)

  + 基本

    + defs filter feOffset feBlend

      ![image-20220118174801638](https://gitee.com/yt46767/doc/raw/master/image-20220118174801638.png)

+ 模糊效果

  ![image-20220118174840065](https://gitee.com/yt46767/doc/raw/master/image-20220118174840065.png)

+ stroke
  + stroke-dasharray 虚线

    ![image-20220118174940511](https://gitee.com/yt46767/doc/raw/master/image-20220118174940511.png)

  + stroke-linecap 线条类型

    ![image-20220118174954322](https://gitee.com/yt46767/doc/raw/master/image-20220118174954322.png)

  + stroke-width 线条宽度

    ![image-20220118175001038](https://gitee.com/yt46767/doc/raw/master/image-20220118175001038.png)

  + stroke 线条颜色

    ![image-20220118175008926](https://gitee.com/yt46767/doc/raw/master/image-20220118175008926.png)

