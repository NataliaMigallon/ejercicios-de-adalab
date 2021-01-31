'use strict';

function multiplication(a,b) {
    const result = a * b;
    console.log(result);
    return result;
}

const resultFinal = multiplication(5,5);

const SOCORRO = document.querySelector('body');
SOCORRO.innerHTML = resultFinal;