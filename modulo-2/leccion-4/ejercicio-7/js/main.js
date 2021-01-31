"use strict";

function getEl(event) {
  const element = document.querySelector(event);
  return element;
}
const btnEl = getEl(".text");
console.log(btnEl);

const numberElement = parseInt(btnEl.innerHTML);


function oddEven(a) {
  //saber si es par o impar
  const resto = a % 2;
  if (resto === 0){
     console.log(`Este número es par`);   
  } else {
     console.log(`Este número es impar`);
  }
}

oddEven(numberElement);