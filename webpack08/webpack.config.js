const path = require('path')

// options: {
//     "presets": [["@babel/preset-env", {
//       targets: {
//         chrome: "67"
//       },
//       useBuiltIns: 'usage'
//     }]]
//   }

module.exports = {
  mode:'development', // development\production 模式
  entry:'./src/index.js',
  module:{
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, //排除第三方打包
        loader: "babel-loader"
      }
    ]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}