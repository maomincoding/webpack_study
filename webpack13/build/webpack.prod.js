const {merge} = require("webpack-merge");
const commonConifg = require("./webpack.common.js")

 const prodConfig= {
    mode: 'production', // production 模式
    devtool: 'cheap-module-source-map'
}
module.exports = merge(commonConifg,prodConfig)