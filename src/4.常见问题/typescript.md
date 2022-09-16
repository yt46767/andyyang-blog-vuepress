## ts报错：应有 1 个参数，但获得 0 个
解决
在原函数定义默认值
function (params:any={})

## (parameter) userInfo: unknown 类型“unknown”的参数不能赋给类型“{} | undefined”的参数。不能将类型“unknown”分配给类型“{}”
解决：
？？？

## (parameter) data: unknown
对象的类型为 "unknown"
解决：
data: any

原因：
将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的。通过改变 any 类型到 unknown 类型，我们的默认设置从允许一切翻转式的改变成了几乎什么都不允许。

这是 unknown 类型的主要价值主张：TypeScript 不允许我们对类型为 unknown 的值执行任意操作。相反，我们必须首先执行某种类型检查以缩小我们正在使用的值的类型范围。
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_16154514366978.png)
企业微信截图_16154514366978.png

https://blog.csdn.net/weixin_33716557/article/details/93177689

## 类型“never[]”的参数不能赋给类型“never”的参数
解决：
？？？


## 类型“never”上不存在属性“size”
解决：
['size']

## 类型“any”的参数不能赋给类型“never”的参数 / 类型“unknown”的参数不能赋给类型“never”的参数
解决
![enter image description here](https://images.gitee.com/uploads/images/2021/0331/105650_536081df_1779874.png "屏幕截图.png")

## window不存在
![enter image description here](https://images.gitee.com/uploads/images/2021/0331/103912_d0ef6805_1779874.png "屏幕截图.png")
https://ts.xcatliu.com/basics/type-assertion.html    

## tsconfig.json报错：在配置文件“d:/Project/wechart/tsconfig.json”中找不到任何输入。指定的 "include" 路径为“["node_modules/gridjs"]”，"exclude" 路径为“["node_modules"]”。
原因是：缺少index.ts的ts入口文件

## enum 属性 是 只读，不可改写

```
enum Color {Red = 1, Green, Blue};
Color.Red=2;
console.log(Color.Red);
```

```
编译错误：
script.ts(2,7): error TS2540: Cannot assign to 'Red' because it is a read-only property.
```

![image-20211227104908383](https://gitee.com/yt46767/doc/raw/master/image-20211227104908383.png)

## enum 赋值 给 其它 变量

默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 `1`开始编号，后面默认追加1。而 `let c: Color = Color.Red; `赋值的是序号。

序号重排：(有顺序)

```
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Red;
console.log(c);
```

```
标准输出：
1
```



```
enum Color {Red = 1, Green = 2, Blue};
let c: Color = Color.Blue;
console.log(c);
```

```
标准输出：
3
```

所有序号重排：

```
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Blue;
console.log(c);
```

```
标准输出：
4
```

###  Cannot find module '../../package.json'. Consider using '--resolveJsonModule' to import module with '.json' extensionts(2732)

- STEP 1:

```javascript
{
  "compilerOptions": {
    "resolveJsonModule": true, 
  }
}
```

- STEP 2: restart vscode https://github.com/microsoft/TypeScript/issues/25400

## 将key/val对添加到对象时，类型“String”不能用作索引类型

将`String`重写为`string`。前者是对象，后者是原语。您希望使用原语`string`作为键，而不是键的对象。

https://cloud.tencent.com/developer/ask/sof/1142538

## TypeScript解决无法重新声明块范围变量“XXX”问题

我们只需要在文件的尾部加上*export {};*



![img](https://ask.qcloudimg.com/raw/yehe-b343db5317ff8/ssi854ixuz.png?imageView2/2/w/1620)

就是这个样子，这样TS就会认为这些文件都是独立的模块了

https://cloud.tencent.com/developer/article/2041897

## 类型“any”的参数不能赋给类型“never”的参数。

场景：使用 push 的时候报错

解决方法：
const menus = reactive([] as any[]);
或根据实际来断言
const menus = reactive([] as object[]);
推荐使用
const commodity = reactive<object[]>([]);
https://blog.csdn.net/A88552211/article/details/125715255



![image-20220904123659658](https://gitee.com/yt46767/doc/raw/master/image-20220904123659658.png)