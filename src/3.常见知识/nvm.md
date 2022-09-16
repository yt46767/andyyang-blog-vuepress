![image-20220618090020994](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220618090020994.png)

不要使用nvm 1.1.9版本的使用1.1.7版本即可

不然会安装node版本后，出现exit 145，不能正常使用

nvm安装包列表

https://github.com/coreybutler/nvm-windows/releases

1.1.7安装包

https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7

安装教程：

**在settings中加入两行代码，采用淘宝镜像**：

![在这里插入图片描述](https://img-blog.csdnimg.cn/82c6e4f2a4b14bac9da3f162ee7173bc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAWeWktCE=,size_20,color_FFFFFF,t_70,g_se,x_16)

```
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

https://blog.csdn.net/Anony_me/article/details/124153201

没有设置镜像，会报错：

![image-20220618092237398](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220618092237398.png)

## node版本切换 — nvm

node版本管理

https://blog.csdn.net/weixin_52103939/article/details/123395360

安装完nvm后，vscode要重启才能生效

+ 可以先查看远程可安装的node版本（除开所显示的其他版本也可以下载）
  nvm list available

+ 安装你想要安装的node版本（例如想下载12.18.1版和17.5.0）
  nvm install 12.12.0

+ 下载完后用nvm list你可以看到目前所下载的所有node版本

  nvm list

+ 使用指定版本的nodejs和对应npm**（用powershell管理员运行）**

  nvm use 14.18.1

+ 卸载对应版本的nodejs，nvm的安装目录中对应文件夹会去掉

  nvm uninstall 14.18.1