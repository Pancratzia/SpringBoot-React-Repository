import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import ProductCardVie from "./ProductCardView";

const CatalogView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  return (
    <div className="row">
      {products.length > 0 &&
        products.map((product) => (
          <div className="col-4 my-2" key={product.id}>
            <ProductCardVie
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
    </div>
  );
};

export default CatalogView;
