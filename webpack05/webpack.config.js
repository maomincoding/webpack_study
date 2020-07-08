const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    mode: 'development', // development\production 模式
    // entry: './src/index.js',
    entry:{
        main:'./src/index.js',
        sub:'./src/index.js'
    },
    output: {
        //filename: 'bundle.js',
        publicPath:"https://cdn.cn",
        filename:'[name].js', //或者是[hash].js
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()
    ]
}