import { useState } from "react";
import PropTypes from "prop-types";
const FormInvoiceItemView = ({handler}) => {
  const [itemsValues, setItemsValues] = useState([
    { product: "", price: 0, quantity: 0, id: 0 },
  ]);

  const {product, price, quantity} = itemsValues;

  const handleInputsChange = (e) => {
    
    const { name, value } = e.target;

    setItemsValues({
      ...itemsValues,
      [name]: value,
    })

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product === "" ||
      price <= 0 ||
      isNaN(price) ||
      quantity <= 0 ||
      isNaN(quantity)
    ) {
      alert("Por favor, rellena todos los campos con valores válidos.");
      return;
    }

    handler(itemsValues);
   
    setItemsValues({
      product: "",
      price: 0,
      quantity: 0,
    })
  };

  return (
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
          value={product}
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
          value={price}
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
          value={quantity}
        />
      </div>

      <button className="btn btn-primary">Añadir</button>
    </form>
  );
};

FormInvoiceItemView.propTypes = {
  handler: PropTypes.func.isRequired
}

export default FormInvoiceItemView;
