import { generateRandomId } from "../helpers/userHelper";

export const usersReducer = (state = [], action) => {

  let id;

  switch (action.type) {
    case "ADD_USER":
      do {
        id = generateRandomId();
      } while (isIdDuplicated(state, id));
      return [
        ...state,
        {
          ...action.payload,
          id,
        },
      ];
    
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.payload);

    case "UPDATE_USER":
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...action.payload,
            password: user.password,
          };
        }
        return user;
      })
    default:
      return state;
  }
  
};

function isIdDuplicated(state, id) {
  return state.some((user) => user.id === id);
}
