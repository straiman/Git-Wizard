import Validation from "./validation.js";
import Storage from "./storage.js";

const wname = document.getElementById('wiz-name');
const email = document.getElementById('wiz-email');
const bday = document.getElementById('wiz-birthdate');

const city = document.getElementById('wiz-city');
const street = document.getElementById('wiz-street');
const number = document.getElementById('wiz-number');

const storageKey = 'wiz-user';

const user = {
    name: '',
    email: '',
    bday: '',
    address: '',
    image: '',
    hobbies: ''
};