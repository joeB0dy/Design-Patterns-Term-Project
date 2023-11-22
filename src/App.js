import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/login";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      ;<h1>MyPass Password Master System</h1>
      <button onClick={() => navigate("/login")}>Login Page </button>
      <button onClick={() => navigate("/")}>Home </button>
    </div>
  );
}
