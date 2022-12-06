class Storage {
    isStored(key) {
        if (localStorage.getItem(key) === null) {
            return false;
        }
        return true;
    }
}