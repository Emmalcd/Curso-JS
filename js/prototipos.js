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



