import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import { useSelector } from "react-redux";

const UserRoutes = () => {
  const { isAdmin} = useSelector((state) => state.auth);

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />

          {(isAdmin) && (
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
