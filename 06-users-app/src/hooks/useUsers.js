import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  initialUserForm,
  initialErrors,
  ADD_USER,
  LOADING_USERS,
  ON_CLOSE_FORM,
  ON_OPEN_FORM,
  ON_USER_SELECTED_FORM,
  REMOVE_USER,
  UPDATE_USER,
  SET_ERROR,
} from "../store/slices/users/usersSlice";
import { useAuth } from "../auth/hooks/useAuth";



export const useUsers = () => {
  const { users, visibleForm, userSelected, errors } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { login, handlerLogout } = useAuth();

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
        dispatch(SET_ERROR(error.response.data));
      } else if (
        error.response &&
        error.response.status === 500 &&
        error.response.data?.message?.includes("constraint")
      ) {
        if (error.response.data?.message?.includes("UK_username")) {
          dispatch(SET_ERROR({ username: "Username already exists" }));
        }

        if (error.response.data?.message?.includes("UK_email")) {
          dispatch(SET_ERROR({ email: "Email already exists" }));
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
    dispatch(ON_USER_SELECTED_FORM({ ...user }));
  };

  const handlerOpenForm = () => {
    dispatch(ON_OPEN_FORM());
  };

  const handlerCloseForm = () => {
    
    dispatch(ON_CLOSE_FORM());
    dispatch(SET_ERROR(initialErrors));
  };

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers,
  };
};
