## template不能嵌入template标签

## vuejs可以通过filterBy、orderBy实现搜索筛选、降序排序数据

## file.stats.isDirectory
判断当前文件是否一个目录。
https://www.w3cschool.cn/microapp/microapp-9gyh367r.html

## 标签动态变量
错误：
```JavaScript
data-clipboard-text="{{item.payaccount}}"
正确：
:data-clipboard-text="item.payaccount"
```

## h5 file 预览
https://www.zhihu.com/question/39471730

## 动态创建dom节点，并挂载app节点
```html
<div id="app"></div>
```
```javascript
var MyComponent = Vue.extend({
 template: '<div>Hello World</div>'
})
var myAppendTo = Vue.extend({
template:'<p>appendTo</p>'
})
var myBefore = Vue.extend({
 template:'<p>before</p>'
})
var myAfter = Vue.extend({
 template:'<p>after</p>'
})
// 创建并挂载到 #app (会替换 #app)
new MyComponent().$mount('#app');

// 手动挂载
new myAppendTo().$mount().$appendTo('#app');//appendTo
new myBefore().$mount().$before('#app');//before
new myAfter().$mount().$after('#app');//after
```
https://www.jb51.net/article/108496.htm

注意：
(1)节点操控，vue的api删除更新
https://cn.vuejs.org/v2/guide/migration.html#vm-appendTo-%E7%A7%BB%E9%99%A4

(2)vue的迁移检查工具：
https://blog.csdn.net/qq_24122593/article/details/53501291
步骤如下：
1.安装  npm install --global vue-migration-helper
2.在文件所在路径下，在cmd中运行vue-migration-helper

## vue框架引入typescript支持
https://www.jianshu.com/p/9eca70b033da

## 自动创建vue项目
packagejson
```
    "create-gReady": "npm install -g @vue/cli && vue create wechart-vue-test",
```

## 最好用 最全的 pc端 日历组件 —— vue-datepicker-local

git: https://github.com/weifeiyue/vue-datepicker-local

使用示例：https://weifeiyue.github.io/vue-datepicker-local/



## vue $parent

$parent 让我们可以在子组件中对父组件的data和方法操作

（1）可以直接改变data

（2）可以直接调用方法

## vue动态样式

```
动态class的第一种用法： 设定一个变量 。 例子: :class='变量属性' 
动态class的第二种用法: eg: :class="[条件?'成立的类名':'不成立的类名']" 
动态class的第三种用法： eg:"{'类名A':条件A,'类名B':条件B,'类名C':条件C,'类名D':条件d}...."  
```

https://www.cnblogs.com/2587jsq/p/14226252.html

## 动态样式

```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

https://cn.vuejs.org/v2/guide/class-and-style.html

* 错误写法：

  ```
  :style="{maxHeight: maxHeight+'px', overflowY:'scroll'}"
  ```

* 正确写法：

  ```
  v-bind:style="{maxHeight: maxHeight+'px', overflowY:'scroll'}"
  ```

### 动态maxHeight

* 错误写法：

  ```
  v-bind:style="{maxHeight: maxHeight, overflowY:'scroll'}"
  ```

* 正确写法：

  ```
  v-bind:style="{maxHeight: maxHeight+'px', overflowY:'scroll'}"
  ```

### vue最新版本

2.x

## 案例

### 脚手架

vue2+element-ui https://github.com/bailicangdu/vue2-elm

## vueuse

VueUse不是Vue.use ！！！它是一个基于 Composition [API](https://so.csdn.net/so/search?q=API&spm=1001.2101.3001.7020) 的实用函数集合

## vue同时监听两个变量

例如：当finishOne，finishTwo，finishThree这三个值都是true的时候，loading消失。

```javascript
    computed: {
        loadingShow() {
            const { finishOne, finishTwo, finishThree } = this;
            return { finishOne, finishTwo, finishThree };
        },
    },
    watch: {
        loadingShow: {
            handler(newValue) {
                if (newValue.finishOne && newValue.finishTwo && newValue.finishThree) {
                    this.$refs.loading.hide();
                }
            },
            deep: true,
            immediate: true,
        },
    },
```

https://www.csdn.net/tags/MtjaMgzsMDA2MDktYmxvZwO0O0OO0O0O.html