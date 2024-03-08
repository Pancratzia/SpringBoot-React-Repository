
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import LoginPage from "./auth/pages/LoginPage";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const {isAuth } = useSelector((state) => state.auth);

    return (
      <Routes>
        {isAuth ? (
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