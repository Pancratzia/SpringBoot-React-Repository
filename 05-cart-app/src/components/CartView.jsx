import PropTypes from "prop-types";

const CartView = ({ items, handler }) => {

  const onDeleteProduct = (id) => {
    console.log("Eliminando producto...");
    handler(id);
  }

  return (
    <>
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
          {items &&
            items.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}$</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.product.price}$</td>
                <td>
                  <button className="btn btn-danger" onClick={(id) => onDeleteProduct(id)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total
            </td>
            <td colSpan={2} className="fw-bold">
              0$
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartView;

CartView.propTypes = {
  items: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired
}
