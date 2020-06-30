import user from './user.jpg'
// var user = require('./user.jpg'); // require是引入一个模块的，在下面需要user.default。
console.log(user);

var img = new Image();
img.src = user;
var dom = document.getElementById('root');
dom.append(img);
