import { useEffect, useState } from "react";
import UserForm from "../components/UserForm"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom";

const RegisterPage = ({ handlerAddUser, initialUserForm, users = [] }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(() => {
      const user = users.find((user) => user.id === id) || initialUserForm;
      setUserSelected(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

  return (
    <div className="container my-4">
        <h4>{userSelected.id > 0 ? "Edit User" : "New User"}</h4>
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
  initialUserForm: PropTypes.object.isRequired,
  users: PropTypes.array,
}