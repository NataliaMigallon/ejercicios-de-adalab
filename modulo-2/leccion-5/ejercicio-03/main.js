'use strict';

const textElement = document.querySelector('.text');
const innerText = textElement.innerHTML;

function handleAddText() {
    const newText = "<p> lorem ipsum </p>";
    const result = innerText + newText;
    textElement.innerHTML = result;

}
textElement.addEventListener('mouseover', handleAddText);