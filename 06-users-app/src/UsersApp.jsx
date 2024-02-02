import { useReducer } from "react";
import LoginPage from "./auth/pages/LoginPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import { loginReducer } from "./auth/reducers/loginReducer.js";
import Swal from "sweetalert2";
import Navbar from "./components/layout/Navbar.jsx";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
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

  return (
    <>
      {login.isAuth ? (
        <>
          <Navbar login={login} handlerLogout={handlerLogout} />
          <UsersPage />{" "}
        </>
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
}

export default UsersApp;
