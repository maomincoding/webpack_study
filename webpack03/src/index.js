import user from './user.jpg'
// var user = require('./user.jpg'); // require是引入一个模块的，在下面需要user.default。
//import "./index.css" // 引入css文件
import style from "./avatar.scss"
import createImg from "./createImg"

createImg();
var img = new Image();
img.src = user;
img.classList.add(style.imgcss); // 添加css样式名
var dom = document.getElementById('root');
dom.append(img);
