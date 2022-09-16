## script-vue

基本上就是在之前的方法名前加上了一个 on，且并没有提供 onCreated 的钩子，因为在 setup() 内执行就相当于在 created 阶段执行。下面我们在 mounted 阶段来请求数据：

https://www.jianshu.com/p/5aa4e66e0a4b

## emits

和 prop 类似，现在可以通过 `emits` 选项来定义组件可触发的事件

![image-20220703110839699](https://gitee.com/yt46767/doc/raw/master/image-20220703110839699.png)

## 符号缩写

“:” 是指令 “v-bind”的缩写，“@”是指令“v-on”的缩写，“#”是v-slot的缩写；“.”是修饰符。详细如下

https://blog.csdn.net/weixin_44231544/article/details/124803542

## vue watch 监听 多个 数据源

    // 第一个参数() => [state.province, state.country] 监听的两个数据
    // 第二个参数回调函数，其中参数分别代表更改后与更改前的值，([newprovince,newcountry],[oldprovince,oldcountry]) ，第一个参数依次代表更改后的值，第二个参数依次代表更改前的值
      watch(() => [state.province, state.country], ([newprovince,newcountry],[oldprovince,oldcountry]) => {
————————————————
版权声明：本文为CSDN博主「m0_67401835」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/m0_67401835/article/details/123433520



watch(
  user,
  (value) => {
    console.log('user变化了', value)
  },
  {
    // 深度监听，当ref的值是一个复杂数据类型，需要深度监听
    // 但是如果是以reactive创建的复杂类型数据，则不需要
    deep: true,
    immediate: true
  }
)
————————————————
版权声明：本文为CSDN博主「ELNino_Thomas.Liang」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_51972964/article/details/123453478

```
<template>
  <div>
    <h3>num1：{{ num1 }}</h3>
    <h3>num2：{{ num2 }}</h3>
    <button @click="add">加</button>
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    let num1 = ref(0);
    let num2 = ref(1);

    function add() {
      num1.value = num1.value + 1;
      num2.value = num2.value + 2;
    }
    // 情况一 : 监听一个ref定义的响应式数据变化
    watch(num1, (val) => {
      console.log(val);
      console.log(`num1: ${val}`);
    });
    //情况二 :监听多个ref定义的响应式数据变化
    watch([num1, num2], (val) => {
      console.log(val);
      console.log(`num1: ${val[0]}`);
      console.log(`num2: ${val[1]}`);
    });
    return { num1, num2, add };
  },
};
</script>

```

## unref

返回值，不再返回ref

## script setup

![image-20220705084644193](https://gitee.com/yt46767/doc/raw/master/image-20220705084644193.png)