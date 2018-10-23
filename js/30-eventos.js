'use strict'

//Mouse events
window.addEventListener('load',function () {
    function changeColor() {
        var bg = button.style.background;
        if( bg == "green"){
            button.style.background = "red";

        }

        else {
            button.style.background = "green";
        }
        button.style.padding = "10px";
        button.style.border = "1px solid ##ccc";
    }
    var button = document.querySelector("#button");

    button.addEventListener('click', function() {
        changeColor();
    });

    button.addEventListener('mouseover', function () {
        button.style.background = "yellow";
    });

    button.addEventListener('mouseout',function () {
        button.style.background = "#ccc";
    });

//Focus
    var input = document.querySelector("#campo_nombre")
    input.addEventListener('focus',function () {
        console.log("estas dentro del input");
    });
//Blur
    input.addEventListener('blur',function () {
        console.log("estas fuera del input");
    });
//Keydown
    input.addEventListener('keydown',function (event) {
        console.log("estas esta tecla: ", String.fromCharCode(event.keyCode));
    });
//Keypress
    input.addEventListener('keypress',function (event) {
        console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
    });
//Keyup
    input.addEventListener('keyup',function (event) {
        console.log("Tecla soltada: ", String.fromCharCode(event.keyCode));
    });
}); //end load
