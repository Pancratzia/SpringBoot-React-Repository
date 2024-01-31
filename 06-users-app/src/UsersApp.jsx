import { useReducer } from "react";
import LoginPage from "./auth/pages/LoginPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import { loginReducer } from "./auth/reducers/loginReducer.js";
import Swal from "sweetalert2";

const initialLogin = {
  user: undefined,
  isAuth: false,
};

function UsersApp() {
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
    } else {
      Swal.fire("Error", "Invalid credentials", "error");
    }
  };

  return (
    <>
      {login.isAuth ? <UsersPage /> : <LoginPage handlerLogin={handlerLogin} />}
    </>
  );
}

export default UsersApp;
