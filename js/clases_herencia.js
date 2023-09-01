class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    presentarse(amigo){
        console.log(`hola ${amigo} yo soy ${this.nombre}`);
    }
}

let Emmanuel = new Persona("Emma", 23);

Emmanuel.presentarse("Luis");

class Estudiante extends Persona{
    constructor(nombre, edad, escuela){
        super(nombre, edad);
        this.escuela=escuela;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y asisto a la escuela ${this.escuela}`);
    }
}

let Daf = new Estudiante("Dafne", 21, "UPP");
Daf.saludar();
Daf.presentarse("Emma");