(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{821:function(t,n,e){"use strict";e.r(n);var s=e(7),r=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"创建-refs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-refs"}},[t._v("#")]),t._v(" 创建 Refs")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.myRef = React.createRef();\n  }\n  render() {\n    return <div ref={this.myRef} />;\n  }\n}\n")])])]),n("h2",{attrs:{id:"访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[t._v("#")]),t._v(" 访问")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const node = this.myRef.current;\n")])])]),n("h2",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),n("ul",[n("li",[t._v("当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。")]),t._v(" "),n("li",[t._v("当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。")]),t._v(" "),n("li",[t._v("你不能在函数组件上使用 ref 属性，因为他们没有实例。")])]),t._v(" "),n("h2",{attrs:{id:"为-dom-元素添加-ref"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为-dom-元素添加-ref"}},[t._v("#")]),t._v(" 为 DOM 元素添加 ref")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class CustomTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    // 创建一个 ref 来存储 textInput 的 DOM 元素\n    this.textInput = React.createRef();\n    this.focusTextInput = this.focusTextInput.bind(this);\n  }\n\n  focusTextInput() {\n    // 直接使用原生 API 使 text 输入框获得焦点\n    // 注意：我们通过 "current" 来访问 DOM 节点\n    this.textInput.current.focus();\n  }\n\n  render() {\n    // 告诉 React 我们想把 <input> ref 关联到\n    // 构造器里创建的 `textInput` 上\n    return (\n      <div>\n        <input\n          type="text"\n          ref={this.textInput} />\n\n        <input\n          type="button"\n          value="Focus the text input"\n          onClick={this.focusTextInput}\n        />\n      </div>\n    );\n  }\n}\n')])])]),n("blockquote",[n("p",[t._v("React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。"),n("br"),t._v("\nref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。")])]),t._v(" "),n("h2",{attrs:{id:"为-class-组件添加-ref"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为-class-组件添加-ref"}},[t._v("#")]),t._v(" 为 class 组件添加 Ref")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class AutoFocusTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.parentTextInput = React.createRef();\n  }\n\n  componentDidMount() {\n    this.parentTextInput.current.focusTextInput();\n  }\n\n  render() {\n    return (\n      <CustomTextInput ref={this.parentTextInput} />\n    );\n  }\n}\n//这仅在 CustomTextInput 声明为 class 时才有效\n")])])]),n("h2",{attrs:{id:"refs-与函数组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#refs-与函数组件"}},[t._v("#")]),t._v(" Refs 与函数组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//你不能在函数组件上使用 ref 属性，因为它们没有实例：\nfunction MyFunctionComponent() {\n  return <input />;\n}\n\nclass Parent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.textInput = React.createRef();\n  }\n  render() {\n    // This will *not* work!\n    return (\n      <MyFunctionComponent ref={this.textInput} />\n    );\n  }\n}\n")])])]),n("h2",{attrs:{id:"回调-refs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回调-refs"}},[t._v("#")]),t._v(" 回调 Refs")]),t._v(" "),n("p",[t._v("它能助你更精细地控制何时 refs 被设置和解除。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class CustomTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.textInput = null;\n\n    this.setTextInputRef = element => {     //接受 React 组件实例或 HTML DOM 元素作为参数\n      this.textInput = element;\n    };\n\n    this.focusTextInput = () => {\n      // 使用原生 DOM API 使 text 输入框获得焦点\n      if (this.textInput) this.textInput.focus();\n    };\n  }\n\n  componentDidMount() {\n    // 组件挂载后，让文本框自动获得焦点\n    this.focusTextInput();\n  }\n\n  render() {\n    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React\n    // 实例上（比如 this.textInput）\n    return (\n      <div>\n        <input\n          type="text"\n          ref={this.setTextInputRef}\n        />\n        <input\n          type="button"\n          value="Focus the text input"\n          onClick={this.focusTextInput}\n        />\n      </div>\n    );\n  }\n}\n')])])]),n("h2",{attrs:{id:"组件间传递回调形式的-refs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件间传递回调形式的-refs"}},[t._v("#")]),t._v(" 组件间传递回调形式的 refs")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function CustomTextInput(props) {\n  return (\n    <div>\n      <input ref={props.inputRef} />\n    </div>\n  );\n}\n\nclass Parent extends React.Component {\n  render() {\n    return (\n      <CustomTextInput\n        inputRef={el => this.inputElement = el}\n      />\n    );\n  }\n}\n//this.inputElement ---\x3e input\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);