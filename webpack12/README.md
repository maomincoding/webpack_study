## 自己实现一个代码分割code splitting
你只需要将第三方库文件自己单独创建一个文件引入，然后在webpack配置文件中的`entry`配置项，再定义一个变量引入这个文件。
如：
```js
  entry: {
        main: './src/index.js',
        lodash:'./src/lodash.js'
    }
```
注意：`output`配置项中的`filename`字段需要使用`'[name].js'`,这样就可以原样输出文件名。
```js
output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
```