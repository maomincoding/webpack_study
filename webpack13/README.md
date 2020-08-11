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
