(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{616:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"typeof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof"}},[t._v("#")]),t._v(" typeof")]),t._v(" "),n("p",[t._v("用3位机器码存储类型信息，返回类型信息")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("000")]),t._v("：对象"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("010")]),t._v("：浮点数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("：字符串"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("110")]),t._v("：布尔值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：整数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),n("p",[t._v("例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("typeof('lili')\n// string\n")])])]),n("h2",{attrs:{id:"instanceof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),n("p",[t._v("检测构造函数的prototype属性是否出现在某个实例对象原型链上，返回布尔值（true/false）")]),t._v(" "),n("p",[t._v("原理是：")]),t._v(" "),n("p",[t._v("左边变量的隐式原型（"),n("code",[t._v("__proto__")]),t._v("）（或再隐式原型） === 右边变量的显示原型（prototype）")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("Object "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("constructor")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\nArray "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20220824154421851.png",alt:"image-20220824154421851"}})]),t._v(" "),n("h2",{attrs:{id:"typeof-与-instanceof-性能测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof-与-instanceof-性能测试"}},[t._v("#")]),t._v(" typeof 与 instanceof 性能测试")]),t._v(" "),n("p",[t._v("测试结果：用 typeof 性能要"),n("strong",[t._v("高")]),t._v("于 instanceof，约为"),n("strong",[t._v("20+倍")]),t._v("。")]),t._v(" "),n("p",[t._v("["),n("img",{attrs:{src:"https://common.cnblogs.com/images/copycode.gif",alt:"复制代码"}}),t._v("](javascript:void(0)😉")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('var count = 10000000;\nvar func = function () {};\nvar startTime = new Date();\nconsole.log(typeof func === "function");\nfor (var j = 0; j < count; j++){\n    typeof func === "function";\n}\nconsole.log(\'[typeof func === "function"] \' + (new Date().getTime() - startTime.getTime()));\nstartTime = new Date();\nconsole.log(func instanceof Function);\nfor (var k = 0; k < count; k++){\n    func instanceof Function;\n}\nconsole.log(\'[func instanceof Function] \' + (new Date().getTime() - startTime.getTime()));\n\n// 某一次测试结果：\n// true\n// [typeof func === "function"] 23\n// true\n// [func instanceof Function] 500\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);