'use strict'

//DOM  - Document Object Model

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS !";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div')
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
}

//Conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName('rojo');
for(var div in divsRojos){
    divsRojos[div].style.background = "red";
}

