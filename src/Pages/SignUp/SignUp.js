import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import AuthService from "../../components/AuthService";
import axios from "axios";
function SignUp() {
  //variables and functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sec1, setSec1] = useState("");
  const [sec2, setSec2] = useState("");
  const [sec3, setSec3] = useState("");

  const register = async (email, password, secQ1, secQ2, secQ3) => {
    try {
      const response = await axios.post('http://localhost:8081/api/register', {
        email: email,
        password: password,
        secQ1: secQ1,
        secQ2: secQ2,
        secQ3: secQ3
      });
      console.log(response);
      alert("Account Made, verification send to email.");
      return response;
    } catch (error) {
      console.error('Registration error', error);
      alert("Registration failed.");
    }
  }

  const displayContent = async (e) => {
    e.preventDefault();
    console.log(email," ", password," ", sec1," ",sec2," ",sec3);
   
    // Call the register method from AuthService
    await register(email, password, sec1, sec2, sec3);
    console.log(response); // Handle the response accordingly
    alert("Account Made, verification send to email.")
  };

  const sendDatabase = async () => {
    try{
      const userinput = await axios.post('http://localhost:8081/signup', {email, password, answer1, answer2, answer3});
      console.log(response.data);
    } catch(error){
      console.error('Error occurred', error);
    }
  };

  return (
    <div className="div-container">
      <h2>SIGNUP PAGE</h2>
      <form action="">
        <div className="email">
          <label htmlFor="email"> </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="Password">
          <label htmlFor="Password"> </label>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="SECQ1">
          <label for="cars">Security Question 1:</label>

          
            <label for="mama">"What is your mother's maiden name?"</label>
          <input type="SecQ1" onChange={(e) => setSec1(e.target.value)}
          placeholder="Enter Answer" />
        </div>

        <div className="SECQ2">
          <label for="cars">Security Question 2:</label>
          <label for="pet"> "What is the name of your favorite pet?"</label>
       
          <input type="SecQ2" onChange={(e) => setSec2(e.target.value)}
          placeholder="Enter Answer" />
        </div>

        <div className="SECQ3">
          <label for="cars">Security Question 3:</label>
          <label for="child">
              "What was your favorite food as a child"
            </label>
          <input type="SecQ1" onChange={(e) => setSec3(e.target.value)}
           placeholder="Enter Answer" />
        </div>
        <div>
          <button onClick={displayContent}>SIGN UP </button>
          <p>YOU AGREE TO OUR TERMS AND CONDITIONS. </p>
        </div>

      </form>
    </div>
  );


}
export default SignUp;
/*
            <div className ='SecQ1'>
            <label htmlFor ="SecQ1"> </label>
            <input type="SecQ1" placeholder="Enter First Security Question"/> 
            </div>
            <div className ='SecQ2'>
            <label htmlFor ="SecQ2"> </label>
            <input type="SecQ2" placeholder="Enter Second Security Question"/> 
            </div>
*/
