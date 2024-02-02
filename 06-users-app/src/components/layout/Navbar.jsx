import PropTypes from "prop-types";

const Navbar = ({ login, handlerLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          Users App
        </a>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <span className="nav-item nav-link text-primary m-3">
              Welcome {login.user?.username}
            </span>
            <button className="btn btn-outline-success m-3" onClick={handlerLogout}>
                Logout
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  handlerLogout: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
};
