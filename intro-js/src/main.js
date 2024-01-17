const products = [
    'Sillas', 'Escritorios', 'Mesas'
]

const fruits = [
    'Manzana', 'Pera', 'Naranja', 'Sandia', 'Uva',
]

const compra = [...fruits, ...products]; //con esto se crea una copia de los arreglos y los originales no se modifican. Esto se llama inmnutabilidad. (Spread Operator)

let items = [];
items = items.concat(products, fruits, 'Muñeca', 'Peluche');

console.log(compra);

console.log(items);