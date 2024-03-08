export const loginReducer = (state = {}, action) =>{

    switch (action.type) {
        case "LOGIN_USER":
            return {
                user: action.payload.user,
                isAuth: true,
                isAdmin: action.payload.isAdmin
            };

        case "LOGOUT_USER":
            return {
                user: undefined,
                isAuth: false,
                isAdmin: false
            }
        default:
            return state;
    }

}