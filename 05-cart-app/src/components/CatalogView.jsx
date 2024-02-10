import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import PropTypes from "prop-types";
import ProductCardVie from "./ProductCardView";

const CatalogView = ({ handler }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAll = async () => {
    const data = await getProducts();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      {isLoading && <div className="alert alert-info">Loading...</div>}
      <div className="row">
        {products.length > 0 &&
          products.map((product) => (
            <div className="col-4 my-2" key={product.id}>
              <ProductCardVie
                handler={handler}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default CatalogView;

CatalogView.propTypes = {
  handler: PropTypes.func.isRequired,
};
