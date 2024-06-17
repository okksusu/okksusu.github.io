'use strict'
 
/******************************* FUNCTION definitions ******************************************/
const clearName = function (event) {
 console.log(username.id, username.value);
 username.value = username.defaultValue;
}
 
const updateGuess = function (event) {
 let element = event.currentTarget;
 console.log(element.id, element.value);
 guessOutput.value = element.value;
}
 
const checkForm = function (event) {
 event.preventDefault();
 if (username.value){
    success.classList.add( 'show' );
    error.classList.remove( 'show' );
 } else {
   error.classList.add( 'show' );
   success.classList.remove( 'show' );
   username.focus();
   // errorSound.volume = 0.5;
   // errorSound.play();
 }
};

/******************************* VARIABLE declarations ******************************************/
let peaForm = document.querySelector('#peaForm');
let username = document.querySelector('#username');
let clearButton = document.querySelector('#clearButton');
let guess = document.querySelector('#guess');
let guessOutput = document.querySelector('#guessOutput');
let error = document.querySelector('#error');
let success = document.querySelector('#success');
let errorSound = document.querySelector('#error-sound');
 
/******************************* SCRIPT initialisation ******************************************/
 
clearButton.addEventListener('click', clearName);
guess.addEventListener('input', updateGuess);
 
peaForm.addEventListener('submit', checkForm);