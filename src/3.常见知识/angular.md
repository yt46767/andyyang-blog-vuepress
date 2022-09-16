## angular 的 track by $index
相当于vue的:key="key"，起到索引作用

用ng-repeat指令遍历一个javascript数组，当数组中有重复元素的时候,angularjs会报错,这是因为ng-Repeat不允许collection中存在两个相同Id的对象。

对于数字或者字符串等基本数据类型来说，它的id就是它自身的值。因此数组中是不允许存在两个相同的数字的。为了规避这个错误，需要定义自己的track by表达式。

// 业务上自己生成唯一的id
item in items track by item.id

//或者直接拿循环的索引变量$index来用
item in items track by $index

https://www.cnblogs.com/xiongzuyan/p/5984626.html

## angular的directive指令的link方法
//link函数主要用于操作dom元素,给dom元素绑定事件和监听. 

## 获取当前url的参数的序列化json对象
$location.search()
// {"name":"bunny"}

## angular的factory
//通过工厂模式创建自定义服务
类似于service

## directive的link函数，主要用于操作dom元素,给dom元素绑定事件和监听.

## scope是控制directive中的变量与引用directive的controller之间的关系的重要属性。其有四种修饰符
=表示共享某个变量 Two-way model binding
&表示共享某个方法(回调) Callback method binding
@表示传递某个值 Attribute string binding
https://blog.csdn.net/shidaping/article/details/53158640