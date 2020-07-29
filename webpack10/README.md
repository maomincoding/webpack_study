## Tree Shaking 在开发环境中的使用
比如你想引入一个模块，但是打包后会把所有的模块都引入进来，你想只引入你想用的，这里就用到了`Tree Shaking`。


在`webpack.config.js`中,配置
```js
  optimization:{
    usedExports:true
  }
```
然后，在`package.json`中，写上字段`sideEffects`，值为false的话，就是所有的模块都是使用`Tree Shaking`
```json
  "sideEffects":false,
```
这里的`sideEffects`的作用是你想让哪些模块不用`Tree Shaking`,配置值是一个数组，比如
```json
  "sideEffects":["@babel/polly-fill","*.css"],
```
注意的是，`Tree Shaking`只支持文件`ES Module`静态导入方式。

## Tree Shaking 生产环境中的使用
在生产环境，webpack会默认使用`Tree Shaking`。把`webpack.config.js`中的`mode`改为`production`。然后`optimization`配置就不需要了，删掉以下代码即可。
```js
  optimization:{
    usedExports:true
  }
```
在`package.json`中字段`sideEffects`还是需要的。