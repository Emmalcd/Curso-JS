class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
        this.nickname=null;
    }
    static info(){
        console.log("Es dificil de encasillar todo lo que una persona es en unas cuantas lineas");
    }

    get getNickname(){
        return this.nickname;
    }
    set setNickname(setNickname){
        this.nickname=setNickname;
    }
}

Persona.info();

let Persona1 = new Persona("Emmanuel", 23);
Persona1.setNickname="Emmalml";

console.log(Persona1.nombre, Persona1.edad, Persona1.getNickname);
