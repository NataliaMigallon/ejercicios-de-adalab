'use strict';

const buttonElement = document.querySelector('.button');
const button2Element = document.querySelector('.button2');

function handlePushTheButton (event) {
    const selectButton = event.currentTarget;
    selectButton.classList.toggle('buttonColor');
}

buttonElement.addEventListener('click', handlePushTheButton);
button2Element.addEventListener('click', handlePushTheButton);