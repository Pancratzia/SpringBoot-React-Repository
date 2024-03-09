import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ON_LOGIN, ON_LOGOUT, ON_INITIAL_LOGIN } from "../../store/slices/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAdmin, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      dispatch(ON_INITIAL_LOGIN());
      const response = await loginUser({ username, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const user = {
        username: claims.username,
      };

      dispatch(
        ON_LOGIN({
          user,
          isAdmin: claims.isAdmin,
        })
      );

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          user,
          isAuth: true,
          isAdmin: claims.isAdmin,
        })
      );

      sessionStorage.setItem("token", `Bearer ${token}`);

      navigate("/users");
    } catch (error) {
      dispatch(ON_LOGOUT());
      if (error.response?.status === 401) {
        Swal.fire("Error", "Invalid credentials", "error");
      } else if (error.response?.status === 400) {
        Swal.fire("Error", "You cannot access this resource", "error");
      } else {
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispatch(ON_LOGOUT());
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
  };

  return {
    login: {user, isAdmin, isAuth},
    handlerLogin,
    handlerLogout,
  };
};
