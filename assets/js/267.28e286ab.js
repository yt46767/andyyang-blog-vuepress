(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{710:function(t,n,s){"use strict";s.r(n);var a=s(7),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"什么是作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是作用域"}},[t._v("#")]),t._v(" 什么是作用域？")]),t._v(" "),n("p",[n("strong",[t._v("ES5")]),t._v(" 中只存在两种作用域："),n("strong",[t._v("全局")]),t._v("作用域和"),n("strong",[t._v("函数")]),t._v("作用域。")]),t._v(" "),n("p",[t._v("在 JavaScript 中，我们"),n("strong",[t._v("将作用域定义为一套规则")]),t._v("，这套规则用来"),n("strong",[t._v("管理引擎")]),t._v("如何在当前作用域以及嵌套子作用域中"),n("strong",[t._v("根据标识符名称")]),t._v("进行"),n("strong",[t._v("变量（变量名或者函数名）查找")])]),t._v(" "),n("h2",{attrs:{id:"局部作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#局部作用域"}},[t._v("#")]),t._v(" 局部作用域")]),t._v(" "),n("p",[n("strong",[t._v("let")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function getName(){\n    console.log(a); // 报错：a未声明！\n    let a = 1; \n}\n")])])]),n("p",[n("strong",[t._v("var")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function getName(){\n    console.log(b); // 打印结果：undefined。原因：b已声明，但未赋值\n    var b = 2;\n}\n")])])]),n("h2",{attrs:{id:"call-bind-apply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-bind-apply"}},[t._v("#")]),t._v(" call bind apply")]),t._v(" "),n("p",[n("strong",[t._v("call , apply 都是立即执行函数")]),t._v("，"),n("strong",[t._v("bind")]),t._v(" 不是立即执行函数，而是"),n("strong",[t._v("改变this指向")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/202204281359686.png",alt:"image-20220428135923812"}})]),t._v(" "),n("p",[t._v("apply 第1个入参是this的作用域，第2个入参是"),n("strong",[t._v("参数数组")])]),t._v(" "),n("p",[t._v("call  第1个入参是this的作用域，第2个入参是"),n("strong",[t._v("函数的第1个参数")]),t._v("，第3个入参是"),n("strong",[t._v("函数的第2个参数")])]),t._v(" "),n("p",[t._v("https://wenku.baidu.com/view/b378d2a701d276a20029bd64783e0912a2167c20.html")]),t._v(" "),n("h2",{attrs:{id:"this指向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this指向"}},[t._v("#")]),t._v(" this指向")]),t._v(" "),n("ul",[n("li",[t._v("o1.fn()先触发，this指向o1")])]),t._v(" "),n("p",[t._v("关键：出现**()**")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const o1 = {\n    text: 'o1',\n    fn: function() {\n        return this.text;\n    }\n}\nconst o2 = {\n    text: 'o2',\n    fn: function() {\n        return o1.fn()\n    }\n}\nconsole.log(o2.fn());\n")])])]),n("ul",[n("li",[t._v("o1.fn未触发，而是简化（等价"),n("strong",[t._v("箭头函数")]),t._v("），复制函数内容，当o2.fn()触发，this指向o2")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const o1 = {\n    text: 'o1',\n    fn: function() {\n        return this.text;\n    }\n}\nconst o2 = {\n    text: 'o2',\n    fn: o1.fn\n}\nconsole.log(o2.fn());\n")])])]),n("ul",[n("li",[t._v("o1.fn包装的函数没有箭头函数，无法指向o3，所以默认指向window")])]),t._v(" "),n("p",[t._v("关键：出现"),n("strong",[t._v("var/const/let")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const o1 = {\n    text: 'o1',\n    fn: function() {\n        return this.text\n    }\n}\nconst o3 = {\n    text: 'o3',\n    fn: function() {\n        var fn = o1.fn\n        return fn()\n    }\n}\nconsole.log(o3.fn())\n")])])]),n("p",[t._v("https://blog.csdn.net/weixin_41743686/article/details/113807291")])])}),[],!1,null,null,null);n.default=e.exports}}]);