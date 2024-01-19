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

console.log(promise.then((result) => console.log(result)).catch((error) => console.log(error)))