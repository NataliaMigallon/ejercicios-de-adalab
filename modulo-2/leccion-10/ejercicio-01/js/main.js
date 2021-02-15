'use strict';

function getRandomNumber() {
    fetch("https://api.rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-emoji').addEventListener("click", getRandomNumber);