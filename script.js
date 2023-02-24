"use strict";

window.addEventListener("load", start);

function start() {
  console.log("Page loaded");
  adultOrChildOrSenior();
}

function adultOrChildOrSenior() {
  let age = 73;

  if (age > 72) {
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
