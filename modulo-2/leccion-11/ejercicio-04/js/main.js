"use strict";

const inputElement = document.querySelector(".js-input");
const nameElement = document.querySelector(".js-name");

function handleKeyUp() {
  const inputValue = inputElement.value;
  nameElement.innerHTML = inputValue;
  localStorage.setItem("text", inputValue);
}
const getItem = localStorage.getItem("text");
inputElement.value = getItem;
nameElement.innerHTML = getItem;

inputElement.addEventListener("keyup", handleKeyUp);
