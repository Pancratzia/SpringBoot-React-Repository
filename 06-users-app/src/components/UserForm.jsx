import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../context/UserContext";

const UserForm = ({ userSelected, handlerCloseForm }) => {
  const { handlerAddUser, initialUserForm, errors } = useContext(UserContext);
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email, id } = userForm;

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
      />

      <p className="text-danger">{errors?.email}</p>

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
