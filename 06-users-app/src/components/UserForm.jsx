import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const UserForm = ({
  handlerAddUser,
  initialUserform,
  userSelected,
  handlerCloseForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserform);

  const { username, password, email, id } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target: { name, value } }) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      (id === 0 && password.trim() === "")
    ) {
      Swal.fire("Error", "All fields are required", "error");
      return;
    }

    handlerAddUser(userForm);
    setUserForm(initialUserform);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserform);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-field">
        <input
          className="form-control my-3 "
          type="text"
          placeholder="Username"
          name="username"
          onChange={onInputChange}
          value={username}
          id="username"
          required
        />
      </div>

      {id === 0 && (
        <input
          className="form-control my-3"
          type="password"
          placeholder="Password"
          name="password"
          onChange={onInputChange}
          value={password}
          required
        />
      )}

      <input
        className="form-control my-3"
        type="email"
        placeholder="Email"
        name="email"
        onChange={onInputChange}
        value={email}
        required
      />

      <input type="hidden" name="id" value={id} />

      <button className="btn btn-primary" type="submit">
        {userSelected.id !== 0 ? "Update" : "Save"}
      </button>
      {handlerCloseForm && (
        <button
        onClick={onCloseForm}
        type="button"
        className="btn btn-secondary mx-2"
      >
        Cerrar
      </button>
      )}
    </form>
  );
};

export default UserForm;

UserForm.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserform: PropTypes.object.isRequired,
  userSelected: PropTypes.object,
  handlerCloseForm: PropTypes.func,
};
