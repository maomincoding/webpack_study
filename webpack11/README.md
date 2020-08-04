## webpack如果分别配置生产环境和开发环境

分别创建两种环境的配置文件，即`webpack.dev.js`和`webpack.prod.js`，然后将两个文件的共有部分提取出来，放到`wenpack.common.js`文件中。安装依赖`wenpack-merge`将`webpack.common.js`文件分别合并到两种环境的配置文件。