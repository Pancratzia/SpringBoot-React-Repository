import ClientView from "./components/ClientView";
import InvoiceView from "./components/InvoiceView";
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
          <InvoiceView id={id} name={name} />
          <div className="row my-3">
            <div className="col">
              <ClientView client={client} />
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
