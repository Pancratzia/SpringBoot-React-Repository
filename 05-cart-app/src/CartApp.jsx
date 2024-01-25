import CatalogView from "./components/CatalogView";


function CartApp() {

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <CatalogView />

        <div className="my-4 w-75">

          <h4>Carrito de Compras</h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio ($)</th>
                <th>Cantidad</th>
                <th>Total ($)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre</td>
                <td>0$</td>
                <td>1</td>
                <td>0$</td>
                <td>Eliminar</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-end fw-bold">Total</td>
                <td colSpan={2} className="fw-bold">0$</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </>
  );
}

export default CartApp;
