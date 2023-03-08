window.onload=inicio;

function inicio(){
    document.getElementById("rojo").onclick=fondorojo
    document.getElementById("amarillo").onclick=fondoamarillo
    document.getElementById("verde").onclick=fondoverde
}

function fondorojo(){
    document.querySelector("body").style.backgroundColor="red"
}

function fondoamarillo(){
    document.querySelector("body").style.backgroundColor="yellow"
}

function fondoverde(){
    document.querySelector("body").style.backgroundColor="green"
}