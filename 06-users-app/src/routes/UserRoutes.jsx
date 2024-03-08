import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const UserRoutes = () => {
  const { login } = useContext(AuthContext);

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />

          {(login.isAuth && login.isAdmin) && (
            <>
              <Route path="users/register" element={<RegisterPage />} />
              <Route path="users/edit/:id" element={<RegisterPage />} />
            </>
          )}

          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
    </>
  );
};

export default UserRoutes;
