import { Routes, Route, Navigate } from "react-router-dom"
import UsersPage from "../pages/UsersPage.jsx"
import Navbar from "../components/layout/Navbar.jsx"
import PropTypes from "prop-types"

const UserRoutes = ({ login, handlerLogout}) => {
  return (
    <>

        <Navbar login={login} handlerLogout={handlerLogout}  />
        <Routes>

            <Route path="users" element={<UsersPage />} />
            <Route path="/" element={<Navigate to="/users" />} />

        </Routes>
    </>
  )
}

export default UserRoutes;

UserRoutes.propTypes = {
    login: PropTypes.object.isRequired,
    handlerLogout: PropTypes.func.isRequired
}