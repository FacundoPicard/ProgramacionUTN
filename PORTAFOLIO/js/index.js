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







  consoleText(['Hola! Soy Facundo Picard.  Progamador Web junior.  Front End Developer'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}