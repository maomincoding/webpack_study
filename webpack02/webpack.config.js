const path = require('path')
module.exports = {
  mode:'production', // development\production 模式
  entry:'./src/index.js',
  module:{
    rules:[{
      test:/\.(jpg|png|gif)$/, // 可以多加几个格式的文件
      use: {
        loader:'url-loader', // file-loader/url-loader
        options:{
          // placeholders 占位符
          name:'[name].[ext]', // 这样就还会保持原来的文件名
          outputPath:'images/', // 图片打包输出的路径
          limit:2048 // 限制文件大小(如果图片文件大于该值会打包出图片文件)
        }
      }
    }]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}