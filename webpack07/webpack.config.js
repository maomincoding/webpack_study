const path = require('path');
const webpack = require("webpack");
module.exports = {
  mode:'development', // development\production 模式
  entry:'./src/index.js',
  devServer:{
    contentBase:'./dist',
    open:true,
    proxy:{
      '/api':"http://localhost:3000/"
    },
    hot: true,
    hotOnly:true
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}