## 处理css样式文件打包为什么同时引入style-loader、css-loader
`css-loader`处理css样式，而`style-loader`则需要将css挂载到head标签里。所以一般他们俩搭配使用。
## 如果你想打包其他css预处理语言怎么办
可以借助相应的loader,比如你想打包scss文件，你就可以借助`sass-loader`。利用它编译成css文件。下载的时候下载相应的loader和语言就可以了。
## webpack的loader有处理顺序的
从下到上，从右到左。
## css3样式前自动加兼容前缀
需要借助`postcss-loader`。安装`postcss-loader`以及`autoprefixer`依赖。然后在根目录下创建并编辑`postcss.config.js`文件。