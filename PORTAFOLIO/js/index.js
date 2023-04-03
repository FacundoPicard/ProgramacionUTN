function cerrar() {
  let navbar = document.querySelector(".navbar-toggler");
  navbar.click();
}

/* var i=0;
txt= "Hola Soy Facundo Picard Programador Web Junior. Front End Developer."
var speed=80;

function typeWrite(){
if(i<txt.length){
document.getElementById("tituloinicio").innerHTML += txt.charAt(i);
i++;
setTimeout(typeWrite, speed);
}
}
typeWrite(); */


function Ingresarmouse(event){
document.getElementById("facundopicardfooter").style.color = "#8cb3df"

}

function Salirmouse(event){
  document.getElementById("facundopicardfooter").style.color = "white"
  }