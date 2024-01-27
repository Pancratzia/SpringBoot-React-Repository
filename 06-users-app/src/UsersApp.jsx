import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

function App() {
  const initialUsers = [
    {
      id: 1,
      username: "Pancratzia",
      password: "123",
      email: "lala@correo.com",
    },
  ];

  return (
    <>
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col-6">
            <UserForm />
          </div>
          <div className="col-6">
            <UsersList users={initialUsers} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
