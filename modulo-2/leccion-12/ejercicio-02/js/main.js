"use strict";

const selectElement = document.querySelector(".city");
const newElImg1 = document.createElement("img");
const newElImg2 = document.createElement("img");
const newElImg3 = document.createElement("img");
let mainElement = document.querySelector(".js-main");
const image = document.querySelector(".js-img");
//Madrid
newElImg1.src = "./images/Madrid.jpg";
//Paris
newElImg2.src = "./images/Paris.jpg";
//New_York
newElImg3.src = "./images/New_York.jpg";

function handleSelectCity() {
  if (selectElement.value === "Madrid") {
    mainElement.appendChild(newElImg1);
    document.querySelector(".js-main img").remove();
  } else if (selectElement.value === "Paris") {
    mainElement.appendChild(newElImg2);
    document.querySelector(".js-main img").remove();
  } else if (selectElement.value === "New_York") {
    mainElement.appendChild(newElImg3);
    document.querySelector(".js-main img").remove();
  }
}

selectElement.addEventListener("change", handleSelectCity);
