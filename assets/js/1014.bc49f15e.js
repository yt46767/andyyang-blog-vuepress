(window.webpackJsonp=window.webpackJsonp||[]).push([[1014],{1186:function(t,a,n){"use strict";n.r(a);var e=n(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"nodeenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodeenv"}},[t._v("#")]),t._v(" nodeEnv")]),t._v(" "),a("h4",{attrs:{id:"取值-false-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取值-false-string"}},[t._v("#")]),t._v(" 取值 "),a("code",[t._v("false")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("告知 "),a("code",[t._v("webpack")]),t._v(" 将 "),a("code",[t._v("process.env.NODE_ENV")]),t._v(" 设置为一个给定字符串"),a("br"),t._v("\n如果 "),a("code",[t._v("optimization.nodeEnv")]),t._v(" 不是 "),a("code",[t._v("false")]),t._v("，则会使用 "),a("code",[t._v("DefinePlugin")]),a("br"),t._v(" "),a("code",[t._v("optimization.nodeEnv")]),t._v(" 默认值取决于 "),a("code",[t._v("mode")]),t._v("，如果为 "),a("code",[t._v("false")]),t._v("，则会回退到 "),a("code",[t._v('"production"')])]),t._v(" "),a("blockquote",[a("p",[t._v("当 mode 设置为 'none' 时，optimization.nodeEnv 的默认值为 false")])]),t._v(" "),a("h3",{attrs:{id:"realcontenthash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#realcontenthash"}},[t._v("#")]),t._v(" realContentHash")]),t._v(" "),a("p",[t._v("资源生成正确的资源内容hash后，再添加一个额外的hash。")]),t._v(" "),a("ul",[a("li",[t._v("production模式为"),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("development模式为"),a("code",[t._v("false")])]),t._v(" "),a("li",[t._v("none模式为"),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("如果 realContentHash 设置为 false，内部数据用于计算哈希值，当静态资源相同时，它可以改变。")]),t._v(" "),a("h3",{attrs:{id:"runtimechunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtimechunk"}},[t._v("#")]),t._v(" runtimeChunk")]),t._v(" "),a("p",[t._v("提取引导模板(extracting boilerplate)")]),t._v(" "),a("h4",{attrs:{id:"取值-object-只有一个name属性-string-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取值-object-只有一个name属性-string-boolean"}},[t._v("#")]),t._v(" 取值 "),a("code",[t._v("object")]),t._v("(只有一个name属性)|"),a("code",[t._v("string")]),t._v("|"),a("code",[t._v("boolean")])]),t._v(" "),a("ol",[a("li",[t._v("默认值为"),a("code",[t._v("false")]),t._v(",每个入口 chunk 中直接嵌入 runtime")]),t._v(" "),a("li",[t._v("为每个入口添加一个只含有 runtime 的额外 chunk,下面三种配置效果一样")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'multiple'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("runtimeChunk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entrypoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("runtime~")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("entrypoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("创建一个在所有生成 chunk 之间共享的运行时文件,下面两种配置效果一样")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'single'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("runtimeChunk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'runtime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("v-alert",{attrs:{type:"warning",text:"",icon:"mdi-alert-outline"}},[t._v("警告\n"),a("p",[t._v("对于每个 runtime chunk，导入的模块会被分别初始化。"),a("br"),t._v("\n因此如果你在同一个页面中引用多个入口起点，请注意此行为。"),a("br"),t._v("\n你或许应该将其设置为 single，或者使用其他只有一个 runtime 实例的配置。")])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);