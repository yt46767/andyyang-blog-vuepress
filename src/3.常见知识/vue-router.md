## $route对象
路由对象，即$router会被注入每个组件中，可以利用它进行一些信息的获取。如
属性        说明
$route.path        当前路由对象的路径，如'/view/a'
$rotue.params        关于动态片段（如/user/:username)的键值对信息,如{username: 'paolino'}
$route.query        请求参数，如/foo?user=1获取到query.user = 1
$route.router        所属路由器以及所属组件信息
$route.matched        数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
$route.name        当前路径名字

## 路由跳转写法：
this.$router.push({ name: 'distributesList', query: { ruleForm: this.ruleForm }})
// 字符串
this.$router.push('/home/first')
// 对象
this.$router.push({ path: '/home/first' })
// 命名的路由
this.$router.push({ name: 'home', params: { userId: wise }})
https://www.jianshu.com/p/c028b749f119

## vue-router易错点
```javascript
错误：
this.$router.push({path:'/demo'})
正确：
this.$route.push({path:'/demo'})
```

## replace() - 禁止用户跳转后点击后退按钮。（如用户登录后）
$location.path('/home');
$location.replace();
或者：
$location.path('/home').replace();