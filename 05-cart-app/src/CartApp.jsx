import { useState } from "react";
import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";

const initialCartItems = [];

function CartApp() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);

    if (hasItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.product.price * (item.quantity + 1),
            };
          }
          return item;
        })
      )

      /*setCartItems([
        ...cartItems.filter((item) => item.product.id !== product.id),
        {
          product,
          quantity: hasItem.quantity + 1,
        },
      ]);*/
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product,
          quantity: 1,
          price: product.price * 1,
        },
      ]);
    }
  };

  const handlerDeleteProducts = (id) => {
    setCartItems(cartItems.filter((item) => item.product.id !== id));
  }

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <CatalogView handler={(product) => handlerAddProductCart(product)} />

        <div className="my-4 w-75">
          <CartView handler ={handlerDeleteProducts} items={cartItems} />
        </div>
      </div>
    </>
  );
}

export default CartApp;
