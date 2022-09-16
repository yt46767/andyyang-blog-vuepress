## child_process.execSync cd 未生效

错误：

```javascript
/**
 * git克隆
 */
const cloneProject = ()=>{
    let arrays = [cdSources]
    Object.keys(configProjectInfo).map(menu=>{
        let cloneGit = prefixGitCloneCmd + getGitAddress(menu)
        arrays.push(cloneGit)
    })
    debug('执行命令数组：',arrays)
    execCmd(arrays)
}
```

正确：

```javascript
/**
 * git克隆指定仓库
 */
const cloneOnesProject = (ones)=>{
    let arrays = []
    Object.keys(getOnes(ones)).map(menu=>{
        let cloneGit = cdSources + and + prefixGitCloneCmd + getGitAddress(menu)
        arrays.push(cloneGit)
    })
    debug('执行命令数组：',arrays)
    execCmd(arrays)
}
```

原因：
child_process.execSync是一个子进程一个子进程执行，如果cd在另外一个子进程，将不生效
解决：
cd放到其他命令的同一个子进程里即可

## node writefile js 文件 乱码

fs.writeFile(`${outputPath}`, `\ufeff${string}`, 'utf8');

## 数组转字符串，展示格式不变

JSON.stringify(files) 

## 开头 乱码

开头空格乱码
![输入图片说明](https://images.gitee.com/uploads/images/2021/0421/130610_640358b1_1779874.png "屏幕截图.png")

## import path from babel-node运行报错： SyntaxError: Unexpected identifier

解决：
2.下载安装babel：npm install -g babel-cli
3.再次运行脚本：babel-node mq.xxxx.js，即可成功运行。

## /lint-staged/lib/index.js:112     if (runAllError?.ctx?.errors) {

![image-20220630231851869](https://gitee.com/yt46767/doc/raw/master/image-20220630231851869.png)

解决：

换最新的node版本

## node js和 npm 版本不匹配

[关于node js和 npm 版本不匹配的情况-蒲公英云](https://www.dandelioncloud.cn/article/details/1431284460636680193)

## node-pre-gyp ERR! install request connect ETIMEDOUT 20.205.243.166:443

[npminstall报错node-pre-gypERR! - 百度文库](https://wenku.baidu.com/view/607d590aee630b1c59eef8c75fbfc77da26997ef.html)

[node-pre-gypinstall--fallback-to-build错误 - 百度文库](https://wenku.baidu.com/view/9aee0df875a20029bd64783e0912a21614797fc8.html)

## [Instead change the require of index.js, to a dynamic import() which is available in all CommonJS modules](https://stackoverflow.com/questions/70541068/instead-change-the-require-of-index-js-to-a-dynamic-import-which-is-available)

解决：

1. package.json新增：type: "module",
2. 把config.ts文件改为：config.mjs