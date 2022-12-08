import Storage from "./storage.js";

const name = document.querySelector('#nameSummary');
const email = document.querySelector('#emailSummary');
const birth = document.querySelector('#birthDateSummary');
const city = document.querySelector('#citySummary');
const street = document.querySelector('#streetSummary'); // street/number
const img = document.querySelector('#imgSummary');
const hobbies = document.querySelector('#hobbiesSummary');
const backBtn = document.querySelector('#backBtn')
const submitButton = document.querySelector('#submitBtn');


const storage = new Storage();
let user;
const storageKey = 'wiz-user';

if(storage.isStored(storageKey)){
    user = storage.load(storageKey);
}

name.textContent += ` ${user.name}`;
email.textContent += ` ${user.email}`;
birth.textContent += ` ${user.bday}`;
city.textContent +=  ` ${user.city}`;
street.textContent += ` ${user.street}, ${user.number ? user.number : ''}`;
img.src = user.image;
if(user.hobbies){
    hobbies.textContent += `${user.hobbies}`
}else{
    hobbies.textContent = '';
}

backBtn.addEventListener('click', () => {
    location = './miscellaneous.html';
})
submitButton.addEventListener('click', () => {
    storage.delete(storageKey);
    location = './index.html';
})



