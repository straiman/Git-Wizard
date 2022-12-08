import Validation from "./validation.js";
import Storage from "./storage.js";

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById('wiz-image');

const chess = document.getElementById('chess');
const movies = document.getElementById('movies');
const sports = document.getElementById('sports');
const cars = document.getElementById('cars');
const dolls = document.getElementById('dolls');

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", checkRequired);

const storage = new Storage();

if(storage.isStored()) {
  const lastInfo = storage.load();

  image.value = lastInfo.image;

  if(Object.hasOwn(lastInfo, 'chess')) {
    chess.checked = true;
  }
  if(Object.hasOwn(lastInfo, 'movies')) {
    movies.checked = true;
  }
  if(Object.hasOwn(lastInfo, 'sports')) {
    sports.checked = true;
  }
  if(Object.hasOwn(lastInfo, 'cars')) {
    cars.checked = true;
  }
  if(Object.hasOwn(lastInfo, 'dolls')) {
    dolls.checked = true;
  }
}


function goBackPage() {
  location.href = "address.html";
}

function goNextPage() {
  const newObject = {
    img: image.value,
    chess: chess.value,
    movies: movies.value,
    sports: sports.value,
    cars: cars.value,
    dolls: dolls.value
  }

  storage.store(newObject);
  location.href = "summary.html";
}

function checkRequired() {
  if (
    Validation.urlValidation(image.value) 
  ) {
    goNextPage();
  }
}