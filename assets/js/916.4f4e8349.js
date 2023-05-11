(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{228:function(t,a,s){"use strict";s.r(a);var r=s(7),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"path-resolve-返回绝对路径-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-返回绝对路径-常用"}},[t._v("#")]),t._v(" path.resolve 返回绝对路径[常用]")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010dd1a72b20.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"node返回路径方法-大全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node返回路径方法-大全"}},[t._v("#")]),t._v(" node返回路径方法[大全]")]),t._v(" "),a("p",[t._v("node自带方法\n"),a("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010dd84c4b0f.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"klaw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#klaw"}},[t._v("#")]),t._v(" klaw")]),t._v(" "),a("p",[t._v("具有可读流接口的文件系统walker")]),t._v(" "),a("h2",{attrs:{id:"klaw-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#klaw-sync"}},[t._v("#")]),t._v(" klaw-sync")]),t._v(" "),a("p",[t._v("递归，同步和快速文件系统遍历器")]),t._v(" "),a("h2",{attrs:{id:"readfilesync-易错点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readfilesync-易错点"}},[t._v("#")]),t._v(" readFileSync[易错点]")]),t._v(" "),a("p",[t._v("读取文件内容,返回字符串/buffer\nfs.readFileSync(mdFilePath, {encoding: "),a("code",[t._v("utf8")]),t._v("})\n一定要加编码格式才会返回字符串，不然就是返回buffer\n注：区别于 readdirSync 返回文件的文件夹路径")]),t._v(" "),a("h2",{attrs:{id:"path-extname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-extname"}},[t._v("#")]),t._v(" path.extname()")]),t._v(" "),a("p",[t._v("返回 path 的扩展名，如：.js")]),t._v(" "),a("h2",{attrs:{id:"node-js的path-sep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js的path-sep"}},[t._v("#")]),t._v(" node.js的path.sep")]),t._v(" "),a("p",[t._v("根据不同平台，返回系统对应的路径分隔符\nWindows 上是 \\，（在 Windows 上：'foo\\bar\\baz'.split(path.sep); ，返回: ['foo', 'bar', 'baz']）\nPOSIX 上是 /，（在 POSIX 上：'foo/bar/baz'.split(path.sep);，返回: ['foo', 'bar', 'baz']）")]),t._v(" "),a("h2",{attrs:{id:"打开浏览器访问地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开浏览器访问地址"}},[t._v("#")]),t._v(" 打开浏览器访问地址")]),t._v(" "),a("p",[t._v("const childProcess = require('child_process')\nchildProcess.exec('start http://127.0.0.1:8889/');  // 自动打开默认浏览器")]),t._v(" "),a("h2",{attrs:{id:"package-json开启多个进程服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json开启多个进程服务"}},[t._v("#")]),t._v(" package.json开启多个进程服务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const fs = require('fs');\nconst child_process = require('child_process');\n\n// 开启web服务\nchild_process.exec('serve -p 8000', function (error, stdout, stderr) {\n    if (error) {\n        console.log(error.stack);\n        console.log('Error code: '+error.code);\n        console.log('Signal received: '+error.signal);\n    }\n    console.log('stdout: ' + stdout);\n    console.log('stderr: ' + stderr);\n}).on('exit', function (code) {\n    console.log('serve子进程已退出，退出码 '+code);\n});\n\n// 自动打开浏览器模块\nchild_process.exec('start http://127.0.0.1:8000/doc/', function (error, stdout, stderr) {\n    if (error) {\n        console.log(error.stack);\n        console.log('Error code: '+error.code);\n        console.log('Signal received: '+error.signal);\n    }\n    console.log('stdout: ' + stdout);\n    console.log('stderr: ' + stderr);\n}).on('exit', function (code) {\n    console.log('open子进程已退出，退出码 '+code);\n});\n")])])]),a("h2",{attrs:{id:"child-process-的-options写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#child-process-的-options写法"}},[t._v("#")]),t._v(" child_process 的 options写法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const cp = require('child_process');\nconst iconv = require('iconv-lite');\n\nlet pid = 2756;\n\ncp.exec(`tasklist /FI \"PID eq 2756\"`, {encoding: 'buffer'}, (error , stdout, stderr) => {\n  if (error) throw error;\n  stdout = iconv.decode(stdout, 'gbk');\n  console.log(stdout);\n});\n————————————————\n版权声明：本文为CSDN博主「平仄_csdn」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/github_38589282/article/details/76725975\n")])])]),a("h2",{attrs:{id:"node-换版本-切换版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-换版本-切换版本"}},[t._v("#")]),t._v(" node 换版本 切换版本")]),t._v(" "),a("p",[t._v("window node 版本 管理 器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("nodist**（有用！）**")]),t._v(" "),a("p",[t._v("使用方法：")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/weixin_30617695/article/details/99484512")]),t._v(" "),a("p",[t._v("安装方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nodist 8.11.2\n")])])]),a("p",[t._v("https://www.cnblogs.com/darrenji/p/5726342.html")]),t._v(" "),a("p",[t._v("切换")]),t._v(" "),a("p",[t._v("nodist 8.11.2")])]),t._v(" "),a("li",[a("p",[t._v("nvm")])])]),t._v(" "),a("p",[t._v("mac  node 版本 管理 器")]),t._v(" "),a("ul",[a("li",[t._v("n")])]),t._v(" "),a("h2",{attrs:{id:"读取目录下的所有文件名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取目录下的所有文件名"}},[t._v("#")]),t._v(" 读取目录下的所有文件名：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" readDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readdirSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出结果：\n[ 'dir1', 'file1.html', 'file2.txt', 'test.js' ]")]),t._v(" "),a("h2",{attrs:{id:"自定义命令-执行生效的必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义命令-执行生效的必要条件"}},[t._v("#")]),t._v(" 自定义命令，执行生效的必要条件：")]),t._v(" "),a("p",[t._v("（没有这句，执行时只是会打开文件而已）\n"),a("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/2021-03/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16012638059106.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"node版本切换-生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node版本切换-生效"}},[t._v("#")]),t._v(" node版本切换，生效！")]),t._v(" "),a("p",[t._v("nvmw ls")]),t._v(" "),a("p",[t._v("nvmw install v8.12.0")]),t._v(" "),a("p",[t._v("nvmw uninstall v8.12.0")]),t._v(" "),a("p",[t._v("解决：\nnvmw switch v8.12.0")]),t._v(" "),a("p",[t._v("nvmw switch v12.22.1")]),t._v(" "),a("p",[t._v("nvmw use v12.22.1")]),t._v(" "),a("p",[t._v("node -v")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("nvm安装")]),t._v(" "),a("p",[t._v("https://www.jianshu.com/p/4b7c10ab14bd")]),t._v(" "),a("p",[t._v("https://www.php.cn/js-tutorial-487496.html")])]),t._v(" "),a("li",[a("p",[t._v("nvm 镜像配置\n在 nvm 的安装路径下，找到 settings.txt，在后面加上这两行\nnode_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/")])])]),t._v(" "),a("p",[t._v("nvm yarn镜像配置")]),t._v(" "),a("h1",{attrs:{id:"查看当前源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前源"}},[t._v("#")]),t._v(" 查看当前源")]),t._v(" "),a("p",[t._v("yarn config get registry")]),t._v(" "),a("h1",{attrs:{id:"修改为淘宝镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改为淘宝镜像源"}},[t._v("#")]),t._v(" 修改为淘宝镜像源")]),t._v(" "),a("p",[t._v("yarn config set registry https://registry.npm.taobao.org")]),t._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("h3",{attrs:{id:"爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬虫"}},[t._v("#")]),t._v(" 爬虫")]),t._v(" "),a("p",[t._v("https://github.com/ecitlm/Node-SpliderApi")]),t._v(" "),a("h3",{attrs:{id:"sockio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sockio"}},[t._v("#")]),t._v(" sockio")]),t._v(" "),a("p",[t._v("chat:\nhttps://github.com/plhwin/nodejs-socketio-chat")]),t._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),a("h3",{attrs:{id:"yarn的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn的安装"}},[t._v("#")]),t._v(" yarn的安装")]),t._v(" "),a("p",[t._v("tnpm i yarn -g")]),t._v(" "),a("h3",{attrs:{id:"yarn的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn的使用"}},[t._v("#")]),t._v(" yarn的使用")]),t._v(" "),a("p",[t._v("（错误）\nyarn i\n（正确）\nyarn install")]),t._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("p",[t._v("yarn / yarn install 等同于npm install 批量安装依赖\nyarn add xxx 等同于 npm install xxx —save 安装指定包到指定位置\nyarn remove xxx 等同于 npm uninstall xxx —save 卸载指定包\nyarn add xxx —dev 等同于 npm install xxx —save-dev\nyarn upgrade 等同于 npm update 升级全部包\nyarn global add xxx 等同于 npm install xxx -g 全局安装指定包\n参考\nhttps://blog.csdn.net/w345731923/article/details/82878525")]),t._v(" "),a("p",[t._v("教程：")]),t._v(" "),a("p",[t._v("https://yarn.bootcss.com/docs/install/#windows-stable")]),t._v(" "),a("h3",{attrs:{id:"修改npm镜像为中国淘宝镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改npm镜像为中国淘宝镜像"}},[t._v("#")]),t._v(" 修改npm镜像为中国淘宝镜像")]),t._v(" "),a("p",[t._v("npm config list 查看npm 配置")]),t._v(" "),a("p",[t._v("npm config set registry https://registry.npm.taobao.org\nnpm config set disturl https://npm.taobao.org/dist")]),t._v(" "),a("h2",{attrs:{id:"npm-镜像配置还原"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-镜像配置还原"}},[t._v("#")]),t._v(" npm 镜像配置还原")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/qq_23994787/article/details/113399858")]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("h3",{attrs:{id:"日志插件-tracer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志插件-tracer"}},[t._v("#")]),t._v(" 日志插件：tracer")]),t._v(" "),a("p",[t._v("git: https://github.com/baryon/tracer 评价：非常好用，还可以输出文件。")]),t._v(" "),a("h2",{attrs:{id:"nodejs-指定版本下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-指定版本下载"}},[t._v("#")]),t._v(" nodejs 指定版本下载")]),t._v(" "),a("p",[t._v("node版本")]),t._v(" "),a("p",[t._v("https://nodejs.org/download/release/v12.22.1/")]),t._v(" "),a("h2",{attrs:{id:"node-高并发-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-高并发-案例"}},[t._v("#")]),t._v(" node 高并发 案例")]),t._v(" "),a("p",[t._v("https://static001.geekbang.org/con/94/pdf/3953973393/file/%E5%8D%81%E4%BA%BF%E7%BA%A7%20Node.js%20%E7%BD%91%E5%85%B3%E7%9A%84%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%B7%A5%E7%A8%8B%E5%AE%9E%E8%B7%B5%20-%20%E7%8E%8B%E4%BC%9F%E5%98%89.pdf")]),t._v(" "),a("h2",{attrs:{id:"关闭ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭ssl"}},[t._v("#")]),t._v(" 关闭ssl")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm config set strict-ssl false\n")])])]),a("h2",{attrs:{id:"ini-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ini-解析"}},[t._v("#")]),t._v(" ini 解析")]),t._v(" "),a("p",[t._v("文件 config.ini")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("; this comment is being ignored\nscope = global\n\n[database]\n  user = dbuser\n  password = dbpassword\n  database = use_this_database\n\n[paths.default]\n  datadir = /var/lib/data\n")])])]),a("p",[t._v("解析init内容出来：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ini.parse(fs.readFileSync(filePath, 'utf-8'))\n")])])]),a("p",[t._v("打印出来：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  scope: \'global\',\n  database: {\n    user: "dbuser",\n    password: "dbpassword",\n    database: "use_this_database",\n  },\n  paths.default: {\n    datadir: "/var/lib/data"\n  }\n}\n')])])]),a("p",[t._v("https://github.com/isaacs/ini")]),t._v(" "),a("h2",{attrs:{id:"nvm简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm简单使用"}},[t._v("#")]),t._v(" nvm简单使用")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("p",[t._v("nvm list 是查找本电脑上所有的node版本 - nvm list 查看已经安装的版本 - nvm list installed 查...\n2.\nnvm install 安装最新版本nvm\n3.\nnvm use "),a("version",[t._v("## 切换使用指定的版本node\n更多>\n来自 "),a("a",{attrs:{href:"https://www.baidu.com/s?ie=UTF-8&wd=nvm%20%E6%93%8D%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.baidu.com/s?ie=UTF-8&wd=nvm 操作"),a("OutboundLink")],1)])],1),t._v(" "),a("h2",{attrs:{id:"nvm-设置镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-设置镜像"}},[t._v("#")]),t._v(" nvm 设置镜像")]),t._v(" "),a("p",[t._v("○ nvm node_mirror [url] ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。\n○ nvm node_mirror https://npm.taobao.org/mirrors/node/\n○ nvm node_mirrorhttp://maven.paic.com.cn/repository/node\n○ nvm npm_mirror [url] ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。\nnvm npm_mirrorhttps://npm.taobao.org/mirrors/npm/\nnvm npm_mirrorhttp://maven.paic.com.cn/repository/npm\n来自 "),a("a",{attrs:{href:"http://maven.paic.com.cn/#/mirror/2/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://maven.paic.com.cn/#/mirror/2/7"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("node_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n来自 "),a("a",{attrs:{href:"https://www.jianshu.com/p/26485ee1209d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/26485ee1209d"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);