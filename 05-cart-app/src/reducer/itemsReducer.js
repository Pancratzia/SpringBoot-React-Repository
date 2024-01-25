import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case UPDATE_ITEM:
      return state.map((item) => {
        if (item.product.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    case DELETE_ITEM:
      return [...state.filter((item) => item.product.id !== action.payload.id)];
    default:
      return state;
  }
};
