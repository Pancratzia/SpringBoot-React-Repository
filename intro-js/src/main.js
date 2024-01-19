const findAllUsers = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    if(users.length > 0){

        const ul = document.createElement("ul");
        
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    }


}

findAllUsers();