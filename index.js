'use strict'

console.log("Ingresaa una paalabra");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {

    var palabra = d.toString().trim()
    var reversa = palabra.split('').reverse().join('').toString();
    if (palabra) {


        if (palabra == reversa) {
            console.clear()
            console.log('La palabra ES un palindromo');
            console.log('Puedes ingresar otroa');


        } else {
            console.clear();
            console.log('La palabra NO es un palindromo');
            console.log('Puedes ingresar otra palabra');

        }
    } else {
        console.clear();
        console.log('No has ingresado ninguna palabra');
        console.log('Puedes ingresar otra palabra');



    }



});



// document.write(esPalindromo("anitalavalatina")); // regresar true
// document.wirte(esPalindromo("<br>"));
// document.write(esPalindromo("holamundo")); // regresar false