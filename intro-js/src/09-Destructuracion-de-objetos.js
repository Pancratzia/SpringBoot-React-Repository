const user = {
    username: 'Pancratzia',
    email: 'YpY3N@example.com',
    age: 24,
    ranking: 1,
    subjects: {
        maths: 9,
        physics: 8,
        chemistry: 10
    }
}


const {username, ranking, subjects} = user;
const {maths, physics, chemistry} = subjects;

console.log(`${username} tiene la posición #${ranking} en el ranking de usuarios de GitHub`);

console.log(`También puede destructurarse subjects en maths: ${maths}, physics: ${physics}, chemistry: ${chemistry}`)