import PropTypes from "prop-types";

const RowItemView = ({ item, handleDeleteItem }) => {
  const { product, price, quantity, id } = item;
  return (
    <tr>
      <td>{product}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDeleteItem(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default RowItemView;

RowItemView.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteItem: PropTypes.func.isRequired
}
