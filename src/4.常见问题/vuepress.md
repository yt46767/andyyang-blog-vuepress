### 本地访问正常。但部署到gh-pages后，点击导航栏跳转页面异常，打不开！

原因：
查了下是跳转后异步加载的js404报错。
js访问地址出错，如：https://yt46767.github.io/my-blog-vuepressassets/js/93.d762b067.js，应该是/assets
具体原因处在config.js的base值设置不对，结尾少了/。
解决：
base值结尾加/

### 相对图片显示不出来【重要】

- 原因：

1. 图片文件名不能用中文
2. 同一个目录下，地址必须带上./
   注意：文件名可随意命名，因为其不显示【重点】

## 内部链接/锚（mao）不生效 【重要】

- 原因：

1. # 

```text
[显示内容](#标题)  
```

这里的#可不是一级标题的#，即便是三级四级标题，使用时也只需要一个#就可以了。

2. 标题
   如果是你的链接是英文大写，那就要注意了！因为浏览器会把链接转为小写，浏览器还区别大小写。 而链接是中文时，这一点可以忽略。

- 解决：

```text
[CENTOS](#centos)  
```

## Cannot read properties of null (reading ‘pickAlgorithm‘)

解决：

执行npm cache clear --force清除缓存再重新执行 npm i

## vuepress gh-pages访问页面静态资源丢失

原因：

多了个上文，，删除即可。

![image-20220906220444828](https://gitee.com/yt46767/doc/raw/master/image-20220906220444828.png)

![image-20220906220526368](https://gitee.com/yt46767/doc/raw/master/image-20220906220526368.png)

## vuepress 中文路径，warning告警
encodeURI([路径])
原因在于: 
node_modules\@vuepress\core\lib\node\internal-plugins\routes.js

```javascript
const dncodedPath = decodeURIComponent(pagePath)
if (dncodedPath !== pagePath) {
  // Andyyang Fix: warning console [vue-router] Route with path "/3.常见知识/9.Python/" contains unencoded characters, make sure your path is correctly encoded before passing it to the router. Use encodeURI to encode static segments of your path.
code += `,
{
   path: ${JSON.stringify(dncodedPath)},
   redirect: ${JSON.stringify(pagePath)}
}`

.......


const decodedRegularPath = decodeURIComponent(regularPath)

if (decodedRegularPath !== pagePath) {
   // Andyyang Fix: warning console [vue-router] Route with path "/3.常见知识/9.Python/" contains unencoded characters, make sure your path is correctly encoded before passing it to the router. Use encodeURI to encode static segments of your path.
      code += `,
{
   path: ${JSON.stringify(decodedRegularPath)},
   redirect: ${JSON.stringify(pagePath)}
}`
```

解决：
  code += `,
  {
    path: ${JSON.stringify(pagePath)},
    redirect: ${JSON.stringify(pagePath)}
  }`