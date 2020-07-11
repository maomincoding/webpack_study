## webpack配置文件中devtool配置字段是什么
控制是否生成，以及如何生成`sourceMap`。`sourceMap`它是一种映射关系。通常用于显示提示打包前文件的出错位置。
`devtool`可以通过配置不同的值来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
默认不打开是`'none'`,如果你是在开发环境，推荐值`cheap-module-eval-source-map`,如果你是生产环境下，推荐值`cheap-module-source-map`。
## 如何实现不用每次都在命令行输入打包命令打包，（俗话说，热更新）
我们来介绍三种方法：
1. 可以使用`webpack --watch`命令实时监控文件是否改动。但是这种方式必须每次刷新页面，还有因为页面是打开是使用`file`协议，所以在遇到处理`ajax`请求的时候会比较棘手。

2. 安装`webpack-dev-server`依赖。安装完成后在`webpack.config.js`文件中配置`devServer`字段，它是一个对象。
具体配置可以查看官网文档。最后你需要在`package.json`文件中配置项`"scripts"`加上一段命令：
```
"dev": "webpack-dev-server"
```
这种方法好在你不用每次更改完再重新刷新页面，它会自动帮你刷新页面以及自动执行打包命令，还有它会给你开启一个服务器，可以在一些处理`ajax`请求时更好的解决。

3. 搭建一个node服务器，来启动webpack。首先我们需要安装依赖，`express`、`webpack-dev-middleware`，然后我们在根目录下创建一个`server.js`。具体内容可以看我自己配置的。最后，使用`node server.js`命令启动服务器。