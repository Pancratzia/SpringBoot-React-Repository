import { AuthContext } from "./AuthContext"
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}