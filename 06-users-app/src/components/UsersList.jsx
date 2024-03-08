import UserRow from "./UserRow";
import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

const UsersList = () => {
  const { users = [], getUsers } = useUsers();
  const { login } = useAuth();

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
