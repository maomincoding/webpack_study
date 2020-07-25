const path = require('path')
module.exports = {
  mode:'development', // development\production 模式
  entry:'./src/index.js',
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",options:{
        "presets": [["@babel/preset-env",{
          useBuiltIns:'usage'
        }]]
      }}
    ]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}