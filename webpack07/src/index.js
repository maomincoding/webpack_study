import counter from "./counter.js"
import number from  "./number.js"

counter();
number();

// 
if(module.hot){
    module.hot.accept('./number',()=>{
        document.body.removeChild(document.getElementById('number'))//删除之前的节点
        number();
    })
}