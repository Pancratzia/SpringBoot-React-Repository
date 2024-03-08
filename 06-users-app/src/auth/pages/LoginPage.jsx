import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";

const initialLoginForm = {
  username: "",
  password: "",
};

const LoginPage = ( ) => {
  const { handlerLogin } = useAuth();
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target: { name, value } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      Swal.fire("Error", "All fields are required", "error");
    }

    handlerLogin(loginForm);

    setLoginForm(initialLoginForm);
  };

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>

          <form>
            <div className="modal-body">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
                value={username}
                required
              />

              <input
                type="password"
                className="form-control my-3"
                placeholder="Password"
                name="password"
                onChange={onInputChange}
                value={password}
                required
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={onSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
