const persona={
    //atributos 
    nommbre : "Emmanuel",
    edad : 23,
    //atributos de tipo array
    pasatiempos : ["Ir a correr", "Ver videos", "Jugar fútbol"],
    //objeto dentro de un objeto
    contacto :{
        email : "correo@correo",
        tel : "7731743149",
        fb: "Emmanuel Estrada" 
    },
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nommbre}, tengo ${this.edad} años y mi facebook es: ${this.contacto.fb}`);
    }
}

//invocando la función
persona.saludar();