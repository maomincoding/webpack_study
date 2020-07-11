const express = require("express");
const path = require("path")
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const complier = webpack(config);
const app = express();
const DIST_DIR = path.join(__dirname, "./dist");// 设置静态访问文件路径


app.use(webpackDevMiddleWare(complier,{
    publicPath:config.output.publicPath,
    quiet: true 
}))

app.use(express.static(DIST_DIR)); // 需要注意的是这行代码需要写在后面执行，设置访问静态文件的路径

app.listen(3100,()=>{
    console.log("server start")
})
