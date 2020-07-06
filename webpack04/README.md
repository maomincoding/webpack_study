## 如何打包字体样式文件
打开网址
[https://www.iconfont.cn/]("https://www.iconfont.cn/")
，选择自己喜爱的图标添加到购物车，然后点击右上方购物车，添加到项目。点击确定，然后跳到结果页面，点击下载至本地。
1. 你只需要关心这几个文件`iconfont.css`、`iconfont.eot`、`iconfont.svg`、`iconfont.ttf`、`iconfont.woff`。
2. 将`iconfont.eot`、`iconfont.svg`、`iconfont.ttf`、`iconfont.woff`这4个文件复制到项目src文件目录下，并创建font文件夹，放在该文件夹下。将`iconfont.css`文件内的内容复制到项目的样式文件中，注意在路径前加上`./font`。
3. 在相应的标签上加上类名`iconfont`以及对应的类名。
4. 使用`file-loader`,并规定相应的后缀名。