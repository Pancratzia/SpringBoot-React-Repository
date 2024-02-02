import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    user: undefined,
    isAuth: false,
  };

export const useAuth = () => {

      const [login, dispatch] = useReducer(loginReducer, initialLogin);

      const handlerLogin = ({ username, password }) => {
        if (username === "admin" && password === "123") {
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
        handlerLogout
    };
}