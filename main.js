// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.


// const numero= 101

// if(numero % 2 === 0){
//     console.log(`El numero es par`)
// } else {
//     console.log(`El numero es impar`)
// }





// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// const numeroA=1000
// const numeroB=1000

// if (numeroA > numeroB)
// {
//     console.log(`NumeroA es mayor que Numero B`)
// }

// if (numeroB > numeroA)
// {
//     console.log(`Numero B es mayor que Numero A`)}
// if (numeroA === numeroB )
// {
//     console.log(`Ambos Numeros son Iguales`)
// }







// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.



// const numero= 10

// if(numero % 5 === 0) {
//     console.log (`Es multiplo de 5`)
// }
// else{ console.log(`No Es multiplo de 5`)}







// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


// const numero= 16

// for( let i = 0; i <= numero; i++){
//     console.log (i)
// }







// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// let palabra= 30


// for(let i = 1; i <= 30 ; i++){
// console.log(`palabra ${i}`)
    
    
// }





// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(meses);

console.log(meses[6]);

for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}
console.log(meses.length);






// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".



for(let i=0; i<= 10; i++ ){
    if (i == 4) {
        continue
    }
    console.log(i)
 }



// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// let parametro= 4

// for(let i = 1; i <= 10 ; i++){

//     console.log(`numero a multiplicar: ${i}`)
//     console.log(`resultado: ${i * parametro }`)

// }