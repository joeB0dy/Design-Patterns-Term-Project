//Gabriel - LockScreen Component, Routing
//Samuel - Routing, Signup, Login, Password Gen Component.
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/login";
import MainPage from "./Pages/MainPage/main";
import SignUp from "./Pages/SignUp/SignUp"
import React, { useState, useEffect } from 'react';
import LockScreen from "react-lock-screen";
import PasswordGenComponent from "./components/passwordGenComponent";


export default function App() {
  const [showForm, setShowForm] = useState(true); // State to control form visibility
 
  // Function to toggle the form visibility
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
};

  const getLockScreen = setLock => {    //Gabriel.
    return(
      <div className = "react-lock-screen__ui">
        <p>Screen has been locked</p>
        <button onClick={()=>setLock(false)}>unlock</button>
      </div>
    )
  };

  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Express server
    fetch('http://localhost:8081/api/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("Error fetching data", err));
});

  return (
    <div className="App">
      <LockScreen timeout = {250000} ui={getLockScreen}>     
      <h1>MyPass Password Master System</h1>
      <button onClick={() => navigate("/login")}>Login Page </button>
      <button onClick={() => navigate("/")}>Home </button>
      
      <div>
            <button onClick={toggleFormVisibility}>
                {showForm ? 'Hide Logins' : 'Show Logins'}
            </button>

            {showForm && (
                <div>
                    <h1>Data from Server</h1>
                    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                </div>
            )}
        </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup/passgen" element={<PasswordGenComponent/>}/>
      </Routes>
      </LockScreen>
    </div>
    
  );
}
