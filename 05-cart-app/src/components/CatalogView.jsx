import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import CatalogItem from "./CatalogItem";

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
            <CatalogItem
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
