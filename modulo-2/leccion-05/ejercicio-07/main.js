'use strict';

const buttonElement = document.querySelector('.button');

function pushTheButton (event) {
    buttonElement.classList.toggle('buttonColor') === event.currentTarget;
}
buttonElement.addEventListener('click', pushTheButton); 


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