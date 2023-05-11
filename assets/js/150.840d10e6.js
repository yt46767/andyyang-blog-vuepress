(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{572:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("DataTransfer")]),t._v(" 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。")]),t._v(" "),a("li",[a("code",[t._v("draggable")]),t._v(" 属性：就是标签元素要设置draggable=true，否则不会有效果，例如："),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("拖拽我"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("draggable")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("列表1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("code",[t._v("ondragstart")]),t._v(" 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上")]),t._v(" "),a("li",[a("code",[t._v("ondragenter")]),t._v(" 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上")]),t._v(" "),a("li",[a("code",[t._v("ondragover")]),t._v(" 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上")]),t._v(" "),a("li",[a("code",[t._v("ondrop")]),t._v(" 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上")]),t._v(" "),a("li",[a("code",[t._v("ondragend")]),t._v(" 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上")]),t._v(" "),a("li",[a("code",[t._v("Event.preventDefault()")]),t._v(" 方法：阻止默认的些事件方法等执行。\n在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。（默认情况下是无法将数据、元素放到其他元素中的）")]),t._v(" "),a("li",[a("code",[t._v("Event.effectAllowed")]),t._v(" 属性：就是拖拽的效果。（我没试出效果）")])]),t._v(" "),a("h3",{attrs:{id:"浏览器默认选择到的dom都可以拖拽-我们可以阻止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器默认选择到的dom都可以拖拽-我们可以阻止"}},[t._v("#")]),t._v(" 浏览器默认选择到的dom都可以拖拽，我们可以阻止")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ondragstart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("return false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 然后需要拖拽的元素上面\nonDragStart (e) {\n\te.stopPropagation(); // 全局阻止了dragstart事件，这里不能冒泡到全局\n}\n")])])]),a("h3",{attrs:{id:"美化插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#美化插件"}},[t._v("#")]),t._v(" 美化插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/draggable-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("draggable-polyfill"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);