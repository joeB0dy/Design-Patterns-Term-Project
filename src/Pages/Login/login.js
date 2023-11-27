import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import AuthService from "../../components/AuthService";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/login', {
          username, password
      });

      if (response) {
          // Login successful
          navigate("/main");
      } else if (username == "asdf"){
          // Credentials are incorrect, show an error message
          alert(response.message);
      }
  } catch (error) {
      // Handle errors (e.g., server error, network error)
      console.error("Login error", error);
      alert("An error occurred while trying to log in.");
  }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label> Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        </form>
        <div> 
          <Link to="/signup">Register New Account </Link>
      </div>
    </div>

  );
}

export default Login;


/*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      navigate("/main"); //change this
    } else {
      alert("Invalid username or password");
    }
  };
 */