"use strict";

const numbers = [1, 2, 3];

for (let index = 0; index < numbers.length; index++) {
  const newList = document.createElement("li");
  const newContent = document.createTextNode(numbers[index]);
  newList.appendChild(newContent);
  const ulElement = document.querySelector(".list");
  ulElement.appendChild(newList);
}
