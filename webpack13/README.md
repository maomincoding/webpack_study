## webpack中实现代码分割有几种方式？
首先，要声明一下，代码分割和webpack无关。
那么在webpack中，实现代码分割有两种方式。分别是同步与异步。
- 同步代码分割（顺序执行）：
借助webpack自带的配置，在webpack配置文件中配置以下：
```js
    optimization:{
        splitChunks:{
            chunks: 'all'
        }
    }
```
- 异步代码分割（import）:
无需做任何配置，会自动进行代码分割。
当然你在配置文件中的`splitChunks`同样对异步也有效。

最后，你可以结合`@babel/plugin-syntax-dynamic-import`这个依赖异步引入模块。然后在`import(/*魔法注释*/,'')`,可以在注释中通过`/* webpackChunkName:"" */`来定义打包后异步文件的名字。

