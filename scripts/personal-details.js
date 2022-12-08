import Validation from "./validation.js";
import Storage from "./storage.js";

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const name = document.getElementById("wiz-name");
const email = document.getElementById("wiz-email");
const birthDate = document.getElementById("wiz-birthdate");

let year;
let month;
let day;

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", checkRequired);

const storage = new Storage();

if(storage.isStored()) {
    const lastInfo = storage.load();
  
    if(Object.hasOwn(lastInfo, 'name')) {
      name.value = lastInfo.name;
    }
    if(Object.hasOwn(lastInfo, 'email')) {
      email.value = lastInfo.email;
    }
    if(Object.hasOwn(lastInfo, 'bdate')) {
      birthDate.value = lastInfo.bdate;
    }
  }

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
    const newObject = {
        name: name.value,
        email: email.value,
        bdate: birthDate.value
      }
    
      storage.store(newObject);
    location = "./address.html";
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
