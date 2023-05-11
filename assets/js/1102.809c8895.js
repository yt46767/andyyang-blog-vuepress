(window.webpackJsonp=window.webpackJsonp||[]).push([[1102],{1203:function(t,n,e){"use strict";e.r(n);var a=e(7),s=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"问题-解决-syntaxerror-cannot-use-import-statement-outside-a-module-报错问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题-解决-syntaxerror-cannot-use-import-statement-outside-a-module-报错问题"}},[t._v("#")]),t._v(" 问题：解决 SyntaxError: Cannot use import statement outside a module 报错问题")]),t._v(" "),n("p",[t._v("原因: npm运行node项目, 需要babel编译, 才能支持import等高级语法;")]),t._v(" "),n("p",[t._v("检查步骤\n1 刷新资源管理器\n2 打开node_modules找找你要引入的模块在不在, 不在就重新install\n3 检查一下引入的模块内是不是使用了未编译的import")]),t._v(" "),n("ul",[n("li",[t._v("另一个方法：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('npm i -D @babel/plugin-transform-runtime\n npm i --save  @babel/runtime\nbabel.config.json:\n\n{\n  "presets": [\n    "@babel/preset-env"\n  ],\n  "plugins": [\n    "@babel/transform-runtime"\n  ]\n}\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);