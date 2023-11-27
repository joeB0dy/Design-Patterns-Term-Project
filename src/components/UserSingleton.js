
let instance;
var myInstance = (function() {
    var privateVar = '';
  
    function privateMethod () {
      // ...
    }
  
    return { // public interface
      publicMethod1: function () {
        // All private members are accessible here
      },
      publicMethod2: function () {
      }
    };
  })();
class User {
    constructor() {
    if (instance){alert("ERROR, User still logged in.");}
    this.user = user;
    instance = this;
    }

    getInstance() {
        
    }
}
//*/