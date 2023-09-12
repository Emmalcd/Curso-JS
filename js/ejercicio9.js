/* Programa una función que obtenga un número aleatorío 
entre 501 y 600*/

//Importaciones 

//Declaración de variables
let num;

//Declaración de funciones
let numRandom=()=>{
    num=0;
    while((num<500)||(num>600)){
        num=Math.random(num)*1000;
    }
    num=Math.round(num);
    console.log(`El valor aleatorio es: ${num}`);
}

//Ejecución del código
numRandom();
