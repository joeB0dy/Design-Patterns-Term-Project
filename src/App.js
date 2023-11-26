import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/login";
import MainPage from "./Pages/MainPage/main";
import SignUp from "./Pages/SignUp/SignUp"
export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">

      <h1>MyPass Password Master System</h1>
      <button onClick={() => navigate("/login")}>Login Page </button>
      <button onClick={() => navigate("/")}>Home </button>
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
   
    </div>
    
  );
}
