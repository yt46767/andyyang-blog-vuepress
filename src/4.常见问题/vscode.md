## vscode的debug终端的命令小浮窗，如何关闭？
点击：断开连接

## vscode使用git的bash.exe做终端

错误配置："terminal.integrated.shell.windows": "E:\\install\\Git\\git-bash.exe",
会弹框！！！
错误配置："terminal.integrated.shell.windows": "E:\\install\\Git\\bin\\bash.exe",

### vscode怎么设置可以搜索包含node_modules中的文件?

https://www.zhihu.com/question/309220217/answer/586510407

### Vetur can't find `tsconfig.json` or `jsconfig.json` in f:\blog\demo\note.
2.在项目根目录创建jsconfig.json文件，加入代码：
```javascript
{
    "include": [
        "./src/*"
    ]
}
```
https://blog.csdn.net/hongc93/article/details/122811641

## records.json: For performance reasons, document symbols have been limited to 5000 items. Use setting 'json.maxItemsComputed' to configure the limit.
解决：
通过快捷键ctrl+shift+p，打开setting.json。
在json中添加一个设置："json.maxItemsComputed": 6000。
https://blog.csdn.net/m0_47955692/article/details/108882603
