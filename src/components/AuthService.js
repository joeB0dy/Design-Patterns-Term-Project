import axios from "axios";
let instance;
let user = { 
  email:"",
  password: "",
  sec1: "",
  sec2:"",
  sec3:""
}
class AuthService {


  constructor() {
    if (instance) { //fail condition if instance exists.
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

    getInstance() {

    return instance;
  }
  
    register(email, password, secQ1, secQ2, secQ3) {
         
      // Store user data securely
      this.user = { email, password, secQ1, secQ2, secQ3 };
      //upload to backend as post command
      return axios.post('http://localhost:8081/api/register',{
          email: email,
          password: password,
          secQ1: secQ1,
          secQ2: secQ2,
          secQ3, secQ3
    });
    
    }
  
  login(username, password) {
      if (this.user.email == username && this.user.password == password) {
        console.log("Login Successful")
        this.user.isLoggedIn = true;
        return true;
      }
      console.log("LOGIN FAILED")
      return false;
    }

    isLoggedIn() {
      // Check if a user is logged in
      return this.user !== null;
    }
  
    getUser() {
      // Return the logged-in user's details
      return this.user;
    }
  
    logout() {
      // Implement logout logic
      this.user = null;
      // Perform cleanup actions if necessary
      this.user.isLoggedIn = false;
    }
  }
  
  export default AuthService;
  
  /*
          try {
            const response = await fetch('http://localhost:8081/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Login error', error);
            return { success: false, message: 'Login failed' };
        }
  */