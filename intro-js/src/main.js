
import { invoices, colors, invoiceById } from './data/invoices.js';

console.log(invoices);
console.log(colors);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve(invoiceById(1));
        } catch (error) {
            reject(error);
        }
    }, 2000)
})

promise.then((json) => 
{
    console.log(json);
    console.log(`La tarea se ha terminado corectmente. La descripción es: ${json.description}`);
})
.catch((error) => console.log(error))