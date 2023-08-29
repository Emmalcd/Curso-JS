let a=1; 

while(a<11){
    console.log(a);
    a++;
}

let b=11;
do{
    console.log(b);
}while(b<10);

for(let c=10; c<=100; c+=10){
    console.log(c);
}

const Persona = {
    Nombre: "Emma",
    Apellido: "De La Cruz",
    Edad: 23,
    Escuela: "IPN"
}

for(const propiedad in Persona){
    console.log(`La propiedad es "${propiedad}" y su valor es: ${Persona[propiedad]}`)
}

let saludo = "Hola, mi nombre es Emmanuel";
for(const caracter of saludo){
    console.log(caracter);
}

let colores = ["azul", "verde", "amarillo", "rojo", "café"];
for(const color of colores){
    console.log(`color: ${color}`);
}

for(let i=0; i<colores.length;i++){
    console.log(colores[i]);
}