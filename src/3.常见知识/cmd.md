## rm 删除除了某文件或文件夹之外的其他文件

rm -rf !(keep) #删除keep文件之外的所有文件
rm -rf !(keep1 | keep2) #删除keep1和keep2文件之外的所有文件

## 正常退出exit(0)，异常退出exit(1)

![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_15988807101896.png)

## 'grep' 不是内部或外部命令，也不是可运行的程序

[‘grep‘ 不是内部或外部命令，也不是可运行的程序或批处理文件。_于慧妃的博客-CSDN博客_grep' 不是内部或外部命令,也不是可运行的程序 或批处理文件。](https://blog.csdn.net/hui_fei_5/article/details/121719739)

## 查看所有启用服务端口

netstat -an

## 文件追加内容 命令

echo '.temp' >> .gitignore