"use strict";

//ejercicio 5

 function getEl(event) {
  const element = document.querySelector(event);
  return element;
}
const btnEl = getEl(".text");
console.log(btnEl);

//ejercicio 6

    function getEl(event) {
    const element = document.querySelector(event);
    const isElement = element;
    if (isElement === null) {
      console.log(`No existe ningún elemento con clase, id o tag llamado ${event}`)
    }
    return element;
  }
  const btnEl = getEl('.ext');
  console.log(btnEl);
