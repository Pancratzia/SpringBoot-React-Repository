import PropTypes from "prop-types";

const ClientView = ({ client, title }) => {
  const {
    name: clientName,
    lastName: clientLastName,
    address: { country, city, street, number },
  } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          Name: {clientName} {clientLastName}
        </li>
        <li className="list-group-item">
          {country} / {city}
        </li>
        <li className="list-group-item">
          {street} #{number}
        </li>
      </ul>
    </>
  );
};

export default ClientView;

ClientView.propTypes = {
  client: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
