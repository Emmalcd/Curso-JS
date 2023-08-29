try{
    let num = 5;
    if(isNaN(num)){
        throw new Error("El caracter no es un número");
    }else{
        console.log(`La suma de este número por si mismo es de: ${num+num}`);
    }
}catch(Error){
    console.log(`La aplicación falló. ${Error}`)
}finally{
    console.log("Fin del try-catch");
}