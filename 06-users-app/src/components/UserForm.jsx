import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useUsers } from "../hooks/useUsers";

const UserForm = ({ userSelected, handlerCloseForm }) => {
  const { handlerAddUser, initialUserForm, errors } = useUsers();
  const [userForm, setUserForm] = useState(initialUserForm);
  const [checked, setChecked] = useState(userForm.admin);
  const { username, password, email, id, admin } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected, password: "" });
  }, [userSelected]);

  const onInputChange = ({ target: { name, value } }) => {
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handlerAddUser(userForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  const onCheckboxChange = () => {
    setChecked(!checked);
    setUserForm({ ...userForm, admin: !checked });
  };

  return (
    <form onSubmit={onSubmit}>
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

      <p className="text-danger">{errors?.username}</p>

      {id === 0 && (
        <>
          <input
            className="form-control my-3"
            type="password"
            placeholder="Password"
            name="password"
            onChange={onInputChange}
            value={password}
            required
          />

          <p className="text-danger">{errors?.password}</p>
        </>
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

      <p className="text-danger">{errors?.email}</p>

      <div className="my-3 form-check">
        <input
          type="checkbox"
          name="admin"
          checked={admin}
          className="form-check-input"
          onChange={onCheckboxChange}
        />

        <label className="form-check-label">Admin</label>
      </div>

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
  userSelected: PropTypes.object,
  handlerCloseForm: PropTypes.func,
};
