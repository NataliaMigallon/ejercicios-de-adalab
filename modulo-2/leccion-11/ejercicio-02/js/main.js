"use strict";

const searchCharacter = document.querySelector(".search-character");
const nameCharacter = document.querySelector(".name");
const gender = document.querySelector(".gender");
const search = document.querySelector(".search");

function handleSearch() {
  const nameChar = searchCharacter.value;
  fetch(`https://swapi.dev/api/people/${nameChar}`)
    .then((response) => response.json())
    .then((data) => {
      nameCharacter.innerHTML = data.name;
      gender.innerHTML = data.gender;
    });
}
search.addEventListener("click", handleSearch);
