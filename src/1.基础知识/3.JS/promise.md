## promise原理

```javascript
function Promise(executor){ //executor执行器
    let self = this;
    self.status = 'pending'; //等待态
    self.value  = undefined; // 表示当前成功的值
    self.reason = undefined; // 表示是失败的值
    function resolve(value){ // 成功的方法
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
        }
    }
    function reject(reason){ //失败的方法
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
        }
    }
    executor(resolve,reject);
}

Promise.prototype.then = function(onFufiled,onRejected){
    let self = this;
    if(self.status === 'resolved'){
        onFufiled(self.value);
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
    }
}
module.exports = Promise;
```

https://www.jianshu.com/p/fc5030e725ae



## promise.all 实现原理

**方法1(最佳)：**

入参：**promise数组**

出参：**promise数组**

```
function promiseAll(arrayPromise){
	return new Promise((resolve,reject)=>{
		const array = []; //最终返回的数组
		let count = 0;		 
		arrayPromise.forEach(async (promise,index)=>{
			array[index] = await promise().catch((err)=>{
				reject(err);     //只要其中一个 报错 那么 就抛出异常
			});
			count ++;
			if(count  === arrayPromise.length){  //结果数组长度 等于参数数组长度 并且无空 视作完成
				resolve(array);
			}
		})
	})
}
```

https://blog.csdn.net/qq_41709082/article/details/103293766

方法2：

​	入参：promise数组

​	出参：数据数组

```
  Promise.all = function (promises){
        return new Promise((resolve,reject) => {
          // 将迭代对象转化为数组
          promises = Array.from(promises)
          if(promises.length === 0){
            resolve([]) 
          }else{
            let result = [];
            let index = 0;
            for( let i = 0; i < promises.length; i++){
              Promise.resolve(promises[i]).then(data=>{
                result[i] = data;
                if(++index === promises.length){
                  resolve(result)
                }
              },err =>{
                reject(err)
                return          
                })
            }
          }
        })
      }
```

https://www.jianshu.com/p/c949d49eb641
