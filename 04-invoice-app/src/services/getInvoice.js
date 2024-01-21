import { invoice } from "../data/invoice";

export const getInvoice = () => {
  const total = invoice.items
    .map((item) => item.price * item.quantity)
    .reduce((acumulador, item) => acumulador + item, 0);

  return { ...invoice, total };
};
