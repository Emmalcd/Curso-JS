function Persona(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
}

Persona.prototype.Saludar=function(){
    console.log(`Hola ${this.nombre}`);
}


let Emma = new Persona("Emmanuel", 23);
console.log(Emma);

Emma.Saludar();

function Estudiante(nombre, edad, escuela){
    this.super=Persona;
    this.super(nombre, edad);
    this.escuela=escuela;
}

Estudiante.prototype=new Persona();
Estudiante.prototype.constructor=Estudiante;

Estudiante.prototype.estudiar=function(){
    console.log(`El estudiante ${this.nombre} de ${this.edad} años estudia en ${this.escuela}`);
}

let Dany = new Estudiante("Juan Daniel", 26, "UAM");

Dany.estudiar();

