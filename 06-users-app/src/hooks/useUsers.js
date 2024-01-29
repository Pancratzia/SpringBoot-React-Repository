import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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
  };

  const handlerRemoveUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
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
