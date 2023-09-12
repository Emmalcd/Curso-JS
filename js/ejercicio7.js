/* Programa una función que valide si una palabra
o frase dada es un palindromo (que se lee igual en un sentido
que en otro) por ejemplo: miFuncion("Salas"); -> True */

//Importaciones

//Declaración de variables
let texto;
let texto1;
let texto2=[];
let texto3=[];
let i=0;


//Declaración de funciones
let miFuncion=texto=>{
    texto1=texto.toLowerCase();
    texto1=texto1.replaceAll(" ", "");;
    for(const caracter of texto1){
        texto2[i]=caracter;
        i++;
    }
    i-=1;
    for(const caracter of texto2){
        texto3[i]=caracter;
        i--;
    }
    texto2=texto2.toString();
    texto3=texto3.toString();
    (texto2==texto3)
    ?console.log(`La palabra o frase ${texto} es palindroma`)
    :console.log(`La palabra o frase ${texto} NO es palindroma`);
}

texto=prompt("Ingresa la palabra o frase: ");
miFuncion(texto);


