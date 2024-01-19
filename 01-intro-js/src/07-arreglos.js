const products = [
    'Sillas', 'Escritorios', 'Mesas'
]

console.log(products);

products.push('Organizadores');

console.log(products);

products.forEach((product, i) => {
    console.log(`${i + 1}. ${product}`);
})

for(const product of products){
    console.log(product);
}

for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}