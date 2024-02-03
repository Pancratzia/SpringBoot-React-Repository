import PropTypes from "prop-types";
import UserRow from "./UserRow";

const UsersList = ({
  users = [],
  handlerRemoveUser,
  handlerUserSelectedForm,
}) => {
  return (
    <>
      {users.length === 0 ? (
        <p className="text-center alert alert-warning">
          There are no users registered at this moment
        </p>
      ) : (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Update</th>
              <th>Advanced Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <UserRow
                  key={user.id}
                  user={user}
                  handlerRemoveUser={handlerRemoveUser}
                  handlerUserSelectedForm={handlerUserSelectedForm}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array,
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
