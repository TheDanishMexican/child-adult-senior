"use strict";

window.addEventListener("load", start);

let age = 0;

function start() {
  console.log("Page loaded");

  document.querySelector("#submit").addEventListener("click", submitAge);
}

function adultOrChildOrSenior() {
  if (age > 72) {
    isSenior();
  } else if (age >= 18) {
    isAdult();
  } else {
    isChild();
  }
}

function submitAge() {
  console.log("age is submitted");
  let input = document.querySelector("#name");
  age = input.value;
  let submit = document.querySelector("#submit");
  adultOrChildOrSenior();
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
