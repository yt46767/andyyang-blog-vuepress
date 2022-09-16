## wepy中多级嵌套组件修改变量，子组件没更新
好像是两个组件嵌套即可，后面就不行了

## 组件编译后的js not found原因：
template标签语法错误，导致编译不出来

## pagelist里空白页，数据不出来原因：
datalist未data声明属性/slot未绑定在wxml标签上
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16051812778611.png)

## Right-hand side of 'instanceof' is not an object
原因
写法不对！
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16031894949245.png)

## canvas 获取id为null
原因：wx:if
https://blog.csdn.net/qq_36611526/article/details/103719036

## wxs路径不能用@代替，用了则此方法无效
正确例子：
```javascript
import moneyFilter from '../../../filter/moneyFilter.wxs';
```
必须用相对路径../../

## 小程序弹框滑动，页面跟着滑动
解决：
https://blog.csdn.net/u010809694/article/details/88317752
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16044909738473.png)



