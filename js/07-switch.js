'use strict'

//switch

var edad = 40;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Ya eres adulto";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
}

console.log(imprime);