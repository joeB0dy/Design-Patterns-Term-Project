export class passwordDirector{     //class will be called to direct the building of password


    constructPassword(passwordBuilder, len) {
        passwordBuilder.buildLength(len);
        passwordBuilder.buildCapital();
        passwordBuilder.buildLowercase();
        passwordBuilder.buildNumbers();
        passwordBuilder.buildSpecialChars();
    }

}
export class PasswordBuilder{  //interface.
constructor() {
    this.length = 8; // Default password length
    this.uppercase = false;     //used boolean for generatePass to include all values for uppercase etc.
    this.lowercase = false;
    this.numbers = false;
    this.specialChars = false;
   // this.masterPassword = "";
}
buildLength(len) {}
buildCapital() {}
buildLowercase() {}
buildNumbers() {}
buildSpecialChars() {}

// Generate password (to be implemented in concrete builders)
generatePass() {}
}//end of Builder Class

class ConcreteChecker extends PasswordBuilder { //implement to check current entry of password.

}
export class ConcreteSimple extends PasswordBuilder{   //implement

    constructor(){
        super();    //calls superclass constructor.
    }
    buildLength(len = 8) {
        this.length = len;
        return this;
    }
    buildCapital() {
        this.uppercase = true;
        return this;
    }
    buildLowercase() {
        this.lowercase = true;
        return this;
    }
    buildNumbers() {
        this.numbers = true;        //how would this ultimately connect to product.
    }
    buildSpecialChars(){
        this.specialChars = true;
    }

    generatePass(){
        //this is what the charset range will allow for if conditions are met.
        let charset = "";
        if (this.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    //list of 
        if (this.lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (this.numbers) charset += "0123456789";
        if (this.specialChars) charset += "!@#$%^&*()_+[]{}|;':,.<>?";
    
        let password = "";
        for (let i = 0; i < this.length; i++) {     //iterate for password length amount of times.
          const randomIndex = Math.floor(Math.random() * charset.length + 1);//random index based on charset truth values. 
          password += charset.charAt(randomIndex);  //
        }

        return password;
    }
}