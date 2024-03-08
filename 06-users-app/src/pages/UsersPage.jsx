import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

const UsersPage = () => {
  const { visibleForm, handlerOpenForm } = useContext(UserContext);

  const { login } = useContext(AuthContext);

  return (
    <>
      {visibleForm && <UserModalForm />}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col">
            {login.isAdmin && (
              <button
                onClick={handlerOpenForm}
                className="btn btn-primary my-2"
              >
                Nuevo Usuario
              </button>
            )}
            <UsersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
