## path.resolve 返回绝对路径[常用]

![](https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010dd1a72b20.png)

## node返回路径方法[大全]

node自带方法
![](https://gitee.com/yt46767/doc/raw/master/2021-01-27/6010dd84c4b0f.png)

## klaw

具有可读流接口的文件系统walker

## klaw-sync

递归，同步和快速文件系统遍历器

## readFileSync[易错点]

读取文件内容,返回字符串/buffer
fs.readFileSync(mdFilePath, {encoding: `utf8`})
一定要加编码格式才会返回字符串，不然就是返回buffer
注：区别于 readdirSync 返回文件的文件夹路径

## path.extname()

返回 path 的扩展名，如：.js

## node.js的path.sep

根据不同平台，返回系统对应的路径分隔符
Windows 上是 \，（在 Windows 上：'foo\\bar\\baz'.split(path.sep); ，返回: ['foo', 'bar', 'baz']）
POSIX 上是 /，（在 POSIX 上：'foo/bar/baz'.split(path.sep);，返回: ['foo', 'bar', 'baz']）

## 打开浏览器访问地址

const childProcess = require('child_process')
childProcess.exec('start http://127.0.0.1:8889/');  // 自动打开默认浏览器

## package.json开启多个进程服务

```
const fs = require('fs');
const child_process = require('child_process');

// 开启web服务
child_process.exec('serve -p 8000', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
}).on('exit', function (code) {
    console.log('serve子进程已退出，退出码 '+code);
});

// 自动打开浏览器模块
child_process.exec('start http://127.0.0.1:8000/doc/', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: '+error.code);
        console.log('Signal received: '+error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
}).on('exit', function (code) {
    console.log('open子进程已退出，退出码 '+code);
});
```

## child_process 的 options写法

```
const cp = require('child_process');
const iconv = require('iconv-lite');

let pid = 2756;

cp.exec(`tasklist /FI "PID eq 2756"`, {encoding: 'buffer'}, (error , stdout, stderr) => {
  if (error) throw error;
  stdout = iconv.decode(stdout, 'gbk');
  console.log(stdout);
});
————————————————
版权声明：本文为CSDN博主「平仄_csdn」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/github_38589282/article/details/76725975
```

## node 换版本 切换版本

window node 版本 管理 器

+ nodist**（有用！）**
  
  使用方法：
  
  https://blog.csdn.net/weixin_30617695/article/details/99484512
  
  安装方法：
  
  ```
  nodist 8.11.2
  ```
  
  https://www.cnblogs.com/darrenji/p/5726342.html
  
  切换
  
  nodist 8.11.2

+ nvm

mac  node 版本 管理 器

+ n

## 读取目录下的所有文件名：

```javascript
var readDir = fs.readdirSync("./");
console.log(readDir);
```

输出结果：
[ 'dir1', 'file1.html', 'file2.txt', 'test.js' ]

## 自定义命令，执行生效的必要条件：

（没有这句，执行时只是会打开文件而已）
![](https://gitee.com/yt46767/doc/raw/master/2021-03/企业微信截图_16012638059106.png)

## node版本切换，生效！

nvmw ls

nvmw install v8.12.0

nvmw uninstall v8.12.0

解决：
nvmw switch v8.12.0

nvmw switch v12.22.1

nvmw use v12.22.1

node -v

+ nvm安装
  
  https://www.jianshu.com/p/4b7c10ab14bd
  
  https://www.php.cn/js-tutorial-487496.html

## 案例

### 爬虫

https://github.com/ecitlm/Node-SpliderApi

### sockio

chat:
https://github.com/plhwin/nodejs-socketio-chat

## NPM

### yarn的安装

tnpm i yarn -g

### yarn的使用

（错误）
yarn i
（正确）
yarn install

### 常用命令

yarn / yarn install 等同于npm install 批量安装依赖
yarn add xxx 等同于 npm install xxx —save 安装指定包到指定位置
yarn remove xxx 等同于 npm uninstall xxx —save 卸载指定包
yarn add xxx —dev 等同于 npm install xxx —save-dev
yarn upgrade 等同于 npm update 升级全部包
yarn global add xxx 等同于 npm install xxx -g 全局安装指定包
参考
https://blog.csdn.net/w345731923/article/details/82878525

教程：

https://yarn.bootcss.com/docs/install/#windows-stable

### 修改npm镜像为中国淘宝镜像

npm config list 查看npm 配置

npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

## npm 镜像配置还原

https://blog.csdn.net/qq_23994787/article/details/113399858

## 插件

### 日志插件：tracer

git: https://github.com/baryon/tracer 评价：非常好用，还可以输出文件。

## nodejs 指定版本下载

node版本

https://nodejs.org/download/release/v12.22.1/

## node 高并发 案例

https://static001.geekbang.org/con/94/pdf/3953973393/file/%E5%8D%81%E4%BA%BF%E7%BA%A7%20Node.js%20%E7%BD%91%E5%85%B3%E7%9A%84%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%B7%A5%E7%A8%8B%E5%AE%9E%E8%B7%B5%20-%20%E7%8E%8B%E4%BC%9F%E5%98%89.pdf

## 关闭ssl

```
npm config set strict-ssl false
```