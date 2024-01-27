import { useState } from "react";

const initialUserform = {
  username: "",
  password: "",
  email: "",
};

const UserForm = () => {
  const [userForm, setUserForm] = useState(initialUserform);

  const { username, password, email } = userForm;

  const onInputChange = ({ target: { name, value } }) => {
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <form>
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

      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};

export default UserForm;
