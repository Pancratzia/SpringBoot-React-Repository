import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();

  const { id, name, client, company, items } = invoice;
  const { name: clientName, lastName: clientLastName, address } = client;
  const { name: companyName, fiscalNumber } = company;
  const { country, city, street, number } = address;

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <h1>Tu Factura</h1>
        </div>

        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Name: {name}</li>
          </ul>

          <div className="row my-3">
            <div className="col">
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
            </div>

            <div className="col">
              <h3>Datos de la empresa</h3>
              <ul className="list-group">
                <li className="list-group-item active">Name: {companyName}</li>
                <li className="list-group-item">
                  Fiscal Number: {fiscalNumber}
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />

          <h4>Productos</h4>
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
        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
