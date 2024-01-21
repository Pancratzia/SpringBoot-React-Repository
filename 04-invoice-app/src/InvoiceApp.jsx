import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
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

          <ListItemsView title="Items" items={items} />
          
        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
