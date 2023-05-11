(window.webpackJsonp=window.webpackJsonp||[]).push([[928],{1024:function(t,s,a){"use strict";a.r(s);var e=a(7),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("阐述：")]),t._v(" "),s("p",[t._v("sonarqube是集成"),s("strong",[t._v("多种开发语言的多个检测工具")]),t._v("于一身，检测会包罗万象！！！")]),t._v(" "),s("h2",{attrs:{id:"有eslint-tslint等工具-还要sonar干嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有eslint-tslint等工具-还要sonar干嘛"}},[t._v("#")]),t._v(" 有eslint, tslint等工具，还要sonar干嘛")]),t._v(" "),s("p",[t._v("首先需要说的是，这两者不是一个层级的东西，eslint, tslint是js代码，ts代码的风格检查工具，其定义一些代码编写风格，主要通过这些风格规范个人的代码。")]),t._v(" "),s("p",[t._v("而sonar是一个代码质量管理平台，其支持多种语言，多种检查工具，并将这些 "),s("a",{attrs:{href:"http://www.codercto.com/tool.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("工具"),s("OutboundLink")],1),t._v(" 的结果统一化展示，比如对于js,ts代码，sonar就有eslint，tslint等的插件可以集成进去，统一检查。")]),t._v(" "),s("h2",{attrs:{id:"sonarqube在window下使用全解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube在window下使用全解"}},[t._v("#")]),t._v(" sonarqube在window下使用全解")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载、安装、启动软件：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("sonarqube：https://www.sonarqube.org/success-download-community-edition/")]),t._v(" "),s("p",[s("strong",[t._v("（特别注意：SonarQube 7.9以上版本已不再支持mysql）")])]),t._v(" "),s("p",[t._v("版本：win 64， 9.0.0.45539")]),t._v(" "),s("p",[t._v("端口：9999")]),t._v(" "),s("p",[t._v("用户名：admin")]),t._v(" "),s("p",[t._v("密码：admin123")]),t._v(" "),s("p",[t._v("sonar.properties配置：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723164720085.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("SonarQube+Scanner：https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-windows.zip")]),t._v(" "),s("p",[t._v("版本：win 64，4.6.2.2472")]),t._v(" "),s("p",[t._v("静态代码扫描工具")]),t._v(" "),s("p",[t._v("sonar-scanner.properties配置：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723164456576.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("PostgreSQL：https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=71")]),t._v(" "),s("p",[t._v("版本：win 64，9.6")]),t._v(" "),s("p",[t._v("用户名：postgres")]),t._v(" "),s("p",[t._v("密码：admin")]),t._v(" "),s("p",[t._v("端口：5432")]),t._v(" "),s("p",[t._v("cmd登录：psql -U postgres -h localhost")]),t._v(" "),s("p",[t._v("超级用户postgres")]),t._v(" "),s("p",[t._v("注：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("数据库操作：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查看所有数据库： "),s("code",[t._v("\\l")])])]),t._v(" "),s("li",[s("p",[t._v("切换postgres数据库："),s("code",[t._v("\\c postgres")])])]),t._v(" "),s("li",[s("p",[t._v("查看所有模式："),s("code",[t._v("\\dnS")])])]),t._v(" "),s("li",[s("p",[t._v("创建my_schema模式："),s("code",[t._v("create schema my_schema;")])])])])]),t._v(" "),s("li",[s("p",[t._v("sonar配置："),s("code",[t._v("jdbc:postgresql://localhost:5432/mydatabase?currentSchema=myschema")])]),t._v(" "),s("p",[t._v("https://blog.csdn.net/sanyuedexuanlv/article/details/84615388")])])])]),t._v(" "),s("li",[s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("sonarqube下载与安装教程：https://www.cnblogs.com/jiangyaxiong1990/p/12943886.html")]),t._v(" "),s("li",[t._v("PostgreSQL安装教程：https://jingyan.baidu.com/article/7e44095318972a2fc0e2ef89.html")]),t._v(" "),s("li",[t._v("使用教程+用PostgreSQL（重要）：https://blog.csdn.net/weixin_42128393/article/details/113006138")])])]),t._v(" "),s("li",[s("p",[t._v("sonarqube低版本关注：")]),t._v(" "),s("p",[t._v("mysql")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("下载：")])]),t._v(" "),s("li",[s("p",[t._v("https://downloads.mysql.com/archives/community/")]),t._v(" "),s("p",[t._v("建数据库使其生效的命令："),s("code",[t._v("FLUSH PRIVILEGES;")])])])]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("使用教程+用mysql（重要）：https://blog.csdn.net/xiaodaiwang/article/details/78143802")])])])])]),t._v(" "),s("li",[s("p",[t._v("搭建成功后，在要检测代码质量分析的项目下，执行命令：")]),t._v(" "),s("p",[s("code",[t._v('sonar-scanner -D"sonar.projectKey=VUE-DATEPICKER-LOCAL" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9999" -D"sonar.login=1f38a5d42b35db4a380628ca2a9762d22ff050c7"')])]),t._v(" "),s("p",[t._v("执行成功：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723165803215.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723165727690.png",alt:""}})]),t._v(" "),s("p",[t._v("查看分析结果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723165825983.png",alt:""}})]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("项目如何检测代码质量分析（重要）：https://www.cnblogs.com/qiu-tian/p/13328146.html")])])]),t._v(" "),s("li",[s("p",[t._v("ci集成")]),t._v(" "),s("p",[t._v("流程图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://inews.gtimg.com/newsapp_bt/0/13777765798/641",alt:"img"}})]),t._v(" "),s("p",[t._v("原理图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190608120550562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDY4NjYwMw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("运行原理：https://blog.csdn.net/weixin_40686603/article/details/91323559")])]),t._v(" "),s("li",[s("p",[t._v("流程图：https://xw.qq.com/cmsid/20210717A09WFQ00")])])])]),t._v(" "),s("li",[s("p",[t._v("sonarqube生成token")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200523150746871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdHRsZV9rZWx2aW4=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200523150817122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdHRsZV9rZWx2aW4=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("sonarqube生成token的教程（重要）：")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/little_kelvin/article/details/106300050")])])])]),t._v(" "),s("li",[s("p",[t._v("gitlab-ci集成sonarqube：")]),t._v(" "),s("p",[t._v("检测的项目，增加gitlab-ci.yml配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sonar_preview:\n  stage: test\n  script:\n    - /usr/local/sonar-scanner/bin/sonar-scanner -Dsonar.projectKey=java -Dsonar.sources=. -Dsonar.host.url=http://172.16.68.154:9000  -Dsonar.login=13585323c4c8ac257c590d6e49c7b59dda5192f8\n  only:\n    - master\n  tags:\n    - my-runner\n")])])]),s("p",[t._v("注：13585323c4c8ac257c590d6e49c7b59dda5192f8是sonarqube生成token。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723155854761.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yt46767/doc/raw/master/image-20210723155910938.png",alt:""}})]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("gitlab-ci集成sonarqube（成功实践）https://www.cnblogs.com/lina-2159/p/13474542.html")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);