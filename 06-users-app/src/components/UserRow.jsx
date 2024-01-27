import PropTypes from "prop-types";

const UserRow = ({ user }) => {
  const { id, username, email } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-secondary">Update</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;

UserRow.propTypes = {
  user: PropTypes.object,
};
