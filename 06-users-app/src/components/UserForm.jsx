import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ handlerAddUser, initialUserform, userSelected }) => {
  const [userForm, setUserForm] = useState(initialUserform);

  const { username, password, email, id } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected });
  }, [userSelected]);

  const onInputChange = ({ target: { name, value } }) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    handlerAddUser(userForm);

    setUserForm(initialUserform);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        type="text"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        value={username}
        required
      />

      <input
        className="form-control my-3 w-75"
        type="password"
        placeholder="Password"
        name="password"
        onChange={onInputChange}
        value={password}
        required
      />

      <input
        className="form-control my-3 w-75"
        type="email"
        placeholder="Email"
        name="email"
        onChange={onInputChange}
        value={email}
        required
      />

      <input type="hidden" name="id" value={id} />

      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};

export default UserForm;

UserForm.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserform: PropTypes.object.isRequired,
  userSelected: PropTypes.object,
};
