(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{845:function(t,s,e){"use strict";e.r(s);var a=e(7),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"react-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-hook"}},[t._v("#")]),t._v(" react hook")]),t._v(" "),s("p",[t._v("react hook是react中引入 "),s("strong",[t._v("新特性")]),t._v("，它可以让react函数组件也拥有状态；\n通过自定义hook可以实现在 "),s("strong",[t._v("组件间公用状态操作")]),t._v(" ；")]),t._v(" "),s("p",[t._v("react提供了 "),s("strong",[t._v("useState、useEffect两个hook函数")]),t._v(" 来创建stack hook和effect hook")]),t._v(" "),s("h2",{attrs:{id:"usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),s("ul",[s("li",[t._v("调用"),s("code",[t._v("useState()")]),t._v("函数，会返回一个变量("),s("code",[t._v("count")]),t._v(")以及一个函数("),s("code",[t._v("setCount")]),t._v(")。")]),t._v(" "),s("li",[s("code",[t._v("useState()")]),t._v("函数中可以传入一个参数，也就是该变量的"),s("strong",[t._v("初始值")]),t._v("。")])]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" const [count, setCount] = useState(0)\n")])])]),s("p",[t._v("​\t等价于：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" const count  = 0;\n")])])]),s("p",[t._v("​\thttps://blog.csdn.net/Zong_0915/article/details/116709801")]),t._v(" "),s("h2",{attrs:{id:"useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),s("p",[t._v("useEffect "),s("strong",[t._v("第一个参数是一个函数")]),t._v("，满足条件后会触发。"),s("strong",[t._v("第二个参数是个数组")]),t._v("，如果是个"),s("strong",[t._v("空数组")]),t._v("则"),s("strong",[t._v("只执行一次第一个参数函数")]),t._v("（相当于componentDidMount），如果里面放"),s("strong",[t._v("变量")]),t._v("，执行一次后，以后每次渲染后就"),s("strong",[t._v("监听")]),t._v("变量有没有改变，"),s("strong",[t._v("如果改变就执行第一个函数")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("useEffect(function () {\n  // do sth..\n}, [])\n")])])]),s("p",[t._v("注：后面的数组是什么都好，只要"),s("strong",[t._v("数组内容变一次")]),t._v("，"),s("strong",[t._v("第一个参数函数")]),t._v("就会被"),s("strong",[t._v("执行一次")])]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/whosmeya/p/13022607.html?ivk_sa=1024320u")])])}),[],!1,null,null,null);s.default=v.exports}}]);