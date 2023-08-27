nombre = prompt("Ingresa tu nombre: ");
edad = prompt("Ingresa tu edad: ");
function saludar(nombre="sin nombre", edad="sin edad"){
    console.log(`Mi nombre es: ${nombre} y mi edad es de ${edad} años.`)
}

saludar(nombre,edad);
saludar();


// seria un error invocar la funcion "fun1();" pues aun no se declara
const fun1=function(){
    console.log("Esta es una funcion expresada");
}
fun1();
