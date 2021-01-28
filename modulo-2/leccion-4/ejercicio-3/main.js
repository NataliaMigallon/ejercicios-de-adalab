'use strict';

// El resultado se pinta fuera de la función, por lo que necesitamos return
function TICKET(a) {
    const sinIVA = a - (a * 0.21);
    const IVA = a * 0.21;
    const TOTAL = a;
    const result = `Precio sin IVA: ${sinIVA}, IVA: ${IVA}, y Total: ${TOTAL}.`;
    return result
}
const ticketFinal = TICKET(12);


const element = document.querySelector('body');
element.innerHTML = ticketFinal;


// La función es la que pinta el texto en HTML, por lo que no necesita return
/* function TICKET(a) {
    const sinIVA = a - (a * 0.21);
    const IVA = a * 0.21;
    const TOTAL = a;

    const result = `Precio sin IVA: ${sinIVA}, IVA: ${IVA}, y Total: ${TOTAL}.`;
    const element = document.querySelector('body');
    element.innerHTML = result;
}
TICKET(12) */