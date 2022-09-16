## 已有npm包，指定版本更新 [注意点]
* npm插件如果原先安装好的，直接npm i 插件@版本。不用指向devDependences/dependences。

* npm插件指定版本安装后，package.json会把插件更改为&lt;i style=&quot;color:green&quot;&gt;自动更新模式&lt;/i&gt;
```
&quot;@company/fe-git-cli&quot;: &quot;1.0.54&quot;,
```
更改为：
```
&quot;@github/fe-git-cli&quot;: &quot;^1.0.58&quot;,
```

## 安装本地npm包
npm install --save ../package

## package-lock.json如果不删除npm包，会影响运行，去安装删除的npm包后再运行

## npm包引用策略：
引用的npm包，优先考虑全局的npm包，全局找不到才会去找项目本地的npm包

## 安装npm包，默认是下次安装，自动升级
wnpm i @company/fe-cli -D
"@company/fe-cli": "^1.8.3",

## 查看npm全局-g安装过哪些包
npm ls -g -depth=0

## package.json引用git地址
"dependencies": {
   "public": "git://github.com/user/repo.git#ref",
   "private": "git+ssh://git@github.com:user/repo.git#ref"
}
注：
git+ssh://git@github.com:user/repo.git#commitid

![image-20211228154431929](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228154431929.png)

![image-20211228154631634](https://gitee.com/yt46767/doc/raw/master/uploadPic/image-20211228154631634.png)

## npm install git 仓库 的 某个commit id
wnpm i @github/power-cli@git+ssh://git@github.com:cfpd/power-cli.git#638a0edccaae3c00d6d9909fdd887482965dbb68 -g

## npm 全局安装目录
执行：npm config get prefix
打印出：C:\Users\andyyang\AppData\Roaming\npm

## npm包给其他用户加权限
npm owner add 【用户名】 【包名】
![enter image description here](https://images.gitee.com/uploads/images/2021/0408/160050_4b55178d_1779874.png "屏幕截图.png")

## 读取npm版本

```npm view [npm包] versions```

示例：

```npm view eslint versions```

## npm包调试

`npm config get prefix`，得到计算机安装的全局npm包位置

结果：`E:\install\Nodist\bin`

## 如果通过npm命令查看插件所有版本

npm view less-loader versions

