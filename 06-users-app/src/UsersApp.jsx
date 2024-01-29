import { useReducer, useState } from "react";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

function App() {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {

    let type;

    if (userSelected.id !== 0) {
      type = "UPDATE_USER";
    } else {
      type = "ADD_USER";
    }

    dispatch({ type, payload: user });
    setUserSelected(initialUserForm);
  };

  const handlerRemoveUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  const handlerUserSelectedForm = (user) => {
    setUserSelected({ ...user });
  };

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
