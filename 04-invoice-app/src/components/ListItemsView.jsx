const ListItemsView = ( { title, items }) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ product, price, quantity, id }) => (
            <tr key={id}>
              <td>{product}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListItemsView;
