import LoginPage from "./auth/pages/LoginPage.jsx";
import { useAuth } from "./auth/hooks/useAuth.js";
import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./routes/userRoutes.jsx";

function UsersApp() {
  const { login, handlerLogin, handlerLogout } = useAuth();

  return (
    <Routes>
      {login.isAuth ? (
        <>
          <Route
            path="*"
            element={<UserRoutes login={login} handlerLogout={handlerLogout} />}
          />
        </>
      ) : (
        <>
          <Route path="*" element={<LoginPage handlerLogin={handlerLogin} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default UsersApp;
