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


const invoice2 = invoice; // estos objetos son iguales

const invoice3 = { ...invoice }; // estos objetos no son iguales

console.log(invoice === invoice2); // true
console.log(invoice === invoice3); // false