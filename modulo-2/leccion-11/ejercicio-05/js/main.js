"use strict";

const lightElement = document.querySelector(".js-light");
const darkElement = document.querySelector(".js-dark");

function handleTheme(event) {
  if (lightElement.value === event.currentTarget.value) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (darkElement.value === event.currentTarget.value) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}
lightElement.addEventListener("click", handleTheme);
darkElement.addEventListener("click", handleTheme);
