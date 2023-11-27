class AuthService {
  static instance = null;
  user = null;
isLoggedIn = false;

  constructor() {
    if (AuthService.instance) {
      throw new Error("You can only create one instance!");
    }
  }

  static getInstance() {
    if (AuthService.instance === null) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }
  
    register(email, password, secQ1, secQ2, secQ3) {
      // Implement registration logic
   
      // Store user data securely
      this.user = { email, password, secQ1, secQ2, secQ3 };
      // Return a success or error message
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