'use strict';

const button = document.querySelector('.alert');
const myName = document.querySelector('.input-name');

function greeting(event) {
/*   const nameValue = myName.value; esto no sería necesario pero es válido
 */
  console.log(`Hola ${myName.value}`); //la variable myName es global y por tanto accesible a ella desde dentro de la función
}

button.addEventListener('click', greeting);