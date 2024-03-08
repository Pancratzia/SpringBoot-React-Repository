import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  ADD_USER,
  LOADING_USERS,
  REMOVE_USER,
  UPDATE_USER,
} from "../store/slices/users/usersSlice";

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
  admin: false,
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};

export const useUsers = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { login, handlerLogout } = useContext(AuthContext);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const result = await findAll();
      dispatch(LOADING_USERS(result.data));
    } catch (error) {
      if (error.response?.status === 401) {
        handlerLogout();
      }
    }
  };

  const handlerAddUser = async (user) => {
    if (!login.isAdmin) {
      return;
    }

    let response;

    try {
      if (user.id === 0) {
        response = await save(user);
        dispatch(ADD_USER({ ...response.data }));
      } else {
        response = await update(user);
        dispatch(UPDATE_USER({ ...response.data }));
      }

      const message =
        userSelected.id === 0
          ? "User added successfully"
          : "User updated successfully";

      Swal.fire("Success", message, "success");
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data?.message?.includes("UK_username")) {
          setErrors({ username: "Username already exists" });
        }

        if (error.response.data?.message?.includes("UK_email")) {
          setErrors({ email: "Email already exists" });
        }
      } else if (error.response?.status === 401) {
        handlerLogout();
      } else {
        throw error;
      }
    }
  };

  const handlerRemoveUser = (id) => {
    if (!login.isAdmin) {
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await remove(id);
          dispatch(REMOVE_USER(id));
          Swal.fire("Deleted!", "User deleted successfully", "success");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            handlerLogout();
          } else {
            Swal.fire("Error", error.response.data.message, "error");
          }
        }
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
    setErrors(initialErrors);
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
