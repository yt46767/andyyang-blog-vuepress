(window.webpackJsonp=window.webpackJsonp||[]).push([[992],{1089:function(t,s,e){"use strict";e.r(s);var n=e(7),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("附加脚本和样式，删除调试部件，附加html部分，模板选项")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install grunt-html-build --save-dev\n")])])]),s("h2",{attrs:{id:"加载任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载任务"}},[t._v("#")]),t._v(" 加载任务")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grunt.loadNpmTasks('grunt-html-build');\n")])])]),s("h2",{attrs:{id:"例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[t._v("#")]),t._v(" 例")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grunt.initConfig({\n    fixturesPath: \"fixtures\",\n \n    htmlbuild: {\n        dist: {\n            src: 'index.html',\n            dest: 'samples/',\n            options: {\n                beautify: true,\n                prefix: '//some-cdn',\n                relative: true,\n                basePath: false,\n                scripts: {\n                    bundle: [\n                        '<%= fixturesPath %>/scripts/*.js',\n                        '!**/main.js',\n                    ],\n                    main: '<%= fixturesPath %>/scripts/main.js'\n                },\n                styles: {\n                    bundle: [\n                        '<%= fixturesPath %>/css/libs.css',\n                        '<%= fixturesPath %>/css/dev.css'\n                    ],\n                    test: '<%= fixturesPath %>/css/inline.css'\n                },\n                sections: {\n                    views: '<%= fixturesPath %>/views/**/*.html',\n                    templates: '<%= fixturesPath %>/templates/**/*.html',\n                    layout: {\n                        header: '<%= fixturesPath %>/layout/header.html',\n                        footer: '<%= fixturesPath %>/layout/footer.html'\n                    }\n                },\n                data: {\n                    // Data to pass to templates\n                    version: \"0.1.0\",\n                    title: \"test\",\n                },\n            }\n        }\n    }\n});\n")])])]),s("p",[t._v("编译成")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<html>\n    <head>\n        <title>grunt-html-build - Test Page</title>\n        <link type="text/css" rel="stylesheet" href="../fixtures/css/libs.css" />\n        <link type="text/css" rel="stylesheet" href="../fixtures/css/dev.css" />\n        <style>\n            .this-is-inline {\n                font-weight: bold;\n            }\n        </style> \n    </head>\n    <body id="landing-page">\n        <header>...</header>\n        <div id="view1">...</div>\n        <div id="view2">...</div>\n        <div id="view3">...</div>\n        <footer>...</footer>\n        <script type="text/javascript" src="/path/analytics.js"><\/script> \n        <script type="text/javascript" src="../fixtures/scripts/app.js"><\/script> \n        <script type="text/javascript" src="../fixtures/scripts/libs.js"><\/script> \n        <script type="text/javascript">\n            var version = "0.1.0",\n                title = "test";\n        <\/script> \n \n        <script type="text/javascript">\n            var version = "0.1.0";\n            productionMain();\n        <\/script> \n        <script type="text/javascript">\n            var version = "<%= version %>";\n            productionMain();\n        <\/script> \n    </body>\n</html>\n')])])])])}),[],!1,null,null,null);s.default=a.exports}}]);