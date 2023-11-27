class AuthService {
    static instance = null;
    user = null;
    constructor() {
      if (instance){alert("USER STILL LOGGED IN")}
     
    }
    static getInstance() {
      if (AuthService.instance === null) {
        AuthService.instance = new AuthService();
        
      }
      return AuthService.instance;
    }
  
    register(email, password, securityQuestions) {
      // Implement registration logic
      this.email = email
      this.password = password
      // Store user data securely
      // Return a success or error message
    }
  
    async login(username, password) {
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
    }
  }
  
  export default AuthService;
  