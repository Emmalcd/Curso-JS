function suma(a,b, ...c){
    let resultado;
    resultado=a+b;
    c.forEach(function(n){
        resultado+=n;
    });
    return resultado;
}
console.log(suma(1,1,1,1,1,1,1));


let arra1=[1,2,3,4];
let arra2=[5,6,7,8];
let arra3=[arra1,arra2];
let arra4=[...arra1,...arra2];

console.log(arra3);
console.log(arra4);