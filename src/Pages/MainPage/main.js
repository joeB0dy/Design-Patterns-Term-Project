import React from "react";
import { useNavigate } from "react-router-dom";
function MainPage() {
  //variables and functions
  const navigate = useNavigate();
  return (
    <div>
      <h1> WELCOME TO MAINPAGE</h1>
      <p>Look at all this sensitive information below...</p>
      <button onClick={() => navigate("/")}>LOGOUT </button>
    </div>
  );
}

export default MainPage;
