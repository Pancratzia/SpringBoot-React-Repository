import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAll();
    dispatch({ type: "LOADING_USERS", payload: result.data || [] });
  };

  const handlerAddUser = async (user) => {
    let response;

    try {
      if (user.id === 0) {
        response = await save(user);
      } else {
        response = await update(user);
      }

      dispatch({
        type: user.id === 0 ? "ADD_USER" : "UPDATE_USER",
        payload: response.data,
      });

      const message =
        userSelected.id === 0
          ? "User added successfully"
          : "User updated successfully";

      Swal.fire("Success", message, "success");
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if(error.response && error.response.status === 400){
        setErrors(error.response.data);
      }else{
        throw error;
      }
    }
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        dispatch({ type: "REMOVE_USER", payload: id });
        Swal.fire("Deleted!", "User deleted successfully", "success");
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };

  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers,
    errors,
  };
};
