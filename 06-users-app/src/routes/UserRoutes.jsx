import { Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "../pages/UsersPage.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import PropTypes from "prop-types";
import RegisterPage from "../pages/RegisterPage.jsx";
import { useUsers } from "../hooks/useUsers.js";

const UserRoutes = ({ login, handlerLogout }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers();

  return (
    <>
      <Navbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialUserForm={initialUserForm}
              visibleForm={visibleForm}
              handlerAddUser={handlerAddUser}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
              handlerOpenForm={handlerOpenForm}
              handlerCloseForm={handlerCloseForm}
            />
          }
        />
        <Route path="users/register" element={<RegisterPage handlerAddUser={handlerAddUser} initialUserForm={initialUserForm} />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};

export default UserRoutes;

UserRoutes.propTypes = {
  login: PropTypes.object.isRequired,
  handlerLogout: PropTypes.func.isRequired,
};
