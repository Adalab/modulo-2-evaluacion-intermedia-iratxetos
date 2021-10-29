'use strict';
// VARIABLES:
const inputNumber = document.querySelector('.js-input');
let trackTest = document.querySelector('.js-track');
const counter = document.querySelector('.js-counter');
const container = document.querySelector('.js-container');
const btn = document.querySelector('.js-btn');
const maxNumber = 100;
let count = 0;


// FUNCIONES
//GENERAR NÚMERO RANDOM
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(maxNumber);

// ESCRIBIR EN LA CONSOLA EL NÚMERO RANDOM
console.log('El numero aleatorio es ' + randomNumber);
console.log(randomNumber);

// TOMAR EL NÚMERO DEL INPUT
function bringInputValue() {
  const number = parseInt(inputNumber.value);
  console.log(number);

  if (number === randomNumber) {
    trackTest.innerHTML = ("¡Has ganado campeona 🥳!");

  }

  else if (number === '') {
    trackTest.innerHTML = ("Escribe un número, chavala 😒");
  }

  else if (number > 100) {
    trackTest.innerHTML = ("El número debe estar entre 0 y 100 🤨");
  }

  else if (number < 1) {
    trackTest.innerHTML = ("El número debe estar entre 0 y 100 🤨");
  }

  else if (number > randomNumber) {
    trackTest.innerHTML = ("Demasiado alto 😚");
  }

  else if (number < randomNumber) {
    trackTest.innerHTML = ("Demasiado bajo 🤪");
  }
  else {
    trackTest.innerHTML = "Debes escribir un número entre 1 y 100 😠"
  }
  return number;
}

// CONTADOR
function counterNumber() {
  count = count + 1;
  counter.innerHTML = ("Número de intentos: " + count);
  return count;
}

//EVENTO
function handleClickBtn(event) {
  event.preventDefault();
  bringInputValue();
  counterNumber();
}

btn.addEventListener("click", handleClickBtn);



