import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import LoginPage from "./auth/pages/LoginPage";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const { isAuth, isLoginLoading } = useSelector((state) => state.auth);

  return (
    <>
      {isLoginLoading && (
        <div className="container my-4 text-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoginLoading && (
        <Routes>
          {isAuth ? (
            <>
              <Route path="*" element={<UserRoutes />} />
            </>
          ) : (
            <>
              <Route path="*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      )}
    </>
  );
};
