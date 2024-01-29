import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

function App() {

  const { users, userSelected, initialUserForm, handlerAddUser, handlerRemoveUser, handlerUserSelectedForm } = useUsers();

  return (
    <>
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col-6">
            <UserForm
              handlerAddUser={handlerAddUser}
              initialUserform={initialUserForm}
              userSelected={userSelected}
            />
          </div>
          <div className="col-6">
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
