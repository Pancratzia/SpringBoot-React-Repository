import { UserContext } from "./UserContext"
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{}}> 
            {children} 
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}