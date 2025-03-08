function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const outArray: number[] = [];
    let index = 0;
    arr.forEach(element => {
        outArray.push(fn(element,index));
        index++;
    });
    // for(let array of arr){
    //     outArray.push(fn(array,index));
    //     index++;
    // }
    return outArray;
};

console.info(map([1,2,3],function plusone(n) { return n + 1; }));
console.info(map([1,2,3],function plusI(n, i) { return n + i; }));
console.info(map([10,20,30],function constante() { return 42; }));


// Ejemplo 1:
// Entrada: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
//  Salida: [2,3,4]
//  Explicación:
// const newArray = map(arr, plusone); // [2,3,4]
// La función incrementa cada valor de la matriz en uno.


// Ejemplo 2:
// Entrada: arr = [1,2,3], fn = función plusI(n, i) { return n + i; }
//  Salida: [1,3,5]
//  Explicación: La función incrementa cada valor por el índice en el que reside.


// Ejemplo 3:
// Entrada: arr = [10,20,30], fn = función constante() { return 42; }
//  Salida: [42,42,42]
//  Explicación: La función siempre devuelve 42.