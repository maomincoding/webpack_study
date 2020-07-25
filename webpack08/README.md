## 如何在webpack中使用babel
1. 安装`babel-loader`、`@babel/core`
```js
npm install --save-dev babel-loader @babel/core
```
2. 在`webpack.config.js`中配置
```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```
3. 安装`@babel/preset-env`
```js
npm install @babel/preset-env --save-dev
```
4. 在`webpack.config.js`中配置
```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{
  "presets": ["@babel/preset-env"]
  }}
  ]
}
```
5. 以上4步只是简单的es6部分语法转化成es5语法，如果你想全部转换的话，需要安装
```js
npm install --save @babel/polyfill
```
6. 并在每个文件顶部写上
```
import "@babel/polyfill";
```
7. 直接这样，它会把所有的es6语法转换成es5语法，如果你只想转换文件中使用的语法，需要配置`webpack.config.js`
```js
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{
        "presets": [["@babel/preset-env",{
          useBuiltIns:'usage'
        }]]
      }}
    ]
  },
```