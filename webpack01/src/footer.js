function Footer (){
  var dom = document.querySelector("#root");
  var footer = document.createElement("div");
  footer.innerText = "FOOTER";
  dom.append(footer);
}

module.exports = Footer
// export default Footer