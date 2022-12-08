class Validation {
  /**
   * Method checks if the length of the passed value > 0 and returns true
   * otherwise returns false;
   * @param inp - string/integer
   * @returns {boolean}
   */
  static isRequired(inp) {
    return `${inp}`.length > 0;
  }

  /**
   * Method returns true if the passed string contains 2
   * words and length of each word >= 2 otherwise returns false;
   * @param inp - string
   * @returns {boolean}
   */
  static nameValidation(inp) {
    const nameArr = inp.split(" ");

    if (nameArr.length < 1 || nameArr.length > 2) {
      return false;
    }
    for (let i = 0; i < nameArr.length; i++) {
      if (nameArr[i].length < 2) {
        return false;
      }
    }
    return true;
  }

  /**
   * Method checks if the passed e-mail is valid, returns true if
   * yes otherwise returns false.
   * @param inp - string
   * @returns {boolean}
   */
  static emailValidation(inp) {
    return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inp);
  }

  /**
   * Method  returns true if the length of the passed input <= passed length (e.g. 20);
   * @param inp - string/integer
   * @param length - integer
   * @returns {boolean}
   */
  static lengthValidation(inp, length) {
    return `${inp}`.length <= length;
  }

  /**
   * Method returns true if the passed number is natural;
   * @param inp - integer/string
   * @returns {boolean}
   */
  static naturalNumberValidation(inp) {
    const pattern = /^(0|([1-9]\d*))$/;
    return pattern.test(inp);
  }

  /**
   * Method returns true if the user's age >= 18 otherwise false;
   * @param year - integer/string
   * @param month - integer/string
   * @param day - integer/string
   * @returns {boolean}
   */
  static birthValidation(val) {
    const date1 = new Date(val);
    const date2 = Date.now();
    const age = (date2 - date1) / 31536000000;
    return age >= 18;
  }


  /**
   * Method returns true if the URL provided by user is valid otherwise false;
   * @param inp - string
   * @returns {boolean}
   */
  static urlValidation(inp) {
    try {
      new URL(inp);
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default Validation;

