## plugin在webpack中起什么作用？
`plugin` 可以在webpack运行到某个时刻的时候，帮你做一些事情。
## HtmlWebpackPlugin有什么作用？
`HtmlWebpackPlugin`会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中。
## CleanWebpackPlugin有什么作用？
`CleanWebpackPlugin`在打包之前，把打包后的文件夹清空，做到打包文件夹的内的不重复。
## entry配置项如果是对象时，需要知道哪一些
`webpack.config.js`中的配置项`entry`如果是对象的话，其键值名就是打包后的文件名（这时需要将`output`配置项的`filename`字段去掉）。
## 如果想打包多个文件
你如果需要打包多个文件，可以在`entry`配置对象中配置多个键值，并且在`output`配置项中的`filename`值写成`[name].js`或者`[hash].js`
## 如何在打包后的文件前加上统一路径
需要在`output`配置中加上`publicPath`参数，值为统一路径。