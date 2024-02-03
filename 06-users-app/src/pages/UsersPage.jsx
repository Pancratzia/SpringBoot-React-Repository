import PropTypes from "prop-types";
import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";

const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  visibleForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {

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

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  userSelected: PropTypes.object.isRequired,
  initialUserForm: PropTypes.object.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
  handlerUserSelectedForm: PropTypes.func.isRequired,
  visibleForm: PropTypes.bool.isRequired,
  handlerOpenForm: PropTypes.func.isRequired,
  handlerCloseForm: PropTypes.func.isRequired,
}