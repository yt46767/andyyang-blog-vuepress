## name无效链接的原因：
如：this.$router.push({ name: 'home', params: { userId: wise }})
router配置里name未定义

## _Error in nextTick: "TypeError: Cannot read property '_wrapper' of undefined"
解决
其实这个错误是你的@click事件绑定的方法，在methods并不存在， 看看是否添加了函数。

## Property or method "receiptList" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
解决：
实例的data属性，要先声明才能使用，不能动态使用

## Error: vue-loader requires @vue/compiler-sfc to be
vue常见报错
ERROR Error: vue-loader requires @vue/compiler-sfc to be present in the dependency tree.

解决办法

npm i -D vue-loader@14
如果还是报错执行
rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install
https://blog.51cto.com/hequan/2536201

## vue slot 其中 单个 元素 隐藏  影响 全局 隐藏
解决：
其中单个，不要用v-if，改为v-show

## vue中,通过refs调用子组件的方法为undefined
https://blog.csdn.net/ChOLg/article/details/102991854

## v-model 组件使用

![](https://gitee.com/yt46767/doc/raw/master/image-20210719104057953.png)

![](https://gitee.com/yt46767/doc/raw/master/image-20210719104008399.png)

https://zhuanlan.zhihu.com/p/66593908

方案2：

https://blog.csdn.net/liub37/article/details/83382205



## vue window.onresize 里 this指向

指向window。故，写法是：

```
  mounted: function () {
    // 定义窗口大小变更通知事件
    var self = this;
    window.onresize = function() {
      self.splitMove()
    }
  },
```

## 定义两个ref，为什么dom节点指向最后一个

原因：通过 `ref` 这个 attribute 为子组件**赋予一个 ID** 引用。

[https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0](https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问子组件实例或子元素)

所以，一个ref只能找到一个dom节点，不同节点请用不同ref定义

## Props with type Object/Array must use a factory function to return the default value

解决：

https://blog.csdn.net/l1996729/article/details/106354377/

## Cannot use v-for on stateful component root element because it renders multiple elements.

子组件的第一个标签不能用v-for

## @click.prevent 会阻止下面子节点的所有事件
需要注意

## radio点击，同一个key想触发，怎么办？
解决：
<RadioGroup v-model="selectedRadio" @on-change="changeRadios"> 
      <!-- <RadioGroup v-model="selectedRadio">  -->
        <Radio 
          v-for="item in radios" 
          :key="item.label" 
          @click.native.self="clickRadios($event, item.label)"
          :label="item.label"> 
          {{item.value}} 
        </Radio> 
      </RadioGroup>
.self，作用点击元素，阻止冒泡多次触发

## 动态引入

例如：

```
 if (FunctionSet.isMobile()) {//自定义的判断是pc还是移动端的方法
   import('./assets/css/mobile.scss');
 }else {
   import('./assets/css/pc.scss');
 }
```

缺点：

动态地加载模块。调用 `import()` 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，**会分离到一个单独的 chunk 中**。

https://www.cnblogs.com/ziyue7575/p/13984268.html

## vue route 参数 形式

### 、编程式导航(路由实例对象router=new VueRouter())

#### 字符串

```js
router.push('home')
```

#### 对象

```js
router.push({ path: 'home' })
```

#### 命名的路由 `对应路径为/path/123`

```js
router.push({ name: 'user', params: { userId: '123' }})
```

#### 带查询参数，变成 `/register?plan=123`

```
router.push({ path: 'register', query: { plan: '123' }})
```

http://www.manongjc.com/detail/18-yqiqhoknvcxdakn.html

## vue-datepicker-local 实现大于当前时间不可选

https://www.cnblogs.com/xiaoxiaomini/p/13262333.html

```
//设置当前日期之后不能选中
    disabledDate(date) {
      if (date.getTime() > new Date().getTime()) {
        return true;
      }
    },
```

## vue render h 如何 加 class

```
class: ['w-table-link'],
```

https://blog.csdn.net/april_4/article/details/80017915
