### 上面只是定义了store，在setup函数中调用了useStore()时，才会创建store：



## 解构 又能响应式

如果直接从pinia中解构数据，会丢失响应式， 使用storeToRefs可以保证解构出来的数据也是响应式的

import { storeToRefs } from "pinia";



## pinia持久化 

本地缓存化

https://www.jb51.net/article/249783.htm#_label4



## pinia getter 

Getters是有缓存特性的



## pinia 使用 教程

https://www.jianshu.com/p/2c8409f28a25

## pinia 全解

https://zhuanlan.zhihu.com/p/491244668