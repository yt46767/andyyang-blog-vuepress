(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{826:function(t,e,n){"use strict";n.r(e);var a=n(7),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("在大多数情况下，我们推荐使用 受控组件 来处理表单数据。")]),t._v(" "),e("li",[t._v("在一个受控组件中，表单数据是由 React 组件来管理的。")]),t._v(" "),e("li",[t._v("使用非受控组件，这时表单数据将交由 DOM 节点来处理。")])]),t._v(" "),e("h5",{attrs:{id:"非受控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非受控"}},[t._v("#")]),t._v(" 非受控")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('class NameForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.input = React.createRef();\n  }\n\n  handleSubmit(event) {\n    alert(\'A name was submitted: \' + this.input.current.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          Name:\n          <input type="text" ref={this.input} />\n        </label>\n        <input type="submit" value="Submit" />\n      </form>\n    );\n  }\n}\n')])])]),e("h5",{attrs:{id:"非受控默认值-defaultvalue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非受控默认值-defaultvalue"}},[t._v("#")]),t._v(" 非受控默认值(defaultValue)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('render() {\n  return (\n    <form onSubmit={this.handleSubmit}>\n      <label>\n        Name:\n        <input\n          defaultValue="Bob"\n          type="text"\n          ref={this.input} />\n      </label>\n      <input type="submit" value="Submit" />\n    </form>\n  );\n}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);