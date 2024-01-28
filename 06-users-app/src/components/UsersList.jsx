import PropTypes from "prop-types";
import UserRow from "./UserRow";

const UsersList = ({ users = [] }) => {
  return (
    <>
      {users.length === 0 ? (
        <p>There are no users registered at this moment</p>
      ) : (
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
              return <UserRow key={user.id} user={user} />;
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
};
