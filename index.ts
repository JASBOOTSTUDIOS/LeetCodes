function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const outArray: number[] = [];
    for(let i = 0; i < arr.length; i++ ){
        outArray.push(fn(arr[i],i));   
    };
    return outArray;
};

console.info(map([1,2,3],function plusone(n) { return n + 1; }));
console.info(map([1,2,3],function plusI(n, i) { return n + i; }));
console.info(map([10,20,30],function constante() { return 42; }));