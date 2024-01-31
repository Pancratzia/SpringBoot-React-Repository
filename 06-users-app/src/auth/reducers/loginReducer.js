export const loginReducer = (state = {}, action) =>{

    switch (action.type) {
        case "LOGIN_USER":
            return {
                user: action.payload,
                isAuth: true
            };

        case "LOGOUT_USER":
            return {
                user: undefined,
                isAuth: false
            }
        default:
            return state;
    }

}