/* Programa una funcion que que invierta las palabras
de una cadena de texto, por ejemplo:
miFuncion("Hola mundo"); -> "odnuM aloH" */

//Importaciones

//Declaración de variables
let texto;

//Declaración de funciones
let miFuncion =texto=>{
    let texto2=[];
    let texto3='';
    let i=1,j=1;
    if(!texto) return console.warn("No se ingreso texto en la función");
    for(const caracter of texto){
        texto2[texto.length-i]=caracter;
        i++;
    }
    for(const caracter of texto2){
        texto3+=caracter;
    }
    console.log(texto3);
}
//Ejecución de código

texto=prompt('Ingresa el string que deseas voltear');

miFuncion(texto);
