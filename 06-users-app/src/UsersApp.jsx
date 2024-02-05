import LoginPage from "./auth/pages/LoginPage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes.jsx";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext.jsx";

function UsersApp() {
  
  const { login } = useContext(AuthContext);

  return (
    <Routes>
      {login.isAuth ? (
        <>
          <Route
            path="*"
            element={<UserRoutes />}
          />
        </>
      ) : (
        <>
          <Route path="*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default UsersApp;
