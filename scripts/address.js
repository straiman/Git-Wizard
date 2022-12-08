import Validation from "./validation.js";

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const city = document.getElementById("wiz-city");
const street = document.getElementById("wiz-street");
const num = document.getElementById("wiz-number");

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
