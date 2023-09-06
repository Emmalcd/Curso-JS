/* Programa una función que dada una string 
te devuelva un array de textos separados
por cierto caracter
miFuncion('Hola que tal', ' ');  
-> ['Hola', 'que', 'tal']; */

//Importaciones
//Declaración de variables 
let texto;
let caracter;

//Declaración de funciones
const miFuncion=(texto, caracter)=>{
    console.log(texto.split(caracter));
}
//Ejecución de código

texto=prompt('Ingrese la cadena de texto');
caracter=prompt('Ingrese el caracter que separara la cadena');

try{
    if(caracter.length===1){
        miFuncion(texto,caracter);
    }else{
        throw new String("solo se admite un caracter para separar los elementos");
    }
}catch(mensajeError){
    console.warn(`El código no funciono por que ${mensajeError}`);
}
