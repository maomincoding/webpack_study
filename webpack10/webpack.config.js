const path = require('path')

module.exports = {
  mode:'development', // development\production 模式
  entry:'./src/index.js',
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  optimization:{
    usedExports:true
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}