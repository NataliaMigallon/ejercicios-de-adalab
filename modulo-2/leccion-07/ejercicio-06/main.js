'use strict';

const buttonElement = document.querySelector('.button');
const input1Element = document.querySelector('.input1');
const input2Element = document.querySelector('.input2');
const textElement = document.querySelector('.text');

function showTitles() {
    const arr = [input1Element.value, input2Element.value];
    for (const opus of arr) {
        console.log(`¡A mí también me encantó ${opus}!`);
        /* textElement.innerHTML = (`¡A mí también me encantó ${opus}!`); */
    }
}
buttonElement.addEventListener('click', showTitles);