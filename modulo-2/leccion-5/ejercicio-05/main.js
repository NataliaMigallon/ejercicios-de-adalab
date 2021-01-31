'use strict';

const keyElement = document.querySelector('.page');

function handleKey(event) {
    if(event.keyCode === 82){
        keyElement.classList.add('red');
    } else if(event.keyCode === 77){
        keyElement.classList.add('purple');
    }
}

document.addEventListener('keydown', handleKey);