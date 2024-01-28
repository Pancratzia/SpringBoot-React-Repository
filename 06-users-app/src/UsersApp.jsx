import { useReducer } from "react";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "Pancratzia",
    password: "123",
    email: "lala@correo.com",
  },
];

function App() {

  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  }

  return (
    <>
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col-6">
            <UserForm handlerAddUser={handlerAddUser} />
          </div>
          <div className="col-6">
            <UsersList users={users}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
