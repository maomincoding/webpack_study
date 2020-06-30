const path = require('path')
module.exports = {
  mode:'production', // development\production 模式
  entry:'./src/index.js',
  module:{
    rules:[{
      test:/\.jpg$/,
      use: {
        loader:'file-loader'
      }
    }]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}