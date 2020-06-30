## 在项目中安装webpack

### 安装webpack
```
npm install --save-dev webpack
```
### 安装webpack-cli
如果你使用 webpack 4+ 版本，你还需要安装 CLI。
```
npm install --save-dev webpack-cli
```
## webpack 支持规范

- CommonJs
- ES6 module
- AMD

## 编译文件
如果没有配置`webpack.config.js`文件。
```
npx webpack <入口文件>
```
否则。
```
npx webpack
```
你可以在`package.json`文件中直接。
```json
  "scripts": {
    "start": "webpack"
  },
```
到时候，直接运行`npm start`即可。

## 指定文件配置
```
npx webpack --config <指定文件名>
```
