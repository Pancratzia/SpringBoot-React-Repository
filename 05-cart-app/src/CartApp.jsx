import CartView from "./components/CartView";
import CatalogView from "./components/CatalogView";


function CartApp() {

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <CatalogView />

        <div className="my-4 w-75">

          <CartView />
        </div>

      </div>
    </>
  );
}

export default CartApp;
