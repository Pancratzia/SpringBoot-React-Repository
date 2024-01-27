import { Navigate, Route, Routes } from "react-router-dom"
import CatalogView from "../components/CatalogView"
import CartView from "../components/CartView"
import PropTypes from "prop-types";


const CartRoutes = ({ cartItems, handlerAddProductCart, handlerDeleteProducts}) => {
  return (
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
  )
}

export default CartRoutes;

CartRoutes.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handlerAddProductCart: PropTypes.func.isRequired,
  handlerDeleteProducts: PropTypes.func.isRequired
}