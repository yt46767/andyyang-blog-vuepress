## Number.isNaN 和isNaN有何区别？

Number.isNaN 只会**判断入参是否等于 NAN**

isNaN 会**先转为Number类型**，再 **判断转换后值 是否等于 NAN**

例：

```
isNaN('a')   //输出结果：true  
```

说明：由于 **'a' 转成number** 会变成 **NaN**，故返回true

```
Number.isNaN('a')   //输出结果：false  
```

说明：'a'不是NaN ，故返回false

https://blog.csdn.net/qq_37524886/article/details/118973573