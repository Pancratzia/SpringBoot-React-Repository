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


//console.log(invoice.company.name); //Undefined pero da error en la consola
console.log(invoice.company?.name); //Undefined y no da error

if(invoice.company?.name){
    console.log(invoice.company.name);
}else{
    console.log('No hay nombre de la empresa');
}

console.log(invoice.company?.address?.stret);