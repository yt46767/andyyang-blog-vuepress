(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{723:function(a,t,s){"use strict";s.r(t);var n=s(7),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("slice（截取）")])]),a._v(" "),t("p",[a._v("截取一部分，并"),t("strong",[a._v("返回")]),a._v("截取这部分数组，"),t("strong",[a._v("原")]),a._v("数组"),t("strong",[a._v("不变")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("slice(start, end)\n")])])]),t("p",[a._v("入参：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("不包含第end个数")])]),a._v(" "),t("li",[a._v("若start,end为"),t("strong",[a._v("负数")]),a._v("，则从数组"),t("strong",[a._v("最后一个向前")]),a._v("截取")])]),a._v(" "),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[1,2,3,4,5].slice(1,2,3,4,5)\n//结果为：[2]\n")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("splice（删除，插入）")])]),a._v(" "),t("p",[a._v("删除或插入一部分元素，并"),t("strong",[a._v("返回")]),a._v("删除这部分数组，"),t("strong",[a._v("原")]),a._v("数组会"),t("strong",[a._v("变")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("splice(start, number, item1, ...itemx )\n")])])]),t("p",[a._v("入参：")]),a._v(" "),t("p",[a._v("​\t从start索引开始删除")]),a._v(" "),t("p",[a._v("​\tnumber，代表"),t("strong",[a._v("删除元素的个数")])]),a._v(" "),t("p",[a._v("​\titems 要"),t("strong",[a._v("插入")]),a._v("到索引的"),t("strong",[a._v("新元素")])]),a._v(" "),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[1,2,3,4,5].splice(1,2,3,4,5)\n\n//输出结果为：[2,3]\n//原数组会变成：[1,2,3,4,5,4,5]，即删除和插入数据\n\nvar  a = [1,2,3]\na.splice(0,1) // 返回：[1]\n\nconsole.log(a)\n//输出结果为： [2, 3]\n")])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("copyWithin（复制替换）")])]),a._v(" "),t("p",[a._v("复制数组的指定元素 替换掉 数组指定位置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("array.copyWithin(target, start, end)\n")])])]),t("p",[a._v("入参：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("参数")]),a._v(" "),t("th",{staticStyle:{"text-align":"left"}},[a._v("描述")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("em",[a._v("target")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("必需，"),t("strong",[a._v("复制到指定目标索引")]),a._v("位置。即：目标索引。")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("em",[a._v("start")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("可选。元素"),t("strong",[a._v("复制的起始位置")]),a._v("。")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("em",[a._v("end")])]),a._v(" "),t("td",{staticStyle:{"text-align":"left"}},[a._v("可选。"),t("strong",[a._v("停止复制的索引位置")]),a._v(" (默认为 "),t("em",[a._v("array")]),a._v(".length)。如果为负值，表示倒数。即：复制，"),t("strong",[a._v("不包括第end个数")])])])])]),a._v(" "),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]; \nfruits.copyWithin(2, 0, 2); \n// 从第一个至第二个("Banana", "Orange")复制后，粘贴到第3个位置(apple)，顺延把第4个位置（Mango）也粘贴掉。\n// 输出结果：\n// Banana,Orange,Banana,Orange,Kiwi,Papaya\n')])])]),t("p",[a._v('fruits.copyWithin(2, 0, 2);\n// 从第一个至第二个("Banana", "Orange")复制后，粘贴到第3个位置(apple)，'),t("strong",[a._v("顺延把第4个位置（Mango）替换掉")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]; \nfruits.copyWithin(2, 0, 3); \n// 输出结果：\n// Banana,Orange,Banana,Orange,Apple,Papaya\n')])])]),t("p",[a._v("说明：")]),a._v(" "),t("p",[a._v('fruits.copyWithin(2, 0, 3);\n// 从第一个至第三个("Banana", "Orange", "Apple")复制后，粘贴到第3个位置(apple)，'),t("strong",[a._v('顺延把第4、5个位置（"Mango", "Kiwi"）替换掉')]),a._v("。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("reverse（颠倒位置）")])]),a._v(" "),t("p",[a._v("数组颠倒位置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("array.reverse()\n")])])]),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.reverse();\n\n// 结果输出：Mango,Apple,Orange,Banana\n')])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("toString（转字符串）")])]),a._v(" "),t("p",[a._v("将 数组转换为字符串")]),a._v(" "),t("p",[a._v("array.toString()")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nvar x = fruits.toString();\n// 结果输出：Banana,Orange,Apple,Mango\n')])])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("unshift（头插入），shift（头删除），push（尾插入），pop（尾删除）")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/04/13/Z6ygzUk1OVTetx2.png",alt:"image-20220413151143099"}}),a._v("注意：")]),a._v(" "),t("p",[a._v("shift，中文指：转移/去除")]),a._v(" "),t("p",[a._v("unshift，中文指：头部插入")]),a._v(" "),t("p",[a._v("后部操作：push、pop ，类似栈的后入先出")]),a._v(" "),t("p",[a._v("头部操作：unshift、shift，类似队列的先入先出")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("concat")])]),a._v(" "),t("p",[t("strong",[a._v("连接两个或多个数组")]),a._v("。该方法"),t("strong",[a._v("不会改变现有的数组")]),a._v("，而仅仅会返回被连接数组的一个副本")]),a._v(" "),t("p",[a._v("例子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var a = [1,2,3];\nconsole.log(a.concat(4,5));\n// 输出结果为：1,2,3,4,5\nconsole.log(a)\n// 输出结果为：1,2,3\n")])])])])]),a._v(" "),t("p",[a._v("​\t\thttp://caibaojian.com/w3c/js/jsref_concat_array.html")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("reduce")]),a._v(" "),t("p",[a._v("对 "),t("strong",[a._v("函数数组")]),a._v(" 进行 "),t("strong",[a._v("函数嵌套")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("funcs.reduce((a, b) => (...args) => a(b(...args)))\n")])])]),t("p",[a._v("注：")]),a._v(" "),t("p",[a._v("funcs：函数数组")]),a._v(" "),t("p",[a._v("入参：函数")])])]),a._v(" "),t("h2",{attrs:{id:"属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[a._v("#")]),a._v(" 属性")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("length")])]),a._v(" "),t("p",[a._v("长度")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);