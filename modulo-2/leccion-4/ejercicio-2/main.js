'use strict';

function media(a,b,c,d) {
    const result = (a+b+c+d)/4;
    return result;
}

const resulFinal = media(10,10,10,10);
/* media(5,6,7,8);
 */
console.log(resulFinal);
const AIURA = document.querySelector('body');
AIURA.innerHTML += resulFinal;