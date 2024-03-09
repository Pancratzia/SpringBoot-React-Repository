import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Paginator = ({ url }) => {
  const { paginator } = useSelector((state) => state.users);

  return (
    <>
      {paginator?.size === 0 || (
        <ul className="pagination">

          {paginator.number === 0 || (
            <li className="page-item">
              <Link
                className="page-link"
                to={`${url}/${paginator.number - 1}`}
                aria-label="Previous"
              >
                Back
              </Link>
            </li>
          )}

          <li className={paginator.first ? "page-item disabled" : "page-item"}>
            <Link className="page-link" to={`${url}/0`}>
              First
            </Link>
          </li>

          <li className={paginator.last ? "page-item disabled" : "page-item"}>
            <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`}>
              Last
            </Link>
          </li>

          {paginator.number >= paginator.totalPages - 1 || (
            <li className="page-item">
              <Link
                className="page-link"
                to={`${url}/${paginator.number + 1}`}
                aria-label="Previous"
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Paginator;

Paginator.propTypes = {
  url: PropTypes.string.isRequired,
}
