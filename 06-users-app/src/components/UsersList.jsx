import PropTypes from "prop-types";

const UsersList = ({ users = [] }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-secondary">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.array,
};
