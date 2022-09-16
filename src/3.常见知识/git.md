# 语法

## 基于某个分支创建分支

* ```
  git checkout -b feature_20220202_andyyang origin/feature_20210204
  git push origin feature_20220202_andyyang
  ```
  
  ![](https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010c58aa3903.png)

* 基于当前分支创建新分支
  
  ```
  git checkout -b new_branch
  ```

## 本地创建远程分支

* 本地创建新分支
  
  ```
  git checkout -b branch1
  ```

* 推送远程
  
  ```
  git push --set-upstream origin branch1
  ```

## 删除远程分支

命令行:

```
git push origin –delete 
```

## MR指定人选review

![image-20211228152850851](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228152850851.png)

## 回退上一个版本

```javascript
git reset --hard HEAD~1
```

## 已有文档，第一次提交代码

```javascript
git add .
git commit -m 'add'
git remote add origin git@github.com:tianqixin/runoob-git-test.git
git pull origin master --allow-unrelated-histories
git push origin master
```

注：
添加远程仓库地址：
git remote add origin git@github.com:tianqixin/runoob-git-test.git
拉取远程差异代码：
git pull origin master --allow-unrelated-histories
推送远程仓库：
git push origin master

## gitignore内容写法

assets
5.工作/公司

## 更新当前仓库的所有本地分支

```javascript
git pull --all # 
或 
git fetch --all
```

## 推送当前分支到远程同名

git push origin HEAD

## 当前分支指向develop

git push origin HEAD:develop

## commonjs的exports、modules.exports

exports.aa=()=>{}
module.exports = {
    aa,
    bb
}

## git clean -dfx

clean：删除untracked文件
d：删除未被添加到git路径中的文件夹
f：删除未被添加到git路径中的文件
x：移除.gitignore文件里面指定的文件夹和文件
https://blog.csdn.net/qq_30993595/article/details/84979481

## git仓库首次创建 代码存在首次提交git

Command line instructions

Git global setup

```javascript
git config --global user.name "andyyang(杨涛)"
git config --global user.email "andyyang@github.com"
```

Create a new repository

```javascript
git clone git@github.com:andyyang/gitbatchmanage.git
cd gitbatchmanage
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

Existing folder

```javascript
cd existing_folder
git init
git remote add origin git@github.com:andyyang/gitbatchmanage.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

Existing Git repository

```javascript
cd existing_repo
git remote rename origin old-origin
git remote add origin git@github.com:andyyang/gitbatchmanage.git
git push -u origin --all
git push -u origin --tags
```

## Git的api文档

gitlab的api中文说明文档地址：
https://docs.github.com/cn
https://docs.github.com/en

https://docs.github.com/cn/rest/

git merge request 的官方api
https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/merge_requests.md

用户信息
https://api.github.com/users/andyyang/repos

## 如何调用git api

https://www.cnblogs.com/kylinlin/p/5243475.html
https://segmentfault.com/a/1190000015144126

例子：上传文件到仓库
https://blog.csdn.net/the_power/article/details/103215446

## git 项目 api

https://docs.github.com/en/rest/reference/projects#list-user-projects

## git api 获取个人项目列表

* 生成Personal access tokens：
  ![enter image description here](https://gitee.com/yt46767/doc/raw/master/114432_66dfea80_1779874.png "屏幕截图.png")
* 发起get请求
  ![enter image description here](https://gitee.com/yt46767/doc/raw/master/114156_ce936ea9_1779874.png "屏幕截图.png")
  ![enter image description here](https://gitee.com/yt46767/doc/raw/master/114117_a4972cad_1779874.png "屏幕截图.png")

## git checkout . #本地所有修改的。没有的提交的，都返回到原来的状态

## 放弃本地所有增加和修改

git checkout . && git clean -df

## package引用git仓库姿地址

"@github/power-cli": "git+ssh://git@github.com:cfpd/power-cli.git#638a0edccaae3c00d6d9909fdd887482965dbb68",
注：638a0edccaae3c00d6d9909fdd887482965dbb68为commit id，缩写commit id为638a0edc

## git-bash.exe文件位置

E:\install\Git\git-bash.exe

## git 重命名 本地同步远程

关键操作:    

```
git remote set-url origin [新仓库git地址]  && git branch --set-upstream-to=origin/master
```

示例：   

```
git remote set-url origin git@github.com:DengBoCong/AlgorithmProject.git  && git branch --set-upstream-to=origin/master
```

https://dengbocong.blog.csdn.net/article/details/103422937

## commit撤回

**git reset --soft HEAD^**

## 怎么查看版本号

[https://www.cnblogs.com/nichengshishaonian/p/11538136.html#2-%E7%89%88%E6%9C%AC%E5%9B%9E%E9%80%80](https://www.cnblogs.com/nichengshishaonian/p/11538136.html#2-版本回退)

## git 切换 现有 分支

```javascript
git checkout -b branch_name
```

## git  切换 创建 新 分支

现在，你已经决定要解决你的公司使用的问题追踪系统中的 #53 问题。 想要新建一个分支并同时切换到那个分支上，你可以运行一个带有 `-b` 参数的 `git checkout` 命令：

```console
$ git checkout -b iss53
Switched to a new branch "iss53"
```

它是下面两条命令的简写：

```console
$ git branch iss53
$ git checkout iss53
```

## git 克隆 项目 指定 分支 代码

拉取指定分支项目代码：

```
git clone -b  [分支名] [仓库地址]
```

![image-20211228153315662](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228153315662.png)

## git log 自定义 查看 commit信息

https://blog.csdn.net/north1989/article/details/53355346/

## 打版本号

```javascript
git tag -a prod_20201210 -m "12月10日版本"
git push origin --tags
```

## 自定义（全）git commit模板

https://blog.monogogo.cn/git-commit-template/
commitizen
git commit npm模板工具包

## 自动发起mr

可以命令发起merge request，取代人工
（git merge request 的官方api
https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/merge_requests.md）

## git fetch 与 git pull 区别图

![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_1600758169705.png)

## 更新：git pull = git fetch + git merge

更新拉取分支: git fetch

## 放弃本地所有修改、新增、删除文件和目录:

git checkout . && git clean -df

注释：
git checkout .       //放弃本地修改，没有提交的可以回到未修改前版本
git clean            //是从工作目录中移除没有track的文件.
git clean -df        //-d表示同时移除目录,-f表示force,因为在git的配置文件中,clean.requireForce=true,如果不加-f,clean将会拒绝执行.

## 放弃所有暂存文件：

git reset HEAD .

## 生成rsa密钥

* 设置新的ssh-key  
  ssh-keygen -t rsa -C "andy"
* 生成ssh-key的位置：  
  C:\Users\andy/.ssh/id

## git 分支命名规范

https://www.zhihu.com/question/67177466/answer/2201223690

![image-20220629165818769](https://gitee.com/yt46767/doc/raw/master/image-20220629165818769.png)

## yaml是可视化运行工具的文件类型

![](C:\Users\ASUS\AppData\Roaming\marktext\images\2022-07-26-09-57-44-image.png)

## 批量下载git

https://zhuanlan.zhihu.com/p/469046883

## gitlab api

http://[ip]/api/v4/projects?private_token=xxxxxxx

## github 加速大全

https://www.cnblogs.com/shuangxinyuan/p/15506449.html

我用host加速

第一步，host配置：

 \# GitHub Start 
 140.82.121.3  github.com
 140.82.121.3  gist.github.com
 185.199.110.153 assets-cdn.github.com
 185.199.108.133 raw.githubusercontent.com
 185.199.111.133 gist.githubusercontent.com
 185.199.110.133 cloud.githubusercontent.com
 185.199.111.133 camo.githubusercontent.com
 185.199.111.133 avatars0.githubusercontent.com
 185.199.110.133 avatars1.githubusercontent.com
 185.199.111.133 avatars2.githubusercontent.com
 185.199.109.133 avatars3.githubusercontent.com
 185.199.108.133 avatars4.githubusercontent.com
 185.199.111.133 avatars5.githubusercontent.com
 185.199.109.133 avatars6.githubusercontent.com
 185.199.109.133 avatars7.githubusercontent.com
 185.199.110.133 avatars8.githubusercontent.com
 185.199.108.133 avatars.githubusercontent.com
 185.199.111.154 github.githubassets.com
 185.199.109.133 user-images.githubusercontent.com
 140.82.112.9 codeload.github.com
 185.199.110.133 favicons.githubusercontent.com
 192.30.255.116 api.github.com
 \# GitHub End 

第二步，网络缓存刷新：

 ipconfig /flushdns

## github vssue配置使用

https://vssue.js.org/guide/github.html

https://www.bookstack.cn/read/vssue/b749ee848e702d4b.md