/*Programa una función que cuente el número 
de caracteres de una cadena de texto por ej.
miFuncion("Hola mundo"); -> 10 */
const miFuncion=texto=>console.log(texto.length);

let texto;
texto = prompt("Ingresa el texto");
texto = 33;

try{
    if(typeof texto == 'string'){
        miFuncion(texto);
    }else{
        throw new Error("el parámetro no es una cadena de texto")
    }
}catch(error){
    console.error(`Se produjo el siguiente ${error}`);
}
