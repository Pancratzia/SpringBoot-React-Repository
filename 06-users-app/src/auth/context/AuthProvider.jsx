import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"
import PropTypes from "prop-types";

export const AuthProvider = ({ children }) => {

    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <AuthContext.Provider value={{
            login,
            handlerLogin,
            handlerLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}