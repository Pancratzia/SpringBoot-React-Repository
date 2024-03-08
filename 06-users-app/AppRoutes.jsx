
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UserRoutes from "./src/routes/UserRoutes";
import LoginPage from "./src/auth/pages/LoginPage";
import { Navigate } from "react-router-dom";
import { useAuth } from "./src/auth/hooks/useAuth";

export const AppRoutes = () => {
    const { login } = useAuth();

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