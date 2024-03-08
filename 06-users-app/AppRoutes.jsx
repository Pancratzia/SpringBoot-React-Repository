import { useContext } from "react";
import { AuthContext } from "./src/auth/context/AuthContext";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UserRoutes from "./src/routes/UserRoutes";
import LoginPage from "./src/auth/pages/LoginPage";
import { Navigate } from "react-router-dom";

export const AppRoutes = () => {
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