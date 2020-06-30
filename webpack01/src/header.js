function Header (){
  var dom = document.querySelector("#root");
  var header = document.createElement("div");
  header.innerText = "HEADER";
  dom.append(header);
}

module.exports = Header
// export default Header