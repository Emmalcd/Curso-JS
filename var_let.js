var hola = "Hola mundo con var"; 
let hi= "Hello world with let";
var i = 1;

//usando var
console.log("*****************var*****************");
console.log(hola);
{
    var hola = "Texto dentro de un bloque de código";
    console.log(hola);
}
console.log(hola);

//usando let

console.log("*****************let*****************");
console.log(hi);
{
    let hi = "Texto dentro de un bloque de código";
    console.log(hi);
}
console.log(hi);
