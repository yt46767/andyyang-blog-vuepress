## markdown图片链接如何获取？相对路径的图片显示不出来
解决：
gitee点击原始数据，得到图片链接
![](https://gitee.com/yt46767/doc/raw/master/2021-03-24/企业微信截图_161649275943.png)



## github仓库导入gitee

![image-20220329170146987](https://s2.loli.net/2022/04/02/MmNJ6Kz4VwfuhHX.png)

![image-20220329133854499](https://s2.loli.net/2022/04/02/1nXTmz95srSeRhH.png)

![image-20220402115413900](https://s2.loli.net/2022/04/02/RXQzmD8gJFdBnIZ.png)

![image-20220402120245853](https://s2.loli.net/2022/04/02/mRZ6Nz2GfEHWYXJ.png)

点击导入后

![image-20220402120523247](https://s2.loli.net/2022/04/02/NeWDM8bfRTZAtQO.png)

注意：代码数量为0，会导入失败！

![image-20220402120638323](https://s2.loli.net/2022/04/02/cTwC86FRGLzblNj.png)

## 同时提交多个仓库

如果都是gitee，config配置为：

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://gitee.com/yt46767/doc.wiki.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	url = https://gitee.com/yt46767/my-blog.wiki.git
	fetch = +refs/heads/*:refs/remotes/origin/*
	url = https://gitee.com/yt46767/my-blog.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

如果有gitee和github，config配置为：

![image-20220412102350001](https://s2.loli.net/2022/04/12/14f9MTVx7UcSI8D.png)

https://blog.csdn.net/qq_34874784/article/details/89811192
