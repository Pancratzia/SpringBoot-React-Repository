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
      {visibleForm && (
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" style={{ display: visibleForm ? "block" : "" }} tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id ? "Edit User" : "New User"}
                  </h5>
                </div>

                <div className="modal-body">
                  <UserForm
                    handlerAddUser={handlerAddUser}
                    initialUserform={initialUserForm}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col">
            {!visibleForm && (
              <button
                onClick={handlerOpenForm}
                className="btn btn-primary my-2"
              >
                Nuevo Usuario
              </button>
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
