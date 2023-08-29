let numeros = [0,1,2,3,4,5,6];

let cero = numeros[0];
let uno = numeros[1];
let dos = numeros[2];
let tres = numeros[3];
let cuatro = numeros[4];
let cinco = numeros[5];
let seis = numeros[6];

console.log(cero, uno, dos, tres, cuatro, cinco, seis);

let [c,o,t,th,f,fi,s]=numeros;
console.log(c,o,t,th,f,fi,s);

console.log('-------------------------');
let persona ={
    nombre:"Emma",
    edad:23,
    escuela:"IPN",
    e:3
}

let{nombre,edad,escuela}=persona;
console.log(nombre,edad,escuela);