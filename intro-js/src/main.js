const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

httpClient
    .then(response => response.json())
    .then(users => console.log(users))

console.log("Hola, JavaScript desde Vite!"); //Se ejecuta primero debido a que hay un delay en la ejecución del fetch
