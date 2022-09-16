## vscode用终端命令打开页面

* 方法一：window 命令 打开 链接
  
  ```javascript
  cmd.exe /c start chrome http://www.baidu.com
  ```
* 方法二、利用open模块
    node 打开链接：
    先安装 npm install open --save-dev
  
  ```javascript
  var open = require('open');
  // 使用默认浏览器打开
  open('http://www.baidu.com');
  // 使用指定浏览器打开
  open('http://www.baidu.com', 'firefox')
  ```

## vscode 插件 如何 安装

code --install-extension  xxx

## vscode 插件库

https://marketplace.visualstudio.com/vscode

## vscode 终端 换下

```css
"terminal.integrated.shell.windows": "D:\\Program Files\\Git\\bin\\bash.exe"
```