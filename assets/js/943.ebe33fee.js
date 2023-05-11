(window.webpackJsonp=window.webpackJsonp||[]).push([[943],{1039:function(t,e,r){"use strict";r.r(e);var s=r(7),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"xss-跨站脚本-攻击-cross-site-scripting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本-攻击-cross-site-scripting"}},[t._v("#")]),t._v(" xss(跨站脚本)攻击（Cross-Site Scripting）")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/129803779",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue"),e("OutboundLink")],1)]),t._v(" "),e("v-alert",{attrs:{color:"primary",text:"",icon:"mdi-lightbulb-multiple"}},[t._v("提示\n"),e("p",[t._v("vue 内部使用 Document.createTextNode() 或者 setAttribute 等浏览器原生api转义用户输入的内容"),e("br"),t._v("\n最佳实践是永远不要向 Vue 挂载可能包含服务端渲染或用户提供的内容")])]),t._v(" "),e("h4",{attrs:{id:"防范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防范"}},[t._v("#")]),t._v(" 防范")]),t._v(" "),e("ol",[e("li",[t._v("永远不要使用不可信任的模板")])]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("new Vue({\n  el: '#app',\n  template: `"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("` + userProvidedString + `"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("` // 永远不要这样做\n})\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("慎用v-html")])]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvidedHtml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("将重要的"),e("code",[t._v("cookie")]),t._v("标记为"),e("code",[t._v("http only")]),t._v(",  这样的话"),e("code",[t._v("Javascript")]),t._v("中的"),e("code",[t._v("document.cookie")]),t._v("语句就不能获取到"),e("code",[t._v("cookie")]),t._v("了.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5-URL",target:"_blank",rel:"noopener noreferrer"}},[t._v("注入 URL"),e("OutboundLink")],1),t._v("\n前后端都需要拦截，"),e("code",[t._v("url")]),t._v("的有效性")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5%E6%A0%B7%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("注入样式"),e("OutboundLink")],1),t._v(" "),e("code",[t._v("Vue")]),t._v("要在模板内避免渲染"),e("code",[t._v("style")]),t._v("标签")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/security.html#%E6%B3%A8%E5%85%A5-JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("注入 JavaScript"),e("OutboundLink")],1),t._v("\n不鼓励使用"),e("code",[t._v("Vue")]),t._v("渲染"),e("code",[t._v("<script>")]),t._v("元素,如 "),e("code",[t._v("onclick")]),t._v("、"),e("code",[t._v("onfocus")]),t._v("和"),e("code",[t._v("onmouseenter")]),t._v("的值不推荐使用用户输入的值")]),t._v(" "),e("li",[t._v("采用 "),e("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Security Policy (CSP：浏览器端指定资源白名单的方式)"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"csrf-cross-site-request-forgery-跨站请求伪造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-cross-site-request-forgery-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF（Cross-site request forgery）跨站请求伪造")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"防范-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防范-2"}},[t._v("#")]),t._v(" 防范")]),t._v(" "),e("ol",[e("li",[t._v("检查Referer字段")])]),t._v(" "),e("p",[t._v("HTTP头中有一个Referer字段，这个字段用以标明请求来源于哪个地址,Referer字段应和请求的地址位于同一域名下")]),t._v(" "),e("p",[t._v("虽然http协议对此字段的内容有明确的规定，\n但并无法保证来访的浏览器的具体实现，亦无法保证浏览器没有安全漏洞影响到此字段。\n并且也存在攻击者攻击某些浏览器，篡改其Referer字段的可能。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("添加校验token")])]),t._v(" "),e("p",[t._v("要求在访问敏感数据请求时，要求用户浏览器提供不保存在cookie中，并且攻击者无法伪造的数据作为校验")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);