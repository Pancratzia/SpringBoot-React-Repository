import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();

  const { id, name, client, company, items, total } = invoice;

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
          <TotalView total={total} />

          <form className="mt-5">
            <input type="text" name="product" placeholder="Producto..." className="form-control my-2" />
            <input type="number" name="price" placeholder="Precio ($)" className="form-control my-2" />
            <input type="number" name="quantity" placeholder="Cantidad" className="form-control my-2" />
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
