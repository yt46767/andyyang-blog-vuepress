## react的setState异步/同步场景：
生命周期/react的事件，异步
setTimeout、setInterval，同步

## react-cli
npm install -g npx
npx create-react-app my-app
cd my-app
npm start
http://www.ruanyifeng.com/blog/2019/02/npx.html
https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app

示例
https://github.com/GuoYongfeng/webpack-dev-boilerplate

## 生命周期
https://www.runoob.com/react/react-component-life-cycle.html

## react , radio , 改变 checked

```
js:
--------------------------------------------------------------------------------
e.target.type == "radio" ? (()=>{
      self.setState({
        radioChecked: e.target.value
      })
})()

render：
--------------------------------------------------------------------------------
(
  v.type == "radio" ?
    v.group.map((v1,n1)=>{
      return (
        <span className="radio" >
          <input type="radio" checked={v1 == radioChecked} disabled={v.disabled} name={v.name} value={v1} onClick={this.changeText} />
          {v1}
          <em className={v1 == radioChecked ? "choose" : ""}>
            <i></i>
          </em>
        </span>
      )
    }) :
    (
      <input type="checkbox" disabled={v.disabled} name={v.name} onChange={this.changeText} />
    )
)
```

## datalist

```
写法1：
renderDatalist(){
    let t = [];
    window.localStorage.getItem("users").split(',').map((v,i)=>{
      t.push(<option value={v} />) //多笔数据，汇总在一个对象里
    });
    return t;
  }

render(){
return(
<Input className="input" list="users"  placeholder="工号/手机号" value={this.state.loginNumber} onChange={value => this.checkLoginNumberInputText(value.target.value)}/>
<datalist id="users">
 	 	{window.localStorage.getItem("users") && this.renderDatalist()}
</datalist>
)
}

写法2：
<datalist id="users">
{window.localStorage.getItem("users") && window.localStorage.getItem("users").split(',').map((v,i)=>{
return (<option value={v} />)
})}
</datalist>
```

###  react兼容ie

react-redux-support-ie8 https://github.com/zhoulijie/react-redux-support-ie8

### react/redux 服务端渲染、路由filter、websocket同步

https://github.com/ichenzhifan/react-todomvc-full
