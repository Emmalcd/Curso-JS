export const pi=Math.PI;

export function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function sumar(a,b){
return a+b;
}

function restar(a,b){
    return a-b;
}

export const aritmetica={
    sumar,
    restar
}