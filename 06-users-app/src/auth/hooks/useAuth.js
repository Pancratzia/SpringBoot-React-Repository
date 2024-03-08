import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  user: undefined,
  isAdmin: false,
  isAuth: false,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const user = {
        username: claims.username,
      };

      dispatch({
        type: "LOGIN_USER",
        payload: {
          user,
          isAdmin: claims.isAdmin,
        },
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          user,
          isAuth: true,
          isAdmin: claims.isAdmin,
        })
      );

      sessionStorage.setItem("token", `Bearer ${token}`);

      navigate("/users");
    } catch (error) {
      if(error.response?.status === 401) {
        Swal.fire("Error", "Invalid credentials", "error");
      }else if(error.response?.status === 400) {
        Swal.fire("Error", "You cannot access this resource", "error");
      }else{
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
