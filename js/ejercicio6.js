/*Programa una función para contar el número 
de veces que se repite una palabra en un texto largo
por ejemplo: 
miFuncion("hola mundo adios mundo", "mundo"); -> 2 */

//Importaciones

//Declaración de variables
let texto;
let textoIn;


//Declaración de funciones
const miFuncion=(texto,textoIn)=>{  
    if(textoIn=="") return console.warn("No ingresaste el string a buscar");
    if(texto=="") return console.error("No ingresaste un texto en el cual buscar");
    else{
        let expresionRegular = new RegExp(`${textoIn}`, "ig");
        let contador=texto.match(expresionRegular);
        console.log(`El string "${textoIn}" aparece ${contador.length} veces en el texto`);
    }
}

//Ejecución de código
texto =prompt('Ingrese el texto en el que vamos a buscar el string');
textoIn =prompt('Ingrese el string a buscar');
miFuncion(texto,textoIn);
