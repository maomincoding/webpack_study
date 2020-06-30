function Content (){
  var dom = document.querySelector("#root");
  var content = document.createElement("div");
  content.innerText = "CONTENT";
  dom.append(content);
}

module.exports = Content
// export default Content