console.log("Hola, JavaScript desde Vite!");

//Variables

//var name = "Laura"; No se recomienda usarla 

let nombre = "Pancratzia";
const PI = 3.1416;

console.log(`Hola ${nombre}!... Sabías que el valor de PI es: ${PI}?`);

nombre = "Laura";

console.log(`Ahora el valor de la variable nombre es ${nombre}, pero PI siempre será ${PI}`);

const number = '1';
let apellido = '';

if(1 == number){
    let apellido = "Ortega";
    console.log(apellido);
}

apellido = "Ortega";

console.log(`El valor de la variable apellido no puede imprimirse fuera del if, debido a que fue declarada dentro del if y solo existe dentro de ese bloque. Sin embargo, el valor de la variable apellido que fue declarada fuera del if es ${apellido}. Ambas pueden llamarse 'apellido' debido a que solo existen dentro de sus bloques`);

