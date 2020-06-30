## webpack打包除js其他的文件
webpack 默认会打包js文件。如果你想打包其他类型的文件，需要安装loader依赖。
然后在webpack.config.js配置。如打包图片文件，

```js
  module:{
    rules:[{
      test:/\.jpg$/,
      use: {
        loader:'file-loader'
      }
    }]
  },
```
