import { useState } from "react";
import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";

const initialCartItems = []


function CartApp() {

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    setCartItems([...cartItems, {
      product: product,
      quantity: 1,
      price: product.price * 1
    }]);
  }

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <CatalogView handler={ (product) => handlerAddProductCart(product) } />

        <div className="my-4 w-75">

          <CartView items = {cartItems} />
        </div>

      </div>
    </>
  );
}

export default CartApp;
