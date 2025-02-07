// function romanToInt(s: string): number {
//     let integer:number = 0;
//     let integerComparator:number = 0;
//     let status:number = 0;
//     let statusNow:number = 0;
//     let count:number = 0;
//     //                  ---- 7 -----
//     for(let i = 0; i < s.length; i++){// M C M X C I V
//         switch(s[i]){                 // 0 1 2 3 4 5 6
//             // I section.
//             case "I":
//                 integerComparator = 1;
//                 if( integer >= integerComparator || integer === 0){
//                     status += integerComparator;
//                 }             
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // V section.
//             case "V":
//                 integerComparator = 5;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // X section.
//             case "X":
//                 integerComparator = 10;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // L section.
//             case "L":
//                 integerComparator = 50;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // C section.
//             case "C":
//                 integerComparator = 100;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // D section.
//             case "D":
//                 integerComparator = 500;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break;
//             // M section.
//             case "M":
//                 integerComparator = 1000;
//                 status = integer >= integerComparator || integer === 0? integer += integerComparator:integer = integerComparator - integer;
//                 integer = status
//                 break; // 
               
//         }
//     }
//     return integer;
// };
function romanToInt(s: string): number {
    const romanNumber = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    let integer:number = 0;
    let status:number = 2000;
    for(let i = 0; i < s.length; i++){
        if(status < romanNumber[s[i]]){ // MCMXCIV
            integer += romanNumber[s[i]] - (status *2);
        }else{
            integer += romanNumber[s[i]];// 1100
        }
        status = romanNumber[s[i]];// 100
    }
    return integer;
}

console.log(`El resultado es ${romanToInt("MCMXCIV")}.`);// 1994.
console.log(`El resultado es ${romanToInt("LVIII")}.`); // 58.
console.log(`El resultado es ${romanToInt("III")}.`);// 3
console.log(`El resultado es ${romanToInt("MC")}.`);// 1100.
console.log(`El resultado es ${romanToInt("DLC")}.`);// 1600
console.log(`El resultado es ${romanToInt("VDC")}.`);// 695