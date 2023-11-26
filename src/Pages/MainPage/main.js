import React from "react";
import { useNavigate } from "react-router-dom";
function MainPage() {
  //variables and functions
  const navigate = useNavigate();
  return (
    <div>
      <h1> WELCOME TO MAINPAGE</h1>
      <button onClick={() => navigate("/")}>LOGOUT </button>
    </div>
  );
}

export default MainPage;
