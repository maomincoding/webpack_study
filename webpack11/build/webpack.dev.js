const webpack = require("webpack");
const {merge} = require("webpack-merge");
const commonConifg = require("./webpack.common.js")

const devConfig = {
  mode:'development', // development模式
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    proxy: {
      '/api': "http://localhost:3000/"
    },
    hot: true,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    usedExports:true
  }
}

module.exports = merge(commonConifg, devConfig)