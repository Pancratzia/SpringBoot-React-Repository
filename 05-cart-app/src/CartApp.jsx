import { useItemsCart } from "./hooks/useItemsCart";
import Navbar from "./components/Navbar";
import CartRoutes from "./routes/CartRoutes";

function CartApp() {
  const { cartItems, handlerAddProductCart, handlerDeleteProducts } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h3>Cart App</h3>

        <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProducts={handlerDeleteProducts} />
      </div>
    </>
  );
}

export default CartApp;
