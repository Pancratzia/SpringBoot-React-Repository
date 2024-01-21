import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();

  const { id, name, client, company, items } = invoice
  const { name: clientName, lastName: clientLastName, address } = client
  const { name: companyName, fiscalNumber } = company
  const { country, city, street, number } = address


  return (
    <>
      <h1>Tu Factura</h1>
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
      </ul>

      <h3>Datos del cliente</h3>
      <ul>
        <li>Name: {clientName} {clientLastName}</li>
        <li>Country: {country}</li>
        <li>City: {city}</li>
        <li>Street: {street} #{number}</li>
      </ul>

      <h3>Datos de la empresa</h3>
      <ul>
        <li>Name: {companyName}</li>
        <li>Fiscal Number: {fiscalNumber}</li>
      </ul>

      <h4>Productos</h4>
    </>
  );
}

export default InvoiceApp;
