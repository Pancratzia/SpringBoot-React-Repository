import { generateRandomId } from "../helpers/userHelpers";

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
    default:
      return state;
  }
  
};

function isIdDuplicated(state, id) {
  return state.some((user) => user.id === id);
}
