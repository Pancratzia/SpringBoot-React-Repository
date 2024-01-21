import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();

  const { id, name, client, company, items } = invoice;

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
              <ClientView client={client} title = {"Datos del cliente"} />
            </div>

            <div className="col">
             <CompanyView company={company} title = {"Datos de la Empresa"} />
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
