import { Navigate, Route, Routes } from "react-router-dom";
import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";

function CartApp() {
  const { cartItems, handlerAddProductCart, handlerDeleteProducts } =
    useItemsCart();

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <Routes>
          <Route
            path="/catalog"
            element={
              <CatalogView
                handler={(product) => handlerAddProductCart(product)}
              />
            }
          />
          <Route
            path="/cart"
            element={
              cartItems.length > 0 ? (
                <div className="my-4 w-75">
                  <CartView handler={handlerDeleteProducts} items={cartItems} />
                </div>
              ) :
              <div className="alert alert-warning">
                No hay elementos en el carrito
              </div>
            }
          />

          <Route path="/" element={<Navigate to="/catalog" />} />
        </Routes>
      </div>
    </>
  );
}

export default CartApp;
