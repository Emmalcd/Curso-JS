/* Programa una función que repita un texto 
"X" número de veces
miFuncion('Hola',3); -> Hola Hola Hola */

//Importaciones 

//Declaración de variables 
let texto;
let num;

//Declaración de funciones 

const miFuncion=(texto, num)=>{
    let aux=texto+" ";
    for(let i=1; i<num; i++){
        aux+=texto+" "; 
    }
    console.log(aux);
}

//Ejecución del código
texto = prompt("Ingresa el texto que deseas imprimir");
num = parseInt(prompt("Ingresa el número de veces que deseas imprimir"));

try {
    if(!isNaN(num)){
        miFuncion(texto,num);
    }else{
        throw new String('el segundo parámetro de la función miFuncion(texto, num) debe ser un número')
    }
} catch (error) {
    console.warn(`La app fallo pues ${error}`)
}