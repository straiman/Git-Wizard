import Validation from "./validation.js";

let backBtn;
let nextBtn;
let city;
let street;
let num;

function loadElements() {
  backBtn = document.getElementById("backBtn");
  nextBtn = document.getElementById("nextBtn");
  city = document.getElementById("wiz-city");
  street = document.getElementById("wiz-street");
  num = document.getElementById("wiz-number");
}

loadElements();

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", checkRequired);

function goBackPage() {
  location = "./personal-details.html";
}

function goNextPage() {
  location = "./miscellaneous.html";
}

function checkRequired() {
  if (
    Validation.isRequired(city.value) &&
    Validation.isRequired(street.value)
  ) {
    goNextPage();
  }
}
