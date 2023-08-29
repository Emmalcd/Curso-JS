let a = 3**3; //3^3
let b;
console.log(a);

//para validar valor y tipo de dato se usa === o !==
if("1"===1){
    console.log("La expresion es completamente igual, tanto en valor como en tipo de dato");
}else{
    console.log("La expresión es diferente");
}
if(1!==1){
    console.log("El valor de la variable es diferente en tipo");
}else{
    console.log("El valor de la variable es igual en tipo");
}

//para convertir un valor de falso a verdadero o alrevés

if(!false){
    console.log("La expresion es verdadera");
}

a=5;
b=5;
console.log(`${a++} no es igual a ${++b}`);
console.log(`Aunque en la siguiente linea la varibale ya vale ${a}`);