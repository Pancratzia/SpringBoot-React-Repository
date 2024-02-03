import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserRow = ({ user, handlerRemoveUser, handlerUserSelectedForm }) => {
  const { id, username, email } = user;

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={() =>
            handlerUserSelectedForm({
              id,
              username,
              email
            })
          }
        >
          Update
        </button>
      </td>
      <td>
        <NavLink className="btn btn-secondary" to={`/users/edit/${id}`}>
          Advanced Update
        </NavLink>
      </td>
      <td>
        <button
          onClick={() => handlerRemoveUser(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

UserRow.propTypes = {
  user: PropTypes.object,
  handlerRemoveUser: PropTypes.func,
  handlerUserSelectedForm: PropTypes.func,
};
