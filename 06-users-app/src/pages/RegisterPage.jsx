import { useState } from "react";
import UserForm from "../components/UserForm"
import PropTypes from "prop-types"

const RegisterPage = ({ handlerAddUser, initialUserForm }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm);

  return (
    <div className="container my-4">
        <h4>Registro de Usuarios</h4>
        <div className="row">
            <div className="col">
                <UserForm handlerAddUser={handlerAddUser} initialUserform={initialUserForm} userSelected={userSelected} />
            </div>
        </div>
        
    </div>
  )
}

export default RegisterPage;

RegisterPage.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired
}