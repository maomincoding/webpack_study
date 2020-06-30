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

## webpack 打包文件时，会自动重命名文件，如何避免
加上`options`属性对象，定义`name`字段。

```js
 module:{
    rules:[{
      test:/\.jpg$/,
      use: {
        loader:'file-loader',
        options:{
          name:'[name].[ext]'// 这样就还会保持原来的文件名
        }
      }
    }]
  }
```
## webpack 打包文件时，如果你想指定打包目录
加上`outputPath`字段即可。
```js
  module:{
    rules:[{
      test:/\.(jpg|png|gif)$/,
      use: {
        loader:'file-loader',
        options:{
          // placeholders 占位符
          name:'[name].[ext]', // 这样就还会保持原来的文件名
          outputPath:'images/' // 图片打包输出的路径
        }
      }
    }]
  },
```