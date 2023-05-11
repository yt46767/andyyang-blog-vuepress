(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{837:function(t,a,e){"use strict";e.r(a);var s=e(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" Link")]),t._v(" "),a("p",[t._v("为你的应用提供声明式的、可访问的导航链接。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { Link } from 'react-router-dom';\n<Link to=\"/about\">About</Link>\n")])])]),a("h5",{attrs:{id:"to-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-string"}},[t._v("#")]),t._v(" to: string")]),t._v(" "),a("p",[t._v("一个字符串形式的链接地址，通过 pathname、search 和 hash 属性创建。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Link to='/courses?sort=name' />\n")])])]),a("h5",{attrs:{id:"to-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-object"}},[t._v("#")]),t._v(" to: object")]),t._v(" "),a("p",[t._v("一个对象形式的链接地址，可以具有以下任何属性：")]),t._v(" "),a("ul",[a("li",[t._v("pathname - 要链接到的路径")]),t._v(" "),a("li",[t._v("search - 查询参数")]),t._v(" "),a("li",[t._v("hash - URL 中的 hash，例如 #the-hash")]),t._v(" "),a("li",[t._v("state - 存储到 location 中的额外状态数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Link to={{\n  pathname: '/courses',\n  search: '?sort=name',\n  hash: '#the-hash',\n  state: {\n    fromDashboard: true\n  }\n}} />\n")])])]),a("h5",{attrs:{id:"replace-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-bool"}},[t._v("#")]),t._v(" replace: bool")]),t._v(" "),a("p",[t._v("当设置为 true 时，点击链接后将替换历史堆栈中的当前条目，而不是添加新条目。默认为 false。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Link to="/courses" replace />\n')])])]),a("h5",{attrs:{id:"innerref-func"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innerref-func"}},[t._v("#")]),t._v(" innerRef: func")]),t._v(" "),a("p",[t._v("允许访问组件的底层引用。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const refCallback = node => {\n  // node 指向最终挂载的 DOM 元素，在卸载时为 null\n  // 下面node为 <a href="/"></a>\n}\n\n<Link to="/" innerRef={refCallback} />\n')])])]),a("h5",{attrs:{id:"others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" others")]),t._v(" "),a("p",[t._v("你还可以传递一些其它属性，例如 title、id 或 className 等。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Link to="/" className="nav" title="a title">About</Link>\n')])])]),a("h2",{attrs:{id:"navlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navlink"}},[t._v("#")]),t._v(" NavLink")]),t._v(" "),a("p",[t._v("一个特殊版本的 Link，它会在与当前 URL 匹配时为其呈现元素==添加样式属性==。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import { NavLink } from 'react-router-dom';\n\n<NavLink to=\"/about\">About</NavLink>\n")])])]),a("h5",{attrs:{id:"activeclassname-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activeclassname-string"}},[t._v("#")]),t._v(" activeClassName: string")]),t._v(" "),a("p",[t._v("当元素处于激活状态时应用的类，默认为 active。它将与 className 属性一起使用。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<NavLink to="/faq" activeClassName="selected">FAQs</NavLink>\n')])])]),a("h5",{attrs:{id:"activestyle-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activestyle-object"}},[t._v("#")]),t._v(" activeStyle: object")]),t._v(" "),a("p",[t._v("当元素处于激活状态时应用的样式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const activeStyle = {\n  fontWeight: 'bold',\n  color: 'red'\n};\n\n<NavLink to=\"/faq\" activeStyle={activeStyle}>FAQs</NavLink>\n")])])]),a("h5",{attrs:{id:"exact-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exact-bool"}},[t._v("#")]),t._v(" exact: bool")]),t._v(" "),a("p",[t._v("如果为 true，则只有在位置==完全匹配==时才应用激活类/样式。\n"),a("img",{attrs:{src:"https://note.youdao.com/yws/res/4812/3421AD496E924182865D11F0C39EAB4B",alt:"FireShot Capture 035 - React Router_ Declarative Routing for Re"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<NavLink exact to="/profile">Profile</NavLink>\n')])])]),a("h5",{attrs:{id:"strict-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strict-bool"}},[t._v("#")]),t._v(" strict: bool")]),t._v(" "),a("p",[t._v("如果为 true，则在确定位置是否与当前 URL 匹配时，将考虑位置的路径名后面的斜杠。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://note.youdao.com/yws/res/4809/2AC6564D6C6540449D94D0380C366EB9",alt:"FireShot Capture 034 - React Router_ Declarative Routing for Re"}})]),t._v(" "),a("h5",{attrs:{id:"isactive-func"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isactive-func"}},[t._v("#")]),t._v(" isActive: func")]),t._v(" "),a("p",[t._v("添加额外逻辑以确定链接是否处于激活状态的函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 只有当事件 id 为奇数时才考虑激活\nconst oddEvent = (match, location) => {\n  if (!match) {\n    return false;\n  }\n  const eventID = parseInt(match.params.eventID);\n  return !isNaN(eventID) && eventID % 2 === 1;\n}\n\n<NavLink to="/events/123" isActive={oddEvent}>Event 123</NavLink>\n')])])]),a("h2",{attrs:{id:"redirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect"}},[t._v("#")]),t._v(" Redirect")]),t._v(" "),a("p",[t._v("导航到一个新的位置。新的位置将覆盖历史堆栈中的当前条目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import { Route, Redirect } from \'react-router-dom\';\n\n<Route exact path="/" render={() => (\n  loggedIn ? (\n    <Redirect to="/dashboard" />\n  ) : (\n    <PublicHomePage />\n  )\n)} />\n')])])]),a("h5",{attrs:{id:"to-string-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-string-2"}},[t._v("#")]),t._v(" to: string")]),t._v(" "),a("p",[t._v("要重定向到的 URL")]),t._v(" "),a("h5",{attrs:{id:"to-object-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-object-2"}},[t._v("#")]),t._v(" to: object")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Redirect to={{\n  pathname: '/login',\n  search: '?utm=your+face',\n  state: {      //在组件中通过 this.props.location.state 进行访问\n    referrer: currentLocation\n  }\n}} />\n")])])]),a("h5",{attrs:{id:"push-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-bool"}},[t._v("#")]),t._v(" push: bool")]),t._v(" "),a("p",[t._v("如果为 true，重定向会将新的位置推入历史记录，而不是替换当前条目。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Redirect push to="/somewhere/else" />\n')])])]),a("h5",{attrs:{id:"from-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-string"}},[t._v("#")]),t._v(" from: string")]),t._v(" "),a("ul",[a("li",[t._v("要从中进行重定向的路径名")]),t._v(" "),a("li",[t._v("所有匹配的 URL 参数都会提供给 to，必须包含在 to 中用到的所有参数，to 未使用的其它参数将被忽略。")]),t._v(" "),a("li",[t._v("只能在 Switch 组件内使用 Redirect from")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 根据匹配参数进行重定向\nSwitch\n  <Redirect from='/users/:id' to='/users/profile/:id' />\n  <Route path='/users/profile/:id' component={Profile} />\n</Switch>\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);