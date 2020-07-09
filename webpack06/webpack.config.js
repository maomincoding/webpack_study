const path = require('path')
module.exports = {
  mode:'development', // development\production 模式
  devtool:"source-map",
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}