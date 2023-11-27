import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/login";
import MainPage from "./Pages/MainPage/main";
import SignUp from "./Pages/SignUp/SignUp"
import React, { useState, useEffect } from 'react';


export default function App() {
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

      <h1>MyPass Password Master System</h1>
      <button onClick={() => navigate("/login")}>Login Page </button>
      <button onClick={() => navigate("/")}>Home </button>
      <div>
            <h1>Data from Server</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
        
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
   
    </div>
    
  );
}
