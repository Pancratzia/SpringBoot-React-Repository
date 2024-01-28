import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

const initialUsers = [
  {
    id: 1,
    username: "Pancratzia",
    password: "123",
    email: "lala@correo.com",
  },
];

function App() {

  const handlerAddUser = (user) => {
    console.log(user);
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
            <UsersList users={initialUsers}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
