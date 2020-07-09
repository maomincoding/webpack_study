## webpack配置文件中devtool配置字段是什么
控制是否生成，以及如何生成`sourceMap`。`sourceMap`它是一种映射关系。通常用于显示提示打包前文件的出错位置。
`devtool`可以通过配置不同的值来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
默认不打开是`'none'`,如果你是在开发环境，推荐值`cheap-module-eval-source-map`,如果你是生产环境下，推荐值`cheap-module-source-map`。
## 如何实现不用每次都在命令行输入打包命令打包
可以使用`webpack --watch`命令实时监控文件是否改动。