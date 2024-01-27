import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productsService";
import { useNavigate } from "react-router-dom";

const CartView = ({ items, handler }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    handler(id);
  };

  const onCatalog = () => {
    navigate("/catalog");
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
                <td>{item.product.price.toFixed(2)}$</td>
                <td>{item.quantity}</td>
                <td>{(item.quantity * item.product.price).toFixed(2)}$</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteProduct(item.product.id)}
                  >
                    Eliminar
                  </button>
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
              {total.toFixed(2)}$
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-success" onClick={onCatalog}>Seguir Comprando</button>
    </>
  );
};

export default CartView;

CartView.propTypes = {
  items: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired,
};
