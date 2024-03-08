import { Provider } from "react-redux";
import { AppRoutes } from "../AppRoutes.jsx";
import { store } from "./store/store.js";


function UsersApp() {
  
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default UsersApp;
