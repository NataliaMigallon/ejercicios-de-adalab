'use strict';

function getChihuahuaImage() {
  fetch("https://api.github.com/users/")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un chihuahua";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getChihuahuaImage);