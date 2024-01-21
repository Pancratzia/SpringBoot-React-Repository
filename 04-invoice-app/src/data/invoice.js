export const invoice = {
  id: 1,
  name: "Componentes de PC",
  client: {
    name: "Pancratzia",
    lastname: "LaItaliana",
    address: {
      country: "Venezuela",
      city: "Caracas",
      street: "Calle 1",
      number: 300,
    },
  },
  company: {
    name: "PankraComp",
    fiscalNumber: 123456,
  },
  items: [
    {
      product: "CPU",
      quantity: 1,
      price: 150,
    },
    {
      product: "GPU",
      quantity: 1,
      price: 250,
    },
    {
      product: "RAM",
      quantity: 4,
      price: 50,
    },
    {
      product: "HDD",
      quantity: 2,
      price: 10,
    },
  ],
};
