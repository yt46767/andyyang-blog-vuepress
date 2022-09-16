阐述：

sonarqube是集成**多种开发语言的多个检测工具**于一身，检测会包罗万象！！！



## 有eslint, tslint等工具，还要sonar干嘛

首先需要说的是，这两者不是一个层级的东西，eslint, tslint是js代码，ts代码的风格检查工具，其定义一些代码编写风格，主要通过这些风格规范个人的代码。

而sonar是一个代码质量管理平台，其支持多种语言，多种检查工具，并将这些 [工具](http://www.codercto.com/tool.html) 的结果统一化展示，比如对于js,ts代码，sonar就有eslint，tslint等的插件可以集成进去，统一检查。

## sonarqube在window下使用全解

1. 下载、安装、启动软件：

   - sonarqube：https://www.sonarqube.org/success-download-community-edition/

     **（特别注意：SonarQube 7.9以上版本已不再支持mysql）**

     版本：win 64， 9.0.0.45539

     端口：9999

     用户名：admin

     密码：admin123

     sonar.properties配置：

     ![](https://gitee.com/yt46767/doc/raw/master/image-20210723164720085.png)

   - SonarQube+Scanner：https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-windows.zip

     版本：win 64，4.6.2.2472

     静态代码扫描工具

     sonar-scanner.properties配置：

     ![](https://gitee.com/yt46767/doc/raw/master/image-20210723164456576.png)

   - PostgreSQL：https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=71
   
     版本：win 64，9.6
   
     用户名：postgres
   
     密码：admin
   
     端口：5432
   
     cmd登录：psql -U postgres -h localhost
   
     超级用户postgres
   
     注：
     
     - 数据库操作：
     
       - 查看所有数据库： `\l`
     
       - 切换postgres数据库：`\c postgres`
       - 查看所有模式：`\dnS`
       - 创建my_schema模式：`create schema my_schema; `
     
     - sonar配置：`jdbc:postgresql://localhost:5432/mydatabase?currentSchema=myschema`
     
       https://blog.csdn.net/sanyuedexuanlv/article/details/84615388
     
   - 参考：

        - sonarqube下载与安装教程：https://www.cnblogs.com/jiangyaxiong1990/p/12943886.html
        - PostgreSQL安装教程：https://jingyan.baidu.com/article/7e44095318972a2fc0e2ef89.html
        - 使用教程+用PostgreSQL（重要）：https://blog.csdn.net/weixin_42128393/article/details/113006138

   - sonarqube低版本关注：

        mysql

        - 下载：

        - https://downloads.mysql.com/archives/community/

          建数据库使其生效的命令：`FLUSH PRIVILEGES;`     

        参考：

        - 使用教程+用mysql（重要）：https://blog.csdn.net/xiaodaiwang/article/details/78143802



2. 搭建成功后，在要检测代码质量分析的项目下，执行命令：

    `sonar-scanner -D"sonar.projectKey=VUE-DATEPICKER-LOCAL" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9999" -D"sonar.login=1f38a5d42b35db4a380628ca2a9762d22ff050c7"`
    
    执行成功：

    ![](https://gitee.com/yt46767/doc/raw/master/image-20210723165803215.png)

    ![](https://gitee.com/yt46767/doc/raw/master/image-20210723165727690.png)

    查看分析结果：

    ![](https://gitee.com/yt46767/doc/raw/master/image-20210723165825983.png)

    参考：

    - 项目如何检测代码质量分析（重要）：https://www.cnblogs.com/qiu-tian/p/13328146.html

3. ci集成

    流程图：

    ![img](https://inews.gtimg.com/newsapp_bt/0/13777765798/641)

    原理图：

    ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190608120550562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDY4NjYwMw==,size_16,color_FFFFFF,t_70)
    
    参考：
    
    - 运行原理：https://blog.csdn.net/weixin_40686603/article/details/91323559
    
    - 流程图：https://xw.qq.com/cmsid/20210717A09WFQ00
    
      

1. sonarqube生成token

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200523150746871.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdHRsZV9rZWx2aW4=,size_16,color_FFFFFF,t_70)

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200523150817122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpdHRsZV9rZWx2aW4=,size_16,color_FFFFFF,t_70)

   参考：

   - sonarqube生成token的教程（重要）：

     https://blog.csdn.net/little_kelvin/article/details/106300050

   

2. gitlab-ci集成sonarqube：

   检测的项目，增加gitlab-ci.yml配置：

   ```
   sonar_preview:
     stage: test
     script:
       - /usr/local/sonar-scanner/bin/sonar-scanner -Dsonar.projectKey=java -Dsonar.sources=. -Dsonar.host.url=http://172.16.68.154:9000  -Dsonar.login=13585323c4c8ac257c590d6e49c7b59dda5192f8
     only:
       - master
     tags:
       - my-runner
   ```

   注：13585323c4c8ac257c590d6e49c7b59dda5192f8是sonarqube生成token。

    ![](https://gitee.com/yt46767/doc/raw/master/image-20210723155854761.png)

    ![](https://gitee.com/yt46767/doc/raw/master/image-20210723155910938.png)

    参考：

    - gitlab-ci集成sonarqube（成功实践）https://www.cnblogs.com/lina-2159/p/13474542.html

