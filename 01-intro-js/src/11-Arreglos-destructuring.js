const users = ["Laura", "Arthuro", "María", "Juan", "Tiffany", "Carlos", "Javier", "Teresa"];

const [firstUser, secondUser, , , , , , lastUser] = users;

console.log(`${firstUser} ${secondUser} ${lastUser}`);

const [first, ...others] = users;

console.log("El primer usuario es: " + first + " y los otros son: " + others);