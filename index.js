'use strict'

console.log("Ingrese una cadena");

var stdin = process.openStdin();

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("Tu nombre es: " +
        d.toString()



    );

    var reversa = d.reverse();
    console.log(reversa);

});