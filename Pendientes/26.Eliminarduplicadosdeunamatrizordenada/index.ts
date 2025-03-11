// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=problem-list-v2&envId=array






// Dada una matriz de números enteros numsordenada en orden no decreciente , elimine los duplicados en el lugar de modo que cada elemento único aparezca solo una vez . El orden relativo de los elementos debe mantenerse igual . Luego, devuelva la cantidad de elementos únicos ennums .

// Tenga en cuenta la cantidad de elementos únicos de numsto be k, para ser aceptado, debe hacer lo siguiente:

// Cambie la matriz numsde modo que los primeros kelementos de numscontengan los elementos únicos en el orden en que estaban presentes numsinicialmente. Los elementos restantes de numsno son tan importantes como el tamaño de nums.
// Devolver k.
// Juez de aduanas:

// El juez probará tu solución con el siguiente código:

// int[] nums = [...]; // Matriz de entrada
// int[] expectedNums = [...]; // La respuesta esperada con la longitud correcta

// int k = removeDuplicates(nums); // Llama a su implementación

// afirmar k == expectedNums.length;
// para (int i = 0; i < k; i++) {
//     afirmar nums[i] == expectedNums[i];
// }
// Si todas las afirmaciones pasan, entonces su solución será aceptada .

 

// Ejemplo 1:

// Entrada: nums = [1,1,2]
//  Salida: 2, nums = [1,2,_]
//  Explicación: Su función debe devolver k = 2, con los dos primeros elementos de nums siendo 1 y 2 respectivamente.
// No importa lo que dejes más allá de la k devuelta (por eso son guiones bajos).
// Ejemplo 2:

// Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
//  Salida: 5, nums = [0,1,2,3,4,_,_,_,_,_]
//  Explicación: Su función debe devolver k = 5, con los primeros cinco elementos de nums siendo 0, 1, 2, 3 y 4 respectivamente.
// No importa lo que dejes más allá de la k devuelta (por eso son guiones bajos).