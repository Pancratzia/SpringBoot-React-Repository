import { useEffect, useState } from "react";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import { calculateTotal, getInvoice } from "./services/getInvoice";
import FormInvoiceItemView from "./components/FormInvoiceItemView";

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

  const [activeForm, setActiveForm] = useState(false);
  const [invoice, setInvoice] = useState(invoiceInitial);
  const { id, name, client, company } = invoice;
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  //Hook UseEffect para el ciclo de vida

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []); //Solo se ejecuta cuando se monta el componente la primera vez

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handleAddItems = ({ product, price, quantity}) => {

    setItems([...items, 
      { id: new Date().getTime(),
        product: product.trim(),
        price: price,
        quantity: quantity
      }]);
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  }


  return (
    <div className="container">
      <div className="card my-5">
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


          <button onClick={onActiveForm} className="btn btn-secondary">{!activeForm ? 'Agregar item' : 'Ocultar formulario'}</button>
          {
            activeForm && <FormInvoiceItemView handler={handleAddItems} />
          }

        </div>
      </div>
    </div>
  );
}

export default InvoiceApp;
