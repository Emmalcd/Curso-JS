/* Programa una función que elimine cierto patrón
de caracteres de un texto dado, por ejemplo:
miFuncion("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")
->"1,2,3,4,5" */

//Importación

//Declaración de variables
let cadena1;
let cadena2;
let cadena3;

//Declaración de funciones
let miFuncion=(cadena1,cadena2)=>{ 
    if(cadena1=='') return console.error("No hay cadena en donde buscar");
    if(cadena2=='') return console.warn("No agregaste un caracter a eliminar");
    cadena3=cadena1.replaceAll(cadena2,"");
    console.log(cadena3);
}


//Ejecución del código
cadena1=prompt("Ingrese la string completa: ");
cadena2=prompt("Ingrese la string a eliminar: ");
miFuncion(cadena1,cadena2);

