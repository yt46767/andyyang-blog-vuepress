## H5组件——previewImage

+ 功能描述：

  仿微信jssdk的wx.preview，支持滑动、缩放

+ 安全性：

  没有引入其它文件、没有发起任何http请求(无外链等攻击行为，属于安全文件)

+ 使用文件：

  ```
  previewImage.min.js
  ```

+ 包体积：

  12.3kb

+ 使用方法：
```HTML
  <script src="dist/previewImage.min.js"></script>
  <script>
      var obj = {
              urls : ['1.png','2.png','3.png'],
              current : '1.png'
          };
    previewImage.start(obj);
  </script>
```
+ 兼容性：

  兼容android、ios

+ 渲染方式：

  组件动态插入dom无需额外写标签，一次性遍历标签，滑动下一张时动态往下一个img动态插入src属性及值，img标签动态请求图片。

+ 顺畅程度：

  十张图片滑动，无卡顿



