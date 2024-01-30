import { useUsers } from "../hooks/useUsers";
import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";

const UsersPage = () => {
  
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
    {visibleForm && (
        <UserModalForm 
          handlerAddUser={handlerAddUser}
          initialUserForm={initialUserForm}
          userSelected={userSelected}
          handlerCloseForm={handlerCloseForm}
          visibleForm={visibleForm}
        />
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
