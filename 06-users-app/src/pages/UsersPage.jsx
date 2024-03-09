import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

const UsersPage = () => {
  const { visibleForm, isLoading, handlerOpenForm } = useUsers();

  const { login } = useAuth();


  return (
    <>
      {isLoading &&  
      <div className="container my-4 text-center"> 
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}

      {visibleForm && !isLoading && <UserModalForm />}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row my-4">
          <div className="col">
            {login.isAdmin && (
              <button
                onClick={handlerOpenForm}
                className="btn btn-primary my-2"
              >
                Nuevo Usuario
              </button>
            )}
            <UsersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
