let version = "clásica";
(function(v){
    console.log(`Este console.log es cargado desde la versión ${v} de una función anónima autoejecutable`)
})(version);

version = "crockford";
((function(v){
    console.log(`Este console.log es cargado desde la versión ${v} de una función anónima autoejecutable`)
})(version));

version = "unaria";
+function(v){
    console.log(`Este console.log es cargado desde la versión ${v} de una función anónima autoejecutable`)
}(version);

version = "de Facebook";
!function(v){
    console.log(`Este console.log es cargado desde la versión ${v} de una función anónima autoejecutable`)
}(version);