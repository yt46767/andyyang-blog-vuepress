## javabean 继承 派生类 中有很多属性,但是实际上只需要一部分属性转为json字符串,
1.试试在属性上加 @JsonIgnore,忽略掉该属性
2.如果User类有set集合属性，不能直接转换成json，需要过滤掉set集合属性
jar包：fastjson

## 
// 无参数构造方法赋值
AdminUser adminUser = new AdminUser();
adminUser.setAdminName(name);
adminUser.setAge(age);
adminUser.setPwd(DigestUtils.md5Hex(pwd)) ;
return  adminUser;

## 继承获取私有属性
https://www.cnblogs.com/ztt0918/p/8043757.html

## 创建对象
（5种方法）
https://blog.csdn.net/m949598807/article/details/88369723

## 类里嵌套类
![输入图片说明](https://images.gitee.com/uploads/images/2021/0506/154608_c55054f2_1779874.png "屏幕截图.png")
https://blog.csdn.net/shichimiyasatone/article/details/85268390

## json过滤
// 返回时候不包含 filter 内的 createTime, updateTime 字段
// @JSON(type = Article.class, filter="createTime,updateTime")

## @Getter/@Setter注解 安装与使用
https://blog.csdn.net/mumuwang1234/article/details/110707355

## 属性大小写
    // @JsonProperty和@JsonIgnore一起保证属性大小写按字段名输出

## SpringBoot应用在Intelij IDEA里面启动时总报Process finished with exit code 1
解决办法如下:

删除工程里的所有.idea目录 .iml文件

## 代码修改，没有热更新
![输入图片说明](https://images.gitee.com/uploads/images/2021/0512/114950_f5974481_1779874.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0512/115005_b7b1d17d_1779874.png "屏幕截图.png")
https://www.cnblogs.com/codecheng99/p/12512551.html

https://www.it610.com/article/1289073251653328896.htm

关键一句
如果发现全部设置后不起作用，点一下debug，项目不会重新启动，但是会更新资源
再不行，就rebuild向al英国文档及a'l

## 使用idea构建Maven项目的时候有个错误Error:Maven Resources Compiler: Maven project configuration required for modul
解决：
https://blog.csdn.net/weixin_40359716/article/details/104629073

## Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.18.1:test (default-test) on project wechart-dto: There are test failures
解决：
https://blog.csdn.net/qq_24313643/article/details/105095474
https://www.cnblogs.com/suizhikuo/p/11507126.html

## 解决:Could not write JSON: No serializer found for class *** and no properties错误
场景:使用RestController或者Controller注解将查询的实体装换成json字符串时报错。

原因:需要装换的对应实体类的属性缺少:getter和setter方法,导致将实体类装换的json格式类无法读取对应的属性从而报错。

解决方法:在需要装换的是实体类中给属性加上getter和setter方法(或者使用:lombok插件给实体类加上:Getter和Setter注解)

拓展:错误信息为:Request processing failed; nested exception is java.lang.IllegalArgumentException: No converter found for return value of type...的原因同样是实体类缺少getter和setter方法,解决方式跟上面的错误一样。

https://blog.csdn.net/qq_40891009/article/details/102673358

## java spring boot 中文 乱码
https://blog.csdn.net/yemuyouhan/article/details/105855133
https://www.segon.cn/spring-boot-fix-garbled-chinese.html
注：
Spring Boot中的application.yml位置放在：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0520/180736_a040dd56_1779874.png "屏幕截图.png")

## Could not write JSON: No serializer found for class com.github.wechart.entit
原因：缺少getter/setter，导致不能赋值
解决：class类名和变量名一致 + @Data注解

## 问题：Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile (default-compile) on project wechart: Fatal error compiling
解决：
https://blog.csdn.net/weixin_44190665/article/details/113062616

## 对于属性`<clinit>`, 注释org.springframework.web.bind.annotation.CrossOrigin缺少值
解决：把jdk版本和Java语言级别都调成1.8

## maven打包springboot工程jar包中存在BOOT-INF目录
解决：在这个springboot工程的pom文件中的spring-boot-maven-plugin配置中加入<skip>true</skip>

## 跨域处理方法（全）

https://blog.csdn.net/yao940622/article/details/103959076

## spring 打印sql语句

```
<!-- 打印查询语句 -->
<setting name="logImpl" value="STDOUT_LOGGING" />
```

https://blog.csdn.net/m0_37601917/article/details/80102976

### .json结尾的接口的reponse.contentType发生变化，导致前端拿到数据类型为text/html，原先json对象返回给前端，现在返回字符串给前端，前端执行报错，导致异常。

解决：dispatcher-servlet.xml的默认servlet配置，优先返回json格式![img](D:/WXWork/1688853326456358/Cache/Image/2021-09/企业微信截图_16315248954204(1).png)![img](D:/WXWork/1688853326456358/Cache/Image/2021-09/企业微信截图_16316762005849.png)

## 严重: Error configuring application listener of class cn.github.weup.biz.web.listeners.WeupSpringContextLoaderListener java.lang.NoClassDefFoundError: Lorg/springframework/beans/factory/access/BeanFactoryReference;
    at java.lang.Class.getDeclaredFields0(Native Method)

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16339389671983(1).png)

![image-20211011173311223](https://gitee.com/yt46767/doc/raw/master/image-20211011173311223.png)

## eclipse 中文 乱码

https://blog.csdn.net/lxj1435359352/article/details/79834538

### xml utf8 报错

<?xml version="1.0" encoding="UTF-8"?>报错，是啥原因？

没有解决方法：

是第一行开头有个小红叉吗？
第一种方法：
将Window -> Preferences -> General -> Network Connections -> Cache 下的 Cache entries 框内文件Remove All，保存，然后右击当前的项目选择 Validate，Eclipse 会重新加载 xsd 文件。
第二种方法：
点击eclipse左上角菜单栏 Project->clean 清理一下你所出现问题的项目。不仅这个问题，还有很多奇怪的问题都可以通过这种方式解决。
第三种方法：
如果错误依旧，那就需要删掉 xsd 文件的版本号，例如：
http://www.springframework.org/schema/context/spring-context-3.0.xsd

改成： http://www.springframework.org/schema/context/spring-context.xsd
或者是没有版本号的，可以加上版本号试试。

 真正解决方法：

Window--Preferences--General--Validation，可以去掉XML Validator 和 XSL Validator 等文件类型的验证信息(包括Manual和Build)，如下图所示:

https://zhidao.baidu.com/question/625337750740998684.html

## 警告: [SetPropertiesRule]{Server/Service/Engine/Host/Context} Setting proper

解决：

https://blog.csdn.net/qq_41570658/article/details/106567407

## Caused by: java.io.FileNotFoundException: class path resource [application-core.properties] cannot b

使用spring boot, 启动时报错, 找不到配置文件, 因为是idea找不到该配置文件
解决的方案: 在配置文件中随便修改一下内容(比如: 在空白的地方输入一个回车键, 这样idea就可以找到该配置文件了),
再重新启动, 就可以启动spring boot了

https://blog.csdn.net/weixin_44531152/article/details/92611934
