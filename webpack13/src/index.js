// 同步引入第三方模块
// import _ from "lodash"

// console.log(_.join(['a','b','c'],"*")) //a*b*c

// 异步引入第三方模块
function getComponent() {
    return import('lodash').then(({default:_})=>{
        var element = document.createElement('div');
        element.innerHTML = _.join(['maomin,xqm'],'-');
        return element;
    })
}

getComponent().then(element => {
    document.body.appendChild(element);
})