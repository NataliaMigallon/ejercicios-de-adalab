'use strict';

const buttonElement = document.querySelector('.button');

function handlerButton(type) {
  console.log(type);
}

buttonElement.addEventListener('click', handlerButton);

//sin hacer