(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{838:function(t,a,e){"use strict";e.r(a);var n=e(7),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"prompt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prompt"}},[t._v("#")]),t._v(" Prompt")]),t._v(" "),a("ul",[a("li",[t._v("导航拦截")]),t._v(" "),a("li",[t._v("用于在位置跳转之前给予用户一些确认信息。当你的应用程序进入一个应该阻止用户导航的状态时（比如表单只填写了一半），弹出一个提示。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { Prompt } from 'react-router-dom';\n\n<Prompt\n  when={bool}\n  message=\"你确定要离开当前页面吗？\"\n/>\n")])])]),a("h5",{attrs:{id:"message-string-func"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-string-func"}},[t._v("#")]),t._v(" message: string||func")]),t._v(" "),a("p",[t._v("string - 当用户试图离开某个位置时弹出的提示信息。"),a("br"),t._v("\nfunc - 将在用户试图导航到下一个位置时调用，需要返回一个字符串以向用户显示提示，或者返回 true 以允许直接跳转。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Prompt message={location => {\n    const isApp = location.pathname.startsWith('/app');\n    //location 对象指的是下一个位置\n    return isApp ? `你确定要跳转到${location.pathname}吗？` : false;\n}} />\n")])])]),a("h5",{attrs:{id:"when-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-bool"}},[t._v("#")]),t._v(" when: bool")]),t._v(" "),a("p",[t._v("当它的值为 true 时，会弹出提示信息。如果为 false 则不会弹出")]),t._v(" "),a("h2",{attrs:{id:"switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[t._v("#")]),t._v(" Switch")]),t._v(" "),a("p",[t._v("用于渲染与路径匹配的第一个子 Route 或 Redirect。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import { Switch, Route } from \'react-router\';\n\nSwitch\n  <Route exact path="/" component={Home} />\n  <Route path="/about" component={About} />\n  <Route path="/:user" component={User} />\n  <Route component={NoMatch} />\n</Switch>\n')])])]),a("p",[t._v("这对于动画转换也很有用，因为匹配的 Route 与前一个渲染位置相同。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Fade>\n  Switch\n    {/* 这里只会渲染一个子元素 */}\n    <Route />\n    <Route />\n  </Switch>\n</Fade>\n\n<Fade>\n  <Route />\n  <Route />\n  {/* 这里总是会渲染两个子元素，也有可能是空渲染，这使得转换更加麻烦 */}\n</Fade>\n")])])]),a("h5",{attrs:{id:"location-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-object"}},[t._v("#")]),t._v(" location: object")]),t._v(" "),a("p",[t._v("用于匹配子元素而不是当前历史位置（通常是当前的浏览器 URL）的 location 对象。"),a("br"),t._v("\n如果给 Switch 提供一个 location 属性，它将覆盖匹配的子元素上的 location 属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Switch\n  <Route exact path="/" component={Home} />\n  <Route path="/users" component={Users} />\n  <Redirect from="/accounts" to="/users" />\n  <Route component={NoMatch} />\n</Switch>\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);