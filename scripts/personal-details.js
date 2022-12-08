import Validation from "./validation.js";

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const name = document.getElementById("wiz-name");
const email = document.getElementById("wiz-email");
const birthDate = document.getElementById("wiz-birthdate");

let year;
let month;
let day;

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", goNextPage);

birthDate.addEventListener("change", (e) => {
  const arr = e.target.value.split("-");
  year = arr[0];
  month = arr[1];
  day = arr[2];
});

function goBackPage() {
  location = "./index.html";
}

function goNextPage() {
  location = "./address.html";
  console.log(birthDate.value);
}

function checkRequired() {
  if (
    Validation.nameValidation(name.value) &&
    Validation.lengthValidation(name.value, 20) &&
    Validation.emailValidation(email.value) &&
    Validation.birthValidation(year, month, day)
  ) {
    goNextPage();
  }
}
