import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UsersPage = () => {

  const {
    users,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    handlerOpenForm,
  } = useContext(UserContext);

  return (
    <>
    {visibleForm && (
        <UserModalForm />
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col">
            <button onClick={handlerOpenForm} className="btn btn-primary my-2">
              Nuevo Usuario
            </button>

            <UsersList
              users={users}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default UsersPage;