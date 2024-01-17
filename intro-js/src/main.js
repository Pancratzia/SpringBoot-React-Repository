const invoices = [
  {
    id: 1,
    description: "Compras de Aparatos Electronicos",
    date: new Date(),
    client: {
      id: 1,
      name: "Pancratzia",
      lastname: "LaItaliana",
      age: 24,
    },
    items: [
      {
        product: "keyboard",
        price: 100,
        quantity: 1,
      },
      {
        product: "mouse",
        price: 50,
        quantity: 2,
      },
      {
        product: "monitor",
        price: 200,
        quantity: 1,
      },
      {
        product: "laptop",
        price: 505,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    description: "Compras de zapatos",
    date: new Date(),
    client: {
      id: 2,
      name: "Pancratzia",
      lastname: "LaItaliana",
      age: 24,
    },
    items: [
      {
        product: "shoes",
        price: 200,
        quantity: 1,
      },
      {
        product: "snickers",
        price: 300,
        quantity: 2,
      }
    ],
  },
  {
    id: 3,
    description: "Compras de libros",
    date: new Date(),
    client: {
      id: 3,
      name: "Pancratzia",
      lastname: "LaItaliana",
      age: 24,
    },
    items: [
      {
        product: "book 1",
        price: 200,
        quantity: 1,
      },
      {
        product: "book 2",
        price: 300,
        quantity: 2,
      }
    ],
  }
];

console.log(invoices);


const invoices2 = invoices.map((i) => {
    return i.description;
}) //El map crea un nuevo arreglo con el resultado de la función



console.log(invoices2);

const invoiceById = invoices.find(i => i.id === 1);

console.log(invoiceById);

const invoicesFiltered = invoices.filter(i => i.id > 1);

console.log(invoicesFiltered);

const invoicesIncluding = invoices.filter(i => i.description.includes('Compras de libros'));

console.log("Invoices cuyos items incluyan 'Compras de libros': ", invoicesIncluding);


const invoicesSome = invoices.some(i => i.id>1); //Devuelve true o false en función de si hay o no

console.log("Invoices cuyos items incluyan 'Compras de libros': ", invoicesSome);