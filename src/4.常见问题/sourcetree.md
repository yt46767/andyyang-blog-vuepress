## sourcetree FATAL ERROR: Network error: Connection refused
解决方案：
新版本的SSH客户端选项默认为PuTTY/Plink,把它换成OpenSSH就可以了，它会默认git的SSH密钥，这时候sourcetree就恢复正常啦~
![](https://gitee.com/yt46767/doc/raw/master/2021-02-02/60191b8a4ee6b.png)

https://blog.csdn.net/u010352770/article/details/52849192?utm_source=itdadao&amp;utm_medium=referral

## sourcetree离线安装

+ sourcetree安装及跳过Bitbucket运行

  解决方案：

  https://blog.csdn.net/c_shell_python/article/details/104724853

* 安装中出现问题：没有检测到已安装的mercurial

  解决方案：

  http://blog.sina.com.cn/s/blog_672143a30102vold.html