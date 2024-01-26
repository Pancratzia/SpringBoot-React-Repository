import { useEffect, useReducer } from "react";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../reducer/itemsActions";
import { itemsReducer } from "../reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          id: product.id,
        },
      });
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: product,
      });
    }
  };

  const handlerDeleteProducts = (id) => {
    dispatch({
      type: DELETE_ITEM,
      payload: {
        id,
      },
    });
  };

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProducts,
  };
};
