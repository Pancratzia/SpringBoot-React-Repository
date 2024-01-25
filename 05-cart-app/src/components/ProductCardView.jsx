import PropTypes from "prop-types";

const ProductCardVie = ({ name, description, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="cart-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}$</p>

        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  );
};

export default ProductCardVie;

ProductCardVie.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}