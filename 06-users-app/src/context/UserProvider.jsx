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
        getUsers,
        errors
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
            handlerCloseForm,
            getUsers,
            errors
        }}> 
            {children} 
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}