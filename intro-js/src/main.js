const invoice = {
    id: 1,
    description: 'Compras de Aparatos Electronicos',
    date: new Date(),
    client: "Pancratzia LaItaliana",
    total: 500
}

console.log(invoice)
console.log(`
FACTURA DEL COMERCIO DE JAVASCRIPT ELECTROTECH

Cliente: ${invoice.client}
Fecha: ${invoice.date}
Total: ${invoice.total}$

${invoice.description}
`)

invoice.total = 1000
console.log(`Los atributos del objeto se pueden modificar. Por ejemplo, el total ahora es de ${invoice.total}$`)