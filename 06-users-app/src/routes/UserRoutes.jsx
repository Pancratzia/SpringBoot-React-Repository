import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import { UserProvider } from "../context/UserProvider.jsx";

const UserRoutes = () => {

  return (
    <>
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route path="users" element={<UsersPage />} />

          <Route path="users/register" element={<RegisterPage />} />

          <Route path="users/edit/:id" element={<RegisterPage />} />

          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default UserRoutes;

