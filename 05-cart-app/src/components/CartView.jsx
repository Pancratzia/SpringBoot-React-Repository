import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";

const CartView = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  return (
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
  )
}

export default CartView