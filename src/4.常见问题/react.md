## 问题：解决 SyntaxError: Cannot use import statement outside a module 报错问题
原因: npm运行node项目, 需要babel编译, 才能支持import等高级语法;

检查步骤
1 刷新资源管理器
2 打开node_modules找找你要引入的模块在不在, 不在就重新install
3 检查一下引入的模块内是不是使用了未编译的import

* 另一个方法：
```
npm i -D @babel/plugin-transform-runtime
 npm i --save  @babel/runtime
babel.config.json:

{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/transform-runtime"
  ]
}
```