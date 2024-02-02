import LoginPage from "./auth/pages/LoginPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import { useAuth } from "./auth/hooks/useAuth.js";

function UsersApp() {

  const { login, handlerLogin, handlerLogout } = useAuth();

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
