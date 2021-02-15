"use strict";

const keyElement = document.querySelector(".page");

function handleKey(event) {
  if (event.keyCode === 82) {
    keyElement.classList.add("red");
    keyElement.classList.remove("purple");
  } else if (event.keyCode === 77) {
    keyElement.classList.add("purple");
    keyElement.classList.remove("red");
  } else if {
    keyElement.classList.add("hidden");
  } 
}

document.addEventListener("keydown", handleKey);
handleKey();
