import Storage from "./storage.js";

let name;
let email;
let birth;
let city;
let street; // street/number
let img;
let hobbies;
let backBtn;
let submitButton;

function loadElements() {
    name = document.querySelector('#nameSummary');
    email = document.querySelector('#emailSummary');
    birth = document.querySelector('#birthDateSummary');
    city = document.querySelector('#citySummary');
    street = document.querySelector('#streetSummary'); // street/number
    img = document.querySelector('#imgSummary');
    hobbies = document.querySelector('#hobbiesSummary');
    backBtn = document.querySelector('#backBtn')
    submitButton = document.querySelector('#submitBtn');
}

function getSummaryData(storageKey = 'wiz-user'){
    const storage = new Storage();
    let user;

    if(storage.isStored(storageKey)){
        user = storage.load(storageKey);
    }
    return user;
}

function fillElements(data){
    name.textContent += ` ${data.name}`;
    email.textContent += ` ${data.email}`;
    birth.textContent += ` ${data.bday}`;
    city.textContent +=  ` ${data.city}`;
    street.textContent += ` ${data.street}, ${data.number ? data.number : ''}`;
    img.src = data.image;
    if(data.hobbies){
        hobbies.textContent += `${data.hobbies}`
    }else{
        hobbies.textContent = '';
    }
}

function run() {
    const data = getSummaryData()
    if(!data) {
      //redirect to welcome page
        location = './index.html'
    }

    loadElements()
    fillElements(data)

    backBtn.addEventListener('click', () => {
        location = './miscellaneous.html';
    })
    submitButton.addEventListener('click', () => {
        storage.delete(storageKey);
        location = './index.html';
    })
}

run()



