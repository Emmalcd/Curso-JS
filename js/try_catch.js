try{
    let num = "y";
    if(isNaN(num)){
        throw new TypeError("El caracter no es un número");
    }else{
        console.log(`La suma de este número por si mismo es de: ${num+num}`);
    }
}catch(Error){
    console.log(`La aplicación falló. ${Error}`)
}finally{
    console.log("Fin del try-catch");
}