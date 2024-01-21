import Proptypes from "prop-types";

const TotalView = ({ total }) => {
  return (
    <>
      <div className="text-end">
        Total: <span className="badge bg-success">{total}$</span>
      </div>
    </>
  );
};

export default TotalView;

TotalView.propTypes = {
  total: Proptypes.number.isRequired,
};

TotalView.defaultProps = {
  total: 0,
};
