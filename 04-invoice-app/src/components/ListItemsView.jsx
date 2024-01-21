import RowItemView from "./RowItemView";
import PropTypes from "prop-types";

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
          {items.map((item) => (
            <RowItemView key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListItemsView;

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}
