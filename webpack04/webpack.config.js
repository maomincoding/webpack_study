const path = require('path')
module.exports = {
  mode:'production', // development\production 模式
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
      },
      {
        test:/\.(eot|ttf|svg|woff)$/,
        use:{
          loader:"file-loader"
        }
      }
    ]
  }
}