(window.webpackJsonp=window.webpackJsonp||[]).push([[808],{65:function(v,_,t){"use strict";t.r(_);var e=t(7),s=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是虚拟dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟dom"}},[v._v("#")]),v._v(" 什么是虚拟DOM？")]),v._v(" "),_("p",[v._v("把真实DOM树的结构和信息，"),_("strong",[v._v("抽象")]),v._v("成"),_("strong",[v._v("对象")]),v._v("，来模拟树形结构")]),v._v(" "),_("ul",[_("li",[v._v("例：")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("真实DOM:\n\n<div>\n    <p>Hello World</p>\n</div>\n")])])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("虚拟DOM：\nlet vnode = {\n    tag: 'div',\n    children:[ {tag:'p', text:'Hello World'}]\n}\n")])])]),_("ul",[_("li",[v._v("属性:")])]),v._v(" "),_("p",[v._v("​\t\ttag、children、text")]),v._v(" "),_("h2",{attrs:{id:"diff算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[v._v("#")]),v._v(" Diff算法")]),v._v(" "),_("p",[v._v("数组的"),_("strong",[v._v("数值更新")]),v._v("、"),_("strong",[v._v("组件创建")]),v._v("时，")]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[v._v("会运行update函数，")]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[_("strong",[v._v("update")]),v._v(" 函数 "),_("strong",[v._v("调用")]),v._v(" 组件的 "),_("strong",[v._v("render")]),v._v(" 函数")]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[_("strong",[v._v("render")]),v._v(" 函数 "),_("strong",[v._v("生成")]),v._v(" "),_("strong",[v._v("新虚拟dom树")])]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[_("strong",[v._v("_vnode")]),v._v(" 将 旧虚拟dom树 "),_("strong",[v._v("替换为")]),v._v(" "),_("strong",[v._v("新虚拟dom树")]),v._v("，用 "),_("strong",[v._v("一个变量")]),v._v(" 保存 "),_("strong",[v._v("旧虚拟dom树")])]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[v._v("接着，调用 "),_("strong",[v._v("patch函数")]),v._v(" 进行 "),_("strong",[v._v("diff算法")]),v._v(" 对比")]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[v._v("diff算法："),_("strong",[v._v("新旧")]),v._v("虚拟dom树 "),_("strong",[v._v("同层 同节点")]),v._v(" 寻找对比")]),v._v(" "),_("p",[v._v("​\t\t\t\t|")]),v._v(" "),_("p",[v._v("​\t\t\t\t/")]),v._v(" "),_("p",[v._v("同节点：相同标签、相同key、相同type（input时需要）")]),v._v(" "),_("p",[v._v("https://blog.csdn.net/qq_45955580/article/details/118221402")]),v._v(" "),_("h2",{attrs:{id:"双向数据绑定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定"}},[v._v("#")]),v._v(" 双向数据绑定")]),v._v(" "),_("ul",[_("li",[v._v("vue2.0原理：")])]),v._v(" "),_("p",[v._v("​\t\t"),_("strong",[v._v("Object.defineProperty")]),v._v("() 来劫持 "),_("strong",[v._v("各个属性")]),v._v(" 的 "),_("strong",[v._v("setter、getter")]),v._v("，")]),v._v(" "),_("p",[v._v("​\t\t在 "),_("strong",[v._v("数据变动时")]),v._v(" "),_("strong",[v._v("发布消息")]),v._v(" 给 "),_("strong",[v._v("订阅者")]),v._v("，")]),v._v(" "),_("p",[v._v("​\t\t"),_("strong",[v._v("触发")]),v._v(" 相应的 "),_("strong",[v._v("监听回调")]),v._v("，例：computed 或 watch监听回调")]),v._v(" "),_("p",[v._v("https://baijiahao.baidu.com/s?id=1727005669291246346&wfr=spider&for=pc")]),v._v(" "),_("h2",{attrs:{id:"设计模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[v._v("#")]),v._v(" 设计模式")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("工厂模式")])]),v._v(" "),_("p",[v._v("传入参数即可创建实例")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("单例模式")])]),v._v(" "),_("p",[v._v("整个程序 "),_("strong",[v._v("只")]),v._v("有 "),_("strong",[v._v("一个实例")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("发布-订阅模式")])]),v._v(" "),_("p",[v._v("事件机制")]),v._v(" "),_("p",[v._v("例：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 事件中心\nlet eventBus = new Vue()\n \n// 发布消息事件        \neventBus.$emit('add-todo',{name:'xiaogao'})\n\n // 订阅消息 事件\neventBus.$on('add-to',this.addToto)\n")])])]),_("p",[v._v("https://blog.csdn.net/weixin_43097944/article/details/116094093")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("观察者模式")])]),v._v(" "),_("p",[v._v("响应式数据")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("装饰模式")])]),v._v(" "),_("p",[v._v("@装饰器")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("策略模式")])]),v._v(" "),_("p",[_("strong",[v._v("对象")]),v._v("，在 "),_("strong",[v._v("不同场景")]),v._v(" 有 相应的 "),_("strong",[v._v("不同 行为")])])])]),v._v(" "),_("p",[v._v("https://baijiahao.baidu.com/s?id=1727005669291246346&wfr=spider&for=pc")]),v._v(" "),_("h2",{attrs:{id:"vue与react的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue与react的区别"}},[v._v("#")]),v._v(" vue与react的区别")]),v._v(" "),_("p",[v._v("vue:")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("1. **双向**数据绑定（加了**v-model**）\n")])])]),_("p",[v._v("react:")]),v._v(" "),_("ol",[_("li",[v._v("**单向 **数据绑定")]),v._v(" "),_("li",[_("strong",[v._v("比较引用")]),v._v("，组件 "),_("strong",[v._v("重新渲染")])]),v._v(" "),_("li",[v._v("用 "),_("strong",[v._v("jsx")]),v._v(" 的渲染模板")])]),v._v(" "),_("p",[v._v("https://baijiahao.baidu.com/s?id=1727005669291246346&wfr=spider&for=pc")]),v._v(" "),_("h2",{attrs:{id:"vue模板编译原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue模板编译原理"}},[v._v("#")]),v._v(" vue模板编译原理")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("beforeMounted前")]),v._v("，用 "),_("strong",[v._v("html-parser")]),v._v(" 将"),_("strong",[v._v("template模板字符串")]),v._v(" 转为 "),_("strong",[v._v("ast")]),v._v("，")]),v._v(" "),_("li",[v._v("通过 "),_("strong",[v._v("optimize")]),v._v(" 优化 ast 标记 "),_("strong",[v._v("静态的")]),v._v(" "),_("strong",[v._v("节点和根节点")]),v._v("，")]),v._v(" "),_("li",[v._v("通过 "),_("strong",[v._v("generate")]),v._v(" 将 ast 编译成 "),_("strong",[v._v("render字符串")]),v._v("，"),_("strong",[v._v("生成")]),v._v(" "),_("strong",[v._v("render函数")])]),v._v(" "),_("li",[v._v("在 "),_("strong",[v._v("beforeMount 和 mounted")]),v._v(" "),_("strong",[v._v("中间")]),v._v("，执行 render函数 "),_("strong",[v._v("生成 VNode")])]),v._v(" "),_("li",[v._v("通过 "),_("strong",[v._v("patch (VNode)")]),v._v(" 生成 "),_("strong",[v._v("dom树")])]),v._v(" "),_("li",[v._v("调用 "),_("strong",[v._v("mounted")])])]),v._v(" "),_("p",[v._v("​\thttps://blog.csdn.net/lyt_angularjs/article/details/105250391")]),v._v(" "),_("h2",{attrs:{id:"data-为什么是一个函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data-为什么是一个函数"}},[v._v("#")]),v._v(" data 为什么是一个函数")]),v._v(" "),_("p",[v._v("每个"),_("strong",[v._v("组件实例")]),v._v("，都有自己的作用域")]),v._v(" "),_("p",[_("strong",[v._v("Object")]),v._v(" 是 "),_("strong",[v._v("引用数据类型")]),v._v("，如果不用函数，data将 "),_("strong",[v._v("共用 一个内存地址")])]),v._v(" "),_("p",[v._v("https://baijiahao.baidu.com/s?id=1727005669291246346&wfr=spider&for=pc")]),v._v(" "),_("h2",{attrs:{id:"proxy-与-object-defineproperty-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#proxy-与-object-defineproperty-区别"}},[v._v("#")]),v._v(" proxy 与 Object.defineProperty 区别")]),v._v(" "),_("p",[v._v("Object.defineProperty：")]),v._v(" "),_("p",[v._v("​\t1.只能劫持 对象的属性（即：对每个对象进行遍历）")]),v._v(" "),_("p",[v._v("proxy ：")]),v._v(" "),_("p",[v._v("​\t1.劫持 "),_("strong",[v._v("整个对象")]),v._v("，返回新对象")]),v._v(" "),_("p",[v._v("https://baijiahao.baidu.com/s?id=1727005669291246346&wfr=spider&for=pcn")]),v._v(" "),_("p",[v._v("numer、array、object、symbol、boolean、string")]),v._v(" "),_("p",[v._v("作用域：")]),v._v(" "),_("p",[v._v("全局window var、块function const let")]),v._v(" "),_("p",[v._v("闭包：")]),v._v(" "),_("p",[v._v("function （）{")]),v._v(" "),_("p",[v._v("​\tvar")]),v._v(" "),_("p",[v._v("​\treturn")]),v._v(" "),_("p",[v._v("}")]),v._v(" "),_("p",[v._v("js 继承方式")]),v._v(" "),_("p",[v._v("extend class")]),v._v(" "),_("p",[v._v("原生js :")]),v._v(" "),_("p",[v._v("父类 function")]),v._v(" "),_("p",[v._v("拷贝")]),v._v(" "),_("p",[v._v("lodash工具类：var 对象 = _.deepclone(目标对象)")]),v._v(" "),_("p",[v._v("JSON.()")]),v._v(" "),_("p",[v._v("deepclone: 遍历log(n) if")]),v._v(" "),_("p",[v._v("promise")]),v._v(" "),_("p",[v._v("function promise")]),v._v(" "),_("p",[v._v("​\tvar status = pending 、resolve、reject")]),v._v(" "),_("p",[v._v("​\tvar value =")]),v._v(" "),_("p",[v._v("​\treturn resolve(){")]),v._v(" "),_("p",[v._v("​\tif(status = resolve)")]),v._v(" "),_("p",[v._v("​\tvalue = 'resolve'")]),v._v(" "),_("p",[v._v("​\t}")]),v._v(" "),_("p",[v._v("promise.prot.then = (full,fire)")]),v._v(" "),_("p",[v._v("​\tthis.status = resolve")]),v._v(" "),_("p",[v._v("​\tfull(value)")]),v._v(" "),_("p",[v._v("​\tif (ta)")]),v._v(" "),_("p",[v._v("​\tfile(value)")]),v._v(" "),_("p",[v._v("promise.all()")]),v._v(" "),_("p",[v._v("promise.")]),v._v(" "),_("p",[v._v("vue 生命周期")]),v._v(" "),_("p",[v._v("beforecreate")]),v._v(" "),_("p",[v._v("create")]),v._v(" "),_("p",[v._v("beforemount")]),v._v(" "),_("p",[v._v("mounted")]),v._v(" "),_("p",[v._v("beforeupdate")]),v._v(" "),_("p",[v._v("updated")]),v._v(" "),_("p",[v._v("beforedestroy")]),v._v(" "),_("p",[v._v("destroy")]),v._v(" "),_("p",[v._v("父子组件")]),v._v(" "),_("p",[v._v("子 父")]),v._v(" "),_("p",[v._v("props")]),v._v(" "),_("p",[v._v("单向")]),v._v(" "),_("p",[v._v("v-model")]),v._v(" "),_("p",[v._v("双向")]),v._v(" "),_("p",[v._v("eventbus")]),v._v(" "),_("p",[v._v("事件中心")]),v._v(" "),_("p",[v._v("react")]),v._v(" "),_("p",[v._v("content")]),v._v(" "),_("p",[v._v("webpack")]),v._v(" "),_("p",[v._v("1.分渠道")]),v._v(" "),_("p",[v._v("2.按需加载 路由器按需配置")]),v._v(" "),_("p",[v._v("3.入口")]),v._v(" "),_("p",[v._v("二进制流")]),v._v(" "),_("p",[v._v("文件夹、文件")]),v._v(" "),_("p",[v._v("4.配置加载器")]),v._v(" "),_("p",[v._v("html、css、svg、vue、image、font加载解析器")]),v._v(" "),_("p",[v._v("配置目录")]),v._v(" "),_("p",[v._v("svg")]),v._v(" "),_("p",[v._v("css postcss 补全、合入")]),v._v(" "),_("p",[v._v("image")]),v._v(" "),_("p",[v._v("vue -loader htmlparse scrptparse cssparse")]),v._v(" "),_("p",[v._v("template script style")]),v._v(" "),_("p",[v._v("html css js")]),v._v(" "),_("p",[v._v("mainfest.json")]),v._v(" "),_("p",[v._v("image svg")]),v._v(" "),_("p",[v._v("static css image")]),v._v(" "),_("h2",{attrs:{id:"vue-useform-表单组件封装-vben"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-useform-表单组件封装-vben"}},[v._v("#")]),v._v(" vue useform 表单组件封装 —— Vben")]),v._v(" "),_("p",[v._v("https://segmentfault.com/a/1190000041531167")]),v._v(" "),_("p",[v._v("vben源码\nhttps://toscode.gitee.com/zsvg/vboot-vben#http://zsvg.gitee.io/vnds")]),v._v(" "),_("p",[v._v("vscode安装扩展插件")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20220703104241036.png",alt:"image-20220703104241036"}})]),v._v(" "),_("p",[v._v("插件名列表")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20220703104339808.png",alt:"image-20220703104339808"}})]),v._v(" "),_("h2",{attrs:{id:"vue的生命周期钩子函数可以用箭头函数来写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期钩子函数可以用箭头函数来写"}},[v._v("#")]),v._v(" vue的生命周期钩子函数可以用箭头函数来写？")]),v._v(" "),_("p",[v._v("答：\n不能")]),v._v(" "),_("p",[v._v("原因：因为钩子函数的上下文指向的就是vue，\n而箭头函数的this为上一级的作用域上下文，\n从而会导致this无法指向vue实例")]),v._v(" "),_("p",[v._v("本质原因：指向不一样！")])])}),[],!1,null,null,null);_.default=s.exports}}]);