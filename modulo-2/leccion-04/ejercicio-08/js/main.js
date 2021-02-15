'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"


//Al cambiar el orden de los console.log la lectura es diferente:
//Si pintas el valor de la variable antes de la función, pinta el valor
//de la variable global.
//Si pintas el valor de la variable después de que se ejecute la función
//la consola pinta el nuevo valor de la variable resultante de la función

//Resultado al cambiar de orden los console.log:
//console.log(mySecretLetter()); // devuelve "y"
//console.log(secretLetter); // devuelve "x"