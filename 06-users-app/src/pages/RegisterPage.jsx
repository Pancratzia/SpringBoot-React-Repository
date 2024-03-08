import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const RegisterPage = () => {

  const { initialUserForm, users = [] } = useUsers();
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user =
        users.find((user) => user.id === parseInt(id)) || initialUserForm;
      setUserSelected(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container my-4">
      <h4>{parseInt(id) > 0 ? "Edit User" : "New User"}</h4>
      <div className="row">
        <div className="col">
          <UserForm userSelected={userSelected} />
        </div>
      </div>
    </div>
  );
  
};

export default RegisterPage;
