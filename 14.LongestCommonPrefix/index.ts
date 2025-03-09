function longestCommonPrefix(strs: string[]): string {
    let logPrefix = new Map<number, string>();
    let maxim:number = 0;
    let index = 0;

    for(let a = 0 ; a < strs.length; a++){
        if(!maxim){
            maxim = strs[a].length;
            index = a;
        }else if(maxim < strs[a].length){
            maxim = strs[a].length;
            index = a;
        }
    };


    
    return "";
};


console.info(longestCommonPrefix(["flower","flowssss","flight","qsad","ertyuiopoiuytre"]));
// console.info(longestCommonPrefix(["dog","racecar","car"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino"]));
// console.info(longestCommonPrefix(["flow","cuboy","nino","santiago"]));