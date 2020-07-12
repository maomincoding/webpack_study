// console.log("hello world maomin2");
import './style.css'

var btn = document.createElement('button');
btn.innerHTML =  '增加';
document.body.appendChild(btn);

btn.onclick = function () {
    var div =  document.createElement('div');
    div.innerHTML = 'item';
    document.body.appendChild(div);
}