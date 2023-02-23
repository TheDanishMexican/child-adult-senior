"use strict";

window.addEventListener("load", start);

let age = 66;

function start() {
  adultOrChildOrSenior();
}

function adultOrChildOrSenior() {
  if (age > 65) {
    isSenior();
  } else if (age >= 18) {
    isAdult();
  } else {
    isChild();
  }
}

function isAdult() {
  console.log("Du er voksen");
  document.querySelector("#agetext").textContent = "Du er voksen";
}

function isChild() {
  console.log("Du er et barn");
  document.querySelector("#agetext").textContent = "Du er et barn";
}

function isSenior() {
  console.log("Du er senior");
  document.querySelector("#agetext").textContent = "Du er en nisse";
}
