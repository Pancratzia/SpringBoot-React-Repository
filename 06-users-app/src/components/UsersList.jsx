import UserRow from "./UserRow";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const UsersList = () => {
  const { users = [], getUsers } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {users.length === 0 ? (
        <p className="text-center alert alert-warning">
          There are no users registered at this moment
        </p>
      ) : (
        <table className="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              {login.isAdmin && (
                <>
                  <th>Update</th>
                  <th>Advanced Update</th>
                  <th>Delete</th>
                </>
              )}
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
