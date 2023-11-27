import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function MainPage() {
  //variables and functions
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(true); // State to control form visibility
 
  // Function to toggle the form visibility
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
};
  return (
    <div>
      <h1> WELCOME TO MAINPAGE</h1>
      <p>Look at all this sensitive information below...</p>

<div>
<button onClick={toggleFormVisibility}>
                {showForm ? 'Hide Sensitive Info' : 'Show Sensitive Info'}
            </button>
            {showForm && (
      <ul>
        <li>Username:</li>
        <li>Password:</li>
        <li>Credit Card no:</li>
        <li>Drivers License:</li>
        <li>Passport Number:</li>
      </ul>
            )}
      </div>
      <button onClick={() => navigate("/")}>LOGOUT </button>
    </div>
  );
}

export default MainPage;
