import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserRow = ({ user }) => {
  const { id, username, email } = user;
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useContext(UserContext);

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
              email,
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
};
