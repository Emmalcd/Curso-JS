let edad = 17;

if(edad>=18){
    console.log(`Esta persona es mayor de edad en México`);
}else{
    console.log(`Esta persona es menor de edad en México`);
}

console.log("#######Operador Ternario##########");
(edad>=18)
?console.log("Mayor")
:console.log("Menor");

console.log("#######if-else if-else##########");
let hora=21;

if(hora>=6&&hora<=12){
    console.log("Buenos días");
}else if(hora>12&&hora<=18){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}
console.log("############switch####################");
let dia=5;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Ese día de la semana no existe");
        break;
}