## gulp.watch()无法监听到新增加的文件，这样一来，我们每次增加文件时都要执行gulp命令来重启服务。
解决：
这并不是我们希望的结果。可以引入gulp-watch模块解决这个问题：
https://blog.csdn.net/guang_s/article/details/84672449