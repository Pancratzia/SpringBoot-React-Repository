const invoice = {
    id: 1,
    description: 'Compras de Aparatos Electronicos',
    date: new Date(),
    client: {
        id: 1,
        name: 'Pancratzia',
        lastname: 'LaItaliana',
        age: 24,
    },
    items: [
        {
            product: 'keyboard',
            price: 100,
            quantity: 1
        },
        {
            product: 'mouse',
            price: 50,
            quantity: 2
        },
        {
            product: 'monitor',
            price: 200,
            quantity: 1
        },
        {
            product: 'laptop',
            price: 505,
            quantity: 1
        }
    ],

    total: function(){
        let total = 0
        for(let i = 0; i < this.items.length; i++){
            total += this.items[i].price * this.items[i].quantity
        }
        return total;
    },

    greeting: function(){
        return 'Hola! Me llamo ' + this.client.name
    }
}

console.log(invoice)
console.log(`
FACTURA DEL COMERCIO DE JAVASCRIPT ELECTROTECH

Cliente: ${invoice.client.name} ${invoice.client.lastname}
Fecha: ${invoice.date}
Total: ${invoice.total()}$

${invoice.description}

DETALLES

ITEM | PRECIO | CANTIDAD | SUBTOTAL

${invoice.items.map(item => `${item.product} | ${item.price} | ${item.quantity} | ${item.price * item.quantity}`).join('\n')}
`)

/*invoice.total = 1000
console.log(`Los atributos del objeto se pueden modificar. Por ejemplo, el total ahora es de ${invoice.total}$`)*/
console.log(invoice.greeting())