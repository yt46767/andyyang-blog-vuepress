(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{620:function(t,v,a){"use strict";a.r(v);var e=a(7),_=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),v("ul",[v("li",[v("h5",{attrs:{id:"for-与-settimeout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#for-与-settimeout"}},[t._v("#")]),t._v(" for 与 setTimeout")]),t._v(" "),v("ul",[v("li",[v("h5",{attrs:{id:"settimeout打印"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#settimeout打印"}},[t._v("#")]),t._v(" setTimeout打印")]),t._v(" "),v("ul",[v("li",[v("h5",{attrs:{id:"var"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#var"}},[t._v("#")]),t._v(" var")]),t._v(" "),v("p",[t._v("for(var i = 0; i < 10; i++) {")]),t._v(" "),v("p",[t._v("setTimeout(function() {")]),t._v(" "),v("p",[t._v("​    console.log(i);")]),t._v(" "),v("p",[t._v("}, 1000);")]),t._v(" "),v("p",[t._v("}")]),t._v(" "),v("p",[t._v("var为局部变量，不受for束缚，for计数完不到1000毫秒，结果为10，则输出为10个10")]),t._v(" "),v("p",[t._v("for(var i = 0; i < 10; i++) {")]),t._v(" "),v("p",[t._v("setTimeout(function() {")]),t._v(" "),v("p",[t._v("​    console.log(i);")]),t._v(" "),v("p",[t._v("}, 1000);")]),t._v(" "),v("p",[t._v("}")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"let"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#let"}},[t._v("#")]),t._v(" let")]),t._v(" "),v("p",[t._v("let为区块变量，受for束缚，则输出为0，1，2，3，4，5，6，7，8，9")])])])]),t._v(" "),v("li",[v("h5",{attrs:{id:"主函数打印-与-settimeout打印"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主函数打印-与-settimeout打印"}},[t._v("#")]),t._v(" 主函数打印 与 setTimeout打印")]),t._v(" "),v("p",[t._v("var bar = [1,2,3];")]),t._v(" "),v("p",[t._v("for(var i in bar) {")]),t._v(" "),v("p",[t._v("​\t\t // 停顿打印，333")]),t._v(" "),v("p",[t._v("​         setTimeout(function(){console.log(bar[i])},0);")]),t._v(" "),v("p",[t._v("​\t\t // 直接打印，123")]),t._v(" "),v("p",[t._v("​         console.log(bar[i]);\n}")]),t._v(" "),v("p",[t._v("先执行主函数for和console.log，再执行setTimeout函数")])])])]),t._v(" "),v("li",[v("h5",{attrs:{id:"for-of"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[t._v("#")]),t._v(" for of")]),t._v(" "),v("p",[t._v("按顺序 循环数组")])]),t._v(" "),v("li",[v("h5",{attrs:{id:"for-in"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[t._v("#")]),t._v(" for in")]),t._v(" "),v("p",[t._v("不一定按顺序 循环对象")]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("p",[t._v('​\tlet obj = {\n​        "49": "Germany",\n​        "41": "Switzerland",\n​        "44": "Great Britain",\n​        "1": "USA",\n​        name:"ljy",\n​        "-5":"jeu",\n​        "type":"lily",\n​        "2.34":"pai",\n​        "-6":"dhoe"\n​      };')]),t._v(" "),v("p",[t._v("​\t for(let key in obj) {\nconsole.log(key);\n}")]),t._v(" "),v("p",[t._v("​\t遍历输出结果为：")]),t._v(" "),v("p",[t._v("​\t1\n​\t41\n​\t44\n​\t49\n​\tname\n​\t-5\n​\ttype\n​\t2.34\n​\t -6")])])]),t._v(" "),v("h1",{attrs:{id:"判断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[t._v("#")]),t._v(" 判断")]),t._v(" "),v("ul",[v("li",[v("h4",{attrs:{id:"instanceof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[t._v("#")]),t._v(" instanceof")]),t._v(" "),v("p",[t._v("检测B.prototype是否等于A."),v("em",[t._v("proto")]),t._v("_")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("语法")]),t._v(" "),v("p",[t._v("A instanceof B")]),t._v(" "),v("p",[t._v("注意：")]),t._v(" "),v("ul",[v("li",[t._v("B是构造函数")]),t._v(" "),v("li",[t._v("构造函数：用new创建的对象")]),t._v(" "),v("li",[t._v("A."),v("em",[t._v("proto")]),t._v("_ :A的原型链")])])]),t._v(" "),v("li",[v("p",[t._v("例子")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("// 定义构造函数\nfunction A(){};\nvar AA = new A();\nAA instanceof A; \n// 结果输出：true，Object.getPrototypeOf(AA) === A.prototype\n")])])])])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);