import { useEffect, useReducer } from "react";
import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

function CartApp() {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: {
          id: product.id,
        },
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: product,
      });
    }
  };

  const handlerDeleteProducts = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    });
  }

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <CatalogView handler={(product) => handlerAddProductCart(product)} />

        <div className="my-4 w-75">

          {
            cartItems.length > 0 ? <CartView handler ={handlerDeleteProducts} items={cartItems} /> : <p>No hay elementos en el carrito</p>
          }
          
        </div>
      </div>
    </>
  );
}

export default CartApp;
