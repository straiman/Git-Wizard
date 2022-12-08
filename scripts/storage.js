class Storage {
    constructor() {
        this.key = 'wiz-user'
    }
    //This method check if the localstorage have some value with the key parameter
    isStored() {
        if (localStorage.getItem(this.key) === null) {
            return false;
        }
        return true;
    }

    //Method for save a value, into the localstorage
    store(value) {
        if(localStorage[`${this.key}`]) {
            const userInfo = JSON.parse(localStorage.getItem(this.key));
            const finalObject = Object.assign(userInfo, value);
            localStorage.setItem(this.key, JSON.stringify(finalObject));
        } else {
            localStorage.setItem(this.key, JSON.stringify(value));
        }
    }    

    //Method to load a value from the localstorage
    load() {
        return JSON.parse(localStorage.getItem(this.key));
    }

    //Method to delete informacion from the localstorage
    delete() {
        localStorage.removeItem(this.key);
    }

    //Method to return if a property already exists
    checkProperty(property) {
        const userInfo = JSON.parse(localStorage.getItem(this.key));
        if(userInfo[property]) {
            return true;
        }
        return false;
    }

    //Method to return a singular property
    getProperty(property) {
        const userInfo = JSON.parse(localStorage.getItem(this.key));
        return userInfo[property];
    }
}

export default Storage;