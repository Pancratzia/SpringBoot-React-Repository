import { useEffect, useState } from "react";
import { getProducts } from "./services/productsService";

function CartApp() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  })

  return (
    <>
      <div className="container my-5">
        <h3>Cart App</h3>

        <div className="row">

          {products.length > 0 && products.map((product) => (
            <div className="col-4 my-2" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="cart-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}$</p>

                <button className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
          ))}
          
        </div>

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
