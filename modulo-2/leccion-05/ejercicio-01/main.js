'use strict';

/* // elemento de HTML
const button = document.querySelector('.alert');

// handler
function showAlert() {
  console.log('Alerta');
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert); */

const button = document.querySelector('.alert');
const hello = document.querySelector('.text');

function Hola(event) {
  hello.innerHTML = ('Mi primer click, ¡ole yo y la mujer que me parió!');

}

button.addEventListener('click', Hola);