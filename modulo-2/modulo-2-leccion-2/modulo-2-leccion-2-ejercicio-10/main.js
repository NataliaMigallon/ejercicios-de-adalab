'use strict';

const days =365;
const hoursForDay = 24;

const myAge = document.querySelector('.age');

/* const myAge = parseInt (document.querySelector('.age').innerHTML);
 */

const hoursLived = hoursForDay * days * parseInt(myAge.innerHTML);

console.log(hoursLived);
