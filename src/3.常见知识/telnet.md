## ping 端口

telnet [192.168.33.215](http://192.168.33.215) 2546



## 开启telnet服务

首先开启Telnet服务

控制面板 -> 程序 -> 程序和功能 -> 启用或关闭windows功能 -> 勾选Telnet 客户端

![](https://img-blog.csdnimg.cn/3d8f1f6934c0442db4da23efd6e4ef7d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5a2m5rij5rij,size_20,color_FFFFFF,t_70,g_se,x_16)

然后 cmd命令行执行telnet命令： telnet ip host

切记telnet命令不要写成 telnet ip:host, 如 telnet localhost:8080 , 这样是错的
