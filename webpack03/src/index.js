import user from './user.jpg'
// var user = require('./user.jpg'); // require是引入一个模块的，在下面需要user.default。
//import "./index.css" // 引入css文件
import "./avatar.scss"

console.log(user);

var img = new Image();
img.src = user;
img.classList.add("imgcss"); // 添加css样式名
var dom = document.getElementById('root');
dom.append(img);
