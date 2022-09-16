## gitignore没有生效的场景：
​	git服务器上已有这个文件

## github访问不了解决方法
* 查看github的映射ip
https://github.com.ipaddress.com/www.github.com
* 修改hosts文件，windows系统下修改 C:\Windows\System32\drivers\etc\HOSTS文件，在该文件中添加github.com与IP的对应关系信息，如下图所示
![enter image description here](https://images.gitee.com/uploads/images/2021/0401/111005_f3d76c95_1779874.png "屏幕截图.png")
* 修改host完成后，在cmd中执行`ipconfig/flushdns`命令即可访问github网站了。

  https://blog.csdn.net/fantasy_wxe/article/details/108957886

## sourcetree 拉取 获取 区别
+ 拉取

  远程仓库代码更新到本地【实质变化】

+ 获取

  查看本地仓库的远程仓库是否有更新 (并不会使你的本地仓库发生改变)

## 再一次提交，但需要更新，更新不下来
报错：
```
git pull
fatal: refusing to merge unrelated histories
```
解决方案：

```
git pull origin master --allow-unrelated-histories
```

## npm publish 400 invalid scope
```
npm ERR! code E400
npm ERR! 400 Bad Request - PUT http://npmjs.com/package/@company/vue-calendar - invalid scope

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\andyyang\AppData\Roaming\npm-cache\_logs\2021-06-30T07_01_56_580Z-debug.log
```

解决方案：

特有的npm网站里，私有域设定好的，比如公司的域名是：wabc，而你用自己的英文名做私有域就不对。
这时，你只能用wabc

## npm 包 添加 用户 权限
语法：

```
wnpm owner add [用户名] [包名]
```

示例：

```
wnpm owner add json @company/fe-git-cli
```

## git pull

问题：`fatal: refusing to merge unrelated histories`（拒绝合并不相关的历史）或 `当pull一直拉不下时`

主要原因：

在于本地仓库和远程仓库实际上是独立的两个仓库，代码不一致！

解决方案：

```
git pull origin master --allow-unrelated-histories
```

https://blog.csdn.net/u012145252/article/details/80628451

## github.io 访问不了

解决方案：

改变ipv4的dns

https://www.cnblogs.com/isXianYue/p/14083628.html

## git 回滚 到 指定版本 但 要保留 最近提交文件 【重要】

1. 克隆一个分支

2. 原分支重置到指定版本，强制推送（git push -f origin [分支名]）

3. 把克隆分支合并到原分支，如果发现它已经commit了，就执行放弃commit（git reset --soft HEAD^），如果还是commit状态，就再执行放弃commit（git reset --soft HEAD^）。

## 检查 合并 master 原理

```
git log 分支名

git log master |grep comitid
```

如果有回写commitid就是合并过。

https://www.jianshu.com/p/fc026968c405

## git init Reinitialized existing Git repository in E:/Project/node-ts-console/.git/

解决方案：

直接删除.git文件夹

## unable to access 'https://github.com/yt46767/node-ts-console.git/': OpenSSL

解决方案：

http改为git

git remote add origin git@github.com:yt46767/node-ts-console.git

## git 提交不了

https://blog.csdn.net/u012442504/article/details/115444910![image-20220630222700064](https://gitee.com/yt46767/doc/raw/master/image-20220630222700064.png)

## git remote: HTTP Basic: Access denied

https://blog.csdn.net/u012451819/article/details/107543341

一定要命令处理，可视化处理无效！

## gh-pages部署，违禁词

1. 美 国

## 修改git仓库地址

方法1：
删除本地仓库当前关联的无效远程地址，再为本地仓库添加新的远程仓库地址

git remote -v                       // 查看git对应的远程仓库地址
git remote rm origin                // 删除关联对应的远程仓库地址
git remote -v                       // 查看是否删除成功，如果没有任何返回结果，表示OK
git remote add origin "新的仓库地址" // 重新关联git远程仓库地址
1
2
3
4
方法2：
直接修改本地仓库所关联的远程仓库的地址

git remote  					 		   // 查看远程仓库名称：origin 
git remote get-url origin                  // 查看远程仓库地址
git remote set-url origin "新的仓库地址"    // ( 如果未设置ssh-key，此处仓库地址为 http://... 开头)
1
2
3
方法3：
修改 .git/config 配置文件

cd .git      // 进入.git目录
vim config   // 修改config配置文件，快速找到remote "origin"下面的url并替换即可实现快速关联和修改

https://blog.csdn.net/halo1416/article/details/123566471