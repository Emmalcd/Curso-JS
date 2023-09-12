/* Programa una función que reciba un número y evalue
si es capicúa o no (que se lee igual en un sentido que en otro),
por ejemplo: miFuncion(2002) devolvera true */

//Importaciones

//Declaración de variables 
let num;
let numAlreves;

//Declaración de funciones
const numCapicua=num=>{
    if(!num) return console.warn("No se agrego ningún número")
    num=num.toString();
    numAlreves=num.split('').reverse().join('');
    (num===numAlreves)
    ?console.log(`El número ${num} es capicúa;`) 
    :console.log(`El número ${num} NO es capicúa`); 
}

//Ejecución de código
num = prompt('Ingresa el número: ');
numCapicua(num);
