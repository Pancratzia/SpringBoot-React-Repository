
import {  findInvoiceByID } from './data/invoices.js';




findInvoiceByID(3)
.then((invoice) => console.log(invoice))
.catch((error) => console.log(error))
.finally(() => console.log('La promesa se ha terminado'))