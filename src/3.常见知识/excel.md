## 跨工作表操作

=（sheet1！X1+sheet2！X1+sheet3！X1）

![image-20211228152339365](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228152339365.png)

https://jingyan.baidu.com/article/a948d6510a76f40a2dcd2e2e.html

## 标出重复格子

https://jingyan.baidu.com/article/22fe7cedfd0cca3002617fd7.html

## 一次插入多行

https://jingyan.baidu.com/article/d45ad148fd22f428552b80ec.html

# Excel单元格中字符串与变量或公式的拼接

https://blog.csdn.net/wb96a1007/article/details/73127651

## excel if公式中怎么添加范围

if(条件,选择1,选择2)，如果满足条件结果是选择1，不满足条件结果就是选择2。
if是可以镶嵌的，也就是if可以套if，比如单科成绩的判别：
60以下，不及格
60~75，及格
75~85，良好
85以上为优秀
假定A列为成绩，B列为成绩类别，则B1单元格公式为：
=if(a1<60,"不及格",if(a1<75,"及格",if(a1<85,"良好","优秀")))
