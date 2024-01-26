
import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";



function CartApp() {

  const { cartItems, handlerAddProductCart, handlerDeleteProducts } = useItemsCart();
  

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
