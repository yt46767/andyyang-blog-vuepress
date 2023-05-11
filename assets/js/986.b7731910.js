(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1082:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"options属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options属性"}},[s._v("#")]),s._v(" options属性")]),s._v(" "),n("ol",[n("li",[s._v("可以用来指定覆盖内置属性的默认值")]),s._v(" "),n("li",[s._v("此外，每一个目标（target）中还可以拥有一个专门针对此目标（target）的options属性。目标（target）级的平options将会覆盖任务级的options。")]),s._v(" "),n("li",[s._v("可选的")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('grunt.initConfig({\n  concat: {\n    options: {\n      // 这里是任务级的Options，覆盖默认值 \n    },\n    foo: {\n      options: {\n        // "foo" target options may go here, overriding task-level options.\n      },\n    },\n    bar: {\n      // No options specified; this target will use task-level options.\n    },\n  },\n});\n')])])]),n("h2",{attrs:{id:"简洁格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简洁格式"}},[s._v("#")]),s._v(" 简洁格式")]),s._v(" "),n("p",[s._v("通常情况下它用于只读任务,还支给每个src-dest文件映射指定额外的属性。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("grunt.initConfig({\n  jshint: {\n    foo: {\n      src: ['src/aa.js', 'src/aaa.js']\n    },\n  },\n  concat: {\n    bar: {\n      src: ['src/bb.js', 'src/bbb.js'],\n      dest: 'dest/b.js',\n    },\n  },\n});\n")])])]),n("h2",{attrs:{id:"文件对象格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件对象格式"}},[s._v("#")]),s._v(" 文件对象格式")]),s._v(" "),n("p",[s._v("属性名就是目标文件，源文件就是它的值(源文件列表则使用数组格式声明)\n但是不能够给每个映射指定附加的属性。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("grunt.initConfig({\n  concat: {\n    foo: {\n      files: {\n        'dest/a.js': ['src/aa.js', 'src/aaa.js'],\n        'dest/a1.js': ['src/aa1.js', 'src/aaa1.js'],\n      },\n    },\n    bar: {\n      files: {\n        'dest/b.js': ['src/bb.js', 'src/bbb.js'],\n        'dest/b1.js': ['src/bb1.js', 'src/bbb1.js'],\n      },\n    },\n  },\n});\n")])])]),n("h2",{attrs:{id:"文件数组格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件数组格式"}},[s._v("#")]),s._v(" 文件数组格式")]),s._v(" "),n("p",[s._v("支持每个目标对应多个src-dest文件映射，同时也允许每个映射拥有额外属性：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("grunt.initConfig({\n  concat: {\n    foo: {\n      files: [\n        {src: ['src/aa.js', 'src/aaa.js'], dest: 'dest/a.js'},\n        {src: ['src/aa1.js', 'src/aaa1.js'], dest: 'dest/a1.js'},\n      ],\n    },\n    bar: {\n      files: [\n        {src: ['src/bb.js', 'src/bbb.js'], dest: 'dest/b/', nonull: true},\n        {src: ['src/bb1.js', 'src/bbb1.js'], dest: 'dest/b1/', filter: 'isFile'},\n      ],\n    },\n  },\n});\n")])])]),n("h2",{attrs:{id:"通配符模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通配符模式"}},[s._v("#")]),s._v(" 通配符模式")]),s._v(" "),n("p",[s._v("1、 * 匹配任意数量的字符，但不匹配 /\n2、 ? 匹配单个字符，但不匹配 /\n3、 ** 匹配任意数量的字符，包括 /，只要它是路径中唯一的一部分\n4、 {} 允许使用一个逗号分割的“或”表达式列表\n5、 ! 在模式的开头用于排除一个匹配模式所匹配的任何文件")]),s._v(" "),n("h2",{attrs:{id:"动态构建文件对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态构建文件对象"}},[s._v("#")]),s._v(" 动态构建文件对象")]),s._v(" "),n("p",[s._v("expand 设置为true将启用下面的选项：\n1、 cwd 所有src指定的匹配都将相对于此处指定的路径（但不包括此路径） 。\n2、 src 相对于cwd路径的匹配模式。\n3、 dest 目标文件路径前缀。\n4、 ext 对于生成的dest路径中所有实际存在文件，均使用这个属性值替换扩展名。（替换拓展名）\n5、 extDot 用于指定标记扩展名的英文点号的所在位置。可以赋值 'first' （扩展名从文件名中的第一个英文点号开始） 或 'last' （扩展名从最后一个英文点号开始），默认值为 'first' （拓展名从哪里开始）\n6、 flatten 从生成的dest路径中移除所有的路径部分。\n7、 rename 嵌入自定义函数，返回包含新目标和文件名的字符串。 为每个匹配的src文件调用此函数（在扩展名重命名和展平后）\n例：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("grunt.initConfig({\n  uglify: {\n    static_mappings: {\n      // Because these src-dest file mappings are manually specified, every\n      // time a new file is added or removed, the Gruntfile has to be updated.\n      files: [\n        {src: 'lib/a.js', dest: 'build/a.min.js'},\n        {src: 'lib/b.js', dest: 'build/b.min.js'},\n        {src: 'lib/subdir/c.js', dest: 'build/subdir/c.min.js'},\n        {src: 'lib/subdir/d.js', dest: 'build/subdir/d.min.js'},\n      ],\n    },\n    dynamic_mappings: {\n      // Grunt will search for \"**/*.js\" under \"lib/\" when the \"uglify\" task\n      // runs and build the appropriate src-dest file mappings then, so you\n      // don't need to update the Gruntfile when files are added or removed.\n      files: [\n        {\n          expand: true,     \n          cwd: 'lib/',      \n          src: ['**/*.js'], //所有的js\n          dest: 'build/',  \n          ext: '.min.js',  \n          extDot: 'first'\n        },\n      ],\n    },\n  },\n});\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);