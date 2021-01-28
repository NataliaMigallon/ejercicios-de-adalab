/* 'use strict';

const textElement = document.querySelector('.text');
const newText = '<p>Lorem ipsum dolor</p>';

function addText() {
    textElement.innerHTML = (`${textElement} + <p>Lorem ipsum dolor</p>`);
}

textElement.addEventListener('mouseover', addText);
 */

//SOLUCIÓN DE CECILIA
'use strict';
const textElement = document.querySelector('.text');
const innerText = textElement.innerHTML
function handleAddText() {
    const newText = "<p> lorem ipsum </p>";
    const result = innerText + newText;
    textElement.innerHTML = result;
}
textElement.addEventListener('mouseover', handleAddText);