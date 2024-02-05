import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersApp from "./UsersApp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
