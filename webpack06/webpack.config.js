const path = require('path')
module.exports = {
  mode:'development', // development\production 模式
  entry:'./src/index.js',
  devServer:{
    contentBase:'./dist',
    open:true,
    proxy:{
      '/api':"http://localhost:3000/"
    }
  },
  output:{
    publicPath:"/",
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}