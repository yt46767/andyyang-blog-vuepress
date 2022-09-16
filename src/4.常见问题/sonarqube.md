## jvm 1    | WrapperSimpleApp: Encountered an error running main: org.sonar.process.MessageException: Unsupported JDBC driver provider: mysql jvm 1    | org.sonar.process.MessageException: Unsupported JDBC driver provider: mysql

查看项目目录，确实没有mysql的驱动，且配置文件MySQL相关的配置也均已删除。拷贝了一个MySQL的驱动到安装目录中，也无法正常启动。

原因是: SonarQube 7.9以上版本已不再支持mysql

## sonar 配置

把我的配置贴出来大家就明白了了。数据库是postgres  表是my_schema

用超级用户postgres

sonar.jdbc.url=jdbc:postgresql://localhost/postgres?currentSchema=my_schema
sonar.jdbc.username=postgres
sonar.jdbc.password=123456

还有一个坑sonarqube必须用Chrome，ie会一直卡在loading页面

贴个sonar.properties配置

sonar.web.host=10.0.0.55

Web context. When set, it must start with forward slash (for example /sonarqube).

The default value is root context (empty value).
#sonar.web.context=/opt/sonarqube/

TCP port for incoming HTTP connections. Default value is 9000.
sonar.web.port=9000
https://blog.csdn.net/leonnew/article/details/118754604

## sonarqube properties data\es7]] with lock id [0]; maybe these locations are not writable or multiple nodes were started without increasing [node.max_local_storage_nodes

elasticSearch 启动报错 导致localhost:9200 拒绝连接
查看日志：
failed to obtain node locks, tried [[D:\ELK\elasticsearch-6.7.0\data]] with lock id [0]; maybe these locations are not writable or multiple nodes were started without increasing [node.max_local_storage_nodes] (was [1])?
解决：删除D:\ELK\elasticsearch-6.7.0\data的node文件【安装目录下的data下的node文件】
原因：可能node是原先es被占用，导致启动异常
吃过很多次亏，第一次不知道日志文件放哪里，任何异常都是有日志记录的，首要的是找到日志记录，并解决！
https://blog.csdn.net/u014177484/article/details/89954927

elasticSearch ，默认端口：9200 
