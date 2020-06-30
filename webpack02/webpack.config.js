const path = require('path')
module.exports = {
  mode:'production', // development\production 模式
  entry:'./src/index.js',
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
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}