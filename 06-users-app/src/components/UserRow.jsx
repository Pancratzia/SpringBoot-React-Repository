import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

const UserRow = ({ user }) => {
  const { id, username, email, admin } = user;
  const { handlerRemoveUser, handlerUserSelectedForm } =
    useUsers();
  const { login } = useAuth();

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
