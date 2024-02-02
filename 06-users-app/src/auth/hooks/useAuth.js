import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  user: undefined,
  isAuth: false,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = ({ username, password }) => {
    const isLogin = loginUser({ username, password });
    if (isLogin) {
      const user = {
        username: "admin",
      };

      dispatch({
        type: "LOGIN_USER",
        payload: user,
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          user,
          isAuth: true,
        })
      );

      navigate("/users");
    } else {
      Swal.fire("Error", "Invalid credentials", "error");
    }
  };

  const handlerLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
