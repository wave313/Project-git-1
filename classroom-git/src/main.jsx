import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // ถ้ามี Tailwind หรือ CSS ปกติ
import Navbar from "./components/Navbar"; // นำเข้า Navbar ถ้ามี


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);