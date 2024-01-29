import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {
    let type;

    if (userSelected.id !== 0) {
      type = "UPDATE_USER";
    } else {
      type = "ADD_USER";
    }

    dispatch({ type, payload: user });
    setUserSelected(initialUserForm);

    const message =
      type === "ADD_USER"
        ? "User added successfully"
        : "User updated successfully";

    Swal.fire("Success", message, "success");
  };

  const handlerRemoveUser = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "REMOVE_USER", payload: id });
        Swal.fire(
          'Deleted!',
          'User deleted successfully',
          'success'
        )
      }
    })
  };

  const handlerUserSelectedForm = (user) => {
    setUserSelected({ ...user });
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  };
};
