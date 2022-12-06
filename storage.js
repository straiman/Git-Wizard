class Storage {
    isStored(key) {
        if (localStorage.getItem(key) === null) {
            return false;
        }
        return true;
    }

    store(key, value) {
        if(localStorage.key) {
            const userInfo = JSON.parse(localStorage.getItem(key));
            const finalObject = Object.assign(userInfo, value);
            localStorage.setItem(key, JSON.stringify(finalObject));
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }    

    load(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    

    delete(key) {
        localStorage.removeItem(key);
    }
}
