import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

function App() {
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
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          {visibleForm && (
            <div className="col">
              <UserForm
                handlerAddUser={handlerAddUser}
                initialUserform={initialUserForm}
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          )}

          <div className="col">
            {!visibleForm && (
              <button onClick={handlerOpenForm} className="btn btn-primary my-2">Nuevo Usuario</button>
            )}
            <UsersList
              users={users}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
