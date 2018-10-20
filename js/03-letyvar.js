'use strict'
//let es para variables locales y var para variables globales
//Prueba con let y var

var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "Curso JS victorrobles.es";
console.log(texto); //valor js

if(true){
    let texto = "Curso Laravel 5 victorrobles.es";
    console.log(texto); //valor laravel 5
}

console.log(texto);