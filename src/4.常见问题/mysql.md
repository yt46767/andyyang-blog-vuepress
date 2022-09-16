## window Table 'mysql.user' doesn't exist

找到my.ini中的datadir=C:/mysql/data
把data目录下的文件全部清空
执行mysqld --initialize-insecure --user=mysql 初始化
执行mysqld --defaults-file=…/my.ini --console，看看是否能够启动

https://blog.csdn.net/mxj588love/article/details/115945729

## Install/Remove of the Service Denied!

打开cmd.exe程序的时候选择“用管理员身份打开”

## mysqld: [ERROR] Found option without preceding group in config file

## mysqld: [ERROR] Fatal error in defaults handling. Program aborted!

原因：

原因是 my.ini 文件保存格式的问题：mysql里面的配置文件 my.ini 编码格式正常情况应该是 **ANSI/ASCII**格式的。但是，出现这种情况是 my.ini 配置文件格式竟然被默认改成了 utf-8 格式造成的。

解决：

步骤：用记事本打开 **my.ini** 文件——》点击“**文件**”选择“**另存为**”——》将编码选为 **ANSI**——》保存覆盖——》重启 MySQL 。

## 数据库 字符串类型数据  按数值排序

降序排列：
SELECT * from nrrs.etl_job ORDER BY duration+0 desc
升序排列：
SELECT * from nrrs.etl_job ORDER BY duration+0 asc

最全方案：

https://blog.csdn.net/parade0393/article/details/79406020

## sql 取 结果 第一个

```
LIMIT 1 
```

![image-20211013153944394](https://gitee.com/yt46767/doc/raw/master/image-20211013153944394.png)

https://www.cnblogs.com/feifeicui/p/10169854.html

## 有条件的合并第二个表

left join 时间 最近

```
SELECT

u.id,

u.user_name,

u.last_upd_time AS audit_time,

u.state,

suo.opt_user_name

FROM

users AS u

LEFT JOIN (

SELECT

opt_user_name,

opt_type,

user_id

FROM

opt_user_log

WHERE

opt_type IN (1, 2)

ORDER BY

add_time DESC

) AS suo ON suo.user_id = u.id

WHERE

(1 = 1)

GROUP BY

u.id

ORDER BY

field(u.state, 1, 2, 3),

audit_time DESC;
```

https://blog.csdn.net/weixin_32258183/article/details/113253821

## 查询重复
```
select*from tablenamewhere idin (
select idfrom tablename
group by id
having count(id)> 1
)
```

https://www.cnblogs.com/cl1024cl/p/6205529.html

### sql 单表/多表查询去除重复记录

单表distinct

多表group by

https://www.php.cn/sql/460992.html

![image-20211014140535934](https://gitee.com/yt46767/doc/raw/master/image-20211014140535934.png)

### SQL 分组取最新的一条数据

```
SELECT
    obj.status, obj.mail_id, MAX(obj.update_time) latest_time, obj.*
FROM
    (
        SELECT DISTINCT
            (a.id) temp_id,
            a.*
        FROM
            t_send_mail_history a
        ORDER BY
            a.update_time DESC
    ) obj
WHERE mail_id = '2109170MA0209407Y0ANZ0WSONQC4PVM'
GROUP BY mail_id;
```

错误写法：

```
SELECT t2.id, STATUS,mail_id,MAX(t2.update_time) AS latest_time
FROM  t_send_mail_history t2
GROUP BY t2.mail_id;
```

https://blog.csdn.net/persistencegoing/article/details/92764058

## insert 8.5w/s 高

关于线程：我的cpu只有十二个线程，所以核心线程设置的10，留两个线程打杂；

https://blog.csdn.net/qq_33709582/article/details/121745749?utm_medium=distribute.pc_feed_v2.none-task-blog-expert_recommend-1.pc_personrecdepth_1-utm_source=distribute.pc_feed_v2.none-task-blog-expert_recommend-1.pc_personrec

## 数据库大表优化

https://blog.csdn.net/qq_28804275/article/details/99498553

## sql-哪些情况需要创建索引

主键自动建立唯一索引
频繁作为查询条件的字段应该创建索引
查询中与其它表关联的字段，外键关联建立索引
频繁更新的字段不适合建索引（每次更新不单单是更新了记录还会更新索引）
where条件中用不到的字段不建索引
单键/组合索引（在高并发下建议建组合索引）
查询中排序的字段，排序字段通过索引去访问提高排序速度
查询中统计或分组字段
https://blog.csdn.net/a332056918/article/details/81916255

## 那些情况下不创建索引

https://blog.csdn.net/yhw_1125/article/details/99291625

## 慢查询 排查

介绍两个不错的定位慢查询的工具。

**mysqldumpslow**

MySQL 内置了 mysqldumpslow 这个工具来帮助我们分析慢查询日志文件，Windows 环境下使用该工具需要安装 Perl 环境。比如我们可以通过`mysqldumpslow -s t 10 LAPTOP-8817LKVE-slow.log`命令得到按照查询时间排序的 10 条 SQL 。

**pt-query-digest**

除此之外还有 pt-query-digest，这个是 Percona Toolkit 中的工具之一，download地址：https://www.percona.com/downloads/percona-toolkit/LATEST 
