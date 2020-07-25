## 实现webpack热更新js文件
在webpack.config.js配置devSever字段。
```js
  devServer:{
    contentBase:'./dist',
    open:true,
    hot: true, // 开启热更新
    hotOnly:true  //  也写成true
  },
```
然后，在plugins字段中引入插件。这里主要还需要引入webpack,`const webpack require("webpack");`
```js
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
```
与热更新css文件不同的是，我们加载js文件还需要加上以下代码，为什么css文件不用加上，是因为`css-loader`内置了这种方法。
```js
// 如果配置了热更新
if(module.hot){
    // 就执行指定文件下的的代码
    module.hot.accept(/*指定文件*/,()=>{
    // 执行部分
    })
}
```
