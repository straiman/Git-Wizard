import Validation from "./validation.js";

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById('wiz-image');
/*
const chess = document.getElementById('chess');
const movies = document.getElementById('movies');
const sports = document.getElementById('sports');
const cars = document.getElementById('cars');
const dolls = document.getElementById('dolls');
*/
backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", checkRequired);

function goBackPage() {
  location.href = "address.html";
}

function goNextPage() {
  location.href = "summary.html";
}

function checkRequired() {
  if (
    Validation.urlValidation(image.value) 
  ) {
    goNextPage();
  }
}