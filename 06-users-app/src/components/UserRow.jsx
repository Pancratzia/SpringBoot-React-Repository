import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { useUsers } from "../hooks/useUsers";

const UserRow = ({ user }) => {
  const { id, username, email, admin } = user;
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useUsers();
  const { login } = useContext(AuthContext);

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      {login.isAdmin && (
        <>
          <td>
            <button
              className="btn btn-secondary"
              onClick={() =>
                handlerUserSelectedForm({
                  id,
                  username,
                  email,
                  admin
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
        </>
      )}
    </tr>
  );
};

export default UserRow;

UserRow.propTypes = {
  user: PropTypes.object,
};
