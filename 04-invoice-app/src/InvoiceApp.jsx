import { useState } from "react";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

function InvoiceApp() {
  const invoice = getInvoice();
  const { id, name, client, company, items: initialItems, total } = invoice;

  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);
  const [items, setItems] = useState(initialItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        product: productValue,
        price: priceValue,
        quantity: quantityValue,
        id: Date.now(),
      },
    ]);
    resetForm();
  };

  const resetForm = () => {
    setProductValue("");
    setPriceValue(0);
    setQuantityValue(0);
  };

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
              <ClientView client={client} title={"Datos del cliente"} />
            </div>

            <div className="col">
              <CompanyView company={company} title={"Datos de la Empresa"} />
            </div>
          </div>

          <hr className="my-5" />

          <ListItemsView title="Items" items={items} />
          <TotalView total={total} />

          <form
            className="mt-5 w-50"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              name="product"
              placeholder="Producto..."
              className="form-control my-2"
              onChange={(e) => setProductValue(e.target.value)}
              value={productValue}
            />
            <input
              type="number"
              name="price"
              placeholder="Precio ($)"
              className="form-control my-2"
              onChange={(e) => setPriceValue(e.target.value)}
              value={priceValue}
            />
            <input
              type="number"
              name="quantity"
              placeholder="Cantidad"
              className="form-control my-2"
              onChange={(e) => setQuantityValue(e.target.value)}
              value={quantityValue}
            />

            <button className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
