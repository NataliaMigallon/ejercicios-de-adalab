'use strict';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const winnerElement = document.querySelector('.winner');

let name1Adalaber = 'Sagra';

/* const name1Element = document.querySelector('.name1');
const name2Element = document.querySelector('.name2'); */

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
winnerElement.innerHTML = winnerElement.innerHTML + name1Adalaber;