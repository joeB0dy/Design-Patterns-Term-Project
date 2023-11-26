import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
function SignUp() {
  //variables and functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFlag, setShowFlag] = useState(false); // State to manage flag notification

  const displayContent = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setShowFlag(true); // Set flag to display notification
    // You can trigger email verification or any necessary action here
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

          <select name="questions" id="q1">
            <option value="Mama">"What is your mother's maiden name?"</option>
            <option value="Pet">
              "What is the name of your favorite pet?"
            </option>
            <option value="School">"What high school did you attend"</option>
            <option value="Child">
              "What was your favorite food as a child"
            </option>
          </select>
          <input type="SecQ1" placeholder="Enter Answer" />
        </div>

        <div className="SECQ2">
          <label for="cars">Security Question 2:</label>

          <select name="questions" id="q2">
            <option value="Mama">"What is your mother's maiden name?"</option>
            <option value="Pet">
              "What is the name of your favorite pet?"
            </option>
            <option value="School">"What high school did you attend"</option>
            <option value="Child">
              "What was your favorite food as a child"
            </option>
          </select>
          <input type="SecQ1" placeholder="Enter Answer" />
        </div>
        <div className="SECQ3">
          <label for="cars">Security Question 3:</label>
          <select name="questions" id="q3">
            <option value="Mama">"What is your mother's maiden name?"</option>
            <option value="Pet">
              "What is the name of your favorite pet?"
            </option>
            <option value="School">"What high school did you attend"</option>
            <option value="Child">
              "What was your favorite food as a child"
            </option>
          </select>
          <input type="SecQ1" placeholder="Enter Answer" />
        </div>
        <div>
          <button onClick={displayContent}>SIGN UP </button>
          <p>YOU AGREE TO OUR TERMS AND CONDITIONS. </p>
        </div>
        {showFlag && (
        <div className="flag-notification">
          alert("Account Made, verification send to email.")
        </div>
      )}
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
