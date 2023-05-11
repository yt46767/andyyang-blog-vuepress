(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{791:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"官方文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"http://nodejs.cn/api/fs.html#file-system",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"常用的一些方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的一些方法"}},[t._v("#")]),t._v(" 常用的一些方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("fs.access()")]),t._v(": 检查文件是否存在，以及 Node.js 是否有权限访问。")]),t._v(" "),s("li",[s("code",[t._v("fs.appendFile()")]),t._v(": 追加数据到文件。如果文件不存在，则创建文件。")]),t._v(" "),s("li",[s("code",[t._v("fs.close()")]),t._v(": 关闭文件描述符。")]),t._v(" "),s("li",[s("code",[t._v("fs.copyFile()")]),t._v(": 拷贝文件。")]),t._v(" "),s("li",[s("code",[t._v("fs.mkdir()")]),t._v(": 新建文件夹。")]),t._v(" "),s("li",[s("code",[t._v("fs.open()")]),t._v(": 设置文件模式?")]),t._v(" "),s("li",[s("code",[t._v("fs.readdir()")]),t._v(": 读取目录的内容。")]),t._v(" "),s("li",[s("code",[t._v("fs.readFile()")]),t._v(": 读取文件的内容")]),t._v(" "),s("li",[s("code",[t._v("fs.realpath()")]),t._v(": 将相对的文件路径指针（.、..）解析为完整的路径。")]),t._v(" "),s("li",[s("code",[t._v("fs.rename()")]),t._v(": 重命名文件或文件夹。")]),t._v(" "),s("li",[s("code",[t._v("fs.rmdir()")]),t._v(": 删除文件夹。")]),t._v(" "),s("li",[s("code",[t._v("fs.stat()")]),t._v(": 返回文件（通过传入的文件名指定）的状态。相关方法：fs.fstat()、fs.lstat()。")]),t._v(" "),s("li",[s("code",[t._v("fs.writeFile()")]),t._v(": 将数据写入文件。")])]),t._v(" "),s("h3",{attrs:{id:"fs-stat-path-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-stat-path-options-callback"}},[t._v("#")]),t._v(" fs.stat(path[, options], callback)")]),t._v(" "),s("p",[t._v("异步地获得文件的详细信息")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/joe/test.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSymbolicLink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1024000 //= 1MB")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(stats)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stats {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   dev: 16777220,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   mode: 33188,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   nlink: 1,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   uid: 501,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   gid: 20,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   rdev: 0,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   blksize: 4096,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ino: 14214074,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   size: 8,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   blocks: 8,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   atimeMs: 1561174616618.8555,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   mtimeMs: 1561174614584,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ctimeMs: 1561174614583.8145,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   birthtimeMs: 1561174007710.7478,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   atime: 2019-06-22T03:36:56.619Z,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   mtime: 2019-06-22T03:36:54.584Z,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ctime: 2019-06-22T03:36:54.584Z,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   birthtime: 2019-06-22T03:26:47.711Z")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),s("v-alert",{attrs:{type:"warning",text:"",icon:"mdi-alert-outline"}},[t._v("警告\n"),s("p",[t._v("不推荐在调用"),s("code",[t._v("fs.open()")]),t._v("、"),s("code",[t._v("fs.readFile()")]),t._v("或"),s("code",[t._v("fs.writeFile()")]),t._v("之前使用"),s("code",[t._v("fs.stat()")]),t._v("检查文件是否存在。 而是，用户代码应该直接打开/读取/写入文件，并在文件不可用时处理引发的错误。")]),t._v(" "),s("p",[t._v("要检查文件是否存在而不对其进行操作，建议使用"),s("code",[t._v("fs.access()")])])]),t._v(" "),s("h3",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" others")]),t._v(" "),s("h4",{attrs:{id:"获取文件夹下面第一层完整的路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取文件夹下面第一层完整的路径"}},[t._v("#")]),t._v(" 获取文件夹下面第一层完整的路径")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readdirSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folderPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fileName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folderPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排除文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fileName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lstatSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"删除文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件夹"}},[t._v("#")]),t._v(" 删除文件夹")]),t._v(" "),s("p",[t._v("官方推荐使用"),s("code",[t._v("fs-extra")]),t._v("模块")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);