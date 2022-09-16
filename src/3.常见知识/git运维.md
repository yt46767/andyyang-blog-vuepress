## 现存git仓库云
github中国已封杀，中国第一代码仓库gitee

## github所有说明书

包括git api、git cli api
https://docs.github.com/cn

# 代码统计工具

## 一、Gitstats 介绍

用于统计**单个项目**的Git成员代码提交情况，方便管理。

https://blog.csdn.net/feiniao8651/article/details/75006588

示例：

http://gitstats.sourceforge.net/examples/gitstats/

1. 下载软件：

   Requirements

   - Python (>= 2.4.4) (python3 is not supported)
   - Git (>= 1.5.2.4)
   - Gnuplot (>= 4.0.0)
   - a git repository (bare clone will work as well)

- gnuplot：https://sourceforge.net/projects/gnuplot/files/gnuplot/
- python2：https://www.python.org/ftp/python/2.7.13/python-2.7.13.amd64.msi     
- GitStats：https://gitee.com/mirrors_olivererwang/GitStats.git

2. 拷贝:
	GitStats文件拷贝到你开发项目里的根目录

3. 执行命令：
input-file： 开发项目目录位置，比如：../echarts
output-file： 自定义输出文件夹名，会自动生成。
```
cd GitStats
python git-stats [input-file] [output-file]
```
执行过程：

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16269235298134.png)

执行结果输出：

![img](https://gitee.com/yt46767/doc/raw/master/企业微信截图_16269235982171.png)

访问分析结果：

![](https://gitee.com/yt46767/doc/raw/master/image-20210722111456212.png)


参考文献：

- 重要教程：https://gitee.com/mirrors_olivererwang/GitStats?_from=gitee_search

- 下载软件：https://blog.csdn.net/windfromthesouth/article/details/72961525

# gitee

## 一、企业版介绍

![](https://gitee.com/yt46767/doc/raw/master/image-20210721164822679.png)

# 代码质量分析工具

## 一、sonarqube介绍（优秀工具）

![img](file:///C:/Users/andyyang/AppData/Local/Microsoft/Windows/INetCache/IE/4V5U38H3/sonar[1].svg)

1.Gitee 搭建提供基于 Sonar 的**代码质量分析服务**，可以对项目进行代码行数量/重复率统计、代码逻辑缺陷扫描（如空指针）、口令/密钥泄漏风险扫描、坏味道检测，并给出对应详细的报告与修复评估。2.默认支持代码文本格式全为 UTF-8，其他编码可能会产生乱码
3.目前支持 C++、Go、Groovy、Java、JavaScript、Lua、PHP、Python、Ruby、TypeScript、Web、XML
4.仅保存最近一次分析结果
5.代码评审合并或关闭后将会移除分析结果

注：个人评价，很优秀的工具！

## 二、Gitee Scan 介绍
Gitee Scan 是 Gitee 提供的全新**代码质量分析工具**，支持从代码缺陷、代码规范、CVE 漏洞等维度对代码进行扫描，为提升代码质量保驾护航。 默认支持代码文本格式全为 UTF-8，其他编码可能会产生乱码。

CVE(依赖项漏洞)扫描：Java、JavaScript、Go、PHP。

缺陷扫描：Java、Python、C++、JavaScript、Go、C、Android、PHP。

规范扫描：Java、Python、C++、JavaScript、C、Android、PHP、Objective-C、Swift。

# CI 持续集成服务

## 一、Jenkins  介绍（优秀工具）

 Jenkins 是 Gitee 平台的 **CI 持续集成服务**，可实现自动测试、编译构建、持续集成、部署等需求，是 Gitee DevOps 能力的重要一环。目前支持 Java、Maven、Gradle、Ant、NPM、Python、PHP、Go 、Docker 等类型项目。

# gitlab-ci

CI 解决了这个重复性问题，开发人员只需git push 提交代码，剩下的工作交给CI , 做CI工作的有gitlab-ci/cd Jenkins k8s等，中小项目gitlab-ci比较合适，因为它更轻量级一些，本篇仅讨论gitlab的cicd功能。

gitlab-ci实现：https://zhuanlan.zhihu.com/p/184936276

下载gitlab-runner: https://docs.gitlab.com/runner/install/windows.html

**【名词介绍】**

1、gitlab-ci

GitLab-CI就是一套配合GitLab使用的持续集成系统（当然，还有其它的持续集成系统，同样可以配合GitLab使用，比如Jenkins）。而且GitLab8.0以后的版本是默认集成了GitLab-CI并且默认启用的。

2、gitlab-runner

GitLab-Runner是配合GitLab-CI进行使用的。一般地，GitLab里面的每一个工程都会定义一个属于这个工程的软件集成脚本，用来自动化地完成一些软件集成工作。当这个工程的仓库代码发生变动时，比如有人push了代码，GitLab就会将这个变动通知GitLab-CI。这时GitLab-CI会找出与这个工程相关联的Runner，并通知这些Runner把代码更新到本地并执行预定义好的执行脚本。

## git 发布release版本

教程：

https://www.jianshu.com/p/801a4006d362/

##  ECIF

*ECIF*(Enterprise Customer Information Facility)是指对企业的客户信息进行整合，形成集中、全面的客户信息，简称：企业级客户信息整合系统

## Platform broadcast

平台广播

## github 加速器

改hosts，支持不同系统

https://blog.csdn.net/lcf0000/article/details/121158221
