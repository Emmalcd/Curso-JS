const saludar = function(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Emma");

const despedir = nombre=>{
    console.log(`Adios ${nombre}`);
}
despedir("Emma");


const sumar = (a,b)=>a+b;

console.log(sumar(3,5));

window.nombre="Nombre padre";

{
    const persona ={
        nombre: "nombre hijo",
        imprimirNombre:()=>{ //funcion con arrow function
            console.log(this.nombre);
        },
        imprimirNombre2: function(){
            console.log(this.nombre);
        }
    }
persona.imprimirNombre();
persona.imprimirNombre2();
}