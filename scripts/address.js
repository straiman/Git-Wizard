import Validation from "./validation.js";
import Storage from "./storage.js";

let backBtn;
let nextBtn;
let city;
let street;
let num;
const storage = new Storage();
const lastInfo = storage.load();

function loadElements() {
  backBtn = document.getElementById("backBtn");
  nextBtn = document.getElementById("nextBtn");
  city = document.getElementById("wiz-city");
  street = document.getElementById("wiz-street");
  num = document.getElementById("wiz-number");
}

loadElements();
checkIfSaved();

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", checkRequired);

if (storage.isStored()) {
  if (Object.hasOwn(lastInfo, "city")) {
    city.value = lastInfo.city;
  }
  if (Object.hasOwn(lastInfo, "street")) {
    street.value = lastInfo.street;
  }
  if (Object.hasOwn(lastInfo, "number")) {
    num.value = lastInfo.number;
  }
}

function checkIfSaved() {
  if (
    !Object.hasOwn(lastInfo, "name") &&
    !Object.hasOwn(lastInfo, "email") &&
    !Object.hasOwn(lastInfo, "birthdate")
  ) {
    location = "./index.html";
  }
}

function goBackPage() {
  location = "./personal-details.html";
}

function goNextPage() {
  const newObject = {
    city: city.value,
    street: street.value,
    number: num.value,
  };

  storage.store(newObject);
  location = "./miscellaneous.html";
}

function checkRequired() {
  if (
    Validation.isRequired(city.value) &&
    Validation.lengthValidation(city.value, 20) &&
    Validation.isRequired(street.value) &&
    Validation.lengthValidation(street.value, 20)
  ) {
    if (num.value) {
      Validation.naturalNumberValidation(num.value);
    }
    goNextPage();
  }
}
