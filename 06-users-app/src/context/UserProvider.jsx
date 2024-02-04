import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {

    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        visibleForm,
        handlerOpenForm,
        handlerCloseForm,
      } = useUsers();

    return (
        <UserContext.Provider value={{
            users,
            userSelected,
            initialUserForm,
            handlerAddUser,
            handlerRemoveUser,
            handlerUserSelectedForm,
            visibleForm,
            handlerOpenForm,
            handlerCloseForm
        }}> 
            {children} 
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}