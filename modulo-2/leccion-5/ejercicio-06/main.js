'use strict';

const inputElement = document.querySelector('.input');
const paragraphElement = document.querySelector('.paragraph');

function getValue (event) {
    paragraphElement.innerHTML= event.currentTarget.value;
}
inputElement.addEventListener('keyup', getValue); 


/* const buttonElement = document.querySelector('.button');

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);
 */

/* 
const keyElement = document.querySelector('.page');

function handleKey(event) {
    if(event.keyCode === 82){
        keyElement.classList.add('red');
    } else if(event.keyCode === 77){
        keyElement.classList.add('purple');
    }
}

document.addEventListener('keydown', handleKey); */