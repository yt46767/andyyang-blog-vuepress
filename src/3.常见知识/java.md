## 专业配套开发工具 IntelliJ IDEA
里面有maven下载包，一键安装项目/脚手架   

## SpringBoot框架搭建web服务
https://jingyan.baidu.com/article/e9fb46e130c7ba7521f76635.html

## Springboot 实现 Restful 服务，基于 HTTP / JSON 传输
https://ifeve.com/30590/

示例：
https://gitee.com/allen4tech/springboot-rest-api-demo
多带了数据库配置
https://gitee.com/caojieliang/demo-spring-boot-rest-template/blob/master/pom.xml
简易搭建
https://gitee.com/YaleZhangdy/springboot-restful.git

## 怎样把自己写的类打包成jar，供其他程序调用。
怎么制作jar
https://zhidao.baidu.com/question/14641683.html

## 打jar
eclipse
https://zhidao.baidu.com/question/14641683.html
idea
https://www.cnblogs.com/future-dream/p/9899872.html

https://blog.csdn.net/weixin_40268421/article/details/111593086

## 运行入口类
https://www.cnblogs.com/xiaowangtongxue/p/10816970.html
教程：
https://blog.csdn.net/weixin_42189604/article/details/82391305

## 【数据库】Java实体类的属性类型与数据库表字段类型对应表
```
JDBC类型与Java类型
JDBC类型	Java Object类型
CHAR	java.lang.String
VARCHAR	java.lang.String
LONGVARCHAR	java.lang.String
NUMERIC	java.math.BigDecimal
DECIMAL	java.math.BigDecimal
BIT	java.lang.Boolean
TINYINT	java.lang.Integer
SMALLINT	java.lang.Integer
INTEGER	java.lang.Integer
BIGINT	java.lang.Long
REAL	java.lang.Float
FOAT	java.lang.Double
DOUBLE	java.lang.Double
BINARY	byte[]
VARBINARY	byte[]
LONGVARBINARY	byte[]
DATE	java.sql.Date
TIME	java.sql.Time
TIMESTAMP	java.sql.Timestamp
Java类型与数据库表字段类型
Java数据类型	标准sql数据类型(PS:对于不同的DB可能有所差异)	Hibernate数据类型
byte
java.lang.Byte	TINYINT	byte
byte[]	VARBINARY
BLOB	binary
short
java.lang.Short	SMALLINT	short
int
java.lang.Integer	INGEGER	integer
long
java.lang.Long	BIGINT	long
float
java.lang.Float	FLOAT	float
double
java.lang.Double	DOUBLE	double
char
java.lang.Character	CHAR(1)	character
boolean
java.lang.Boolean	BIT	boolean
boolean
java.lang.Boolean	CHAR(1)(‘Y’或‘N’)	yes_no
boolean
java.lang.Boolean	CHAR(1)(‘Y’或‘N’)	true_false
java.lang.String	VARCHAR	string
java.lang.String	CLOB	text
java.lang.Class	VARCHAR	class
java.util.Date
java.sql.Date	DATE	date
java.util.Date
java.sql.Time	TIME	time
java.util.Date
java.sql.Timestamp	TIMESTAMP	timestamp
java.sql.Clob	CLOB	clob
java.sql.Blob	BLOB	blob
java.util.Calendar	TIMESTAMP	calendar
java.util.Calendar	DATE	calendar_date
java.util.Locale	VARCHAR	locale
java.util.TimeZone	VARCHAR	timezone
java.util.Currency	VARCHAR	currency
java.math.BigDecimal	NUMERIC	big_decimal
java.io.Serializable	VARBINARY
BLOB	serializable
```
https://m.jb51.cc/jdbc/997069.html

https://www.pianshen.com/article/70011436600/

## 实体类 多层数据嵌套
https://blog.csdn.net/weixin_39655981/article/details/111783311

## javabean转成json字符首字母大写
写接口的时候有个需求将接口返回的json字符串首字母大写：{"SN":"","Result":""}格式，
只需要在返回bean里面属性上加上@JsonProperty注解就可以了
![输入图片说明](https://images.gitee.com/uploads/images/2021/0426/102733_a9ef6fd5_1779874.png "屏幕截图.png")
--------
生效了
注意点：不要缺了@JsonIgnore
https://www.cnblogs.com/ixixi/p/12198035.html

## 实体类 领域模型 划分    
领域模型中的实体类分为四种类型：VO、DTO、DO、PO    
https://www.cnblogs.com/feng9exe/p/5621269.html    

全模型
![输入图片说明](https://images.gitee.com/uploads/images/2021/0426/170706_d5e3983e_1779874.png "屏幕截图.png")
https://www.cnblogs.com/tooyi/p/13340374.html

pojo类    
![输入图片说明](https://images.gitee.com/uploads/images/2021/0426/165913_63b0c503_1779874.png "屏幕截图.png")

## spring boot 端口 设置 未生效 
原因:
https://blog.csdn.net/bird_tp/article/details/107531980
解决：
注释掉这一行就好了
![输入图片说明](https://images.gitee.com/uploads/images/2021/0426/173226_00195e94_1779874.png "屏幕截图.png")

## 打包 jar war
https://www.cnblogs.com/baijinqiang/p/11405363.html

## 打包方法
https://jingyan.baidu.com/article/fdffd1f81b820bb2e88ca145.html

## 运行jar
java -jar test.jar

配置：
https://blog.csdn.net/longxia1987/article/details/83992193

## 修改项目名
https://jingyan.baidu.com/article/295430f1bf1a5b0c7e0050cb.html
并且，修改pom.xml里的项目名

## 安装maven
http://maven.apache.org/download.cgi
https://www.cnblogs.com/qxcxy-silence/p/10808321.html

## maven 发布打包部署 命令
https://www.cnblogs.com/lambertwe/p/10529224.html
https://blog.csdn.net/cjj386906718/article/details/107089351

## 部署maven 
https://www.cnblogs.com/Howinfun/p/12641371.html

## javabean属性约束
https://qa.1r1g.com/sf/ask/119020681/

注释约束
https://blog.csdn.net/neweastsun/article/details/78171516

## 类介绍
https://blog.csdn.net/chengqiuming/article/details/78602111

## javabean设计规范
javaBean的设计规范：
一个javaBean类必须是一个公共类
一个javaBean类必须有一个空的构造函数
一个javaBean类不应有公共实例变量
持有值应该通过一组存取方法（getXxx和setXxx）来访问
https://blog.csdn.net/fantongking/article/details/1645989

## 继承
一个类只能继承一个基类
继承基类的类叫派生类

## 类、对象
一个基类，多个派生类（派生子类）
![输入图片说明](https://images.gitee.com/uploads/images/2021/0506/103953_5b3a453a_1779874.png "屏幕截图.png")
https://zhuanlan.zhihu.com/p/363310073

## javabean全介绍
包：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0506/113938_1e2fe984_1779874.png "屏幕截图.png")
https://www.cnblogs.com/gccbuaa/p/7061587.html

## 多个有参构造方法与继承
https://blog.csdn.net/weixin_39907157/article/details/110367379

## dto层打成jar包
https://www.cnblogs.com/mq0036/p/8566427.html

## Spring Boot Maven plugin能够将Spring Boot应用打包为可执行的jar或war文件，然后以通常的方式运行Spring Boot应用
https://www.cnblogs.com/jpfss/p/11098740.html

## 打jar包（全）
https://www.cnblogs.com/mq0036/p/8566427.html

## 打jar包（正常）
https://jingyan.baidu.com/article/a3f121e4852098fc9052bbbb.html

## 安装jar包（正常）
http://www.manongjc.com/detail/18-jjmdzbfryjwnpom.html

## map集合、泛型
A<类B>:
这种写法就相当于集合里面：`List<String>`，这个的意思就是List集合里面只能放String类型的元素

A<类B,类C>：
这种写法就相当于集合里面的：`Map<Integer, String>`，他的意思就是Map集合里面的key是int类型，value是String类型

<>里面的是泛型，泛型的作用就是限制你的集合里面只能放特定的类型，如果放其他的类型就会报错，编译不通过
https://zhidao.baidu.com/question/718864359445100325.html

## maven plugin库 
搜索地址
https://mvnrepository.com/artifact/net.sf.maven-properties-enum-plugin

## gradle插件发布maven 教程
https://www.coder4.com/archives/5649
发布命令：
```
gradle publish
```
它https://www.jianshu.com/p/438a269b2f72?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

## 安装gradle
下载地址：
https://gradle.org/releases/
教程：
https://blog.csdn.net/weixin_32467421/article/details/112397637

## maven可发布三个库
上传到Maven中央库中
上传到Maven私服(Nexus)
上传到Maven本地仓库
https://blog.csdn.net/it_manman/article/details/81544751

### gradle 
http://www.zzvips.com/article/153540.html

## 阿里云maven库配置
https://maven.aliyun.com/mvn/guide

## gradle 安装 依赖
执行命令：
```
gradle dependencies
```

## pom xml dependency mirror parent
https://blog.csdn.net/qq877507054/article/details/79138294

## 利用maven deploy发布私服
https://blog.csdn.net/zlfprogram/article/details/78394640

## 链式 return this
https://blog.csdn.net/qq_37164975/article/details/106225520

## java源码解析
https://blog.csdn.net/weixin_29415429/article/details/112198444

## Springboot的static和templates
SpringBoot里面没有我们之前常规web开发的WebContent（WebApp），它只有src目录
在src/main/resources下面有两个文件夹，static和templates   springboot默认  static中放静态页面，而templates中放动态页面

打包的前端代码，直接放static目录下即可，

![](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228153557405.png)

## spring dto参考案例
https://github.com/Cepr0/spring-data-rest-dto/blob/3aa7d1ca061fa731fd045c77d860ead7ca54b694/src/main/java/io/github/cepr0/springdto/domain/BaseEntity.java#L17

## import lombok.NoArgsConstructor;
@NoArgsConstructor: 自动生成无参数构造函数

## @Entity @Id 注解
 @Entity
 对实体注释。任何Hibernate映射对象都要有这个注释
 @Id
 声明此属性为主键。该属性值可以通过应该自身创建，但是Hibernate推荐通过Hibernate生成
https://www.cnblogs.com/hoojjack/p/6568920.html

## @GeneratedValue 注解
![输入图片说明](https://images.gitee.com/uploads/images/2021/0604/145528_99a90f60_1779874.png "屏幕截图.png")
https://blog.csdn.net/sswqzx/article/details/84337921

## java类注释生成文档

单个文件生成方式：（利用javadoc）

https://blog.csdn.net/qq_45453185/article/details/103535228

eclipse导出整个工程

https://blog.csdn.net/shy_snow/article/details/6501623