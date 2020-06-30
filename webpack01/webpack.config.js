const path = require('path')
module.exports = {
  mode:'production', // development\production 模式
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}