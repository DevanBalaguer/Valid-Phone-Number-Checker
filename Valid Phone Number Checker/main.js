function telephoneCheck(str) {

    return /^1?[\s]?[(][\d]{3}[)][-\s]?[\d]{3}[-\s]?[\d]{4}$|^1?[-\s]?[\d]{3}[-\s]?[\d]{3}[-\s]?[\d]{4}$/.test(str);
   }
   
   
   console.log(telephoneCheck("(275)76227382"));