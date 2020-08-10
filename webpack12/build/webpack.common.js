const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        lodash:'./src/lodash.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/, // 可以多加几个格式的文件
                use: {
                    loader: 'url-loader', // file-loader/url-loader
                    options: {
                        // placeholders 占位符
                        name: '[name].[ext]', // 这样就还会保持原来的文件名
                        outputPath: 'images/', // 图片打包输出的路径
                        limit: 2048 // 限制文件大小(如果图片文件大于该值会打包出图片文件)
                    }
                }
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.scss$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    // 不管你是在js中直接引入css,还是在css中再引入css文件。加上下面的importLoaders，都会走sass-loader和postcss-loader。
                    options: {
                        importLoaders: 2,
                        modules: true // 应用css Modules
                    }
                }, "sass-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, '../')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}