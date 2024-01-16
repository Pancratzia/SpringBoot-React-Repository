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
    total: 500,
    greeting: function(){
        return 'Hola! Me llamo ' + this.client.name
    }
}

console.log(invoice)
console.log(`
FACTURA DEL COMERCIO DE JAVASCRIPT ELECTROTECH

Cliente: ${invoice.client.name} ${invoice.client.lastname}
Fecha: ${invoice.date}
Total: ${invoice.total}$

${invoice.description}
`)

invoice.total = 1000
console.log(`Los atributos del objeto se pueden modificar. Por ejemplo, el total ahora es de ${invoice.total}$`)
console.log(invoice.greeting())