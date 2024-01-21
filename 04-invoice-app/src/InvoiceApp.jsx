import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();

  return (
    <>
      <h1>Tu Factura</h1>
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Name: {invoice.name}</li>
      </ul>
    </>
  );
}

export default InvoiceApp;
