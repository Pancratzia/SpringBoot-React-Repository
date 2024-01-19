function sayHi(){
    console.log("Hola, JavaScript desde Vite!");
}

function sayHiInReturn(){

    const greeting = "Hola para ti también!";
    //console.log("Hola, JavaScript desde Vite!");
    return greeting;
}

function sayMyName(name = "JavaScript", respuesta = false) {

    console.log(`Un gusto. Mi nombre es ${name}! ${respuesta ? 'Es un placer conocerte.' : ''}`);
}

const question = (q) => console.log(q);
const answer = (a) => `Mi profesión es ${a}!`;


sayHi();
const greeting = sayHiInReturn();
console.log(greeting);
sayMyName("Pancratzia");
sayMyName(undefined, true);
question("¿Cual es tu profesión?");
console.log(answer("Programador Web"));