import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Paginator = () => {
  const { paginator } = useSelector((state) => state.users);

  return (
    <>
      {paginator?.lenght === 0 || (
        <ul className="pagination">

          {paginator.number === 0 || (
            <li className="page-item">
              <Link
                className="page-link"
                to={`/users/page/${paginator.number - 1}`}
                aria-label="Previous"
              >
                Atrás
              </Link>
            </li>
          )}

          {paginator.number >= paginator.totalPages - 1 || (
            <li className="page-item">
              <Link
                className="page-link"
                to={`/users/page/${paginator.number - 1}`}
                aria-label="Previous"
              >
                Siguiente
              </Link>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Paginator;
