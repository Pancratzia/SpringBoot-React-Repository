import { generateRandomId } from "../helpers/userHelpers";

export const usersReducer = (state = [], action) =>{

    switch(action.type){
        case "ADD_USER":
            return [
                ...state,
                {
                    ...action.payload,
                    id: generateRandomId(),
                }
            ];
        default:
            return state;
    }
}