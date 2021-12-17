/*
Arreglos */

const comidas = ["pozole", "quesadillas", "tacos"]

/* length*/
console.log(comidas.length);

/* 
push- agrega al final
pop- quita al final
unshift- agrega al inicio 
shift- quita un elemento del incio 
*/

comidas. push ("Torta");
console.log(comidas);

comidas.unshift("Pancita")
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*forEach - nos ayuda a realizar una accion dentro
de nuestro arreglo de forma automaticas */

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
comidas.forEach(function(elementos){
    console.log(elementos)
});

const numeros = [1, 4, 7, 8];
console.log(numeros);
numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
});

/*ejercicio*/

const arr = [];

function suma (num){
    let sumNum = num + 1;
    return arr.push (sumNum);
}

suma (3);
suma (5);
suma (6);
suma (2);
suma (78);

console.log(arr);

