const RowItemView = ({ item }) => {
  const { product, price, quantity } = item;
  return (
    <tr>
      <td>{product}</td>
      <td>{price}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default RowItemView;
