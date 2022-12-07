class Storage {
    //This method check if the localstorage have some value with the key parameter
    isStored(key) {
        if (localStorage.getItem(key) === null) {
            return false;
        }
        return true;
    }

    //Method for save a value, into the localstorage
    store(key, value) {
        if(localStorage[`${key}`]) {
            const userInfo = JSON.parse(localStorage.getItem(key));
            const finalObject = Object.assign(userInfo, value);
            localStorage.setItem(key, JSON.stringify(finalObject));
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }    

    //Method to load a value from the localstorage
    load(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    //Method to delete informacion from the localstorage
    delete(key) {
        localStorage.removeItem(key);
    }
}
export default Storage;
