console.log(console);

console.error("Esto es un error");
console.warn("Esto es un warn");

console.group('Inicio del group');
console.log('Elemento 1');
console.log('Elemento 2');
console.log('Elemento 3');
console.log('Elemento 4');
console.log('Elemento 5');
console.groupEnd();

console.groupCollapsed('Inicio del group2');
console.log('Elemento 1');
console.log('Elemento 2');
console.log('Elemento 3');
console.log('Elemento 4');
console.log('Elemento 5');
console.groupEnd();