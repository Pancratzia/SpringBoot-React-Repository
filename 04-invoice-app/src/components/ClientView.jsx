const ClientView = ( { client }) => {

    const { name: clientName, lastName: clientLastName, address } = client;
    const { country, city, street, number } = address;
  return (
    <>
      <h3>Datos del cliente</h3>
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
