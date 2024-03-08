import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { AppRoutes } from "./AppRoutes.jsx";


function UsersApp() {
  
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default UsersApp;
