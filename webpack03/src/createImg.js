import user from './user.jpg'

export default function name() {
    var img = new Image();
    img.src = user;
    img.classList.add("imgcss"); // 添加css样式名
    var dom = document.getElementById('root');
    dom.append(img);
}
