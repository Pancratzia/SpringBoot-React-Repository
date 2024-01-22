import { useEffect, useState } from "react";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import { getInvoice } from "./services/getInvoice";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

function InvoiceApp() {
  const [invoice, setInvoice] = useState(invoiceInitial);
  const { id, name, client, company, total } = invoice;
  const [items, setItems] = useState([]);

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: 0,
    quantity: 0,
  });

  const { product, price, quantity } = formItemsState;

  const handleInputsChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.trim() === "" ||
      price <= 0 ||
      isNaN(price) ||
      quantity <= 0 ||
      isNaN(quantity)
    ) {
      alert("Por favor, rellena todos los campos con valores válidos.");
      return;
    }

    const newItem = {
      product: product,
      price: price,
      quantity: Math.floor(quantity),
      id: new Date().getTime(),
    };
    setItems([...items, newItem]);
    resetForm();
  };

  const resetForm = () => {
    setFormItemsState({
      productValue: "",
      priceValue: 0,
      quantityValue: 0,
    });
  };

  //Hook UseEffect para el ciclo de vida

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
    
  }, []); //Solo se ejecuta cuando se monta el componente la primera vez

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
            <div className="form-group d-flex justify-content-center align-items-center gap-2">
              <label htmlFor="product">Producto: </label>
              <input
                type="text"
                name="product"
                placeholder="Producto..."
                className="form-control my-2"
                onChange={handleInputsChange}
              />
            </div>

            <div className="form-group d-flex justify-content-center align-items-center gap-2">
              <label htmlFor="price">Precio: </label>
              <input
                type="number"
                name="price"
                placeholder="Precio"
                className="form-control my-2"
                onChange={handleInputsChange}
              />
            </div>

            <div className="form-group d-flex justify-content-center align-items-center gap-2">
              <label htmlFor="quantity"> Cantidad: </label>
              <input
                type="number"
                name="quantity"
                placeholder="Cantidad"
                className="form-control my-2"
                onChange={handleInputsChange}
              />
            </div>

            <button className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
