/* Programa una función que te devuelva el texto
recortado segun el número de caracteres indicados
miFuncion("Hola mundo", 4); -> "Hola" */

//Importaciones y exportaciones 

//Declaracion de variables
let texto;
let num;

//Declaracion de funciones
const miFuncion=(texto, numero)=>{
    console.log(texto.slice(0,numero));
}

//Ejecución de código

try{
    texto = prompt("Ingrese el texto");
    num = parseInt(prompt("Ingrese el número de caracteres que desea ver del texto agregado anteriormente"));
    if(num<=texto.length){
        miFuncion(texto,num);
    }else{
        throw new Error("La cantidad de caracteres que pides es más grande que la cadena misma");
    }
}catch(error){
        console.warn(`El programa fallo por el ${error}`);
}