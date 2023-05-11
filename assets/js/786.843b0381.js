(window.webpackJsonp=window.webpackJsonp||[]).push([[786],{879:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"attrs-用法的改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attrs-用法的改变"}},[t._v("#")]),t._v(" $attrs 用法的改变")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/vuejs/rfcs/pull/92/files?diff=unified&w=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文官方文档"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("ul",[s("li",[t._v("Make the attrs fallthrough behavior more consistent;")]),t._v(" "),s("li",[t._v("Make it easier to pass all extraneous attrs to child elements / components.")])]),t._v(" "),s("h4",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v('In Vue 2.x, components have an implicit attrs fallthrough behavior. Any prop passed to a component, but is not declared as a prop by the component, is considered an "extraneous attribute". In 2.x, these extraneous attributes are exposed in '),s("code",[t._v("this.$attrs")]),t._v(" and implicitly applied to the component's root node. This behavior can be disabled with "),s("code",[t._v("inheritAttrs: false")]),t._v(", where the user expects to explicit control where the attrs should be applied.")]),t._v(" "),s("p",[t._v("There are a number of inconsistencies and issues in the 2.x behavior:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("inheritAttrs: false")]),t._v(" does not affect "),s("code",[t._v("class")]),t._v(" and "),s("code",[t._v("style")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("class")]),t._v(", "),s("code",[t._v("style")]),t._v(", "),s("code",[t._v("v-on")]),t._v(" listeners and custom directives are not included in "),s("code",[t._v("$attrs")]),t._v(", making it cumbersome for a higher-order component (HOC) to properly pass everything down to a nested child component.")])]),t._v(" "),s("li",[s("p",[t._v("Functional components have no implicit attrs fallthrough at all.")])])]),t._v(" "),s("p",[t._v('In 3.x, the need for "spreading extraneous attrs" also becomes more prominent due to the ability for components to render multiple root nodes (fragments). This RFC seeks to address these problems.')]),t._v(" "),s("h4",{attrs:{id:"detailed-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[t._v("#")]),t._v(" Detailed design")]),t._v(" "),s("p",[s("code",[t._v("this.$attrs")]),t._v(" now contains "),s("strong",[t._v("everything")]),t._v(" passed to the component except those that are declared as props. "),s("strong",[t._v("This includes "),s("code",[t._v("class")]),t._v(", "),s("code",[t._v("style")]),t._v(", "),s("code",[t._v("v-on")]),t._v(" listeners (as "),s("code",[t._v("onXXX")]),t._v(" props), and custom directives (as "),s("code",[t._v("onVnodeXXX")]),t._v(" props)")]),t._v(". (This is based on flat props structure as proposed in "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md#flat-vnode-props-format",target:"_blank",rel:"noopener noreferrer"}},[t._v("Render Function API Change"),s("OutboundLink")],1),t._v("). As a result of this:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v(".native")]),t._v(" modifier for "),s("code",[t._v("v-on")]),t._v(" will be removed.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("this.$listeners")]),t._v(" will be removed.")])])]),t._v(" "),s("p",[t._v("When the component returns a single root node, "),s("code",[t._v("this.$attrs")]),t._v(" will be implicitly merged into the root node's props. This is the same as 2.x, except it will now include all the props that were not previously in "),s("code",[t._v("this.$attrs")]),t._v(", as discussed above.")]),t._v(" "),s("p",[s("strong",[t._v("If the component receives extraneous attrs, but returns multiple root nodes (a fragment), an automatic merge cannot be performed. If the user did not perform an explicit spread (checked by access to "),s("code",[t._v("this.$attrs")]),t._v(" during render), a runtime warning will be emitted. The component should either pick an element to apply the attrs to (via "),s("code",[t._v('v-bind="$attrs"')]),t._v("), or explicitly suppress the warning with "),s("code",[t._v("inheritAttrs: false")]),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"inheritattrs-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inheritattrs-false"}},[t._v("#")]),t._v(" "),s("code",[t._v("inheritAttrs: false")])]),t._v(" "),s("p",[t._v("With "),s("code",[t._v("inheritAttrs: false")]),t._v(", the component can either choose to intentionally ignore all extraneous attrs, or explicitly control where the attrs should be applied via "),s("code",[t._v('v-bind="$attrs"')]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- apply attrs to an inner element instead of root --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-bind")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("In 2.x, this option does not affect "),s("code",[t._v("class")]),t._v(" and "),s("code",[t._v("style")]),t._v(" - they will be implicitly merged on root in all cases for stateful components - but in 3.0 this special case is removed: "),s("code",[t._v("class")]),t._v(" and "),s("code",[t._v("style")]),t._v(" will be part of "),s("code",[t._v("$attrs")]),t._v(" just like everything else.")]),t._v(" "),s("h4",{attrs:{id:"merging-attrs-in-render-functions-mergeprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merging-attrs-in-render-functions-mergeprops"}},[t._v("#")]),t._v(" Merging Attrs in Render Functions(mergeProps)")]),t._v(" "),s("p",[t._v("In manual render functions, it may seem convenient to just use a spread:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inheritAttrs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$attrs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("However, this will cause attrs to overwrite whatever existing props of the same name. For example, there the local "),s("code",[t._v("class")]),t._v(" may be overwritten when we probably want to merge the classes instead. Vue provides a "),s("code",[t._v("mergeProps")]),t._v(" helper that handles the merging of "),s("code",[t._v("class")]),t._v(", "),s("code",[t._v("style")]),t._v(" and "),s("code",[t._v("onXXX")]),t._v(" listeners:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mergeProps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("inheritAttrs")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This is also what "),s("code",[t._v("v-bind")]),t._v(" uses internally.")]),t._v(" "),s("h4",{attrs:{id:"consistency-between-functional-and-stateful-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-between-functional-and-stateful-components"}},[t._v("#")]),t._v(" Consistency between Functional and Stateful Components")]),t._v(" "),s("p",[t._v("Functional components will now share the exact same behavior with Stateful components. The extraneous attrs is passed via the second context argument (as specified in "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md#functional-component-signature",target:"_blank",rel:"noopener noreferrer"}},[t._v("Render Function API Change"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"components-with-no-props-declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components-with-no-props-declaration"}},[t._v("#")]),t._v(" Components with no Props Declaration")]),t._v(" "),s("p",[t._v("Note that for components without props declaration (see "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0010-optional-props-declaration.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optional Props Declaration"),s("OutboundLink")],1),t._v('), there will be no implicit attrs handling of any kind, because everything passed in is considered a prop and there will be no "extraneous" attrs. A component without props declaration (mostly functional components) is responsible for explicitly passing down necessary props. This can be easily done with object rest spread:')]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("rest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"unresolved-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unresolved-questions"}},[t._v("#")]),t._v(" Unresolved questions")]),t._v(" "),s("h5",{attrs:{id:"removing-unwanted-listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removing-unwanted-listeners"}},[t._v("#")]),t._v(" Removing Unwanted Listeners")]),t._v(" "),s("p",[t._v("With flat VNode data and the removal of "),s("code",[t._v(".native")]),t._v(" modifier, all listeners are passed down to the child component as "),s("code",[t._v("onXXX")]),t._v(" functions:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@custom")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("compiles to:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onClick")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("onCustom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bar\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When spreading "),s("code",[t._v("$attrs")]),t._v(" with "),s("code",[t._v("v-bind")]),t._v(", all parent listeners are applied to the target element as native DOM listeners. The problem is that these same listeners can also be triggered by custom events - in the above example, both a native click event and a custom one emitted by "),s("code",[t._v("this.$emit('click')")]),t._v(" in the child will trigger the parent's "),s("code",[t._v("foo")]),t._v(" handler. This may lead to unwanted behavior.")]),t._v(" "),s("p",[t._v("Props do not suffer from this problem because declared props are removed from "),s("code",[t._v("$attrs")]),t._v('. Therefore we should have a similar way to "declare" emitted events from a component. There is currently '),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/pull/16",target:"_blank",rel:"noopener noreferrer"}},[t._v("an open RFC for it"),s("OutboundLink")],1),t._v(" by @niko278.")]),t._v(" "),s("p",[t._v("Event listeners for explicitly declared events will be removed from "),s("code",[t._v("$attrs")]),t._v(" and can only be triggered by custom events emitted by the component via "),s("code",[t._v("this.$emit")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);