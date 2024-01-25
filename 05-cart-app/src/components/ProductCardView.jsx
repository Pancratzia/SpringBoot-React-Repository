import PropTypes from "prop-types";

const ProductCardVie = ({ id, name, description, price, handler }) => {
  const onAddProduct = (product) => {
    
    handler(product);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="cart-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}$</p>

        <button
          className="btn btn-primary"
          onClick={() => onAddProduct({ id, name, description, price })}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCardVie;

ProductCardVie.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
};
