class Validation{
    constructor(){

    }

    static isRequired(inp){
        if(`${inp}`.length > 0){
            return true;
        }

        return false;
    }

    static nameValidation(val) {
        const nameArr = val.split(' ');
        console.log(nameArr)

        if(nameArr.length < 2 || nameArr.length > 2){
            return false
        }
        for (let i = 0; i < nameArr.length; i++) {
            if(nameArr[i].length < 2){
                return false;
            }
        }
        return true;
    }

    static emailValidation(val){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            return true;
        }
        return false;
    }

    static lengthUpTo20ChValidation(val){
        if(`${val}`.length <= 20){
            return true;
        }

        return false;
    }

    static naturalNumberValidation(val){
        const pattern = /^(0|([1-9]\d*))$/;
        return pattern.test(val);
    }

}

export default Validation;
