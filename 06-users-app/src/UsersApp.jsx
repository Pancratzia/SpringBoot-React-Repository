import UserForm from "./components/UserForm"
import UsersList from "./components/UsersList"

function App() {

  return (
    <>
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col-6">
            <UsersList />
          </div>
          <div className="col-6">
            <UserForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
