import PropTypes from "prop-types";

const UserRow = ({ user, handlerRemoveUser }) => {
  const { id, username, email } = user;

  const onRemoveUser = (id) => {
    handlerRemoveUser(id);  
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-secondary">Update</button>
      </td>
      <td>
        <button onClick={() =>  onRemoveUser(id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;

UserRow.propTypes = {
  user: PropTypes.object,
  handlerRemoveUser: PropTypes.func,
};
