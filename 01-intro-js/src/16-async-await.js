const findAllUsers = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
}

const users = await findAllUsers();
console.log(users);