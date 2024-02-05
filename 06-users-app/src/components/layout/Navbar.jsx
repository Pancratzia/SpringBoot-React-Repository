
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const Navbar = () => {

  const { login, handlerLogout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <h3>
          <NavLink className="navbar-brand" to="/users">
            Users App
          </NavLink>
        </h3>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Usuarios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users/register">
              Registro
            </NavLink>
          </li>
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <span className="nav-item nav-link text-primary m-3">
            Welcome, {login.user?.username}!
          </span>
          <button
            className="btn btn-outline-success m-3"
            onClick={handlerLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
