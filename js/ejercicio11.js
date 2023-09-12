/* Programa una función que calcule el factorial de un número
(El factorial de un entero positivo n, se define como el 
producto de todos los números enteros positivos desde 1 hasta n,
por ejemplo: miFuncion(5) devolvera 120 ) */

//Importaciones

//Declaración de variables 
let num;
let numFactorial;


//Declaración de funciones
let obtenFactorial=num=>{
    if(num==0) return console.log("El factorial de 0 es 1");
    if(!num) return console.error("No ingreso el número para calcular el factorial");
    if((num%1)!==0) return console.warn("El factorial Solo se puede calcular para un entero");
    if(num<0)return console.warn("El factorial Solo se puede calcular para un positivo");

    numFactorial=1;
    for(let i=1; i<=num;i++){
        numFactorial*=i;
    }
    console.log(`El factorial de ${num} es ${numFactorial}`);
    console.log(`${num}!=${numFactorial}`);
}

//Ejecución de código
num=parseInt(prompt("Ingresa un número"));
obtenFactorial(num);